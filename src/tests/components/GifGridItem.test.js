import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Pruebas en el archivo GifGridItem.js', () => {
    
    
    const title = 'Hola que tal saludos';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)
    
    
    test('debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()
        
    })
    
    test('debe mostrar un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
        
    })
    
    test('debe tener como atributos el src y el titulo en img', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
        
    })
    
    test('div debe de tener la clase de animacion', () => {
        
        const div = wrapper.find('div');
        const classname = div.prop('className');
        expect(div.prop('className')).toBe(classname)
        
    })
    
    
    
    
})


