const validarDados = function(nota1,nota2,nota3,nota4){

    if(nota1 > 100 ||nota1 < 0 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0){

        return false

    }else if(nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){
        
        return false

    }else{
        
        return true
    }
}

const aprovaçãoDoAluno = function(nota1,nota2,nota3,nota4){
    
    let alunoAprovado = aprovado
    let alunoReprovado = reprovado
    
}



