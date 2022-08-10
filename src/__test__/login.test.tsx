import { render } from '@testing-library/react';

import { describe, it, expect } from 'vitest';

import Login from '~pages/Login.view';

describe('Login Form', () => {
	it('Should Render Correctly of Login', () => {
		const container = render(<Login />);
		expect(container).toBeTruthy();
	});
});
