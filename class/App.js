//print
function print(var1) {
    let i = var1.toUpperCase().charAt(0);
    return i
}

function print2() {
    const butonenvio = document.getElementById('butonenvio');
    const parrafo = document.getElementById('paragraph');
    const Letra = document.getElementById("info");
    const commentt = document.getElementById("comment");
    const value = Letra.value;
    const valuee = commentt.value;

    const n = print(value);
    const letraCirculo = document.getElementById("letra");
    letraCirculo.innerText = n;

    //mandatory condition 
    if (letra  == "") {
        alert("Debes escribir o rellenar el campo nombre")
        document.getElementById("info").focus();
    }
    if  (commentt == "") {
        alert("Debes escribir o rellenar el campo comenterio")
        document.getElementById("comment").focus();
    }else{
        console.log(letra, commentt);
        document.getElementById("info").value="";
        document.getElementById("comment").value="";
        document.getElementById("info").focus();
    }
    parrafo.textContent=valuee;
}

//counter
function countChars(obj){
    var maxLength = 200;
    var strLength = obj.value.length;
    
    if(strLength > maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("charNum").innerHTML = strLength+' de '+maxLength+' caracteres';
    }
}


