
//sacar informacion del almacenamiento local
    var Ppersona = localStorage.getItem("Ppersona");
    var GGenero = localStorage.getItem("GGenero");
    var Ffee = localStorage.getItem("Ffee");

    //arreglos
    var arregloAerolinea = localStorage.getItem("arregloAerolinea");
    var arregloprec = localStorage.getItem("arregloprec");
    var arreglocanPer = localStorage.getItem("arreglocanPer");
    var arregloEquipa = localStorage.getItem("arregloEquipa");
    var arregloLugarori = localStorage.getItem("arregloLugarOri");
    var arregloLugarDes = localStorage.getItem("arregloLugarDes");
    var arreglocond = localStorage.getItem("arreglocond");
    var arreglofechasI = localStorage.getItem("arreglofechasI");
    var arreglohoraIS = localStorage.getItem("arreglohoraIS");
    var arreglohoraIL = localStorage.getItem("arreglohoraIL");
    var arreglofechasR = localStorage.getItem("arreglofechasR");
    var arreglohoraRS = localStorage.getItem("arreglohoraRS");
    var arreglohoraRL = localStorage.getItem("arreglohoraRL");
    //arreglos
    arregloAerolinea = arregloAerolinea.split("&");
    arregloprec = arregloprec.split("&");
    arreglocanPer = arreglocanPer.split("&");
    arregloEquipa = arregloEquipa.split("&");
    arregloLugarori = arregloLugarori.split("&");
    arregloLugarDes = arregloLugarDes.split("&");
    arreglocond = arreglocond.split("&");
    arreglofechasI = arreglofechasI.split("&");
    arreglohoraIS = arreglohoraIS.split("&");
    arreglohoraIL = arreglohoraIL.split("&");
    arreglofechasR = arreglofechasR.split("&");
    arreglohoraRS = arreglohoraRS.split("&");
    arreglohoraRL = arreglohoraRL.split("&");


    for (var i = 0; i < arregloAerolinea.length; i++) {
        //vista en consola de los datos PRUEBA ANTES DE SEGUIR PROGRAMANDO :)
        console.log(arregloAerolinea[i],arregloprec[i], arreglocanPer[i], arregloEquipa[i],arregloLugarori[i]
        ,arregloLugarDes[i],arreglofechasR[i],arreglohoraIS[i],arreglofechasI[i],arreglocond[i]);
    }
    
//obtener la fecha 
var fecha = new Date();
var dia = fecha.getDate();
var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
var mes = meses[fecha.getMonth()];
var anio = fecha.getFullYear();
var hora = fecha.getHours();
var minut = fecha.getMinutes();
var secon = fecha.getSeconds();

//escribir en html     
var prof =document.getElementById("prof");
prof.innerHTML='Proforma N°'+dia+((fecha.getMonth() + 1).toString().padStart(2, "0"))+anio+(hora.toString().padStart(2, "0"))+minut+(secon.toString().padStart(2, "0"));

var prof1= dia+((fecha.getMonth() + 1).toString().padStart(2, "0"))+anio+(hora.toString().padStart(2, "0"))+minut+(secon.toString().padStart(2, "0"));
var Fech =document.getElementById("fech");
Fech.innerHTML='Lima,'+dia+' de '+mes+' de '+anio;

var genero =document.getElementById('genero');
genero.innerHTML= GGenero;

var persona =document.getElementById('persona');
persona.innerHTML= Ppersona;

//
var Suma =[];
var Total_int =0;
var Total_str =[];
//primera tabla
for (var i = 0; i < arregloAerolinea.length; i++) {
    Suma.push(parseFloat(arregloprec[i])+ parseFloat(Ffee)).toString();
    Total_str.push(parseFloat(Suma[i])*parseFloat(arreglocanPer[i])).toString();
    Total_int=parseFloat(Total_int)+parseFloat(Total_str[i]);
}
for (var i = 0; i < arregloAerolinea.length; i++) {

        if(arreglofechasR[i]==""){
        var NuevaTabla = document.getElementById("Ntablas"+i);
        NuevaTabla.innerHTML='<tbody><tr><td bgcolor="#F5760A" colspan="2">Ruta One Way</td>'+
            '<td class="text-center" colspan="2">'+arregloLugarori[i]+'-'+arregloLugarDes[i]+'</td></tr>'+
            '<tr><td bgcolor="#C6E0B4" colspan="2">Aerolinea'+
            '</td><td class="text-center" colspan="2">'+arregloAerolinea[i]+
            '</td></tr>'+
            '<tr><td bgcolor="#C6E0B4" class="text-center">Fecha</td><td bgcolor="#C6E0B4" class="text-center">Ruta</td><td bgcolor="#C6E0B4" class="text-center">Salida</td><td bgcolor="#C6E0B4" class="text-center">LLegada</td></tr><tr>'+
            '<td class="text-center">'+arreglofechasI[i]+
            '</td><td class="text-center">'+arregloLugarori[i]+'-'+arregloLugarDes[i]+
            '</td><td class="text-center">'+arreglohoraIS[i]+
            '</td><td class="text-center">'+arreglohoraIL[i]+
            '</td></tr></tbody>'
        var NuevaTabla2 = document.getElementById("Ntablas"+i+"r");
        NuevaTabla2.innerHTML='<tbody><tr><td bgcolor="#C6E0B4" colspan="2">Tipo de equipaje</td>'+
            '<td class="text-center" colspan="3">'+arregloEquipa[i]+'</td></tr>'+
            '<tr><td bgcolor="#C6E0B4" class="text-center">Tarifa neta</td><td bgcolor="#C6E0B4" class="text-center">Fee de emision</td><td bgcolor="#C6E0B4" class="text-center">Precio por persona</td><td bgcolor="#C6E0B4" class="text-center">Cantidad</td><td bgcolor="#C6E0B4" class="text-center"">Total</td></tr><tr>'+
            '<td class="text-center">'+arregloprec[i]+
            '$</td><td class="text-center">'+Ffee+
            '$</td><td class="text-center">'+Suma[i]+
            '$</td><td class="text-center">'+arreglocanPer[i]+
            '</td><td class="text-center">'+Total_str[i]+
            '$</td></tr><tr>'+
            '<td bgcolor="#C6E0B4" class="text-center">Condiciones</td>'+
            '<td class="text-center" colspan="4">'+arreglocond[i]+
            '</td></tr><tr></tbody>'    
        }
        else{
        var NuevaTabla = document.getElementById("Ntablas"+i);
        NuevaTabla.innerHTML='<tbody><tr><td bgcolor="#F5760A" colspan="2">Ruta Round-Trip</td>'+
        '<td class="text-center" colspan="2">'+arregloLugarori[i]+'-'+arregloLugarDes[i]+'-'+arregloLugarori[i]+'</td></tr>'+
        '<tr><td bgcolor="#C6E0B4" colspan="2">Aerolinea'+
        '</td><td class="text-center" colspan="2">'+arregloAerolinea[i]+
        '</td></tr>'+
        '<tr><td bgcolor="#C6E0B4" class="text-center">Fecha</td><td bgcolor="#C6E0B4" class="text-center">Ruta</td><td bgcolor="#C6E0B4" class="text-center">Salida</td><td bgcolor="#C6E0B4" class="text-center">LLegada</td></tr><tr>'+
        '<td class="text-center">'+arreglofechasI[i]+
        '</td><td class="text-center">'+arregloLugarori[i]+'-'+arregloLugarDes[i]+
        '</td><td class="text-center">'+arreglohoraIS[i]+
        '</td><td class="text-center">'+arreglohoraIL[i]+
        '</td></tr><tr>'+
        '<td class="text-center">'+arreglofechasR[i]+
        '</td><td class="text-center">'+arregloLugarDes[i]+'-'+arregloLugarori[i]+
        '</td><td class="text-center">'+arreglohoraRS[i]+
        '</td><td class="text-center">'+arreglohoraRL[i]+
        '</td></tr><tr></tbody>'
        var NuevaTabla2 = document.getElementById("Ntablas"+i+"r");
        NuevaTabla2.innerHTML='<tbody><tr><td bgcolor="#C6E0B4" colspan="2">Tipo de equipaje</td>'+
        '<td class="text-center" colspan="3">'+arregloEquipa[i]+'</td></tr>'+
        '<tr><td bgcolor="#C6E0B4" class="text-center">Tarifa neta</td><td bgcolor="#C6E0B4" class="text-center">Fee de emision</td><td bgcolor="#C6E0B4" class="text-center">Precio por persona</td><td bgcolor="#C6E0B4" class="text-center">Cantidad</td><td bgcolor="#C6E0B4" class="text-center"">Total</td></tr><tr>'+
        '<td class="text-center">'+arregloprec[i]+
        '$</td><td class="text-center">'+Ffee+
        '$</td><td class="text-center">'+Suma[i]+
        '$</td><td class="text-center">'+arreglocanPer[i]+
        '</td><td class="text-center">'+Total_str[i]+
        '$</td></tr><tr>'+
        '<td bgcolor="#C6E0B4" class="text-center">Condiciones</td>'+
        '<td class="text-center" colspan="4">'+arreglocond[i]+
        '</td></tr><tr></tbody>'
    }
    }


    /*
for (var i = 0; i < arregloAerolinea.length; i++) {

    var fecha =document.getElementById("fecha"+[i]);
    fecha.innerHTML=arregloAerolinea[i];

    var hora =document.getElementById("hora"+[i]);
    hora.innerHTML=arregloprec[i];

    var Nombre = document.getElementById("Nombre"+[i]);
    Nombre.innerHTML=arreglocanPer[i];

    var DNI =document.getElementById("DNI"+[i]);
    DNI.innerHTML=arregloEquipa[i];

    var Lugarori =document.getElementById("Lugarori"+[i]);
    Lugarori.innerHTML=arregloLugarori[i];

    var LugarDes =document.getElementById("LugarDes"+[i]);
    LugarDes.innerHTML=arregloLugarDes[i];

    var persAsiento =document.getElementById("Asiento"+[i]);
    persAsiento.innerHTML=arreglohoraIS[i];

    var aerolinea =document.getElementById("Aerolinea"+[i]);
    aerolinea.innerHTML=arreglocond[i];

    var persKid =document.getElementById("Precio"+[i]);
    persKid.innerHTML=arreglofechasI[i];

    Suma[i] =parseInt(arreglofechasI[i]);
}
    var Cantotal =[];
    var total=0;
    for (var i = 0; i < arregloAerolinea.length; i++) {
        Cantotal.push((parseInt(arreglofechasI[i])+ parseInt(Ffee)).toString());
        total=parseInt(total)+parseInt(Cantotal[i]);
        console.log(total);
    }

    for (var i = 0; i < arregloAerolinea.length; i++) {
        var Cantotal1 = document.getElementById("str_total"+i);
        Cantotal1.innerHTML=Cantotal[i];
    }  
*/
    var total1 = document.getElementById("str_total");
    total1.innerHTML=Total_int;
    






    function downloadPDF() {
    const $elementoParaConvertir = document.querySelector('div[id="contenedortod"]'); // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
        .set({
            margin: 0.2,
            filename: prof1+'.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 4, // A mayor escala, mejores gráficos, pero más peso
                letterRendering: true,
            },
            jsPDF: {
                unit: "in",
                format: "A4",
                orientation: 'portrait' // landscape o portrait
            }
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err));
    }