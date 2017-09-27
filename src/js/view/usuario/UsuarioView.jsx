import React, { Component } from 'react'
import * as C from 'view/components'
import { saveAnotacao } from 'view/usuario/UsuarioContainer'

class UsuarioView extends Component {

	constructor() {
		super()
		this.state = {
			anotacao: '',
			activePage: 1,
			offsetRepositorio: 0,
			showModalSaveAnotacao: false
		}
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

	handleSaveAnotacao() {
		const usuarioEncontrado = this.props.usuarioEncontrado
		saveAnotacao(usuarioEncontrado.login, this.state.anotacao)
		this.setState({
			'showModalSaveAnotacao': true
		})
	}

	mountCardRepositorio() {
		const { repositorios } = this.props
		let cont = 0
		let cards = []
		let offset = this.state.offsetRepositorio
		let hasRepositorio = offset < repositorios.length

		while (hasRepositorio) {
			let repositorio = repositorios[offset]
			cards[cont] = <C.CardRepositorio key={offset} nomeRepositorio={repositorio && repositorio.name} />
			cont++
			offset++
			hasRepositorio = cont < 3 && offset < repositorios.length
		}

		return cards
	}

	render() {
		const usuarioEncontrado = this.props.usuarioEncontrado

		return (
			<C.Conteudo>
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
						{this.mountCardRepositorio()}
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
							<C.TextArea label='Anotações' onChange={(event) => this.handleChangeAnotacao(event.target.value)} value={this.state.anotacao} />
						</C.Column>
					</C.Columns>
					<C.Columns>
						<C.Column position='4'>
							<C.Button className='is-pulled-left' onClick={() => this.setState({ 'anotacao': '' })}>Limpar</C.Button>
						</C.Column>
						<C.Column>
							<C.Button className='is-pulled-right' type='primary' onClick={this.handleSaveAnotacao.bind(this)}>Salvar</C.Button>
						</C.Column>
					</C.Columns>
				</div>
				<C.SuccessModal title='Anotação salva'
					message='A anotação foi salva com sucesso!'
					showModal={this.state.showModalSaveAnotacao}
					onClose={() => this.setState({ 'showModalSaveAnotacao': false })} />
			</C.Conteudo>
		)
	}
}

export default UsuarioView
