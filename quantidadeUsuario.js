 import {getCSS, criarGrafico} from"./combo.js"
 
 async function quantidadeUsuarios() {
    const urt  =  'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res  = await fetch (urt)
    const dados = await res.json ()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

        const data = [
            {
                x: nomeDasRedes,
                y: quantidadeUsuarios,
                type: 'bar',
                marker: {
                    color: getCSS('--bg-color')
                }
            }
        ]

criarGrafico(data, layout)
}


quantidadeUsuarios()