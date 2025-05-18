  // creating consts and vars
  const addBtn = document.getElementById("add-btn");
  const itemPrice = document.getElementById("item-price");
  const itemName = document.getElementById("item-name");
  const expenseList = document.getElementById("expense-list");

  let totalSum = 0;

  // Create  totalItem before using in DOMContentLoaded
  const totalItem = document.createElement("li");
  totalItem.style.fontWeight = "bold";
  totalItem.style.background = "darkgreen";
  totalItem.style.color = "white";
  totalItem.textContent = `Total: $0.00`;
  expenseList.appendChild(totalItem);

  document.addEventListener("DOMContentLoaded", () => {
    // Cleaning everything except  totalItem
    while (
      expenseList.firstChild &&
      expenseList.firstChild !== totalItem
    ) {
      expenseList.removeChild(expenseList.firstChild);
    }
    totalSum = 0;
    totalItem.textContent = `Total: $0.00`;
  });

  function addingFunction(event) {
    event.preventDefault(); 

    const nameTrimmed = itemName.value.trim();
    const priceValue = parseFloat(itemPrice.value);

    // Validating input data
    if (
      nameTrimmed.length < 2 ||
      itemPrice.value.trim() === "" ||
      isNaN(priceValue) ||
      priceValue <= 0 ||
      !/^[A-Za-z\s]+$/.test(nameTrimmed)
    ) {
      alert(
        "Please enter a valid name (at least 2 Latin letters) and a price greater than zero. Please try again!"
      );
      return;
    }

    // Capitalize first letter of the itemName
    const nameCap =
      nameTrimmed.charAt(0).toUpperCase() + nameTrimmed.slice(1);

    // Create new list item
    const newListItem = document.createElement("li");
    newListItem.textContent = `${nameCap} - $${priceValue.toFixed(2)}`;

    // Insert new item into the list
    expenseList.insertBefore(newListItem, totalItem);

    // New total sum
    totalSum += priceValue;
    totalItem.textContent = `Total: $${totalSum.toFixed(2)}`;

    // Clear input fields and focus on item name input
    itemName.value = "";
    itemPrice.value = "";
    itemName.focus();
  }

  addBtn.addEventListener("click", addingFunction);
