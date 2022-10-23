let send = document.getElementById('send').onclick = function (name, phone_number, message) {
    const xmlhttp = new XMLHttpRequest(); // new HttpRequest instance 
    const theUrl = "https://farrukh-contact.herokuapp.com/api/v1/send";

    name = document.getElementById('name').value;
    phone_number = document.getElementById('phone_number').value;
    countryCode = document.querySelector('.iti__selected-dial-code').innerHTML;
    message = document.getElementById('message').value;

    if (phone_number == '') {
        document.getElementById('send').classList.add('errorForm');
        setTimeout(() => {
            document.getElementById('send').classList.remove('errorForm');
        }, 2000);

    } else {
        let myJson = JSON.stringify({
            "name": name,
            "phone_number": countryCode + ' ' + phone_number,
            "message": message
        })

        xmlhttp.open("POST", theUrl);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xmlhttp.send(myJson);

        setTimeout(() => {
            modalSuccess();
            sendSuccess.onclick = exitModalSuccess;
            document.getElementById('name').value = '';
            document.getElementById('phone_number').value = '';
            document.getElementById('message').value = '';
        }, 300);
    }
};

let sendSuccess = document.querySelector('.sendSuccess');

function modalSuccess() {
    sendSuccess.classList.add('sendSuccess-enable');
}

function exitModalSuccess() {
    sendSuccess.onclick = sendSuccess.classList.remove("sendSuccess-enable");
}