import 'bootstrap/dist/css/bootstrap.min.css';
import 'regenerator-runtime';
import 'jquery';

import './css/style.css';
import './js/component/search-kage.js';
import './js/component/title-header.js';
import './js/component/choice-app.js';
import './js/component/kage-app.js';
import './js/component/kage-list.js';
import mainKage from './js/view/kage';

document.addEventListener('DOMContentLoaded', mainKage);
