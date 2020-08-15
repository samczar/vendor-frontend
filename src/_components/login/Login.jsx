import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
})

function Login(props) {
	const { classes } = props
	return (
		<div className={classes.root}>
			<h1>Login</h1>
		</div>
	)
}

Login.propTypes = {
	classes: PropTypes.object.isRequired,
}
function mapStateToProps(state) {
	return state
}
const connectedLoginPage = withRouter(
	connect(mapStateToProps, null, null, {
		pure: false,
	})(withStyles(styles)(Login))
)

export { connectedLoginPage as Login }
