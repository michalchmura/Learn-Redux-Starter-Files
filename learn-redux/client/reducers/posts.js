function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we're updating
        {
          ...state[i],
          likes: state[i].likes + 20
        },
        ...state.slice(i + 1) // after
      ];
    default:
      return state;
  }
}
export default posts;
