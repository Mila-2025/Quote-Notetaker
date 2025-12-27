let quoteInput = document.querySelector('#quote-input');
// 👉 Браузер ищет input с id="quote-input" (где пишут цитату)
// 👉 И кладёт его в переменную quoteInput
// Теперь JS «держит ссылку» на это поле.

let authorInput = document.querySelector('#author-input');
// 👉 То же самое, но для поля автор.

let button = document.querySelector('#add-quote');
// 👉 Находим кнопку Add quote, чтобы отследить клик.

let list = document.querySelector('#quotes-list');
// 👉 Находим <ul>, куда будем добавлять цитаты.

button.addEventListener('click', function () {
// 👉 Говорим браузеру:
// «Когда пользователь нажмёт на кнопку — выполни код внутри».
// Без этого ничего не будет происходить.

    let quote = quoteInput.value;
// 👉 Берём текст, который ввёл пользователь в поле цитаты.
    let author = authorInput.value;
// 👉 Берём текст из поля автор.

    if (quote === '' || author === '') {
        return;
    }
//     👉 Если цитата ИЛИ автор пустые
// 👉 return = остановись и ничего не делай дальше
// Это защита от пустых заметок.

    let li = document.createElement('li');
//     👉 Создаём новый HTML-элемент <li>
// Он пока существует только в памяти, на странице его ещё нет.

    li.innerHTML = `<span>"${quote}"</span><br><span class="text-stone-500 not-italic text-xs">— ${author}</span>`;
//<span>"${quote}"</span> → текст цитаты
//<br> → перенос строки
//второй <span> → автор
//text-stone-500 → светло-серый
//text-xs → маленький текст
//not-italic → чтобы автор не был курсивом

        li.classList.add(
        'border-l-4',
        'border-stone-300',
        'pl-4',
        'italic',
        'text-sm'
    );
//     border-l-4 → толстая линия слева
// border-stone-300 → цвет линии
// pl-4 → отступ от линии
// italic → курсив (для цитаты)
// text-sm → немного меньше текст


    list.appendChild(li);
// 👉 Говорим:«Добавь этот <li> внутрь <ul>» И цитата появляется на экране.
    quoteInput.value = '';
    authorInput.value = '';
// 👉 Очищаем оба input’а
// 👉 Пользователь может сразу писать новую цитату.

});
// 👉 Конец кода, который выполняется при клике.
