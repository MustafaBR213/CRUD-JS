// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    const newTaskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTask');
    const tasksList = document.getElementById('tasks');
    const completedTasksList = document.getElementById('completedTasks');
    const totalTasksCount = document.getElementById('totalTasks');
    const completedCount = document.getElementById('completedCount');
    const deleteCompletedButton = document.getElementById('deleteCompleted');
    const sortButton = document.getElementById('sortTasks');
    const searchInput = document.getElementById('search');

    // هيكل لتمثيل المهمة
    class Task {
        constructor(id, title, completed) {
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
    }

    // مصفوفة لتخزين المهام
    let tasks = [];

    // إضافة مهمة جديدة
    function addTask(title) {
        const newTask = new Task(tasks.length + 1, title, false);
        tasks.push(newTask);
        renderTasks();
    }

    // عرض المهام
    function renderTasks() {
        tasksList.innerHTML = '';
        completedTasksList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            li.addEventListener('click', () => toggleTaskCompletion(task));
            if (task.completed) {
                completedTasksList.appendChild(li);
            } else {
                tasksList.appendChild(li);
            }
        });
        totalTasksCount.textContent = tasks.length;
        completedCount.textContent = tasks.filter(task => task.completed).length;
    }

    // تبديل حالة اكتمال المهمة
    function toggleTaskCompletion(task) {
        task.completed = !task.completed;
        renderTasks();
    }

    // عند النقر على زر إضافة مهمة
    addTaskButton.addEventListener('click', () => {
        const newTaskTitle = newTaskInput.value.trim();
        if (newTaskTitle !== '') {
            addTask(newTaskTitle);
            newTaskInput.value = '';
        }
    });

    // عرض المهام عند بدء التحميل
    renderTasks();

// ...

 // حذف مهمة
 function deleteTask(task) {
    tasks = tasks.filter(t => t !== task);
    renderTasks();
}

// ترتيب المهام وفقًا لحالة الاكتمال
function sortTasksByCompletion() {
    tasks.sort((a, b) => a.completed - b.completed);
    renderTasks();
}

// زر حذف المهمات المكتملة
deleteCompletedButton.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
});

// زر ترتيب المهام
sortButton.addEventListener('click', sortTasksByCompletion);

// ...

function searchTasks(keyword) {
    return tasks.filter(task => task.title.toLowerCase().includes(keyword.toLowerCase()));
}

searchInput.addEventListener('input',function(){
    const keyword = this.value.trim();
    if (keyword !== '') {
        const searchResult =searchTasks(keyword);
        renderSearchResults(searchResult);
    }else{
        renderTasks();
    }
});

function renderSearchResults(results) {
    tasksList.innerHTML = '';
    completedTasksList.innerHTML = '';
    results.forEach(task =>{
        const li = document.createElement('li');
        li.textContent = task.title;
        li.addEventListener('click', () => toggleTaskCompletion(task));
        if (task.completed) {
            completedTasksList.appendChild(li);
        }else{
            tasksList.appendChild(li);
        }
    });
}

});


