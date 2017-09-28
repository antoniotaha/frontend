import * as React from 'react'
import * as C from 'view/components'
import { shallowRenderAndMatch } from 'setupTests'

describe('TextInput', () => {
	it('TextInput sem label', function () {
		shallowRenderAndMatch(<C.TextInput />)
	})

	it('TextInput com label', function () {
		shallowRenderAndMatch(<C.TextInput label='Teste' placeholder='Teste' />)
	})
})
