

async function showRes(){
    let sQuery = JSON.parse(localStorage.getItem('searchQuery'));
    
    let inp = document.getElementById('inp');
    console.log( inp );
    inp.value = sQuery[sQuery.length-1]
    
    
    let contain = document.getElementById('result');
    
    console.log( inp.value );
    let res = await fetch(`http://newsapi.org/v2/everything?q=${inp.value}&from=2021-10-18&sortBy=popularity&apiKey=c277776913874c9293685dec5952cb8e`);
    res = await res.json();

    console.log( res );
    appendRes( res.articles)
}


function appendRes( data )
{  
    data.forEach(( article ) => {

        let container = document.getElementById('result');

        let div = document.createElement('div');
        
        let img = document.createElement('img');
        img.src = article.urlToImage;
        img.style.width = '200px';

        let headline = document.createElement('h4');
        headline.innerText = article.title;
        
        let desc = document.createElement('div');
        desc.innerHTML = article.description;

        div.append( img, headline, desc );
        container.append( div );
        div.onclick = function () { read( article  ) };
    })
}

    // console.log( sQuery );


    // localStorage.setItem('searchQuery',JSON.stringify(sQuery));