
const comparar = (n,m,str1,str2) =>{
    let retorno ='';
    if (n===m){
        retorno = `As variáveis ${str1} e ${str2} tem o mesmo valor, mas tipos diferentes`;
    } else {
        retorno = `As variáveis ${str1} e ${str2} não tem o mesmo valor`;
    }
    return retorno;
}

console.log( '----------------------------' );
console.log("Comparações em JavaScript");
console.log( '----------------------------' );

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

let retorno = comparar(numeroDez,stringDez,'numeroUm','stringUm');
console.log(retorno);
retorno = comparar(numeroDez,stringDez,'numeroDez','stringDez');
console.log(retorno);
retorno = comparar(numeroDez,stringDez,'numeroTrinta','stringTrinta');
console.log(retorno);

console.log( '----------------------------' );
console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );


