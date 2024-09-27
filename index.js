function bmiCalculator() {
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmi-result').textContent = 'Please enter valid weight and height.';
        return false;
    }

    
    let bmi = weight / (height * height);
    
    
    document.getElementById('bmi-result').textContent = `Your BMI is ${bmi.toFixed(2)}.`;

    return false; 
}
