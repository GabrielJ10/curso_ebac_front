
$(document).ready(function () {
    function addTarefa(nomeTarefa) {
    const li = $('<li>').text(nomeTarefa);
    $('#listaTarefa').append(li);
    }

 
    $('#formTarefa').submit(function (event) {
    event.preventDefault();
    const nomeTarefa = $('#tarefa').val().trim();
    if (nomeTarefa !== '') {
        addTarefa(nomeTarefa);
        $('#tarefa').val('');
    }
    });

    $('#listaTarefa').on('click', 'li', function () {
    $(this).toggleClass('completed');
    });
});