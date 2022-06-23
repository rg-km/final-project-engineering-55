package repository

import (
	"database/sql"
)

type KelasRepository struct {
	db *sql.DB
}

func NewKelasRepository(db *sql.DB) *KelasRepository {
	return &KelasRepository{db: db}
}

func (k *KelasRepository) InsertKelas(kode_kelas string, nama_kelas string, users_id int64) error {
	_, err := k.db.Exec(`INSERT INTO kelas (kode_kelas, nama_kelas, users_id) VALUES (?, ?,?, )`, kode_kelas, nama_kelas, users_id)
	if err != nil {
		return err
	}
	return nil
}

func (k *KelasRepository) FetchKelasById(id int64) (Kelas, error) {
	var kelas Kelas
	err := k.db.QueryRow("SELECT * FROM kelas WHERE id = ?", id).Scan(&kelas.ID, &kelas.KodeKelas, &kelas.NamaKelas, &kelas.UsersID)
	if err != nil {
		return kelas, nil
	}
	return kelas, err
}

func (k *KelasRepository) FetchKelas() ([]Kelas, error) {
	rows, err := k.db.Query("SELECT * FROM kelas")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var kelas []Kelas
	for rows.Next() {
		var kls Kelas
		err := rows.Scan(&kls.ID, &kls.KodeKelas, &kls.NamaKelas, &kls.UsersID)
		if err != nil {
			return nil, err
		}
		kelas = append(kelas, kls)
	}

	return kelas, nil
}
