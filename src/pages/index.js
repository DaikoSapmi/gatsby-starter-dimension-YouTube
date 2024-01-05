import React from 'react';
import Layout from '../components/layout';
import YouTube from 'react-youtube';
import '../assets/scss/main.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);

    // Load Botpress webchat scripts
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://mediafiles.botpress.cloud/f8f2e85a-f875-47c1-bc29-905772e262c7/webchat/config.js";
    script2.defer = true;
    document.body.appendChild(script2);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      });
    }, 350);
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      });
    }, 350);
  }
  
  handleFormReset = () => {
    this.setState({
      form: {
        name: '',
        email: '',
        message: '',
      },
    });
  };

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  }

  handleFormSubmit(event) {
    event.preventDefault();
    // Add logic for form submission if needed
  }

  _onReady(event) {
    event.target.playVideo();
    event.target.mute();
    event.target.setVolume(0);
  }

  _onEnd(event) {
    event.target.playVideo();
    event.target.mute();
    event.target.setVolume(0);
  }

  render() {
    const videoOptions = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        disablekb: 1,
        enablejsapi: 0,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        playsinline: 1,
      },
    };

    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
              form={this.state.form}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              handleFormReset={this.handleFormReset}
            />
           <Footer timeout={this.state.timeout} />
          </div>
          <div className="video-background">
            <div className="video-foreground">
              <YouTube
                videoId="_v7jM1dOKrQ"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
