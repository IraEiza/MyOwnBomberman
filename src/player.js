function Player(x, y) {
    this.x = x;
    this.y = y;
    this.direction = '';
    this.showPlayer = function() {
        let player = document.querySelector(`#row${this.y} #col${this.x}`);
        player.classList.add('player');
    };
    this.removePlayer = function() {
        let player = document.querySelector(`#row${this.y} #col${this.x}`);
        player.classList.remove('player');
    };
    this.checkBoundaries = function(direction) {
        boundaries = [
            'boundary-up', 
            'boundary-down', 
            'boundary-left',
            'boundary-right',
            'hard-rock',
            'soft-rock',
            'soft-rock door',
            'enemy',
            'player',
            'bomb'
        ];
        switch (direction) {
            case 'w':
            let cellW = document.querySelector(`#row${this.y-1} #col${this.x}`);
            return boundaries.includes(cellW.getAttribute('class')) ? true : false;
            case 'a':
            let cellA = document.querySelector(`#row${this.y} #col${this.x-1}`);
            return boundaries.includes(cellA.getAttribute('class')) ? true : false;
            case 'd':
            let cellS = document.querySelector(`#row${this.y} #col${this.x+1}`);
            return boundaries.includes(cellS.getAttribute('class')) ? true : false;
            case 's':
            let cellD = document.querySelector(`#row${this.y+1} #col${this.x}`);
            return boundaries.includes(cellD.getAttribute('class')) ? true : false;
        }
    };
    this.movePlayer = function() {
        window.addEventListener('keydown', (button) => {
            switch (button.key) {
                case 'w' :
                    this.direction = 'w'
                    if(!this.checkBoundaries('w')) {
                        this.removePlayer()
                        this.y--;
                        this.showPlayer()
                    }
                    break;
                case 'a' :
                    this.direction = 'a'
                    if(!this.checkBoundaries('a')) {
                        this.removePlayer()
                        this.x--;
                        this.showPlayer()
                    }
                    break;
                case 's' :
                    this.direction = 's'
                    if(!this.checkBoundaries('s')) {
                        this.removePlayer()
                        this.y++;
                        this.showPlayer()
                    }
                    break;
                case 'd' :
                    this.direction = 'd'
                    if(!this.checkBoundaries('d')) {
                        this.removePlayer()
                        this.x++;
                        this.showPlayer()
                    }
                    break;
            }
        })
    };
}