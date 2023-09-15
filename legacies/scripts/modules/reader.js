
previewData = () => {
    let html = marked.parse(editor.getValue(), {
        gfm:true,
        highlight: function(code, lang, cb) {
            let res = hljs.highlight(code, {language: lang}).value;
            if (cb) {
                cb(null, res);
            }
            return res;
        }
    });
    document.getElementById("preview").innerHTML = html;
}

openLocal = async () => {
    const options = {
        types: [
            {
                description: "All Markdown files",
                accept: {
                    'text/markdown': [ '.md' ]
                }
            },
            {
                description: "Plain text files",
                accept: {
                    'text/plain': [ '.txt' ]
                }
            }
        ],
        excludeAcceptAllOptions: true,
        multiple: false
    };

    let filehandle;
    [filehandle] = await window.showOpenFilePicker(options);
    await filehandle.getFile()
        .then((response) => response.text())
        .then((txt) => {
            let html = marked.parse(txt, {
                gfm: true,
                highlight: function(code, lang, cb) {
                    let res = hljs.highlight(code, {language: lang}).value;
                    if (cb) {
                        cb(null, res);
                    }
                    return res;
                }
            });
            document.getElementById('preview').innerHTML = html;            
        });
}

saveLocal = async () => {
    const options = {
        types: [
            {
                description: 'All Markdown Files',
                accept: {
                    'text/markdown': ['.md'],
                },
            },
        ],
    };
    
    const handle = await window.showSaveFilePicker(options);
    const writable = await handle.createWritable();
    // Write the contents of the file to the stream.
    await writable.write(editor.getValue());
    // Close the file and write the contents to disk.
    await writable.close();
}

