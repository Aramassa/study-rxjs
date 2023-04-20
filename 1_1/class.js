import {Subject} from 'rxjs'

export default class App {
    subs = {}
    cnt = 0;

    getSubject(name){
        if(!this.subs[name]){
            this.subs[name] = new Subject();
        }
        return this.subs[name];
    }

    subscribeUpdate(observer){
        this.getSubject('onUpdate').subscribe(observer);
    }

    start(){
        setInterval(()=>{
            this.getSubject('onUpdate').next(this.cnt++);
        }, 1000);
    }

}