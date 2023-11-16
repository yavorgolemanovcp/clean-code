interface Printable {
  getContent(): string;
}

class Book implements Printable {
  content: string;

  constructor(content: string) {
      this.content = content;
  }

  getContent(): string {
      return this.content;
  }
}

class Printer {
  // Now this method is loosely coupled and can print any Printable object
  print(printable: Printable): void {
      console.log("Printing: " + printable.getContent());
  }
}