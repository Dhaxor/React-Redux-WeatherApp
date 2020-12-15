import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import {fetchWeather} from '../actions/index';


class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term : ''}

        this.onInputChange = this.onInputChange.bind(this);
        
        this.onFormChange = this.onFormChange.bind(this);


    }

    onInputChange(event){
            // console.log(event.target.value);
            this.setState({term : event.target.value})
    }

    onFormChange(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);

        this.setState({term: ''})
        
    }

    render(){

        return (
       
        <div>

            <form onSubmit={this.onFormChange} >
            <input
            placeholder="Enter a city"
            onChange={this.onInputChange}
            value={this.state.term}
            // value={this.state.term}
            />
            <span>
                <button
                type="submit"
                >Submit</button>
            </span>

            </form>

        </div>

)

    }
}

function mapDispatchtoProps(dispatch){
        return bindActionCreators({ fetchWeather },dispatch)
}


export default connect(null,mapDispatchtoProps)(SearchBar);

