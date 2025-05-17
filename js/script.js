// Date à laquelle tu veux commencer ton projet (ex: 1er mai 2025 à 09:00:00)
const countDownDate = new Date("May 1, 2025 09:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "C'est le moment de commencer à travailler!";
  }
}, 1000);

const countdownTimer = () => {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  let totalSeconds = 1; // Commence à une seconde

  const updateCountdown = () => {
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    totalSeconds++;
  };

  setInterval(updateCountdown, 1000); // Met à jour toutes les secondes
};

document.addEventListener('DOMContentLoaded', countdownTimer);

function showCelebration() {
  // Créer un élément pour le message
  const celebrationMessage = document.createElement('div');
  celebrationMessage.className = 'celebration';
  celebrationMessage.textContent = 'Félicitations ! Vous avez trouvé le cadeau 🎉';

  // Ajouter le message au corps du document
  document.body.appendChild(celebrationMessage);

  // Supprimer le message après 3 secondes
  setTimeout(() => {
    celebrationMessage.remove();
  }, 3000);
}
