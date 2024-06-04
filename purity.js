// Create an array of verse objects
let verse = [
    { text: "Matthew 5:8 \nBlessed are the pure in heart, \nFor they shall see God.", reference: "Matthew 5:8" },
    { text: "1 Corinthians 6:18-20 \n18 Flee sexual immorality. \n\nEvery sin that a man does is outside the body, but he who commits sexual immorality sins against his own body. \n\n19 Or do you not know that your body is the temple of the Holy Spirit who is in you, whom you have from God, and you are not your own? \n\n20 For you were bought at a price; therefore glorify God in your body and in your spirit, which are God's.", reference: "1 Corinthians 6:18-20" },
    { text: "Hebrews 13:4 \nLet marriage be held in honor among all, and let the marriage bed be undefiled, \nfor God will judge the sexually immoral and adulterous.", reference: "Hebrews 13:4" },
    { text: "Proverbs 6:32 \nHe who commits adultery lacks sense; he who does it destroys himself.", reference: "Proverbs 6:32" },
    { text: "1 Thessalonians 4:3-5 \nFor this is the will of God, your sanctification: that you abstain from sexual immorality; \nthat each one of you know how to control his own body in holiness and honor, \nnot in the passion of lust like the Gentiles who do not know God;", reference: "1 Thessalonians 4:3-5" },
    { text: "Ephesians 5:3 \nBut sexual immorality and all impurity or covetousness must not even be named among you, as is proper among saints.", reference: "Ephesians 5:3" },
    { text: "Matthew 5:28 \nBut I say to you that everyone who looks at a woman with lustful intent has already committed adultery with her in his heart.", reference: "Matthew 5:28" }
];

// Function to get a random verse
function getRandomVerse() {
    let randomIndex = Math.floor(Math.random() * verse.length);
    return verse[randomIndex];
}

// Function to show the popup with a random verse
function showPopup() {
    let verseElement = document.createElement('div');
    let randomVerse = getRandomVerse();
    verseElement.textContent = randomVerse.text;
    verseElement.dataset.reference = randomVerse.reference;

    let popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.display = 'block';
    popup.style.backgroundColor = '#ffffff';
    popup.style.width = '420px';
    popup.style.padding = '30px 40px';
    popup.style.position = 'absolute';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.borderRadius = '8px';
    popup.style.fontFamily = 'Arial, Helvetica, sans-serif';
    popup.style.textAlign = 'center';
    popup.style.zIndex = '1000';

    let closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.display = 'block';
    closeButton.style.margin = '0 0 20px auto';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.fontSize = '30px';
    closeButton.style.color = '#ffffff';
    closeButton.style.background = '#03549a';
    closeButton.style.borderRadius = '100%';
    closeButton.style.width = '40px';
    closeButton.style.height = '40px';
    closeButton.style.border = 'none';
    closeButton.style.outline = 'none';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    popup.appendChild(closeButton);
    popup.appendChild(verseElement);
    document.body.appendChild(popup);
}

// Function to set a random interval between 10 and 20 minutes
function setRandomInterval() {
    let minTime = 10 * 60 * 1000; // 10 minutes in milliseconds
    let maxTime = 20 * 60 * 1000; // 20 minutes in milliseconds
    let randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;

    setTimeout(function () {
        showPopup();
        setRandomInterval(); // Schedule the next popup
    }, randomTime);
}

// Start the random interval when the window loads
window.addEventListener('load', function () {
    setRandomInterval();
});
