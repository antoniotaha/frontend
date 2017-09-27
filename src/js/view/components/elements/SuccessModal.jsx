import React from 'react'
import Simplert from 'react-simplert'

export class SuccessModal extends React.Component {

	render() {
		return (
			<Simplert showSimplert={this.props.showModal}
				title={this.props.title}
				message={this.props.message}
				type='success'
				onClose={this.props.onClose}
				customCloseBtnText='Ok'
				disableOverlayClick={true} />
		)
	}

}

