// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e){
     // Prevent form from submitting
     e.preventDefault(); 

    // Get form values
    let siteName = document.getElementById('siteName').value;
    let siteUrl = document.getElementById('siteUrl').value;

    let bookmark = {
        name: siteName,
        url: siteUrl
    }
    
  /*
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));

  */

    // Test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){
        // Init array
        let bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from localStorage
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to localStorage
        localStorage.setItem('bookmars', JSON.stringify(bookmarks));
    }
    
   
}