import cat from '../../Images/sad-cat.png';

export const MenuList = [
  {
    id: 1,
    title: 'Pizza',
    food: [
      { name: 'Pepperoni', price: 120, src: cat },
      { name: 'Margarita', price: 85, src: cat },
      { name: '4Seasons', price: 140, src: cat },
      { name: 'Lavazza', price: 180, src: cat },
    ],
  },
  {
    id: 2,
    title: 'Burgers',
    food: [
      { name: 'Big Burger', price: 115, src: cat },
      { name: 'Middle Burger', price: 75, src: cat },
      { name: 'Little Burger', price: 40, src: cat },
      { name: 'Senjor Burger', price: 150, src: cat },
    ],
  },
  {
    id: 3,
    title: 'Sushi',
    food: [
      { name: 'Sushi Set M', price: 200, src: cat },
      { name: 'Sushi Set L', price: 260, src: cat },
      { name: 'Sushi Set XL', price: 340, src: cat },
      { name: 'Sushi Set XXL', price: 550, src: cat },
    ],
  },
  {
    id: 4,
    title: 'Drinks',
    food: [
      { name: 'Spite', price: 20, src: cat },
      { name: 'Lemon Hell', price: 60, src: cat },
      { name: 'Stroke a Cat', price: 40, src: cat },
      { name: 'Survival Rate', price: 50, src: cat },
    ],
  },
];
