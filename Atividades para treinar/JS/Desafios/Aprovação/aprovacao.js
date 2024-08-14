function verificacaoAprovacao(){

    var n1 = parseFloat(document.getElementById("Nota1").value)
    var n2 = parseFloat(document.getElementById("Nota2").value)
    var n3 = parseFloat(document.getElementById("Nota3").value)
    var n4 = parseFloat(document.getElementById("Nota4").value)
    
    var media = (n1+n2+n3+n4) / 4
    
    var presencaTotal = parseInt(document.getElementById("presenca").value)
    
    if (media>=6 && presencaTotal >= 90){
        document.write("Foi aprovado!")
    } else if (media >=6 && presencaTotal < 90){
        document.write("Tem nota suficiente, porém faltou mais do que deveria.")
    } else if (media<6 && presencaTotal >= 90) {
        document.write("Tem a presença sufiente, porém a nota está abaixo do exigido.")
    }

    console.log(media)
    console.log(presencaTotal)
}

