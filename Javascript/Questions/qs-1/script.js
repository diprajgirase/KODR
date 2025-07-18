    let bookmarks = [];

    function saveBookmark() {
        const title = document.getElementById('titleInput').value;
        const url = document.getElementById('urlInput').value;

        if (!url.startsWith('http')) {
            alert('URL must start with http or https');
            return;
        }

        const bookmark = { title, url };
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        renderBookmarks();

        document.getElementById('titleInput').value = '';
        document.getElementById('urlInput').value = '';
    }

    function renderBookmarks() {
        const list = document.getElementById('bookmarkList');
        list.innerHTML = '';
        bookmarks.forEach(bm => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${bm.url}" target="_blank">${bm.title}</a>`;
            list.appendChild(li);
        });
    }