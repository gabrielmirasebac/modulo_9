$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const textoTarefa = $('#textoUsuario').val();
        const novoItem = $('<li></li>');

        if(textoUsuario.value=== ''){
            alert("A tarefa não pode estar em branco, tento novamente")
        }else{
        $(`<li>${textoTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('li').click(function(){
            $(this).addClass("riscado");
        });
        $('#textoUsuario').val('');
        }
    })
})
