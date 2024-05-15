//question no 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
//name, print a message to them. The text of each message should be the same, but each
//message should be personalized with the person’s name.




// Excercise 11
//let members: string[]=['Shazia','Mehak','Rafia','Parveen','Nadia'];
//for(let  i=0; i<members.length; i++){
//console.log(members[i]);
//}
// Excersice 12
let members: string[]=['Shazia','Mehak','Rafia','Parveen','Nadia'];
let message:  string='kal Birthdayn h kis ki:';
for(let  i=0; i< members.length; i++){
 console.log(message+members[i]);
}