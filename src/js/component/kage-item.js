class KageItem extends HTMLElement {
    set kagel(kagel) {
        this._kagel = kagel;
        this.render();
    };

    render() {
        if (this._kagel.strThumb) {
            this.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${this._kagel.strThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${this._kagel.strEvent}</p>
                        <p class="card-text">${this._kagel.strFilename}</p>
                    </div>
                </div>
            `;
        } else {
            this.innerHTML = '';
        }
    }
}

customElements.define('kage-item', KageItem)