function validandoDados(){
    var erro = document.getElementById('mensagem-erro');
    erro.innerHTML = ''
    erro.style.display = 'none'
    var msg = document.getElementById('mensagem-erro')
    var campok = true;

    ////////////

    var email = frmentrar.email.value;
    if (email == 'admin@teste.com.br'){
        console.log("O e-mail é válido!");   
    } else {
      console.log("O e-mail é inválido!");
      erro.style.display = 'block';
        msg.textContent ='O campo e-mail não pode estar vazio ou está errado';
        frmentrar.email.focus();
        campok = false;
        return false;
}

}

