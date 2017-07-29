'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyImage = function (_Component) {
  _inherits(LazyImage, _Component);

  function LazyImage(props) {
    _classCallCheck(this, LazyImage);

    var _this = _possibleConstructorReturn(this, (LazyImage.__proto__ || Object.getPrototypeOf(LazyImage)).call(this, props));

    _this.state = {
      opacity: 0,
      backgroundImage: ''
    };
    _this.fadeIn = function () {
      return _this.setState({
        opacity: 1,
        backgroundImage: 'url(' + _this.props.src + ')'
      });
    };
    return _this;
  }

  _createClass(LazyImage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var img = this.img = document.createElement('img');
      img.src = this.props.src;
      img.addEventListener('load', this.fadeIn);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.img.removeEventListener('load', this.fadeIn);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        style: _extends({
          height: '150%',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          transitionProperty: 'opacity',
          transitionTimingFunction: 'ease',
          transitionDuration: '.25s',
          opacity: this.state.opacity,
          backgroundImage: this.state.backgroundImage
        }, this.props.style) });
    }
  }]);

  return LazyImage;
}(_react.Component);

LazyImage.propTypes = {
  src: _propTypes2.default.string,
  style: _propTypes2.default.object
};
exports.default = LazyImage;