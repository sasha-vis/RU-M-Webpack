import { BaseComponent } from '../../core/index.js';
import * as styles from './Background.module.css';

export class Background extends BaseComponent {
	constructor() {
		super('div', { className: styles.backgroundBlur });
	}

	updateBackground(imageUrl) {
		this.el.style.backgroundImage = `url(${imageUrl})`;
	}
}
