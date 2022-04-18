// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }

   const clear = document.querySelector('#clear');
   clear.addEventListener('click',function(e){
       if(e.target.className === "button clear"){
           clearScreen();

       }


   });
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
   }
  