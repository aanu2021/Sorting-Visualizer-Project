let randomize_array=document.getElementById("randomize_array_btn");
let sort_btn=document.getElementById("sort_btn");
let bars_container=document.getElementById("bars_container");
let minrange=1;
let maxrange=80;
let numofBars=80;
let heightfactor=6;
let unsorted_array=new Array(numofBars);


function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}


function createRandomArray(){

  for(let i=0;i<numofBars;i++){
      unsorted_array[i]=randomNum(minrange,maxrange);
  }

}


document.addEventListener("DOMContentLoaded",function(){

     createRandomArray();

     renderBars(unsorted_array);

});


function renderBars(array){

  for(let i=0;i<array.length;i++){

     let bar=document.createElement("div");
     bar.classList.add("bar");
     bar.style.height=array[i]*heightfactor + "px";
     bars_container.appendChild(bar);

  }

}


randomize_array.addEventListener("click",function(){

  createRandomArray();
  bars_container.innerHTML="";
  renderBars(unsorted_array);

});


function sleep(ms){

  return new Promise((resolve)=>setTimeout(resolve,ms));

}


async function bubblesort(array){

   let bars=document.getElementsByClassName("bar");
   
   let k=array.length-1;

  for(let i=0;i<array.length-1;i++){

      for(let j=0;j<array.length-i-1;j++){

          if(array[j]>array[j+1]){

              for(let m=0;m<=k;m++){
                  if(m!==j && m!==j+1){
                      
                     bars[m].style.backgroundColor="lightgreen";
                      
                  }
              }

              let temp=array[j];
              array[j]=array[j+1];
              array[j+1]=temp;

              bars[j].style.height=array[j]*heightfactor+"px";
              bars[j+1].style.height=array[j+1]*heightfactor+"px";

              bars[j].style.backgroundColor="blue";
              bars[j+1].style.backgroundColor="blue";

              await sleep(50);

            //   bars[j].innerText=array[j];
            //   bars[j+1].innerText=array[j+1];

          }

      }

    //   bars[i].style.backgroundColor="blue"; 
      
      bars[k].style.backgroundColor="yellow";
      k--;

      await sleep(50);

  }

  for(let i=0;i<array.length;i++){
      
     bars[i].style.backgroundColor="yellow";

  }

  return array;

}


sort_btn.addEventListener("click",function(){

  let sorted_array=bubblesort(unsorted_array);

  console.log(sorted_array);

});