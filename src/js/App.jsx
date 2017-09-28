import React, { Component } from 'react'
import * as C from 'view/components'
import { getUsuario, getRepositorios } from 'AppContainer'
import UsuarioView from 'view/usuario/UsuarioView'
import PageNotFound from 'view/usuario/PageNotFound'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {

	constructor() {
		super()
		this.state = {
			usuarioEncontrado: undefined,
			loadingSearch: false,
			repositorios: [],
			renderPageNotFound: false
		}

	}

	handleClickBuscar(username) {
		this.setState({ 'loadingSearch': true }, () => {
			getUsuario(username).then((resultado) => {
				getRepositorios(username).then((repositorios) => {
					this.setState({
						'usuarioEncontrado': resultado.data,
						'repositorios': repositorios.data,
						'loadingSearch': false,
						'renderPageNotFound': false
					})
				})
			}).catch(() => {
				this.setState({
					'loadingSearch': false,
					'usuarioEncontrado': undefined,
					'renderPageNotFound': true
				})
			})
		})

	}

	render() {
		const usuarioEncontrado = this.state.usuarioEncontrado
		const repositorios = this.state.repositorios

		return (
			<Router>
				<div className='is-vertical-flow is-full-height'>
					<C.Header onClickBuscar={this.handleClickBuscar.bind(this)} loadingSearch={this.state.loadingSearch} />
					<Route exact path="/" render={(props) => (
						this.state.renderPageNotFound ? (
							<Redirect to="/usuarioNotFound" />
						) : (
							<UsuarioView {...props} usuarioEncontrado={usuarioEncontrado} repositorios={repositorios} />
						)
					)} />
					<Route path="/usuarioNotFound" render={(props) => (
						!this.state.renderPageNotFound ? (
							<Redirect to="/" />
						) : (
							<PageNotFound />
						)
					)} />
				</div>
			</Router>
		)
	}
}

export default App
