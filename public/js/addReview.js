const cardEl = document.getElementById('review-card');

const subRevFormHandler = async (event) => {
    event.preventDefault();

    const Title = document.querySelector('#review-title').value.trim();
    const description = document.querySelector('#review-text').value.trim();
    console.log(rating);

    const gameId = event.target.dataset.gameid;

    if (Title && description && rating) {
        const response = await fetch('/api/game/' + gameId, {
            method: 'POST',
            body: JSON.stringify({ Title, description, rating }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/game/' + gameId);
            cardEl.classList.add('hide')
        } else {
            alert('Failed to post review.');
        }
    }
};

const remove = function () {
    cardEl.classList.remove('hide');
}

document.getElementById("main-btn").addEventListener('click', remove);

document
    .querySelector('#add-review-btn')
    .addEventListener('click', subRevFormHandler)
