var express = require("express");
var mongo = require("mongoskin");
var crypto = require('crypto');

app = express();

const secret = "asaadsaad";
const decipher = crypto.createDecipher('aes256', secret);

var db = mongo.db("mongodb://localhost:27017/lab7", { native_parser: true });
// db.collection("homework7").find().toArray(function(err,result){
//    // if(err) throw err;
//     console.log(result);
// });
// var doc =db.collection("homework7").findOne({},{message:1});


app.get("/secret", (req, res) => {
  db.collection('homework7').find({}, function (err, result) {
    result.each(function (err, message) {
      if (message !== null) {
        let decrypted = decipher.update(message.message, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        console.log(decrypted);
        res.send(decrypted);

      }
    });
  });

});




// console.log('document:'+doc.message);
app.listen(4000, () => {
  console.log('The server is running on 4000');
});
