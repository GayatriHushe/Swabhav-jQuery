function getCustomer(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("inside  promise1");
            const customer = {
                id: 1,
                name: 'Gayatri',
                isGold: true,
                email: 'email'
            };
            if (customer.isGold)
                resolve(customer);
        }, 2000);
    })
}

function getTopMovies() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("inside promise2 ");
            const movies = (['movie1', 'movie2']);
            resolve(movies);
        }, 2000);
    })
}

function sendEmail() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("inside promise3")
            const email = "email sent...";
            resolve(email);
        }, 2000);
    })
}

getCustomer(1)
    .then(function(customer) {
        console.log("Getting customer details");
        console.log("    " + customer)
        return getTopMovies();
    })
    .then(function(movies) {
        console.log("Getting movies");
        console.log("    " + movies)
        return sendEmail();
    })
    .then(function(email) {
        console.log("Sending email");
        console.log("    " + email)
    })
    .catch(function() {
        console.log("Error")
    })
console.log("end")