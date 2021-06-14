import React from 'react'
import { render } from '../../custom-render'
import Home from './Home'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

describe('Profile component', () => {
    afterEach(() => {
        cleanup()
    })

    it('should render component', () => {
        const { getByText } = render(<Home />)
        expect(getByText('This is about')).toBeInTheDocument()
    })

    it('should match the snapshots', () => {
        const tree = renderer.create(<Home />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})