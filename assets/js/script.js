let nome = document.getElementById("nome");
let email = document.getElementById("email");
let mensagem = document.getElementById("mensagem");

function validaNome (){
  let txt = document.querySelector("#txtNome")
  if (nome.value.length <= 2 ){
    txt.innerHTML = "nome inválido"
    txt.style.color = "red"
  }else{
    txt.innerHTML = "nome válido"
    txt.style.color = "green"
  }
}

function validaEmail (){
 let txt = document.querySelector("#txtEmail") 
 if (email.value.indexOf("@") == -1){
  txtEmail.innerHTML = "email inválido"
  txtEmail.style.color = "red"
 }
}