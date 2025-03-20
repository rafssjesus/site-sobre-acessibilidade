const linhaDoTempo = document.getElementById("linha-do-tempo");

const itens = [
    { ano: 2020, descricao: "Item 1" },
    { ano: 2021, descricao: "Item 2" },
    { ano: 2022, descricao: "Item 3" },
];

itens.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h2>${item.ano}</h2>
        <p>${item.descricao}</p>
    `;
    linhaDoTempo.appendChild(li);
});