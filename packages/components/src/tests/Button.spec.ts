import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import Button from '$lib/Button.svelte'

test('Button Render', () => {
	render(Button, { props: { color: 'brand' } })
	expect(screen.getByRole('button').innerText).toBe(' Button')
})
