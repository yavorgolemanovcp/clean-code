
class UserAndContentManager {
  users: User[];
  articles: Article[];

  constructor() {
      this.users = [];
      this.articles = [];
  }

  addUser(user: User): void {
      // Add a new user to the users array
      this.users.push(user);
  }

  addArticle(article: Article): void {
      // Add a new article to the articles array
      this.articles.push(article);
  }
}



// see virava utils/helpers file 