import { criarTabela } from './alterando_a_DOM.js';

export const cadastros = JSON.parse(localStorage.getItem('dados')) || [];
const data = [];

// ---------------------------------------------------------------------------
export const inputs = {
    nome: document.querySelector('.input_nome'),
    sobrenome: document.querySelector('.input_sobrenome'),
    email: document.querySelector('.input_email'),
    celular: document.querySelector('.input_celular'),
    rg: document.querySelector('.input_rg'),
    cpf: document.querySelector('.input_cpf'),
    cep: document.querySelector('.input_cep'),
    span_cep: document.querySelector('#span_cep'),
    num_casa: document.querySelector('.input_num_casa'),
    rua: document.querySelector('.input_rua'),
    bairro: document.querySelector('.input_bairro'),
    cidade: document.querySelector('.input_cidade'),
    select_estados: document.querySelector('.select_estados')
}

export const divs = {
    cep: document.querySelector('#div_cep'),
    rua: document.querySelector('.div_rua'),
    num: document.querySelector('.div_num'),
    bairro: document.querySelector('.div_bairro'),
    cidade: document.querySelector('.div_cidade'),
    estado: document.querySelector('.div_estado')
}
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------

function verificaExistente(dado) {
    return cadastros.some(prop => prop.email === dado)
}

export function cadastrar() {

    if (!verificaExistente(inputs.email.value)) { // se não existir nenhum email igual ao email inserido, é salvo os dados no LocalStorage
        testarValores(atribuirValoresInput)

    } else { // se já existir um email igual ao email inserido, o usuário é alertado
        alert('Esse email já está sendo utilizado!')
    }
}

function testarValores(callback) {

    switch (span_cep.innerHTML === 'não sei o meu CEP') {

        case true:

            if (inputs.nome.classList.contains('is-invalid') === true || inputs.nome.value === '') {
                inputs.nome.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.sobrenome.classList.contains('is-invalid') === true || inputs.sobrenome.value === '') {
                inputs.sobrenome.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.email.classList.contains('is-invalid') === true || inputs.email.value === '') {
                inputs.email.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.celular.classList.contains('is-invalid') === true || inputs.celular.value === '') {
                inputs.celular.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.rg.classList.contains('is-invalid') === true || inputs.rg.value === '') {
                inputs.rg.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.cpf.classList.contains('is-invalid') === true || inputs.cpf.value === '') {
                inputs.cpf.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.cep.classList.contains('is-invalid') === true || inputs.cep.value === '') {
                inputs.cep.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.num_casa.classList.contains('is-invalid') === true || inputs.num_casa.value === '') {
                inputs.num_casa.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else {
                callback(criarTabela);
            }
            break;

        case false:

            if (inputs.nome.classList.contains('is-invalid') === true || inputs.nome.value === '') {
                inputs.nome.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.sobrenome.classList.contains('is-invalid') === true || inputs.sobrenome.value === '') {
                inputs.sobrenome.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.email.classList.contains('is-invalid') === true || inputs.email.value === '') {
                inputs.email.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.celular.classList.contains('is-invalid') === true || inputs.celular.value === '') {
                inputs.celular.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.rg.classList.contains('is-invalid') === true || inputs.rg.value === '') {
                inputs.rg.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.cpf.classList.contains('is-invalid') === true || inputs.cpf.value === '') {
                inputs.cpf.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.rua.classList.contains('is-invalid') === true || inputs.rua.value === '') {
                inputs.rua.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.num_casa.classList.contains('is-invalid') === true || inputs.num_casa.value === '') {
                inputs.num_casa.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.bairro.classList.contains('is-invalid') === true || inputs.bairro.value === '') {
                inputs.bairro.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.cidade.classList.contains('is-invalid') === true || inputs.cidade.value === '') {
                inputs.cidade.classList.add('is-invalid');
                alert('Preencha todos os campos corretamente!');

            } else if (inputs.select_estados.value === 'estado') {
                alert('Preencha todos os campos corretamente!');

            } else {
                callback(criarTabela);
            }
            break;
    }
}

export function atribuirValoresInput(callback) {

    cadastros.push({
        nome: inputs.nome.value,
        sobrenome: inputs.sobrenome.value,
        email: inputs.email.value,
        celular: inputs.celular.value,
        rg: inputs.rg.value,
        cpf: inputs.cpf.value,
        rua: inputs.rua.value,
        num_casa: inputs.num_casa.value,
        bairro: inputs.bairro.value,
        cidade: inputs.cidade.value,
        estado: inputs.select_estados.value,
        data: adicionarData()
    })

    localStorage.setItem('dados', JSON.stringify(cadastros));
    callback(cadastros);
}

function preencheZero(numero) { // usado para que números abaixo de 10 fiquem com dois algarismos; Ex: para que '1' fique '01', para que '6' fique '06'
    return ('0' + numero).slice(-2);
}

function adicionarData() {

    let objData = new Date();

    let dia = preencheZero(objData.getDate());
    let mes = Number(preencheZero(objData.getMonth())) + 1;
    if (mes < 10) { mes = '0' + mes };
    let ano = preencheZero(objData.getUTCFullYear());
    let horas = preencheZero(objData.getHours());
    let minutos = preencheZero(objData.getMinutes());

    data.push(`${dia}/${mes}/${ano} - ${horas}:${minutos}`);

    return data;
}
// ---------------------------------------------------------------------------