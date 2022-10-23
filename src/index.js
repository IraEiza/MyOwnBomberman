let cell = document.querySelectorAll('#row2');
let player = new Player(3, 18);

/*En el html hay que poner primero el maps.js*/
var createBoard = function() {
    const board = document.querySelector('#board');
    maps[0].forEach((row,i) => {
        const tr = document.createElement('tr');
        tr.setAttribute("id", `row${i+1}`);
        row.forEach ((col,j) => {
        const td = document.createElement('td');
        td.setAttribute("id", `col${j+1}`);
        if(maps[0][i][j] === '^') {
            td.classList.add('boundary-up')
        } else if(maps[0][i][j] === 'v') {
            td.classList.add('boundary-down')
        } else if(maps[0][i][j] === '<') {
            td.classList.add('boundary-left')
        } else if(maps[0][i][j] === '>') {
            td.classList.add('boundary-right')
        } else if(maps[0][i][j] === '1') {
            td.classList.add('boundary-up-left')
        } else if(maps[0][i][j] === '2') {
            td.classList.add('boundary-up-right')
        } else if(maps[0][i][j] === '3') {
            td.classList.add('boundary-down-right')
        } else if(maps[0][i][j] === '4') {
            td.classList.add('boundary-down-left')
        } else if(maps[0][i][j] === '=') {
            td.classList.add('hard-rock')
        } else if(maps[0][i][j] === '-') {
            td.classList.add('soft-rock')
        }
        tr.appendChild(td)
        })
        board.appendChild(tr)
    })

}
createBoard()
player.showPlayer()
player.movePlayer()