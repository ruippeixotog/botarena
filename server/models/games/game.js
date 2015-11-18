class Game {
  constructor(params = {}) {
    if (this.constructor === Game) {
      throw new TypeError("Cannot construct Game instances directly");
    }
    this.params = params;
  }

  getParams() {
    return this.params;
  }

  getPlayerCount() {
    throw new Error(this.constructor + ".getPlayerCount not implemented");
  }

  isEnded() {
    throw new Error(this.constructor + ".isEnded not implemented");
  }

  isError() {
    throw new Error(this.constructor + ".isError not implemented");
  }

  getWinners() {
    throw new Error(this.constructor + ".getWinners not implemented");
  }

  getNextPlayer() {
    throw new Error(this.constructor + ".getCurrentPlayer not implemented");
  }

  // isValidMove(player, move)
  isValidMove() {
    throw new Error(this.constructor + ".isValidMove not implemented");
  }

  // move(player, move, moveTime)
  move() {
    throw new Error(this.constructor + ".move not implemented");
  }

  getMoveTimeLimit() {
    return this.params.moveTimeLimit;
  }

  onMoveTimeout() {
    throw new Error(this.constructor + ".onMoveTimeout not implemented");
  }

  getFullState() {
    throw new Error(this.constructor + ".getFullState not implemented");
  }

  // getStateView(fullState, player)
  getStateView() {
    throw new Error(this.constructor + ".getStateView not implemented");
  }

  // getState(player)
  getState(player) {
    return this.getStateView(this.getFullState(), player);
  }
}

export default Game;
