import nock from 'nock'
import Usuario from 'api/Usuario'
import * as setupTests from 'setupTests'

const user_url = 'https://api.github.com'

describe('ações api github', () => {
	it('Get usuário', () => {
		const user = {
			name: 'Tester',
			login: 'test'
		}

		nock(user_url).get('/users/test').reply(200, user)

		Usuario.getUser('test').then((result) => {
			expect(result.data).toEqual(user)
		})
	})

	it('Get repositórios', () => {
		const repositorios = [
			{
				name: 'repositorio1',
				open_issues: 50
			},
			{
				name: 'repositorio2',
				open_issues: 10
			}
		]

		nock(user_url).get('/users/test/repos').reply(200, repositorios)

		Usuario.getRepositorios('test').then((result) => {
			expect(result.data).toEqual(repositorios)
		})
	})
})
