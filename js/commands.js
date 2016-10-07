function do_help(args)
{
    var help = "<span class='blue'>Keyboard Shortcuts:</span> <br/>";
    help += "&nbsp;".repeat(4) + "<span class='highlight'>Ctrl + L</span>" + "&nbsp;".repeat(4) + "Clears the Screen, similar to the 'clear' command.</br/>";
    help += "&nbsp;".repeat(4) + "<span class='highlight'>Ctrl + H</span>" + "&nbsp;".repeat(4) + "Delete character before the cursor, same as backspace.</br/>";
    help += "&nbsp;".repeat(4) + "<span class='highlight'>Ctrl + U</span>" + "&nbsp;".repeat(4) + "Clears the line before the cursor position.</br/>";
    help += "&nbsp;".repeat(4) + "<span class='highlight'>Ctrl + P</span>" + "&nbsp;".repeat(4) + "Previous command in history.</br/>";
    help += "&nbsp;".repeat(4) + "<span class='highlight'>Ctrl + N</span>" + "&nbsp;".repeat(4) + "Next command in history.</br/>";
    help += "&nbsp;".repeat(4) + "<span class='highlight'>Ctrl + D</span>" + "&nbsp;".repeat(4) + "Exit the terminal.</br/>";

    help += "<span class='blue'>Available Commands:</span> <br/>";
    for (i in commands) {
        help += "<span class='dir'>" + i + "</span> ";
    }
    return help;
}

function do_cd(args)
{
    return "";
}

function do_about(args)
{
    var output = "termjs: a simplest web terminal implemented by js<br/>";
    output += "Author: int32bit<br/>";
    output += "License: " + "<a href='LICENSE'>MIT license</a>" + "<br/>";
    output += "Version: " + "1.0-beta" + "<br/>";
    output += "Last update: " + "2016-10-03" + "<br/>";
    output += "Copyright &copy 2016, All rights reserved.";
    return output;
}

function do_date(args)
{
    return new Date();
}

function do_clear(args)
{
    $(".output").remove();
    return "";
}

function do_history(args)
{
    var h = ""
    for (var i in history_list) {
        h += "<div>" + i + "&nbsp;&nbsp;" + history_list[i] + "</div>";
    }
    return h;
}

function do_close(args)
{
    
    window.open('','_self').close();
    return "";
}

function do_echo(args, input)
{
    var input = input.slice("echo".length).trim(); // trim is self-defined function
    input = input.replace(/^"/, "").replace(/"$/, "");
    input = input.replace(/^'/, "").replace(/'$/, "");
    return input;
}

function do_exit(args)
{
    $("#terminal").fadeOut("slow");
    return "";
}

function do_reload(args)
{
    top.location.reload();
    return "";
}

function do_ls(args)
{
    var output = "";
    output += "<span class='green'>a.out</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='pink'>bg.png</span>&nbsp;&nbsp;&nbsp;&nbsp;";
    output += "<span class='blue'>css</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='white'>helloworld.c</span>&nbsp;&nbsp;&nbsp;&nbsp;";
    output += "<span class='white'>index.html</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='blue'>js</span>&nbsp;&nbsp;&nbsp;&nbsp;";
    return output;
}

function do_colors(args)
{
    var output = "";
    output += "<div class='green'>green</div>";
    output += "<div class='blue'>blue</div>";
    output += "<div class='pink'>pink</div>";
    output += "<div class='highlight'>highlight</div>";
    output += "<div class='white'>white</div>";
    return output;
}

function do_demo(args)
{
    return "This is a demo, you can add your own functions easily!"
}

function do_bg(args)
{
    switch_background(args);
    return "";
}
