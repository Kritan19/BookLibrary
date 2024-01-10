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

    document.details.title.value = ''
    document.details.pages.value = ''
    document.details.author.value = ''
    document.details.select_status.value = ''
}
function displayBook(arr){
    const thead = document.querySelector('thead');
    for( i = 0 ; i < booksLibrary.length ; i++){
        var tr  = document.createElement('tr');  
        tr.style.backgroundColor = 'whitesmoke';
        tr.style.color = 'black';

        var row_title = tr.appendChild(document.createElement('td'));
        var row_pages = tr.appendChild(document.createElement('td'));
        var row_author = tr.appendChild(document.createElement('td'));
        var row_status = tr.appendChild(document.createElement('td'));
        var row_activity = tr.appendChild(document.createElement('td'));
        var row_delete= row_activity.appendChild(document.createElement('button'));
        var row_status_change = row_activity.appendChild(document.createElement('button'));

        row_title.innerHTML = arr[i].title;
        row_pages.innerHTML = arr[i].pages;
        row_author.innerHTML = arr[i].author;
        row_status.innerHTML = arr[i].status;
        
        row_delete.innerHTML = 'Delete';
        row_delete.style.backgroundColor='red';
        row_delete.style.color = 'white';
        

        row_status_change.style.width='100px'

        if(arr[i].status == "complete"){
            row_status.style.backgroundColor ='#90ee90';

            row_status_change.innerHTML = 'not complete';
            row_status_change.style.backgroundColor = '#FF7F7F';
        }
        else if(arr[i].status == "incomplete"){
            row_status.style.backgroundColor ='	#FF7F7F';

            row_status_change.innerHTML = 'Completed'; 
            row_status_change.style.backgroundColor = '#90ee90';           
        }
    }
    thead.appendChild(tr);
}
//main program starts here;
const booksLibrary = [];
