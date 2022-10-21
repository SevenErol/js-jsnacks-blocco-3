
// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.


const carsList = [
    {
        marca: "Opel",

        modello: "Corsa",

        alimentazione: "Benzina"
    },

    {
        marca: "Fiat",

        modello: "Panda",

        alimentazione: "Metano"
    },

    {
        marca: "Volvo",

        modello: "XC40",

        alimentazione: "Diesel"
    },

    {
        marca: "Citroen",

        modello: "C4",

        alimentazione: "Gpl"
    },

    {
        marca: "Opel",

        modello: "Astra",

        alimentazione: "Diesel"
    },

    {
        marca: "Peugeot",

        modello: "208",

        alimentazione: "Benzina"
    },

    {
        marca: "Peugeot",

        modello: "3008",

        alimentazione: "Diesel"
    },

    {
        marca: "Mini",

        modello: "Cooper",

        alimentazione: "Benzina"
    },

    {
        marca: "Tesla",

        modello: "Model s",

        alimentazione: "Elettrica"
    },

    {
        marca: "Toyota",

        modello: "Yaris",

        alimentazione: "Ibrida"
    },

    {
        marca: "Toyota",

        modello: "Corolla",

        alimentazione: "Ibrida"
    },

];

const autoBenzina = carsList.filter(element => {

    if(element.alimentazione === "Benzina") {

        return true;

    }

    return false;
});

console.log(autoBenzina);

const autoDiesel = carsList.filter(element => {

    if(element.alimentazione === "Diesel") {

        return true;

    }

    return false;
});

console.log(autoDiesel);

const others = carsList.filter(element => {

    if (element.alimentazione != "Diesel" && element.alimentazione != "Benzina") {

        return true;
    }

    return false;
})

console.log(others);

