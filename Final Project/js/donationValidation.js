document.querySelector('#donationForm').addEventListener('submit', function(event) {
    let amount = document.querySelector('#amount').value;
    let selected = false;
    
    document.querySelectorAll('.options input[type="radio"]').forEach(input => {
      if (input.checked) selected = true;
    });
  
    if (amount === '' && !selected) {
      alert('Please enter the amount you wish to donate, or choose a pre-determined amount below.');
      event.preventDefault();
    }
});