function Enemy(x, y, speed, health) {
    this.x = x;
    this.y = y;
    this.direction = '';
    this.timerId = 0;
    this.speed = speed;
    this.health = health;
    self = this;
    this.showEnemy = function() {
        let enemy = document.querySelector(`#row${this.y} #col${this.x}`);
        enemy.classList.add('enemy');
    };
    this.removeEnemy = function() {
        let enemy = document.querySelector(`#row${this.y} #col${this.x}`);
        enemy.classList.remove('enemy');
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
    this.moveEnemy = function() {
        this.timerId = setInterval(function() {
            self.removeEnemy()
            if(self.y > player.y && !self.checkBoundaries('w')) {self.y--;}
            if(self.y < player.y && !self.checkBoundaries('s')) {self.y++;}
            if(self.x > player.x && !self.checkBoundaries('a')) {self.x--;}
            if(self.x < player.x && !self.checkBoundaries('d')) {self.x++;}
            self.showEnemy()

        }, this.speed)
    };
}