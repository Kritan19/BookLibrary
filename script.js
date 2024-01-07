const booksLibrary = [];

function book(title,pages,status,author){
    this.title = title,
    this.pages = pages,
    this.auther = author,
    this.status = status;
}

function addBookToLibrary(event){
    //prevent form submission ot server
    event.preventDefault();

    //getting data that user inputed
    var book_title = document.getElementById('title').value;
    var book_pages = document.getElementById('pages').value;
    var book_author = document.getElementById('author').value;
    var book_status = document.getElementById('status').value;

    //using the book constructor to store data in form of object;
    var formData = new book(book_title,book_pages,book_status,book_author);

    //using stack data structure to add form in the booksLibrary Array
    booksLibrary.push(formData);

    //clearing the form .
    document.getElementById('title').value ='';
    document.getElementById('pages').value ='';
    document.getElementById('author').value ='';
    document.getElementById('status').value ='';


}