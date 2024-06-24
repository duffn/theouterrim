async function SetupSearch() {
  const searchInput = document.getElementById("search-input");
  const urlParams = new URLSearchParams(window.location.search);
  const querySearchString = urlParams.get("q");
  let searchString = searchInput.value;

  if (querySearchString && !searchString) {
    searchString = querySearchString;
    searchInput.value = searchString;
  }

  if (!searchString) searchInput.placeholder = "Search The Outer Rim...";
  const response = await fetch("/search.json");
  if (!response.ok) return;
  const searchData = await response.json();

  const simpleJekyllSearch = SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: document.getElementById("search-results-container"),
    searchResultTemplate:
      '<a href="{url}" class="list-group-item list-group-item-action flex-column align-items-start">' +
      '<div class="d-flex w-100 justify-content-between">' +
      '<p class="mb-1">{title}</p>' +
      '<small class="text-muted">{category}</small>' +
      "</div>" +
      "</a>",
    json: searchData,
    noResultsText: "No results found",
    limit: 50,
  });

  if (searchString) simpleJekyllSearch.search(searchString);
  searchInput.disabled = false;
  searchInput.focus();
}

SetupSearch();
