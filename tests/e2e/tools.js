// 🌖🌖 Copyright Monwoo 2022 🌖🌖, build by Miguel Monwoo, service@monwoo.com
const assert = require('assert');

function syncScenario(title, opts, I, callback) {
    return new Promise(async function(resolve, reject) {
        // console.log('promise syncScenario', title);
        const solver = async (hookCallback) => {
            // console.log('solve syncScenario', title);
            try {
                await callback(hookCallback);
            } catch (e) {
                // TODO : right way to reject on fail ? TEST END listener or error listener ?
                reject(e);
                // throw e ?
            }
            resolve();
        }
        console.log('syncScenario', title);
        solver( { I } ); // TODO : refactor : did add I parameter since fail to // Scenario launch wait for now...

        // if (opts) { // TODO : wait for launched Scenario to run before launching next one....
        //     Scenario(title, opts, solver);
        // } else {
        //     Scenario(title, solver);
        // }
    });
}

function ensurePath(obj, ...path) {
    path.forEach(key => {
        if (! (key in obj)) {
            obj[key] = {};
        }
        obj = obj[key];
    });
}

const humanDelay = (max = 2) => {
    assert(max >= 2, "Need to wait at least 2 seconds to be superhuman");
    return 2 + Math.floor(Math.random() * (max - 2));
}

exports.syncScenario = syncScenario;
exports.ensurePath = ensurePath;
exports.humanDelay = humanDelay;