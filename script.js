document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#play').addEventListener('click', function () {
        var value = document.querySelector('#time').value
        if (value != null && value != '') {
            setTimeout(() => {
                alert("test")
            }, value * 1000);
        }
        else
        alert("informe um tempo para o alerta")
    });

});