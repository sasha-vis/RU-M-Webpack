import { BaseComponent } from '../../core/index.js';

export class VolumeSlider extends BaseComponent {
	constructor({ onChange }) {
		super('div');
		this.props = { onChange };
		this.render();
		this.initEvents();
	}

	initEvents() {
		this.el.querySelector('input').addEventListener('input', (e) => {
			const value = +e.target.value;
			this.props.onChange(value / 100);
		});
	}

	render() {
		this.el.innerHTML = '<input type="range" min="0" max="100" value="100" />';
	}
}
