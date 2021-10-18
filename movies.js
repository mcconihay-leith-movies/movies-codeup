




const moviesAPI = "https://reliable-accessible-net.glitch.me/movies";

//Get all
function getMovies(){
    return fetch(moviesAPI).then((callJson)=>callJson.json());
}




//Get a by ID
function getMovie(title){
    return fetch('${moviesAPI}/${title.id}')
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
    return fetch('${moviesAPI}/${movies.id}' , options)
        .then((callJson)=>callJson.json())
}
//
let frodo = {
    title: 'Frodo',
    // isGoodDog: true,
    id: 11,
    // age: 3

}


editMovie(frodo).then((data)=>console.log(data))

// Delete by
function deleteMovie(id){
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch('${moviesAPI}/${id}', options)
        .then((callJson)=>console.log("Delete dog" + id, callJson))
}

// Create dog
function addMovie(movie) {
    let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    }
    return fetch('${moviesAPI}/${movies.id}' , options)
        .then((callJson)=>callJson.json())
}

let sam = {
    title: 'Sam',
    // isGoodDog: true,
    // age: 3

}

addMovie(sam).then((newDog)=>console.log(newDog))
