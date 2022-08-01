const cards = document.querySelector(".cards");

const animalsToAdopt = [
    {
        name: "Lucky",
        picture: "https://placekitten.com/200/287"
    },
    {
        name: "Symba",
        picture: "https://placekitten.com/200/139"
    },
    {
        name: "Léo",
        picture: "https://placekitten.com/200/90"
    },
    {
        name: "Milo",
        picture: "https://placekitten.com/200/194"
    },
    {
        name: "Charly",
        picture: "https://placekitten.com/200/179"
    }
];

function createCard(title, imageUrl) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    // Step1: Create the cardBody div, add the class card-body and add it to the card
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    // Step2: Create the cardTitle h2, add the class cardTitle,
    // set the text inside the tag to the "title" parameter of this function
    // and add it to the cardBody
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-body");
    card.appendChild(cardTitle);
    cardTitle.innerHTML = title;

    // Step3: Create the cardButton button, add the class card-button,
    // set the text inside the tag to be "Adopt Now"
    // and add it to the cardBody
    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    card.appendChild(cardButton);
    cardButton.innerHTML = "Adopt Now";
}

/* Step 4: Create a for loop, for each element of the array, 
 call the function createCard with the corresponding parameter */
for (var i = 0; i < animalsToAdopt.length; i++) {
    console.log(createCard(animalsToAdopt[i].name, animalsToAdopt[i].picture));
}