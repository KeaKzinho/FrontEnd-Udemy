function aprovado(){
    var n1 = Number(document.getElementById("N1").value)
    var n2 = Number(document.getElementById("N2").value)
    var n3 = Number(document.getElementById("N3").value)
    var media = (n1+n2+n3) / 3
    
    if (media >= 6){
        document.write("Você foi aprovado!")
    } else{
        document.write("Você foi reprovado!")
    }
    
}
