//Arguments

function findMaxArg(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMaxArg(12,2,3,4,5,6,91,10,15,82));


function showArgs(){
    return arguments;
}
console.log(showArgs(1,2,true,'Rodrigo', ['array']));