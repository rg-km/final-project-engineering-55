package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "backend/db/vlab.db")
	if err != nil {
		panic(err)
	}
	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
	    id integer not null primary key AUTOINCREMENT,
	    username varchar(255) not null,
		email varchar(255) not null,
	    password varchar(255) not null,
	    role varchar(255) not null,
		loggedin boolean not null

	);

	CREATE TABLE IF NOT EXISTS kelas (
		id integer not null primary key AUTOINCREMENT,
		kode_kelas char(5) not null,
		nama_kelas varchar(50) not null
	);

	

	CREATE TABLE IF NOT EXISTS materi (
		id integer not null primary key AUTOINCREMENT,
		kode_materi char(5) not null,
		judul_materi varchar(255) not null
	);

	CREATE TABLE IF NOT EXISTS kuis (
		id integer not null primary key AUTOINCREMENT,
		judul_kuis varchar(255) not null,
		jml_benar integer,
		jml_salah integer,
		skor integer,
		materi_id integer not null,
		users_id integer not null,
		FOREIGN KEY (materi_id) REFERENCES materi(id),
		FOREIGN KEY (users_id) REFERENCES users(id)

	);

	CREATE TABLE IF NOT EXISTS soalkuis(
		id integer not null primary key AUTOINCREMENT,
		nomor_soal varchar(20) not null,
		pertanyaan varchar(255) not null,
		jawaban varchar(255) not null,
		kuis_id integer not null,
		FOREIGN KEY (kuis_id) REFERENCES kuis(id)
	);

	CREATE TABLE IF NOT EXISTS kuismateri (
		id integer not null primary key AUTOINCREMENT,
		kuis_id integer not null,
		materi_id integer not null,
		FOREIGN KEY (kuis_id) REFERENCES kuis(id),
		FOREIGN KEY (materi_id) REFERENCES materi(id)
	);

	CREATE TABLE IF NOT EXISTS jadwal (
		id integer not null primary key AUTOINCREMENT,
		hari varchar(20),
		date DATE not null
	);

	CREATE TABLE IF NOT EXISTS jadwalmateri (
		id integer not null primary key AUTOINCREMENT,
		materi_id integer not null,
		jadwal_id integer not null,
		FOREIGN KEY (materi_id) REFERENCES materi(id),
		FOREIGN KEY (jadwal_id) REFERENCES jadwal(id)
	);

	CREATE TABLE IF NOT EXISTS jadwalkuis (
		id integer not null primary key AUTOINCREMENT,
		kuis_id integer not null,
		jadwal_id integer not null,
		FOREIGN KEY (kuis_id) REFERENCES kuis(id),
		FOREIGN KEY (jadwal_id) REFERENCES jadwal(id)
	);`)

	if err != nil {
		panic(err)
	}

}
