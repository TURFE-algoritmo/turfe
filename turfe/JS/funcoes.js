// VARIAVEIS GLOBAIS
var qtd_cavalos = 0;
var qtd_voltas = 0;

var colocacao = []

var primeiro = "";
var segundo = "";
var terceiro = "";

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
    sessionStorage.qtd_cavalos =qtd_cavalos
    if(qtd_cavalos != 0){

    alert(`A quantidade de cavalos será ${qtd_cavalos} `);


    parte1.style.display = 'none'
    parte2.style.display = 'block'

    if (qtd_cavalos == 3) {

        num_cav3.style.display = "block"


    } else if (qtd_cavalos == 4) {

        num_cav3.style.display = "block"
        num_cav4.style.display = "block"

    } else if (qtd_cavalos == 5) {

        num_cav3.style.display = "block"
        num_cav4.style.display = "block"
        num_cav5.style.display = "block"
    } else if (qtd_cavalos == 6) {

        num_cav3.style.display = "block"
        num_cav4.style.display = "block"
        num_cav5.style.display = "block"
        num_cav6.style.display = "block"

    }
    }else{
        alert('insira uma quantidade valida')
    }

}

function adicionar_nome() {

    var nr_cavalo = Number(numero_cavalo.value)
    var nome = nome_cavalo.value

    if (nr_cavalo == 1) {

        nome_cv_1 = nome;
        sessionStorage.nome_cv_1 = nome_cv_1
        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 2) {

        nome_cv_2 = nome;
        sessionStorage.nome_cv_2 = nome_cv_2

        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 3) {

        nome_cv_3 = nome;
        sessionStorage.nome_cv_3 = nome_cv_3
        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 4) {

        nome_cv_4 = nome;
        sessionStorage.nome_cv_4 = nome_cv_4
        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 5) {

        nome_cv_5 = nome;
        sessionStorage.nome_cv_5 = nome_cv_5
        alert(`cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)

    } else if (nr_cavalo == 6) {

        nome_cv_6 = nome;
        sessionStorage.nome_cv_6 = nome_cv_6
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
    sessionStorage.qtd_voltas = qtd_voltas
    if(qtd_voltas != 0){
        // parte3.style.display = 'none'
        // parte4.style.display = 'block'
        window. location. href = "./principal.html";
    }else{
        alert("insira a quantidade de voltas")
    }


}

function volta() {

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

    if (contador <= sessionStorage.qtd_voltas) {


        for (let index = 0; index < sessionStorage.qtd_cavalos; index++) {

            if (index == 0) {

                nome1.innerHTML = `${sessionStorage.nome_cv_1}`
                tempo_CV1_VT.innerHTML += `${tempo_volta_cavalo_1}<br>`
                tempo_CV1_TT.innerHTML += ` ${tempo_total_cavalo_1.toFixed(1)}  <br>`
                colocacao.push({ nome: sessionStorage.nome_cv_1, tep: tempo_total_cavalo_1 })
                volta_CV_1.innerHTML += (`<br>Volta ${contador} <br>`)
            }

            if (index == 1) {

                nome2.innerHTML = `${sessionStorage.nome_cv_2}`
                tempo_CV2_VT.innerHTML += `${tempo_volta_cavalo_2}<br>`
                tempo_CV2_TT.innerHTML += ` ${tempo_total_cavalo_2.toFixed(1)}  <br>`
                colocacao.push({ nome: sessionStorage.nome_cv_2, tep: tempo_total_cavalo_2 })
        volta_CV_2.innerHTML += (`<br>Volta ${contador} <br>`)


            }

            if (index == 2) {

                nome3.innerHTML = `${sessionStorage.nome_cv_3}`
                tempo_CV3_VT.innerHTML += `${tempo_volta_cavalo_3}<br>`
                tempo_CV3_TT.innerHTML += ` ${tempo_total_cavalo_3.toFixed(1)}  <br>`
                colocacao.push({ nome: sessionStorage.nome_cv_3, tep: tempo_total_cavalo_3 })
        volta_CV_3.innerHTML += (`<br>Volta ${contador} <br>`)


            }

            if (index == 3) {

                nome4.innerHTML = `${sessionStorage.nome_cv_4}`
                tempo_CV4_VT.innerHTML += `${tempo_volta_cavalo_4}<br>`
                tempo_CV4_TT.innerHTML += ` ${tempo_total_cavalo_4.toFixed(1)}<br>  `
                colocacao.push({ nome: sessionStorage.nome_cv_4, tep: tempo_total_cavalo_4 })
        volta_CV_4.innerHTML += (`<br>Volta ${contador} <br>`)

            }

            if (index == 4) {

                nome5.innerHTML = `${sessionStorage.nome_cv_5}`
                tempo_CV5_VT.innerHTML += `${tempo_volta_cavalo_5}<br>`
                tempo_CV5_TT.innerHTML += ` ${tempo_total_cavalo_5.toFixed(1)} <br> `
                colocacao.push({ nome: sessionStorage.nome_cv_5, tep: tempo_total_cavalo_5 })
        volta_CV_5.innerHTML += (`<br>Volta ${contador} <br>`)

            }


            if (index == 5) {

                nome6.innerHTML = `${sessionStorage.nome_cv_6}`
                tempo_CV6_VT.innerHTML += `${tempo_volta_cavalo_6}<br>`
                tempo_CV6_TT.innerHTML += ` ${tempo_total_cavalo_6.toFixed(1)}  <br>`
                colocacao.push({ nome: sessionStorage.nome_cv_6, tep: tempo_total_cavalo_6 })
        volta_CV_6.innerHTML += (`<br>Volta ${contador} <br>`)

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

            primeiro_colocado.innerHTML = `${primeiro_volta}`
            diferencas.innerHTML = `está empatado`

        } else {

            primeiro_colocado.innerHTML = `${primeiro_volta}`
            diferencas.innerHTML = ` ${diferenca.toFixed(2)}`

        }


        if (contador == qtd_voltas) {

            podio();

        }

    }

}

function podio() {

    if (qtd_cavalos == 2) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;

        div_msg_podio.innerHTML += ` Em primeiro lugar ficou ${primeiro} <br>`
        div_msg_podio.innerHTML += ` Em segundo lugar ficou ${segundo}<br>`

    } else if (qtd_cavalos == 3) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;
        terceiro = colocacao[2].nome;

        div_msg_podio.innerHTML += ` Em primeiro lugar ficou ${primeiro}<br>`
        div_msg_podio.innerHTML += ` Em segundo lugar ficou ${segundo}<br>`
        div_msg_podio.innerHTML += ` Em terceiro lugar ficou ${terceiro}<br>`


    } else if (qtd_cavalos == 4) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;
        terceiro = colocacao[2].nome;
        quarto = colocacao[3].nome;

        div_msg_podio.innerHTML += ` Em primeiro lugar ficou ${primeiro}<br>`
        div_msg_podio.innerHTML += ` Em segundo lugar ficou ${segundo}<br>`
        div_msg_podio.innerHTML += ` Em terceiro lugar ficou ${terceiro}<br>`
        div_msg_podio.innerHTML += ` Em quarto lugar ficou ${quarto}<br>`

    } else if (qtd_cavalos == 5) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;
        terceiro = colocacao[2].nome;
        quarto = colocacao[3].nome;
        quinto = colocacao[4].nome;

        div_msg_podio.innerHTML += ` Em primeiro lugar ficou ${primeiro}<br>`
        div_msg_podio.innerHTML += ` Em segundo lugar ficou ${segundo}<br>`
        div_msg_podio.innerHTML += ` Em terceiro lugar ficou ${terceiro}<br>`
        div_msg_podio.innerHTML += ` Em quarto lugar ficou ${quarto}<br>`
        div_msg_podio.innerHTML += ` Em quinto lugar ficou ${quinto}<br>`

    } else if (qtd_cavalos == 6) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;
        terceiro = colocacao[2].nome;
        quarto = colocacao[3].nome;
        quinto = colocacao[4].nome;
        sexto = colocacao[5].nome;

        div_msg_podio.innerHTML += ` Em primeiro lugar ficou ${primeiro}<br>`
        div_msg_podio.innerHTML += ` Em segundo lugar ficou ${segundo}<br>`
        div_msg_podio.innerHTML += ` Em terceiro lugar ficou ${terceiro}<br>`
        div_msg_podio.innerHTML += ` Em quarto lugar ficou ${quarto}<br>`
        div_msg_podio.innerHTML += ` Em quinto lugar ficou ${quinto}<br>`
        div_msg_podio.innerHTML += ` Em quinto lugar ficou ${sexto}<br>`

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