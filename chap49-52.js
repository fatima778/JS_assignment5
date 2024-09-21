function displayData(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    document.getElementById('result').innerHTML = `<strong>Name:</strong> ${name}, <strong>Email:</strong> ${email}, <strong>Password:</strong> ${password}`;
}

function expand() {
    var para = "The House was originally constructed in the 1930s under an almond tree with hand-crafted tiles.[2] It belonged to a Hindu woman, Haribai Motiram, who later sold it to the Dawood family’s ancestors.[3][4] <br>The house is situated in the East-Karachi neighborhood Jamshed Quarters and is accessible through Muhammad Ali Jinnah Road. Jamshed Quarters was envisioned by then-Mayor and philanthropist Jamshed Nusserwanjee Mehta as a home for the growing middle class of Karachi. It was home to multiple ethnicities and people of different faith, like Muslims, Hindus, Christians, Parsis, and Jews.[5]The Dawood Foundation restored the building from 2016 onwards and TDF Ghar was open to public as of August 2017.<br> <strong>Features</strong> TDF Ghar is an informal learning space for the citizens of Karachi to gather and exchange. The house retains its heritage features but has been transformed into a public space. With its unique mix of a museum and cultural programme, it also attracts tourists.[6] It reflects upon Karachi's  past, the mix of cultures that it presented, and the kinds of lives that people lived during pre-independence time. The three Numaish Halls and a training room in the building’s first floor can be utilised for organising workshops, training, seminars, exhibitions, and other activities."
    document.getElementById("para").innerHTML = para;
}

var index = 1;
function showForm() {
    document.getElementById('studentForm').classList.remove('hidden');
}

function submitForm() {
    var name = document.getElementById('name').value;
    var studentClass = document.getElementById('class').value;

    if (name && studentClass) {
        var table = document.getElementById('studentTable');
        var row = table.insertRow(-1);  
        row.className = 'row' + index;  
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = index;
        cell2.innerHTML = name;
        cell3.innerHTML = studentClass;
        cell4.innerHTML = `<button onclick="deleteRow('row${index}')">Delete</button>
                               <button onclick="editRow(${index}, '${name}', '${studentClass}')">Edit</button>`;

        index++;  
        clearForm();  
    }
}

function deleteRow(rowClass) {
    var row = document.getElementsByClassName(rowClass);
    for (var i = 0; i < row.length; i++) {
        row[i].classList.add('hidden');
    }
}

function editRow(rowIndex, name, studentClass) {
    document.getElementById('name').value = name;
    document.getElementById('class').value = studentClass;
    deleteRow('row' + rowIndex);  
    document.getElementById('studentForm').classList.remove('hidden');  
}
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('class').value = '';
    document.getElementById('studentForm').classList.add('hidden');  
}
