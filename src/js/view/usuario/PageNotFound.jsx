import React from 'react'
import * as C from 'view/components'
import usuarioNotFound from 'usuario-nao-encontrado.svg'


export default class PageNotFound extends React.Component {

	render() {
		return (
			<div className='container not-found is-vertical-flow is-full-height is-children-center'>
				<C.Image src={usuarioNotFound} size='128x128' />
				<span className='erro'>Usuário não encontrado</span>
				<span className='info'>Pesquise novamente</span>
			</div >
		)
	}

}

