import * as React from 'react'
import * as C from 'view/components'
import { shallowRenderAndMatch } from 'setupTests'

describe('Label', () => {
	it('render', () => {
		shallowRenderAndMatch(<C.Label />)
	})

	it('render custom classes', () => {
		shallowRenderAndMatch(<C.Label className='test' />)
	})

	it('render label com texto ', () => {
		shallowRenderAndMatch(<C.Label>Teste</C.Label>)
	})
})
