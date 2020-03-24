function getData(data) {

    return new Promise((resolve, reject) => {

        setTimeout(function () {
            if (typeof data === 'string') {
                //Positive
                resolve(data);

            } else {
                //Negative
                reject(new Error);

            }
        }, 1000);

    })
}


getData(123)
    .then((response) => console.log(response))
    .catch((err) => console.error(new Error('error')));