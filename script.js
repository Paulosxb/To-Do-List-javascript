document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('#todo-form');
    const inputField = document.querySelector('#todo-input');
    const newList = document.querySelector('#todo-list-new');
    const completedList = document.querySelector('#todo-list-completed');
    const showNewButton = document.querySelector('#show-new');
    const showCompletedButton = document.querySelector('#show-completed');

    addButton.onsubmit = (e) => {
        e.preventDefault();
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            listItem.addEventListener('click', () => {
                completedList.appendChild(listItem);
            });
            newList.appendChild(listItem);
            inputField.value = ''; // Limpa o campo de entrada
        }
    };

    // Alternar entre abas
    showNewButton.addEventListener('click', () => {
        newList.style.display = '';
        completedList.style.display = 'none';
    });

    showCompletedButton.addEventListener('click', () => {
        newList.style.display = 'none';
        completedList.style.display = '';
    });

    // Opcional: Adicionar funcionalidade para remover tarefas
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'LI') {
            e.target.remove();
        }
    });
});

