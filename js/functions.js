function VentanaAlerta()
{
    alert("ATENCIÓN VENTANA DE ALERTA");
}
function VentanaConfirmacion()
{
    var respuesta;
    if(confirm("¿Desea confirmar?"))
    {
        respuesta="Has pulsado OK";
    }
    else
    {
        respuesta="Has pulsado CANCEL";
    }
    document.getElementById("MensajeConfirmacion").innerHTML=respuesta;
}
function PideInformacion()
{
    var person=prompt("¿Cómo the llamas?");
    if(person==null || person=="")
    {
        respuesta="El usuario pulso CANCEL";
    }
    else
    {
        respuesta="Hola " + person + ", ¿Qué tal estás?";
    }
    document.getElementById("MensajeInformacion").innerHTML=respuesta;
}