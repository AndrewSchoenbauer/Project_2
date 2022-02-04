const subRevFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#review-title').value.trim();
    const review = document.querySelector('#review-text').value.trim();

    if (title && review) {
        const response = await fetch('/api/game/', {
            method: 'POST',
            body: JSON.stringify({ title, review }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to post review.');
        }
    }
};

const remove = function () {
    const cardEl = document.getElementById('review-card');
    cardEl.classList.remove('hide');
}

document.getElementById("main-btn").addEventListener('click', remove);

document
    .querySelector('.add-review-btn')
    .addEventListener('submit', subRevFormHandler)
    .classList.add('hide')

console.log("hello");
