import React from 'react';
import {mount, shallow} from 'enzyme';
import Repositories from '../../components/repositories/repositories';
import expect from 'expect';

function setup() {
  const props = {
    apiError: '',
    getListReposByUser: jest.fn(),
  };

  const enzymeWrapper = shallow(<Repositories {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('test component', () => {
  describe('repositories', () => {
    it('should render self and subcomponents', () => {
      const {enzymeWrapper} = setup();
      expect(enzymeWrapper.find('i'));
    });

    it('should call getListReposByUser if length > 0', () => {
      const {enzymeWrapper, props, renderer, output} = setup();
      const inst = enzymeWrapper.instance();
      expect(props.apiError).toEqual('');
      expect(props.getListReposByUser).toHaveBeenCalledWith('khriztianmoreno');
      props.getListReposByUser('khriztianmoreno');
      expect(inst.repositoriesByUser.length).toBe(0);
    });
  });
});
