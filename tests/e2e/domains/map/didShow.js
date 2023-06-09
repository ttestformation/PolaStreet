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

// .S  S.             .S_sSSs     .S S.          .S_SSSs           .S_sSSs    S.       .S       S.     sSSs         .S_sSSs      sSSs          sSSs    sSSs_sSSs     .S_sSSs    
// .SS  SS.           .SS~YS%%b   .SS SS.        .SS~SSSSS         .SS~YS%%b   SS.     .SS       SS.   d%%SP        .SS~YS%%b    d%%SP         d%%SP   d%%SP~YS%%b   .SS~YS%%b   
// S%S  S%S           S%S   `S%b  S%S S%S        S%S   SSSS        S%S   `S%b  S%S     S%S       S%S  d%S'          S%S   `S%b  d%S'          d%S'    d%S'     `S%b  S%S   `S%b  
// S%S  S%S           S%S    S%S  S%S S%S        S%S    S%S        S%S    S%S  S%S     S%S       S%S  S%|           S%S    S%S  S%S           S%|     S%S       S%S  S%S    S%S  
// S&S  S&S           S%S    S&S  S%S S%S        S%S SSSS%S        S%S    d*S  S&S     S&S       S&S  S&S           S%S    S&S  S&S           S&S     S&S       S&S  S%S    S&S  
// S&S  S&S           S&S    S&S   SS SS         S&S  SSS%S        S&S   .S*S  S&S     S&S       S&S  Y&Ss          S&S    S&S  S&S_Ss        Y&Ss    S&S       S&S  S&S    S&S  
// S&S  S&S           S&S    S&S    S S          S&S    S&S        S&S_sdSSS   S&S     S&S       S&S  `S&&S         S&S    S&S  S&S~SP        `S&&S   S&S       S&S  S&S    S&S  
// S&S  S&S           S&S    S&S    SSS          S&S    S&S        S&S~YSSY    S&S     S&S       S&S    `S*S        S&S    S&S  S&S             `S*S  S&S       S&S  S&S    S&S  
// S*S  S*b           S*S    S*S    S*S          S*S    S&S        S*S         S*b     S*b       d*S     l*S        S*S    d*S  S*b              l*S  S*b       d*S  S*S    S*S  
// S*S  S*S.          S*S    S*S    S*S          S*S    S*S        S*S         S*S.    S*S.     .S*S    .S*P        S*S   .S*S  S*S.            .S*P  S*S.     .S*S  S*S    S*S  
// S*S   SSSbs        S*S    S*S    S*S          S*S    S*S        S*S          SSSbs   SSSbs_sdSSS   sSS*S         S*S_sdSSS    SSSbs        sSS*S    SSSbs_sdSSS   S*S    S*S  
// S*S    YSSP        S*S    SSS    S*S          SSS    S*S        S*S           YSSP    YSSP~YSSY    YSS'          SSS~YSSY      YSSP        YSS'      YSSP~YSSY    S*S    SSS  
// SP                 SP            SP                  SP         SP                                                                                                SP          
// Y                  Y             Y                   Y          Y                                                                                                 Y           
                            

Scenario("La map s'affiche", async ({
    I
}) => {
  I.amOnPage('/');
  // I.wait(120);
  I.seeElement('.leaflet-container');
});
