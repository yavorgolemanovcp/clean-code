class Engine {
  start() { /* ... */ }
}

class Car {
  engine: Engine;

  constructor() {
      this.engine = new Engine();
  }

  getEngine() {
      return this.engine;
  }
}

const myCar = new Car();
myCar.getEngine().start();  // This violates the Law of Demeter