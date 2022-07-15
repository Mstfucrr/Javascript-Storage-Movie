class Storages {
    constructor() {
    }
    getMoviesFromStorage() {
        let Movies
        if (localStorage.getItem("Movies") === null) {
            Movies = []
        } else {
            Movies = JSON.parse(localStorage.getItem("Movies"))
        }

        return Movies
    }
    addFilmToStorages(newFilm) {
        const Movies = this.getMoviesFromStorage()
        Movies.push(newFilm)
        localStorage.setItem("Movies", JSON.stringify(Movies))
    }
    deleteFilmFromStorages(filmTitle) {
        const Movies = this.getMoviesFromStorage()
        Movies.forEach((movie, index) => {
            if (movie.title === filmTitle) {
                Movies.splice(index, 1)
            }
        })
        localStorage.setItem("Movies", JSON.stringify(Movies))
    }
}




