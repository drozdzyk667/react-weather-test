import React from 'react';
import { mount } from 'enzyme';
import { Loader } from './Loader';

describe('Loader component', () => {
  it('should render children', () => {
    const component = mount(
      <Loader isLoading={false}>
        <span data-testid='content'>{'content'}</span>
      </Loader>
    );
    expect(
      component
        .find({
          'data-testid': 'content',
        })
        .first()
        .text()
    ).toEqual('content');
  });

  it('should not render children if loading', () => {
    const component = mount(
      <Loader isLoading={true} data-testid='loader-container'>
        <span data-testid='content'>{'content'}</span>
      </Loader>
    );
    expect(
      component.find({
        'data-testid': 'content',
      })
    ).toEqual({});
  });
});
