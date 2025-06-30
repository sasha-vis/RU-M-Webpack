export class BaseComponent {
	constructor(tag = 'div', { className } = {}) {
		this.el = document.createElement(tag);
		if (className) this.el.className = className;

		this.state = {};
		this.props = {};
	}

	setState(newState) {
		this.state = { ...this.state, ...newState };
		this.render();
	}

	setProps(newProps) {
		this.props = { ...this.props, ...newProps };
		this.render();
	}

	getElement() {
		return this.el;
	}

	render() {
		throw new Error(`"render" must be implemented in ${this.constructor.name}`);
	}
}
