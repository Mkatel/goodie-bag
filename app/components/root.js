import React from 'react'
import {connect} from 'react-redux'
import {getCandies} from '../reducers/index'
import Axios from 'axios'
import AllCandies from './AllCandies'
import {  NavLink } from 'react-router-dom'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

class Root extends React.Component {
  componentDidMount(){
    this.props.getCandies();
    //this.testData()
  }
  async testData(){
    const res = await Axios.get('/api/candies');
    //console.log("daara", res.data);
  }
  render () {
    const {candies} = this.props
     return( <div>
         <nav>
          Goodie Bag
          
         </nav>
           <main>
             <h1>Welcome to the Goodie Bag!</h1>
             <AllCandies candies = {candies} />
             <p>What a nice home page for your goodies!</p>
         </main>
        </div>
     )
  }
}

const mapState = (state) => {
  return {
    candies: state.candies
  }
}

const mapDispatch = (dispatch) => {
   return {getCandies: () => {dispatch(getCandies())}}
}

export default connect(mapState, mapDispatch)(Root)





// const Root = () => {
//   return (
//     <div>
//       <nav>
//         Goodie Bag
//       </nav>
//       <main>
//         <h1>Welcome to the Goodie Bag!</h1>
//         <p>What a nice home page for your goodies!</p>
//       </main>
//     </div>
//   )
// }

// export default Root
