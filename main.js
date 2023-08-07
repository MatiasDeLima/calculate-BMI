const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    if(calculateCm.value === '' || calculateKg.value === '') {

        calculateMessage.classList.remove('green-color');
        calculateMessage.classList.add('red-color');

        calculateMessage.textContent = 'Fill in the height and weight';

        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000)
    } else {

        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm));

        if(bmi < 18.5) {
            calculateMessage.classList.add('green-color');
            calculateMessage.textContent = `You BMI is ${bmi} and you are skinny`;
        } else if(bmi < 25) {
            calculateMessage.classList.add('green-color');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are Healthy`;
        } else {
            calculateMessage.classList.add('green-color');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
        }

        calculateCm.value = '';
        calculateKg.value = '';

        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi);