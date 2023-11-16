
class Square {
  public side;
}
class Rectangle {
  public height;
  public width;
}
class Circle {
  public radius;
}
class Geometry {
  public PI = 3.141592653589793;

  public area(shape: Object) {
    if (shape instanceof Square) {
      return shape.side * shape.side;
    }
    else if (shape instanceof Rectangle) {
      return shape.height * shape.width;
    }
    else if (shape instanceof Circle) {
      return this.PI * shape.radius * shape.radius;
    }

  }
}