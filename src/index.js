const app = require("./server");

app.listen(app.get('port'), () => {
    console.log("Hey man", app.get('port'))
})