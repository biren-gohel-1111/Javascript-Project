const buttons = document.body.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button){
    
     button.addEventListener("mouseover",function(event){
          
         console.log(event); // [object MouseEvent]
         console.log(event.target); // [object HTMLSpanElement] // target means event where fatch
 


          switch(event.target.id){
              case("blue"): // hear pass id
              alert(body.style.backgroundColor = event.target.id);
               break;
          
              case("red"): // hear pass id
              alert(body.style.backgroundColor = event.target.id);
              break;
          
               case("green"): // hear pass id
               alert(body.style.backgroundColor = event.target.id);
               break;
          
               case("yellow"): // hear pass id
               alert(body.style.backgroundColor = event.target.id);
               break;
          }  
     })
})
          // another logic
          
          // if(e.target.id === "blue"){
          //      body.style.backgroundColor = e.target.id; // blue
          // }
          // if(e.target.id === "red"){
          //      body.style.backgroundColor = e.target.id;  // red
          // }
          // if(e.target.id=== "green"){
          //      body.style.backgroundColor = e.target.id; // green
          // }
          // if(e.target.id=== "yellow"){
          //      body.style.backgroundColor = e.target.id; // yellow
          // }


        
