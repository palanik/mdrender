(function(doc, gitMDUrl) {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', gitMDUrl, true);

    var payload = {
      "text": doc.body.innerText,
      "mode": "gfm",
      "context": "github/gollum"
    };

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var css = doc.createElement('link');
                css.rel = 'stylesheet';
                css.href = chrome.extension.getURL('git-markdown.css');
                doc.head.appendChild(css);
                doc.body.innerHTML = '<article class="markdown-body entry-content">' + xhr.responseText + '</article>';
            } else {
                console.log(xhr.statusText);
            }
        }
    };

    xhr.send(JSON.stringify(payload));
    
}(document, 'https://api.github.com/markdown'));