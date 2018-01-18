const dns = require('dns');
function getIP(domain){
    dns.lookup(domain,(err,address)=>{
        console.log('ip address:'+address);
    });
}

getIP('www.mum.edu');