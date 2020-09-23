const mongoose = require('mongoose');

const { MONGODB_USER, MONGODB_PASS, MONGODB_DB, MONGODB_CLUSTER } = process.env;
const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_CLUSTER}.pnk2h.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('Database Connected'))
    .catch(err => console.log(err));
