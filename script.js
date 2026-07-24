const params = new URLSearchParams(window.location.search);

const model = params.get("model");

document.getElementById("viewer").src =
    "models/" + model;