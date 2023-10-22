// Save the current state of the progress tracker when the page is refreshed
window.addEventListener('beforeunload', () => {
    // Get all the goal sections
    let goalSections = document.querySelectorAll('.goal-section');

    // Create an array to hold the state of each goal
    let goalsState = [];

    // Loop through each goal section and save its state
    goalSections.forEach((goalSection) => {
        let goalTitle = goalSection.querySelector('h3').textContent;
        let taskItems = goalSection.querySelectorAll('.task-item');
        let completedTasks = [];

        taskItems.forEach((taskItem) => {
            let checkbox = taskItem.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                completedTasks.push(checkbox.nextElementSibling.textContent);
            }
        });

        goalsState.push({
            title: goalTitle,
            completedTasks: completedTasks,
        });
    });

    // Save the state to local storage
    localStorage.setItem('goalsState', JSON.stringify(goalsState));
});

function resetPage() {
    // Clear all goals and tasks
    let goalsSection = document.getElementById('goals-section');
    goalsSection.innerHTML = '';

    // Reset new goal input
    let newGoalInput = document.getElementById('new-goal');
    newGoalInput.value = '';
}

function loadData() {
    // Get input
    let goalText = document.getElementById('new-goal').value.trim();

    if (goalText) {
        // Create goal section
        let goalSection = document.createElement('div');
        goalSection.className = 'goal-section';

        // Add goal title
        let goalTitle = document.createElement('h3');
        goalTitle.textContent = goalText;
        goalSection.appendChild(goalTitle);

        // Input for new task
        let taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.className = 'form-control task-input';
        taskInput.placeholder = 'Enter a new task';
        goalSection.appendChild(taskInput);

        // Add task button
        let addTaskBtn = document.createElement('button');
        addTaskBtn.textContent = 'Add Task';
        addTaskBtn.className = 'btn btn-success mt-2 add-task-button';
        goalSection.appendChild(addTaskBtn);

        // Task container
        let tasksContainer = document.createElement('div');
        tasksContainer.className = 'tasks-container';
        goalSection.appendChild(tasksContainer);

        let progressBarContainer = document.createElement('div');
        progressBarContainer.id = 'id_' + goalText;
        progressBarContainer.className = 'progress-bar-container';

        let progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.width = '0'; // Start with 0 progress
        progressBar.textContent = '0';

        progressBarContainer.appendChild(progressBar);
        goalSection.appendChild(progressBarContainer);

        // Append to the main container
        document.getElementById('goals-section').appendChild(goalSection);

        // Clear the input field
        document.getElementById('new-goal').value = '';

        // Listener for adding tasks
        addTaskBtn.addEventListener('click', () => {
            addTask(taskInput, tasksContainer, goalSection, goalText, progressBar);
        });
    }
}

function addTask(taskInput, tasksContainer, goalSection, goalText, progressBar) {
    let taskText = taskInput.value.trim();

    if (taskText) {
        // Create task item
        let taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        // // Task title
        // let taskTitle = document.createElement('div');
        // taskTitle.textContent = taskText;
        // taskItem.appendChild(taskTitle);
        let checkboxDiv = document.createElement('div');
        checkboxDiv.innerHTML = `
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          ${taskText}
        </label>
        </div>`;

        taskItem.appendChild(checkboxDiv);

        // Add listener for when task item is checked
        let checkbox = taskItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            updateProgressBar(goalSection, goalText);
        });

        // Append to tasks container
        tasksContainer.appendChild(taskItem);

        // Clear the task input
        taskInput.value = '';

        // Here, you'd implement the functionality to drag and adjust the progress bar
        // This might involve additional scripts or libraries for drag-and-drop features

        updateProgressBar(goalSection, goalText);
    }
}

function updateProgressBar(goalSection, goalText) {
    let taskCount = 0;
    let checkboxes = goalSection.querySelectorAll('.task-item input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            taskCount++;
        }
    });
    let percentage = (taskCount / checkboxes.length) * 100;
    percentage = percentage.toFixed(1); // round to 1 decimal place
    console.log(`Percentage of completed tasks in this goal: ${percentage}%`);

    // Update progress bar
    let progressBar = goalSection.querySelector(`#id_${goalText} .progress-bar`);
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    resetPage();
    document.getElementById('add-goal').addEventListener('click', () => {
        loadData();
    });

    // Load the saved state of the progress tracker, if it exists
    let goalsState = localStorage.getItem('goalsState');
    if (goalsState) {
        goalsState = JSON.parse(goalsState);
        goalsState.forEach((goalState) => {
            let goalText = goalState.title;
            let completedTasks = goalState.completedTasks;

            // Create goal section
            let goalSection = document.createElement('div');
            goalSection.className = 'goal-section';

            // Add goal title
            let goalTitle = document.createElement('h3');
            goalTitle.textContent = goalText;
            goalSection.appendChild(goalTitle);

            // Input for new task
            let taskInput = document.createElement('input');
            taskInput.type = 'text';
            taskInput.className = 'form-control task-input';
            taskInput.placeholder = 'Enter a new task';
            goalSection.appendChild(taskInput);

            // Add task button
            let addTaskBtn = document.createElement('button');
            addTaskBtn.textContent = 'Add Task';
            addTaskBtn.className = 'btn btn-success mt-2 add-task-button';
            goalSection.appendChild(addTaskBtn);

            // Task container
            let tasksContainer = document.createElement('div');
            tasksContainer.className = 'tasks-container';
            goalSection.appendChild(tasksContainer);

            let progressBarContainer = document.createElement('div');
            progressBarContainer.id = 'id_' + goalText;
            progressBarContainer.className = 'progress-bar-container';

            let progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.style.width = '0'; // Start with 0 progress
            progressBar.textContent = '0';

            progressBarContainer.appendChild(progressBar);
            goalSection.appendChild(progressBarContainer);

            // Append to the main container
            document.getElementById('goals-section').appendChild(goalSection);

            // Clear the input field
            document.getElementById('new-goal').value = '';

            // Listener for adding tasks
            addTaskBtn.addEventListener('click', () => {
                addTask(taskInput, tasksContainer, goalSection, goalText, progressBar);
            });

            // Add the completed tasks to the goal section
            completedTasks.forEach((completedTask) => {
                let taskItem = document.createElement('div');
                taskItem.className = 'task-item';

                let checkboxDiv = document.createElement('div');
                checkboxDiv.innerHTML = `
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                <label class="form-check-label" for="flexCheckDefault">
                  ${completedTask}
                </label>
                </div>`;

                taskItem.appendChild(checkboxDiv);

                // Add listener for when task item is checked
                let checkbox = taskItem.querySelector('input[type="checkbox"]');
                checkbox.addEventListener('change', () => {
                    updateProgressBar(goalSection, goalText);
                });

                // Append to tasks container
                tasksContainer.appendChild(taskItem);

                updateProgressBar(goalSection, goalText);
            });
        });
    }
});
localStorage.clear();
