fetch("data.json")
.then(response => response.json())
.then(data => loadCards(data));

  function loadCards(cards){
    const container = document.getElementById("cardsContainer");

     cards.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <button onclick="alert('You clicked on ${item.title}')">Click</button>
    `;

    container.appendChild(div);
     });
  }