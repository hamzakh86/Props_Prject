//src players.js
// The attributes for each player are name, team, nationality, jerseyNumber, age, and an Image URL for the player
const players = [
    {
      name: 'Riyad Mahrez',
      team: 'Al-Ahli FC',
      nationality: 'Algérie',
      jerseyNumber: 7,
      age: 32,
      imageUrl:  'https://s.hs-data.com/bilder/spieler/gross/192635.jpg',
    },
    {
      name: 'Cristiano Ronaldo',
      team: ' Al-Nassr FC',
      nationality: 'Portugal',
      jerseyNumber: 7,
      age: 38,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cristiano_Ronaldo_with_Al_Nassr%2C_19_September_2023_-_83.jpg/800px-Cristiano_Ronaldo_with_Al_Nassr%2C_19_September_2023_-_83.jpg',
    },
    {
      name: 'Vinícius Júnior',
      team: 'Real Madrid',
      nationality: 'Brazil',
      jerseyNumber: 7,
      age: 23,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Vinicius_Jr_2021.jpg',
    },
    {
      name: 'Toni Kroos',
      team: 'Real Madrid',
      nationality: 'Allemand',
      jerseyNumber: 8,
      age: 33,
      imageUrl: 'https://www.realmadrid.com/img/vertical_380px/kroos_380x501_20230810055112.jpg',
    },
  ];
//Default props for each attribute name
  players.defaultProps = {
    name: "Username",
  };
  
  export default players;
  