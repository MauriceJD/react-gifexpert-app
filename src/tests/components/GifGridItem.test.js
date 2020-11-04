import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Pruebas en el archivo GifGridItem.js', () => {
    test('debe mostrar el componente correctamente', () => {

        const title = 'Hola que tal saludos';
        const url = 'https://localhost/algo.jpg'

        const wrapper = shallow(<GifGridItem title={title} url={url}/>)
        expect(wrapper).toMatchSnapshot()
    })
    
})


