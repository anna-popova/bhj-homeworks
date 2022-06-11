const editor = document.getElementById('editor');
const editorText = {};

editor.addEventListener('input', (e) => {
	editorText.text = editor.value;
	// console.log(editorText);
	saveObj('text', editorText);
});

window.onload = function() {
	let newText = restoreObj('text');
	// console.log(newText.text);
	editor.value = newText.text;
}

function saveObj(key, obj) {
	localStorage.setItem(key, JSON.stringify(obj));
}

function restoreObj(key) {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch {
		return null;
	}
}

