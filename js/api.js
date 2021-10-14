// load books according to search result


function loadBooks (){

    const searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    const newLocal =` https://openlibrary.org/search.json?q=${searchText}`;
    searchField.value= " ";

    fetch(newLocal)
    .then(res => res.json())
    .then(data => displayBooks(data.docs ))
}

// 

// display books 
function displayBooks(books){

    let searchResult = document.getElementById('search-result');
    
    if(books.length == 0){
       
        const warning = document.createElement('div');
        warning.innerHTML = `
        <h1 style="color:red"> No result found !! </h1>
       
        `
        searchResult.appendChild('warning');
    }
    else{
       
        for(let book of books){

            const div = document.createElement('div');
            
            div.classList.add('grid-item');
            div.innerHTML = `
                       
                        <img id="card-img" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">

                          <div id="card-body">
                                <h1>${book.title}</h1>
                                <h4>${book.author_name[0]}</h4>
                               <h4> First Published: ${book.first_publish_year} </h4>
                          </div>
                         
            
            `
            
            searchResult.appendChild(div);
            
            }  
    }
    
    
  
}

