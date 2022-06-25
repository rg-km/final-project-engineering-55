package api

import (
	"backend/backend/repository"
	"fmt"
	"net/http"
)

type API struct {
	usersRepo    repository.UserRepository
	jadwalRepo   repository.JadwalRepository
	kelasRepo    repository.KelasRepository
	kuisRepo     repository.KuisRepository
	materiRepo   repository.MateriRepository
	soalkuisRepo repository.SoalKuisRepository
	tugasRepo    repository.TugasRepository
	mux          *http.ServeMux
}

func NewAPI(userRepo repository.UserRepository) API {
	mux := http.NewServeMux()
	api := API {
		usersRepo, jadwalRepo, kelasRepo, kuisRepo, materiRepo, soalkuisRepo, tugasRepo, mux
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))

	// API with AuthMiddleware:
	
	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}
