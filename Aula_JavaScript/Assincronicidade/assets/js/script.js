//Assincronicidade que não ocorre ao mesmo tempo (Posso fazer N processos ao mesmo tempo)
//Promises Objeto de processo assincrono Status(1- Pending; 2- Fulfilled; 3- Rejected)


//Promises
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});