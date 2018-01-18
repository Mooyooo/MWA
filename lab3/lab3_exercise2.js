const http=require('http');
const fs = require('fs');
var server = http.createServer();
server.on('request',function(req,res){

    // fs.readFile('./GeoEye50MB.jpg',(err,data)=>{
    //     if(err) throw err;
    //     res.write(data);
    // });

    const src =fs.createReadStream('./GeoEye50MB.jpg');
    src.pipe(res);
   
});

server.listen(8000, ()=>{ console.log('server is running on 8000.');});