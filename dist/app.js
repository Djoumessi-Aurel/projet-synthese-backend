"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("./entities");
const CouncilPresentation_1 = require("./entities/CouncilPresentation");
const CouncilSignage_1 = require("./entities/CouncilSignage");
const RessourceNaturelle_1 = require("./entities/RessourceNaturelle");
const Pays_1 = require("./entities/Pays");
const Region_1 = require("./entities/Region");
const Departement_1 = require("./entities/Departement");
const Commune_1 = require("./entities/Commune");
const Localite_1 = require("./entities/Localite");
const Zone_1 = require("./entities/Zone");
const RessourceFaunique_1 = require("./entities/RessourceFaunique");
const TypeEtat_1 = require("./entities/TypeEtat");
const Historique_1 = require("./entities/Historique");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    database: "projet_synthese",
    username: "aurel",
    password: "2HWZ1sJk5YLDUg5UJUVpObb1tt4HEDJz",
    url: "postgres://aurel:2HWZ1sJk5YLDUg5UJUVpObb1tt4HEDJz@dpg-clf09oc15k1s73f70eeg-a.oregon-postgres.render.com/projet_synthese",
    ssl: true,
    port: 5432,
    entities: [TypeEtat_1.TypeEtat,
        CouncilPresentation_1.CouncilPresentation, CouncilSignage_1.CouncilSignage,
        RessourceNaturelle_1.RessourceNaturelle, RessourceFaunique_1.RessourceFaunique,
        entities_1.State3, entities_1.State4, entities_1.State7, entities_1.State9, entities_1.State10, entities_1.State8, entities_1.State11, entities_1.State13, entities_1.State14, entities_1.State15, entities_1.State16, entities_1.State17,
        Historique_1.Historique,
        Pays_1.Pays, Region_1.Region, Departement_1.Departement, Commune_1.Commune, Localite_1.Localite, Zone_1.Zone],
    synchronize: true
});
// export const AppDataSource = new DataSource({
//     type:"postgres",
//     host: "localhost",
//     database:"projet_synthese",
//     username:"postgres",
//     password:"pointsv$1234",
//     port : 5432,
//     entities: [TypeEtat,
//         CouncilPresentation, CouncilSignage,
//         RessourceNaturelle, RessourceFaunique,
//         State3,State4,State7,State9,State10, State8, State11,State13,State14,State15,State16,State17,
//  Historique,
//         Pays, Region, Departement, Commune, Localite, Zone],
//     synchronize :true
// })
