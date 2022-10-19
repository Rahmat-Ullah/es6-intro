function add(first, second){
    console.log(first, second);;
    // second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
}

function add (first, second = 0){
    const total = first + second;
    return total;
}

const result = add (10);
console.log(result);

function fullname(first, second = 'chowdhury'){
    const name = first + ' ' + second;
    return name;
}
const name = fullname('Rahmat');
console.log(name);