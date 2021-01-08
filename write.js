function write(el){
    var textArray = el.innerHTML.replace(/<(.|\n)*?>/g, '').split('');
    
    el.innerHTML = '';
    
    textArray.forEach((letra, i) => {
        setTimeout(function(){
            el.innerHTML += letra;
        }, 75 * i);
    });

    //var text = el.innerHTML.replace(/<(.|\n)*?>/g, '');
    
}

const titulo = document.getElementById("titulo");
write(titulo);