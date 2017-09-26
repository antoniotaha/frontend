import React from 'react'
import * as C from 'view/components'
export class CardRepositorio extends React.Component {

	render() {

		return (
			<C.Card>
				<C.Label>{this.props.nomeRepositorio}</C.Label>
				<C.Button className='card-button'>Repositório</C.Button>
				<C.Button className='card-button'>Issues</C.Button>
			</C.Card >
		)
	}

}

