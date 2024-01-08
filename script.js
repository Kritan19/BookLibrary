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
    var book_title = document.details.title.value;
    var book_pages = document.details.pages.value;
    var book_author= document.details.author.value;
    var book_status= document.details.select_status.value;

    console.log(book_title);
    console.log(book_pages);
    console.log(book_author);
    console.log(book_status);


    //using the book constructor to store data in form of object;
    var formData = new book(book_title,book_pages,book_status,book_author);

    //using stack data structure to add form in the booksLibrary Array
    booksLibrary.push(formData);
    console.log("booksLibrary :",booksLibrary);
    
}

