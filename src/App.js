import { BaseComponent } from './core/index.js';
import { Background, Controls, VolumeSlider } from './components/index.js';
import * as styles from './App.module.css';

export class App extends BaseComponent {
	constructor(data) {
		super('div', { className: styles.app });
		this.data = data;

		this.bg = new Background();

		this.controls = new Controls({
			items: data,
			onToggle: (item) => this.bg.updateBackground(item.bgImage),
		});

		this.volumeSlider = new VolumeSlider({
			onChange: (vol) => this.controls.updateVolume(vol),
		});

		this.render();
	}

	render() {
		this.el.innerHTML = `<h1 class="${styles.title}">Weather Sounds</h1>`;
		this.el.append(
			this.controls.getElement(),
			this.volumeSlider.getElement(),
			this.bg.getElement(),
		);
	}
}
