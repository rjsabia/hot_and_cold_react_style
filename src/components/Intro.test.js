import React from 'react';
import {shallow} from 'enzyme';

import Intro from './Intro';

describe('<Intro />', () => {
    it('Renders without crashing', () => {
        shallow(<Intro />);
    });
    it('Renders the feedback', () => {
        const feedback = "Example feedback";
        const wrapper = shallow(<Intro userName={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});