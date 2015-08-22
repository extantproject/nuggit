var apps = {"jonathanpeterwu/mario-threejs": "https://raw.githubusercontent.com/jonathanpeterwu/mario-threejs/master/app.js"}

var whitelist = [ { 'shortname' : 'Mario', 'url' : 'https://exaample/jonathanpeterwu/mario-threejs/master/app.html' }, { 'shortname' : 'Wario', 'url' : 'https://exaample.test' }]

$('#mario').click(function() {
	window.open('http://mario5.florian-rappl.de/');
});

$('#computer').click(function() {
	window.open('http://bellard.org/jslinux/');
});

$('#doom').click(function() {
	window.open('http://github.int13h.com/webgldoom/doom.html#e1m1');
});

$('#commodore64').click(function() {
	window.open('http://terminal.jcubic.pl/commodore64/');
});

$('#stock').click(function() {
	window.open('http://rtstock.co/');
});

$('#webgl').click(function() {
	window.open('http://www.smartjava.org/ltjs/chapter-04/05-mesh-face-material.html');
});

/*
app_launch_button.on___click {
	fetch appfile
	if whitelist contains [app we launching].url AND whitelist_entry.hash == hash of appfile
		window.open([app we launching].url);
	else
		alert("sorry u tried to launch malware");
	end
}
*/