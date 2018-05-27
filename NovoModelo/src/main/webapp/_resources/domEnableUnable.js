function main() {
    document.querySelector(".active-inactive").addEventListener("submit", ativarDesativar);
}

function ativarDesativar() {
    var xhr = new XMLHttpRequest();

    /*xhr.open('POST', 'AtivarDesativar');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if (xhr.status === 200 && xhr.responseText !== newName) {
            alert('Something went wrong.  Name is now ' + xhr.responseText);
        } else if (xhr.status !== 200) {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send(encodeURI('name=' + newName));*/
    console.log("sucesso!");
}

window.addEventListener("load", main);
