import React from 'react';
import { shallow, mount } from 'enzyme';
import { Typography } from '@material-ui/core';
import { HeaderBar } from './HeaderBar.component';
import { Icon } from 'components/Icon/Icon.component';

describe('HeaderBar', () => {
  it('should return correct header text', () => {
    const component = shallow(<HeaderBar />);
    expect(component.find(Typography).at(0).text()).toEqual(
      'Weather App made by anonymous programmer'
    );
  });

  it('should return correct amount of Icon components', () => {
    const component = shallow(<HeaderBar />);
    const icon = component.findWhere((node) => node.is(Icon));
    expect(icon.exists()).toBe(true);
    expect(icon.length).toBe(2);
  });
});
