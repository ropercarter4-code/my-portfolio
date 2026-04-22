const form = document.getElementById("opinionForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const concern = document.getElementById("concern").value;

    if (name === "" || concern === "") {
        message.textContent = "Please complete all fields.";
        message.style.color = "red";
    } else {
        message.textContent = 
            "Thank you " + name + "! You Selected: " + concern;
        message.style.color = "lightgreen";

    }
});