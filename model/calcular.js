const validarDados = function(nota1,nota2,nota3,nota4){

    if(isNaN(nota1) > 100 ||isNaN(nota1) < 0 || isNaN(nota2) > 100 || isNaN(nota2) < 0 || isNaN(nota3) > 100 || isNaN(nota3) < 0 || isNaN(nota4) > 100 || isNaN(nota4) < 0){

        return false

    }else if(nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){
        
        return false

    }else{
        
        return true
    }
}

const calculoMedia = function(nota1,nota2,nota3,nota4){

    let resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    return resultado
    
}

const aprovacaoAluno = function(resultado){
    

    

    if(resultado >= 70){

        return 'aprovado'

    }else if(resultado < 50){

        return "reprovado"

    }else{

        return "exame"

    }

}



const aprovacaoAlunoExame = function(resultado,exame){

    let notaExame

    if(resultado = exame){

        return notaExame

    }else if(notaExame >= 60){

        return aprovado

    }else{

        return reprovado

    }


}

const notaFinalExame = function(resultado,notaExame){

    let notafinalExame = (resultado + notaExame) /2

    return notafinalExame

}

const verificarSexoAluno = function(sexoA){
    let sexoRealA
    if(sexoA == "Masculino"){
        sexoRealA = 'O Aluno'
        return sexoRealA


    }else if(sexoA == "Feminino"){
        sexoRealA = 'A Aluna'
        return sexoRealA
        
    }


}

const verificarSexoProfessor = function(sexoP){
    let sexoRealP
    if(sexoP == "Masculino"){
        sexoRealP = 'O Professor'
        return sexoRealP


    }else if(sexoP == "Feminino"){
        sexoRealP = 'A Professora'
        return sexoRealP
        
    }
}
    
module.exports = {
    validarDados,
    calculoMedia,
    aprovacaoAluno,
    aprovacaoAlunoExame,
    notaFinalExame,
    verificarSexoAluno,
    verificarSexoProfessor
}