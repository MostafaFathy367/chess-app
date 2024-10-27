"user client"

import StoreProvider from "./StoreProvider";
import Game from "@/pages/game/game";

export default function Home() {
  return (
    <StoreProvider>
      <Game />
    </StoreProvider>
  );
}
