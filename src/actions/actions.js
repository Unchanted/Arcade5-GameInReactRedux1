export const movePlayer = (direction) => ({
  type: 'MOVE_PLAYER',
  payload: direction,
});

export const increaseScore = () => ({
  type: 'INCREASE_SCORE',
});
