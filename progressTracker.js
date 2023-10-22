$(document).ready(function() {
    // Function to add a new goal
    $('#add-goal-button').click(function() {
        var goalText = $('#goal-input').val();
        if (goalText) {
            // Create a new section for the goal
            var goalSection = $('<div class="goal-section"></div>');
            var goalTitle = $('<h3></h3>').text(goalText);
            goalSection.append(goalTitle);
 
            // Add a task input and button
            var taskInput = $('<input type="text" class="task-input" placeholder="Enter a task">');
            var addTaskButton = $('<button class="add-task-button">Add Task</button>');
            goalSection.append(taskInput).append(addTaskButton);

            // Append to the main goals section
            $('#goals-section').append(goalSection);

            // Clear the input field
            $('#goal-input').val('');

            // Handle adding tasks
            addTaskButton.click(function() {
                var taskText = taskInput.val();
                if (taskText) {
                    // Create task item and progress bar
                    var taskItem = $('<div class="task-item"></div>').text(taskText);
                    var progressBarContainer = $('<div class="progress-bar-container"></div>');
                    var progressBar = $('<div class="progress-bar"></div>');
                    progressBarContainer.append(progressBar);
                    
                    // Append task and progress bar to the goal section
                    goalSection.append(taskItem).append(progressBarContainer);

                    // Make progress bar draggable and handle drag events
                    progressBar.draggable({
                        axis: "x",
                        containment: "parent",
                        drag: function(event, ui) {
                            // Calculate the new width based on the drag event
                            var maxWidth = progressBarContainer.width();
                            var newWidth = ui.position.left;

                            // Ensure the new width isn't out of bounds
                            if (newWidth < 0) {
                                newWidth = 0;
                            } else if (newWidth > maxWidth) {
                                newWidth = maxWidth;
                            }

                            // Apply the new width to the progress bar
                            progressBar.width(newWidth + "px");

                            // Optionally, calculate and display the percentage
                            var percentage = Math.floor((newWidth / maxWidth) * 100);
                            // You can display this percentage somewhere or use it in your logic
                        },
                        stop: function(event, ui) {
                            // Actions to perform once the dragging stops, like saving the state
                            var finalWidth = progressBar.width();
                            var percentage = Math.floor((finalWidth / progressBarContainer.width()) * 100);

                            // Log the final percentage
                            console.log("Final progress is " + percentage + "%");

                            // Simulating a server call to save the progress data
                            console.log("Saving data to server...");

                            // This is just a simulation. In a real application, you would make an AJAX request here.
                            // Mocking a server call with a delay
                            setTimeout(function() {
                                console.log("Data saved successfully on the server!");
                            }, 2000);  // 2 seconds delay to simulate server interaction
                        }
                    });

                    // Clear the task input
                    taskInput.val('');
                }
            });
        }
    });
});
