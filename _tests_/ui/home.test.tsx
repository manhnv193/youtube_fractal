import { test, describe } from '@jest/globals';
import Page from '@/app/(website)/(pages)/(home)/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Unit Test UI', () => {
    test('Home Page', () => {
        render(<Page />);

        expect(screen.getByRole('heading')).toHaveTextContent('heading');
    });
});