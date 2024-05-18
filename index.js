
let a1=  parseInt(window.prompt("Enter your desired number : "));
           
     
          
let a2=  parseInt(window.prompt("Enter the limit: "));





if (a1 > 20)
for (let i = 1; i <= a2; i++) {
   document.write((a1 + " * " + i + " = " + a1 * i + "<br>"));
  
 ;
}

else{
   for (let i = a2; i > 0; i--) {
       document.write((a1 + " * " + i + " = " + a1 * i + "<br>"));
    
   }
}
