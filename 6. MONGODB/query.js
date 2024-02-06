// db.books.find()

// db.books.find({"pages" : {$eq : 176}});
// db.books.find({"pages" : {$ne : 224}});

// db.books.find({"pages" : {$gt : 176}});
// db.books.find({"pages" : {$gte : 328}});

// db.books.find({"pages" : {$it : 185}});
// db.books.find({"pages" : {$lte : 505}});

// db.books.find({"pages" : {$in : [176,328,505]}});
db.books.find({"pages" : {$nin : [176,328,505]}});
