const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome, please enter password for validation. ", function(input){
	tokens = input.split('');

    if(tokens.length >= 10 && tokens.length <= 15){
        console.log('This password is valid!')
    }else if(tokens.length > 16){
      console.log('are you sure you want this to be your pasword? Seems kinda long.')
    }else if (tokens.lenght <= 9 && tokens.length > 5){
      console.log('This password is to short.')
    }else console.log('Did you even enter a password?')

    reader.close()
    });