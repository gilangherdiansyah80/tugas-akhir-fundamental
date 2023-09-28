class SearchKage extends HTMLElement {
    connectedCallback() {
        this.render();
    };

    set eventClick(event) {
        this._eventClick = event;
        this.render();
    }

    get value() {
        return this.querySelector('#elementInput').value;
    }

    render() {
        this.innerHTML = `
            <form class="d-flex p-2 g-col-6" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="elementInput">
                <button class="btn btn-outline-primary" type="submit" id="elementButton">Search</button>
            </form>
        `;

        this.querySelector('#elementButton').addEventListener('click', this._eventClick)
    }
}

customElements.define('search-kage', SearchKage);