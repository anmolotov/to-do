const inputBox = document.querySelector('input');
const list = document.querySelector('#list-container');

// add the task
function addTask() {
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    list.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  storeData();
  inputBox.value = '';
}

// enter to add task
inputBox.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    document.querySelector('#addButton').click();
    inputBox.value = '';
  }
});

// check task or remove task
list.addEventListener('click', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.classList.toggle('checked');
    storeData();
  } else if (event.target.tagName == 'SPAN') {
    event.target.parentElement.remove();
    storeData();
  }
});

// store task
function storeData() {
  localStorage.setItem('data', list.innerHTML);
}

// display stored
function showTask() {
  list.innerHTML = localStorage.getItem('data');
}
showTask();
