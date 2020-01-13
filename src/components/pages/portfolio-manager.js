import React, {Component} from "react"
import axios from 'axios'

import PortfolioItem from "../portfolio/portfolio-item"

export default class PortfolioManager extends Component {
    constructor(){
        super()

        this.state = {
            portfolioItems: []
        }
    }

    getPortfolioItems = () => {
        axios.get("https://briancoons.devcamp.space/portfolio/portfolio_items", { withCredentials: true })
        .then(response => {
          console.log('response data: ', response.data)
          this.setState({
              portfolioItems: [...response.data.portfolio_items]
          })
        })
        .catch(err => {
          console.log(err)
        })
      
      }

      componentDidMount() {
          this.getPortfolioItems()
      }

      portfolioItems() {
        return this.state.portfolioItems.map(item => { 
            return <PortfolioItem key={item.id} item={item} />
        })
    }

    render() {
        return(
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>Portfolio Form</h1>
                </div>
                
                <div className="right-column">
                    {this.portfolioItems()}
                </div>
            </div>
        )
    }
}