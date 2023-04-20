import { Subject } from 'rxjs';

const subject = new Subject();
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

let cnt = 0;
setInterval(()=>{
    subject.next(cnt++);
}, 1000);