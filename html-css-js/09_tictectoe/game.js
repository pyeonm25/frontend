class TicTacToe {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
}


class Player {
  constructor(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
  }
}

// window.addEventListener("load", () => {
//   window.game = new TicTacToe(new Player('핑크', 'pink', 'O'), new Player('블루', 'blue', 'X'))
// })

const game = new TicTacToe(new Player('핑크', 'pink', 'O'), new Player('블루', 'blue', 'X')); 