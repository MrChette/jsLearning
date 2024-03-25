var dataContainer = '';
var dataSubContainer = '';
$( document ).ready(function() {
    dataContainer = document.getElementById('dataContainer');
    dataSubContainer = document.getElementById('subDataContainer');
});

var _baseUrl = 'http://localhost:8080/user';


async function getAllUsers(){
    const pageSize = document.getElementById('pageSize').value;
    const page = document.getElementById('page').value;

    const url = new URL('http://localhost:8080/user/all');


    if(page != '' || size != ''){
        url.searchParams.append('page', page);
        url.searchParams.append('size', pageSize);
    }

    console.log(url)

    try {
        const response = await fetch(url, { mode: 'no-cors' });
        console.log(response)
        console.log('---')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }

}