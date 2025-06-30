import { BaseComponent } from '../../core/index.js';
import * as styles from './Controls.module.css';

export class Controls extends BaseComponent {
	constructor({ items, onToggle }) {
		super('div', { className: styles.controls });
		this.props = { items, onToggle };
		this.state = { activeKey: null, isPlaying: false };
		this.audio = new Audio();
		this.render();
		this.initEvents();
	}

	initEvents() {
		this.el.addEventListener('click', (e) => {
			const btn = e.target.closest('button[data-key]');
			if (!btn) return;

			const soundKey = btn.dataset.key;
			const item = this.props.items.find((i) => i.soundKey === soundKey);

			if (!item) return;

			const isSame = this.state.activeKey === soundKey;

			if (isSame) {
				this.audio.paused ? this.audio.play() : this.audio.pause();
			} else {
				this.audio.src = item.audioSrc;
				this.audio.volume = this.state.volume ?? 1;
				this.audio.play();
				this.setState({ activeKey: soundKey, isPlaying: true });
				this.props.onToggle(item);
			}
		});
	}

	updateVolume(value) {
		this.audio.volume = value;
		this.setState({ volume: value });
	}

	render() {
		this.el.innerHTML = this.props.items
			.map((item) => {
				const isActive = this.state.activeKey === item.soundKey;
				return `
					<button data-key="${item.soundKey}" class="${styles.soundButton} ${
					isActive ? 'active' : ''
				}" style="background-image: url(${item.bgImage})">
						<img src="${item.icon}" alt="${item.soundKey}" />
					</button>
				`;
			})
			.join('');
	}
}
