function book(title,pages,status,author){
    this.title = title,
    this.pages = pages,
    this.author = author,
    this.status = status;
}
function addBookToLibrary(event){
    //prevent form submission to server
    event.preventDefault();

    //getting data that user inputed
    var book_title = document.details.title.value;
    var book_pages = document.details.pages.value;
    var book_author= document.details.author.value;
    var book_status= document.details.select_status.value;

    //using the book constructor to store data in form of object;

    var new_book = new book(book_title,book_pages,book_status,book_author);

    //using stack data structure to add form in the booksLibrary Array
    booksLibrary.push(new_book);


    //displaying content in the table
    displayBook(booksLibrary)
}
function displayBook(arr){


    const thead = document.querySelector('thead');

    var tr  = document.createElement('tr');
    
    tr.style.backgroundColor = 'white';
    tr.style.color = 'black';
    for( i = 0 ; i < booksLibrary.length ; i++){
        var row_title = tr.appendChild(document.createElement('td'));
        var row_pages = tr.appendChild(document.createElement('td'));
        var row_author = tr.appendChild(document.createElement('td'));
        var row_status = tr.appendChild(document.createElement('td'));

        row_title.innerHTML = arr[i].title;
        row_pages.innerHTML = arr[i].pages;
        row_author.innerHTML = arr[i].author;
        row_status.innerHTML = arr[i].status;
    }

    thead.appendChild(tr);
}

//main program strts here;
const booksLibrary = [];
displayBook(booksLibrary);

console.log(book)