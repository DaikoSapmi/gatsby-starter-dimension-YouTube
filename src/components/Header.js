import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01logo.png'
import { useEffect } from "react";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function App() {

    useEffect(() => {
        CookieConsent.run({
                    /**
           * All config. options available here:
           * https://cookieconsent.orestbida.com/reference/configuration-reference.html
           */
          CookieConsent.run({

            categories: {
                necessary: {
                    enabled: true,  // this category is enabled by default
                    readOnly: true  // this category cannot be disabled
                },
                analytics: {}
            },

            language: {
                default: 'en',
                translations: {
                    en: {
                        consentModal: {
                            title: 'We use cookies',
                            description: 'Cookie modal description',
                            acceptAllBtn: 'Accept all',
                            acceptNecessaryBtn: 'Reject all',
                            showPreferencesBtn: 'Manage Individual preferences'
                        },
                        preferencesModal: {
                            title: 'Manage cookie preferences',
                            acceptAllBtn: 'Accept all',
                            acceptNecessaryBtn: 'Reject all',
                            savePreferencesBtn: 'Accept current selection',
                            closeIconLabel: 'Close modal',
                            sections: [
                                {
                                    title: 'Somebody said ... cookies?',
                                    description: 'I want one!'
                                },
                                {
                                    title: 'Strictly Necessary cookies',
                                    description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                                    //this field will generate a toggle linked to the 'necessary' category
                                    linkedCategory: 'necessary'
                                },
                                {
                                    title: 'Performance and Analytics',
                                    description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                                    linkedCategory: 'analytics'
                                },
                                {
                                    title: 'More information',
                                    description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                                }
                            ]
                        }
                    }
                }
            }
          }); // your config. goes here (required)
        });
    }, []);

    // ...
}
const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
    <span className="image main">
            <img src={pic01} alt="" />
          </span>
    </div>
    <div className="content">
      <div className="inner">
        <p>
          Logaldalli ja ráđđeaddi
        </p>
        <p>
          Foreleser og rådgiver
        </p>
        <p>
          Public speaker and adviser
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Mu birra
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Om meg
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
