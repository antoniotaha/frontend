import * as React from 'react'
import * as C from 'view/components'
import { shallowRenderAndMatch } from 'setupTests'

describe('Button', () => {
	it('deve renderizar corretamente', function () {
		shallowRenderAndMatch(<C.Button />)
	})

	it('deve renderizar button em loading', function () {
		shallowRenderAndMatch(<C.Button loading={true} />)
	})

})
