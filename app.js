const counters = document.querySelectorAll(".counter");
let dataCeil=[];

//By using setInterval() Method
for(let i=0;i<counters.length;i++){
    let count=0;
    console.log(count)

    let interval=setInterval(()=>{
        dataCeil[i]=counters[i].getAttribute("data-ceil");
        count+=Math.ceil(dataCeil[i]/15)
        if(count<dataCeil[i]){
          counters[i].innerText=count;
          console.log(counters[i].innerText);
        }
        else{
          counters[i].innerText=dataCeil[i];
          clearInterval(interval)
        }
      },50)

   }
   
//-----------------------------------------------------------------------------------------------
// By Using setTimeOut() Method

// counters.forEach((elem)=>{
//     let count=0;
//     console.log(count)
//     func();
//     function func(){
//     const dataCeil=elem.getAttribute("data-ceil")
//     // console.log(dataCeil)
//     count+=Math.ceil(dataCeil/15);
//     console.log(elem)

//     if(count < dataCeil){
//         elem.innerText=count;
//         setTimeout(func,1000)
//         }
//     else{
//         elem.innerText=dataCeil;
//         }
//     };
// })
