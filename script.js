let fields = [
    null,    // 0
    null,    // 1
    null,    // 3
    null,    // 4
    null,    // 5
    null,    // 6
    null,    // 7
    null     // 8
];

function render() {
    const table = document.getElementById('game-board');
    table.innerHTML = ''; // Clear the table content

    for (let row = 0; row < 3; row++) {
        const newRow = document.createElement('tr');

        for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;
            const newCell = document.createElement('td');
            newCell.textContent = fields[index] === 'x' ? 'X' : fields[index] === 'o' ? 'O' : '';
            newRow.appendChild(newCell);
        }

        table.appendChild(newRow);
    }
}

fields[4] = 'x';
fields[1] = 'o';
fields[7] = 'x';
render();