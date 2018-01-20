const os = require('os');
const Rx = require('@reactivex/rxjs');

function checkSystemPromise() {
    return new Promise(function (resolve, reject) {
        if (os.freemem < 3000000000) {
            reject(`This app needs at least 4GB of Memory! your memory is ${os.freemem}`);
        }
        if (os.cpus().length <= 3) {
            reject('Processor is not supported!');
        }
        resolve('System is checked successfully!');
    });

}
function checkSystem() {
    checkSystemPromise().then((result) => console.log(result))
        .catch((error) => console.log(error));
}
// checkSystem();
// console.log('Checking your system...');

// Rx.Observable.from([{os}])
//     .subscribe(checkSystemPromise);
// Rx.Observable.of(1,2,3).map((x)=>x+3).subscribe(
//     (x)=>console.log(x),
//     null,
//     ()=>console.log('done')
// );

const ob = Rx.Observable.create(function (observer) {
    observer.next(()=>{
        if (os.freemem > 3000000000) {
            console.log('This app needs at least 4GB of Memory! ');
        }

        if (os.cpus().length <= 3) {
            console.log('Processor is not supported!');
        }
    });    
    observer.complete('System is checked successfully!');
});

ob.subscribe(x=>x());
console.log("start");