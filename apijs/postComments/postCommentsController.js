var dataContainer = '';
var dataSubContainer = '';
$( document ).ready(function() {
    dataContainer = document.getElementById('dataContainer');
    dataSubContainer = document.getElementById('subDataContainer');
});


function resetContainers(){
    dataContainer.innerHTML = '';
    dataSubContainer.innerHTML = '';
}




//-------------------------FUNCIONES-------------------------//



async function getOnePost(post){

    const postNumberInput = document.getElementById('postNumber');

    if (post === '') {
        // Si el valor no es un número, añadir la clase isInvalid para aplicar el estilo de CSS
        postNumberInput.addClass('is-invalid');
    } else {
        postNumberInput.remClass('is-invalid');
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+post);
            const getData = await response.json();

            //Reseteamos los datos
            resetContainers();

            //Añadimos los datos
            dataContainer.innerHTML = `
                <p>userID: ${getData.userId}</p>
                <p>id: ${getData.id}</p>
                <p>title: ${getData.title}</p>
                <p>body: ${getData.body}</p>
            `;

        } catch( error ){
            console.error(error)
        }
    }
}

async function getOnePostWithComment(post){
    
    const postNumberComments = document.getElementById('postNumberComments');

    if (post === '') {
        // Si el valor no es un número, añadir la clase isInvalid para aplicar el estilo de CSS
        postNumberComments.addClassList('is-invalid animate__animated animate__shakeX');
    } else {
        postNumberComments.remClassList('is-invalid animate__animated animate__shakeX');
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+post);
            const getData = await response.json();

            //Reseteamos los datos
            resetContainers();

            //Añadimos los datos
            dataContainer.innerHTML = `
                <p>userID: ${getData.userId}</p>
                <p>id: ${getData.id}</p>
                <p>title: ${getData.title}</p>
                <p>body: ${getData.body}</p>
            `;

            let htmlCommentsString = '';
            (async () => {
                try {
                    const comments = await getCommentOfPost(post); // Cambia el número de post según tus necesidades
                    //Obtenemos los comentarios del post
                    console.log(comments)
                    comments.forEach(data => {
                        htmlCommentsString += `
                            <p>postId: ${data.postId}</p>
                            <p>id: ${data.id}</p>
                            <p>name: ${data.name}</p>
                            <p>email: ${data.email}</p>
                            <p>body: ${data.body}</p>
                            <hr> <!-- Línea divisoria entre cada objeto -->
                        `;
                    });

                    dataSubContainer.innerHTML = '';
                    //Metemos los comentarios en el subContainer
                    dataSubContainer.innerHTML = htmlCommentsString;
                } catch(error) {
                    console.error(error);
                }
            })();


        } catch( error ){
            console.error(error)
        }
    }
}

async function getCommentOfPost(post){
    let data = []; // Variable para almacenar los datos

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + post + '/comments');
        const getData = await response.json();

        // Añadimos los datos al array
        getData.forEach(dataItem => {
            // Añadimos el objeto 'dataItem' al array 'data'
            data.push(dataItem);
        });
    } catch(error) {
        return []; // 
    }

    return data; // Devolvemos los comentarios obtenidos
}

async function getAllPosts(){
    const dataContainer = document.getElementById('dataContainer');
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const getData = await response.json();


        let htmlString = '';

        getData.forEach(data => {
            htmlString += `
                <p>userID: ${data.userId}</p>
                <p>id: ${data.id}</p>
                <p>title: ${data.title}</p>
                <p>body: ${data.body}</p>
                <hr> <!-- Línea divisoria entre cada objeto -->
            `;
        });

        //Reseteamos containers
        resetContainers();

        // Mostrar la cadena HTML en el contenedor
        dataContainer.innerHTML = htmlString;

    } catch( error ){
        console.error(error)
    }
}

async function getAllPostPaginate(paginate){
    
    const paginateInput = document.getElementById('paginateNumber');

    if(paginate === ''){
        paginateInput.addClass("is-invalid")
    }
    else{
        paginateInput.remClass("is-invalid")
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const getData = await response.json();
    
            var paginatedData = getData.slice(0, paginate);
    
            let htmlString = '';
    
            paginatedData.forEach(data => {
                htmlString += ` 
                    <p>userID: ${data.userId}</p>
                    <p>id: ${data.id}</p>
                    <p>title: ${data.title}</p>
                    <p>body: ${data.body}</p>
                    <hr> <!-- Línea divisoria entre cada objeto -->
                `;
            });
    
            //Reseteamos dataContainers
            resetContainers();
            // Mostrar la cadena HTML en el contenedor
            dataContainer.innerHTML = htmlString;
    
        } catch( error ){
            console.error(error)
        }
    }
   
}


const getAllPostByPromise = () => {
    const dataContainer = document.getElementById('dataContainer');
    return new Promise((resolve,reject) => {
      
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok){
                    throw new Error('Response is not ok')
                }
                return response.json();
            })
            .then(reponseData => {

                let htmlString = '';
                reponseData.forEach(data => {
                    htmlString += `
                        <p>userID: ${data.userId}</p>
                        <p>id: ${data.id}</p>
                        <p>title: ${data.title}</p>
                        <p>body: ${data.body}</p>
                        <hr> <!-- Línea divisoria entre cada objeto -->
                    `;
                });
        
                //Reseteamos containers
                resetContainers();
        
                // Mostrar la cadena HTML en el contenedor
                dataContainer.innerHTML = htmlString;
            })
            .catch(error => {
                console.error('Error with the operation', error);
                reject(error);
            })

    })
};


/*
    ^ SO THE PROMISE STRUCTURE IS : 
    
    *   return new Promise((resolve,reject) => {
    *       fetch('https://exampleURL/exampleEndpoint.com')
    *           .then(response => {
    *               if(!response.ok){               --ERROR response da fallo(404,500) lanza error, se para la ejecucion
    *                   throw new Error('Error') 
    *               }
    *               return response.json()          --OK (200-299), convierte el response en json
    *           })
    *           .then(responseData => {
    *               //uso de los datos              --Los datos json se almacenan en la variable x -> (responseData en este caso)
    *           })
    *           .catch(error => {
    *               reject(error)                   --Si ocurre un error en la ejecucion de datos de la promesa
    *           })
    *   })

*/






