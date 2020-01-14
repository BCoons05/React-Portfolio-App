import React, {Component} from "react"
import axios from 'axios'

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form"

export default class PortfolioManager extends Component {
    constructor(){
        super()

        this.state = {
            portfolioItems: []
        }
    }

    handleSuccessfulFormSubmission = (portfolioItem) => {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleFormSubmissionError = error => {
        console.log('error submitting the form', error)
    }

    getPortfolioItems = () => {
        axios.get("https://briancoons.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { withCredentials: true })
        .then(response => {
        //   console.log('response data: ', response.data)
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

    render() {
        return(
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>
                
                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems} />
                </div>
            </div>
        )
    }
}