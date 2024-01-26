//Arrays: collections of items of same data type
//Array is object in java script

// let heros=['ironman','batman','spiderman','wanda','superman']
// heros[2]='Kutaman'//change
// console.log(heros[0]);
// console.log(heros.length);//length
// console.log(typeof(heros));

//Loop over array

// let heros=['ironman','batman','spiderman','wanda','superman']
// for(let hero of heros){//to acces element of array
//     console.log(hero.toUpperCase());
// }
// for(let hero in heros){
//     console.log(hero);
// }

//Average of array
// let arr=[185,97,44,37,76,60];
// let sum=0;
// for(let val of arr){
//     sum=sum+val;
    
// }console.log(sum/arr.length);



// let price=[250,645,300,900,50]
// let i=0;
// for(let val of price){
//     let offer=val/10;
//     price[i]=price[i]-offer;
//     console.log(`value of offer ${price[i]}`);
//     i++;
// }

// let price=[250,645,300,900,50]
// for(let i=0;i<price.length;i++){
//     let offer=price[i]/10;
//     price[i]=price[i]-offer;
//     console.log(`value of offer ${price[i]}`);
// }
// console.log(price);

//push : add element at end
// let items=['chaval','paneer','sahipaneer','dal makhni','roti','naan']
// items.push('chips','kukure','burgur');
// console.log(items);

//pop : delet element at end
// let items=['chaval','paneer','sahipaneer','dal makhni','roti','naan']
// items.pop();
// console.log(items);


//convert array to string
// let items=['chaval','paneer','sahipaneer','dal makhni','roti','naan']
// console.log(items);
// console.log(items.toString());

//concat: to join array
// let marvelHeros=['thor','superman','wanda']
// let dcHeros=['superman','flash','batman']
// let heros=marvelHeros.concat(dcHeros);
// console.log(heros);


// let marvelHeros=['thor','superman','wanda','krish','kuta','pixachu'];
// console.log(marvelHeros.slice(2,4));//copy of original array
// console.log(marvelHeros);


// let marvelHeros=[1,2,3,4,5,6,7];
// console.log(marvelHeros.splice(2,2,40,67));//delte 3,4 and add 40,67
// console.log(marvelHeros.splice(3,0,78));//add element  AT 4
// console.log(marvelHeros.splice(5,1));
// console.log(marvelHeros);

//Practice q
let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix']
console.log(companies.splice(0,1));
console.log(companies.splice(1,1,'Ola'));
companies.push("Amazon");
console.log(companies);

