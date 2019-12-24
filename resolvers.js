const user = {
    _id: 1,
    name: "Teeron",
    email: "teeron@knock.it",
    picture: "https://cloudinary.com/asdf"
}

module.exports = {
    Query: {
        me: () => user
    }
}