import { inputs, divs, cadastros } from './atribuir_valores.js';

// ---------------------------------------------------------------------------
export function alterarValorInputs(cep) {

    inputs.rua.value = cep.logradouro;
    inputs.bairro.value = cep.bairro;
    inputs.cidade.value = cep.localidade;
    inputs.select_estados.value = cep.uf;
}

export function limparInputs(valor) {

    switch (valor === 'botao') {

        case true:
            document.querySelectorAll('.inputs')
                .forEach(function (input) {
                    input.value = '';
                });
            inputs.cep.value = '';
            inputs.select_estados.value = 'estado';
            break;

        case false:
            document.getElementById('form_2').querySelectorAll('.inputs')
                .forEach(function (input) {
                    input.value = '';
                });
            inputs.select_estados.value = 'estado';
            break;
    }
}

export function habilitarInputs() {

    divs.rua.classList.remove('div_inputs_desabilitados');
    divs.num.classList.remove('div_inputs_desabilitados');
    divs.bairro.classList.remove('div_inputs_desabilitados');
    divs.cidade.classList.remove('div_inputs_desabilitados');
    divs.estado.classList.remove('div_inputs_desabilitados');

    inputs.num_casa.removeAttribute('disabled');
}

export function desabilitarInputs() {

    divs.rua.classList.add('div_inputs_desabilitados');
    divs.num.classList.add('div_inputs_desabilitados');
    divs.bairro.classList.add('div_inputs_desabilitados');
    divs.cidade.classList.add('div_inputs_desabilitados');
    divs.estado.classList.add('div_inputs_desabilitados');

    inputs.num_casa.setAttribute('disabled', 'disabled');
}

export function spanCEP() {

    if (inputs.span_cep.innerHTML === 'não sei o meu CEP') {

        divs.cep.classList.add('div_inputs_desabilitados');
        divs.rua.classList.remove('div_inputs_desabilitados');
        divs.num.classList.remove('div_inputs_desabilitados');
        divs.bairro.classList.remove('div_inputs_desabilitados');
        divs.cidade.classList.remove('div_inputs_desabilitados');
        divs.estado.classList.remove('div_inputs_desabilitados');

        inputs.cep.setAttribute('disabled', 'disabled');
        inputs.rua.removeAttribute('disabled');
        inputs.num_casa.removeAttribute('disabled');
        inputs.bairro.removeAttribute('disabled');
        inputs.cidade.removeAttribute('disabled');
        inputs.select_estados.removeAttribute('disabled');

        inputs.span_cep.innerHTML = 'sei o meu CEP';

    } else {

        divs.cep.classList.remove('div_inputs_desabilitados');
        divs.rua.classList.add('div_inputs_desabilitados');
        divs.num.classList.add('div_inputs_desabilitados');
        divs.bairro.classList.add('div_inputs_desabilitados');
        divs.cidade.classList.add('div_inputs_desabilitados');
        divs.estado.classList.add('div_inputs_desabilitados');

        inputs.cep.removeAttribute('disabled');
        inputs.rua.setAttribute('disabled', 'disabled');
        inputs.num_casa.setAttribute('disabled', 'disabled');
        inputs.bairro.setAttribute('disabled', 'disabled');
        inputs.cidade.setAttribute('disabled', 'disabled');
        inputs.select_estados.setAttribute('disabled', 'disabled');

        inputs.span_cep.innerHTML = 'não sei o meu CEP';

        limparInputs();
    }
}

export function criarTabela() {

    document.querySelector('#section_formulario').style.visibility = 'hidden';
    document.querySelector('#div_ver_cadastros').style.visibility = 'hidden';

    if (cadastros.length === 0) {
        document.querySelector('#section_tabela').style.visibility = 'hidden';
        document.querySelector('#div_nenhum_cadastro').style.visibility = 'visible';

    } else {
        document.querySelector('#section_tabela').style.visibility = 'visible';
        document.querySelector('#tbody').innerHTML = '';

        let posicao = 1;

        for (let dado of cadastros) {

            document.querySelector('#tbody').innerHTML += `
            <tr>
                <th scope="row">${posicao}</th>
                <td>${dado.nome} ${dado.sobrenome}</td>
                <td>${dado.email}</td>
                <td>${dado.celular}</td>
                <td>${dado.rg}</td> 
                <td>${dado.cpf}</td>        
                <td>${dado.rua}, ${dado.num_casa}</td>
                <td>${dado.cidade} - ${dado.estado}</td>
                <td>${dado.data[0]}</td>
                <td>
                    <svg onclick="excluirCadastro(${cadastros.indexOf(dado)})" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill text-danger" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>      
                </td>
            </tr>
            `;

            posicao++;
        }
    }
}

export function excluirCadastro(dado) {

    cadastros.splice(dado, 1);

    localStorage.setItem('dados', JSON.stringify(cadastros));
    criarTabela();
}

export function fecharTabela() {

    document.querySelector('#section_formulario').style.visibility = 'visible';
    document.querySelector('#div_ver_cadastros').style.visibility = 'visible';
    document.querySelector('#section_tabela').style.visibility = 'hidden';
    document.querySelector('#div_nenhum_cadastro').style.visibility = 'hidden';
}
// ---------------------------------------------------------------------------