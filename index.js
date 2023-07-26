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
        
    }