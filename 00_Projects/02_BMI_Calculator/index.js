
const submitForm = (e) => {
    e.preventDefault();

    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if (height === '' || weight === '') {
        alert('Please enter both height and weight');
        return;
    }

    height = parseFloat(height);
    weight = parseFloat(weight);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid numerical values for height and weight');
        return;
    }

    let bmi = weight / (height * height);

    document.querySelector('.main').innerHTML = bmi.toFixed(2);
}
