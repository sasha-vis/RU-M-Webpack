import cloudRainIcon from '@assets/icons/cloud-rain.svg';
import sunIcon from '@assets/icons/sun.svg';
import cloudSnowIcon from '@assets/icons/cloud-snow.svg';
import rainyBg from '@assets/rainy-bg.jpg';
import summerBg from '@assets/summer-bg.jpg';
import winterBg from '@assets/winter-bg.jpg';
import rainSound from '@assets/sounds/rain.mp3';
import summerSound from '@assets/sounds/summer.mp3';
import winterSound from '@assets/sounds/winter.mp3';

const sounds: SoundData[] = [
	{
		soundKey: 'rain',
		icon: cloudRainIcon,
		bgImage: rainyBg,
		audioSrc: rainSound,
	},
	{
		soundKey: 'summer',
		icon: sunIcon,
		bgImage: summerBg,
		audioSrc: summerSound,
	},
	{
		soundKey: 'winter',
		icon: cloudSnowIcon,
		bgImage: winterBg,
		audioSrc: winterSound,
	},
];

export default sounds;
