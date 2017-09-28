import React from 'react'
import classnames from 'classnames'

export class Column extends React.Component {

	render() {
		const classes = classnames('column', this.props.className, {
			'is-11': this.props.size && this.props.size === '11',
			'is-10': this.props.size && this.props.size === '10',
			'is-9': this.props.size && this.props.size === '9',
			'is-8': this.props.size && this.props.size === '8',
			'is-7': this.props.size && this.props.size === '7',
			'is-6': this.props.size && this.props.size === '6',
			'is-5': this.props.size && this.props.size === '5',
			'is-4': this.props.size && this.props.size === '4',
			'is-3': this.props.size && this.props.size === '3',
			'is-2': this.props.size && this.props.size === '2',
			'is-1': this.props.size && this.props.size === '1',
			'is-offset-4': this.props.position && this.props.position === '4',
			'is-offset-2': this.props.position && this.props.position === '2',
			'is-offset-1': this.props.position && this.props.position === '1',
			'is-vertical-flow': this.props.verticalFlow


		})

		return (
			<div className={classes}>
				{this.props.children}
			</div>
		)
	}

}
