import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
import pic02 from '../images/banner.png'
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
          <h2 className="major">Sámi ja Árktalaš</h2>
          <h2 className="major">áššiid áššedovdi</h2>
          <span className="image main">
            <img src={pic02} alt="Rune Fjellheim, Beaivválaš jođiheadji" style={{ width: '70%' }} />
          </span>
          <p>Bures boahtin mu konsuleantafitnodahkii Rune Fjellheim AS. Mun lean oahppan sosiálaekonoma, Cand. Oecon, Oslo universitehtas ja mus lea lassioahppu sámegielas, informatihkas ja neahttavuđot mediain ja neahttabálvalusain.</p>
          <p>Čiekŋalis ruohttasat sámi kultuvrras ja viiddis bargovásáhus lea addán munnje nanu máhtu sámi ja árktalaš gažaldagaid birra. Go lean bajásšaddan sámi birrasis, de lean bidjan ealliman min álbmoga beroštumiid ja vuoigatvuođaid ovddideapmái ja suodjaleapmái. Mus lea badjel moaddelogi jagi bargovásáhus, ja dasa gullet njunuš doaimmat Norgga Sámedikki direktevran, ja maiddái dehálaš doaimmat Sámiráđis ja Árktalaš Ráđi Álgoálbmotčállingottis.</p>
          <p>Politihka ovddideapmi ja kultuvrraidgaskasaš áddejupmi leat báidnán mu karriera. Iežan rollaid bokte lean háhkan čiekŋalis máhtu ja áddejumi daid kompleaksa hástalusaid birra mat servodagain Árktisas ja álgoálbmogiin miehtá máilmmi leat.</p>
          <p>Mu fitnodat fállá proseassajođiheami, logaldallamiid,, vuoigatvuođačielggademiid ja rávvemiid sámi, árktalaš ja álgoálbmotáššiin. Mu lahkonanvuohki lea huksejuvvon vásáhus- ja čiekŋalis máhtu ala, ja áigumus lea hábmet ceavzilis ja vuoiggalaš čovdosiid boahttevaš buolvvaide.</p>
          <p>Mus lea maid stuora beroštupmi teknologiijii ja innovašuvdnii. Áŋgiris astoáigeprográmmerarin lean mun ovddidan mearkkašahtti gálggaid digitála čovdosiid ja streamingbálvalusaid siskkobealde. Lean gieskat álgán dahkkon jierpmi geavahišgoahtit, erenoamážit sámi geavahusaid ektui. Dat čájeha ahte máhtán ovttastahttit árbevirolaš máhtu ođđa teknologiijain. Mun sáhtán maiddái fállat digitála čoahkkinčovdosiid ja rávdnjemiid dárbbu mielde, oktan teknihkalaš dulkončovdosin (Zooma bokte).</p> <p><a href="/RuneFjellheim.vcf" download>Visitkoarta</a></p>
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
            <img src={pic02} alt="Rune Fjellheim, Daglig leder" style={{ width: '70%' }} />
          </span>
          <p>Velkommen til meg, og mitt konsulentselskap Rune Fjellheim AS. Jeg er utdannet sosialøkonom, Cand. Oecon, fra Universitetet i Oslo og har tilleggsutdanning i samisk språk, informatikk og nettbaserte media og nettjenester.</p>
          <p>Med dype røtter i samisk kultur og en bred karrierebakgrunn har jeg utviklet solid kunnskap om samiske og arktiske spørsmål. Oppvokst i et samisk miljø, har jeg viet mitt liv til å fremme og beskytte vårt folks interesser og rettigheter. Min profesjonelle reise spenner over flere tiår og inkluderer ledende roller som direktør for Sametinget i Norge, samt viktige posisjoner i Samerådet og Arktisk Råds Urfolkssekretariat.</p>
          <p>Min karriere har vært preget av politikkutvikling og tverrkulturell forståelse. Gjennom mine roller har jeg opparbeidet en dybde av kunnskap og forståelse rundt de komplekse utfordringene som samfunn i Arktis og urfolk verden over står overfor.</p>
          <p>Mitt selskap tilbyr prosessledelse, foredrag, rettighetsutredninger og rådgivning i samiske, arktiske og urfolksspørsmål. Min tilnærming kombinerer erfaringskunnskap med dybdeinnsikt, og jeg er dedikert til å skape bærekraftige og rettferdige løsninger for fremtidige generasjoner.</p>
          <p>Teknologi og innovasjon er også sentrale interesseområder for meg. Som en entusiastisk hobbyprogrammerer har jeg utviklet betydelige ferdigheter innen digitale løsninger og streamingtjenester. Min nylige inntreden i kunstig intelligensfeltet som superbruker, særlig med fokus på samiske anvendelser, understreker min evne til å integrere tradisjonell kunnskap med ny teknologi. Jeg kan også tilby digitale møteløsninger og streaming ved behov, inkludert teknisk opplegg for tolkning (via Zoom).</p> <p><a href="/RuneFjellheim.vcf" download>Visittkort</a></p>
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
            <img src={pic02} alt="Rune Fjellheim, CEO" style={{ width: '70%' }} />
          </span>
          <p>Welcome to me and my consulting company Rune Fjellheim AS. I have a degree in Economics, Cand. Oecon, from the University of Oslo and have additional education in Sami language, computer science and online media and online services.</p>
          <p>With deep roots in Sámi culture and a broad career background, I have developed solid knowledge of Sámi and Arctic issues. Raised in a Sámi environment, I have dedicated my life to promoting and protecting the interests and rights of our people. My professional journey spans several decades and includes leading roles as director of the Sámi Parliament in Norway, as well as important positions in the Saami Council and the Arctic Council's Indigenous Secretariat.</p>
          <p>My career has been characterized by policy development and cross-cultural understanding. Through my roles, I have built up a depth of knowledge and understanding around the complex challenges that communities in the Arctic and Indigenous Peoples worldwide face.</p>
          <p>My company offers process management, lectures, rights investigations and consultancy in Sámi, Arctic and indigenous issues. My approach combines experiential knowledge with in-depth insight, and I am dedicated to creating sustainable and fair solutions for future generations.</p>
          <p>Technology and innovation are also key areas of interest for me. As an enthusiastic hobbyist programmer, I have developed significant skills in digital solutions and streaming services. My recent entry into the artificial intelligence field as a superuser, particularly with a focus on Sami applications, underlines my ability to integrate traditional knowledge with new technology. I can also offer digital meeting solutions and streaming if necessary, including technical arrangements for interpretation (via Zoom).</p><p><a href="/RuneFjellheim.vcf" download>Business Card</a></p>
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
              <label htmlFor="name">Namma - Navn - Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.props.form.name}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Eboastta - Epost - Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.props.form.email}
                onChange={this.props.handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="message">Diehtu - Melding - Message</label>
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
          {this.props.submissionStatus === 'success' && (<h3>Giitu dieđuid ovddas! - Takk for din melding! - Thank you for your submission!</h3>)}
          {this.props.submissionStatus === 'error' && (<h3>Dat lei juoga boasttut dien skovis - Beklager noe gikk galt - Sorry, there was an error in the form.</h3>)}
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
