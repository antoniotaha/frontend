import React from 'react'
import * as C from 'view/components'

export class TextArea extends React.Component {

	render() {
		return (
			<C.Field label={this.props.label}>
				<textarea className='textarea' placeholder={this.props.placeholder} name={this.props.name} {...this.props}/>
			</C.Field>
		)
	}

}
