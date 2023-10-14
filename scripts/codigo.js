const btn_agregar = document.getElementById('agregar');
var a = 0;
const tpobol=[];
btn_agregar.addEventListener("click", function () {
//creacion de separadores
    const div_P = D.create('div',{className:"row vh-40 justify-content-around align-items-start border mb-3"});

    const div_capita = D.create('div',{className:"col-sm-2"});

    const div_capita1 = D.create('div',{className:"col-sm-2"});

    const div_Aerolinea = D.create('div');

    const div_prec = D.create('div');

    const div_canPer = D.create('div');

    const div_LugarOri = D.create('div');

    const div_LugarDes = D.create('div');

    const div_Equipa = D.create('div');

    const div_cond = D.create('div');

    const div_fechasI = D.create('div');

    const div_horaIS = D.create('div');

    const div_horaIL = D.create('div');

    const div_fechasR = D.create('div');

    const div_horaRS = D.create('div');

    const div_horaRL = D.create('div');

    const span_Aerolinea = D.create('span', {className:"text-light"});
    span_Aerolinea.innerHTML = ' Aerolinea<br>';

    const span_prec = D.create('span', {className:"text-light"});
    span_prec.innerHTML = 'Precio del Boleto(USD)<br>';

    const span_canPer = D.create('span', {className:"text-light"});
    span_canPer.innerHTML = 'Cantidad de Personas<br>';

    const span_lugarOri = D.create('span', {className:"text-light"});
    span_lugarOri.innerHTML = 'Lugar Origen <br>';

    const span_lugarDes = D.create('span', {className:"text-light"});
    span_lugarDes.innerHTML = 'Lugar Destino<br>';

    const span_Equipa = D.create('span', {className:"text-light"});
    span_Equipa.innerHTML = 'Tipo de Equipaje<br>';

    const span_Condi = D.create('span', {className:"text-light"});
    span_Condi.innerHTML = '<br>Condiciones<br>';

    const span_fechaI = D.create('span', {className:"text-light"});
    span_fechaI.innerHTML = 'Fecha y Hora de Ida <br>';

    const span_horaIS = D.create('span', {className:"text-light"});
    span_horaIS.innerHTML = 'Salida<br>';

    const span_horaIL = D.create('span', {className:"text-light"});
    span_horaIL.innerHTML = 'LLegada<br>';

    const span_fechaR = D.create('span', {className:"text-light"});
    span_fechaR.innerHTML = 'Fecha y Hora de Regreso <br>';

    const span_horaRS = D.create('span', {className:"text-light"});
    span_horaRS.innerHTML = 'Salida<br>';

    const span_horaRL = D.create('span', {className:"text-light"});
    span_horaRL.innerHTML = 'LLegada<br>';

    const ae = "Aerolinea" + a;
    const pr = "PrecAdult" + a;
    const ca = "Canper" + a;
    const luo = "lugaresOr" + a;
    const lud = "lugaresDe" + a;
    const eq = "Equip" + a;
    const co = "Condiciones" + a;
    const fei = "fechasI" + a;
    const his = "horaIS" + a;
    const hil = "horaIL" + a;
    const fer = "fechasR" + a;
    const hrs = "horaRS" + a;
    const hrl = "horaRL" + a;

    const input_Aerolinea = D.create('input', { type: "text", id: ae, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"Aerolinea"});

    const input_prec = D.create('input', { type: "number", id: pr, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"USD"});

    const input_canPer = D.create('input', { type: "number", id: ca, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"0"});

    const input_LugarOri = D.create('input', { type: "text", id: luo, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"Lugar Origen"});

    const input_LugarDes = D.create('input', { type: "text", id: lud, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"Lugar Destino"});

    const input_fechasI = D.create('input', { type: "date", id: fei, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const input_horaIS = D.create('input', { type: "time", id: his, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const input_horaIL = D.create('input', { type: "time", id: hil, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const input_fechasR = D.create('input', { type: "date", id: fer, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const input_horaRS = D.create('input', { type: "time", id: hrs, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const input_horaRL = D.create('input', { type: "time", id: hrl, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const textArea_condicion = D.create('textarea', { id: co, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const select_Equipa = D.create('select', { id: eq, name: "Cbox2", className: "form-control ", style: "width:200%" });
    const opciones = [
        { id: "Mochila + Equipaje de mano", value: "Mochila + Equipaje de mano", text: "Mochila + Equipaje de mano" },
        { id: "Mochila + Equipaje de bodega", value: "Mochila + Equipaje de bodega", text: "Mochila + Equipaje de bodega" },
        { id: "Mochila + Equipaje de mano + Equipaje de bodega", value: "Mochila + Equipaje de mano + Equipaje de bodega", text: "Mochila + Equipaje de mano + Equipaje de bodega" },
        { id: "Mochila", value: "Mochila", text: "Mochila" },
        { id: "Equipaje de bodega", value: "Equipaje de bodega", text: "Equipaje de bodega" }
    ];


opciones.forEach(opcion => select_Equipa.add(new Option(opcion.text, opcion.value)));   
//borrar 
    const borrar = D.create('a', {
        href: 'javascriot:void(0)', innerHTML: '<br><div class="text-center"><button class="btn btn-danger" type="submit" >Eliminar</button></div>',
        onclick: function () { D.remove(div_P); a--}
    });


    D.append(span_Aerolinea, div_Aerolinea);
    D.append(input_Aerolinea, div_Aerolinea);
    D.append(span_prec, div_prec);
    D.append(input_prec, div_prec);
    D.append(span_canPer, div_canPer);
    D.append(input_canPer, div_canPer);
    D.append(span_lugarOri, div_LugarOri);
    D.append(input_LugarOri, div_LugarOri);
    D.append(span_lugarDes, div_LugarDes);
    D.append(input_LugarDes, div_LugarDes);
    D.append([span_Equipa, select_Equipa], div_Equipa);
    D.append([span_Condi, textArea_condicion], div_cond);



    D.append(span_fechaI, div_fechasI);
    D.append(input_fechasI, div_fechasI);
    D.append(span_horaIS, div_horaIS);
    D.append(input_horaIS, div_horaIS);
    D.append(span_horaIL, div_horaIL);
    D.append(input_horaIL, div_horaIL);
    D.append(span_fechaR, div_fechasR);
    D.append(input_fechasR, div_fechasR);
    D.append(span_horaRS, div_horaRS);
    D.append(input_horaRS, div_horaRS);
    D.append(span_horaRL, div_horaRL);
    D.append(input_horaRL, div_horaRL);

    D.append([div_Aerolinea,div_prec,div_canPer,div_LugarOri,div_LugarDes,div_Equipa,div_cond],div_capita);
    D.append([div_fechasI,div_horaIS,div_horaIL,div_fechasR,div_horaRS,div_horaRL],div_capita1);
    D.append([div_capita,div_capita1,borrar ],div_P);
    D.append(div_P, D.id('Boletos'));

    a++;
});

const btn_agregar2 = document.getElementById('agregar2');
btn_agregar2.addEventListener("click", function () {
//creacion de separadores
    const div_P = D.create('div',{className:"row vh-40 justify-content-around align-items-start border mb-3"});

    const div_capita = D.create('div',{className:"col-sm-2"});

    const div_capita1 = D.create('div',{className:"col-sm-2"});

    const div_Aerolinea = D.create('div');

    const div_prec = D.create('div');

    const div_canPer = D.create('div');

    const div_LugarOri = D.create('div');

    const div_LugarDes = D.create('div');

    const div_Equipa = D.create('div');

    const div_cond = D.create('div');

    const div_fechasI = D.create('div');

    const div_horaIS = D.create('div');

    const div_horaIL = D.create('div');

    const div_fechasR = D.create('div');

    const div_horaRS = D.create('div');

    const div_horaRL = D.create('div');

    const span_Aerolinea = D.create('span', {className:"text-light"});
    span_Aerolinea.innerHTML = ' Aerolinea<br>';

    const span_prec = D.create('span', {className:"text-light"});
    span_prec.innerHTML = 'Precio del Boleto(USD)<br>';

    const span_canPer = D.create('span', {className:"text-light"});
    span_canPer.innerHTML = 'Cantidad de Personas<br>';

    const span_lugarOri = D.create('span', {className:"text-light"});
    span_lugarOri.innerHTML = 'Lugar Origen <br>';

    const span_lugarDes = D.create('span', {className:"text-light"});
    span_lugarDes.innerHTML = 'Lugar Destino<br>';

    const span_Equipa = D.create('span', {className:"text-light"});
    span_Equipa.innerHTML = 'Tipo de Equipaje<br>';

    const span_Condi = D.create('span', {className:"text-light"});
    span_Condi.innerHTML = '<br>Condiciones<br>';

    const span_fechaI = D.create('span', {className:"text-light"});
    span_fechaI.innerHTML = 'Fecha y Hora<br>';

    const span_horaIS = D.create('span', {className:"text-light"});
    span_horaIS.innerHTML = 'Salida<br>';

    const span_horaIL = D.create('span', {className:"text-light"});
    span_horaIL.innerHTML = 'LLegada<br>';

    const span_fechaR = D.create('span', {className:"text-light d-none"});
    span_fechaR.innerHTML = 'Fecha y Hora de Regreso <br>';

    const span_horaRS = D.create('span', {className:"text-ligh d-none"});
    span_horaRS.innerHTML = 'Salida<br>';

    const span_horaRL = D.create('span', {className:"text-ligh d-none"});
    span_horaRL.innerHTML = 'LLegada<br>';

    const ae = "Aerolinea" + a;
    const pr = "PrecAdult" + a;
    const ca = "Canper" + a;
    const luo = "lugaresOr" + a;
    const lud = "lugaresDe" + a;
    const eq = "Equip" + a;
    const co = "Condiciones" + a;
    const fei = "fechasI" + a;
    const his = "horaIS" + a;
    const hil = "horaIL" + a;
    const fer = "fechasR" + a;
    const hrs = "horaRS" + a;
    const hrl = "horaRL" + a;

    const input_Aerolinea = D.create('input', { type: "text", id: ae, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"Aerolinea"});

    const input_prec = D.create('input', { type: "number", id: pr, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"USD"});

    const input_canPer = D.create('input', { type: "number", id: ca, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"0"});

    const input_LugarOri = D.create('input', { type: "text", id: luo, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"Lugar Origen"});

    const input_LugarDes = D.create('input', { type: "text", id: lud, style: "width:200%" , className:"form-control  -md-4 mb-3",placeholder:"Lugar Destino"});

    const input_fechasI = D.create('input', { type: "date", id: fei, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const input_horaIS = D.create('input', { type: "time", id: his, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const input_horaIL = D.create('input', { type: "time", id: hil, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const input_fechasR = D.create('input', { type: "text", id: fer,value:"2", style: "width:200%" , className:"d-none form-control  -md-4 mb-3"});

    const input_horaRS = D.create('input', { type: "text", id: hrs,value:"2", style: "width:200%" , className:"d-none form-control  -md-4 mb-3"});

    const input_horaRL = D.create('input', { type: "text", id: hrl,value:'2', style: "width:200%" , className:"d-none form-control  -md-4 mb-3"});

    const textArea_condicion = D.create('textarea', { id: co, style: "width:200%" , className:"form-control  -md-4 mb-3"});

    const select_Equipa = D.create('select', { id: eq, name: "Cbox2", className: "form-control ", style: "width:200%" });
    const opciones = [
        { id: "Mochila + Equipaje de mano", value: "Mochila + Equipaje de mano", text: "Mochila + Equipaje de mano" },
        { id: "Mochila + Equipaje de bodega", value: "Mochila + Equipaje de bodega", text: "Mochila + Equipaje de bodega" },
        { id: "Mochila + Equipaje de mano + Equipaje de bodega", value: "Mochila + Equipaje de mano + Equipaje de bodega", text: "Mochila + Equipaje de mano + Equipaje de bodega" },
        { id: "Mochila", value: "Mochila", text: "Mochila" },
        { id: "Equipaje de bodega", value: "Equipaje de bodega", text: "Equipaje de bodega" }
    ];


opciones.forEach(opcion => select_Equipa.add(new Option(opcion.text, opcion.value)));   
//borrar 
    const borrar = D.create('a', {
        href: 'javascriot:void(0)', innerHTML: '<br><div class="text-center"><button class="btn btn-danger" type="submit" >Eliminar</button></div>',
        onclick: function () { D.remove(div_P) }
    });


    D.append(span_Aerolinea, div_Aerolinea);
    D.append(input_Aerolinea, div_Aerolinea);
    D.append(span_prec, div_prec);
    D.append(input_prec, div_prec);
    D.append(span_canPer, div_canPer);
    D.append(input_canPer, div_canPer);
    D.append(span_lugarOri, div_LugarOri);
    D.append(input_LugarOri, div_LugarOri);
    D.append(span_lugarDes, div_LugarDes);
    D.append(input_LugarDes, div_LugarDes);
    D.append([span_Equipa, select_Equipa], div_Equipa);
    D.append([span_Condi, textArea_condicion], div_cond);



    D.append(span_fechaI, div_fechasI);
    D.append(input_fechasI, div_fechasI);
    D.append(span_horaIS, div_horaIS);
    D.append(input_horaIS, div_horaIS);
    D.append(span_horaIL, div_horaIL);
    D.append(input_horaIL, div_horaIL);
    D.append(span_fechaR, div_fechasR);
    D.append(input_fechasR, div_fechasR);
    D.append(span_horaRS, div_horaRS);
    D.append(input_horaRS, div_horaRS);
    D.append(span_horaRL, div_horaRL);
    D.append(input_horaRL, div_horaRL);

    D.append([div_Aerolinea,div_prec,div_canPer,div_LugarOri,div_LugarDes,div_Equipa,div_cond],div_capita);
    D.append([div_fechasI,div_horaIS,div_horaIL,div_fechasR,div_horaRS,div_horaRL],div_capita1);
    D.append([div_capita,div_capita1,borrar ],div_P);
    D.append(div_P, D.id('Boletos'));

    a++;
});
//guardar

const btn_guardar = document.getElementById('guardar');


const Aerolinea =[];
const prec =[];
const canPer =[];
const LugarOri =[];
const LugarDes =[];
const Equipa =[];
const cond=[];

const fechasI =[];
const horaIS =[];
const horaIL =[];
const fechasR =[];
const horaRS =[];
const horaRL =[];

var aux="false";

btn_guardar.addEventListener("click", function () {

        // Obtén una referencia al elemento <select> por su id
        var selectElement = document.getElementById("Cbox");
        // Obtén el valor de la opción seleccionada
        var valorSeleccionado = selectElement.value;
        if(valorSeleccionado=='Mujer'){
            var genero = 'Srta.';
        }else if(valorSeleccionado=='Hombre'){
            var genero = 'Sr.';
        }
        // Muestra el valor en un párrafo (o puedes hacer lo que desees con él)
    var persona = document.getElementById('seniores').value;
    var fee = document.getElementById('fee').value;
    for (var b = 0; b < a; b++) {
        const ae = "Aerolinea" + b;
        const pr = "PrecAdult" + b;
        const ca = "Canper" + b;
        const luo = "lugaresOr" + b;
        const lud = "lugaresDe" + b;
        const eq = "Equip" + b;
        const co = "Condiciones" + b;
        const fei = "fechasI" + b;
        const his = "horaIS" + b;
        const hil = "horaIL" + b;
        const fer = "fechasR" + b;
        const hrs = "horaRS" + b;
        const hrl = "horaRL" + b;
    
        if (document.getElementById(ae) != null) {
            Aerolinea.push(document.getElementById(ae).value);
            prec.push(document.getElementById(pr).value);
            canPer.push(document.getElementById(ca).value);
            LugarOri.push(document.getElementById(luo).value);
            LugarDes.push(document.getElementById(lud).value);
            Equipa.push(document.getElementById(eq).value);
            cond.push(document.getElementById(co).value);

            fechasI.push(document.getElementById(fei).value);
            horaIS.push(document.getElementById(his).value);
            horaIL.push(document.getElementById(hil).value);
            fechasR.push(document.getElementById(fer).value);
            horaRS.push(document.getElementById(hrs).value);
            horaRL.push(document.getElementById(hrl).value);
        }
    }
    if(persona=="" || fee==""){
        aux="false";
        alert("Llenar todos los campos"); 
    }else{
    for(var i=0;i<a;i++){
        if(Aerolinea[i]=="" || prec[i]=="" || canPer[i]=="" || LugarOri[i]=="" || LugarDes[i]=="" || fechasI[i]=="" || horaIS[i]=="" || horaIL[i]=="" || fechasR[i]=="" || horaRS[i]=="" || horaRL[i]==""){
            aux="false";
            alert("Llenar todos los campos en el boleto "+(i+1));  
            Aerolinea.length = 0;
            prec.length = 0;
            canPer.length = 0;
            LugarOri.length = 0;
            LugarDes.length = 0;
            Equipa.length = 0;
            cond.length = 0;

            fechasI.length = 0;
            horaIS.length = 0;
            horaIL.length = 0;
            fechasR.length = 0;
            horaRS.length = 0;
            horaRL.length = 0;
            break ;
        }else {
            aux="true";
        }
    }  
    }
    if(aux=="true"){
        //usando almacenamiento de chrome 
        localStorage.clear();
        localStorage.setItem("Ppersona",persona);
        localStorage.setItem("GGenero",genero);
        localStorage.setItem("Ffee",fee);
    
        localStorage.setItem("arregloAerolinea", Aerolinea.join("&"));
        localStorage.setItem("arregloprec", prec.join("&"));
        localStorage.setItem("arreglocanPer", canPer.join("&"));
        localStorage.setItem("arregloLugarOri", LugarOri.join("&"));
        localStorage.setItem("arregloLugarDes", LugarDes.join("&"));
        localStorage.setItem("arregloEquipa", Equipa.join("&"));
        localStorage.setItem("arreglocond", cond.join("&"));
    
        localStorage.setItem("arreglofechasI", fechasI.join("&"));
        localStorage.setItem("arreglohoraIS", horaIS.join("&"));
        localStorage.setItem("arreglohoraIL", horaIL.join("&"));
        localStorage.setItem("arreglofechasR", fechasR.join("&"));
        localStorage.setItem("arreglohoraRS", horaRS.join("&"));
        localStorage.setItem("arreglohoraRL", horaRL.join("&"));  
        window.location.href = "plantillaProforma.html";
    }

});

