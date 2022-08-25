import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MockUsersView } from '@/__mocks__/discoverViews.mock';

describe('users page', (): void => {
	it('controls users', (): void => {
		const wrapperUsersPage = render(<MockUsersView />);

		const controlPage = wrapperUsersPage.getByText('Page');
		const controlNextPage = wrapperUsersPage.getByTestId('control-page-next');
		const controlPrevPage = wrapperUsersPage.getByTestId('control-page-prev');

		expect(controlPage).toBeDefined();
		expect(controlNextPage).toBeDefined();
		expect(controlPrevPage).toBeDefined();

		const contorlSearch = wrapperUsersPage.getByPlaceholderText('coffee');
		expect(contorlSearch).toBeDefined();
	});

	it('title users', (): void => {
		const wrapperUsersPage = render(<MockUsersView />);

		const titleUsers = wrapperUsersPage.getByText('Discover More Users');

		expect(titleUsers).toBeDefined();
	});

	it('true is true', (): void => {
		expect(true).toBe(true);
	});
});
