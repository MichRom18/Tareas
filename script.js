function estaciones(){
    let mes = document.getElementById("num-mes").value;

    if(mes == "12" || mes == "1" || mes == "2"){
        document.getElementById("estacion").innerHTML = "INVIERNO";
    } else if(mes == "3" || mes == "4" || mes == "5"){
        document.getElementById("estacion").innerHTML = "PRIMAVERA";
    } else if(mes == "6" || mes == "7" || mes == "8"){
        document.getElementById("estacion").innerHTML = "VERANO";
    } else if(mes == "9" || mes == "10" || mes == "11"){
        document.getElementById("estacion").innerHTML = "OTOÑO";
    } else {
        document.getElementById("estacion").innerHTML = "NÚMERO INDEFINIDO";
    }
}

function limpiarEstaciones(){
    document.getElementById("num-mes").value = "";
    document.getElementById("estacion").innerHTML = "";
}

function imprimirValor(){
    let valor = document.getElementById("valor").value;

    document.getElementById("valorImpreso").innerHTML = "El texto es: " + valor;
    alert("El texto es: " + valor);
    console.log("El texto es: " + valor);
}

function limpiarPantalla(){
    document.getElementById("valor").value = "";
    document.getElementById("valorImpreso").innerHTML = "";
}