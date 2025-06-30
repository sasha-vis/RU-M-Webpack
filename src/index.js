import data from './data/sounds.js';
import { App } from './App.js';
import './index.css';

const app = new App(data);
document.body.appendChild(app.getElement());
