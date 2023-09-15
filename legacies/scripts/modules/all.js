
async function showAbout() {
    let html = "<p><strong>Error getting file: about.md</strong></p>";
    await fetch("/public/about.md").then(x => x.text()).then((y) => {
        html = marked.parse(y, {
            renderer: new marked.Renderer(),
            gfm: true,
            extra: true,
            smartLists: true,
            smartypants: false,
            pedantic: false
        });
        return html;
    });
    document.getElementById("preview").innerHTML = html;
}

async function showBook(fName) {
    let html = "<p><strong>Error getting file: " + fName + "</strong></p>";
    await fetch("/book/" + fName).then(x => x.text()).then((y) => {
        html = marked(y, {
            renderer: new marked.Renderer(),
            gfm: true,
            extra: true,
            tables: true,
            smartLists: true,
            smartypants: false,
            breaks: false,
            pedantic: false
        });
        return html;
    });
    document.getElementById("preview").innerHTML = html;
}

var bar = new nw.Menu({type:'menubar'});

var menu = new nw.Menu();
menu.append(new nw.MenuItem({
    label: 'Pendahuluan',
    click: function() {
        showBook("intro.md");
    }
}));

menu.append(new nw.MenuItem({
    label: 'Load...',
    click: function() {
        let bab = prompt("Bab:", "1");
        if (bab != null) {
            showBook("bab" + bab + ".md");
        }
    }
}));

menu.append(new nw.MenuItem({
    label: 'Last Edit',
    click: function() {
        showBook("bab12.md");
    }
}));

menu.append(new nw.MenuItem({
    label: 'About...',
    click: function() {
        showAbout();
    }
}));

bar.append(new nw.MenuItem({
    label: 'Chapters',
    submenu: menu
}));

/*
document.getElementById("preview").addEventListener("contextmenu", function(ev) {
    ev.preventDefault();
    menu.popup(ev.x, ev.y);
});
*/
nw.Window.get().menu = bar;

fetch("/book/Daftar Istilah.md")
.then(x => x.text())
.then((y) => {
    document.getElementById("preview").innerHTML = marked.parse(y, { 
        renderer: new marked.Renderer(),
        gfm: true,
        extra: true,
        smartLists: true,
        smartypants: false,
        tables: true,
        sanitize: false,
        pedantic: false,
        breaks: false
    });
});

