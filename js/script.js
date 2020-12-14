// alert("Hello World");

var age = parseInt(prompt("Enter your age"));
var km = parseInt(prompt("Enter the Km to travel"));

fullPrice = km * 0.21;
juniorPrice = fullPrice - fullPrice * 20 / 100;
seniorPrice = fullPrice - fullPrice * 40 / 100;

if (age < 18){
  price = juniorPrice;
} else if(age > 65){
  price = seniorPrice;
} else {
  price = fullPrice;
}
// console.log(price.toFixed(2));

document.getElementById("price").innerHTML += price.toFixed(2) + " $";
document.getElementById("age").innerHTML += age.toFixed() + " Years old";
document.getElementById("km").innerHTML += km.toFixed() + " Km, nice trip!!!";
