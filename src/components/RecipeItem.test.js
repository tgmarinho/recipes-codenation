import React from 'react';
import { mount } from 'enzyme';
import RecipeItem from './RecipeItem';

describe('RecipeItem', () => {



    test('Should be RecipeItem', () => {
        let props = {
            recipe:  {
                "title": "Ginger Champagne",
                "href": "http:\/\/allrecipes.com\/Recipe\/Ginger-Champagne\/Detail.aspx",
                "ingredients": "champagne, ginger, ice, vodka",
                "thumbnail": "http:\/\/img.recipepuppy.com\/1.jpg"
            },
            highlight: ''
        };
        const wrapper = mount(<RecipeItem {...props}/>);
        expect(wrapper.is('RecipeItem')).toBeTruthy();
    })

    // Add more tests here
})
