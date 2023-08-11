let condiciones = {
    'Piedra' : {
        'Piedra' : 'Empate',
        'Tijera' : 'Victoria',
        'Papel' : 'Derrota'
    },
    'Tijera' : {
        'Piedra' : 'Derrota',
        'Tijera' : 'Empate',
        'Papel' : 'Victoria'
    },
    'Papel' : {
        'Piedra' : 'Victoria',
        'Tijera' : 'Derrota',
        'Papel' : 'Empate'
    }
}

let victories = 0;
let loses = 0;

function checker(input){

    let opciones = ["Piedra", "Papel", "Tijera"];
    let num = Math.floor(Math.random()*3);
    let eleccionCpu = opciones[num];
    let result

    switch(condiciones[input][eleccionCpu]){
        case 'Victoria':
            result = "Victoria";
            victories ++;
            break;
        case 'Derrota':
            result = "Derrota";
            loses++;
            break;
        default:
            result = "Empate";
            break;
    }

    document.getElementById('victories').textContent = victories.toString();
    document.getElementById('loses').textContent = loses.toString();
    document.getElementById('result').textContent = result;
}
