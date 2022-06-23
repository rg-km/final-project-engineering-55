package repository

import (
	"database/sql"
)

type SoalKuisRepository struct {
	db *sql.DB
}

func NewSoalKuisRepository(db *sql.DB) *SoalKuisRepository {
	return &SoalKuisRepository{db: db}
}

func (s *SoalKuisRepository) InsertSoalKuis(nomor_soal string, pertanyaan string, jawaban string, kuis_id int64) error {
	_, err := s.db.Exec(`INSERT INTO soalkuis (nomor_soal, pertanyaan, jawaban, kuis_id) VALUES (?, ?, ?, ?)`, nomor_soal, pertanyaan, jawaban, kuis_id)
	if err != nil {
		return err
	}
	return nil
}

func (s *SoalKuisRepository) FetchSoalKuis() ([]SoalKuis, error) {
	sqlStmt := `SELECT s.soal_kuis, s.pertanyaan, s.jawaban, s.kuis_id, k.kode_kuis, k.judul_kuis FROM s  
	INNER JOIN kuis k ON s.kuis_id = k.id`

	rows, err := s.db.Query(sqlStmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var soalkuis []SoalKuis
	for rows.Next() {
		var soal SoalKuis
		err := rows.Scan(&soal.ID, &soal.NomorSoal, &soal.Pertanyaan, &soal.Jawaban, &soal.KodeKuis, &soal.JudulKuis)
		if err != nil {
			return nil, err
		}
		soalkuis = append(soalkuis, soal)
	}

	return soalkuis, nil
}
