import React from 'react';
import {shallow, mount} from 'enzyme';

import AddName from './AddName';

describe('<AddName />', () => {
    it('Renders without crashing', () => {
        shallow(<AddName />);
    });

    it('Should fire the Intro callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<AddName addUsername={callback} />);
        const value = "Russ";
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });
});