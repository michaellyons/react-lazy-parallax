import React from 'react';
import Parallax from '../src/Parallax';
import { mount, shallow, render } from 'enzyme';
import PropTypes from 'prop-types';

describe('(Component) Parallax', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<Parallax  />);
  })

  it('Should exist.', () => {
    expect(_component).to.exist
  })
})
