fetch("models.json")
    .then(response => response.json())
    .then(models => {

        const grid = document.querySelector(".model-grid");

        models.forEach(model => {

            const card = document.createElement("a");

            card.className = "model-card";

            card.href = "viewer.html?model=" + model.file;

            card.innerHTML = `
                <img src="${model.thumbnail}" alt="${model.name}">
                <h2>${model.name}</h2>
            `;

            grid.appendChild(card);

        });

    });

