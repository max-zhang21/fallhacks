document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-intention').addEventListener('click', function() {
        var intention = document.getElementById('intention-select').value;

        // Check if an intention was selected
        if (intention !== 'Choose your focus for today...') {
            // Display the intention
            var displayDiv = document.getElementById('intention-display');
            displayDiv.innerHTML = '<p><strong>Today\'s Intention:</strong> ' + intention + '</p>';

            // Reset the dropdown to the placeholder value
            document.getElementById('intention-select').selectedIndex = 0;

            // Change the theme based on the intention
            var body = document.body;
            body.className = ''; // Reset any existing theme classes

            // Apply the new theme class based on the selected intention
            switch (intention) {
                case '🚀 Grindset':
                    body.classList.add('body-grindset-theme');
                    break;
                case '🌱 Just want to get the bare minimum done':
                    body.classList.add('body-minimum-theme');
                    break;
                case '😌 Self-care day':
                    body.classList.add('body-selfcare-theme');
                    break;
                // You can add more cases here for additional intentions
            }
        } else {
            // If no intention was selected, prompt the user to choose one
            alert('Please select your intention for the day.');
        }
    });
});
