const prompt = require('prompt-sync')();

//exercicio01
function exercicio01(){
    console.log("hello, word");
}
exercicio01();

//exercicio2
function exercicio2(){
    let nome =prompt ("digite seu nome: ");
    console.log ("olá "+nome);
}
exercicio2();

//exercicio 3
function exercicio3(){
    let numero =prompt("digite um numero para somar:");
    numero=parseInt(numero);
    let numero2=prompt("digite outro numero para somar ");
    numero2=parseInt(numero2)
    let resultadosoma=(numero+numero2);
    
    console.log("A soma é " + resultadosoma)
}
 exercicio3();

//exercicio 04
function exercicio4(){
    let idade=prompt("digite sua idade: ");
    idade=parseInt(idade);
    let maioridade = idade >= 18;
    if (maioridade){
        console.log("voce e maior de idade");
    }else{
        console.log("voce nao e maior de idade");
    }
}
exercicio4();

//exercicio05
function exercicio5(){
    let numero=prompt("digite um numero: ");
    numero=parseInt(numero);
    if (numero % 2 === 0){
        console.log("o numero digitado e par");
    }else{
        console.log("o numero digitado e impar");
    }
}   
    exercicio5();

    //exercicio6
    function exercicio6(){
        let nota1=prompt("digite a primeira nota: ");
        nota1=parseInt(nota1);
        let nota2=prompt("digite a segunda nota: ");
        nota2=parseInt(nota2);
        let nota3=prompt("digite a terceira nota: ")
        nota3=parseInt(nota3);
        media=(nota1+nota2+nota3) / 3
        console.log("a media das treis notas é " + media)
}
    exercicio6();

    
    //exercicio7
    function exercicio7(){
        for (let i =1; i<=10; i++){
            console.log(i);
        }
    }
    exercicio7();

    //exercicio8
    function exercicio8(){
        for(let i=1; i<=20; i++){
            if(i%2===0){
                console.log(i);
            }
        }
    }
    exercicio8();

    //exercicio9
    function exercicio9(){
        let F=prompt("digite os graus Fahrenheit: ")
        F=parseInt(F)
        
    }