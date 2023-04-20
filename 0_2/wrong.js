import { Observable } from 'rxjs';

// const observable = new Observable(function subscribe(subscriber) {
//   const id = setInterval(() => {
//     subscriber.next('hi');
//   }, 1000);
// });
const observable = new Observable();

observable.subscribe((x) => console.log(x));

let cnt = 0;
setInterval(()=>{
    observable.next(cnt++);
}, 1000);