'use strict';
var logger = require('winston');
var co = require('co');

var app;

function init(a) {
    app = a;
    app.addCommand({
        name: "help",
        desc: "Show list of commands",
        alias: ["aide", "hilfe"],
        exec: help
    });
    return Promise.resolve();
}

function help(cmd) {
    return co(function *init() {
        return cmd.dest.send('*Add a role* \n\`.iam ROLE\`\n\n *Remove a role:*\n \`.iamnot ROLE\`\n (ROLE being job acronym, DRK, SAM, BLM, etc.)\n\n*Add raid leader tag* (to post on #clear_screenshots)\n\`.iam RL\`\n\n*Add guest tag* (to not receive pings anymore)\`.iam guest\`\n\nPlease note that you still need to remove your previous roles manually.\nIf you\'ve accidentally deleted your message in LFG/LFM channel, please note that the moderation team cannot help you bypass the posting limit. Please post on') +  client.channels.get("270614180124557312"); + ('until your limit is lifted.');
    });
}

module.exports.init = init;
