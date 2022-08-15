import { MockCollectionsView } from '@/__mocks__/discoverViews.mock';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('collections page ', () => {
	it('controls view colllection', () => {
		const wrapperCollectionPage = render(<MockCollectionsView />);

		/**
		 * controls page
		 */
		const controlPage = wrapperCollectionPage.getByText('Page');

		const controlNextPage =
			wrapperCollectionPage.getByTestId('control-page-next');
		// console.log(
		// 	'🚀 ~ file: collectionView.test.tsx ~ line 16 ~ it ~ controlNextPage',
		// 	prettyDOM(controlNextPage)
		// );

		const controlPreviousPage =
			wrapperCollectionPage.getByTestId('control-page-prev');
		// console.log(
		// 	'🚀 ~ file: collectionView.test.tsx ~ line 19 ~ it ~ controlPreviousPage',
		// 	prettyDOM(controlPreviousPage)
		// );

		expect(controlPage).toBeDefined();
		expect(controlNextPage).toBeDefined();
		expect(controlPreviousPage).toBeDefined();

		/**
		 * contol search collections
		 *
		 */
		const controlSerch = wrapperCollectionPage.getByPlaceholderText('coffee');
		expect(controlSerch).toBeDefined();
	});

	it('Title', () => {
		const wrapperCollectionPage = render(<MockCollectionsView />);

		/**
		 * Title
		 */
		const title = wrapperCollectionPage.getByText('Discover More Collections');
		expect(title).toBeDefined();
	});
});
