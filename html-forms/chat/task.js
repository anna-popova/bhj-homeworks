const openChatButton = document.querySelector('.chat-widget__side-text');
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages')
const chatWidgetInput = document.getElementById('chat-widget__input');

const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

//Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
openChatButton.addEventListener('click', () => {
	chatWidget.classList.add('chat-widget_active');
});

//По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
document.addEventListener('keyup', (event) => {

	if (event.key === 'Enter' && chatWidgetInput.value !== '') {
		const messageClientText = chatWidgetInput.value;

		messages.innerHTML += `
		<div class="message message_client">
			<div class="message__time">${hours}:${minutes}</div>
			<div class="message__text">${messageClientText}</div>
		</div>
		`

		chatWidgetInput.value = '';
	}
})

//Реализуйте ответ робота (случайное сообщение из списка)
//?Какого списка? Где этот список взять?