import PropTypes from 'prop-types'
import Button from './Button'
/////////////////////////

const Header = ({ title }) => {
    var counter = 0
    const onClick = () => {
        counter++
        console.log({ counter })
    }

    return (
        <header>
            <p>{title}</p>
            <hr />
            <div className='header'>
                <h1>Task tracker</h1>
                <Button color='green' text='Add' onClick={onClick}></Button>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}


export default Header