const mongoose = require("mongoose");
const connectionString =
    "mongodb+srv://htoowaiyan:MRWyoueaakKiT8fA@tours.27e6mhc.mongodb.net/03-tasks?retryWrites=true&w=majority&appName=tours";

const connectDb = (url) => {
    return mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
}

module.exports = connectDb;