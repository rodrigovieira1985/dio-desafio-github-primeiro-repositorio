// Consumindo APIs

//JSON JavaScript Object Notation
// {
//     "description": "Scheme Post Bank",
//     "type": "object",
//     "properties":{
//         "id": {
//             "type": "number",
//             "minimum": 0
//         },
//         "code": {
//             "type": "string"
//         },
//         "name": {
//             "type": "string"
//         }
//     }
// }

//FETCH retona uma PROMISE então utilize o AWAIT
//Operações (POST, GET PUT, DELETE, etc)
// fetch(url, options)
//     .then(response => response.json())
//     .then(json => console.log(json))

// fetch('https://thatcopy.pw/catapi/rest/', {
//     method: 'GET',
//     cache: 'no-cache',
// })
//     .then(response => response.json())
//     .then(json => console.log(json))


fetch('https://thatcopy.pw/catapi/rest/', {
    method: 'GET',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))