let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let history = [];

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function append(value) {
    display.value += value;
}

function calculate() {
    try {
        let result = eval(display.value);
        history.push(`${display.value} = ${result}`);
        updateHistory();
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function updateHistory() {
    historyList.innerHTML = '';
    history.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function toggleHistory() {
    let historyDiv = document.getElementById('history');
    if (historyDiv.style.display === 'none' || historyDiv.style.display === '') {
        historyDiv.style.display = 'block';
    } else {
        historyDiv.style.display = 'none';
    }
}