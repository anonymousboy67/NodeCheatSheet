function greet(name){
    return `Hello ${name}`;
}

module.exports=greet


const greet=require('./utils');
console.log(greet('Nikhil'));