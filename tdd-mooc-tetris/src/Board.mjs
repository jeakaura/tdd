export class Board {
  width;
  height;
  falling = false;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let s = "";
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (this.falling && row == 0 && col == 1) {
          s += this.color;
        } else {
          s += ".";
        }
      }
      s += "\n";
    }
    return s;
  }

  drop(obj) {
    this.falling = true;
    this.color = obj.color;
  }
}
