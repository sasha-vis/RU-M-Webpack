import { BaseComponent } from '@core';
import { Background, Controls, VolumeSlider } from '@components';
import styles from './App.module.css';

export class App extends BaseComponent {
	data: SoundData[];
	bg: Background;
	controls: Controls;
	volumeSlider: VolumeSlider;

	constructor(data: SoundData[]) {
		super('div', { className: styles.app });
		this.data = data;

		this.bg = new Background();

		this.controls = new Controls({
			items: data,
			onToggle: (item: SoundData) => this.bg.updateBackground(item.bgImage),
		});

		this.volumeSlider = new VolumeSlider({
			onChange: (vol: number) => this.controls.updateVolume(vol),
		});

		this.render();
	}

	override render() {
		this.el.innerHTML = `<h1 class="${styles.title}">Weather Sounds</h1>`;
		this.el.append(
			this.controls.getElement(),
			this.volumeSlider.getElement(),
			this.bg.getElement(),
		);
	}
}
