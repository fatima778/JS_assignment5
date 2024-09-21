function hideRow(rowClass) {
    var rows = document.getElementsByClassName(rowClass);
    for (var i = 0; i < rows.length; i++) {
        rows[i].classList.add('hidden');
    }
}

function swapImage(events, type) {
    if (type === 'over') {
        events.target.src = "assests/door_open_800_wht.jpg";
    }
    else {
        events.target.src = "assests/images.jpg";
    }
}

var counter = 0;
function changeCounter(value) {
    counter += value;
    document.getElementById('counter').textContent = counter;
}