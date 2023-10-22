window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    if (title) {
        document.title = title;
        document.getElementById('dashboard-heading').textContent = title;
    }
};
