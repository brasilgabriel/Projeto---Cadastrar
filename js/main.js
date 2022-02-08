import { testarValores, atribuirValoresInput, inputs } from './atribuir_valores.js';
import { alterarValorInputs, limparInputs, habilitarInputs, spanCEP, excluirCadastro, fecharTabela, criarTabela } from './alterando_a_DOM.js';
window.criarTabela = criarTabela;
window.excluirCadastro = excluirCadastro;
window.fecharTabela = fecharTabela;

function cepAPI(valor) {
    return fetch(`https://viacep.com.br/ws/${valor.target.value}/json/`);
}

export async function receberRespostaAPI(valor) {

    try {
        const respostaAPI = await cepAPI(valor);
        const cep = await respostaAPI.json();

        if (cep.erro === true) {
            inputs.cep.classList.add('is-invalid');
        } else {
            inputs.cep.classList.remove('is-invalid');
            limparInputs()
            habilitarInputs();
            alterarValorInputs(cep);
        }

    } catch (erro) {
        limparInputs();
    }
}

document.querySelector('#botao').addEventListener('click', (event, valor) => {
    event.preventDefault;
    valor = 'botao';

    testarValores(atribuirValoresInput);
    limparInputs(valor);
})

document.querySelector('#span_cep').addEventListener('click', event => {
    event.preventDefault;

    spanCEP();
})