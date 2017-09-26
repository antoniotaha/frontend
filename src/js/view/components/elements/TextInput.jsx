import React from 'react'
import * as C from 'view/components'

export class TextInput extends React.Component {

	render() {
		return (
			<C.Field label={this.props.label}>
				<C.Input type='text' placeholder={this.props.placeholder} name={this.props.name} {...this.props}/>
			</C.Field>
		)
	}

}
