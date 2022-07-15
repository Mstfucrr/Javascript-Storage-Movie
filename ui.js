class UI {
    constructor() {
    }
    addFilmToUI(newFilm) {
        /*
        <tr>
            <td><img src="" class="img-fluid img-thumbnail"></td>
            <td></td>
            <td></td>
            <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
        </tr>
        */
        const filmList = document.getElementById('films');

        filmList.innerHTML += "<tr>" +
            "<td style = 'width:70px'><img src=" + newFilm.url + " class='img-fluid img-thumbnail'></td>" +
            '<td>' + newFilm.title + '</td>' +
            '<td>' + newFilm.director + '</td>' +
            '<td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>' +
            '</tr>';


    }
    clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";

    }
    displayMessages(message, type) {
        const cardBody = document.querySelector(".card-body");
        const div = document.createElement("div");
        div.className = "alert alert-" + type;
        div.textContent = message;
        cardBody.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 2000);

    }
    DeleteFilmFromUI(film) {
        film.remove();
    }
    loadAllMovies() {
        const storages = new Storages();
        const Movies = storages.getMoviesFromStorage();
        Movies.forEach((movie) => {
            this.addFilmToUI(movie);
        });


    }
}







