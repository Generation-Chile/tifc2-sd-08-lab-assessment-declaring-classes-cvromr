export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
    this.info = function() {
      console.log(this.name + " has reached Level " + this.level + "!")
    }
    this.levelUp = function() {
      this.level++
    }
  }
  }

  const player1 = new Player("Tara", 6);
  console.log (player1.info())
 

  //•	Finalmente, defina un segundo método de objeto compartido llamado levelUp()que incrementará en 1 el nivel del Player.