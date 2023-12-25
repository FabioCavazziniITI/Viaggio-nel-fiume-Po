function prenota()
{
    //DATI INSERITI
    var tipo_v = document.Form.tipo_viaggio.value;
    var quant = document.Form.quantity.value;
    var date = document.Form.date.value;
    var time = document.Form.orario.value;
    var name = document.Form.nome.value;
    var surname = document.Form.cognome.value;
    var email = document.Form.email.value;
    var tel = document.Form.cell.value;

    //DATI CALCOLO
    var p1 = 10;
    var p2 = 5;

    //VARIABILI CALCOLO
    var scontrino;

    //CALCOLO PREZZO
    if (tipo_v == 'Con_guida')
    {
        scontrino=quant*p1;
    }
    else
    {
        scontrino=quant*p2
    }

    //STAMPA
    document.write("Nome intestatario: " +name+ "<br>");
    document.write("Cognome intestatario: " +surname+ "<br>");
    document.write("EMAIL: " +email+ "<br>");
    document.write("TEL: " +tel+ "<br>");
    document.write("N. PRESENTI: " +quant+ "<br>");
    document.write("PREZZO: " +scontrino+ "<br>");
}