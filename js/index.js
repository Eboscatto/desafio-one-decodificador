
function criptografar(){
    let texto = document.getElementById("texto").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let imagem = document.getElementById("imagem");


    let textoCriptofrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if(texto.length !=0){
        document.getElementById("texto").value = textoCriptofrado;
        tituloMensagem.textContent = "Texto criptografado com êxito!";
        paragrafo.textContent = "";
        imagem.src = "./assets/criptografia.png";           
    } else{
        imagem.src = "./assets/detetive.jpg";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada!";
        paragrafo.textContent = "Digite o texto que deseja criptografar.";
        swal("Tem que digitar um texto!","");      
    }
}

function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let imagem = document.getElementById("imagem");
  
    let textoCriptografado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
      
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCriptografado;
        tituloMensagem.textContent = "Texto descriptografado com êxito!";
        paragrafo.textContent = "";
        imagem.src = "./assets/descriptografia.png";     
  
      } else {
        imagem.src = "./assets/detetive.jpg";
        tituloMensagem.textContent =  "Nenhuma mensagem foi encontrada!";
        paragrafo.textContent ="Digite o texto que deseja descriptografar.";
        swal("Tem que digitar um texto!","");
      }
  }

  function copiarTexto() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let imagem = document.getElementById("imagem");
    let textoCopiado = document.getElementById("texto");
    let textoCopiar = texto;
    
    if (texto.length !=0){
      textoCopiado.select();
      textoCopiado.setSelectionRange(0, 99999)
      document.execCommand("copy");
      tituloMensagem.textContent = "Texto copiado com êxito!";
      paragrafo.textContent = "";
      imagem.src ="./assets/copiar.png"
      
    } else {
      imagem.src = "./assets/detetive.jpg";
      tituloMensagem.textContent =  "Nenhum texto foi encontrado!";
      paragrafo.textContent ="Digite o texto que deseja copiar.";
      swal("Tem que digitar um texto!","");
    }    
}


  
