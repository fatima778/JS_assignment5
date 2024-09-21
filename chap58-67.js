var maincontent=document.getElementById("main-content");

for (var i=0; i < maincontent.childNodes.length; i++){
    document.write(maincontent.childNodes[i].innerHTML+ "<br>");
}

var render = document.getElementsByClassName("render");

for (var i = 0; i < render.length; i++) {
    document.write(render[i].innerHTML + "<br>");
}

document.getElementById('first-name').value = 'Alex';        
document.getElementById('last-name').value = 'Bank';         
document.getElementById('email').value = "alexbank@example.com"; 

document.write('Node type of element with id "form-content":'+ document.getElementById("form-content").nodeType);
document.write('<br>Node type of element with id “lastName”:'+ document.getElementById("lastName").nodeType);
document.write('<br>Node type of element with id “lastName”:'+ document.getElementById("lastName").firstChild.nodeType);
var lastNameElement= document.getElementById("lastName");
lastNameElement.firstChild.nodeValue = 'Last Name: Smith';
document.write('<br>First child of id "main-content":'+ document.getElementById("main-content").firstChild);
document.write('<br>First child of id "main-content":'+ document.getElementById("main-content").lastChild);
document.write('<br>Next sibling of id "lastName":', lastNameElement.nextSibling);
document.write('<br>Previous sibling of id "lastName":', lastNameElement.previousSibling);
document.write('<br>Parent node of element with id "email":'+ document.getElementById("email").parentNode);
document.write('<br>Node Type of Parent node element with id "email":'+ document.getElementById("email").parentNode.nodeType);



