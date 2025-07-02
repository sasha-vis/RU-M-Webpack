import { BaseComponent } from '@core';
import styles from './Controls.module.css';

export class Controls extends BaseComponent<ControlsProps, ControlsState> {
	audio: HTMLAudioElement;

	constructor(props: ControlsProps) {
		super('div', { className: styles.controls });
		this.props = props;
		this.state = { activeKey: null, isPlaying: false, volume: 0.5 };
		this.audio = new Audio();
		this.render();
		this.initEvents();
	}

	initEvents() {
		this.el.addEventListener('click', (e) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;

			const btn = target.closest('button[data-key]') as HTMLButtonElement | null;
			if (!btn) return;

			const soundKey = btn.dataset.key;
			if (!soundKey) return;

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

	updateVolume(value: number) {
		this.audio.volume = value;
		this.setState({ volume: value });
	}

	override render() {
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
