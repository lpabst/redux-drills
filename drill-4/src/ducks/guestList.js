const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';
const UPDATE_GUEST = 'UPDATE_GUEST';

const initialState = [
  'Tony Stark', 
  'Steve Rodgers', 
  ' Nick Fury', 
  'Natasha Romanova', 
  'Clint Barton', 
  'Bruce Banner', 
  'Wanda Maximoff'
];

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function removeGuest(i) {
  return {
    type: REMOVE_GUEST,
    payload: i
  }
}

export function updateGuest(index, newName){
  return {
    type: UPDATE_GUEST,
    payload: {
      index,
      newName
    }
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return [...state, action.payload];
    case REMOVE_GUEST:
      return state.filter( (guest, i) => i !== action.payload );
    case UPDATE_GUEST:
      return [
        ...state.slice(0, action.payload.index)
        , action.payload.newName
        , ...state.slice(action.payload.index+1)
      ]
      // another way to do it:
      // return state.map( (guest, i) => {
        // if (i === action.payload.index){
        //   return action.payload.name
        // }else{
        //   return guest
        // }
      // } )
    default:
      return state;
    }
}
