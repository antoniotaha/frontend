import React from 'react'
import classnames from 'classnames'

export class Control extends React.Component {

	render() {
		const classes = classnames('control', this.props.className)

		return (
			<div className={classes}>
				{this.props.children}
			</div>
		)
	}

}
