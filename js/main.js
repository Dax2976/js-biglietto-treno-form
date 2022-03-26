// recuper tutti gli input dati fino adesso

let km = document.getElementById('kmInput')
let nome = document.getElementById('nomeInput')
let eta = document.getElementById('ageList')
let btngenera = document.getElementById('genera')
let display = document.getElementById('Dnone')


// inizio calcoli


annulla.addEventListener('click',function(){
    location.reload()
})

genera.addEventListener('click',function(){
    nome = nome.value
    km = km.value
    eta = eta.value


    let costoTreno = 0.21
    let bigliettoIntero = km*costoTreno
    let scontoMinori = bigliettoIntero - (bigliettoIntero*0.2)
    let scontoOver = bigliettoIntero - (bigliettoIntero*0.4)

    let prezzoGiovani = bigliettoIntero - scontoMinori
    let prezzoOver = bigliettoIntero - scontoOver

    bigliettoIntero = Math.round(bigliettoIntero * 10) / 10
    prezzoGiovani= Math.round(prezzoGiovani * 10) / 10
    prezzoOver = Math.round(prezzoOver * 10) / 10
    
    // console.log(typeof (scontoOver))
    display.classList.add('dBlock')

    document.getElementById('nomeUtente').innerHTML = nome

    if(eta == "maggiorenne") {
        document.getElementById("offerta").innerHTML = `Biglietto Standard`
        document.getElementById("ticketPrice").innerHTML = `€${bigliettoIntero}`
    } else if(eta == "minorenne"){
        document.getElementById("offerta").innerHTML = `Biglietto Minori`
        document.getElementById("ticketPrice").innerHTML = `€${scontoMinori}`
    } else{eta == "over65"
        document.getElementById("offerta").innerHTML = `Biglietto Anziani`
        document.getElementById("ticketPrice").innerHTML = `€${scontoOver}`
    }

    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 100)
    document.getElementById('codeCp').innerHTML = Math.floor(Math.random() * 100000)
})