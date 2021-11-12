const calcular = document.getElementById('calcular');


function pace () {
    const nome = document.getElementById('nome').value;
    const distancia = document.getElementById('distancia').value;
    const peso = document.getElementById('peso').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && distancia !== '' && peso !== '' && tempo != '') {

        const tempo_corte = tempo.split(":");

        const horas = parseInt(tempo_corte[0]);

        const minutos = parseInt(tempo_corte[1]);

        const segundos = parseInt(tempo_corte[2]);

        const tempo_horas =  horas + minutos/60 + segundos/3600;

        const tempo_minutos = tempo_horas*60;

        const velocidade = (distancia/(tempo_horas)).toFixed(2);

        const pace = ((tempo_minutos/distancia)).toFixed(2);

        const calorias = (velocidade*peso*0.0175*(tempo_minutos)).toFixed(2);
        
        resultado.textContent = `Olá, ${nome}! Você percorreu ${distancia}km em ${horas}h ${minutos}min ${segundos}s, o que implica em uma velocidade média de ${velocidade}km/h ou pace de ${pace}km/min. Estima-se que você tenha consumido ${calorias} calorias.`;

    }else {
        resultado.textContent = 'Para calcular os indicadores de desempenho do seu treino (velocidade média, pace e consumo de calorias), preencha todos os campos.';
    }

}
calcular.addEventListener('click', pace);
