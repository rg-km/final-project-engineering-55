package repository

import (
	"database/sql"
)

type KuisRepository struct {
	db *sql.DB
}

func NewKuisRepository(db *sql.DB) *KuisRepository {
	return &KuisRepository{db: db}
}

func (k *KuisRepository) InsertKuis(kode_kuis string, judul_kuis string) error {
	_, err := k.db.Exec(`INSERT INTO kuis (kode_kuis, judul_kuis,) VALUES (?, ?)`, kode_kuis, judul_kuis)
	if err != nil {
		return err
	}
	return nil
}

func (k *KuisRepository) FetchKuisById(id int64) (Kuis, error) {
	var kuis Kuis
	err := k.db.QueryRow("SELECT * FROM kuis WHERE id = ?", id).Scan(&kuis.ID, &kuis.KodeKuis, &kuis.JudulKuis)
	if err != nil {
		return kuis, nil
	}
	return kuis, err
}

func (k *KuisRepository) FetchKuiss() ([]Kuis, error) {
	rows, err := k.db.Query("SELECT * FROM kuis")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var kuis []Kuis
	for rows.Next() {
		var kui Kuis
		err := rows.Scan(&kui.ID, &kui.KodeKuis, &kui.JudulKuis)
		if err != nil {
			return nil, err
		}
		kuis = append(kuis, kui)
	}

	return kuis, nil
}
