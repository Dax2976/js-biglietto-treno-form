// recuper tutti gli input dati fino adesso

let km = document.getElementById('kmInput')
let nome = document.getElementById('nomeInput')
let age = document.getElementById('ageLista')
let btngenera = document.getElementById('genera')


// inizio calcoli

btngenera.addEventListener('click',function(){
    nome = nome.value
    km = km.value
    age = age.value


    let costoTreno = 0.21
    let bigliettoIntero = km*costoTreno
    let scontoMinori = costoTreno - (costoTreno*0.2)
    let scontoOver = costoTreno - (costoTreno*0.4)

    let prezzoGiovani = bigliettoIntero - scontoMinori
    let prezzoOver = bigliettoIntero - scontoOver

    bigliettoIntero = Math.round(bigliettoIntero * 10) / 10;
    prezzoGiovani= Math.round(prezzoGiovani * 10) / 10;
    prezzoOver = Math.round(prezzoOver * 10) / 10;

})