import { BaseComponent } from '@core';
import styles from './Background.module.css';

export class Background extends BaseComponent {
	constructor() {
		super('div', { className: styles.backgroundBlur });
	}

	updateBackground(imageUrl: string) {
		this.el.style.backgroundImage = `url(${imageUrl})`;
	}
}
