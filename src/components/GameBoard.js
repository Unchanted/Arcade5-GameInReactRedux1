import React from 'react';
import { useSelector } from 'react-redux';
import Player from './Player';

const GameBoard = () => {
  const playerPosition = useSelector((state) => state.playerPosition);

  return (
    <svg width="400" height="400">
      <rect width="400" height="400" style={{ fill: 'lightblue' }} />
      <Player x={playerPosition.x} y={playerPosition.y} />
    </svg>
  );
};

export default GameBoard;
