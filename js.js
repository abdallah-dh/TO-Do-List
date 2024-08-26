var input = document.querySelector(".input");
var buttom = document.querySelector("button");
var ajouter = document.querySelector("ul");

function addtasks(){
    if (input.value === ''){
        input.value  = "add tasks ";
        input.style.cssText = "color : red"
     
    }else{
        let li = document.createElement("li");
       li.innerHTML = input.value;
        ajouter.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        input.value =''; 

    }
    sauvgard()
};

ajouter.addEventListener('click',function(e){
    if (e.target.tagName ==="LI"){
        e.target.classList.add('cheked');
        sauvgard()
    }else if  (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        sauvgard()
    }
},false);

function sauvgard(){

    window.localStorage.setItem("donne" , ajouter.innerHTML);
}
function watch(){
    ajouter.innerHTML = window.localStorage.getItem("donne");
}
watch();



