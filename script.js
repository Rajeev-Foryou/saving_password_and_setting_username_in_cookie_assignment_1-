document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Initialize or update the cookie count
  let count = getCookie('count');
  if (count) {
    count = parseInt(count) + 1; // Increment count
  } else {
    count = 1; // Initialize count
  }

  setCookie('count', count, 7); // Store updated count for 7 days

  // Display the count on the webpage
  const displayElement = document.getElementById('countDisplay');
  if (displayElement) {
    displayElement.textContent = `You have visited this page ${count} times.`;
  }
});