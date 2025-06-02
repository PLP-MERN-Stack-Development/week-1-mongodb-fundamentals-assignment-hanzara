CRUD Queries (queries.js)
javascript

// Find all books in a specific genre
db.books.find({ genre: "Self-help" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } });

// Find books by a specific author
db.books.find({ author: "George Orwell" });

// Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "Brave New World" });
✅ Task 3: Advanced Queries
javascript

// Books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection: title, author, and price only
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sort by price (ascending)
db.books.find().sort({ price: 1 });

// Sort by price (descending)
db.books.find().sort({ price: -1 });

// Pagination (Page 1)
db.books.find().skip(0).limit(5);

// Pagination (Page 2)
db.books.find().skip(5).limit(5);
✅ Task 4: Aggregation Pipeline
javascript

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $concat: [ { $toString: { $multiply: ["$_id", 10] } }, "s" ] },
      count: 1
    }
  }
]);

✅ Task 5: Indexing
javascript

// Create index on title
db.books.createIndex({ title: 1 });

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// Explain query before indexing
db.books.find({ title: "1984" }).explain("executionStats");

// Explain query after indexing
db.books.find({ title: "1984" }).explain("executionStats");
