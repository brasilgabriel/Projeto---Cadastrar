import { receberRespostaAPI } from './main.js';
import { desabilitarInputs, limparInputs } from './alterando_a_DOM.js';
import { inputs } from './atribuir_valores.js';

// ---------------------------------------------------------------------------
const mascaraNome = nome => {

    const expressao = new RegExp(/[\d\[\]&\/\\#,+()$~%.'"=\-_^`|@!:*?<>{}]/g);

    if (expressao.test(nome)) {
        inputs.nome.classList.add('is-invalid');
    } else {
        inputs.nome.classList.remove('is-invalid');
    }
};

const mascaraSobrenome = sobrenome => {

    const expressao = new RegExp(/[\d\[\]&\/\\#,+()$~%.'"=\-_^`|@!:*?<>{}]/g);

    if (expressao.test(sobrenome)) {
        inputs.sobrenome.classList.add('is-invalid');
    } else {
        inputs.sobrenome.classList.remove('is-invalid');
    }
};

const mascaraEmail = email => {

    const expressao = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (expressao.test(email)) {
        inputs.email.classList.remove('is-invalid');
    } else {
        inputs.email.classList.add('is-invalid');
    }
};

const mascaraCelular = celular => {
    return celular
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d{4})/, '$1-$2')
};

function mascaraRG(RG) {
    return RG.toUpperCase().replace(/[^\dX]/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})([\dX])$/, '$1-$2')
}

const mascaraCPF = CPF => {
    return CPF
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{2})/, '$1-$2')
};

const mascaraCEP = CEP => {
    return CEP
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d{3})/, '$1-$2')
};

const mascaraRua = rua => {

    const expressao = new RegExp(/[\d\[\]&\/\\#,+()$~%.'"=\-_^`|@!:*?<>{}]/g);

    if (expressao.test(rua)) {
        inputs.rua.classList.add('is-invalid');
    } else {
        inputs.rua.classList.remove('is-invalid');
    }
};

const mascaraNumCasa = num => {

    const expressao = new RegExp(/[\D\[\]&\/\\#,+()$~%.'"=\-_^`|@!:*?<>{}]/g);

    if (expressao.test(num)) {
        inputs.num_casa.classList.add('is-invalid');
    } else {
        inputs.num_casa.classList.remove('is-invalid');
    }
};

const mascaraBairro = bairro => {

    const expressao = new RegExp(/[\d\[\]&\/\\#,+()$~%.'"=\-_^`|@!:*?<>{}]/g);

    if (expressao.test(bairro)) {
        inputs.bairro.classList.add('is-invalid');
    } else {
        inputs.bairro.classList.remove('is-invalid');
    }
};

const mascaraCidade = cidade => {

    const expressao = new RegExp(/[\d\[\]&\/\\#,+()$~%.'"=\-_^`|@!:*?<>{}]/g);

    if (expressao.test(cidade)) {
        inputs.cidade.classList.add('is-invalid');
    } else {
        inputs.cidade.classList.remove('is-invalid');
    }
};
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
inputs.nome.addEventListener('input', nome => { nome = mascaraNome(nome.target.value) });
inputs.nome.addEventListener('blur', () => { (inputs.nome.value === "" ? inputs.nome.classList.add('is-invalid') : '') });

inputs.sobrenome.addEventListener('input', sobrenome => { sobrenome = mascaraSobrenome(sobrenome.target.value) });
inputs.sobrenome.addEventListener('blur', () => { (inputs.sobrenome.value === "" ? inputs.sobrenome.classList.add('is-invalid') : '') });

inputs.email.addEventListener('input', email => { email = mascaraEmail(email.target.value) });
inputs.email.addEventListener('blur', () => { (inputs.email.value === "" ? inputs.email.classList.add('is-invalid') : '') });

inputs.celular.addEventListener('input', celular => { celular.target.value = mascaraCelular(celular.target.value) });
inputs.celular.addEventListener('blur', () => {

    if (inputs.celular.value === "" || inputs.celular.value.length < 15) {
        inputs.celular.classList.add('is-invalid')
    } else {
        inputs.celular.classList.remove('is-invalid');
    }
});

inputs.rg.addEventListener('input', RG => { RG.target.value = mascaraRG(RG.target.value) });
inputs.rg.addEventListener('blur', () => {

    if (inputs.rg.value === "" || inputs.rg.value.length < 12) {
        inputs.rg.classList.add('is-invalid')
    } else {
        inputs.rg.classList.remove('is-invalid');
    }
});

inputs.cpf.addEventListener('input', CPF => { CPF.target.value = mascaraCPF(CPF.target.value) });
inputs.cpf.addEventListener('blur', () => {

    if (inputs.cpf.value === "" || inputs.cpf.value.length < 14) {
        inputs.cpf.classList.add('is-invalid')
    } else {
        inputs.cpf.classList.remove('is-invalid');
    }
});

inputs.cep.addEventListener('input', CEP => { CEP.target.value = mascaraCEP(CEP.target.value) })
inputs.cep.addEventListener('blur', CEP => {

    if (inputs.cep.value === "" || inputs.cep.value.length < 9) {
        inputs.cep.classList.add('is-invalid');
        desabilitarInputs();
        limparInputs();
    } else {
        receberRespostaAPI(CEP);
    }
});

inputs.rua.addEventListener('input', rua => { rua = mascaraRua(rua.target.value) });
inputs.rua.addEventListener('blur', () => { (inputs.rua.value === "" ? inputs.rua.classList.add('is-invalid') : '') });

inputs.num_casa.addEventListener('input', num => { num = mascaraNumCasa(num.target.value) });
inputs.num_casa.addEventListener('blur', () => { (inputs.num_casa.value === "" ? inputs.num_casa.classList.add('is-invalid') : '') });

inputs.bairro.addEventListener('input', bairro => { bairro = mascaraBairro(bairro.target.value) });
inputs.bairro.addEventListener('blur', () => { (inputs.bairro.value === "" ? inputs.bairro.classList.add('is-invalid') : '') });

inputs.cidade.addEventListener('input', cidade => { cidade = mascaraCidade(cidade.target.value) });
inputs.cidade.addEventListener('blur', () => { (inputs.cidade.value === "" ? inputs.cidade.classList.add('is-invalid') : '') });
// ---------------------------------------------------------------------------