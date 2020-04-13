function display(){
    Dispwin=window.open("",'newwin','toolbar=no,status=no,width=600,height=400');
    
    var form = document.getElementById("contact");
    var inputtxtnome = form.elements["txtnome"];
    var inputtxtemail = form.elements["txtemail"];
    var inputtelefone = form.elements["telefone"];
    var inputprioridade = form.elements["prioridade"];
    var inputmsgm = form.elements["msgm"];

    message = "<ul><li><b>Nome:</b></li>" + inputtxtnome.value;
    message += "<li><b>E-mail:</b></li>" + inputtxtemail.value;
    message += "<li><b>Telefone</b></li>" + inputtelefone.value;
    message += "<li><b>Prioridade</b></li>" + inputprioridade.value;
    message += "<li><b>Mensagem</b></li>" + inputmsgm.value + "</ul>";

    Dispwin.document.write(message);
}
