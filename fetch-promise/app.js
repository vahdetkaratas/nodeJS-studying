function getData(data) {

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            resolve('Positive Result')
            //reject('Negative Result')

        }, 3000);

    })
}

//console.log(getData('Hello...'));
getData('Merhaba').then(response => {
    console.log(response);
}).catch(err => console.log(err));