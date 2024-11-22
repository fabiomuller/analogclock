// Function to move the clock hands
function updateClock() {
  // Get the current time
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate angles for the hands
  const secondDegrees = (seconds / 60) * 360 + 180;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 180;
  const hourDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 180;

  // Select the hands
  const secondHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  // Rotate the hands
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Set the update interval to 1000ms
setInterval(updateClock, 1000);

// Call the function
updateClock();
