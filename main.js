import Phaser from "phaser";
import CollectingStar from "./src/sceen/CollectingStarSceen";

export default new Phaser.Game({
  mode: "debug",
  type: Phaser.AUTO,
  parent: "app",
  physics: {
    default: "arcade",
    arcade: {
      // debug: true,
      gravity: {
        y: 200,
      },
    },
  },
  width: 800,
  height:585,
  scene: [CollectingStar],
});