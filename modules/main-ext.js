
async function showBook(fname) {
    let html = "<p><strong>Error getting file: " + fname + "</strong></p>";

    chrome.runtime.getPackageDirectoryEntry(function(root) {
        root.getFile("sdyxz/" + fname, {}, async function(fileEntry) {
            fileEntry.file(function(file) {
                var reader = new FileReader();
                reader.onloadend = async function(e) {
                    html = marked(this.result, {
                        renderer: new marked.Renderer(),
                        gfm: true,
                        extra: true,
                        tables: true,
                        smartLists: true,
                        smartypants: false,
                        breaks: false,
                        pedantic: false
                    });
                    document.getElementById('preview').innerHTML = html;
                };
                reader.readAsText(file);
            }, function(e) {
                html = "<p>Error at fileEntry.file()</p>";
            });
        }, function(e) {
            html = "<p>Error at root.getFile()</p>"
        });
    });
    //document.getElementById("preview").innerHTML = html;
}

document.getElementById("btnNext").addEventListener("click", async (elm, ev) => {
    let html = "<p><strong>Error getting file: test2.md</strong></p>";
    chrome.runtime.getPackageDirectoryEntry(function(root) {
        root.getFile("sdyxz/test2.md", {}, async function(fileEntry) {
            fileEntry.file(function(file) {
                var reader = new FileReader();
                reader.onloadend = async function(e) {
                    html = marked(this.result, {
                        renderer: new marked.Renderer(),
                        gfm: true,
                        extra: true,
                        tables: true,
                        smartLists: true,
                        smartypants: false,
                        breaks: false,
                        pedantic: false
                    });
                    document.getElementById('preview').innerHTML = html;
                };
                reader.readAsText(file);
            }, function(e) {
                html = "<p>Error at fileEntry.file()</p>";
            });
        }, function(e) {
            html = "<p>Error at root.getFile()</p>"
        });
    });    
});

showBook("test1.md");
