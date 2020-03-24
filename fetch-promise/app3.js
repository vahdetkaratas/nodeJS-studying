function addTwo(number) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {

            if (typeof number === "number") {
                resolve(number + 2)
            } else {
                reject(new Error)("Error..!")
            }

        }, 1000);

    });

}

addTwo(12)
    .then(response => {
        console.log(response);
        return response + 2;
    })
    .then(response2 => console.log(response2))
    .catch(err => console.error(err));