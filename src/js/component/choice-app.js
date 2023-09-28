class ChoiceApp extends HTMLElement {
    connectedCallback() {
        this.render();
    };

    render() {
        this.innerHTML = `
            <div class="position-absolute top-50 start-50 translate-middle d-flex flex-column" id="choice-app">
                <h5 class="text-center">Silahkan pilih salah satu yang ingin anda cari</h5>

                <div class="d-flex flex-row mb-3 gap-3" id="choice">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckEvent">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Pencarian Pertandingan</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckPlayer">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Pencarian Pemain   </label>
                    </div>
                </div>
                    
                <button type="button" class="btn btn-outline-primary" id="buttonChoice">Pilih</button>
            </div>
            `;

            document.querySelector('#buttonChoice').addEventListener('click', () => {
                document.querySelector('search-kage').removeAttribute('hidden');
                document.querySelector('.text-center').innerHTML = 'Masukan pencarian yang anda inginkan';
                document.querySelector('#choice-app').setAttribute('hidden', 'true')
                document.querySelector('choice-app').setAttribute('hidden', 'true');
            })
    }
}

customElements.define('choice-app', ChoiceApp)