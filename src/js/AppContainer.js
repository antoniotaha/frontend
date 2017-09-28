import Usuario from 'api/Usuario'

const localStorage = window.localStorage

export const getUsuario = (username) => Usuario.getUser(username)

export const getRepositorios = (username) => Usuario.getRepositorios(username)

export const saveAnotacao = (username, anotacao) => {
	localStorage.setItem(username, anotacao)
} 
