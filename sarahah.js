// Variaveis para default, não mexa
// Default variables, dont change it
var fn = SendMessage.toString();
var tokenInit = fn.indexOf('value');
var tokenEnd = fn.indexOf('value', tokenInit + 1);
var strToken = fn.slice(tokenInit, tokenEnd);
var token = strToken.split(`"`)[1];

// ------- Altere aqui ---------- //
// ------- Change here ---------- //
var texto = 'Haha';
// Especifique aqui o numero de mensagens, não coloque muito pro seu ip não ser bloqueado
// Number of messages, take care to not put a very high number for your ip not to be blocked
var numeroMensagens = 10;
// --------------------------- //

SendMessage = function SendMessage() {
    var text = texto;
    var userId = $('#RecipientId').val(); 
    
    $.ajax({
        url: '/Messages/SendMessage',
        type: 'POST',
        cache: false,
        data: {
            __RequestVerificationToken: token,
            userId: userId,
            text: text
        },
        success: () => { console.log('Mensagem enviada - Message sent!') },
        error:  () => { console.log('Error') }
    });
}

for (i = 0; i < numeroMensagens; i++) SendMessage();