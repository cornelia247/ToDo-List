const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');
addItemInput.addEventListener('keypress', function (e) {
  if (e.key === "Enter") {
    // add a new item to the list
    if (!this.value) return; //this makes sure an empty field does not create an li 
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.append(newItem);
    this.value = ''; // clears the field every time "Enter" is pressed
  }
})
