function validarDados() {

    let nome = frm.Nome.value
    let endereco = frm.endereco.value
    let cidade = frm.cidade.value
    let uf = frm.uf.value
    let email = frm.email.value
    let senha = frm.senha.value
    let nascimento = frm.data.value
    let telefone = frm.telefone.value
    let nome2 = frm.nome2.value
    let Tipo = frm.endereco.value
    let Idade = frm.endereco.value

    let padraoEmail = /^[\w-.]+@(gmail.com|sesisp.org.br|hotmail.com|[a-zA-Z0-9-]+.[a-zA-Z]{2,3}.br)$/
    let emailValido = padraoEmail.test(email);
    let erro = document.getElementById("mensagem-erro")
    let anuario = nascimento.split("-")
    let ano = anuario[0];
    let padraoNumero = /^(\d{2}\s)?\d{4,5}(-?\d{4})?$/
    let numeroVerificado = padraoNumero.test(telefone);

    var padraoSenha = /^(?=.\d)(?=.[A-Z])(?=.[a-z])(?=.[@#$%!?]).{8,}$/
    var senhaTestada = padraoSenha.test(senha);

    erro.style.backgroundColor = '';
    erro.style.color = ''
    erro.style.display = '';

    if(nome.trim()=='')
    {erro.innerHTML = "o campo nome não pode estar vazio!";
    erro.style.display = 'block';
    return false;}

    if (nome.length < 3) {
        erro.innerHTML = "o campo nome não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (nome.length > 100) {
        erro.innerHTML = "o campo nome não pode ter mais de 100 caracteres!";
        erro.style.display = 'block';
        return false;
    }

    if (endereco.trim() == '') {
        erro.innerHTML = "o campo endereço não pode estar vazio!";
        erro.style.display = 'block';
        return false;
    }
    if (endereco.length < 3) {
        erro.innerHTML = "o campo endereço não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (endereco.length > 100) {
        erro.innerHTML = "o campo endereço não pode ter mais de 100 caracteres!";
        erro.style.display = 'block';
        return false;
    }

    if (cidade.trim() == '') {
        erro.innerHTML = "o campo cidade não pode estar vazio!";
        erro.style.display = 'block';
        return false;
    }
    if (cidade.length < 3) {
        erro.innerHTML = "o campo cidade não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (cidade.length > 50) {
        erro.innerHTML = "o campo cidade não pode ter mais de 50 caracteres!";
        erro.style.display = 'block';
        return false;
    }

    if (uf.length >= 2) {
        let padrao = /^[A-Z]{2}$/
        if (padrao.test(uf) == false) {
            erro.innerHTML = "Coloque em maiuscula a unidade federativa!";
            erro.style.display = 'block';
            return false;
        }
        else {
            erro.style.display = 'none';
        }
    }
    else {
        erro.innerHTML = "Coloque uma unidade federativa válida!";
        erro.style.display = 'block';
        return false;
    }

    if (email < 3 || email > 100) {
        erro.innerHTML = "O Email não pode ter menos de 3 caracteres e mais de 100!";
        erro.style.display = 'block';
        return false;
    }

    if (emailValido == false) {
        erro.innerHTML = "O Email está incorreto ou não é valido!";
        erro.style.display = 'block';
        return false;
    }

    if (senha.length < 8) {
        erro.style.display = 'block';
        erro.innerHTML = ("A Senha deve conter pelo menos 8 caracteres e não pode ser maior que 30 caracteres");
        return false;
    }

    if (senhaTestada = false) {
        erro.innerHTML = senha;
        erro.style.display = 'block';
        return false;
    }

    if (ano >= '2023') {
        erro.innerHTML = "Por favor insira uma data de nascimento válida";
        erro.style.display = 'block';
        return false;
    }
    if (ano.trim() == '') {
        erro.innerHTML = "Porfavor preencha uma data";
        erro.style.display = 'block';
        return false;
    }

    if (numeroVerificado == false) {
        erro.innerHTML = "Numero de Telefone Invalido!";
        erro.style.display = 'block';
        return false;
    }

    if(nome2.trim()=='')
    {erro.innerHTML = "o campo nome do pet não pode estar vazio!";
    erro.style.display = 'block';
    return false;}

    if (nome2.length < 3) {
        erro.innerHTML = "o campo nome do pet não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (nome2.length > 100) {
        erro.innerHTML = "o campo nome do pet não pode ter mais de 100 caracteres!";
        erro.style.display = 'block';
        return false;
    }

    if(Tipo.trim()=='')
    {erro.innerHTML = "o campo do tipo de pet não pode estar vazio!";
    erro.style.display = 'block';
    return false;}

    if (Tipo.length < 3) {
        erro.innerHTML = "o campo do tipo de pet não pode ter menos de 3 caracteres!";
        erro.style.display = 'block';
        return false;
    }
    if (Tipo.length > 100) {
        erro.innerHTML = "o campo do tipo de pet não pode ter mais de 100 caracteres!";
        erro.style.display = 'block';
        return false;
    }

    if (Idade<0) {
        erro.innerHTML = "Insira uma idade valida";
        erro.style.display = 'block';
        return false;
    }



}