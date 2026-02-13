//LEVEL 3 FUNCTIONS

let currentLevel = 0;
const maxLevel = 6;

const levelBtn = document.getElementById('levelup-btn');
const description = document.getElementById('description');
const badge = document.getElementById('level-badge');

if (levelBtn) {
  levelBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (currentLevel < maxLevel) {
      currentLevel++;
      if (description) description.textContent = `You leveled up! Current Level: ${currentLevel}`;
      if (badge) badge.textContent = `Level ${currentLevel}`;
    }
  });
}



//LEVEL 4 FUNCTIONS
const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name-input');
const message = document.getElementById('message');

if (submitBtn) {
  submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); 

    const name = nameInput.value.trim();

    if (name === "") {
      message.textContent = "name is required";
      message.style.color = "red";
    } else {
      message.textContent = `Welcome (${name})✅`;
      message.style.color = "green"; 
    }
  });
}


//LEVEL 5 FUNCTIONS
let coins = 0;

const coinDisplay = document.getElementById("coin-display");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");

function updateDisplay() {
  if (coinDisplay) {
    coinDisplay.textContent = `Coins: ${coins}`;
  }
}

if (plusBtn) {
  plusBtn.addEventListener("click", function () {
    coins++;
    updateDisplay();
  });
}

if (minusBtn) {
  minusBtn.addEventListener("click", function () {
    if (coins > 0) {
      coins--;
      updateDisplay();
    }
  });
}


//LEVEL 6 FUNCTIONS
const doors = document.querySelectorAll(".door-btn");
const resultBox = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

doors.forEach(function(door) {
  door.addEventListener("click", function() {

    const selectedDoor = this.getAttribute("data-door");

    if (selectedDoor === "2") {
      resultBox.textContent = "Correct! Quest Complete 🎉";
      resultBox.style.backgroundColor = "#d4edda";
      resultBox.style.color = "#155724";
    } else {
      resultBox.textContent = "Wrong door. Try again!";
      resultBox.style.backgroundColor = "#f8d7da";
      resultBox.style.color = "#721c24";
    }

  });
});

restartBtn.addEventListener("click", function() {
  resultBox.textContent = "Choose a door to see the result.";
  resultBox.style.backgroundColor = "#e9ecef";
  resultBox.style.color = "#333";
});
