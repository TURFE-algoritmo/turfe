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

var contador = 1;

// FUNÇÕES

function on_qtd_cavalos() {
    qtd_cavalos = Number(slt_qtd_cavalos.value);
    sessionStorage.qtd_cavalos = qtd_cavalos
    if (qtd_cavalos != 0) {

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
    } else {
        alert('Insira uma quantidade valida')
    }

}

function adicionar_nome() {

    var nr_cavalo = Number(numero_cavalo.value)
    var nome = nome_cavalo.value 

    if (nome == "") {
        alert('Insira um valor valido')
    } else {
        if (nr_cavalo == 1) {


            nome_cv_1 = nome;
            sessionStorage.nome_cv_1 = nome_cv_1
            alert(`Cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)
            numero_cavalo.value = "2";

        } else if (nr_cavalo == 2) {

            nome_cv_2 = nome;
            sessionStorage.nome_cv_2 = nome_cv_2
            alert(`Cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)
            if (qtd_cavalos >= 3) {
                numero_cavalo.value = "3";

            }

        } else if (nr_cavalo == 3) {

            nome_cv_3 = nome;
            sessionStorage.nome_cv_3 = nome_cv_3
            alert(`Cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)
            if (qtd_cavalos >= 4) {
                numero_cavalo.value = "4";
            }
        } else if (nr_cavalo == 4) {

            nome_cv_4 = nome;
            sessionStorage.nome_cv_4 = nome_cv_4
            alert(`Cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)
            if (qtd_cavalos >= 5) {
                numero_cavalo.value = "5";
            }

        } else if (nr_cavalo == 5) {

            nome_cv_5 = nome;
            sessionStorage.nome_cv_5 = nome_cv_5
            alert(`Cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)
            if (qtd_cavalos >= 6) {
                numero_cavalo.value = "6";
            }

        } else if (nr_cavalo == 6) {

            nome_cv_6 = nome;
            sessionStorage.nome_cv_6 = nome_cv_6
            alert(`Cavalo de numero ${nr_cavalo}° cadastrado com nome ${nome}`)
        }
    }
    nome_cavalo.value = ''



    if (qtd_cavalos == 2) {
        nome_Cav.innerHTML =
            `Nome dos cavalos: <br>
    Nome do cavalo 1 = ${nome_cv_1} <br> 
    Nome do cavalo 2 = ${nome_cv_2}`;


    } else if (qtd_cavalos == 3) {

        nome_Cav.innerHTML =
            `Nome dos cavalos: <br>
    Nome do cavalo 1 = ${nome_cv_1} <br> 
    Nome do cavalo 2 = ${nome_cv_2} <br>
    Nome do cavalo 3 = ${nome_cv_3}`;

    } else if (qtd_cavalos == 4) {

        nome_Cav.innerHTML =
            `Nome dos cavalos: <br>
    Nome do cavalo 1 = ${nome_cv_1} <br> 
    Nome do cavalo 2 = ${nome_cv_2} <br>
    Nome do cavalo 3 = ${nome_cv_3}<br>
    Nome do cavalo 4 = ${nome_cv_4}`;

    } else if (qtd_cavalos == 5) {

        nome_Cav.innerHTML =
            `Nome dos cavalos: <br>
        Nome do cavalo 1 = ${nome_cv_1} <br> 
        Nome do cavalo 2 = ${nome_cv_2} <br>
        Nome do cavalo 3 = ${nome_cv_3}<br>
        Nome do cavalo 4 = ${nome_cv_4}<br>
        Nome do cavalo 5 = ${nome_cv_5}`

    } else if (qtd_cavalos == 6) {

        nome_Cav.innerHTML =
            `Nome dos cavalos: <br>
        Nome do cavalo 1 = ${nome_cv_1} <br> 
        Nome do cavalo 2 = ${nome_cv_2} <br>
        Nome do cavalo 3 = ${nome_cv_3}<br>
        Nome do cavalo 4 = ${nome_cv_4}<br>
        Nome do cavalo 5 = ${nome_cv_5}<br>
        Nome do cavalo 6 = ${nome_cv_6}`
    }
}

function proximo() {

    if (qtd_cavalos == 2) {
        if (nome_cv_1 != '' && nome_cv_2 != '') {
            parte2.style.display = 'none'
            parte3.style.display = 'block'
        } else {
            alert('Por favor, insira um nome para todos os cavalos')
        }

    } else if (qtd_cavalos == 3) {

        if (nome_cv_1 != '' && nome_cv_2 != '' && nome_cv_3 != '') {
            parte2.style.display = 'none'
            parte3.style.display = 'block'
        } else {
            alert('Por favor, insira um nome para todos os cavalos')
        }

    } else if (qtd_cavalos == 4) {

        if (nome_cv_1 != '' && nome_cv_2 != '' && nome_cv_3 != '' && nome_cv_4 != '') {
            parte2.style.display = 'none'
            parte3.style.display = 'block'
        } else {
            alert('Por favor, insira um nome para todos os cavalos')
        }

    } else if (qtd_cavalos == 5) {

        if (nome_cv_1 != '' && nome_cv_2 != '' && nome_cv_3 != '' && nome_cv_4 != '' && nome_cv_5 != '') {
            parte2.style.display = 'none'
            parte3.style.display = 'block'
        } else {
            alert('Por favor, insira um nome para todos os cavalos')
        }

    } else if (qtd_cavalos == 6) {

        if (nome_cv_1 != '' && nome_cv_2 != '' && nome_cv_3 != '' && nome_cv_4 != '' && nome_cv_5 != '' && nome_cv_6 != '') {
            parte2.style.display = 'none'
            parte3.style.display = 'block'
        } else {
            alert('Por favor, insira um nome para todos os cavalos')
        }
    }


}

function on_qtd_voltas() {
    qtd_voltas = Number(slc_qtd_voltas.value);
    sessionStorage.qtd_voltas = qtd_voltas
    if (qtd_voltas != 0) {

        window.location.href = "./principal.html";

    } else {
        alert("Insira a quantidade de voltas")
    }
}

function volta() {

    if (contador <= sessionStorage.qtd_voltas) {

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

        colocacao = []

        for (let index = 0; index < sessionStorage.qtd_cavalos; index++) {

            if (index == 0) {

                nome1.innerHTML = `${sessionStorage.nome_cv_1}`
                tempo_CV1_VT.innerHTML += `<br>${tempo_volta_cavalo_1}<br>`
                tempo_CV1_TT.innerHTML += ` <br>${tempo_total_cavalo_1.toFixed(1)}  <br>`
                colocacao.push({ nome: sessionStorage.nome_cv_1, tep: tempo_total_cavalo_1 })
                volta_CV_1.innerHTML += (`<br>Volta ${contador} <br>`)

            }

            if (index == 1) {

                nome2.innerHTML = `${sessionStorage.nome_cv_2}`
                tempo_CV2_VT.innerHTML += `<br>${tempo_volta_cavalo_2}<br>`
                tempo_CV2_TT.innerHTML += ` <br>${tempo_total_cavalo_2.toFixed(1)}  <br>`
                colocacao.push({ nome: sessionStorage.nome_cv_2, tep: tempo_total_cavalo_2 })
                volta_CV_2.innerHTML += (`<br>Volta ${contador} <br>`)


            }

            if (index == 2) {

                nome3.innerHTML = `${sessionStorage.nome_cv_3}`
                tempo_CV3_VT.innerHTML += `<br>${tempo_volta_cavalo_3}<br>`
                tempo_CV3_TT.innerHTML += ` <br>${tempo_total_cavalo_3.toFixed(1)}  <br>`
                colocacao.push({ nome: sessionStorage.nome_cv_3, tep: tempo_total_cavalo_3 })
                volta_CV_3.innerHTML += (`<br>Volta ${contador} <br>`)


            }

            if (index == 3) {

                nome4.innerHTML = `${sessionStorage.nome_cv_4}`
                tempo_CV4_VT.innerHTML += `<br>${tempo_volta_cavalo_4}<br>`
                tempo_CV4_TT.innerHTML += `<br>${tempo_total_cavalo_4.toFixed(1)}<br>  `
                colocacao.push({ nome: sessionStorage.nome_cv_4, tep: tempo_total_cavalo_4 })
                volta_CV_4.innerHTML += (`<br>Volta ${contador} <br>`)

            }

            if (index == 4) {

                nome5.innerHTML = `${sessionStorage.nome_cv_5}`
                tempo_CV5_VT.innerHTML += `<br>${tempo_volta_cavalo_5}<br>`
                tempo_CV5_TT.innerHTML += `<br>${tempo_total_cavalo_5.toFixed(1)} <br> `
                colocacao.push({ nome: sessionStorage.nome_cv_5, tep: tempo_total_cavalo_5 })
                volta_CV_5.innerHTML += (`<br>Volta ${contador} <br>`)

            }


            if (index == 5) {

                nome6.innerHTML = `${sessionStorage.nome_cv_6}`
                tempo_CV6_VT.innerHTML += `<br>${tempo_volta_cavalo_6}<br>`
                tempo_CV6_TT.innerHTML += `<br>${tempo_total_cavalo_6.toFixed(1)}  <br>`
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
    }

    ++contador;

}

function podium() {

    if (contador >= sessionStorage.qtd_voltas) {

        principal.style.display = 'none'
        podioo.style.display = 'block'
        podio();

    } else {

        alert('a corrida ainda não acabou')
    }

}

function podio() {

    if (sessionStorage.qtd_cavalos == 2) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;

        primeiro_col.innerHTML = `<p style="margin-right: 20px;">${primeiro}</p>`
        segundo_col.innerHTML = `<p style="margin-right: 20px;">${segundo}</p>`

    } else if (sessionStorage.qtd_cavalos == 3) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;
        terceiro = colocacao[2].nome;

        primeiro_col.innerHTML = `<p style="margin-right: 20px;">${primeiro}</p>`
        segundo_col.innerHTML = `<p style="margin-right: 20px;">${segundo}</p>`
        terceiro_col.innerHTML = `<p style="margin-right: 20px;">${terceiro}</p>`


    } else if (sessionStorage.qtd_cavalos == 4) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;
        terceiro = colocacao[2].nome;
        quarto = colocacao[3].nome;

        primeiro_col.innerHTML = `<p style="margin-right: 20px;">${primeiro}</p>`
        segundo_col.innerHTML = `<p style="margin-right: 20px;">${segundo}</p>`
        terceiro_col.innerHTML = `<p style="margin-right: 20px;">${terceiro}</p>`
        quarto_col.innerHTML = ` ${quarto}`

    } else if (sessionStorage.qtd_cavalos == 5) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;
        terceiro = colocacao[2].nome;
        quarto = colocacao[3].nome;
        quinto = colocacao[4].nome;

        primeiro_col.innerHTML = `<p style="margin-right: 20px;">${primeiro}</p>`
        segundo_col.innerHTML = `<p style="margin-right: 20px;">${segundo}</p>`
        terceiro_col.innerHTML = `<p style="margin-right: 20px;">${terceiro}</p>`
        quarto_col.innerHTML = ` ${quarto}`
        quinto_col.innerHTML = ` ${quinto}`

    } else if (sessionStorage.qtd_cavalos == 6) {

        primeiro = colocacao[0].nome;
        segundo = colocacao[1].nome;
        terceiro = colocacao[2].nome;
        quarto = colocacao[3].nome;
        quinto = colocacao[4].nome;
        sexto = colocacao[5].nome;

        primeiro_col.innerHTML = `<p style="margin-right: 20px;">${primeiro}</p>`
        segundo_col.innerHTML = `<p style="margin-right: 20px;">${segundo}</p>`
        terceiro_col.innerHTML = `<p style="margin-right: 20px;">${terceiro}</p>`
        quarto_col.innerHTML = ` ${quarto}`
        quinto_col.innerHTML = ` ${quinto}`
        sexto_col.innerHTML = ` ${sexto}`

    }
}

function reiniciar(){
    sessionStorage.clear()
    window.location.href = "./index.html";
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