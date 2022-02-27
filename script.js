let deleteBtn = document.querySelectorAll(".delete");
let block1 = document.getElementById("block1");
let block2 = document.getElementById("block2");
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", function(el) {
    el.target.parentNode.remove();
    setNumbers();
  });
}
let addElement = document.querySelector(".btn-add1");
let addElement2 = document.querySelector(".btn-add2");
addElement.addEventListener("click", function() {
  var node = document.createElement("li");
  var del = document.createElement("span"); // добавляем span
  del.classList.add('delete'); // с классом .delete
  del.textContent = 'delete'; // и текстом "delete"
  del.addEventListener('click', function(el) { // обработчик удаления строки
    el.target.parentNode.remove();
  });

  var numb = document.createElement("span"); // добавляем span
  numb.classList.add('number'); // с классом .number

  node.appendChild(numb);
  node.appendChild(del);
  block1.appendChild(node);
  setNumbers();
});
addElement2.addEventListener("click", function() {
  var node = document.createElement("li");
  var del = document.createElement("span"); // добавляем span
  del.classList.add('delete'); // с классом .delete
  del.textContent = 'delete'; // и текстом "delete"
  del.addEventListener('click', function(el) { // обработчик удаления строки
    el.target.parentNode.remove();
  });

  var numb = document.createElement("span"); // добавляем span
  numb.classList.add('number'); // с классом .number

  node.appendChild(numb);
  node.appendChild(del);
  block2.appendChild(node);
  setNumbers();
});

setNumbers();


function setNumbers() { // перезаписываем все номера во всех списках
  var blocks = document.querySelectorAll('.block');
  for (var a = 0; a < blocks.length; a++) {
    var lines = blocks[a].querySelectorAll('li');
    for (var b = 0; b < lines.length; b++) {
      lines[b].querySelector('.number').textContent = b + 1;
    }
  }
}