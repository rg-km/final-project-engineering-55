package main

import (
	"database/sql"

	"../api"
	"../repository"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "backend/vlab.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	kelasRepo := repository.NewKelasRepository(db)
	materiRepo := repository.NewMateriRepository(db)
	kuisRepo := repository.NewKuisRepository(db)
	jadwalRepo := repository.NewJadwalRepository(db)

	mainAPI := api.NewAPI(*usersRepo, *kelasRepo, *materiRepo, *kuisRepo, *jadwalRepo)
	mainAPI.Start()

}
