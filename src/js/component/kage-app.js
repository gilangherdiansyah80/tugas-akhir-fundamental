class KageApp extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="content">
                <h5>Selamat Datang di Kage Cinema. Aplikasi untuk mencari film kesayangan anda</h5>
                <h6>Tunggu sebentar selama <span class="count">5</span></h6>
            </div>
        `;
    }
}

customElements.define('kage-app', KageApp);