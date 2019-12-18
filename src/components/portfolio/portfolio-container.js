import React, {Component} from "react"

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // State requires *Class* based - if we are getting and changing data(forms and such) - Also LifeCycle Hooks only in class based
    // Functional is good for rendering - shouldn't have a lot of action/operations
    constructor() {
        super()
        console.log('Portfolio Container Rendered');
    }
    render(){
        return (
            <div>
                <h2>Portfolio Items still go here</h2>

                <PortfolioItem/>
            </div>
        )
    }
}