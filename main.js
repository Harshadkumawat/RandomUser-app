const userContainer = document.querySelector('.user-container');
const reloadButton = document.querySelector('.reload-button');

async function fetchRandomUsers() {
  try {
        const response = await fetch('https://randomuser.me/api/?results=10');
  
    const data = await response.json();
    displayUsers(data.results);
  } catch (error) {
    console.error('Error fetching user data:', error);
    userContainer.innerHTML = '<p>Failed to fetch user data. Please try again.</p>';
  }
}
function displayUsers(users) {
  userContainer.innerHTML = ''; 
  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.innerHTML = `
      <img src="${user.picture.medium}" alt="${user.name.first}">
      <h3>${user.name.first} ${user.name.last}</h3>
      <p>${user.email}</p>
    `;
    userContainer.appendChild(userCard);
  });
}
      
reloadButton.addEventListener('click', fetchRandomUsers);
fetchRandomUsers();