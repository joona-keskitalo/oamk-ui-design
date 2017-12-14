$(document).ready(function() {
    $('#video1').on('click', function() {
        document.getElementById("videoContainer").innerHTML = "<h2>Counter Strike: DreamHack Finals</h2><video width='100%'' height='auto' autoplay muted loop controls><source src='video/csgo.mp4' type='video/mp4'></video>";
    });
    $('#video2').on('click', function() {
        document.getElementById("videoContainer").innerHTML = "<h2>DOTA 2 Stream</h2><video width='100%'' height='auto' autoplay muted loop controls><source src='video/dota2.mp4' type='video/mp4'></video>";
    });
    $('#video3').on('click', function() {
        document.getElementById("videoContainer").innerHTML = "<h2>League of Legends</h2><video width='100%'' height='auto' autoplay muted loop controls><source src='video/lol.mp4' type='video/mp4'></video>";
    });
    $('#video4').on('click', function() {
        document.getElementById("videoContainer").innerHTML = "<h2>Hearthstone Stream</h2><video width='100%'' height='auto' autoplay muted loop controls><source src='video/hearthstone.mp4' type='video/mp4'></video>";
    });
    $('#video5').on('click', function() {
        document.getElementById("videoContainer").innerHTML = "<h2>Overwatch</h2><video width='100%'' height='auto' autoplay muted loop controls><source src='video/overwatch.mp4' type='video/mp4'></video>";
    });
    $('#video6').on('click', function() {
        document.getElementById("videoContainer").innerHTML = "<h2>Fortnite</h2><video width='100%'' height='auto' autoplay muted loop controls><source src='video/fortnite.mp4' type='video/mp4'></video>";
    });
});