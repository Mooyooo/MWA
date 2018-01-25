express = require("express");
bodyParse = require("body-parser");
mongo = require("mongoskin");

app = express();


var db = mongo.db("mongodb://localhost:27017/lab7", { native_parser: true });
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json())

app.post("/address", (req, res) => {
    db.collection('address').createIndex({'location':'2dsphere'});
    db.collection('address').createIndex({name:1});
    db.collection('address').createIndex({category:1});
    db.collection('address').insert(req.body, (err, inserted) => {
        if (err) throw err;
        console.dir("Success" + JSON.stringify(inserted));
        res.json(inserted);
        return db.close();
        // return res("");
    });
});


app.put("/address", (req, res) => {
    db.collection('address').update({ name: req.body.oldName }, { $set: { name: req.body } }, {}, (err, updated) => {
        if (err) throw err;
        res.json(updated);
        console.dir("Success" + JSON.stringify(updated));
        return db.close();
    });
});

app.get("/address", (req, res) => {
    db.collection('address').find({}, { name: 1, category: 1, longitude: 1, latitude: 1 }).toArray((err, result) => {
        if (err) throw err;
        res.json(result);
        console.dir("Success" + JSON.stringify(result));
        return db.close();
    });
});


app.get("/nearest", (req, res) => {

    console.log("long:"+req.query.longitude);
    console.log("long:"+req.query.latitude);
    db.collection('address').find({
        location: {
            $near: { $geometry: { type: "Point", coordinates: [parseFloat(req.query.longitude), parseFloat(req.query.latitude)] }, $maxDistance: 2000 }
        }
    }).limit(3).toArray((err, result) => {
        if (err) throw err;
        res.json(result);
        console.dir("Success" + JSON.stringify(result));
        return db.close();
    });
});

app.listen(3000, () => { console.log("server listening on 3000") });