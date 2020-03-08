function bank() {
  let quit = false;
  let balance = 0;

  while (quit === false) {
    let input = prompt('Enter an action:\n"B" to view current balance\n"W" to withdraw money\n"D" to deposit\n"Q" to quit');
    let adjustInput = input.toUpperCase();
    switch (adjustInput) {

      case "Q": {
        quit = true;
        break;
      }

      case "B": {
        if (balance < 50) {
          alert('Current balance: $' + balance +'. Warning: Your account is below $50. Please make deposite.')
        }
        else {
          alert('Your current balance is $' + balance);
        }
        break;
      }

      case "W": {
        let withdraw = prompt('Enter an amount to withdraw: ');
        if (withdraw > balance) {
          alert("Your don't have enough of money to withdraw!")
        }
        else {
          let adjustWithdraw = Number(withdraw);
          let withdrawAmount = balance - adjustWithdraw;
          balance = withdrawAmount;
          alert('Your new balance is: $' + balance);
        }
        break;
      }

      case "D": {
        let deposit = prompt('Enter an amount to deposite: ');
        if (balance > 50000) {
          alert("Deposits cannot exceed $50,000!");
        }
        else {
          let adjustDeposit = Number(deposit);
          let depositAmount = balance + adjustDeposit;
          balance = depositAmount;
          alert('Your new balance is: $' + balance);
        }
        break;
      }
      default: {
        alert('Please Enter an Action!')
      }
    }
  }
  alert('Good-bye!');
}
