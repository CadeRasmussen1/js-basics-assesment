const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome, please enter password for validation. ", function(input){
	tokens = input.split('');

    if(tokens.length >= 10){
        console.log('This password is valid!')
    }else console.log('This password is to short.')
    
    

    
    reader.close()
    });