import React from 'react'
import classnames from 'classnames'

export class Input extends React.Component {

	render() {
		const classes = classnames('input', this.props.className)

		return (
			<input {...this.props} className={classes} />
		)
	}

}

