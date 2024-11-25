const container = document.querySelector('.container');

let size = 16;

renderColumns();

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    size = parseInt(prompt('Choose a grid size (max: 100)'))
    if (size > 100 || size == 'undefined' || size == 'NaN') {
        size = 16;
    }
    renderColumns();
});

function selectDivs() {
    let divs = document.querySelectorAll('.grid');

    divs.forEach((value) => {
        value.addEventListener('mouseover', () => {
            value.style.backgroundColor = 'blue';
        })
    });
}

function renderColumns() {
    let columns = document.querySelectorAll('.column');
    columns.forEach((value) => {
        container.removeChild(value);
    });
    console.log('oi!');
    for (i = 0; i < size; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);
    
        for (k = 0; k < size; k++)
        {
            let newDiv = document.createElement('div');
            newDiv.classList.add('grid');
            column.appendChild(newDiv);
        }
    }
    selectDivs();
}