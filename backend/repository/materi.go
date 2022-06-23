package repository

import (
	"database/sql"
)

type MateriRepository struct {
	db *sql.DB
}

func NewMateriRepository(db *sql.DB) *MateriRepository {
	return &MateriRepository{db: db}
}

func (m *MateriRepository) InsertMateri(kode_materi string, judul_materi string) error {
	_, err := m.db.Exec(`INSERT INTO materi (kode_materi, judul_materi) VALUES (?, ? )`, kode_materi, judul_materi)
	if err != nil {
		return err
	}
	return nil
}

func (m *KelasRepository) FetchMateriById(id int64) (Materi, error) {
	var materi Materi
	err := m.db.QueryRow("SELECT * FROM materi WHERE id = ?", id).Scan(&materi.KodeMateri, &materi.JudulMateri)
	if err != nil {
		return materi, nil
	}
	return materi, err
}

func (m *MateriRepository) FetchMateri() ([]Materi, error) {
	rows, err := m.db.Query("SELECT * FROM Materi")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var materi []Materi
	for rows.Next() {
		var mtr Materi
		err := rows.Scan(&mtr.ID, &mtr.KodeMateri, &mtr.JudulMateri)
		if err != nil {
			return nil, err
		}
		materi = append(materi, mtr)
	}

	return materi, nil
}
