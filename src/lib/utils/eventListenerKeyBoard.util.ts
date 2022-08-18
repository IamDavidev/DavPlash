export function eventListenerKeyBoard(
	keys: [string, string],
	action: () => void
): void {
	if (!action) throw new Error('Action is not defined');
	if (!keys) throw new Error('Keys is not defined');

	document.addEventListener('keydown', e => {
		if ((e.key === keys[0], e.key === keys[1])) {
			e.preventDefault();
			action();
		}
	});
}
