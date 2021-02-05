const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
let count = 0;


btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const styles = event.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'hsl(209, 61%, 16%)';
        }

        value.textContent = count;
    })
})