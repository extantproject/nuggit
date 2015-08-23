var whitelist = [
	{ 'name' : 'Mario', 'uri' : 'http://mario5.florian-rappl.de/', 'description': 'it\'s me! Marrrrio!', 'icon' : 'https://modmyi.com/images/wiley/mariocloneicon.jpg'},
	{ 'name' : 'Computer', 'uri' : 'http://bellard.org/jslinux/', 'description': 'computer in u browfser', 'icon' : 'http://img.freepik.com/foto-gratis/_408-41130.png' },
	{ 'name' : 'Doom', 'uri' : 'http://github.int13h.com/webgldoom/doom.html#e1m1', 'description': 'the original', 'icon' : 'https://s5.mzstatic.com/us/r30/Purple/v4/42/0a/4c/420a4c80-a13f-ff63-973c-d1c4cbeb7fd2/mzl.yyxesyyi.175x175-75.png' },
	{ 'name' : 'Commodore64', 'uri' : 'http://terminal.jcubic.pl/commodore64/', 'description': 'lots of RAM on this one', 'icon' : 'https://36.media.tumblr.com/379ac036008ad36838cfc1d62b22dc28/tumblr_mivrva9tex1qzj5ggo5_250.png' },
	{ 'name' : 'Stock', 'uri' : 'http://rtstock.co/', 'description': 'what kind of nuggit would this be without stocks app', 'icon' : 'http://www.pubblicomnow-online.it/wordpress/wp-content/themes/ponline/img/stock.png'},
	{ 'name' : 'WebGL', 'uri' : 'http://www.smartjava.org/ltjs/chapter-04/05-mesh-face-material.html', 'description': 'just a simple demo where you can do the OpenGL at 60 FPS', 'icon' : 'http://www.ipader.it/wp-content/uploads/2010/06/3dcamerastudio.jpg'}
]


	$.each(whitelist, function( index, value ) {
		$('#search_results').append('<li><a href="' + value.uri + '">' + '<img src="' + value.icon +'" height="64" width="64" id="' + value.name +  '" class="icon"/>' + value.name + ' -- <p>' +value.description+'</p></a></li>');
	});


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