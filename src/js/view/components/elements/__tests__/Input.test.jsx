import * as React from 'react'
import * as C from 'view/components'
import { shallowRenderAndMatch } from 'setupTests'

describe('Input', () => {
	it('render', function () {
		shallowRenderAndMatch(<C.Input type='text' />)
	})

	it('Input com placeholder', function () {
		shallowRenderAndMatch(<C.Input type='text' placeholder='Teste' />)
	})
})
