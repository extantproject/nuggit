var whitelist = [
	{ 'name' : 'Mario', 'uri' : 'http://mario5.florian-rappl.de/', 'description': 'it\'s me! Marrrrio!' },
	{ 'name' : 'Computer', 'uri' : 'http://bellard.org/jslinux/', 'description': 'computer in u browfser'  },
	{ 'name' : 'Doom', 'uri' : 'http://github.int13h.com/webgldoom/doom.html#e1m1', 'description': 'the original'  },
	{ 'name' : 'Commodore64', 'uri' : 'http://terminal.jcubic.pl/commodore64/', 'description': 'lots of RAM on this one'  },
	{ 'name' : 'Stock', 'uri' : 'http://rtstock.co/', 'description': 'what kind of nuggit would this be without stocks app'  },
	{ 'name' : 'WebGL', 'uri' : 'http://www.smartjava.org/ltjs/chapter-04/05-mesh-face-material.html', 'description': 'just a simple demo where you can do the OpenGL at 60 FPS'  }
]

$('#search').click(function() {
	$.each(whitelist, function( index, value ) {
		$('#search_results').append('<li>' + value.name + ' -- ' + value.description + ' <input type="button" value="whitelist & launch"></li>');
	});
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