//console.log('funziona')

// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

const persone = [
    {
        nome: 'Gisella',
        cognome: 'Mannucci',
        eta: '18',
    },

    {
        nome: 'Marco',
        cognome: 'Mannucci',
        eta: '28',
    },

    {
        nome: 'Leone',
        cognome: 'Mannucci',
        eta: '5',
    },

    {
        nome: 'Paolo',
        cognome: 'Mannucci',
        eta: '12',
    },

    {
        nome: 'Carlo',
        cognome: 'Paolini',
        eta: '38',
    },



]

//console.log(persone)

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
// nome e cognome e l’indicazione se può guidare, in base all’età.

const arrayGuida = []

for ( i = 0 ; i < persone.length; i++) {

    const persona = persone[i]

    //console.log(persona)

    arrayGuida.push(persona)

    if ( persona.eta >= 18 ) {

       let frase = 'può guidare'

        arrayGuida.push(frase) 

    }

    else {

        let frase = 'non può guidare'

        arrayGuida.push(frase) 
    }
    
}

console.log(arrayGuida) 

