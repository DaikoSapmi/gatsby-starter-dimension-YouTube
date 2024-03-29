import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
                  <ul className="icons">
            <li>
              <a
                href="https://x.com/RuneFjellheim"
                className="icon fa-twitter"
              >
                <span className="label">X</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/rune.fjellheim" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/runefjellheim/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UChGEObcSuD1oJtolxxifrCQ" className="icon fa-youtube">
                <span className="label">YouTube</span>
              </a>
            </li>
            <li>
              <a href="mailto:rune@fjellheim.tv" className="icon fa-at">
                <span className="label">E-mail</span>
              </a>
            </li>

          </ul>

        <p className="copyright">&copy; Rune Fjellheim AS 2024</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
