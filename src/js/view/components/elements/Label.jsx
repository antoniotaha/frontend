import React from 'react'
import classnames from 'classnames'

export class Label extends React.Component {

	render() {
		const classes = classnames('label', this.props.className)

		return (
			<label className={classes}>{this.props.children}</label>
		)
	}

}
