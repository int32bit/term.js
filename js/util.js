String.prototype.endswith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
String.prototype.startswith = function (prefix) {
        return this.indexOf(prefix) == 0;
}
String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}

String.prototype.trim = function() 
{
    return this.replace(/^\s+|\s+$/g, '');
}

function blink(obj)
{
	setInterval(function(){
		obj.toggle();
	},500);
}

function getKey(ev)
{
	return ev.keyCode || ev.which;
}

function paddingLeft(str, len, c)
{
    var len = len || 5;
    var c = c || ' ';
    var diff = len - str.length;
    return c.repeat(diff) + str;
}

function open_url(url)
{
    window.open(url, "_blank");
    return url;
}
