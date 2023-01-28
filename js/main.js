const form = document.querySelector("#form");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const description = document.querySelector("#description");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchInputValue = searchInput.value;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInputValue}`)
        .then(response => response.json())
        .then(data => renderData(data))
        .catch(err => renderError(err))

        function renderData(data) {
            description.innerHTML = `<dl>
                    <dt class="data-termin">${data[0].word}</dt>
                    <dd class="dd-first">
                    ${data[0].meanings[0].definitions[0].definition}
                    </dd>

                </dl>
                <audio controls src="${data[0].phonetics[0].audio}">PLAY THE WORD</audio> `
        }

        function renderError(err) {
            console.error(err);
            description.innerHTML = `<h2>Not Found!!!!</h2>`
        }

        e.target.reset();

})