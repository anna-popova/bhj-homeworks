const openChatButton = document.querySelector('.chat-widget__side-text');
const chatWidget = document.querySelector('.chat-widget');
const messages = Array.from(document.querySelectorAll('.chat-widget__messages'));
console.log(messages);
const chatWidgetInput = document.getElementById('chat-widget__input');

//Реализуйте открытие окна чата при нажатии на красный боковой бэйдж
openChatButton.addEventListener('click', () => {
	chatWidget.classList.add('chat-widget_active');
});

//По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
document.addEventListener('keyup', (event) => {
	//?проверка на непустое значение chatWidgetInput.textContent на стр. 13 верна?
	// if (event.key == 'Enter' && chatWidgetInput.textContent !== '')
	if (event.key == 'Enter') {
		messages.innerHTML += `
		<div class="message message_client">
			//?как подставить текущее время?
			<div class="message__time">09:21</div>
			//?как вместо фиксированной строки вставить текст, который вводит пользователь?
			<div class="message__text">
				Добрый день, мы ещё не проснулись. Позвоните через 10 лет
			</div>
		</div>
		`;
		console.log(messages);
	}
})

//Реализуйте ответ робота (случайное сообщение из списка)
//?Какого списка? Гле этот список взять?

//Проставляйте реальную дату переписки