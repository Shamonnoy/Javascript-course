// practice
// QUES: prompt the user to enter their full name.Generate a username for them based on the input. Start username with @ then the fullname then the length of the name all attached.
let fullName = prompt("Enter the name");
let userName = "@" + fullName + fullName.length;
console.log(userName);