import React from 'react';
import {shallow, mount} from 'enzyme';

import GameInput from './GameInput';

describe('<GameInput />', () => {
    it('Renders without crashing', () => {
        shallow(<GameInput />);
    });

    // it('Should fire the Game Input callback when the form is submitted', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<GameInput processUserguess={callback} />);
    //     const value = '5';
    //     wrapper.find('input[type="text"]').node.value = value;
    //     wrapper.simulate('submit');
    //     expect(callback).toHaveBeenCalledWith(value);
    // });
});