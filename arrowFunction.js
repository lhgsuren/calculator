const myArray = [1, 2, 3, 4, 5, 6]; // object 

for(let item of myArray)

myArray.forEach((a, b ,c) => { // arrow function zuvhun function iig ajilluulna
console.log(`index-${b}: ${a}: ${c}`) // template string
});

console.log(myArray.map((a) => a + 2)); 
// array dotor uildel hiigeed butsaagaad array helbereer butsaaj ugnu
console.log(myArray.filter((a) => {
    console.log(a);
    if(a < 6){
        return true;
    }else{
        return false;
    }
}));
// nuhtsul shalgaad butsaaj ugnu 
