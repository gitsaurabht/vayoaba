document.getElementById('btn').addEventListener('click', function () {
    var principalInput = document.getElementById('principal');
    var rateInput = document.getElementById('rate');
    var yearsInput = document.getElementById('years');
    
    var principal = parseFloat(principalInput.value);
    var rate = parseFloat(rateInput.value);
    var years = parseInt(yearsInput.value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
        document.getElementById('principal_error').innerText = 'Please enter valid numbers for all fields.';
        document.getElementById('output').innerText = '';
        return;
    } else {
        document.getElementById('principal_error').innerText = '';
    }

    var interest = (principal * rate * years) / 100;

    document.getElementById('output').innerText = 'Annual Interest: RS' + interest.toFixed(2);
});
