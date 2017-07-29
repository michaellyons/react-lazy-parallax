import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LazyImage from './LazyImage'

let clamp = (x, low, high) => Math.min(Math.max(x, low), high)

let styles = {
  parallax: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
    zIndex: 0
  },
  parallaxBack: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    willChange: 'transform',
    zIndex: -1
  }
}

export default class Parallax extends Component {
  static propTypes = {
    imageStyle: PropTypes.object,
    style: PropTypes.object,
    image: PropTypes.string,
    children: PropTypes.any
  }
  static defaultProps = {
    full: true
  };
  constructor (...p) {
    super(...p)

    this.state = {
      style: {
        transform: ''
      }
    }

    this._calcPosition = () => {
      let { scrollY } = window
      let { offsetTop, offsetHeight } = this.el
      let d = (offsetTop - scrollY) * -2 / offsetHeight
      let n = clamp((d * 100).toFixed(0), (-2 * offsetHeight).toFixed(0), (offsetHeight).toFixed(0))
      let t = `translateY(${n}px) translateZ(0)`

      this.setState({
        style: {
          transform: t
        }
      })
    }
  }
  componentDidMount () {
    window.addEventListener('scroll', this._calcPosition)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this._calcPosition)
  }
  render () {
    let { style, image, imageStyle, children } = this.props
    return (
      <div ref={r => { this.el = r }} style={{ display: 'flex', position: 'relative', ...styles.parallax, ...style }}>
        <div style={{ ...styles.parallaxBack, ...this.state.style }}>
          <LazyImage src={image} style={imageStyle} />
        </div>
        <div style={{ margin: 'auto' }}>
          {children}
        </div>
      </div>
    )
  }
}
