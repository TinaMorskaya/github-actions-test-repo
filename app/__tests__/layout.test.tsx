import { expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout';

vi.mock('next/font/google', () => ({
    Geist: () => ({
        className: 'mocked-font',
    }),
    Geist_Mono: () => ({
        className: 'mocked-font',
    }),
}));


test('RootLayout', () => {
    render(
        <RootLayout>
            <h1>
                Test
            </h1>
        </RootLayout>
    )
    expect(screen.getByRole('heading', {level: 1, name: 'Test'})).toBeDefined()
});