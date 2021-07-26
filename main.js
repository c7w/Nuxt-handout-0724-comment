const express = require('express');
const app = express()
const port = 10001

app.use(express.json())

app.post('/', (req, res) => {
    const path = req.body.path
    const data = req.body.data
    const fs = require('fs')
    try {
        oldData = fs.readFileSync("./comments/" + path + ".json", {
            encoding: 'utf8'
        });
        dataJson = JSON.parse(oldData);
        dataJson.push(data)
        console.log(dataJson)
        fs.writeFileSync("./comments/" + path + ".json", JSON.stringify(dataJson), {
            encoding: 'utf8'
        });
    } catch {
        // No corresponding file found.
        fs.writeFileSync("./comments/" + path + ".json", JSON.stringify([data]), {
            encoding: 'utf8'
        });
    }
    res.send("Accepted");
})

app.get('/', (req, res) => {
    const query = req.query
    result = {}
    if (query.path === undefined) {
        res.sendStatus(400);
        return;
    }
    result.path = decodeURI(query.path)

    // File I/O
    const fs = require('fs')
    try {
        data = fs.readFileSync("./comments/" + result.path + ".json", {
            encoding: 'utf8'
        });
        result.data = JSON.parse(data);
    } catch {
        result.data = {};
    }
    res.send(result);
})

app.listen(port);