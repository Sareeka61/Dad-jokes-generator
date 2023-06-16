const dadJokes = [
    "My wife said I should do lunges to stay in shape. That would be a big step forward.",
    `Why do fathers take an extra pair of socks when they go golfing? "In case they get a hole in one!"`,
    "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "What do you call someone with no body and no nose? Nobody knows.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "What do you call fake spaghetti? An impasta!"
];

const jokesButton = document.getElementById("joke-generator");
const jokesPlaceholder = document.getElementById("jokes-display-placeholder");
const anotherJokeButton = document.getElementById("another-joke");


function getRandomJokes() {
    const randomjokeIndex = Math.floor(Math.random() * dadJokes.length);
    return dadJokes[randomjokeIndex];
}

jokesButton.addEventListener("click", function() {
    jokesButton.style.display = "none";
    const randomJokes = getRandomJokes();
    jokesPlaceholder.textContent = randomJokes;
    jokesPlaceholder.style.display = "block";
    anotherJokeButton.style.display = "block";
});

anotherJokeButton.addEventListener("click", function() {
    const randomJoke = getRandomJokes();
    jokesPlaceholder.textContent = randomJoke;
});
