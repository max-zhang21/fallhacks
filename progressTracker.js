document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-goal').addEventListener('click', function() {
        var goalText = document.getElementById('new-goal').value.trim();

        if (goalText) {
            // Create goal section
            var goalSection = document.createElement('div');
            goalSection.className = 'goal-section';

            // Add goal title
            var goalTitle = document.createElement('h3');
            goalTitle.textContent = goalText;
            goalSection.appendChild(goalTitle);

            // Input for new task
            var taskInput = document.createElement('input');
            taskInput.type = 'text';
            taskInput.className = 'form-control task-input';
            taskInput.placeholder = 'Enter a new task';
            goalSection.appendChild(taskInput);

            // Add task button
            var addTaskBtn = document.createElement('button');
            addTaskBtn.textContent = 'Add Task';
            addTaskBtn.className = 'btn btn-success mt-2 add-task-button';
            goalSection.appendChild(addTaskBtn);

            // Task container
            var tasksContainer = document.createElement('div');
            tasksContainer.className = 'tasks-container';
            goalSection.appendChild(tasksContainer);

            // Append to the main container
            document.getElementById('goals-section').appendChild(goalSection);

            // Clear the input field
            document.getElementById('new-goal').value = '';

            // Listener for adding tasks
            addTaskBtn.addEventListener('click', function() {
                var taskText = taskInput.value.trim();

                if (taskText) {
                    // Create task item
                    var taskItem = document.createElement('div');
                    taskItem.className = 'task-item';

                    // Task title
                    var taskTitle = document.createElement('div');
                    taskTitle.textContent = taskText;
                    taskItem.appendChild(taskTitle);

                    // Progress bar
                    var progressBarContainer = document.createElement('div');
                    progressBarContainer.className = 'progress-bar-container';

                    var progressBar = document.createElement('div');
                    progressBar.className = 'progress-bar';
                    progressBar.style.width = '0%';  // Start with 0 progress
                    progressBar.textContent = '0%';  // Text indication of progress

                    progressBarContainer.appendChild(progressBar);
                    taskItem.appendChild(progressBarContainer);

                    // Append to tasks container
                    tasksContainer.appendChild(taskItem);

                    // Clear the task input
                    taskInput.value = '';

                    // Here, you'd implement the functionality to drag and adjust the progress bar
                    // This might involve additional scripts or libraries for drag-and-drop features
                }
            });
        }
    });
});
