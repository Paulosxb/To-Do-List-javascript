document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('#todo-form');
    const inputField = document.querySelector('#todo-input');
    const newList = document.querySelector('#todo-list-new');
    const completedList = document.querySelector('#todo-list-completed');
    const clearAllButton = document.querySelector('#clear-all');

    addButton.onsubmit = (e) => {
        e.preventDefault();
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item'); // Bootstrap class for list items
            listItem.innerHTML = `${taskText} <i class="fas fa-trash-alt delete-item float-right"></i>`;
            listItem.addEventListener('click', function(e) {
                // Prevent moving item to completed if trash icon is clicked
                if (!e.target.classList.contains('delete-item')) {
                    completedList.appendChild(listItem);
                }
            });
            newList.appendChild(listItem);
            inputField.value = ''; // Clear input field
        }
    };

    // Event to delete an individual item
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-item')) {
            e.target.parentElement.remove();
        }
    });

    // Event to clear all items
    clearAllButton.addEventListener('click', () => {
        newList.innerHTML = '';
        completedList.innerHTML = '';
    });
});
