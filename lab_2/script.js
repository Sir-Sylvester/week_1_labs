// Array to store to-do items
let todoItems = [];

// Function to create a new to-do list item element from the data
function createTodoElement(item) {
    const todoElement = document.createElement('div');
    todoElement.className = 'todo-item';
    if (item.completed) {
        todoElement.classList.add('completed');
    }

    todoElement.innerHTML = `
        <div class="todo-content">
            <input type="checkbox" onclick="toggleComplete(${item.id})" ${item.completed ? 'checked' : ''}>
            <strong>${item.title}</strong>
            <p>${item.description}</p>
            <small>${new Date(item.dueDate).toLocaleString()}</small>
        </div>
        <div class="todo-item-buttons">
            <button onclick="editTodoItem(${item.id})">Edit</button>
            <button onclick="deleteTodoItem(${item.id})">Delete</button>
        </div>
    `;

    return todoElement;
}

// Function to add a new to-do item
function addTodoItem(title, description, dueDate) {
    const todoItem = {
        id: Date.now(),
        title,
        description,
        dueDate,
        completed: false
    };
    todoItems.push(todoItem);
    sortTodoList('asc');
    renderTodoList();
    toggleSortButtons();
}

// Function to update an existing to-do item
function updateTodoItem(id, newTitle, newDescription, newDueDate) {
    const todoItem = todoItems.find(item => item.id === id);
    if (todoItem) {
        todoItem.title = newTitle;
        todoItem.description = newDescription;
        todoItem.dueDate = newDueDate;
        sortTodoList('asc');
        renderTodoList();
    }
}

// Function to sort the to-do list based on the due date/time
function sortTodoList(order = 'asc') {
    todoItems.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
}

// Function to render the to-do list
function renderTodoList() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todoItems.forEach(item => {
        const todoElement = createTodoElement(item);
        todoList.appendChild(todoElement);
    });
    toggleSortButtons();
}

// Function to toggle the completion status of a to-do item
function toggleComplete(id) {
    const todoItem = todoItems.find(item => item.id === id);
    if (todoItem) {
        todoItem.completed = !todoItem.completed;
        if (todoItem.completed) {
            alert(`The to-do item "${todoItem.title}" is completed.`);
        }
        renderTodoList();
    }
}

// Function to delete a to-do item
function deleteTodoItem(id) {
    todoItems = todoItems.filter(item => item.id !== id);
    renderTodoList();
    toggleSortButtons();
}

// Function to edit a to-do item
function editTodoItem(id) {
    const todoItem = todoItems.find(item => item.id === id);
    if (todoItem) {
        document.getElementById('title').value = todoItem.title;
        document.getElementById('description').value = todoItem.description;
        document.getElementById('due-date').value = todoItem.dueDate;
        deleteTodoItem(id); // Remove the item to update it after editing
    }
}

// Function to check and mark overdue items as completed
function checkAndMarkOverdueItems() {
    const now = new Date();
    todoItems.forEach(item => {
        if (new Date(item.dueDate) <= now && !item.completed) {
            item.completed = true;
            alert(`The to-do item "${item.title}" is due and marked as completed.`);
        }
    });
    renderTodoList();
}

// Function to show or hide sort buttons based on the number of items
function toggleSortButtons() {
    if (todoItems.length >= 2) {
        document.getElementById('sort-asc-button').style.display = 'inline-block';
        document.getElementById('sort-desc-button').style.display = 'inline-block';
    } else {
        document.getElementById('sort-asc-button').style.display = 'none';
        document.getElementById('sort-desc-button').style.display = 'none';
    }
}

// Event listener for the add button
document.getElementById('add-button').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    let missingFields = [];
    if (!title) missingFields.push('Title');
    if (!description) missingFields.push('Description');
    if (!dueDate) missingFields.push('Due date');

    if (missingFields.length > 0) {
        alert(`${missingFields.join(', ')} ${missingFields.length > 1 ? 'are' : 'is'} required.`);
    } else {
        const dueDateTime = new Date(dueDate);
        const now = new Date();
        if (dueDateTime > now) {
            addTodoItem(title, description, dueDate);
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
            document.getElementById('due-date').value = '';
        } else {
            alert('Due date must be in the future.');
        }
    }
});

// Event listeners for the sort buttons
document.getElementById('sort-asc-button').addEventListener('click', () => {
    sortTodoList('asc');// Array to store to-do items
    let todoItems = [];
    
    // Function to create a new to-do list item element from the data
    function createTodoElement(item) {
        const todoElement = document.createElement('div');
        todoElement.className = 'todo-item';
        if (item.completed) {
            todoElement.classList.add('completed');
        }
    
        todoElement.innerHTML = `
            <div class="todo-content">
                <input type="checkbox" onclick="toggleComplete(${item.id})" ${item.completed ? 'checked' : ''}>
                <strong>${item.title}</strong>
                <p>${item.description}</p>
                <small>${new Date(item.dueDate).toLocaleString()}</small>
            </div>
            <div class="todo-item-buttons">
                <button onclick="editTodoItem(${item.id})">Edit</button>
                <button onclick="deleteTodoItem(${item.id})">Delete</button>
            </div>
        `;
    
        return todoElement;
    }
    
    // Function to add a new to-do item
    function addTodoItem(title, description, dueDate) {
        const todoItem = {
            id: Date.now(),
            title,
            description,
            dueDate,
            completed: false
        };
        todoItems.push(todoItem);
        sortTodoList('asc');
        renderTodoList();
        toggleSortButtons();
    }
    
    // Function to update an existing to-do item
    function updateTodoItem(id, newTitle, newDescription, newDueDate) {
        const todoItem = todoItems.find(item => item.id === id);
        if (todoItem) {
            todoItem.title = newTitle;
            todoItem.description = newDescription;
            todoItem.dueDate = newDueDate;
            sortTodoList('asc');
            renderTodoList();
        }
    }
    
    // Function to sort the to-do list based on the due date/time
    function sortTodoList(order = 'asc') {
        todoItems.sort((a, b) => {
            const dateA = new Date(a.dueDate);
            const dateB = new Date(b.dueDate);
            return order === 'asc' ? dateA - dateB : dateB - dateA;
        });
    }
    
    // Function to render the to-do list
    function renderTodoList() {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
    
        todoItems.forEach(item => {
            const todoElement = createTodoElement(item);
            todoList.appendChild(todoElement);
        });
        toggleSortButtons();
    }
    
    // Function to toggle the completion status of a to-do item
    function toggleComplete(id) {
        const todoItem = todoItems.find(item => item.id === id);
        if (todoItem) {
            todoItem.completed = !todoItem.completed;
            if (todoItem.completed) {
                alert(`The to-do item "${todoItem.title}" is completed.`);
            }
            renderTodoList();
        }
    }
    
    // Function to delete a to-do item
    function deleteTodoItem(id) {
        todoItems = todoItems.filter(item => item.id !== id);
        renderTodoList();
        toggleSortButtons();
    }
    
    // Function to edit a to-do item
    function editTodoItem(id) {
        const todoItem = todoItems.find(item => item.id === id);
        if (todoItem) {
            document.getElementById('title').value = todoItem.title;
            document.getElementById('description').value = todoItem.description;
            document.getElementById('due-date').value = todoItem.dueDate;
            deleteTodoItem(id); // Remove the item to update it after editing
        }
    }
    
    // Function to check and mark overdue items as completed
    function checkAndMarkOverdueItems() {
        const now = new Date();
        todoItems.forEach(item => {
            if (new Date(item.dueDate) <= now && !item.completed) {
                item.completed = true;
                alert(`The to-do item "${item.title}" is due and marked as completed.`);
            }
        });
        renderTodoList();
    }
    
    // Function to show or hide sort buttons based on the number of items
    function toggleSortButtons() {
        if (todoItems.length >= 2) {
            document.getElementById('sort-asc-button').style.display = 'inline-block';
            document.getElementById('sort-desc-button').style.display = 'inline-block';
        } else {
            document.getElementById('sort-asc-button').style.display = 'none';
            document.getElementById('sort-desc-button').style.display = 'none';
        }
    }
    
    // Event listener for the add button
    document.getElementById('add-button').addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;
    
        let missingFields = [];
        if (!title) missingFields.push('Title');
        if (!description) missingFields.push('Description');
        if (!dueDate) missingFields.push('Due date');
    
        if (missingFields.length > 0) {
            alert(`${missingFields.join(', ')} ${missingFields.length > 1 ? 'are' : 'is'} required.`);
        } else {
            const dueDateTime = new Date(dueDate);
            const now = new Date();
            if (dueDateTime > now) {
                addTodoItem(title, description, dueDate);
                document.getElementById('title').value = '';
                document.getElementById('description').value = '';
                document.getElementById('due-date').value = '';
            } else {
                alert('Due date must be in the future.');
            }
        }
    });
    
    // Event listeners for the sort buttons
    document.getElementById('sort-asc-button').addEventListener('click', () => {
        sortTodoList('asc');
        renderTodoList();
    });
    
    document.getElementById('sort-desc-button').addEventListener('click', () => {
        sortTodoList('desc');
        renderTodoList();
    });
    
    // Initial sort of the to-do list
    sortTodoList('asc');
    renderTodoList();
    
    // Periodically check and mark overdue items as completed every minute
    setInterval(checkAndMarkOverdueItems, 60000);
    renderTodoList();
});

document.getElementById('sort-desc-button').addEventListener('click', () => {
    sortTodoList('desc');
    renderTodoList();
});

// Initial sort of the to-do list
sortTodoList('asc');
renderTodoList();

// Periodically check and mark overdue items as completed every minute
setInterval(checkAndMarkOverdueItems, 60000);