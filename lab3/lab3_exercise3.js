const EventEmitter = require('events');

class Clock extends EventEmitter{
    constructor(){
        super();
    }
    tick(msg){
        console.log(msg);
    }
}

const clock = new Clock();
setInterval(()=>clock.tick('woohoo'),1000);
