$(document).ready(function() {



	$('#video1').on('click', function() {
		document.getElementById("videoContainer").innerHTML = "<h2>Counter Strike: DreamHack Finals</h2><video width='100%'' height='auto' autoplay loop controls><source src='video/csgo.mp4' type='video/mp4'></video>";
		document.getElementById("info").innerHTML = "<h1>CSGO: DreamHack Finals</h1> <p>Counter-Strike: Global Offensive (CS:GO) is a multiplayer first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation. It is the fourth game in the Counter-Strike series and was released for Microsoft Windows, OS X, Xbox 360, and PlayStation 3 in August 2012, with the Linux version released in September 2014. The game pits two teams against each other: the Terrorists and the Counter-Terrorists. Both sides are tasked with eliminating the other while also completing separate objectives, the Terrorists, depending on the game mode, must either plant the bomb or defend the hostages, while the Counter-Terrorists must either prevent the bomb from being planted or rescue the hostages. There are six game modes, all of which have distinct characteristics specific to that mode.</p>";
	});
	$('#video2').on('click', function() {
		document.getElementById("videoContainer").innerHTML = "<h2>DOTA 2 Stream</h2><video width='100%'' height='auto' autoplay loop controls><source src='video/dota2.mp4' type='video/mp4'></video>";
		document.getElementById("info").innerHTML = "<h1>Dota 2</h1> <p>Dota 2 is a free-to-play multiplayer online battle arena (MOBA) video game developed and published by Valve Corporation. The game is the stand-alone sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character, known as a hero, who all have unique abilities and differing styles of play. During a match, players collect experience points and items for their heroes in order to successfully battle the opposing team's heroes, who are attempting to do the same to them. A team wins by being the first to destroy a large structure located in the opposing team's base, called the Ancient.</p>";
	});
	$('#video3').on('click', function() {
		document.getElementById("videoContainer").innerHTML = "<h2>League of Legends</h2><video width='100%'' height='auto' autoplay loop controls><source src='video/lol.mp4' type='video/mp4'></video>";
		document.getElementById("info").innerHTML = "<h1>League of Legends Championships</h1> <p>League of Legends (abbreviated LoL) is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. The game follows a freemium model and is supported by microtransactions, and was inspired by the Warcraft III: The Frozen Throne mod, Defense of the Ancients.</p>";
	});
	$('#video4').on('click', function() {
		document.getElementById("videoContainer").innerHTML = "<h2>Hearthstone Stream</h2><video width='100%'' height='auto' autoplay loop controls><source src='video/hearthstone.mp4' type='video/mp4'></video>";
		document.getElementById("info").innerHTML = "<h1>Hearthstone</h1> <p>Hearthstone, originally known as Hearthstone: Heroes of Warcraft, is a free-to-play online collectible card video game developed and published by Blizzard Entertainment. Having been released worldwide on March 11, 2014, Hearthstone builds upon the already existing lore of the Warcraft series by using the same elements, characters, and relics. It was first released for Microsoft Windows and macOS, with support for iOS and Android devices being added later. The game features cross-platform play, allowing players on any device to compete with each other, restricted only by geographical region account limits.</p>";
	});
	$('#video5').on('click', function() {
		document.getElementById("videoContainer").innerHTML = "<h2>Overwatch</h2><video width='100%'' height='auto' autoplay loop controls><source src='video/overwatch.mp4' type='video/mp4'></video>";
		document.getElementById("info").innerHTML = "<h1>Overwatch</h1> <p>Overwatch is a team-based multiplayer online first-person shooter video game developed and published by Blizzard Entertainment. It was released in May 2016 for Windows, PlayStation 4, and Xbox One. Overwatch assigns players into two teams of six, with each player selecting from a roster of over 20 characters, known in-game as heroes, each with a unique style of play, whose roles are divided into four general categories: Offense, Defense, Tank, and Support.</p>";
	});
	$('#video6').on('click', function() {
		document.getElementById("videoContainer").innerHTML = "<h2>Fortnite</h2><video width='100%'' height='auto' autoplay loop controls><source src='video/fortnite.mp4' type='video/mp4'></video>";
		document.getElementById("info").innerHTML = "<h1>Twitch Plays  Fortnite</h1> <p>Fortnite is a co-op sandbox survival video game developed by Epic Games and People Can Fly, the former also publishing the game. The game was released as a paid early access title for Microsoft Windows, macOS, PlayStation 4 and Xbox One on July 25, 2017, with a full free-to-play release expected in 2018. It features cross-progression between the PlayStation 4 and PC versions.</p>";
	});
	$('#video7').on('click', function() {
		document.getElementById("videoContainer").innerHTML = "<h2>Ei pysty meil o lanit</h2><video width='100%'' height='auto' autoplay loop controls><source src='video/lanit.mp4' type='video/mp4'></video>";
		document.getElementById("info").innerHTML = "<h1>Ei pysty meil o lanit</h1> <p>Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit Ei pysty meil o lanit </p>";
	});

	$('.event1').on('click', function() {
		document.getElementById("eventTitle").innerHTML = "DreamHack: Qualification Round 1";
		document.getElementById("eventText").innerHTML = "Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.";
		// document.getElementById("eventScore1").innerHTML = "CONTENT";
		// document.getElementById("eventScore2").innerHTML = "CONTENT";
		document.getElementById("eventImageContent").innerHTML = "<img src='img/logos/dreamhack.png'</img>";
	});

	$('.event2').on('click', function() {
		document.getElementById("eventTitle").innerHTML = "ESL One Katowice 2018: Dota 2";
		document.getElementById("eventText").innerHTML = "CONTENT";
		document.getElementById("eventScore1").innerHTML = "CONTENT";
		document.getElementById("eventScore2").innerHTML = "CONTENT";
	});

	$('.event3').on('click', function() {
		document.getElementById("eventTitle").innerHTML = "Intel Extreme Masters: StarCraft II";
		document.getElementById("eventText").innerHTML = "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.";
		document.getElementById("eventScore1").innerHTML = "CONTENT";
		document.getElementById("eventScore2").innerHTML = "CONTENT";
	});

	$('.event4').on('click', function() {
		document.getElementById("eventTitle").innerHTML = "CONTENT";
		document.getElementById("eventText").innerHTML = "CONTENT";
		document.getElementById("eventScore1").innerHTML = "CONTENT";
		document.getElementById("eventScore2").innerHTML = "CONTENT";
	});

	$('.event5').on('click', function() {
		document.getElementById("eventTitle").innerHTML = "CONTENT";
		document.getElementById("eventText").innerHTML = "CONTENT";
		document.getElementById("eventScore1").innerHTML = "CONTENT";
		document.getElementById("eventScore2").innerHTML = "CONTENT";
	});

	$('.event6').on('click', function() {
		document.getElementById("eventTitle").innerHTML = "CONTENT";
		document.getElementById("eventText").innerHTML = "CONTENT";
		document.getElementById("eventScore1").innerHTML = "CONTENT";
		document.getElementById("eventScore2").innerHTML = "CONTENT";
	});

	$('.event7').on('click', function() {
		document.getElementById("eventTitle").innerHTML = "CONTENT";
		document.getElementById("eventText").innerHTML = "CONTENT";
		document.getElementById("eventScore1").innerHTML = "CONTENT";
		document.getElementById("eventScore2").innerHTML = "CONTENT";
	});

	$('.event8').on('click', function() {
		document.getElementById("eventTitle").innerHTML = "CONTENT";
		document.getElementById("eventText").innerHTML = "CONTENT";
		document.getElementById("eventScore1").innerHTML = "CONTENT";
		document.getElementById("eventScore2").innerHTML = "CONTENT";
	});



	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	output.innerHTML = this.value;
}








});