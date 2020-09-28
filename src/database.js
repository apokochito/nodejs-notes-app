const mongoose = require('mongoose');
const config = require("./config");

const MONGODB_URI = `mongodb://${config.NOTES_APP_MONGODB_HOST}/${config.NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

.then((db) => console.log('Database is connected',db.connection.host))
.catch((err) => console.log(err));