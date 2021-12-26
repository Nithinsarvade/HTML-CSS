"use strict";
/* function Greet(name: string){
    let greet;
    if (name === "nithin") {
        greet="hello nithin";
        
    } else {
        greet="hi";
    }
    console.log(greet);
    }
    Greet("nithi")
    
     */
/*  for(let i=0;i<6;i++){
     setTimeout(function(){console.log(i);},1000)
 }
 const getArrowvalue=(m:any,b:any)=>10*m+b;
 console.log(getArrowvalue(5,10))

  */
let colourArray = function (message, ...colors) {
    console.log(message);
    for (let i in colors) {
        console.log(colours[i]);
    }
};
let message = "list of colours";
let colours = ["red", "blue"];
colourArray(message, ...colours);
//# sourceMappingURL=demo.js.map