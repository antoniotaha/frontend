import axios from 'axios'

const user_url = 'https://api.github.com/users/'

class Usuario {

	getUser(username) {
		return axios.get(user_url + username)
	}

	getRepositorios(username) {
		return axios.get(user_url + username + '/repos')
	}

}

export default new Usuario()
