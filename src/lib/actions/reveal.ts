type RevealOptions = IntersectionObserverInit & {
	once?: boolean;
};

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { once = true, root, rootMargin, threshold = 0.12 } = options;

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('visible');
		return {
			destroy() {}
		};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;

				node.classList.add('visible');

				if (once) {
					observer.unobserve(node);
				}
			}
		},
		{ root, rootMargin, threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
