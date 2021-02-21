 async function fetchGet() {
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log('response =',response)

    const data = await response.json(); 
console.log('response =' ,data)
}
 // post the api 

 async function postData () {
     const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1',{
         method: 'post',
         body: JSON.stringify({
             title: 'titanic',
             body: 'Alexa',
             userId: 7
         }),
         Headers:{
            'Content-type': 'application/json; charset=UTF-8',
         } ,
     });
     console.log('response =' ,response)
     const data = response.json();
     console.log('Data =' ,data);

 }

fetchGet();
