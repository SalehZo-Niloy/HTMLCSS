const n = [50, 64, 4, 9, 89, 165];

/*n.forEach(mf1);

function mf1(value, index, n) {
    console.log(index);
}*/
/*const m = n.map(mf2);

function mf2(value, index, n) {
    return value * 3;
}
console.log(m);*/
/*const o = n.filter(mf3);

function mf3(value) {
    return value > 15;
}
console.log(o);*/

/*const p = n.reduce(function (total, value) {
    return total + value;
}
    , 100)

console.log(p);*/
/*let num1 = n.includes(9);
console.log(num1);
function mf4(value) {
    return value == 9;
}*/

/*const abc = Array.from("Hello there");
console.log(abc);*/

const bcd = ["mouse", "keyboard", "monitor", "soundbox", "cpu"];
const entri = bcd.entries();

for (let x of entri) {
    document.getElementById('c1').innerHTML += x + "<br>";
}
/*let a= 2;
console.log(a);
 a= 5;
console.log(a);*/
const b= new Date(2023, 4, 23);
console.log(b);
console.log(typeof b);
const c= b.toString();
console.log(typeof c);