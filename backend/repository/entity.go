package repository

import "time"

type Users struct {
	ID       int64  `db:"id"`
	Username string `db:"username"`
	Email    string `db:"email"`
	Password string `db:"password"`
	Role     string `db:"role"`
	Loggedin bool   `db:"loggedin"`
	Token    string `db:"token"`
}

type Kelas struct {
	ID        int64  `db:"id"`
	KodeKelas string `db:"kode_kelas"`
	NamaKelas string `db:"nama_kelas"`
	UsersID   int64  `db:"users_id"`
}

type Materi struct {
	ID          int64  `db:"id"`
	KodeMateri  string `db:"kode_materi"`
	JudulMateri string `db:"judul_materi"`
}

type Kuis struct {
	ID        int64  `db:"id"`
	KodeKuis  string `db:"kode_kuis"`
	JudulKuis string `db:"judul_materi"`
}

type soalkuis struct {
	ID         int64  `db: "id"`
	NomorSoal  string `db:"nomor_soal"`
	Pertanyaan string `db:"pertanyaan"`
	Jawaban    string `db:"jawaban"`
	KuisId     int64  `db:"kuis_id"`
}

type Jadwal struct {
	ID   int64     `db:"id"`
	Hari string    `db:"hari"`
	Date time.Time `db:"date"`
	Jam  time.Time `db:"Jam"`
}

type JadwalMateri struct {
	ID       int64 `db:"id"`
	MateriId int64 `db:"materi_id"`
	JadwalId int64 `db:"jadwal_id"`
}

type JadwalKuis struct {
	ID       int64 `db:"id"`
	KuisId   int64 `db:"kuis_id"`
	JadwalId int64 `db:"jadwal_id"`
}

type Tugas struct {
	ID         int64  `db:"id"`
	JudulTugas int64  `db:"judul_tugas"`
	UsersID    int64  `db:"users_id"`
	UserName   string `db:"username"`
}
