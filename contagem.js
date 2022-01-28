let numeroAlunos = 10;

for (let contador = 0; contador < numeroAlunos; contador++) {
    if(contador == 0){
        console.log("O número é zero")
    } else if(contador % 2 == 0){ // Operador resto %, retorna um valor de uma divisão inteira
        console.log(`O número ${contador} é par`)
    } else if(contador % 2 == 1){
        console.log(`O número ${contador} é ímpar`)
    }           
    
}
