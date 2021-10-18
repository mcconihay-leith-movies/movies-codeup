// Loading page
    $(window).on('load', function () {
    $('#loading').hide();
})



const moviesAPI = 'https://hilarious-tame-jay.glitch.me/movies';
let moviesClone = []


fetch(moviesAPI)
    .then((response)=>response.json())
    .then((jsonData)=> console.log(jsonData))





//Get all
function getMovies(){
    return fetch(moviesAPI).then((callJson)=>callJson.json());
}


//Display data

fetch(moviesAPI)
    .then((callForJson)=>{
        return callForJson.json();
    }).then((movies)=>{ moviesClone = movies
    console.log(movies[0])
    for(var i = 0; i <= 13; i++ ) {
        $("#movie").append(
            "<div class='card col-lg-3 m-2 text-center'><h2 class='card-title'>" + movies[i].title + "</h2>"
            + "<img class='img-fluid'  src='" + movies[i].poster + "'>"
            + "<p>" + "Rating: " + movies[i].rating + "</p>"
            + "<p>" + "Genre: " + movies[i].genre + "</p>"
            + "<button class='delete' data-id='" + movies[i].id + "'>" + "Delete Movie" + "</button>"
            + "<button class='edit' data-index='" + i + "' type='button' class='btn' data-toggle='modal'>" + "Edit Movie" + "</button></div>")

    }
    $('.delete').click(function() {
        var id = $(this).data('id')
        deleteMovie(id)
    });
    // $('.edit').click(function (){
    //     var index = $(this).data('index')
    //     e.preventDefault()
    //     let editTitle = $('#newTitle').val()
    //     let editGenre = $('#newGenre').val(movies[index].genre)
    //     let editRating = $('#newRating').val(movies[index].rating)
    //     editTitle.val(movies[i].title)
    //     let editMovieObj = {
    //         title: editTitle ,
    //         rating: editGenre,
    //         genre: editRating
    //     }
    //     return editMovie(editMovieObj)
    // })
});



//Get a by ID
function getMovie(id){
    return fetch('${moviesAPI/id}')
        .then((callJson)=>callJson.json());
}


//function(11)

function editMovie(movie) {
    let options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    }
    return fetch(`${moviesAPI/movies.id}` , options)
        .then((callJson)=>callJson.json())
}

// Delete by
function deleteMovie(id){
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch(`${moviesAPI}/${id}`, options)
        .then((callJson)=>console.log("Delete movie" + id, callJson))
}
//




// Create Movie
function addMovie(movie) {
    let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    }
    return fetch(`${moviesAPI}` , options)
        .then((callJson)=>callJson.json())
        .then((parsedData)=>console.log(parsedData))

}
$('#submitNewMovie').click(function(e){
    e.preventDefault()
    let newTitle = $('#newTitle').val()
    let newGenre = $('#newGenre').val()
    let newRating = $('#newRating').val()

    let newMovieObj = {
        title: newTitle ,
        rating: newRating,
        genre: newGenre
    }
    return addMovie(newMovieObj)
})


// addMovie(sam).then((newMovie)=>console.log(newMovie))
