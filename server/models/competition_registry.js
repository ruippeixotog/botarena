import _ from "lodash";
import db from "../models/utils/database";
import CompetitionInstance from "./competition_instance";
import Registry from "./registry";

class CompetitionRegistry extends Registry {
  constructor(gameRegistry, compTypes) {
    super((id, { type, ...params }) => {
      let Competition = compTypes[type];
      return Competition ?
        new CompetitionInstance(id, new Competition(params), gameRegistry) :
        null;
    });
  }

  restoreAllStoredCompetitions(Game, gameRegistry) {
    let compRegistry = this;
    db.competitions.getAll(Game.name)
      .then(competitions =>
        competitions.forEach(competition => {
          competition.gameRegistry = gameRegistry;
          compRegistry.restore(competition, CompetitionInstance);
        })
      );
  }

  getAllCompetitionsInfo() {
    return _.map(this.instances, comp => comp.getInfo());
  }
}

export default CompetitionRegistry;
