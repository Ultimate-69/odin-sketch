const container = document.querySelector('.container');


for (i = 0; i < 16; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);

    for (k = 0; k < 16; k++)
    {
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        column.appendChild(newDiv);
    }

}

let divs = document.querySelectorAll('.grid');

divs.forEach((value) => {
    value.addEventListener('mouseover', () => {
        value.style.backgroundColor = 'blue';
    })
});