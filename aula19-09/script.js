function calcularMedia(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let resultado = document.getElementById("resultado")
    let media = (nota1+nota2) / 2
    resultado.innerText = media
}

