//Formats the currency and rounds up the currency values to two decimal places.
function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return "£ " + value;
}

//Formats the number of people value
function formatSplit(value) {
  if (value === "1") return value + " person";
  return value + " people";
}

/*Captures the users inputs of the total bill amount, tip percent and 
    the total number of people the bill will be split between
*/
function update() {
  let bill = Number(document.getElementById("yourBill").value);
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;

  //Calculation for tip amount, tip per person and the final bill for each person
  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;

  //Output values into the user interface: tip percentage, total tip amount and total bill
  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  document.getElementById("totalWithTip").innerHTML = formatMoney(
    bill + tipValue
  );

  //Number of people to split between, total bill of each person, and the tip amount for each person
  document.getElementById("splitValue").innerHTML = formatSplit(split);
  document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
  document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
}

//Calls the update function
let container = document.getElementById("container");
container.addEventListener("input", update);
