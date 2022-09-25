import React, {Component} from 'react'; 
import {Routes, Route} from 'react-router-dom'; 

import Layout from './components/Layout/Layout'; 
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';

import LoadingSpinner from './shared/UI/LoadingSpinner/LoadingSpinner';
import {ASSETS_BASE_DIR} from './shared/constants';

class App extends Component {
  state = {
    homeContent: null,
    fetchLoading: true
  }

  async componentDidMount() {
    const response = await fetch(`${ASSETS_BASE_DIR}/home/home.json`);
    const result = await response.json();
    this.setState({homeContent: result, fetchLoading: false})
  }

  render() {
    return (this.state.fetchLoading
      ? (
        <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
          <LoadingSpinner/>
        </div>
      )
      : (
        <div>
          <Layout>
            <Routes>
              <Route path="/" element={<Home content={this.state.homeContent}/>}/>
              <Route path="/projects" element={<Projects/>}/>
            </Routes>
          </Layout>
        </div>
      )
    );
  }
}

export default App;
