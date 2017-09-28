import React from 'react'
import classnames from 'classnames'
import * as C from 'view/components'

export class Field extends React.Component {

	render() {
		const classes = classnames('field', this.props.className)

		return (
			<div className={classes}>
				{this.props.label && <C.Label>{this.props.label}</C.Label>}
				<C.Control {...this.props} />
			</div>
		)
	}

}
