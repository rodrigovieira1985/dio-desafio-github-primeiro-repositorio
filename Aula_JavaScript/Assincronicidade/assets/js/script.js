//Assincronicidade que não ocorre ao mesmo tempo (Posso fazer N processos ao mesmo tempo)
//Promises Objeto de processo assincrono Status(1- Pending; 2- Fulfilled; 3- Rejected)


//Promises
// const myPromise1 = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//         resolve(console.log('Resolvida 1!'));
//     }, 1000);
// });


// Async e Await
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida 2!');
        }, 1000);
    });
    const resolved = await myPromise
            .then((result) => result + ' Passando pelo Then ')
            .then((result) => result + ' e Agora Acabou!! ')
            .catch((err) => console.log(err.message));
    return resolved;        
}


// Async e Await com try Catch
// async function resolvePromise2() {
//     const myPromise2 = new Promise((resolve2, reject) => {
//         window.setTimeout(() => {
//             resolve2('Resolvida 2!');
//         }, 3000);
//     });
//     let results;
//     try{
//     results = await myPromise2
//             .then((result) => result + 'Passando pelo Then')
//             .then((result) => result + ' e Agora Acabou!! ')
//             .catch((err) => console.log(err.message));
//     }catch(err){
//             results = err.message; 
//     }
//     return results;

// }
