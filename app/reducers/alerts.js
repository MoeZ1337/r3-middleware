const initialState = [
  {
    id: 0,
    name: 'REZO',
  },
  {
    id: 1,
    name: 'NEO',
  },
  {
    id: 2,
    name: 'TOW',
  },
  {
    id: 3,
    name: 'REETH',
  },
  {
    id: 4,
    name: 'RUFO',
  },
];

const alert = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      if (state.id !== action.id) return state;
      return Object.assign({}, state, {
        name: action.name,
      });
    default:
      return state;
  }
};

const alerts = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return state.map(alertNode => alert(alertNode, action));
    default:
      return state;
  }
};

export default alerts;
