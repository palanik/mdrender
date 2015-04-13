mdrender
========

Chrome Extension to render GitHub style Markdown files (.md)


Installing
----------

1. Download (& unzip) or clone this repo.
2. On Chrome browser, open [chrome://extensions/](chrome://extensions/).
3. Enable `Developer mode` on top right.
4. Click `Load unpacked extension...` button and choose the repo folder.
5. Remember to check `Allow access to file URLs` option.

Notes
-----

- Works only with file:/// or localhost .md files.
- To view original format, choose view source.
- Uses [GitHub Markdown API](https://developer.github.com/v3/markdown/) to render HTML. That means, requires to connect to internet.

License
-----

[MIT](LICENSE)
