export class Board {
  width;
  height;
  falling = false;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    if (this.falling) {
      return `.${this.color}.
...
...
`;
    } else {
      return `...
...
...
`;
    }
    
  }

  drop(obj) {
    this.falling = true;
    this.color = obj.color;
  }
}
