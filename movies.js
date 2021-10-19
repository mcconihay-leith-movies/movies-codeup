const moviesAPI = 'https://hilarious-tame-jay.glitch.me/movies';

// Loading page icon
$(window).on('load', function () {
	$('#loading').hide();
})

fetch(moviesAPI)
	.then((response) => response.json())
	.then((jsonData) => console.log(jsonData))

// Render Movie cards
fetch(moviesAPI)
	.then((callForJson) => {
		return callForJson.json();
	}).then((movies) => {
	for (let i = 0; i <= 13; i++) {
		$("#movie").append(
			"<div class='card shadow-box col-lg-3 m-2 text-center card-bg text-light'>"
			+ "<div class='card-header'>" + movies[i].title + "</div>"
			+ "<img class='img-fluid'  src='" + movies[i].poster + "' style='height: 20em; width: 15em' alt='Movie Poster'>"
			+ "<div class='card-body'><p>" + "Rating: " + movies[i].rating + "</p>"
			+ "<p>" + "Genre: " + movies[i].genre + "</p></div>"
			+ "<div class='card-footer'><div class='delete btn btn-light btn-outline-secondary m-1' data-id='" + movies[i].id + "'>" + "<i class=\"bi bi-trash\"></i>" + "</div>"
			+ "<div class='edit btn btn-light btn-outline-secondary m-1' data-index='" + i + "'>" + "<i class=\"bi bi-tools\"></i>" + "</div></div></div>")

		$('.edit').click(function (e) {
			const index = $(this).data('index');
			e.preventDefault()

			$('#editTitle').val(movies[index].title)
			$('#editGenre').val(movies[index].genre)
			$('#editRating').val(movies[index].rating)
			$('#idHidden').val(movies[index].id)
		})

		$('.delete').click(function () {
			console.log("delete listener")
			const id = $(this).data('id');
			deleteMovie(id)
		});
	}
});

// Edit Movie
function editMovie(movie) {
	let options = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(movie)
	}
	console.log(`${moviesAPI}/${movie.id}`)
	return fetch(`${moviesAPI}/${movie.id}`, options)
		.then((callJson) => callJson.json())
}

// Delete Movie
function deleteMovie(id) {
	let options = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	}
	fetch(`${moviesAPI}/${id}`, options)
		.then((callJson) => console.log("Delete movie" + id, callJson))
}

// Create Movie
function addMovie(movie) {
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(movie)
	}
	return fetch(`${moviesAPI}`, options)
		.then((callJson) => callJson.json())
		.then((parsedData) => console.log(parsedData))

}

// Add Movie button event listener
$('#submitNewMovie').click(function (e) {
	e.preventDefault()
	let newTitle = $('#newTitle').val()
	let newGenre = $('#newGenre').val()
	let newRating = $('#newRating').val()

	let newMovieObj = {
		title: newTitle,
		rating: newRating,
		genre: newGenre,
		poster: "https://m.media-amazon.com/images/I/51+j8eMdK2L._AC_SL1000_.jpg"
	}
	return addMovie(newMovieObj)
})

// Edit Movie button event listener
$('#modMovie').click(function (e) {
	e.preventDefault()

	let editTitle = $('#editTitle').val()
	console.log(editTitle);
	let editGenre = $('#editGenre').val()
	let editRating = $('#editRating').val()
	let editId = $("#idHidden").val()

	let editMovieObj = {
		title: editTitle,
		rating: editRating,
		genre: editGenre,
		id: editId
	}
	console.log(editMovieObj);

	return editMovie(editMovieObj)
})