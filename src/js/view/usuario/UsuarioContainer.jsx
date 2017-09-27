const localStorage = window.localStorage

export const saveAnotacao = (username, anotacao) => {
	localStorage.setItem(username, anotacao)
}

export const loadAnotacao = (username) => (
	localStorage.getItem(username)
)
