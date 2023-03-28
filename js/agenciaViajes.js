
/* Declaramos una variable con un array vacío: y luego una función para guardar la información de cada campo requerido en el formularío*/


let solicitudes = [ ];   

function solicitarInformacion(){      

    let nombre = document.getElementById("nombre").value;      

    let origen = document.getElementById("origen").value;

    let destino = document.getElementById("destino").value;

    let nViajeros = document.getElementById("nViajeros").value;

    let fecha = document.getElementById("fecha").value;

    let datos = { nombre, origen, destino, nViajeros, fecha };               
    
/*     introducimos el objeto creado en el array vacío y lo mostramos por consola. ¡ con el push.! */

    solicitudes.push(datos);  
    console.log(solicitudes);
}

/* función para hacer filtrado de las solicituces. */

function filtrar(){    
                                           
    let arrayFlitrado = solicitudes.filter(
        
            function (solicitud){                                  
            return (solicitud.destino.toLowerCase() == "mallorca" || solicitud.destino.toLowerCase() == "galicia" || solicitud.destino.toLowerCase() == "canarias"); /* toLowerCase (minúsculas y mayúsculas) */
            })

    let lista = document.getElementById("solicitudes");    

         arrayFlitrado.forEach(function (solicitud){      

                console.log(solicitud);       
                                  
    lista.innerHTML = ( `Nombre: ${solicitud.nombre}&nbsp
                         Origen: ${solicitud.origen} &nbsp
                         Destino: ${solicitud.destino} &nbsp
                         Numero de viajeros: ${solicitud.nViajeros} &nbsp
                         Fecha de salida: ${solicitud.fecha}`) 
    })  
   
}
/* innerHTML para introducir en la pagina el codigo html con la info. */

