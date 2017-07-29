import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LazyImage extends Component {
  static propTypes = {
    src: PropTypes.string,
    style: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      opacity: 0,
      backgroundImage: ''
    }
    this.fadeIn = () => this.setState({
      opacity: 1,
      backgroundImage: 'url(' + this.props.src + ')'
    })
  }
  componentDidMount () {
    var img = this.img = document.createElement('img')
    img.src = this.props.src
    img.addEventListener('load', this.fadeIn)
  }
  componentWillUnmount () {
    this.img.removeEventListener('load', this.fadeIn)
  }
  render () {
    return (<div
      style={{
        height: '150%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        transitionProperty: 'opacity',
        transitionTimingFunction: 'ease',
        transitionDuration: '.25s',
        opacity: this.state.opacity,
        backgroundImage: this.state.backgroundImage,
        ...this.props.style
      }} />)
  }
}
