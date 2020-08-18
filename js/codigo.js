/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(windows, document, JSON){
    'use strict';
    //url, de donde se va a conectar el websocket, 
    //se usa el protocolo ws, de websockt - y no http
    var url = 'ws://'+window.location.host+'/WebsocketChat/chat',
            ws=new WebSocket(url),
            mensajes=document.getElementById('conversacion'),
            boton=documento.getElementById('btnEnviar'),
            nombre=documento.getElementById('usuario'),
            mensaje=document.getElementById('mensaje');
    //localhost:8080, esa seria la ubicación,  para ahorrar tiempo de usa la propiedad host del domnio de nuestro proyecto...!
    ws.onopen=onOpen;
    ws.onclose=onclose;
    we.onmessage=onMessage;
    boton.addEventListener('click', enviar);
    
    function onOpen(){
        console.log('Conectado...');
    }
    function onClose(){
        console.log('Desconectado');
    }
    function enviar(){
        var msg={
            nombre: nombre.value, mensaje: mensaje.value
        };
        we.send(JSON.stringify(msg));
    }
    function onMessage(evt){
        var obj=JSON.parse(evt.data), msg='Nombre: '+obj.nombre+' dice: '+obj.mensaje;
        mensajes.innerHTML+='<br/>'+msg;
    }
})(window, document,JSON);


