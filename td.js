        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');

            if (taskInput.value.trim() !== '') {
                const taskItem = document.createElement('li');
                taskItem.className = 'taskItem';

                const taskText = document.createElement('span');
                taskText.innerText = taskInput.value;

                const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Delete';
                deleteButton.onclick = function () {
                    taskList.removeChild(taskItem);
                };

                taskItem.appendChild(taskText);
                taskItem.appendChild(deleteButton);

                taskList.appendChild(taskItem);

                taskInput.value = '';
            }
        }
