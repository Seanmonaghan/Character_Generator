let first_names = ["Bob", "Tom", "Steven", "Sarah", "Jill"];
let last_names = ["Osborn", "Jackson", "Erwin", "Booker", "Bowie"];
let personalities = ["The Duty Fulfiller", "The Nurturer", "The Protector", "The Scientist", "The Mechanic", "The Artist", "The Idealist", "The Doer", "The Performer", "The Inspirer", "The Visionary", "The Guardian", "The Caregiver", "The Giver", "The Executive"];
let hairstyles = ["Crew Cut", "Bowl Cut", "Caeser Cut", "Bob Cut", "Pixie Cut", "Undercut", "Mohawk",  ]
let dress_styles = ["Gothic", "Casual", "Hipster", "Thrift Store Chic", "Ivy League", "Bohemian"]

const newFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const personality = document.querySelector('#personality').value.trim();
    const hairstyle = document.querySelector('#hairstyle').value.trim();
    const dress_style = document.querySelector('#dress_style').value.trim();
    const age = document.querySelector('#age').value.trim();
    const game_id = document.querySelector('#game').value;
    const strength = document.querySelector("#strength").value.trim();
    const defense = document.querySelector("#defense").value.trim();
    const stamina = document.querySelector("#stamina").value.trim();


    if (first_name && last_name && personality && hairstyle && dress_style && age) {
      const response = await fetch(`/api/characters`, {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, personality, hairstyle, dress_style, age, game_id, strength, defense, stamina}),
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create character');
      }
    }
  };
  
  const characterDelButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/characters/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };


  const newGameFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const description = document.querySelector('#description').value;

    if (title, genre, description) {
      const response = await fetch(`/api/games`, {
        method: 'POST',
        body: JSON.stringify({ title, genre, description }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create game');
      }
    }
  };

  const GameDelButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/games/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete game');
      }
    }
  };

  // Randomizer Functions

function generateRandomFirstName() {
  const name = document.querySelector('#first_name');
  var first_name = first_names[Math.floor(Math.random() * first_names.length)];
  name.value = first_name;
}

function generateRandomLastName() {
  const name = document.querySelector('#last_name');
  var last_name = last_names[Math.floor(Math.random() * last_names.length)];
  name.value = last_name;
}

function generateRandomPersonality() {
  const pers = document.querySelector('#personality');
  var personality = personalities[Math.floor(Math.random() * personalities.length)];
  pers.value = personality;
}

function generateRandomHairstyle() {
  const style = document.querySelector('#hairstyle');
  var hairstyle = hairstyles[Math.floor(Math.random() * hairstyles.length)];
  style.value = hairstyle;
}

function generateRandomDressStyle() {
  const style = document.querySelector('#dress_style');
  var dress_style = dress_styles[Math.floor(Math.random() * dress_styles.length)];
  style.value = dress_style;
}

function generateRandomAge() {
  event.preventDefault();
  const ageEl = document.querySelector('#age');
  var age = Math.floor(Math.random() * 84 + 16);
  ageEl.value = age;
}

function generateRandomStrength() {
  event.preventDefault();
  const strengthEl = document.querySelector('#strength');
  var value = Math.floor(Math.random() * 1000);
  strengthEl.value = value;
}

function generateRandomDefense() {
  event.preventDefault();
  const defenseEl = document.querySelector('#defense');
  var value = Math.floor(Math.random() * 1000);
  defenseEl.value = value;
}

function generateRandomStamina() {
  event.preventDefault();
  const staminaEl = document.querySelector('#stamina');
  var value = Math.floor(Math.random() * 1000);
  staminaEl.value = value;
}



// Add Character
document
    .querySelector('.new-character-form')
    .addEventListener('submit', newFormHandler);
  
// Delete Character
document
    .querySelector('.character-list')
    .addEventListener('click', characterDelButtonHandler);
// Add Game
document
    .querySelector('.new-game-form')
    .addEventListener('submit', newGameFormHandler);
// Delete Game
document
    .querySelector('.games-list')
    .addEventListener('click', GameDelButtonHandler);

  // Randomizers 
document.querySelector("#first_name_button").addEventListener('click', generateRandomFirstName)
document.querySelector("#last_name_button").addEventListener('click', generateRandomLastName)
document.querySelector("#personality_button").addEventListener('click', generateRandomPersonality)
document.querySelector("#hair_style_button").addEventListener('click', generateRandomHairstyle)
document.querySelector("#dress_style_button").addEventListener('click', generateRandomDressStyle)
document.querySelector("#age_button").addEventListener('click', generateRandomAge)
document.querySelector("#strength_button").addEventListener('click', generateRandomStrength)
document.querySelector("#defense_button").addEventListener('click', generateRandomDefense)
document.querySelector("#stamina_button").addEventListener('click', generateRandomStamina)
