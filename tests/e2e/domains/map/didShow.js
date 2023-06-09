const fs = require('fs');
const _ = require('lodash');

Feature(`Domaine métier de l'usage de la map`);

const {
    syncScenario,
    ensurePath,
    humanDelay
} = require('../../tools.js')

Before(async function ({
    I
}) {
    // dateFormat = (await import('dateformat')).default;
    // startTime = dateFormat(new Date(), "yyyy-mm-dd_h-MM-ss");
});

Scenario("La map s'affiche", async ({
    I
}) => {
  I.amOnPage('/');
  // I.wait(120);
  I.seeElement('.leaflet-container');
});
