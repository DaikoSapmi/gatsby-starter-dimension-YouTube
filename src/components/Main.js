import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
import pic02 from '../images/banner.jpg'
// import pic03 from '../images/pic03.jpg'

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
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
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
          <p>Spesialitet er prosessledelse, utredninger innenfor feltet samiske rettigheter, Arktis og urfolksspørsmål. I tillegg tilbys foredrag om samme temaer både digitalt og i egen person.</p>
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

          <p>Specialties: Arctic Policy Issues, Indigenous Peoples' Policy Development, Multilateral negotiations, Climate Change Issues and Sámi Issues. Lectures and presentations can be held both digitally and in person. </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Váldde oktavuođa<br/>Kontakt meg<br/>Contact me</h2>
          <form name="nettskjema" method="POST" data-netlify="true" encType="application/x-www-form-urlencoded">
            <div className="field half first">
              <label>Namma-Navn-Name
              <input type="text" name="navn"/></label>
            </div>
            <div className="field half">
              <label>Eboasta-Epost-Email
              <input type="text" name="epost"/></label>
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
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/RuneFjellheim"
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
