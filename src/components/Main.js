import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
import pic02 from '../images/banner.jpg'
import pic03 from '../images/RuneFjellheimVcard.png'
//  <img src={pic03} alt="QR business card" style={{ width: '60%' }} />
 
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mu birra</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Sápmelažžan bajásšadden Sámi servodagas, lean beroštuvvan Sámi-, Árktalaš- ja álgoálbmotáššiid juo studeantan. Bargoeallimis lean eanaš bargan politihka hábmemiin ja ovddideamiin oassin Norggabeal Sámedikki hálddáhusa, sorjjasmeahttun konsuleantan Jarumas AS:s, Sámeráđi árktalaš ja birasossodaga jođiheaddjin, Árktalaš ráđi álgoálbmogiid čállingotti jođiheaddjin ja 12 jagi Norggabeal Sámedikki direktevrran.</p>
          <p>Dál mun doaimmahan iežan konsuleantafitnodaga, Rune Fjellheim AS. Buot dát posišuvnnat leat addán munnje vuđolaš ipmárdusa Sámi ja Árktisa gažaldagain iešguđet geahččanguovllus.</p>
          <p>Spesialitehtat: Árktalaš politihkkagažaldagat, álgoálbmotpolitihkkaovddideapmi, máŋggabealát šiehtadallamat, Dálkkádatrievdangažaldagat ja Sámi gažaldagat. Logaldallamiid ja ovdanbuktimiid lea vejolaš diŋgut sihke digitálalaččat ja persovnnalaččat. <a href="/RuneFjellheim.vcf" download>Visitkoarta</a></p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Om meg</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Jeg er en stolt same som har vokst opp i et samisk miljø og ønsker å bidra til at vårt folks historie og tilstedeværelse får sin rettmessige plass i den offentlige samtalen.</p>
          <p>Kunnskap og gjensidig respekt og forståelse er grunnlaget for meningsfulle relasjoner mellom folk med ulik kulturell bakgrunn. Jeg har benyttet det meste av min profesjonelle karriere på politikkutvikling som del av Sametinget i Norge sin administrative stab, uavhengig konsulent i Jaruma AS, leder av Samerådets Arktis og miljøavdeling, leder av Arktisk Råds urfolkssekretariat og i 12 år som direktør for Sametinget i Norges administrasjon. Nå driver jeg mitt eget konsulentfirma, Rune Fjellheim AS. Alle disse stillingene har gitt meg en grunnleggende forståelse og kompetanse i forhold til de utfordringer vi står ovenfor i samiske områder spesielt og den Arktiske region og globale urfolksspørsmål mer generelt.</p>
          <p>Er opptatt av ny teknologi og er en ivrig skapprogrammerer, selv om det ikke er et primærprodukt som konsulent. Jeg kan imidlertid tilby digitale møteløsninger og streaming ved behov, inkludert teknisk opplegg for tolkning (via Zoom).</p>
          <p>Spesialitet er prosessledelse, utredninger innenfor feltet samiske rettigheter, Arktis og urfolksspørsmål. I tillegg tilbys foredrag om samme temaer både digitalt og i egen person. <a href="/RuneFjellheim.vcf" download>Visittkort</a></p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About me</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>As a Sámi grown up in a Sámi community, I engaged in Arctic and indigenous peoples' issues already as a student. In most of my professional carrier I have been involved in policy planning and development as part of the Sámi Parliament of Norway staff, an independent consultant in Jaruma AS, Head of the Arctic & Environmental Unit in the Saami Council, Executive Secretary of the Arctic Council Indigenous Peoples’ Secretariat, and for 12 years at the Sámi Parliament of Norway as Director General. Now I operate my own consultancy company, Rune Fjellheim AS. All of these positions have given me a thorough understanding of Arctic issues from different perspectives.</p>

          <p>Specialties: Arctic Policy Issues, Indigenous Peoples' Policy Development, Multilateral negotiations, Climate Change Issues and Sámi Issues. Lectures and presentations can be held both digitally and in person. <a href="/RuneFjellheim.vcf" download>Business Card</a></p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
        <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

        <form name="nettskjema" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="navn" />
          <input type="email" name="epost" />
          <textarea name="melding"></textarea>
        </form>
        <div id="kontakt"></div>
          <h2 className="major">Váldde oktavuođa<br/>Kontakt meg<br/>Contact me</h2>
          <span className="image main">
          <a href="/RuneFjellheim.vcf" download><img src={pic03} alt="QR business card" /></a>
          </span>
          <script type="text/babel">
              ReactDOM.render(
                  <form method="POST">
                    <input type="hidden" name="form-name" value="nettskjema" />
                    <div className="field half first">
                      <label>Namma-Navn-Name
                      <input type="text" name="navn" /></label>
                    </div>
                    <div className="field half">
                      <label>Eboasta-Epost-Email
                      <input type="text" name="epost" /></label>
                    </div>
                    <div className="field">
                      <label>Diehtu-Beskjed-Message
                      <textarea name="melding" rows="4"></textarea></label>
                    </div>
                    <ul className="actions">
                      <li>
                        <button type="submit" className="special">Sáddes - Send</button>
                      </li>
                      <li>
                        <input name="reset" type="reset" value="Ođasmahtte-Reset" />
                      </li>
                    </ul>
                  </form>,
            document.getElementById("kontakt")
          );
          </script>
          <ul className="icons">
            <li>
              <a
                href="https://x.com/RuneFjellheim"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
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
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
