const url = 'https://raw.githubusercontent.com/guilhermeonrail/api/main/dados-globais.json'
console.log(url);
async function visualizarInformacoesGlobais(){
   const res = await fetch(url);
   const dados = await res.json();
   const pessoasConectadas  =  (dados.total_pessoas_conectadas) / 1e9
   const horas = pasenInt (dados.tempo_medio)
   const minutos  =  Math.round((dados.tempo_medio - horas)* 100)
   const porcentagemConectada = ((pessoasConectada / pessoasMundo)* 100).toFixed(2)
   
   const paragrafo = document.createElement('p')
   paragrafo.classList.add('graficos-container_texto')
   paragrafo.innerHTML  =  `Voce sabia que o mundo tem
<span>${pessoasMundo}bilhões</span> de pessoas e que aproximadamente
<span>${pessoasConectadas}bilhões </span> estão conectadas em alguma rede social e passam em media
<span>${dados.tempo_medio}</span> horas  e <span>${minuto}</span> minuto conectadas.
<br> Isso significa que aproximadamente ${porcentagemConectada}% de pessoas estão conectadas em alguma rede social.`
   const container = document.getElementById('grafico-container')
   container.appendChild(paragrafo)
   
}
visualizarInformacoesGlobais()
{
   "total_pessoas_conectadas"; 5.04e9,
   "tempo_medio"; 2.38,
   "total_pessoas_mundo"; 7.888e9
}
