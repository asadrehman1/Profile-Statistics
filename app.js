const counters = document.querySelectorAll(".counter");

counters.forEach((elem)=>{
    let count=0;
    incr();
    function incr(){
    const dataCeil=elem.getAttribute("data-ceil")
    count+=Math.ceil(dataCeil/15);
    if(count<dataCeil){
         elem.innerText=count;
        setTimeout(incr,50)
        }
        else{
        elem.innerText=dataCeil;
        }
    }
})