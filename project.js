const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const tbody = document.querySelector("#films")
const secondCardBody = document.querySelectorAll(".card-body")[1]
// Ui başlatma

const ui = new UI();
const storage = new Storages();


eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    ui.loadAllMovies()
    tbody.addEventListener("click", DeleteFilm);
    secondCardBody.addEventListener("click", AllDeleteFilm);
    
}

function addFilm(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if (title === "" || director === "" || url === "") {
        ui.displayMessages("Lütfen tüm alanları doldurun", "danger")
    }
    else {
        // Yeni Film
        const newFilm = new Film(title, director, url)
        ui.addFilmToUI(newFilm); // Film ekleme
        storage.addFilmToStorages(newFilm)
        ui.displayMessages("Film Başarıyla Eklendi", "success")
    }
    ui.clearInputs(titleElement, directorElement, urlElement);
    e.preventDefault();
}

function DeleteFilm(e) {
    if (e.target.id === "delete-film") {
        const film = e.target.parentElement.parentElement
        const filmTitle = film.childNodes[1].textContent
        ui.DeleteFilmFromUI(film)
        storage.deleteFilmFromStorages(filmTitle)
    };
}

function AllDeleteFilm(e) {
    if (e.target.id === "clear-films") {
        if (confirm("Tümünü silmek istediğinize eminmisiniz")) {
            // todolist.innerHTML = ""  YAVAŞ
            while (tbody.firstElementChild != null) {
                tbody.removeChild(tbody.firstElementChild)
            }
            localStorage.clear()
        }
    }

}