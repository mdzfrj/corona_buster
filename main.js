import Phaser from "phaser";
import CoronaBusterScene from "./src/scenes/CoronaBusterScene";;

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
  width: 400,
  height: 620,
  scene: [CoronaBusterScene],
});