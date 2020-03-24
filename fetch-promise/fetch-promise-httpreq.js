const fetch = require("node-fetch");

class Request {

    get(url) {

        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))

        })

    }

    post(url, data) {

        return new Promise((resolve, reject) => {
            fetch(url, {

                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }

                }).then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));



        })

    }

    put(url, data) {

        return new Promise((resolve, reject) => {
            fetch(url, {

                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }

                }).then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));



        })

    }

    delete(url) {
        return new Promise((resolve, reject) => {

            fetch('https://jsonplaceholder.typicode.com/albums/1'), {
                method: 'DELETE'
            }

        }).then((response) => resolve("Deleted..!")).catch(err => reject(err));


    }



}

const request = new Request();
/*let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    console.log(albums);
})
.catch(error => console.error(error));*/

request.post("https://jsonplaceholder.typicode.com/albums", {
        userId: 1,
        title: "Thriller"
    })
    .then(newAlbum => console.log(newAlbum))
    .catch(error => console.error(error));

request.put("https://jsonplaceholder.typicode.com/albums/1", {
        userId: 10,
        title: "Ismail YK"
    })
    .then(album => console.log(album))
    .catch(error => console.error(error));

request.delete('https://jsonplaceholder.typicode.com/albums/1')
    .then(message => console.log(message))
    .catch(error => console.error);