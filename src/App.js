import React, { Component } from 'react';
import './App.css';

import Introduction from './containers/intro/Introduction';
import Calculator from './containers/calc/Calculator';
import Navigation from './components/Navigation';
import RelieveMe from './containers/mask/RelieveMe';

class App extends Component {

  state = {
    grossPay: 0,
    takeHomeIncome: 0,
    taxedIncome: 0
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  // ----------------- income calculations --------------------
  getSalaryPerAnnum = values => {
    const { salary, rate, hoursPerWeek } = values;
    const weeksInYear = 52;
    let salaryPerAnnum;
    switch (rate) {
      case 'hourly':
        salaryPerAnnum=salary*hoursPerWeek*weeksInYear;
        break;
      case 'weekly':
        salaryPerAnnum = salary*weeksInYear;
        break;
      default:
        salaryPerAnnum = salary;
    }
    this.calculateIncomeAfterTax(salaryPerAnnum)
  }

  calculateIncomeAfterTax = salary => {
    let takeHomeIncome;
    
    if(salary <= 11500){
      takeHomeIncome = salary;
    } else if( salary > 11500 && salary <= 45000 ) {
      takeHomeIncome = this.calculateAmountAfterTax(0.2, (salary - 11500)) + 11500;
    } else if ( salary > 45000 && salary <= 150000 ){
      takeHomeIncome = this.calculateAmountAfterTax(0.4, (salary - 45000)) + this.calculateAmountAfterTax(0.2, (45000 - 11500)) + 11500;
    } else {
      takeHomeIncome = this.calculateAmountAfterTax(0.45, (salary - 150000)) + this.calculateAmountAfterTax(0.4, (150000 - 45000)) + this.calculateAmountAfterTax(0.2, (45000 - 11500)) + 11500;
    }
    const taxedIncome = salary - takeHomeIncome
    this.setState({ 
      grossPay: salary,
      takeHomeIncome,
      taxedIncome 
    });
    this.renderResults()
  }
  
  calculateAmountAfterTax = (tax_rate, amount) => amount * (1-tax_rate);

  // ------------------ animations ----------------------
  renderResults = () => {
    this.renderResultEl('.primary', 'slide-left')
    this.renderResultEl('.table', 'slide-right')
    this.renderResultEl('.btn', 'slide-left')

  }

  renderResultEl = (className, animation) => {
    const el = document.querySelector('#result ' + className);
    el.classList.add(animation);
  }

  trackScrolling = () => {
    const introEl = document.querySelector('#intro');
    const navIcon = document.querySelector('#nav .icon i');
    if(introEl.getBoundingClientRect().bottom < 100){
      navIcon.classList.add('rotate')
    } else {
      navIcon.classList.remove('rotate')
    }
  }

  animateScrollArrow = event => {
    const arrowEl = event.target.firstChild
    arrowEl.classList.contains('rotate')
      ? this.animationDirection(arrowEl, 'down')
      : this.animationDirection(arrowEl, 'up');
  }

  animationDirection = (el, direction) => {
    el.classList.add(direction);
    setTimeout(() => el.classList.remove(direction), 500)
  }

  scrollToSection = () => {
    const scrollIcon = document.querySelector('#nav i');
    let section
    if(scrollIcon.classList.contains('rotate')){
      section = document.querySelector('#intro');
    } else {
      section = document.querySelector('#calculator')
    }
    window.scrollTo(0, section.offsetTop - 20);
  }

  // ------------------- relief section --------------------
  hideReliefInfo = () => {
    const el = document.querySelector('#relief');
    el.classList.add('invisible');
  }

  revealReliefInfo = e => {
    e.preventDefault();
    document.querySelector('#relief').classList.remove('invisible');
  }

  handleHideReliefEl = e => {
    if(e.target.className === 'mask'){
      this.hideReliefInfo();
    }
  }

  render() {
    return (
      <div className="App">
        < Introduction 
            renderQuotes={this.quoteAnimation} 
        />
        < Navigation 
          animateScrollArrow={this.animateScrollArrow}
          scrollToSection={this.scrollToSection}
        />
        < Calculator 
          getSalaryPerAnnum={this.getSalaryPerAnnum}
          takeHomeIncome={this.state.takeHomeIncome}
          taxedIncome={this.state.taxedIncome}
          revealReliefInfo={this.revealReliefInfo}
        />
        < RelieveMe 
          hideReliefInfo={this.hideReliefInfo}
          handleExitClick={this.handleHideReliefEl}
          grossPay={this.state.grossPay}
          takeHomeIncome={this.state.takeHomeIncome}
        />
      </div>
    )
  }
}

export default App;
