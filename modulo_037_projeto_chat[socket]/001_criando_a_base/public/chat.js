const socket = io('http://localhost:3000');

socket.on('update_messages', (messages)=> {
    updateMessagesOnScreen(messages);
});

function updateMessagesOnScreen(messages) {
    const div_messages = document.querySelector('#messages');

    let list_messages = '<ul>';

    messages.forEach(message => {
        list_messages += `<li>${message}</li>`
    });
    
    list_messages += '</ul>';    
    div_messages.innerHTML = list_messages;
}

document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.querySelector('#message_form');

    form.addEventListener('submit', (e)=> {
        e.preventDefault();

        //Uma outra forma de pegar o valor de uma input.
        const message = document.forms['message_form_name']['msg'].value;

        document.forms['message_form_name']['msg'].value = '';

        socket.emit('new_message', {msg: message});
    });
})