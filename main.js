let question = true

while (question) {
    let playerselect = prompt('pilih batu, gunting, atau batu??')
    let player = playerselect.toLowerCase()
    let arr =['batu','gunting','kertas']
    let bot = arr [Math.floor(Math.random() * 3)]


    if(player === 'batu' && bot === 'batu' ||player === 'batu' && bot === 'batu' || player === 'batu' && bot === 'batu'){
        alert(`player pilih ${player},bot pilih ${bot} maka kamu seri`)
    }
    else if(player === 'batu' && bot === 'kertas' ||player === 'gunting' && bot === 'kertas' || player === 'batu' && bot === 'gunting'){
        alert(`player pilih ${player},bot pilih ${bot} maka kamu kalah`)   
    }
    else if(player === 'kertas' && bot === 'batu' ||player === 'kertas' && bot === 'gunting' || player === 'gunting' && bot === 'batu'){
        alert(`player pilih ${player},bot pilih ${bot} maka kamu menang`) 
    } else {
        alert('itu diliat dulu tulisan nya')
    }
    if(player){
        question = confirm('lanjut gak??')
    }
}
