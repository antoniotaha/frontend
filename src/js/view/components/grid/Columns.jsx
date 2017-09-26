import React from 'react'
import classnames from 'classnames'

export class Columns extends React.Component {

	render() {
		const classes = classnames('columns', this.props.className, {
			'is-full-height': this.props.fullHeight
		})

		return (
			<div className={classes} >
				{this.props.children}
			</div>
		)
	}

}
