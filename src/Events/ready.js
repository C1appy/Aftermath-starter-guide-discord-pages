const Event = require("../Structures/Event.js");
module.exports = new Event("ready", client => {
		console.log("I HATE MY LIFE!")
		client.user.setActivity("Over Mah-frands!", { type: "WATCHING",})
});