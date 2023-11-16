class Book {
  content: string;

  constructor(content: string) {
      this.content = content;
  }

  // Method to get the content of the book
  getContent(): string {
      return this.content;
  }
}

class Printer {
  // This method is tightly coupled to the Book class
  print(book: Book): void {
      console.log("Printing Book: " + book.getContent());
  }
}