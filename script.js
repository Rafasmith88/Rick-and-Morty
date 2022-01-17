const botao = document.querySelector('button');

const imagem0 = document.querySelector('img#pic0');
const nomeDoPersonagem0 = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

const imagem1 = document.querySelector('img#pic1');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');

const imagem2 = document.querySelector('img#pic2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');
traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem0 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Acept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem0.src = data.image;
        imagem0.alt = data.name;
        nomeDoPersonagem0.innerHTML = data.name;
        especie0.innerHTML = data.species;
        condicao0.innerHTML = traduzirCondicao(data);

    })
}

pegarPersonagem1 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Acept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = traduzirCondicao(data);

    })
}

pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Acept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = traduzirCondicao(data);

    });
}

botao.onclick = () =>{
    pegarPersonagem0()
    pegarPersonagem1()
    pegarPersonagem2() 
}