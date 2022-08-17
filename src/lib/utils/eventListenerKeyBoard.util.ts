export function eventListenerKeyBoard(
	keys: [string, string],
	action: () => void
): void {
	document.addEventListener('keydown', e => {
		if ((e.key === keys[0], e.key === keys[1])) {
			e.preventDefault();
			action();
		}
	});
}
