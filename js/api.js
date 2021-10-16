// load books according to search result


const loadBooks = () =>{

    const searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    const required = document.getElementById('required');

    
    if(searchText === ''){
        
        required.innerHTML =`
                                <h4>Please write something to find somthing</h4>
                                `; 
       
    }
    else{
        required.innerHTML= '';
        const newLocal =` https://openlibrary.org/search.json?q=${searchText}`;
        searchField.value= " ";

        fetch(newLocal)
        .then(res => res.json())
        .then(data => displayBooks(data.docs ))

    }
   
}



// display books 
const displayBooks = books =>{

    let searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    const info = document.getElementById('info');
    info.innerHTML = `
      <p>Total ${books.length} Books Found! </p>
    `
//display no result found

    if(books.length === 0){
       
        const warning = document.createElement('div');
        warning.innerHTML = `
                             <h1> No result found !! </h1>
       
        `
        searchResult.appendChild('warning');
    }
    else{
   //display search results    
        books.forEach(book => {
            const div = document.createElement('div');
            
            div.classList.add('grid-item');
            div.innerHTML = `
                        <div>
                        
                            <div style="text-align:center"> 

                                <img id="card-img" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
                       
                            </div>

                            <div id="card-body">
                                <h1>${book.title}</h1>
                                <h4>${book.author_name}</h4>
                                <h4> First Published: ${book.first_publish_year} </h4>
                            </div>
                        </div>
                       
                         
            
            `
            
            searchResult.appendChild(div);
            
        });
         
    }
    
    info.innerHTML = '';
  
}

