import React, { Component } from 'react'
import * as C from 'view/components'
import { getUsuario, getRepositorios, saveAnotacao } from 'AppContainer'

class App extends Component {

	constructor() {
		super()
		this.state = {
			activePage: 1,
			anotacao: '',
			usuarioEncontrado: undefined,
			loadingSearch: false,
			offsetRepositorio: 0,
			repositorios: []
		}
	}

	handleClickBuscar(username) {
		this.setState({ 'loadingSearch': true })
		getUsuario(username).then((resultado) => {
			this.setState({ 'usuarioEncontrado': resultado.data })
			getRepositorios(username).then((repositorios) => {
				this.setState({
					'repositorios': repositorios.data,
					'loadingSearch': false
				})
			})
		}).catch(() => {
			this.setState({ 'loadingSearch': false })
		})
	}

	handleChangeAnotacao(anotacao) {
		this.setState({
			'anotacao': anotacao
		})
	}

	handleChangePage(pageNumber) {
		this.setState({
			'activePage': pageNumber,
			'offsetRepositorio': (pageNumber - 1) * 3
		})
	}

	render() {
		const usuarioEncontrado = this.state.usuarioEncontrado
		let offset = this.state.offsetRepositorio
		let cards = []
		let hasRepositorio = offset < this.state.repositorios.length
		let cont = 0

		while (hasRepositorio) {
			let repositorio = this.state.repositorios[offset]
			cards[cont] = <C.CardRepositorio key={offset} nomeRepositorio={repositorio && repositorio.name} />
			cont++
			offset++
			hasRepositorio = cont < 3 && offset < this.state.repositorios.length
		}

		return (
			<div className='is-vertical-flow is-full-height'>
				<C.Header onClickBuscar={this.handleClickBuscar.bind(this)} loadingSearch={this.state.loadingSearch} />
				{usuarioEncontrado ? <C.Conteudo>
					<C.Columns fullHeight>
						<C.Column verticalFlow size='4'>
							<div className='foto'>
								<C.Image size='128x128' src={usuarioEncontrado && usuarioEncontrado.avatar_url} />
							</div>
							<C.Label>Nome: {usuarioEncontrado && usuarioEncontrado.name}</C.Label>
							<C.Label>E-mail: {usuarioEncontrado && usuarioEncontrado.email}</C.Label>
						</C.Column>
						<C.Column>
							<C.Label>Repositórios</C.Label>
							{cards}
							<C.Pagination
								activePage={this.state.activePage}
								itemCount={3}
								totalItem={30}
								onChangePage={this.handleChangePage.bind(this)}
							/>
						</C.Column>
					</C.Columns>
					<div className='anotacoes'>
						<C.Columns>
							<C.Column position='4'>
								<C.TextArea label='Anotações' onChange={(event) => this.handleChangeAnotacao(event.target.value)} value={this.state.value} />
							</C.Column>
						</C.Columns>
						<C.Columns>
							<C.Column position='4'>
								<C.Button className='is-pulled-left' type='grey'>Limpar</C.Button>
							</C.Column>
							<C.Column>
								<C.Button className='is-pulled-right' type='primary' onClick={() => saveAnotacao(usuarioEncontrado.login, this.state.anotacao)}>Salvar</C.Button>
							</C.Column>
						</C.Columns>
					</div>
				</C.Conteudo> : <C.PageNotFound />}
			</div>
		)
	}
}

export default App
