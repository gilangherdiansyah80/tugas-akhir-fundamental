class TitleHeader extends HTMLElement {
    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `
            <h1>Kage Cinema</h1>
        `;
    }
}

customElements.define('title-header', TitleHeader);