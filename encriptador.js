const areaTexto = document.querySelector(".area-texto");
const salidaTexto = document.querySelector(".salida_texto p");
const btnCopiar = document.querySelector(".btn_copiar");
const munecoImagen = document.querySelector(".muneco_imagen");
const enunciado = document.querySelector(".salida_texto h4");
const parrafo = document.querySelector(".salida_texto .texto");
const aviso = document.querySelector(".aviso");

aviso.style.display = "none";
btnCopiar.style.display = "none";

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    if (/[A-ZáéíóúÁÉÍÓÚ]/.test(areaTexto.value)) {  
        aviso.style.display = "block"; 
        aviso.innerText = "No se permiten mayúsculas ni acentos";
        salidaTexto.innerText = ""; 
        btnCopiar.style.display = "none"; 
        return; 
    } else {
        aviso.style.display = "none"; 
        btnCopiar.style.display = "block"; 
    }

    // Encriptación
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnEncriptar() {
    const textoEncriptado = encriptar(areaTexto.value);
    if (textoEncriptado) { // Solo actualizar si no hubo errores
        salidaTexto.innerText = textoEncriptado;
        areaTexto.value = "";
        enunciado.style.display = "none";
        salidaTexto.style.backgroundImage = "none"; 
    }
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(areaTexto.value);
    salidaTexto.innerText = textoDesencriptado; 
    enunciado.style.display = "none";
    salidaTexto.style.backgroundImage = "none"; 
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    const texto = salidaTexto.innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
