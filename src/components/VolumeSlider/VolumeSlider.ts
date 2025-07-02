import { BaseComponent } from '@core';

export class VolumeSlider extends BaseComponent<VolumeSliderProps> {
	constructor(props: VolumeSliderProps) {
		super('div');
		this.props = props;
		this.render();
		this.initEvents();
	}

	initEvents() {
		const input = this.el.querySelector('input');
		if (!input) return;

		input.addEventListener('input', (e) => {
			const target = e.target as HTMLInputElement;
			const value = Number(target.value);
			this.props.onChange(value / 100);
		});
	}

	override render() {
		this.el.innerHTML = '<input type="range" min="0" max="100" value="100" />';
	}
}
