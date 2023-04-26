
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let confirmarSenha = document.getElementById('confirmarSenha');
let btnConfirmar = document.getElementById('Confirmar');


btnConfirmar.addEventListener('click', function(e) {
    if(email.value == "" || senha.value == "" || confirmarSenha.value == ""){
        window.alert('Complete todos os campos animal do krl 🤬😡🤬😡😡🤬😡');
    }
    else if(senha.value != confirmarSenha.value){
        alert('Confere a senha krl burro da poha');
    }
    else{
        alert('Deu Certo Poha!!!!! nice animal');
    }
});