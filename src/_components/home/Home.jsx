import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
})

const Home = (props) => {
	const { classes } = props
	return (
		<div className={classes.root}>
			<h1>Home</h1>
		</div>
	)
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	state,
})

// const mapDispatchToProps = {}

const connectedHomePage = withRouter(
	connect(mapStateToProps, null, null, { pure: false })(
		withStyles(styles)(Home)
	)
)

export { connectedHomePage as Home }
