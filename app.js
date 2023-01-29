const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp) => {
    resp.send('<h1>Auto Scaling Demo App</h1> <h4>Message: Success</h4>');
})

app.listen(port, () => {
    console.log(`App is running on: ${port}`);
})