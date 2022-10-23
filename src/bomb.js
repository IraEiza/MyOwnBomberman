function Bomb() {
    this.x = player.x;
    this.y = player.y;
    this.timer = 2000;
    same = this;
    this.showBomb = function() {
        window.addEventListener('keydown', (button) =>{
            if(button.code === 'Space') {
                let bomb = document.querySelector(`#row${player.y} #col${player.x}`);
                bomb.classList.add('bomb');
                bombs.push({
                    x: this.x, 
                    y: this.y})
            console.log(bombs) /*
                
            setTimeout(function() {
            let bomb = document.querySelector(`#row${bombs[0].y} #col${bombs[0].x}`);
            bomb.classList.remove('bomb');
            bombs.shift()
            }, this.timer)*/
            }
        })
        
    };
    this.removeBomb = function() {
        
    }
}