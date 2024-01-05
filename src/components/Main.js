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
          <h2 className="major">Ekspert på samiske</h2>
          <h2 className="major">og arktiske spørsmål</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Med dype røtter i samisk kultur og en solid karrierebakgrunn har jeg utviklet en solid kunnskap om samiske og arktiske spørsmål. Oppvokst i et samisk miljø, har jeg viet mitt liv til å fremme og beskytte vårt folks interesser og rettigheter. Min profesjonelle reise spenner over flere tiår og inkluderer ledende roller som direktør for Sametinget i Norge, samt viktige posisjoner i Samerådet og Arktisk Råds Urfolkssekretariat.</p>
          <p>Min karriere har vært preget av en dyp forpliktelse til politikkutvikling og tverrkulturell forståelse. Gjennom mine ulike roller har jeg opparbeidet en sjelden dybde av kunnskap og forståelse rundt de komplekse utfordringene som samfunn i Arktis og urfolk verden over står overfor.</p>
          <p>I dag driver jeg mitt eget konsulentfirma, Rune Fjellheim AS, hvor jeg tilbyr ekspertise innen prosessledelse, rettighetsutredninger og rådgivning på samiske, arktiske og urfolksspørsmål. Min tilnærming kombinerer tradisjonell kunnskap med moderne innsikt, og jeg er dedikert til å skape bærekraftige og rettferdige løsninger for fremtidige generasjoner.</p>
          <p>Teknologi og innovasjon er også sentrale interesseområder for meg. Som en entusiastisk hobbyprogrammerer har jeg utviklet betydelige ferdigheter innen digitale løsninger og streamingtjenester. Min nylige inntreden i kunstig intelligensfeltet som en superbruker, særlig med fokus på samiske anvendelser, understreker min evne til å integrere tradisjonell kunnskap med cutting-edge teknologi. Jeg kan for eksempel tilby digitale møteløsninger og streaming ved behov, inkludert teknisk opplegg for tolkning (via Zoom).</p>
          <p>Spesialitet er prosessledelse, utredninger innenfor feltet samiske rettigheter, Arktis og urfolksspørsmål. Jeg tilbyr foredrag og konsultasjoner, både digitalt og personlig, hvor jeg deler min unike blanding av innsikt og erfaring for å belyse og adressere de presserende utfordringene våre samfunn står overfor. <a href="/RuneFjellheim.vcf" download>Visittkort</a></p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Expert on Sámi</h2>
          <h2 className="major">and Arctic Issues</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>With deep roots in the Sámi community and a career spanning over three decades, I, Rune Fjellheim, offer unparalleled expertise in Arctic policy, indigenous peoples' rights, and environmental stewardship. As a native Sámi, my journey began in our community, where I developed a keen interest in Arctic and indigenous issues. This early passion translated into a distinguished career that includes significant roles such as Director General at the Sámi Parliament of Norway, Executive Secretary of the Arctic Council Indigenous Peoples’ Secretariat, and a leader in the Sámi Council.</p>
          <p>My extensive experience in policy planning and development, particularly within the Sámi Parliament, has equipped me with a multi-dimensional understanding of Arctic issues. I’ve been at the forefront of pivotal policy developments, including landmark agreements and initiatives that have shaped indigenous rights and environmental policies at an international level.</p>
          <p>As the head of Rune Fjellheim AS, my consultancy firm, I specialize in guiding complex processes to produce comprehensive reports, analyses, and advice on human rights, Sámi issues, and leadership in Arctic indigenous peoples' matters, including tackling climate change challenges. My specialties encompass Arctic policy issues, indigenous peoples' policy development, multilateral negotiations, and climate change solutions.</p>
          <p>A unique aspect of my profile is my technological adeptness. As a hobby programmer, I have honed skills in streaming services, particularly during the pandemic, and have recently emerged as a super user in the AI domain, focusing on Sámi area applications. This technological fluency allows me to offer contemporary solutions and lectures in these evolving fields.</p>
          <p>I am available for consultations, lectures, and presentations, both digitally and in person, bringing a blend of traditional knowledge and modern technological insight to address today's pressing Arctic and indigenous issues. <a href="/RuneFjellheim.vcf" download>Business Card</a></p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
        <div id="kontakt"></div>
          <h2 className="major">Váldde oktavuođa<br/>Kontakt meg<br/>Contact me</h2>
          <span className="image main">
          <a href="/RuneFjellheim.vcf" download><img src={pic03} alt="QR business card"  style={{ width: '60%' }} /></a>
          </span>

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
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={this.props.handleFormSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.props.form.name}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.props.form.email}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={this.props.form.message}
                onChange={this.props.handleInputChange}
              ></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send" className="special" /></li>
              <li><input type="reset" value="Reset" onClick={this.props.handleFormReset} /></li>
            </ul>
          </form>
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
