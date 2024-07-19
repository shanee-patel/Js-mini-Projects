const apiUrl = 'https://api.quotable.io/quotes/random'

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

getquote(apiUrl);

//https://api.api-ninjas.com/v1/quotes?category=happiness
// 'https://api.quotable.io/random'