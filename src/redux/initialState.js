const initialState = {
  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
    {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
    },
  ],

  columns: [
    {
      id: '1',
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: '2',
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: '3',
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: '4',
      listId: '2',
      title: 'Test',
      icon: 'laptop',
    },
  ],

  cards: [
    { 
      id: '1', 
      columnId: '1', 
      title: 'This is Going to Hurt',
      isFavorite: false, 
    },
    { 
      id: '2', 
      columnId: '1', 
      title: 'Interpreter of Maladies',
      isFavorite: false, 
    },
    { 
      id: '3', 
      columnId: '2', 
      title: 'Harry Potter',      
      isFavorite: false, 
    },
    { 
      id: '4', 
      columnId: '2', 
      title: 'Star Wars', 
      isFavorite: false, 
    },
    { 
      id: '5', 
      columnId: '3', 
      title: 'The Witcher', 
      isFavorite: true, 
    },
    { 
      id: '6', 
      columnId: '3', 
      title: 'Skyrim', 
      isFavorite: false, 
    },
    {
      id: '7',
      columnId: '4',
      title: 'Lorem',
      isFavorite: false, 
    },
    {
      id: '8',
      columnId: '4',
      title: 'Ipsum',
      isFavorite: true, 
    },
  ],

  searchString: '',

};

export default initialState;
