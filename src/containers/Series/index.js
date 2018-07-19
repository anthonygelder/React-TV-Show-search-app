import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }
    
    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true });
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ series: json, isFetching: false }));
        console.log(e)
        console.log(e.target.value)
    }

    render() {
        const { series, seriesName, isFetching } = this.state;

        return (
            <div>
                <div>
                    <input 
                    value={seriesName}
                    type="text" 
                    onChange={this.onSeriesInputChange} />
                </div>
                { 
                    !isFetching && series.length === 0 && seriesName.trim() === '' 
                    &&
                    <p>Please enter name of show</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No show has been found matching this name</p>
                }
                {
                    isFetching && <p>Loading...</p>
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }
}

export default Series;