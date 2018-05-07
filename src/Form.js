import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  state = {
    isCitizen: null,
    didAgreeToTerms: null,
    didAgreeToPrivacyPolicy: null,
    didReadWhitePaper: null,
    firstname: "",
    lastname: "",
    dob: "",
    phone: null,
    country: "",
    publicWalletAddress: "",
    company: "",
    isContributionMoreThenTwelve: null,
    isContributionUsd: null,
    realm: "",
    username: "",
    email: ""
  }
  handleSubmit = (e) => {
    e.preventDefault()

  }
  handleChange = (e) => {
    console.log("handle change", e)
    if(e.target.type === "checkbox"){
      this.setState({[e.target.name]: e.target.checked})
    }else{
      this.setState({[e.target.name]: e.target.value})
    }
  }
  render () {
    return (
      <div>
          <h3 className='App-title'>Member Form</h3>
          <form className="App-form">
            <div className="text-inputs">
              <input onChange={this.handleChange} name="firstname" type="text" placeholder="First Name"/>
              <input onChange={this.handleChange} name="lastname" type="text" placeholder="Last Name"/>
              <input onChange={this.handleChange} name="username" type="text" placeholder="Username" />
              <input onChange={this.handleChange} name="email" type="email" placeholder="Email" />
              <input onChange={this.handleChange} name="dob" type="date" placeholder="Date of Birth MM/DD/YY"/>
              <input onChange={this.handleChange} name="phone" type="number" placeholder="1112223333" />
              <input onChange={this.handleChange} name="publicWalletAddress" type="text" placeholder="Address" />
              <input onChange={this.handleChange} name="country" type="text" placeholder="Country" />
              <input onChange={this.handleChange} name="company" type="text" placeholder="Company" />
              <input onChange={this.handleChange} name="realm" type="text" placeholder="Realm" />
            </div>

            <div className ="cntr">
                <label for="isCitizen" className="label-cbx">
                  <input id="isCitizen" name="isCitizen" onChange={this.handleChange} type="checkbox" className="invisible"/>
                  <div className="checkbox">
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                      <polyline points="4 11 8 15 16 6"></polyline>
                    </svg>
                    <span>Citizen</span>
                  </div>
                </label>
                <label for="didReadWhitePaper" className="label-cbx">
                  <input id="didReadWhitePaper" name="didReadWhitePaper" onChange={this.handleChange} type="checkbox" className="invisible"/>
                  <div className="checkbox">
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                      <polyline points="4 11 8 15 16 6"></polyline>
                    </svg>
                    <span>White Paper</span>
                  </div>
                </label>
                <label for="didAgreeToPrivacyPolicy" className="label-cbx">
                  <input id="didAgreeToPrivacyPolicy" name="didAgreeToPrivacyPolicy" onChange={this.handleChange} type="checkbox" className="invisible"/>
                  <div className="checkbox">
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                      <polyline points="4 11 8 15 16 6"></polyline>
                    </svg>
                    <span>Privacy Policy</span>
                  </div>
                </label>
                <label for="didAgreeToTerms" className="label-cbx">
                  <input id="didAgreeToTerms" name="didAgreeToTerms" onChange={this.handleChange} type="checkbox" className="invisible"/>
                  <div className="checkbox">
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                      <polyline points="4 11 8 15 16 6"></polyline>
                    </svg>
                    <span>Terms Agreement</span>
                  </div>
                </label>
                <label for="isContributionMoreThenTwelve" className="label-cbx">
                  <input id="isContributionMoreThenTwelve" name="isContributionMoreThenTwelve" onChange={this.handleChange} type="checkbox" className="invisible"/>
                  <div className="checkbox">
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                      <polyline points="4 11 8 15 16 6"></polyline>
                    </svg>
                    <span>12+</span>
                  </div>
                </label>
                <label for="isContributionUsd" className="label-cbx">
                  <input id="isContributionUsd" name="isContributionUsd" onChange={this.handleChange} type="checkbox" className="invisible"/>
                  <div className="checkbox">
                    <svg width="20px" height="20px" viewBox="0 0 20 20">
                      <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                      <polyline points="4 11 8 15 16 6"></polyline>
                    </svg>
                    <span>USD</span>
                  </div>
                </label>
            </div>
            <div className="submit-button">
              <input name="submit" id="af-submit-image-1865666917" type="submit" alt="Submit Form"  value="Submit" tabIndex="502"/>
            </div>
          </form>
      </div>
    )
  }
}


export default Form
