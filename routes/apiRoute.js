const fs = require("fs");

const output = "./db/db.json";
const dataBase = require("../db/db.json");
let id = dataBase.length + 1;

module.exports = (app)=>{
//create the api route
app.get( "/api/notes", (req, res)=>{
    res.json(dataBase);
});
//creat route for api
app.post("/api/notes", (req, res)=>{

    /*
    req.body = {
        title: "Something title",
        text: "Helloooo!"
    }
    */

    req.body.id = id ++;
    /*
    req.body = {
        title: "Something title",
        text: "Helloooo!",
        id: 2
    }
    */

    dataBase.push(req.body);
    fs.writeFile(output, JSON.stringify(dataBase), (err)=>{
        if (err) throw err;

    });
});

//delete Individual Notes
app.delete("/api/notes/:id", (req, res)=>{
    let getId = req.params.id;
    for (let i = 0; i < dataBase.length; i++) {
        if(dataBase[i].id === parseInt(getId)){
            dataBase.splice(i, 1)
        }
        fs.write(output, JSON.stringify(dataBase), (err)=>{
            if(err) throw err;
        });
        res.json(dataBase)
    }
});

};