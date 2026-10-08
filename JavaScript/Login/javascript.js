const formulario = document.querySelector("#formCadastro");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.querySelector("#usuario").value;
    const senha = document.querySelector("#senha").value;
    const formulario = document.querySelector("#formCadastro");
    const confirmarSenha = document.querySelector("#confirmarSenha").value;

    
    

    // VALIDAÇÃO DO USUÁRIO 

    if (!/^[a-z]{4}$/.test(usuario)) {
        alert("O usuário deve ter exatamente 4 letras minúsculas.");
        return;
    }


    // VALIDAÇÃO DA SENHA

    if (senha.length > 6) {
        alert("A senha deve ter no máximo 6 caracteres.");
        return;
    }

    if (!/[A-Z]/.test(senha)) {
        alert("A senha precisa ter pelo menos uma letra maiúscula.");
        return;
    }

    if (!/[a-z]/.test(senha)) {
        alert("A senha precisa ter pelo menos uma letra minúscula.");
        return;
    }

    if (!/[0-9]/.test(senha)) {
        alert("A senha precisa ter pelo menos um número.");
        return;
    }

    if (!/[^A-Za-z0-9]/.test(senha)) {
        alert("A senha precisa ter pelo menos um caractere especial.");
        return;
    }


    // CONFIRMAÇÃO DA SENHA

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }


    // CADASTRO APROVADO

    alert("Cadastro realizado com sucesso!");
    

});


// OLHO: MOSTRAR / ESCONDER SENHA E CONFIRMAÇÃO

const campos = [
    document.querySelector("#senha"),
    document.querySelector("#confirmarSenha")
];

document.querySelectorAll(".olho").forEach(function(botao) {

    botao.addEventListener("click", function() {

        const mostrar = campos[0].type === "password";

        campos.forEach(function(campo) {
            campo.type = mostrar ? "text" : "password";
        });

        document.querySelectorAll(".olho").forEach(function(b) {
            b.classList.toggle("ativo", mostrar);
            b.setAttribute("aria-pressed", mostrar);
            b.setAttribute("aria-label", mostrar ? "Esconder senhas" : "Mostrar senhas");
        });

    });

});
