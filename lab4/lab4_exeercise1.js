const http = require('http');
const fs = require('fs');
const {fork} =require('child_process');
const Rx = require('@reactivex/rxjs');

const subject = new Rx.Subject();

function createChild(e){
    const childProcess = fork('childProcess.js');
    e.req.url
    childProcess.send('bigFile.txt');
    childProcess.on('message',(data)=>{
        if(data.type == 'on'){
            e.res.write(data.data);
        }
        else {
            e.res.end();
        }
    });
}   
subject.subscribe(createChild);

const server =  http.createServer((req, res)=>{
    subject.next({req:req,res:res});
}).listen(3000);


