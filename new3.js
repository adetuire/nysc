document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
    } else {
        var taskDetails = document.createElement('input');
        taskDetails.type = "text";
        taskDetails.placeholder = "Details";
        taskDetails.className = "taskDetails";

        var taskName = document.createElement('span');
        taskName.id = "taskname";
        taskName.textContent = document.querySelector('#newtask input').value;

        var task = document.createElement('div');
        task.className = "task";
        task.appendChild(taskName);
        task.appendChild(taskDetails);

        var deleteButton = document.createElement('button');
        deleteButton.className = "delete";
        var trashIcon = document.createElement('i');
        trashIcon.className = "far fa-trash-alt";
        deleteButton.appendChild(trashIcon);
        task.appendChild(deleteButton);

        document.querySelector('#tasks').appendChild(task);

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var current_details = document.querySelectorAll(".taskDetails");
        for (var i = 0; i < current_details.length; i++) {
            current_details[i].style.display = "none";
        }

        task.onclick = function () {
            var details = this.querySelector('.taskDetails');
            if (details.style.display === "none") {
                details.style.display = "block";
                details.focus();
            } else {
                details.style.display = "none";
            }
        };

        document.querySelector('#newtask input').value = "";
    }
};