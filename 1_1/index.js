import App from "./class.js";

let app = new App();

let cnt = 1;

app.subscribeUpdate((e)=>{
    console.log(`sub1 ${e}`);
})

app.start();

setInterval(()=>{
    let n = ++cnt;
    app.subscribeUpdate((e)=>{
        console.log(`sub${n}: ${e}`);
    })
}, 1000);