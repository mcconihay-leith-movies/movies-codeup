



const moviesAPI = "https://reliable-accessible-net.glitch.me/movies";


fetch('https://reliable-accessible-net.glitch.me/movies')
    .then((response)=>response.json())
    .then((jsonData)=> console.log(jsonData))





//Get all
function getMovies(){
    return fetch(moviesAPI).then((callJson)=>callJson.json());
}


//Display data
fetch('https://reliable-accessible-net.glitch.me/movies', {headers: {'Authorization': moviesAPI}})
    .then((callForJson)=>{
        return callForJson.json();
    }).then((movies)=>{
    console.log(movies[0])
    for(var i = 0; i <= 5; i++ ) {
        $("#movie").append("<div class='card'><h2 class='card-title'>" + "Film" + "</h2>"
            + "<div class='card-body'><p>" + "Title: " + movies[i].title + "</p>"
            + "<p>" + "Rating: " + movies[i].rating + "</p>"
            + "<p>" + "Director: " + movies[i].director + "</p>"
            + "<p>" + "Plot: " + movies[i].plot + "</p></div>")
    }
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
// //
// let frodo = {
//     title: 'Frodo',
//     // isGoodDog: true,
//     id: 11,
//     // age: 3
//
// }


// editMovie(frodo).then((data)=>console.log(data))

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
        .then((callJson)=>console.log(callJson.json()))
}

let sam = {
    title: 'Sam',


}

// addMovie(sam).then((newMovie)=>console.log(newMovie))
