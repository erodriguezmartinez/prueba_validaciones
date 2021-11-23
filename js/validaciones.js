/**
 *    validaciones.js
 *    EXAMEN DE VALIDACIONES
 *   @author Esperanza Rogríguez Martínez <erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 *
 *   Ref JSDoc: https://jsdoc.app/
 */
 'use strict'
 
 //console.log('Cargado JS')
 
 window.onload=iniciar;
 
 function iniciar(){
     //Obtenemos todos los elemento del formulario
    document.getElementById('btnCero').addEventListener("click", cero )
    document.getElementById('enviar').addEventListener("click", enviar )    
    document.getElementById('iCalculo1').onchange =media;
    document.getElementById('iCalculo2').onchange =media;
    document.getElementById('iCalculo3').onchange =media;
    document.getElementById('sCurso').onchange = curso;

 }
 //Validamos curso seleccionado por el usuario
 function curso(){
     console.log("Comprobar...");

    //Comprobamos la selección de 1DAW, si selecciona 1DAW, ha seleccionado 2DAW
    if(document.getElementById('sCurso').value=="1DAW"){

        let select = document.createElement('select'); 
        select.setAttribute('id','select');  
        document.getElementById('curso').appendChild(select); 


        let option1 = document.createElement('option');  
        select.appendChild(option1);
        option1.appendChild(document.createTextNode('Base de datos'));
        
        let option2 = document.createElement('option');  
        select.appendChild(option2);
        option2.appendChild(document.createTextNode('Programación'));

        let option3 = document.createElement('option');  
        select.appendChild(option3);
        option3.appendChild(document.createTextNode('Sistemas Informáticos'));

        let option4 = document.createElement('option');  
        select.appendChild(option4);
        option4.appendChild(document.createTextNode('Formación y Orientación Laboral'));

        let option5 = document.createElement('option');  
        select.appendChild(option5);
        option5.appendChild(document.createTextNode('aaaaaa'));

    }else{
        let select = document.createElement('select');
        select.setAttribute('id','select');  
        document.getElementById('curso').appendChild(select); 


        let option1 = document.createElement('option');  
        select.appendChild(option1);
        option1.appendChild(document.createTextNode('Despliegue de Aplicaciones'));
        
        let option2 = document.createElement('option');  
        select.appendChild(option2);
        option2.appendChild(document.createTextNode('Inciativa Emprendedora'));

        let option3 = document.createElement('option');  
        select.appendChild(option3);
        option3.appendChild(document.createTextNode('Desarrollo Web Entorno Cliente'));

        let option4 = document.createElement('option');  
        select.appendChild(option4);
        option4.appendChild(document.createTextNode('Desarrollo Web Entorno Servidor'));

        let option5 = document.createElement('option');  
        select.appendChild(option5);
        option5.appendChild(document.createTextNode('Diseño de Aplicaciones Web'));
    }    

    /*
    let selectCreado = document.getElementById("select");  
    selectCreado.remove();*/


 }
 //Calculamos media de campos numéricos
 function media(){

    let numero1=parseFloat(document.getElementById('iCalculo1').value);
    let numero2=parseFloat(document.getElementById('iCalculo2').value);
    let numero3=parseFloat(document.getElementById('iCalculo3').value);
    if(!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)){
        let media=(numero1+numero2+numero3)/3;
        //Colocamos la media calculad en el spanMedia
        let spanMedia=document.getElementById('spanMedia');
        spanMedia.appendChild(document.createTextNode(media));
    }
    
 }
//Ponemos todos lo campos numéricos a 0 con el botón
 function cero(){

    let calculo1 = document.getElementById('iCalculo1');
    calculo1.setAttribute('value','0');
    let calculo2 = document.getElementById('iCalculo2');
    calculo2.setAttribute('value','0');  
    let calculo3 = document.getElementById('iCalculo3');
    calculo3.setAttribute('value','0');  

    
 }
 //Al enviar el formulario, comprobar que la suma de los campos numéricos está entre 10 y 20,
 // ambos valores incluidos. Si no fuera así, se mostrará el error al usuario en el div “divError”
 function enviar(){
    console.log("aaa")
    let numero1=parseFloat(document.getElementById('iCalculo1').value);
    let numero2=parseFloat(document.getElementById('iCalculo2').value);
    let numero3=parseFloat(document.getElementById('iCalculo3').value);
    console.log(numero1)
    console.log(numero2)
    console.log(numero3)
    let suma=numero1+numero2+numero3;
    console.log(suma)
    if(suma<10 || suma>20){
        let div = document.getElementById('divError');
        div.style.removeProperty("display");//
        let h1 = document.createElement('h1');  
        div.appendChild(h1);
        h1.appendChild(document.createTextNode('ERROR'));
    }

    
 }
 
   //https://regex101.com/
