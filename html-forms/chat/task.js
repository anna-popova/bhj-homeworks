const openChatButton = document.querySelector('.chat-widget__side-text');
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages')
const chatWidgetInput = document.getElementById('chat-widget__input');

const botGreeting = 'Приветики-пистолетики!';
const botAnswers = ['Чё?', 'Да я хз вообще чё делать', 'Что ты хочешь от меня, я просто бот!', 'Я вообще не в теме', 'Ля-ля-ля', 'Не хочу! Не буду!'];

const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

//Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
openChatButton.addEventListener('click', () => {
	chatWidget.classList.add('chat-widget_active');

	//сразу сообщение от бота при открытии окна
	messages.innerHTML += `
	<div class="message">
		<div class="message__time">${hours}:${minutes}</div>
		<div class="message__text">${botGreeting}</div>
	</div>
	`
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

		//сразу после сообщения пользователя приходит в чат сообщение от бота
		getRandomBotAnswer();
	}
})

//Реализуйте ответ робота (случайное сообщение из списка)
function getRandomBotAnswer() {
	const rand = Math.floor(Math.random()*botAnswers.length);
	const rValue = botAnswers[rand];
	
	messages.innerHTML += `
	<div class="message">
		<div class="message__time">${hours}:${minutes}</div>
		<div class="message__text">${rValue}</div>
	</div>
	`
}
