$('form').submit(function(event){
    event.preventDefault();
    $.ajax({
        type:"POST",
        type:"php/mail.php",
        data:$(this).serialize()
    }).done(function(){
        $(this).find("input").val("");
        alert("Форма отправлена");
        $("form").trigger("reset");
    }):
    return false;
});