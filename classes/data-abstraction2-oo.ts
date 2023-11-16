interface Shape {
  area();
}

 class Square implements Shape {
  private side;
  public area() {
    return this.side * this.side;
  }
}

class Rectangle implements Shape {
  private height;
  private width;
  public area() {
    return this.height * this.width;
  }
}

class Circle implements Shape {
  private radius;
  public  PI = 3.141592653589793;
  public  area() {
    return this.PI * this.radius * this.radius;
  }
}