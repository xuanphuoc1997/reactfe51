import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Producslide from './Producslide'
import Productext from './Productext'
import Sildercomponent from './Sildercomponent'

export default class BaitapLayout1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sildercomponent />
                <Productext />
                <Producslide />
                <Footer />

            </div>
        )
    }
}
