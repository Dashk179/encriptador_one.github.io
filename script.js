var resultado;
function encriptar() {
  const text1 = document.getElementById("texto").value.toLowerCase();
  var texto = text1
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    document.getElementById("noresuelto").style.visibility = "hidden";
  document.getElementById("textresultado").value = texto;
  document.getElementById("texto").value = "";
  document.getElementById("copiar").style.visibility = "visible";
 

}

function desencriptar() {
  const text2 = document.getElementById("textresultado").value.toLowerCase();
  var texto2 = text2
    .replaceAll( "enter","e")
    .replaceAll( "imes","i")
    .replaceAll( "ober","o")
    .replaceAll( "ai","a")
    .replaceAll( "ufat","u");

 
  document.getElementById("texto").value = texto2;
  document.getElementById("textresultado").value = "";
  document.getElementById("noresuelto").style.visibility = "disable";

 
}

function copiar(){
  const copiado = document.getElementById("textresultado").value;
  navigator.clipboard.writeText(copiado);
  alert("Usted a copiado: " + copiado);

}