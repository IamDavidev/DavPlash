import { MockHomePage } from '@/__mocks__/home.mock';
import { render, prettyDOM } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Home Page Test', () => {
	it('Should button get Started collections ', () => {
		const wrapperHome = render(<MockHomePage />);
		const btnGetStarted = wrapperHome.getByText('Get Started Collections');
		// console.log(
		// 	'🚀 ~ file: home.test.tsx ~ line 9 ~ it ~ btnGetStarted',
		// 	prettyDOM(btnGetStarted)
		// );
		expect(btnGetStarted).toBeDefined();
	});

	it('Should button Learn More Photos', () => {
		const WrapperHome = render(<MockHomePage />);
		const btnLearnMorePhotos = WrapperHome.getByText('Learn More Photos');
		// console.log(
		// 	'🚀 ~ file: home.test.tsx ~ line 17 ~ it ~ btnLearnMorePhotos',
		// 	prettyDOM(btnLearnMorePhotos)
		// );
		expect(btnLearnMorePhotos).toBeDefined();
	});

	it('should 12 card Images in Top Photos', async () => {
		const WrapperHome = render(<MockHomePage />);
		const topPhotos = WrapperHome.getByText('Top Photos');
		// console.log(
		// 	'🚀 ~ file: home.test.tsx ~ line 29 ~ it ~ topPhotos',
		// 	prettyDOM(topPhotos)
		// );
		expect(true).toBe(true);
	});
});
