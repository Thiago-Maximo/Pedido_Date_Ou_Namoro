document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const btnYes = document.querySelector('.btn-yes');
    const btnNo = document.querySelector('.btn-no');
    const btnContainer = document.querySelector('.btn-container');
    
    // Abrir envelope ao clicar
    envelope.addEventListener('click', function() {
        envelope.classList.add('open');
        btnContainer.style.opacity = 1; // Torna os botões visíveis
    });
    
    // Botões que redirecionam para WhatsApp
    function sendWhatsAppMessage(isAccepted) {
        const phoneNumber = 'SEU_NUMERO_AQUI'; // Substitua pelo seu número com código do país
        const acceptMsg = 'Estou aceitando seu convite para o encontro!'; // mensagem que vc ira receber se a pessoa aceitar o convite/pedido
        const declineMsg = 'Obrigada pelo convite, mas preciso recusar.'; // mensagem que vc ira receber se a pessoa recusar o convite/pedido
        const message = isAccepted ? acceptMsg : declineMsg;
        const whatsappUrl = `https://wa.me/5511987654321?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
    
    btnYes.addEventListener('click', function() {
        sendWhatsAppMessage(true);
    });
    
    btnNo.addEventListener('click', function() {
        sendWhatsAppMessage(false);
    });
});
