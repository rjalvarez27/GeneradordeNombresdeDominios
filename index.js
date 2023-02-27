console.log ("Hello World");

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = ['.us', '.com', '.net', '.io'];



  for ( let mix of pronoun){
    for ( let value of adj){
        for ( let num of noun){
            for ( let digit of extension){
                console.log ( mix + value + num + digit );
  } } } }



