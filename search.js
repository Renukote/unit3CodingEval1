

async function showRes(){
    let sQuery = JSON.parse(localStorage.getItem('searchQuery'));
    
    let inp = document.getElementById('inp');
    console.log( inp );
    inp.value = sQuery[0];
    
    
    let contain = document.getElementById('result');

    let res = await fetch(`http://newsapi.org/v2/everything?q=Apple&from=2021-10-18&sortBy=popularity&apiKey=c277776913874c9293685dec5952cb8e`);
    res = await res.json();

    console.log( res );
    appendRes( res.articles)
}


function appendRes( data )
{
    let contain = 
}

    // console.log( sQuery );


    // localStorage.setItem('searchQuery',JSON.stringify(sQuery));