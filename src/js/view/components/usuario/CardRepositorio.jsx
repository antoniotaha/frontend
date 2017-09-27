import React from 'react'
import * as C from 'view/components'
export class CardRepositorio extends React.Component {

	render() {
		const linkRepositorio = this.props.linkRepositorio

		return (
			<C.Card>
				<C.Label>{this.props.nomeRepositorio}</C.Label>
				<a className='button card-button' href={linkRepositorio} disabled={!linkRepositorio || linkRepositorio === ''} target="_blank">Repositório</a>
				<a className='button card-button' href={`${linkRepositorio}/issues`} disabled={this.props.totalIssues === 0} target="_blank">{`Issues(${this.props.totalIssues})`}</a>
			</C.Card >
		)
	}

}

