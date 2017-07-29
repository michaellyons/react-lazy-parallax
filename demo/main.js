import React from 'react';
import ReactDOM from 'react-dom';
import Parallax from '../src';
import './main.css';

// For Non ES6...
// var ToastContainer = ReactToastr.ToastContainer;
import './mui-github-markdown.css';
import './prop-type-description.css';


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleResize = this.handleResize.bind(this)
    this.getSize = this.getSize.bind(this)
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize () {
    this.setState({ ...this.getSize() })
  }

  getSize () {
    return {w: window.innerWidth, h: window.innerHeight}
  }

  render() {

    let {
      h,
      w,
    } = this.state;

    return <div style={{color: 'white'}}>
            <Parallax
              image={'./public/launch.jpg'}
              style={{ minHeight: h }}>
              <div style={{padding: 20, textAlign: 'center'}} className='glassBkg'>
                <h1>React Lazy Parallax</h1>
                <h3>yarn add react-lazy-parallax</h3>
              </div>
            </Parallax>
            <Parallax
              image={'./public/model_3_white.jpg'}
              style={{ minHeight: h }}>
              <div style={{padding: 20, textAlign: 'center'}} className='glassBkg'>
                <h1>So pretty.</h1>
                <h3>Wow.</h3>
              </div>
            </Parallax>
            <Parallax
              image={'./public/usa.jpg'}
              style={{ minHeight: h }}>
              <div style={{padding: 20, textAlign: 'center'}} className='glassBkg'>
                <h1>Sweet Child Component</h1>
                <h3>I love it.</h3>
              </div>
            </Parallax>
          </div>
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {

  ReactDOM.render(
    <Demo style={{backgroundColor: 'none'}} />,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        console.error(error)
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./main', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

render();
