import React, {Component} from "react"
import Axios from 'axios'

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // State requires *Class* based - if we are getting and changing data(forms and such) - Also LifeCycle Hooks only in class based
    // Functional is good for rendering - shouldn't have a lot of action/operations
    constructor() {
        super()
        
        this.state = {
            pageTitle: "Welcome to THE portfolio",
            isLoading: false,
            data: []
        }
        // normal function needs this, but arrow function does not
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
        // this.handleFilter = this.handleFilter.bind(this)
    }

    // iterates over array and returns all that match the input given from button
    handleFilter = filter => {
        this.setState({
            data: this.state.data.filter(name => {
                return name.category === filter
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => { 
            // debugger
            // like a for loop that runs portfolioitem function with title and url args each time and puts it into an array 
            return <PortfolioItem key={item.id} item={item} />
        })
    }

    handlePageTitleUpdate = () => {
        if(this.state.pageTitle != "other thing"){
            this.setState({
                pageTitle: "other thing"
            })
        }else{
            this.setState({
                pageTitle: "Welcome to THE portfolio"
            })
        }
    }

    getPortfolioItems = () => {
        Axios.get("https://briancoons.devcamp.space/portfolio/portfolio_items")
        .then(response => {
        //   console.log('response data: ', response.data)
          this.setState({
              data: response.data.portfolio_items
          })
        })
        .catch(err => {
          console.log(error)
        })
      
      }

      componentDidMount() {
          this.getPortfolioItems()
      }

    render(){
        if(this.state.isLoading) {
            return <div>Loading ...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button 
                    onClick={() => this.handleFilter('search')}>
                        Search
                </button>
                <button 
                    onClick={() => this.handleFilter('ecommerce')}>
                        ecommerce
                </button>
                <button 
                    onClick={() => this.handleFilter('social')}>
                        social
                </button>

                {this.portfolioItems()}

                <hr/>
                <button onClick= {this.handlePageTitleUpdate}>Change Title</button>
            </div>
        )
    }
}