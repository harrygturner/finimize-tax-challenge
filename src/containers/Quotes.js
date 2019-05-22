import React, { Component } from 'react';

import Quote from '../components/Quote'

class Quotes extends Component {
   
   state = {
      intervalId: null
   }

   componentDidMount() {
      const quotes = Array.from(document.querySelectorAll('#quote'));
      const intervalId = setInterval(() => this.quoteFadeInAndOut(quotes), 8000)
      this.setState({ intervalId })
   }

   componentWillMount() {
      clearInterval(this.state.intervalId)
   }

   quoteFadeInAndOut = array => {
      const quoteEl = array[Math.floor(Math.random() * array.length)];
      quoteEl.classList.add('appear');
      setTimeout(() => quoteEl.classList.remove('appear'), 5000);
   }

   render() {
      return (
         <React.Fragment>
            < Quote
               content="Death, taxes and childbirth! There's never any convenient time for any of them."
               author="Margaret Mitchell"
               top='50px'
               left='10px'
            />
            < Quote
               content="The hardest thing in the world to understand is the income tax."
               author="Albert Einstein"
               top='30px'
               left='400px'
            />
            < Quote
               content="Today, it takes more brains and effort to make out the income-tax form than it does to make the income."
               author="Alfred E. Neuman"
               top='600px'
               left='20px'
            />
            < Quote
               content="...but in this world nothing can be said to be certain, except death and taxes."
               author="Benjamin Franklin"
               top='300px'
               left='20px'
            />
            < Quote
               content="Read my lips: no new taxes."
               author="George H.W. Bush"
               top='10vh'
               left='60vw'
            />
            < Quote
               content="A person doesn't know how much he has to be thankful for until he has to pay taxes on it."
               author="Anonymous"
               top='20vh'
               left='90vw'
            />
            < Quote
               content="I'm proud to pay taxes in the United States; the only thing is, I could be just as proud for half the money."
               author="Arthur Godfrey"
               top='80vh'
               left='80vw'
            />
            < Quote
               content="We must care for each other more, and tax each other less."
               author="Bill Archer"
               top='50px'
               left='70vw'
            />
            < Quote
               content="Few of us ever test our powers of deduction, except when filling out an income tax form."
               author="Laurence J. Peter"
               top='50vh'
               left='85vw'
            />
            < Quote
               content="I like to pay taxes. With them, I buy civilization."
               author="Oliver Wendell Holmes Jr."
               top='80vh'
               left='55vw'
            />
         </React.Fragment>
      )
   }
}

export default Quotes;