import * as React from 'react'
import * as C from 'view/components'
import { shallowRenderAndMatch } from 'setupTests'

describe('TextArea', () => {
	it('TextArea sem label', function () {
		shallowRenderAndMatch(<C.TextArea />)
	})

	it('TextArea com label', function () {
		shallowRenderAndMatch(<C.TextArea label='Teste' placeholder='Teste' name='teste' />)
	})
})
