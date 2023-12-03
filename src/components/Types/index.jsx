import PropTypes from 'prop-types'
import styles from './style.module.css'

export default function Types({types}) {
    if (types.length === 1) {
        return (
            <div className={styles.container}> <span className={styles.type}>{types[0].type.name}</span></div>
        )
    } else {
        return (
            <div className={styles.container}> <span className={styles.type}>{types[0].type.name}</span> / <span className={styles.type}>{types[1].type.name}</span></div>
        )
    }
}

Types.propTypes = {
    types: PropTypes.array.isRequired
}