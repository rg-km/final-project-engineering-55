package repository

import (
	"database/sql"
)

type TugasRepository struct {
	db *sql.DB
}

func NewTugasRepository(db *sql.DB) *TugasRepository {
	return &TugasRepository{db: db}
}

func (t *TugasRepository) InsertTugas(judul_tugas string, users_id int64) error {
	_, err := t.db.Exec(`INSERT INTO Tugas (judul_tugas, users_id) VALUES (?, ?)`, judul_tugas, users_id)
	if err != nil {
		return err
	}
	return nil
}

func (t *TugasRepository) FetchTugas() ([]Tugas, error) {
	sqlStmt := `SELECT t.judul_tugas, u.username FROM t  
	INNER JOIN users u ON t.users_id = u.id`

	rows, err := t.db.Query(sqlStmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var tugas []Tugas
	for rows.Next() {
		var t Tugas
		err := rows.Scan(&t.ID, &t.UserName)
		if err != nil {
			return nil, err
		}
		tugas = append(tugas, t)
	}

	return tugas, nil
}
