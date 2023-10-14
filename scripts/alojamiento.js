
//! Variables importante para el funcionamiento de la pagina web
var Rectificador = [1, 1];
//! Posicion 0: Valor de control de generacion de evento
//! Posicion 1: Valor de conteo para el primer formulario

//TODO: Funcion para generar y eliminar campos de huespedes
//* Agregar campos huesped
function agregarCampoHuesped(NumeroFormulario) {
    //* Creamos un traker para el contenedor
    const NContainer = document.getElementById(`nombresgen${NumeroFormulario}`);

    //! agregacion de huespedes
    Rectificador[NumeroFormulario]++;
    const NuevoCamp = document.createElement("div");
    NuevoCamp.id = `huespedes${Rectificador[NumeroFormulario]}`;
    NuevoCamp.innerHTML = `
    <label for="huesped${Rectificador[NumeroFormulario]}">Nombre completo del huesped: </label>
    <div class="d-flex">
        <input type="text" class="form-control" id="huesped${Rectificador[NumeroFormulario]}" name="huesped[]">
        <button type="button" class="btn btn-danger" onclick="eliminarCampoHuesped(${NumeroFormulario}, ${Rectificador[NumeroFormulario]})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
        </button>
    </div>
    `;

    NContainer.appendChild(NuevoCamp);
}

//* Eliminar campos de huesped
function eliminarCampoHuesped(NumeroFormulario, pointer) {
    //*Creamos un traker para el Contenedor
    if (pointer !== 1) {
        const NContainer = document.getElementById(`nombresgen${NumeroFormulario}`);
        const IdDel = document.querySelector(`div[id="huespedes${pointer}"]`);

        NContainer.removeChild(IdDel);
    }
}

//TODO: Funciones para generar nuevos eventos
//* Generar nuevo formulario
function generarFormulario() {
    Rectificador[0]++;
    Rectificador.push(1);

    //* Creamos un traker para el contenedor
    const FContainer = document.getElementById("formContainer");

    //* Crear nuevo formulario
    const FFormulario = document.createElement("form");
    FFormulario.id = `eventoContainer${Rectificador[0]}`;
    FFormulario.classList = `row`;
    FFormulario.innerHTML = `
    <div class="col-sm-6 col-md-6">
        <div class="nombresgen${Rectificador[0]}" id="nombresgen${Rectificador[0]}">
            <div id="huespedes1">
                <label for="huesped1" class="form-label">Nombre completo del huésped: </label>
                <div class="d-flex">
                    <input type="text" class="form-control" id="huesped1" name="huesped[]">
                    <button type="button" class="btn btn-success" onclick="agregarCampoHuesped(${Rectificador[0]})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="checkin${Rectificador[0]}" class="form-label">Check-in:</label>
            <input type="time" class="form-control" id="hora_inicio${Rectificador[0]}" name="hora_inicio${Rectificador[0]}" required>
        </div>
        <div class="mb-3">
            <label for="chekout${Rectificador[0]}" class="form-label">Chek-out:</label>
            <input type="time" class="form-control" id="hora_final${Rectificador[0]}" name="hora_final${Rectificador[0]}" required>
        </div>
        <div class="mb-3">
            <label for="direccion${Rectificador[0]}" class="form-label">Dirección:</label>
            <input type="text" class="form-control" id="direccion${Rectificador[0]}" name="direccion${Rectificador[0]}" required>
        </div>
        <div class="mb-3">
            <label for="telefono${Rectificador[0]}" class="form-label">Teléfono:</label>
            <input type="number" class="form-control" id="telefono${Rectificador[0]}" name="telefono${Rectificador[0]}" required>
        </div>
    </div>

    <!-- Segunda columna -->
    <div class="col-sm-6 col-md-6">
        <div class="mb-3 ">
            <label for="lugar${Rectificador[0]}" class="form-label">Lugar:</label>
            <input type="text" class="form-control" id="lugar${Rectificador[0]}" name="lugar${Rectificador[0]}" required>
        </div>
        <div class="mb-3 ">
            <label for="hotel${Rectificador[0]}" class="form-label">Hotel:</label>
            <input type="text" class="form-control" id="hotel${Rectificador[0]}" name="hotel${Rectificador[0]}" required>
        </div>
        <div class="mb-3 ">
            <label for="fecha_entrada${Rectificador[0]}" class="form-label">Fecha de Entrada:</label>
            <input type="date" class="form-control" id="fecha_entrada${Rectificador[0]}" name="fecha_entrada${Rectificador[0]}" required>
        </div>
        <div class="mb-3 ">
            <label for="fecha_salida${Rectificador[0]}" class="form-label">Fecha de Salida:</label>
            <input type="date" class="form-control" id="fecha_salida${Rectificador[0]}" name="fecha_salida${Rectificador[0]}" required>
        </div>
        <div class="mb-3 ">
            <label for="tipo_habitacion${Rectificador[0]}" class="form-label">Tipo de Habitación:</label>
            <input type="text" class="form-control" id="habitacion${Rectificador[0]}" name="habitacion${Rectificador[0]}" required>
        </div>
        <div class="mb-3 ">
            <label for="alimentacion${Rectificador[0]}" class="form-label">Alimentación:</label>
            <input type="text" class="form-control" id="alimentacion${Rectificador[0]}" name="alimentacion${Rectificador[0]}" required>
        </div>
        <div class="mb-3 ">
            <label for="codigo_reserva${Rectificador[0]}" class="form-label">Código de Reserva:</label>
            <input type="number" class="form-control" id="codigo_reserva${Rectificador[0]}" name="codigo_reserva${Rectificador[0]}" required>
        </div>
    </div>
    `;

    const separator = document.getElementById("buttons");
    FContainer.insertBefore(FFormulario, separator)
    //FContainer.appendChild(FFormulario);
}

//* Eliminar nuevo formulario
function eliminarFormulario() {
    const FContainer = document.getElementById("formContainer");
    const FFormulario = FContainer.querySelector(`form[id="eventoContainer${Rectificador[0]}"]`);

    if (Rectificador[0] > 1) {
        FContainer.removeChild(FFormulario);
        Rectificador[0]--;
        Rectificador.pop();
    }
}

//TODO: Funciones para guardar los datos
//* Guardar los datos en locaStorage
function SaveData() {
    const CFomularios = document.querySelectorAll("form[id^=eventoContainer]");
    let datosCompletos = true;

    CFomularios.forEach((CFomularios, index) => {
        index++; //! Indicador de posicion
        //* Metodo para guardar todos los huespedes de los huespedes
        const Trackerx = document.querySelector(`form[id=eventoContainer${index}]`);

        const nombreInputs = CFomularios.querySelectorAll(`input[name="huesped[]"]`);
        const huespedes = [];

        nombreInputs.forEach(input => {
            if (input.value !== "") {
                huespedes.push(input.value);
            }
        });

        const lugar = document.querySelector(`input[name="lugar${index}"]`).value;

        const hotel = document.querySelector(`input[name="hotel${index}"]`).value;

        const fecha_entrada = document.querySelector(`input[name="fecha_entrada${index}"]`).value;

        const fecha_salida = document.querySelector(`input[name="fecha_salida${index}"]`).value;

        const habitacion = document.querySelector(`input[name="habitacion${index}"]`).value;

        const alimentacion = document.querySelector(`input[name="alimentacion${index}"]`).value;

        const codigo_reserva = document.querySelector(`input[name="codigo_reserva${index}"]`).value;

        const hora_inicio = document.querySelector(`input[name="hora_inicio${index}"]`).value;

        const hora_final = document.querySelector(`input[name="hora_final${index}"]`).value;

        const direccion = document.querySelector(`input[name="direccion${index}"]`).value;

        const telefono = document.querySelector(`input[name="telefono${index}"]`).value

        if (lugar === "" || hotel === "" || huespedes.some(huesped => huesped === "") ||
            fecha_entrada === "" || fecha_salida === "" || habitacion === "" ||
            alimentacion === "" || codigo_reserva === "" || hora_inicio === "" || hora_final === "" ||
            direccion === "" || telefono === "") {
            datosCompletos = false;
            alert(`El Formulario ${index} esta incompleto`);

        } else {
            //? Guardamos todos los datos del form de forma local
            if (datosCompletos) {
                localStorage.setItem(`evento${index}`, JSON.stringify({
                    lugar: lugar,
                    hotel: hotel,
                    huespedes: huespedes,
                    fecha_entrada: fecha_entrada,
                    fecha_salida: fecha_salida,
                    habitacion: habitacion,
                    alimentacion: alimentacion,
                    codigo_reserva: codigo_reserva,
                    hora_inicio: hora_inicio,
                    hora_final: hora_final,
                    direccion: direccion,
                    telefono: telefono
                }));
                vistapdf();
            }
        }
    })
}


//TODO: Funcion para imprimir los datos del LocalStorage en la pantalla
//* Cargar data a la vista previa
function vistapdf() {
    //* Array para almacenar las claves que coinciden con el patrón
    const clavesFiltradas = [];
    //* Itera a través de las claves del localStorage usando forEach
    Object.keys(localStorage).forEach(function (clave) {
        //* Verifica si la clave comienza con el patrón de búsqueda
        if (clave.startsWith("evento")) {
            clavesFiltradas.push(clave);
        }
    });

    //* Ordena las claves alfabéticamente
    clavesFiltradas.sort();

    //* Si el array esta vacio imprime...
    if(clavesFiltradas== ""){
        alert("No hay datos para mostrar.")
        return;
    }
    

    //* Limpiar la tabla
    const controler = document.querySelector(".a4container")
    const paginasABorrar = controler.querySelectorAll('div[class^="pagina"]:not(.pagina1)');
    paginasABorrar.forEach(pagina => controler.removeChild(pagina));

    // variable unica para controlar el generado de paginas
    var cont = 1, valx = 0;

    const divTracker = document.getElementById("cuerpo-tabla");
    // Elimina todos los elementos hijos del div principal
    while (divTracker.firstChild) {
        divTracker.removeChild(divTracker.firstChild);
    }


    // Itera sobre las claves ordenadas y muestra sus datos
    clavesFiltradas.forEach(function (clave) {
        const bigdata = JSON.parse(localStorage.getItem(clave));

        //* cargamos un valor por pasada
        valx++;
        //* consultamos si el valor es igual que 4
        if (valx == 4) {
            //* aumentamos el cont para paginaX
            cont++;
            //* Generamos una nueva pagina 
            ExcedeRango(cont);
            //* reseteamos el valor pasada
            valx = 1;
        }

        //* Creamos un traker para la paginaX
        const TrackerPage = document.querySelector(`div[class="pagina${cont}"]`);
        //* Creamos un traker para el contenedor dentro de la paginaX
        const TCuerpo = TrackerPage.querySelector(".cuerpo-tabla");

        //* Creamos una nueva tabla
        const TGenerador = document.createElement("table");
        TGenerador.id = "entablar";
        TGenerador.classList = "entablar ";
        TGenerador.innerHTML = `
        <!-- Encabezado de la tabla | fila 1 -->
        <tr class="container-head">
            <th class="hhotel" colspan="2">Hotel ${bigdata.hotel}</th>
            <th class="hlugar" colspan="2">Lugar: ${bigdata.lugar}</th>
        </tr>
        <!-- Cuerpo de la tabla | fila 2-->
        <tr>
            <th class="labelhuesped">Datos de los huéspedes</th>
            <th class="shuesped" colspan="3">${bigdata.huespedes}</th>
        </tr>
        <!-- Cuerpo de la tabla | fila 3-->
        <tr>
            <th class="labelentrada" rowspan="2">Entrada</th>
            <th class="sentrada" rowspan="2">${bigdata.fecha_entrada}</th>
            <th class="labeltipo">Tipo de habitacion</th>
            <th class="settipo">${bigdata.habitacion}</th>
        </tr>
        <tr>
            <th class="labelalimentacion">Alimentacion</th>
            <th class="salimentacion">${bigdata.alimentacion}</th>
        </tr>
        <!-- Cuerpo de la tabla | fila 4-->
        <tr>
            <th class="labelsalida">Salida</th>
            <th class="ssalida">${bigdata.fecha_salida}</th>
            <th class="labelreserva">Codigo de Reserva</th>
            <th class="scodigo">${bigdata.codigo_reserva}</th>
        </tr>
        <!-- Final de la tabla | fila 5-->
        <tr class="container-fut">
            <th colspan="4">*** CHEK-IN: ${bigdata.hora_final} / CHEK-OUT: ${bigdata.hora_inicio} ***</th>
        </tr>
        <tr class="container-fut">
            <th colspan="4">Direccion: ${bigdata.direccion} - Telefono: ${bigdata.telefono}</th>
        </tr>
        `;
        TCuerpo.append(TGenerador);
    });

}

//* Incrementar tamaño de hoja A4
function ExcedeRango(nuevoConteniente) {
    const Incrementador = document.getElementById("a4container");

    const Newpage = document.createElement(`div`);
    Newpage.classList = `pagina${nuevoConteniente}`
    Newpage.innerHTML = `
    <div class="cabezera">
        <img src="Hlogo.png" alt="Cabezera">
    </div>

    <div id="cuerpo-tabla" class="cuerpo-tabla">
    </div>

    <div class="piepagina">
        <img src="Hfooter.png" alt="pie_pagina">
    </div>
    `;
    Incrementador.append(Newpage);
}


//* generar el pdf
function downloadPDF() {
    const divdel = document.getElementById("a4container"); // <-- Aquí puedes elegir cualquier elemento del DOM
    vistapdf();
    html2pdf()
        .set({
            margin: 1,
            filename: 'Alojamiento.pdf',
            image: {
                type: 'jpeg',
                quality: 1
            },
            html2canvas: {
                scale: 4, // A mayor escala, mejores gráficos, pero más peso
                letterRendering: true,
            },
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: 'portrait', // landscape o portrait
                margin: 0
            }
        })
        .from(divdel)
        .save()
        .catch(err => console.log(err));
    VaciarLocalStorage("evento");
}

function VaciarLocalStorage(pattern) {
    // Obtén todas las keys almacenadas en localStorage
    const keys = Object.keys(localStorage);

    // Filtra las keys que coinciden con el patrón
    const keysToDelete = keys.filter(key => key.startsWith(pattern));

    // Elimina las keys encontradas
    keysToDelete.forEach(key => localStorage.removeItem(key));

}

function ReloadCamp(){
    const Loader = document.getElementById("cuerpo-tabla");

    const Newspage = document.createElement("table");
    Newspage.id="entablar";
    Newspage.classList = "entablar";
    Newspage.innerHTML = `
    <!-- Encabezado de la tabla | fila 1 -->
    <tr class="container-head">
        <th class="hhotel" colspan="2">Hotel $Hotel</th>
        <th class="hlugar" colspan="2">Lugar: $Lugar</th>
    </tr>
    <!-- Cuerpo de la tabla | fila 2-->
    <tr>
        <th class="labelhuesped">Datos de los huéspedes</th>
        <th class="shuesped" colspan="3">&data</th>
    </tr>
    <!-- Cuerpo de la tabla | fila 3-->
    <tr>
        <th class="labelentrada" rowspan="2">Entrada</th>
        <th class="sentrada" rowspan="2">&fecha de entrada</th>
        <th class="labeltipo">Tipo de habitacion</th>
        <th class="settipo">&Tipo</th>
    </tr>
    <tr>
        <th class="labelalimentacion">Alimentacion</th>
        <th class="salimentacion">&alimentacion</th>
    </tr>
    <!-- Cuerpo de la tabla | fila 4-->
    <tr>
        <th class="labelsalida">Salida</th>
        <th class="ssalida">&fecha de salida</th>
        <th class="labelreserva">Codigo de Reserva</th>
        <th class="scodigo">&codigo</th>
    </tr>
    <!-- Final de la tabla | fila 5-->
    <tr class="container-fut">
        <th colspan="4">*** CHEK-IN: &chekin / CHEK-OUT: &chekout ***</th>
    </tr>
    <tr class="container-fut">
        <th colspan="4">Direccion: &direccion - telefono: &telefono</th>
    </tr>
    `;
    Loader.appendChild(Newspage);
}