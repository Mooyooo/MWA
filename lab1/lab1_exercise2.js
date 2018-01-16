String.prototype.filterWords = function(filters){
    let sentence = this;
    for(const word of filters){
       sentence = sentence.replace(word, '***'); 
    }
    return sentence;
}

console.log("This house is nice!".filterWords(['house','nice']));