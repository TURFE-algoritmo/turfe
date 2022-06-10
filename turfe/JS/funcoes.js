// VARIAVEIS GLOBAIS
var qtd_cavalos = 0;
var qtd_voltas = 0;

var nome_cv_1 = '';
var nome_cv_2 = '';
var nome_cv_3 = '';
var nome_cv_4 = '';
var nome_cv_5 = '';
var nome_cv_6 = '';

var tempo_total_cavalo_1 = 0;
var tempo_total_cavalo_2 = 0;
var tempo_total_cavalo_3 = 0;
var tempo_total_cavalo_4 = 0;
var tempo_total_cavalo_5 = 0;
var tempo_total_cavalo_6 = 0;

var contador = 0;

// FUNÇÕES

function on_qtd_cavalos() {

    qtd_cavalos = Number(slt_qtd_cavalos.value);
    alert(`A quantidade de cavalos será ${qtd_cavalos} `);

    parte1.style.display = 'none'
    parte2.style.display = 'block'

}

function adicionar_nome() {

    var nr_cavalo = Number(numero_cavalo.value)
    var nome = nome_cavalo.value

    if (nr_cavalo == 1) {

        nome_cv_1 = nome;
        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 2) {

        nome_cv_2 = nome;

        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 3) {

        nome_cv_3 = nome;
        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 4) {

        nome_cv_4 = nome;
        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 5) {

        nome_cv_5 = nome;
        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 6) {

        nome_cv_6 = nome;
        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)
    }

    nome_cavalo.value = ''
}

function proximo() {

    parte2.style.display = 'none'
    parte3.style.display = 'block'

}

function on_qtd_voltas() {
    qtd_voltas = Number(slc_qtd_voltas.value);

    parte3.style.display = 'none'
    parte4.style.display = 'block'


}

var colocacao = []

function volta() {

    var primeiro = "";
    var segundo = "";
    var terceiro = "";
    var tempo_volta_cavalo_1 = (Math.random() * 2 + 7).toFixed(1);
    var tempo_volta_cavalo_2 = (Math.random() * 2 + 7).toFixed(1);
    var tempo_volta_cavalo_3 = (Math.random() * 2 + 7).toFixed(1);
    var tempo_volta_cavalo_4 = (Math.random() * 2 + 7).toFixed(1);
    var tempo_volta_cavalo_5 = (Math.random() * 2 + 7).toFixed(1);
    var tempo_volta_cavalo_6 = (Math.random() * 2 + 7).toFixed(1);
    tempo_total_cavalo_1 += Number(tempo_volta_cavalo_1);
    tempo_total_cavalo_2 += Number(tempo_volta_cavalo_2);
    tempo_total_cavalo_3 += Number(tempo_volta_cavalo_3);
    tempo_total_cavalo_4 += Number(tempo_volta_cavalo_4);
    tempo_total_cavalo_5 += Number(tempo_volta_cavalo_5);
    tempo_total_cavalo_6 += Number(tempo_volta_cavalo_6);
    contador++;
    colocacao = []

    // ver a diferença e o primeiro colocado
    // if()


    // apenas mostrar por inner html
    if (contador <= qtd_voltas) {

        div_msg.innerHTML += (`<br>Volta ${contador} <br>`)

        for (let index = 0; index < qtd_cavalos; index++) {

            if (index == 0) {

                div_msg.innerHTML += `${nome_cv_1} -  ${tempo_volta_cavalo_1} - ${tempo_total_cavalo_1.toFixed(1)}  `
                colocacao.push({ nome: nome_cv_1, tep: tempo_total_cavalo_1 })
            }

            if (index == 1) {

                div_msg.innerHTML += `| ${nome_cv_2} -  ${tempo_volta_cavalo_2} - ${tempo_total_cavalo_2.toFixed(1)}  `
                colocacao.push({ nome: nome_cv_2, tep: tempo_total_cavalo_2 })

            }

            if (index == 2) {

                div_msg.innerHTML += `| ${nome_cv_3} -  ${tempo_volta_cavalo_3} - ${tempo_total_cavalo_3.toFixed(1)}  `
                colocacao.push({ nome: nome_cv_3, tep: tempo_total_cavalo_3 })

            }

            if (index == 3) {

                div_msg.innerHTML += `| ${nome_cv_4} -  ${tempo_volta_cavalo_4} - ${tempo_total_cavalo_4.toFixed(1)}  `
                colocacao.push({ nome: nome_cv_4, tep: tempo_total_cavalo_4 })
            }

            if (index == 4) {

                div_msg.innerHTML += `| ${nome_cv_5} -  ${tempo_volta_cavalo_5} - ${tempo_total_cavalo_5.toFixed(1)}  `
                colocacao.push({ nome: nome_cv_5, tep: tempo_total_cavalo_5 })
            }


            if (index == 5) {

                div_msg.innerHTML += `| ${nome_cv_6} -  ${tempo_volta_cavalo_6} - ${tempo_total_cavalo_6.toFixed(1)}  `
                colocacao.push({ nome: nome_cv_6, tep: tempo_total_cavalo_6 })
            }




        }
        colocacao.sort(GetSortOrder("tep"));
        console.log(JSON.stringify(colocacao.sort(GetSortOrder("tep"))));
        var primeiro_volta = colocacao[0].nome

        var temp_primeiro = colocacao[0].tep;
        var temp_segundo = colocacao[1].tep;

        var diferenca = temp_segundo - temp_primeiro;
        console.log(diferenca)
        if (diferenca == 0) {
            div_msg.innerHTML += `<br>O priemrio colocado é ${primeiro_volta} || está empatado`
        } else {
            div_msg.innerHTML += `<br>O priemrio colocado é ${primeiro_volta} || a diferença entre o priemrio e o segundo ${diferenca.toFixed(2)}`
        }


    }


}

function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}



function lixo() {
    // div_msg.innerHTML += `
    // Volta 0${ contador } < br >
    //         Cavalo01 - ${ tempo_volta_cavalo_1 } - ${
    //             tempo_total_cavalo_1.toFixed(
    //                 1
    //             )
    //         } -
    //         Cavalo02 - ${ tempo_volta_cavalo_2 } - ${
    //             tempo_total_cavalo_2.toFixed(
    //                 1
    //             )
    //         } -
    //         Cavalo03 - ${ tempo_volta_cavalo_3 } - ${ tempo_total_cavalo_3.toFixed(1) }
    //         < br > <br>
    //             `;

    //     if (contador == 7) {
    //         if (
    //             tempo_total_cavalo_1 < tempo_total_cavalo_2 &&
    //             tempo_total_cavalo_2 < tempo_total_cavalo_3
    //         ) {
    //             primeiro = "Cavalo 1";
    //             segundo = " Cavalo 2";
    //             terceiro = "Cavalo 3";
    //         } else if (
    //             tempo_total_cavalo_1 < tempo_total_cavalo_3 &&
    //             tempo_total_cavalo_3 < tempo_total_cavalo_2
    //         ) {
    //             primeiro = "Cavalo 1";
    //             segundo = " Cavalo 3";
    //             terceiro = "Cavalo 2";
    //         } else if (
    //             tempo_total_cavalo_2 < tempo_total_cavalo_1 &&
    //             tempo_total_cavalo_1 < tempo_total_cavalo_3
    //         ) {
    //             primeiro = "Cavalo 2";
    //             segundo = " Cavalo 1";
    //             terceiro = "Cavalo 3";
    //         } else if (
    //             tempo_total_cavalo_2 < tempo_total_cavalo_3 &&
    //             tempo_total_cavalo_3 < tempo_total_cavalo_1
    //         ) {
    //             primeiro = "Cavalo 2";
    //             segundo = " Cavalo 3";
    //             terceiro = "Cavalo 1";
    //         } else if (
    //             tempo_total_cavalo_3 < tempo_total_cavalo_1 &&
    //             tempo_total_cavalo_1 < tempo_total_cavalo_2
    //         ) {
    //             primeiro = "Cavalo 3";
    //             segundo = " Cavalo 1";
    //             terceiro = "Cavalo 2";
    //         } else {
    //             primeiro = "Cavalo 3";
    //             segundo = "Cavalo 2";
    //             terceiro = "Cavalo 1";
    //         }
    //         div_msg2.innerHTML = `Em 1º Lugar – ${primeiro} <br>
    //                     Em 2º Lugar – ${segundo} <br>
    //                         Em 3º Lugar – ${terceiro} <br>`;

    //         //   div_msg.innerHTML = ``
    //         //   div_msg2.innerHTML = ``

    //         if (
    //             tempo_total_cavalo_1 == tempo_total_cavalo_2 &&
    //             tempo_total_cavalo_1 < tempo_total_cavalo_3
    //         ) {
    //             primeiro = "Cavalo 1 e Cavalo 2";
    //             segundo = "Cavalo3";
    //             div_msg2.innerHTML = `Em 1º Lugar – ${primeiro} <br>
    //                                 Em 2º Lugar – ${segundo}`;
    //         } else if (
    //             tempo_total_cavalo_1 == tempo_total_cavalo_2 &&
    //             tempo_total_cavalo_1 > tempo_total_cavalo_3
    //         ) {
    //             segundo = "Cavalo 1 e Cavalo 2";
    //             primeiro = "Cavalo3";
    //             div_msg2.innerHTML = `Em 1º Lugar – ${primeiro} <br>
    //                                     Em 2º Lugar – ${segundo}`;
    //         } else if (
    //             tempo_total_cavalo2 == tempo_total_cavalo_3 &&
    //             tempo_total_cavalo_2 < tempo_total_cavalo_1
    //         ) {
    //             primeiro = "Cavalo 2 e Cavalo 3";
    //             segundo = "Cavalo1";
    //             div_msg2.innerHTML = `Em 1º Lugar – ${primeiro} <br>
    //                                         Em 2º Lugar – ${segundo}`;
    //         } else if (
    //             tempo_total_cavalo2 == tempo_total_cavalo_3 &&
    //             tempo_total_cavalo_2 > tempo_total_cavalo_1
    //         ) {
    //             segundo = "Cavalo 2 e Cavalo 3";
    //             primeiro = "Cavalo1";
    //             div_msg2.innerHTML = `Em 1º Lugar – ${primeiro} <br>
    //                                             Em 2º Lugar – ${segundo}`;
    //         } else if (
    //             tempo_total_cavalo3 == tempo_total_cavalo_1 &&
    //             tempo_total_cavalo_1 < tempo_total_cavalo_2
    //         ) {
    //             primeiro = "Cavalo 1 e Cavalo 3";
    //             segundo = "Cavalo2";
    //             div_msg2.innerHTML = `Em 1º Lugar – ${primeiro} <br>
    //                                                 Em 2º Lugar – ${segundo}`;
    //         } else if (
    //             tempo_total_cavalo3 == tempo_total_cavalo_1 &&
    //             tempo_total_cavalo_1 > tempo_total_cavalo_2
    //         ) {
    //             segundo = "Cavalo 1 e Cavalo 3";
    //             primeiro = "Cavalo2";
    //             div_msg2.innerHTML = `Em 1º Lugar – ${primeiro} <br>
    //                                                     Em 2º Lugar – ${segundo}`;
    //         }
    //     }

    //     if (contador > 7) {
    //         contador = 0;
    //         div_msg2.innerHTML = ``;
    //         div_msg.innerHTML = ``;
    //     }
}