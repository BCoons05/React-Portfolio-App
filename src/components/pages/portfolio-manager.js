import React, {Component} from "react"
import axios from 'axios'

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form"

export default class PortfolioManager extends Component {
    constructor(){
        super()

        this.state = {
            portfolioItems: [],
            portfolioToEdit: {}
        }
    }

    clearPortfolioToEdit = () => {
        this.setState({
            portfolioToEdit: {}
        })
    }

    handleEditClick= portfolioItem => {
        this.setState({
            portfolioToEdit: portfolioItem
        })
    }

    handleDeleteClick = (portfolioItem) => {
        axios.delete(`http://briancoons.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, { withCredentials: true })
        .then(response => {
            this.setState({
                portfolioItems: this.state.portfolioItems.filter(item => {
                    return item.id !== portfolioItem.id
                })
            })
            return response.data
        })
        .catch(error => {
            console.log("error:", error)
        })
    }

    handleEditFormSubmission = () => [
        this.getPortfolioItems()
    ]

    handleNewFormSubmission = (portfolioItem) => {
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
                        handleNewFormSubmission={this.handleNewFormSubmission}
                        handleEditFormSubmission={this.handleEditFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                        clearPortfolioToEdit={this.clearPortfolioToEdit}
                        portfolioToEdit={this.state.portfolioToEdit}
                    />
                </div>
                
                <div className="right-column">
                    <PortfolioSidebarList 
                    handleEditClick={this.handleEditClick}
                    handleDeleteClick={this.handleDeleteClick}
                    data={this.state.portfolioItems} 
                    />
                </div>
            </div>
        )
    }
}