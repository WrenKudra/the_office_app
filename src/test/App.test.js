import { render, screen } from '@testing-library/react';
import { Layout } from "../components/Layout";
import "@testing-library/jest-dom/extend-expect";

test('should render layout component', () => {
    render(<Layout/>);
    const layoutElement = screen.getByTestId('layout');
    expect(layoutElement).toBeInTheDocument();
})