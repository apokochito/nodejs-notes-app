require('dotenv').config({path: '.env'});
const app = require("./server");
require('./database');

app.listen(app.get('port'), () => {
    console.log("Hey man", app.get('port'))
})
