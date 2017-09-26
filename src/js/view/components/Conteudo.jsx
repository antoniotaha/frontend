import React from 'react'

export class Conteudo extends React.Component {

	render() {
		return (
			<div className='container conteudo is-vertical-flow is-full-height'>
				{this.props.children}
			</div>
		)
	}

}
