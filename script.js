code = document.getElementById(".code");
key = document.getElementById(".key");
which = document.getElementById(".which");
keys = document.getElementsByClassName("key");
document.addEventListener("keydown", (e) =>{
    for(i = 0; i < keys.length; i++){
        if(keys[i].role == "AltGraph" &&  keys[i].role == e.key){
            keys[72].style.backgroundColor = "blue";
            keys[68].style.backgroundColor = "gray";
        } else if(keys[i].textContent == e.key || keys[i].role == e.key || keys[i].role == e.code){
            keys[i].style.backgroundColor = "blue";
        }
    }
    code.textContent = e.code;
    key.textContent = e.key;
    which.textContent = e.which;
})
document.addEventListener("keyup", () =>{
    setTimeout(() =>{for(i = 0; i <keys.length; i++){
        keys[i].style.backgroundColor = "gray";
    }}, 200);
})
console.log(keys);