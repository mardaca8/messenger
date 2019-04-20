var message = document.querySelector('#txt');
var button = document.getElementById('btn');
var input = document.getElementById('input');
var ul = document.getElementById('ul');
var container = document.getElementById('container');

function scrollDown() {
    container.scrollTop = container.scrollHeight;
}

button.addEventListener('click', function(){
	var newMessage = document.createElement('li');
	newMessage.innerHTML = input.value;
	ul.appendChild(newMessage);
    input.value = ' ';
    
    scrollDown();
});

input.addEventListener('keypress', function(e) {
    console.log('keypress')
    if(e.keyCode === 13)
        button.click();
});
