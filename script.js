fetch("models.json")
    .then(response => response.json())
    .then(models => {

        console.log(models);

    });