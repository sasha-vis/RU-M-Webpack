export class BaseComponent<P = {}, S = {}> {
	el: HTMLElement;
	state: S;
	props: P;

	constructor(tag = 'div', { className }: { className?: string } = {}) {
		this.el = document.createElement(tag);
		if (className) this.el.className = className;

		this.state = {} as S;
		this.props = {} as P;
	}

	setState(newState: Partial<S>) {
		this.state = { ...this.state, ...newState };
		this.render();
	}

	setProps(newProps: Partial<P>) {
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
