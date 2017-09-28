import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import httpAdapter from 'axios/lib/adapters/http'
import axios from 'axios'

export function shallowRenderAndMatch(componentJsx) {
	const wrapper = shallow(componentJsx)
	expect(wrapper).toMatchSnapshot()
	return wrapper
}

Enzyme.configure({ adapter: new Adapter() })
axios.defaults.adapter = httpAdapter 
