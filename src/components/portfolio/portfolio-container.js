import React, {Component} from "react"

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // State requires *Class* based - if we are getting and changing data(forms and such) - Also LifeCycle Hooks only in class based
    // Functional is good for rendering - shouldn't have a lot of action/operations
    constructor() {
        super()
        console.log('Portfolio Container Rendered');
    }

    portfolioItems() {
        const data = ['google', 'yahoo', 'facebook', 'amazon']
        
        /*loops over array and pushes to new array*/
        return data.map(item => {
            
            // like a for loop that runs portfolioitem function with title and url args each time and puts it into an array 
            return <PortfolioItem title={item} url={"google.com"} />
        })
    }

    render(){
        return (
            <div>
                <h2>Portfolio Items still go here</h2>

                {this.portfolioItems()} {/*this refers to the class*/}
            </div>
        )
    }
}