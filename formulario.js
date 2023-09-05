document.getElementById("enviar").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("fecha").value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        fecha: fecha
    };
    //Primero obtenemos el boton enviar con el getElementById, para luego enlazarle un evento a base del click
    //Las constantes obtienen los respectivos datos ingresados en las casillas con sus respectivos ID del formulario
    //El objeto data que creamos contiene propiedades con los valores de estas propiedades se toman de las constantes obtenidas en los pasos anteriores.

    const url = "https://jsonplaceholder.typicode.com/users";
    // la constante url hace un llamado a la api donde se enviaran los datos donde se simula un servidor RESTful
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log("Datos enviados con éxito.");
        } else {
            console.error("Error al enviar el mensaje");
        }
    })
    .catch(error => {
        console.error("Error en la solicitud:", error);
    });
});
// method selecciona si sera un post o un get. headers es un objeto que contiene los encabezados de la solicitud. En este caso, se establece el encabezado "Content-Type" con el valor "application/json". Esto indica al servidor que los datos enviados en el cuerpo de la solicitud están en formato JSON.
//body JSON.stringify(data): Especifica el cuerpo de la solicitud, es decir, los datos que se enviarán al servidor. En este caso, se utiliza JSON.stringify(data) para convertir el objeto data en una cadena JSON antes de enviarlo. La función JSON.stringify() convierte el objeto JavaScript en una cadena JSON válida.
// En resumen, esta parte del código configura la solicitud fetch para que realice un método POST al servidor especificado en la URL. Se establece el encabezado "Content-Type" para indicar que los datos se enviarán en formato JSON. El objeto data se convierte en una cadena JSON y se envía como cuerpo de la solicitud.
//En este caso, se realiza una solicitud POST y se envía el objeto data como cuerpo de la solicitud en formato JSON.
// Se verifica si la respuesta de la solicitud es exitosa (código de estado HTTP 200-299).De ser  así aparece un mensaje positivo en la consola.