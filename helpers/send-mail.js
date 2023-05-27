
function sendMail () {

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_gpxndfp"
    const templateID = "template_gx3kvtf"
    
    emialjs.send(serviceID, templateID, params).then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res)
            alert("Tu mensaje se mandó correctamente")
        }
    ).catch((err) => console.log(err))
}

