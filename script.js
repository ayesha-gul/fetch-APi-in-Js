console.log('humble banda')

async function fetchData() {


const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log('response =',response);

const data = await response.json();
console.log('data=',data);
}

async function postData() {


    const response =  await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        body: JSON  .stringify ({
            title: 'my info',
            body:'data',
            userId: 4

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },

    });
    console.log('response =',response);
    
    const data = await response.json();
    console.log('data=',data);
    }

//fetchData();
postData();

