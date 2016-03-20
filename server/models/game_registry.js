import _ from "underscore";

import GameInstance from "./game_instance";
import Registry from "./registry";
import db from "../models/utils/database"

class GameRegistry extends Registry {
  constructor(Game) {
    super((id, params) => new GameInstance(id, new Game(params)));
    this.restoreAllGames(Game);
  }

  restoreAllGames(Game) {
    var gameRegistry = this;
    db.games.getAll(Game.name, function(err, games) {
      if (err) {
        console.log(err);
        return;
      }
      games.forEach(gameRegistry.restore, gameRegistry);
    });
  }

  getAllGamesInfo() {
    return _(this.instances).map(game => game.getInfo());
  }
  
  static getInstanceClass() {
    return GameInstance;
  }
}

export default GameRegistry;
