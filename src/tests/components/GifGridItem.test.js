import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Pruebas en el archivo GifGridItem.js', () => {
    test('debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem />)
        expect(wrapper).toMatchSnapshot()
    })
    
})


