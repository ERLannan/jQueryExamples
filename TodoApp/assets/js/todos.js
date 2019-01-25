//check off todos
$('ul').on('click', 'li', function () {
    $(this).toggleClass('li-done', function () {
        //do something
    });
})

//delete a todo
$('ul').on('click','.deleteButton', function (e) {
    e.stopPropagation();
    $(this).parent().fadeOut(400, function () {
        console.log('faded out');
        $(this).remove();
    });
})

//add a new todo when someone presses enter
$('#todoInput').on('keypress', function (e) {
    //if the keypress is enter
    if(e.which === 13) {
        console.log('pressed enter');
        $('#todoList').append(
            $('<li>').append(
                $('<span>').attr('class','deleteButton').html(
                    $('<i>').attr('class', 'far fa-trash-alt')
                    )
                ).append(
                    " " + $(this).val()
                    )
           ); 
        $(this).val("");
        $(this).attr("placeholder", "Add a To-Do");
    }
})

$('#plusButton').on('click', function () {
    $('#todoInput').fadeToggle();
})