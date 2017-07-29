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

var _LazyImage = require('./LazyImage');

var _LazyImage2 = _interopRequireDefault(_LazyImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clamp = function clamp(x, low, high) {
  return Math.min(Math.max(x, low), high);
};

var styles = {
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
};

var Parallax = function (_Component) {
  _inherits(Parallax, _Component);

  function Parallax() {
    var _ref;

    _classCallCheck(this, Parallax);

    for (var _len = arguments.length, p = Array(_len), _key = 0; _key < _len; _key++) {
      p[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call.apply(_ref, [this].concat(p)));

    _this.state = {
      style: {
        transform: ''
      }
    };

    _this._calcPosition = function () {
      var _window = window,
          scrollY = _window.scrollY;
      var _this$el = _this.el,
          offsetTop = _this$el.offsetTop,
          offsetHeight = _this$el.offsetHeight;

      var d = (offsetTop - scrollY) * -2 / offsetHeight;
      var n = clamp((d * 100).toFixed(0), (-2 * offsetHeight).toFixed(0), offsetHeight.toFixed(0));
      var t = 'translateY(' + n + 'px) translateZ(0)';

      _this.setState({
        style: {
          transform: t
        }
      });
    };
    return _this;
  }

  _createClass(Parallax, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this._calcPosition);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this._calcPosition);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          image = _props.image,
          imageStyle = _props.imageStyle,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        { ref: function ref(r) {
            _this2.el = r;
          }, style: _extends({ display: 'flex', position: 'relative' }, styles.parallax, style) },
        _react2.default.createElement(
          'div',
          { style: _extends({}, styles.parallaxBack, this.state.style) },
          _react2.default.createElement(_LazyImage2.default, { src: image, style: imageStyle })
        ),
        _react2.default.createElement(
          'div',
          { style: { margin: 'auto' } },
          children
        )
      );
    }
  }]);

  return Parallax;
}(_react.Component);

Parallax.propTypes = {
  imageStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  image: _propTypes2.default.string,
  children: _propTypes2.default.any
};
Parallax.defaultProps = {
  full: true
};
exports.default = Parallax;