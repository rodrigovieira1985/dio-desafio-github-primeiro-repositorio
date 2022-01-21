//Assincronicidade que não ocorre ao mesmo tempo (Posso fazer N processos ao mesmo tempo)
//Promises Objeto de processo assincrono Status(1- Pending; 2- Fulfilled; 3- Rejected)


//Promises
// const myPromise1 = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve(console.log('Resolvida 1!'));
//     }, 2000);
// });



// Async e Await
// async function resolvePromise1() {
//     const myPromise2 = new Promise ((resolve2, reject) => {
//         window.setTimeout(() => {
//             resolve2('Resolvida 2!');
//         }, 3000);
//     });
//     const resolved1 = await myPromise2
//             .then((result) => result + 'Passando pelo Then')
//             .then((result) => result + ' e Agora Acabou!! ')
//             .catch((err) => console.log(err.message));
//     return resolved1;        
// }


// Async e Await com try Catch
async function resolvePromise2() {
    const myPromise2 = new Promise((resolve2, reject) => {
        window.setTimeout(() => {
            resolve2('Resolvida 2!');
        }, 3000);
    });
    let results;
    try{
    results = await myPromise2
            .then((result) => result + 'Passando pelo Then')
            .then((result) => result + ' e Agora Acabou!! ')
            .catch((err) => console.log(err.message));
    }catch(err){
            results = err.message; 
    }
    return results;

}
