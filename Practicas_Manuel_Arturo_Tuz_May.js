//QUE TENGAN UNA LONGITUD DE 7 O MAS LETRAS
let act1 = "tigre correcaminos leon hipopotamo jirafa caballo perro ocelote";
var ope1 = /[a-z]{7,}/gm;
let newact1 = act1.match(ope1);
console.log("1- " + newact1);

//PALABRAS QUE NO FINALICEN CON UNA VOCAL
let act2 = "tigre correcaminos leon hipopotamo jirafas caballo perro ocelotes"
var ope2 = /[a-zA-z]+[aeiou]\b/gm ;
let newact2 = act2.match(ope2);
console.log("2- " + newact2);

//PALABRAS QUE INICIEN CON M Y LA SEGUNDA NO SEA VOCAL
let act3 = "tigre Mcorrecaminos leon Mhipopotamo jirafa Macaballo Mperro Mocelotes";
let newact3 = act3.replace(/M(?=[^aeiou])/g,"__");
console.log("3- " + newact3);

//EXPRESIONES ENCERRADAS ENTRE COMILLAS
let act4 = "tigre correcaminos 'leon jhjg' hipopotamo jirafas 'caballo' perro 'ocelotes'";
var ope4 = /[''][a-z]{0,}/gm
let newact4 = act4.match(ope4);
console.log("4- " + newact4);

//IP´S
let act5 = "192.168.1.1 192.168.1234 19212332131 192.168.1.2";
var ope5 = /\b\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3}\b/gm;
let newact5 = act5.match(ope5 );
console.log("5- " + newact5);

//HORAS
let act6 = "10:45:21 10:23:322 12:32:32 12:322:32";
var ope6 = /\b\d{2}[:]\d{2}[:]\d{2}\b/gm;
let newact6 = act6.match(ope6);
console.log("6- " + newact6);

//TELEFONOS
let act7 = "985-131-22-32  985-131-222 985-101-22-32 984325-131-22-32";
var ope7 = /\b\d{3}[-]\d{3}[-]\d{2}[-]\d{2}\b/gm;
let newact7 = act7.match(ope7);
console.log("7- " + newact7);

//CORREOS ELECTRONICOS
let act8 = "manuel3123@gmail.com qweqeqweqw qeq gasgjas@hotmail.com fjfj";
var ope8 = /[A-Za-z0-9]+@[a-z]+\.[a-z]+/gm;
let newact8 = act8.match(ope8);
console.log("8- " + newact8);

//URL´S
let act9 = "hahgsakdgaskgdkjasgdkqwguwq http://www.netacad.com gkghghgksaksa79w932 https://www.w3schools.com ";
var ope9 = /[https|http]+:..w{3}[.].*?[.]com/gm
let newact9 = act9.match(ope9);
console.log("9- " + newact9);

//CODIGOS POSTALES
let act10 = "23453 123456 12346 1235 10101 2123245";
var ope10 = /\b[0-9]{5}\b/gm
let newact10 = act10.match(ope10);
console.log("10- " + newact10);
