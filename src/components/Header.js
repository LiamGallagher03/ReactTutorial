import PropTypes from 'prop-types'
import Button from './Button'
//specifies data type for props

const Header = ({ title }) => {
    //title is considered props name, parameter taken in from App.js
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick = {onClick}/>
            {/* Variables are listed here, onClick gets it from above*/}
        </header>
        //returns this to App.js
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
//default props if one isn't found in App.js for Header

Header.propTypes = {
    title: PropTypes.string.isRequired
    //PropTypes.string.isRequired makes it required
}
//makes props datatype a string, title is var name of props

//Specific style, can pass through <h1 style={headingStyle}>
/*
            const headingStyle = {
            color: 'red',
            backgroundColor: 'black',
}
*/

export default Header
