import { describe, expect, it } from 'vitest';

import { MockPhotosView } from '@/__mocks__/discoverViews.mock';
import { render } from '@testing-library/react';
import { OPTIONS_ORDER_BY } from '~constants/unsplash.const';

describe('photos', () => {
	it('controls photos', () => {
		const wrapperPhotosPage = render(<MockPhotosView />);
		/**
		 * controls page
		 */
		const page = wrapperPhotosPage.getByText('Page');
		const controlNextPage = wrapperPhotosPage.getByTestId('control-page-next');
		const controlPrevPage = wrapperPhotosPage.getByTestId('control-page-prev');

		expect(page).toBeDefined();
		expect(controlNextPage).toBeDefined();
		expect(controlPrevPage).toBeDefined();

		/**
		 * controls Order By
		 */

		const controlOrderByLatest = wrapperPhotosPage.getByText(
			OPTIONS_ORDER_BY._LATESTS_
		);
		const controlOrderByOldest = wrapperPhotosPage.getByText(
			OPTIONS_ORDER_BY._OLDEST_
		);
		const controlOrderByPopular = wrapperPhotosPage.getByText(
			OPTIONS_ORDER_BY._POPULAR_
		);

		expect(controlOrderByLatest).toBeDefined();
		expect(controlOrderByOldest).toBeDefined();
		expect(controlOrderByPopular).toBeDefined();

		/**
		 * controls search
		 */

		const controlSearch = wrapperPhotosPage.getByPlaceholderText('coffee');

		expect(controlSearch).toBeDefined();
	});
	it('title photos', () => {
		const wrapperPhotosPage = render(<MockPhotosView />);

		/**
		 * title Photos
		 */
		const titlePhotos = wrapperPhotosPage.getByText('Discover More Photos');

		expect(titlePhotos).toBeDefined();
	});
});
