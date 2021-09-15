const Event = require("../Structures/Event.js");
module.exports = new Event("ready", client => {
		console.log("I HATE MY LIFE!")
		client.user.setActivity("Made by Clappy", { type: "WATCHING",})
});
