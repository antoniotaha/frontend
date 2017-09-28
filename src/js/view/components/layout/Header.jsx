import React from 'react'
import * as C from 'view/components'

export class Header extends React.Component {

	constructor() {
		super()
		this.state = {
			username: ''
		}
	}

	handleChangeUsuario(event) {
		this.setState({ 'username': event.target.value })
	}

	render() {
		return (
			<div className='header'>
				<div className='container'>
					<h1 className='title'>Github</h1>
					<C.Columns>
						<C.Column size='3' position='4'>
							<C.TextInput value={this.state.username} name='search' placeholder='Buscar usuário' onChange={this.handleChangeUsuario.bind(this)} />
						</C.Column>
						<C.Column >
							<C.Button type='primary' loading={this.props.loadingSearch} onClick={() => this.props.onClickBuscar(this.state.username)}>Buscar</C.Button>
						</C.Column>
					</C.Columns>
				</div>
			</div>
		)
	}

}
