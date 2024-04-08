import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react';

import Edit from '../edit.js'; // Import your Gutenberg block component

// Mock the useSelect hook
jest.mock('@wordpress/data', () => ({
    useSelect: jest.fn()
}));

describe('Gutenberg Block Rendering', () => {
    afterEach(cleanup);

    test('renders block with provided attributes', () => {
        // Mock the return value of useSelect
        const mockPost = { id: 1, title: 'Mocked Post' };
        useSelect.mockReturnValueOnce(mockPost);
        // Define attributes to pass to the block
        const attributes = {
            name: 'John Doe',
            position: 'Developer',
            content: 'Lorem ipsum dolor sit amet.',
        };

        // Render the block with provided attributes
        const { getByText } = render(<Edit attributes={attributes} />);

        // Assert that block elements with provided attribute values are present
        expect(getByText(attributes.name)).toBeInTheDocument();
        expect(getByText(attributes.position)).toBeInTheDocument();
        expect(getByText(attributes.content)).toBeInTheDocument();
    });

    // Add more test cases for different scenarios...
});
