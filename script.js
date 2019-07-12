var i = 0;
function decreaseAdult() {
    document.getElementById('count-adult').value =--i;
}


var i = 0;
function increaseAdult() {
    document.getElementById('count-adult').value =++i;
}

var i = 0;
function decreaseChildren() {
    document.getElementById('count-child').value =--i;
}

var i = 0;
function increaseChildren() {
    document.getElementById('count-child').value =++i;
}

$('.dropdown-menu').click(function(e) {
    if (e.target.nodeName !== 'BUTTON') e.stopPropagation();
});