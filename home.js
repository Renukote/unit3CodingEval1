    console.log("this is working");



        function read( data ) {
            window.location.href = 'news.html';
            

            let article = JSON.parse(localStorage.getItem('article'));

            if( !article ) {
                localStorage.setItem('article',JSON.stringify([]))
            }
            else {
                article.push( data );
                localStorage.setItem('article',JSON.stringify(article));
            }
        }
    




