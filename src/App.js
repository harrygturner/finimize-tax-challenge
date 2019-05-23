import React, { Component } from 'react';
import './App.css';

import Introduction from './containers/intro/Introduction';
import Calculator from './containers/calc/Calculator';
import Navigation from './components/Navigation';

class App extends Component {


  state = {
    takeHomeIncome: 0,
    taxedIncome: 0
  }

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
      takeHomeIncome,
      taxedIncome 
    });
    this.renderResults()
  }
  
  calculateAmountAfterTax = (tax_rate, amount) => amount * (1-tax_rate);

  renderResults = () => {
    const table = document.querySelector('#result table');
    table.classList.add('slide-right');

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
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

  render() {
    return (
      <div className="App">
        < Introduction 
            renderQuotes={this.quoteAnimation} 
        />
        < Navigation 
          animateScrollArrow={this.animateScrollArrow}
        />
        < Calculator 
          getSalaryPerAnnum={this.getSalaryPerAnnum}
          takeHomeIncome={this.state.takeHomeIncome}
          taxedIncome={this.state.taxedIncome}
        />
      </div>
    )
  }
}

export default App;
