const initialState = [
  'Tony Stark', 
  'Steve Rodgers', 
  'Nick Fury', 
  'Natasha Romanova', 
  'Clint Barton', 
  'Bruce Banner', 
  'Wanda Maximoff'
];

const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';

export function addGuest(newGuest){
  return {
    type: ADD_GUEST,
    payload: newGuest
  }
}

export function removeGuest(index){
  return {
    type: REMOVE_GUEST,
    payload: index
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type){
    case ADD_GUEST:
      return [...state, action.payload];
    case REMOVE_GUEST:
      return state.filter( (name, i) => i !== action.payload ); //if the index of the current iteration isn't the index of the li item whose 'remove' button was clicked, keep the item. otherwise, remove it!
    default:
      return state;
  }
}
