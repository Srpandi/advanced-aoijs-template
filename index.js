/* Defining packages */

const { AoiClient } = require("aoi.js");
const { AoiVoice, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
const { Util } = require("aoi.js");
const { parse, createAst } = require("aoi.parser");
const { parseExtraOptions, parseComponents } = require("aoi.parser/components");

/* Requiring the config file with your bot's information in it. */

const config = require("./handler/config/config.js");
const clientReady = require("./handler/config/clientReady.js");

/* Setting up the actual client. */

const client = new AoiClient({
    token: config.token,
    prefix: config.prefix,
    events: config.events,
    intents: config.intents,
    aoiLogs: false,
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        },
    },
});

/* @akarui/aoi.music setup */

const voiceManager = new AoiVoice(client, {
    searchOptions: {
        youtubeAuth: "./handler/config/auth.json",
        youtubegl: "US",
        soundcloudClientId: config.soundcloudID,
        youtubeClient: "WEB",
    }
});

/* LoadCommands Class for loading aoi.js commands, customFunctions and aoi.music events in a separate directory. (also adding some nice colors and more) */

clientReady(client, voiceManager, config.customCommands);
  
/* Setting up aoi.parser, just for components and (extra)Options. */

Util.parsers.ErrorHandler = parse;
Util.parsers.OptionsParser = ( data ) => {
     return createAst( data ).children.map( parseExtraOptions );
};
Util.parsers.ComponentParser = ( data ) => {
     return createAst( data ).children.map( parseComponents );
};

/* Needed for events and other features of @akarui/aoi.music to work. */ 

voiceManager.addPlugin(PluginName.Cacher, new Cacher("memory"));
voiceManager.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));

voiceManager.bindExecutor(client.functionManager.interpreter);