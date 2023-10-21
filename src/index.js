const modal = document.getElementById('staticBackdrop');
const input = modal.querySelector('input');
const cancelButton = modal.querySelector('.btn-secondary');
const createButton = modal.querySelector('.btn-primary');

// Clear input box after closing modal
modal.addEventListener('hidden.bs.modal', () => {
    input.value = '';
});

// Send input text to dashboard.html and set it as the title of the page
createButton.addEventListener('click', () => {
    let inputValue = input.value.trim();
    const url = new URL('dashboard.html', window.location.href);
    if (inputValue) {
        url.searchParams.set('title', inputValue);
    }
    window.location.href = url.href;
});

// Clear input box when cancel button is clicked
cancelButton.addEventListener('click', () => {
    input.value = '';
});
