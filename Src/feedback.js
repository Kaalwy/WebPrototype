// script para feedback interativo
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // evita envio padrao do formulario

    // coleta dos dados e coloca eles guardados nas variaveis
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // verifica se os campos nao estao vazios
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }

    // validar telefone
    if (telefone !== '') {
        const telefonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
        if (!telefonePattern.test(telefone)) {
            alert('Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.');
            return;
        }
    }

    alert('Sua mensagem foi enviada com sucesso! Em breve entrarei em contato.');

    // reseta formulario
    document.getElementById('contactForm').reset();
});