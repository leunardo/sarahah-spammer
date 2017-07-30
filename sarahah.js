// Variaveis para default, não mexa
// Default variables, dont change it
var fn = SendMessage.toString();
var tokenInit = fn.indexOf('value');
var tokenEnd = fn.indexOf('value', tokenInit + 1);
var strToken = fn.slice(tokenInit, tokenEnd);
var token = strToken.split(`"`)[1];
var nMsgSent = 0;
var interval;

// ------- Altere aqui ---------- //
// ------- Change here ---------- //

// Especifique aqui a mensagem
// Especify here the message to be sent
var texto = 'Haha';

// Especifique aqui o numero de mensagens, não coloque muito pro seu ip não ser bloqueado
// Number of messages, take care to not put a very high number for your ip not to be blocked
var numeroMensagens = 10;

// Especifique aqui o atraso entre cada mensagem em SEGUNDOS. 0 para sem atraso.
// Especify here the delay between messages in SECONDS. 0 for none.
var delay = 0; 

// --------------------------- //
// --------------------------- //

SendMessage = function SendMessage() {
    var text = texto;
    var userId = $('#RecipientId').val(); 
    nMsgSent++;

    if(numeroMensagens === nMsgSent) 
        clearInterval(interval);

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

if (delay === 0)
    for (i = 0; i < numeroMensagens; i++)
        SendMessage();
else {
    interval = setInterval(SendMessage, delay * 1000);
}
