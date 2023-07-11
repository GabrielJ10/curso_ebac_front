const form = document.getElementById('form')

form.addEventListener('submit',function(e) {
    e.preventDefault();

var A = parseInt(document.getElementById("nA").value);
var B = parseInt(document.getElementById("nB").value);

    if (B>A)  {   
        // console.log("Valido"); 
        document.getElementById("mensagem").innerHTML = "Formulário válido!";
        document.getElementById("mensagem").style.backgroundColor = "green";
        document.getElementById("mensagem2").innerHTML = "O numero " + A + " é Menor que o numero " + B+"!";
        document.getElementById("mensagem2").style.backgroundColor = "green";
    } else if (A>B) {
        // console.log("Invalido"); 
        document.getElementById("mensagem").innerHTML = "Formulário inválido!";
        document.getElementById("mensagem").style.backgroundColor = "red";
        document.getElementById("mensagem2").innerHTML = "O numero " + A + " é Maior que o numero " + B +"!";
        document.getElementById("mensagem2").style.backgroundColor = "red";
} else {
    // console.log("são 2 numeros iguais")
    document.getElementById("mensagem").innerHTML = "Formulário inválido!";
    document.getElementById("mensagem").style.backgroundColor = "red";
    document.getElementById("mensagem2").innerHTML = "O numero " + A + " é Igual ao numero " + B + "!";
    document.getElementById("mensagem2").style.backgroundColor = "red";
}

});

