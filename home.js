    console.log("this is working");



        function read( data ) {
            window.location.href = 'C:/Users/LENOVO/renu/masai/unit3/codingEval1/news.html';
            

            let article = JSON.parse(localStorage.getItem('article'));

            if( !article ) {
                localStorage.setItem('article',JSON.stringify([]))
            }
            else {
                article.push( data );
                localStorage.setItem('article',JSON.stringify(article));
            }
        }
    




