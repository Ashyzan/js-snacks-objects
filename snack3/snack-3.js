

// Javascript - JS
// JSnack 3
// Crea un array di oggetti che rappresentano degli animali.

// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
//   { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
//   { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
// ]

const animali =  
    [
        {
            nome: 'leone',
            famiglia: 'felino',
            classe: 'mammifero',    
        },

        {
            nome: 'pappagalo',
            famiglia: 'volatili',
            classe: 'uccello',    
        },

        {
            nome: 'giraffa',
            famiglia: 'giraffidi',
            classe: 'mammifero',    
        },

        {
            nome: 'zebra',
            famiglia: 'equidi',
            classe: 'mammifero',    
        },

        {
            nome: 'condor',
            famiglia: 'volatili',
            classe: 'uccello',    
        },

    ]
    //console.log(animali)

// Crea un nuovo array con la lista dei mammiferi.

const arrayMammiferi = []

for (let i = 0 ; i < animali.length; i++) {

    const animale = animali[i];

    //console.log(animale)

    if (animale.classe === 'mammifero') {

        arrayMammiferi.push(animale)

    }

}

console.log(arrayMammiferi)