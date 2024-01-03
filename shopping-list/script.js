const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const inputAlert = document.getElementById('input-alert')
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter")


// Event listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);

checkUI()

// Add a new item
function addItem(e) {
  e.preventDefault()

  const newItem = itemInput.value

  if (newItem === '') {
    inputAlert.style.display = 'block';
    return

  } else {
    inputAlert.style.display = 'none';
  }

  const li = document.createElement("li")
  li.appendChild(document.createTextNode(newItem))

  const btn = createButton('remove-item btn-link text-red')
  li.appendChild(btn)

  // Add li to the DOM
  itemList.appendChild(li)

  checkUI();

  // clear the input
  itemInput.value = '';
}

function createButton(classes) {
  const btn = document.createElement('button')
  btn.className = classes;
  const icon = createIcon('fa solid fa-xmark')
  btn.appendChild(icon)
  return btn;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove()
      checkUI();
    }
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild)
  }
  checkUI();
}

function checkUI() {
  const items = itemList.querySelectorAll('li')
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}