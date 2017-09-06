import React from 'react';
import {shallow} from 'enzyme';

import Greetings from './Greetings';

describe('<Greetings />', () => {
    it('Renders without crashing', () => {
        shallow(<Greetings />);
    });
});