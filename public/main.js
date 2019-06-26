const socket = io.connect('http://localhost:4000');
const submit = document.getElementById('submit');
const message = document.getElementById('message');
const name = document.getElementById('name');
const output = document.getElementById('output');
submit.addEventListener('click',function(){
    socket.emit('chat',{
        message: message.value,
        name: name.value
    });
})
socket.on('chat',(chat) => {
    output.innerHTML = output.innerHTML + `<p>${chat.name}: <b>${chat.message}</b></p>`;
})