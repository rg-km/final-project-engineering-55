package repository

import (
	"database/sql"
)

type JadwalRepository struct {
	db *sql.DB
}

func NewJadwalRepository(db *sql.DB) *JadwalRepository {
	return &JadwalRepository{db: db}
}

func (j *JadwalRepository) InsertJadwal(hari string, date int64, jam int64) error {
	_, err := j.db.Exec(`INSERT INTO jadwal (hari, date, jam) VALUES (?, ?,? )`, hari, date, jam)
	if err != nil {
		return err
	}
	return nil
}

func (j *JadwalRepository) FetchJadwal() ([]Jadwal, error) {
	rows, err := j.db.Query("SELECT * FROM jadwal")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var jadwal []Jadwal
	for rows.Next() {
		var jdl Jadwal
		err := rows.Scan(&jdl.ID, &jdl.Hari, &jdl.Date, &jdl.Jam)
		if err != nil {
			return nil, err
		}
		jadwal = append(jadwal, jdl)
	}

	return jadwal, nil
}
