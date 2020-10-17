
document.body.style.background = "red"
let interval = setInterval(()=>{
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let i = document.getElementById('i');
    let mySec =  +sec.innerText+1
    let myMin = +min.innerText+1
if (mySec < 10) {
    if (mySec === 60) {
        mySec = 0;
        min.innerText = myMin;
    } else if (myMin === 60) {
        myMin = 0;
    }
    sec.innerText = '0' + mySec;
}  else    if (myMin < 10) {
    if (mySec === 60) {
        mySec = 0;
        min.innerText = '0' + myMin;
    } else if (myMin === 60) {
        myMin = 0;

    } else if (mySec === 20 && myMin === 3) {
        clearInterval(interval)
        document.body.style.background = "green"
    }
    sec.innerText =  mySec;
}  else if (mySec === 60) {
        mySec = 0;
        min.innerText = myMin;
    } else if (myMin === 60) {
        myMin = 0;
    }else {sec.innerText = mySec;}

},1000);


