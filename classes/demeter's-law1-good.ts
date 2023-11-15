class Engine1 {
  start() { /* ... */ }
}

class Car1 {
  private engine: Engine;

  constructor() {
      this.engine = new Engine();
  }

  startEngine() {
      this.engine.start();  // This adheres to the Law of Demeter
  }
}

const myCar1 = new Car1();
myCar1.startEngine();  // More encapsulated and less coupled