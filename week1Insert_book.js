// Run in mongosh
use plp_bookstore;
db.createCollection("books");

Task 2: Basic CRUD Operations
insert_books.js
javascript
Copy
Edit
db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 15,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 20,
    in_stock: true,
    pages: 498,
    publisher: "Harper"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 30,
    in_stock: false,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 12,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 18,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 28,
    in_stock: false,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    published_year: 1960,
    price: 10,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 22,
    in_stock: true,
    pages: 499,
    publisher: "Farrar, Straus and Giroux"
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Self-help",
    published_year: 2012,
    price: 16,
    in_stock: false,
    pages: 371,
    publisher: "Random House"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    published_year: 1932,
    price: 14,
    in_stock: true,
    pages: 268,
    publisher: "Chatto & Windus"
  }
]);
