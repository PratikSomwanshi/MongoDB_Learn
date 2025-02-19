// cursor is a object of set of documents return by
// mongodb when try to fetch all records using find()
// it sends only couple of record to save bandwidth

// suppose I have 100 records in my collection
// and I want to fetch all records
// so I will use find() method
// find() method will return cursor object
// cursor object is a object of set of documents
// which is returned by mongodb which may have only 20 items
// and if we want all items then just use .toArray() method

db.users.find().toArray();

// above line of code will return all documents from collections
