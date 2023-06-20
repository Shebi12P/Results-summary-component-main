const getScores = async () => {
    const response = await fetch("../data.json");
    const scores = await response.json();

    return scores;
}

const fetchedScores = await getScores();

fetchedScores.forEach((fetchedScore) => {
    const { category, score, icon } = fetchedScore;
    const categoryName = category.toLowerCase();
    const categoryElement = document.querySelector(`.${categoryName}-score > .category`);
    const scoreElement = document.querySelector(`.${categoryName}-score > .score`);
    const iconImgageElement = document.querySelector(`.${categoryName}-score > .icon > img`);

    categoryElement.textContent = category;
    scoreElement.textContent = score;
    iconImgageElement.src = icon;
});