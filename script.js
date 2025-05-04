document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const addBtn = document.getElementById('addBtn');
    const amountInput = document.getElementById('amount');
    const categorySelect = document.getElementById('category');
    const transactionsList = document.getElementById('transactions');
    
    // Массив для хранения операций
    let transactions = [];
    
    // Обработчик клика по кнопке
    addBtn.addEventListener('click', function() {
        // Получаем значения
        const amount = parseFloat(amountInput.value);
        const category = categorySelect.value;
        
        // Проверяем ввод
        if (isNaN(amount)) {
            alert('Пожалуйста, введите корректную сумму');
            return;
        }
        
        if (!category) {
            alert('Пожалуйста, выберите категорию');
            return;
        }
        
        // Создаем новую операцию
        const transaction = {
            amount: amount,
            category: category,
            date: new Date().toLocaleString()
        };
        
        // Добавляем в массив
        transactions.push(transaction);
        
        // Очищаем поле ввода
        amountInput.value = '';
        
        // Обновляем список
        updateTransactionsList();
    });
    
    // Функция обновления списка операций
    function updateTransactionsList() {
        transactionsList.innerHTML = '';
        
        transactions.forEach(transaction => {
            const div = document.createElement('div');
            div.innerHTML = 
                <p>
                    ${transaction.date} | 
                    ${transaction.category} | 
                    ${transaction.amount > 0 ? '+' : ''}${transaction.amount} ₽
                </p>
            ;
            transactionsList.appendChild(div);
        });
    }
});
