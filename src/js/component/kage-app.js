class KageApp extends HTMLElement {
    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `
            <div class="position-absolute top-50 start-50 translate-middle">
                <h5 class="text-center">Selamat Datang di Kage Cinema. Aplikasi untuk mencari film kesayangan anda</h5>
                <h6 class="text-center">Tunggu selama <span class="text-danger" id="count">5</span> detik</h6>
            </div>
        `;

        const countdown = (count) => {
            const countElement = document.querySelector('#count');
            if (count === 0) {
                // Ketika  hitungan mencapai 0, sembunyikan elemen count
                document.querySelector('choice-app').removeAttribute('hidden')
                document.querySelector('kage-app').setAttribute('hidden', 'true')
                // Setelah ini, Anda dapat menjalankan tindakan apa pun yang diperlukan
            } else {
                // Tampilkan angka hitungan saat ini di elemen count
                countElement.textContent = count;
                // Hitung mundur dengan mengurangi 1 setiap 1 detik
                setTimeout(() => countdown(count - 1), 1000);
            }
        };

        countdown(5);
    }
}

customElements.define('kage-app', KageApp);