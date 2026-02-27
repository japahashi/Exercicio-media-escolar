const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question("Qual é o nome do aluno(a)?: ", function(nomeA){

    let nomeAluno = nomeA

    entradaDeDados.question("Qual é o nome do professor(a)?: ", function(nomeP){

        let nomeProfessor = nomeP

        entradaDeDados.question("Qual é o sexo do aluno(a)?: ", function(sexoA){

            let sexoAluno = sexoA

            entradaDeDados.question("Qual é o sexo do professor(a)?: ", function(sexoP){

                let sexoProfessor = sexoP

                entradaDeDados.question("Qual é o nome do curso?: ", function(curso){

                    let nomeCurso = curso

                    entradaDeDados.question("Qual é a disciplina?: ", function(disciplina){

                        let nomeDisciplina = disciplina

                        entradaDeDados.question("valor da primeira nota: ", function(nota1){

                            let valorNota1 = nota1

                            entradaDeDados.question("valor da segunda nota: ", function(nota2){

                                let valorNota2 = nota2

                                entradaDeDados.question("valor da terceira nota: ", function(nota3){

                                    let valorNota3 = nota3

                                    entradaDeDados.question("valor da quarta nota: ", function(nota4){

                                        let valorNota4 = nota4
                                                  
                                    })
                                }) 
                            })
                        })
                    })
                })
            })
        })
    })
})