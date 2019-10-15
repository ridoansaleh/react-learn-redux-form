const initialState = {
  firstName: 'Ridoan',
  lastName: 'Saleh',
  email: 'ridoansaleh@gmail.com',
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SOME_ACTION':
      return {
        ...state,
        email: 'changed@gmail.com',
      };
    default:
      return state;
  }
};

export default contactReducer;
