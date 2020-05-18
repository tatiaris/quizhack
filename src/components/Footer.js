import React from 'react'

function Footer(type) {
    if (type.status === 'full') {
        return (
            <footer className="footer_full">
                Made by <a className="my_link" target="_blank" href="https://tatia.me" rel="noopener noreferrer">Rishabh Tatia</a>.
            </footer>
        )
    } else {
        return (
            <footer className="footer_short">
                Made by <a className="my_link" target="_blank" href="https://tatia.me" rel="noopener noreferrer">Rishabh Tatia</a>.
            </footer>
        )
    }
}

export default Footer
