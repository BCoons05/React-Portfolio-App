import React, {Component} from "react"

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // State requires Class based - if we are getting and changing data(forms and such)
    // Functional is gd for rendering
    render(){
        return (
            <div>
                <h2>Portfolio Items still go here</h2>

                <PortfolioItem/>
            </div>
        )
    }
}