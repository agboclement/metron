$(document).on('click', 'nav .navbar-nav li', function(){
    $(this).addClass('active').siblings().addRemove('active')
});


// SHOW RETURN

function show_return() {
    var select_box = $('#inputState').val();
    if(select_box == 'return')
    {
        $('#form2').show();
        $('#form1').hide();
    }
    else
    {
        $('#form2').hide();
        $('#form1').show();
    }

    return false
}


// DATEPICKER

$( function() {
    $( "#datepicker" ).datepicker();
  } );

  function newFunction() {
    $(function () {
        $("#datepicker").datepicker();
    });
}



var adult = 0;
function decreaseAdult() {

    document.getElementById('count-adult').value =--adult;
    
}


function increaseAdult() {
    document.getElementById('count-adult').value =++adult;
}

var child = 0;
function decreaseChildren() {
    document.getElementById('count-child').value =--child;
}


function increaseChildren() {
    document.getElementById('count-child').value =++child;
}



document.querySelector("#adult-dec").addEventListener('click',incDec);

document.querySelector("#adult-inc").addEventListener('click',incDec);

document.querySelector("#child-dec").addEventListener('click',incDec);

document.querySelector("#child-inc").addEventListener('click',incDec);

function incDec(){
    var total= adult+child;
    document.querySelector("#total").textContent=total;
    
}

$('.dropdown-menu').click(function(e) {
    if (e.target.nodeName !== 'BUTTON') e.stopPropagation();
});