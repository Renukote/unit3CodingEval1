
function appendArticle( data ) {
    console.log( data )

    data.forEach(( article ) => {

        let container = document.getElementById('article');

        let div = document.createElement('div');
        
        let img = document.createElement('img');
        img.src = article.urlToImage;
        img.style.width = '200px';

        let headline = document.createElement('h4');
        headline.innerText = article.title;
        
        let desc = document.createElement('div');
        desc.innerHTML = article.description;

        let cont = document.createElement('div');
        cont.innerHTML = article.content;

        let link = document.createElement('a');
        link.href = article.url;  
        link.innerText = 'click here to view the full article';  
        console.log( link ) 

        div.append( img, headline, desc, cont, link );
        container.append( div );
        // div.onclick = function () { read( article  ) };
    })

    localStorage.setItem('article',JSON.stringify([]));
}