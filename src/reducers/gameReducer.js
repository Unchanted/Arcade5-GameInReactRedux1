const initialState = {
  playerPosition: { x: 50, y: 50 }, // Initial player position
  score: 0,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      // Update player position based on direction
      return {
        ...state,
        playerPosition: {
          x: state.playerPosition.x + action.payload.x,
          y: state.playerPosition.y + action.payload.y,
        },
      };
    case 'INCREASE_SCORE':
      // Increase score by 1
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
};

export default gameReducer;
