import React from 'react'
import classnames from 'classnames'

export class Image extends React.Component {

	render() {
		const classes = classnames('image', this.props.className, {
			'is-180x180': this.props.size === '180x180',
			'is-128x128': this.props.size === '128x128',
			'is-110x110': this.props.size === '110x110',
			'is-96x96': this.props.size === '96x96',
			'is-64x64': this.props.size === '64x64',
			'is-48x48': this.props.size === '48x48',
			'is-32x32': this.props.size === '32x32',
			'is-16x16': this.props.size === '16x16',
			'is-14x14': this.props.size === '14x14',
		})

		return (
			<figure className={classes}>
				<img src={this.props.src} alt='loading' />
			</figure>
		)
	}

}
