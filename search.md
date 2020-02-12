---
---

<div id="search-container">
<input type="text" id="search-input" placeholder="search...">
<ul id="results-container"></ul>
</div>

<script src="https://unpkg.com/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>

<script>
    //https://github.com/christian-fei/Simple-Jekyll-Search/wiki#options
    SimpleJekyllSearch( {
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: 'search.json'
    } );
</script>