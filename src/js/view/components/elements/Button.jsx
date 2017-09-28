import React from 'react'
import classnames from 'classnames'

export class Button extends React.Component {

	render() {
		const classes = classnames('button', this.props.className, {
			'is-grey': this.props.type && this.props.type === 'grey',
			'is-primary': this.props.type && this.props.type === 'primary',
			'is-transparent': this.props.type && this.props.type === 'transparent',
			'is-neon': this.props.type && this.props.type === 'neon',
			'is-success': this.props.type && this.props.type === 'success',
			'is-danger': this.props.type && this.props.type === 'danger',
			'is-warning': this.props.type && this.props.type === 'warning',
			'is-info': this.props.type && this.props.type === 'info',
			'is-link': this.props.type && this.props.type === 'link',
			'is-small': this.props.size && this.props.size === 'small',
			'is-normal': this.props.size && this.props.size === 'normal',
			'is-medium': this.props.size && this.props.size === 'medium',
			'is-large': this.props.size && this.props.size === 'large',
			'is-dashed': this.props.dashed,
			'is-outlined': this.props.outlined,
			'is-square': this.props.square,
			'is-loading': this.props.loading,
			'has-shadow': this.props.shadow,
		})

		return (
			<button
				className={classes}
				name={this.props.name}
				onClick={this.props.onClick}
				type='button'>
				{this.props.children && <span>{this.props.children}</span>}
			</button>
		)
	}
}
