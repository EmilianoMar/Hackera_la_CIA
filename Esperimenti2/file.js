var div = document.getElementById("div");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");
var div7 = document.getElementById("div7");
var div8 = document.getElementById("div8");
var div9 = document.getElementById("div9");
var div10 = document.getElementById("div10");
var div11 = document.getElementById("div11");
var fine = false;
var btn = document.getElementById("btn");
var doge = document.getElementById("doge");
var body = document.getElementById("Body");
var skull = document.getElementById("skull");

function hack(){
   div.style.visibility = "hidden";
   div2.style.visibility = "visible";
   btn.style.visibility = "hidden";
   setTimeout(function(){
      div3.style.visibility = "visible";
      window.addEventListener("click", function(){
         div4.style.visibility = "visible";
         hack2();
         return;
      })
   },1000)
}

function hack2(){
   if(!fine){
   fine = true;
   setTimeout(function(){
      div5.style.visibility = "visible";
      setTimeout(function(){
         div6.style.visibility = "visible";
         setTimeout(function(){
            div7.style.visibility = "visible";
            setTimeout(function(){
               div8.style.visibility = "visible";
               setTimeout(function(){
                  doge.style.visibility = "visible";
                  doge.classList.add("animate");
                  setTimeout(function(){
                     doge.style.visibility = "hidden";
                     setTimeout(function(){
                        div9.style.visibility = "visible";
                        setTimeout(function(){
                           div10.style.visibility = "visible";
                           setTimeout(function(){
                              window.alert("Complimenti, hai inviato tutti i tuoi dati alla CIA!");
                              div10.style.visibility = "hidden";
                              div9.style.visibility = "hidden";
                              div8.style.visibility = "hidden";
                              div7.style.visibility = "hidden";
                              div6.style.visibility = "hidden";
                              div5.style.visibility = "hidden";
                              div4.style.visibility = "hidden";
                              div3.style.visibility = "hidden";
                              div2.style.visibility = "hidden";
                              body.style.backgroundColor = "red";
                              skull.style.visibility = "visible";
                              div11.style.visibility = "visible";
                              body.classList.add("animate2");
                              setTimeout(function(){
                                 prompt("Ti piace la mia invenzione per far venire attacchi epilettici? :)");
                                 alert("Meglio così");
                              },500)
                           },500)
                        },900)
                     },900)
                  },900)
               },4000)
            },1000)
         },1000)
         },2000)
   },2000)
   }
}