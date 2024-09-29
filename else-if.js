const age = 55;
const price = 500;


if(age <= 10){
    console.log('you can for free');
}
else if(age >= 50) {
   const discount = price * 50 / 100;
   const payAmount = price - discount;
   console.log(payAmount);
}
else{
    console.log(price);
}