"use client"

import { connect } from "react-redux";
import { type Square } from '@/types/square';
import style from "./game.module.css";

interface GameProps {
  board?: Square[][];
}

const Game: React.FC<GameProps> = () => {
  return (
    <main className={style.container}></main>
  );
};

export default connect(null, null)(Game)