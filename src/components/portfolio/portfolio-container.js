import React, {Component} from "react"

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // State requires *Class* based - if we are getting and changing data(forms and such) - Also LifeCycle Hooks only in class based
    // Functional is good for rendering - shouldn't have a lot of action/operations
    constructor() {
        super()
        
        this.state = {
            pageTitle: "Welcome to THE portfolio",
            data: [
                {title: 'google'}, 
                {title: 'yahoo'},
                {title: 'facebook'},
                {title: 'amazon'}
            ]
        }
    }

    portfolioItems() {
        
        /*loops over array and pushes to new array*/
        return this.state.data.map(item => {
            
            // like a for loop that runs portfolioitem function with title and url args each time and puts it into an array 
            return <PortfolioItem title={item.title} url={"google.com"} />
        })
    }

    render(){
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}