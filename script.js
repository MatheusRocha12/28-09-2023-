// Este evento é acionado quando o conteúdo da página é completamente carregado.
document.addEventListener("DOMContentLoaded", function () {
    // Obtendo elementos do DOM
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const welcomeMessage = document.getElementById("welcome-message");

    // Adicionando um ouvinte de evento para o envio do formulário de login
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Impedindo o comportamento padrão de envio do formulário

        // Simulando a validação de login
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verificando se as credenciais são válidas (simulação)
        if (username === "math" && password === "123") {
            // Mostrar mensagem de boas-vindas com o nome do usuário
            welcomeMessage.textContent = `Bem-vindo, ${username}!`; // Preenchendo a mensagem de boas-vindas
            welcomeMessage.style.display = "block"; // Exibindo a mensagem de boas-vindas

            // Limpar mensagem de erro (se houver)
            errorMessage.textContent = "";

            // Ocultar o formulário após o login bem-sucedido
            loginForm.style.display = "none";
        } else {
            // Exibir mensagem de erro se as credenciais forem inválidas
            errorMessage.textContent = "Credenciais inválidas. Tente novamente.";
        }
    });
});
