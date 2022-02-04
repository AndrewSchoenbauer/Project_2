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

document
    .querySelector('.add-review')
    .addEventListener('submit', subRevFormHandler);
