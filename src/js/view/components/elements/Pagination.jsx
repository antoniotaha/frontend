import React from 'react'
import ReactPagination from 'react-js-pagination'


export class Pagination extends React.Component {

	render() {
		return (
			<nav className='pagination is-centered'>
				<ReactPagination
					innerClass='pagination-list'
					linkClass='pagination-link'
					activeLinkClass='is-current'
					activePage={this.props.activePage}
					itemsCountPerPage={this.props.itemCount}
					totalItemsCount={this.props.totalItem}
					pageRangeDisplayed={3}
					onChange={this.props.onChangePage}
				/>
			</nav>
		)
	}

}

