import data from './data/sounds';
import { App } from './App';
import './index.css';

const app: App = new App(data);
document.body.appendChild(app.getElement());
