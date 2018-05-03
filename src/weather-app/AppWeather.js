import React, { Component } from 'react';
import Titles from './Component/Title'
import Form from './Component/Form'
import Weather from './Component/Weather'

const API_KEY = "1ae0e05d29e5676b5e6ae70a74f6fef2"

class AppWeather extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country:undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`)
        const data = await api_call.json();

       if (city && country) {
            this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
            });
       } else {
            this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: 'Please entera correct value.'
        })
       }
    }
    
    render() {
        return (
        <div className="bloc meteo">
            <div className="content">
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        </div>
        );
        }
    }

export default AppWeather;


