//selection of the button to start the counter
let startCounterBtn = document.querySelector('#btn');
//Adding Event so that on clicking the button it rsponds 
startCounterBtn.addEventListener('click',()=>{
    let counter = document.querySelector('.counter');
    let timer=10;

    counter.innerHTML = timer--;
    setTimeout(()=>{
        counter.innerHTML = timer--;
        setTimeout(()=>{
            counter.innerHTML = timer--;
            setTimeout(()=>{
                counter.innerHTML = timer--;
                setTimeout(()=>{
                    counter.innerHTML = timer--;
                    setTimeout(()=>{
                        counter.innerHTML = timer--;
                        setTimeout(()=>{
                            counter.innerHTML = timer--;
                            setTimeout(()=>{
                                counter.innerHTML = timer--;
                                setTimeout(()=>{
                                    counter.innerHTML = timer--;
                                    setTimeout(()=>{
                                        counter.innerHTML = timer--;
                                        counter.innerHTML = "Happy Independence Day!"
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
})