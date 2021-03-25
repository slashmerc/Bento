// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' ';

// Here you can change your greetings
const gree1 = 'Do spania!  ';
const gree2 = 'Miłego rana!  ';
const gree3 = 'Miłego popołudnia!  ';
const gree4 = 'Miłego wieczoru,  ';
const gree5 = 'Miłego wieczoru,  ';
const gree6 = 'Miłego wieczoru,  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
