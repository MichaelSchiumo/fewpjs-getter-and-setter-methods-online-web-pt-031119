// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius *2
  }

  get circumference() {
    return this.diameter*Math.PI
  }

  get area() {
    return Math.PI * this.radius ** 2
  }

  set diameter(diameter) {
    this.radius = this.diameter/2
    // this._radius = (this.circumference/this.diameter)/Math.PI
  }
}
