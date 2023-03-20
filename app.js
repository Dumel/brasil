'use strict'

const mapa = document.querySelector('#mapa')

const getEstado = ( {target}) => {

     const estado = target.idreplace('BR-', '')

    // console.log(target.id.replace('BR-', ''));

    preencherDados(estado)

//    const produto = {
//         id: '12',
//         descricao: 'teclado',
//         quantidade: 23,
//         tipo: 'informatica',
//         filial: 'Jandira'
//    }
//    const id = produto.id
//    const quantidade = produto.quantidade

//    const {id, descricao, quantidade, tipo, filial}
}

mapa.addEventListener('click', getEstado)