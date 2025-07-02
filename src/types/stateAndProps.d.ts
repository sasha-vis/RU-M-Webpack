declare interface VolumeSliderProps {
	onChange: (vol: number) => void;
}

declare interface ControlsProps {
	items: SoundData[];
	onToggle: (item: SoundData) => void;
}

declare interface ControlsState {
	activeKey: string | null;
	isPlaying: boolean;
	volume: number;
}
