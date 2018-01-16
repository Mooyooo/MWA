function Musicion(name){
    this.name=name; 
}

Musicion.prototype.play =function(piece){
 console.log(this.name+' is now playing ' +piece);
}

const pianist = new Musicion('Pianist');
const violinist = new Musicion('Violinist');

pianist.play('piano');
violinist.play('violin');