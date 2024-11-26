import { getCSS,criarGrafico,incluirTexto } from "./common.js"

async function redesFavoritasMundo(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favotitas,json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
    
    const layout = {
        plout_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bgcolor'),
        height: 800,
        title: {
            Text: 'Rede Sociais que os usuários mais gostam',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    //incluirTexto(`O <span>Instagram</span> e o <span> Tiktok</span> ocupam a mesma posição de redes sociais com mais usuários dá classe, destacando-se como a <span> preferida pelos usuários</span>. Superando até mesmo o <span>Facebook</span, <span>Youtube</span>, e o <span>Telegram</span>. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm pelo Intagram e pelo Tiktok em comparação com outras redes sociais.
}

redesFavoritasMundo()