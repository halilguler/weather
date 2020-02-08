import React, { Component } from "react";
import Api from "../../Api/Api";
import SearchButton from "../SearchButton/SearchButton";
import Input from "../Input/Input";
import WeatherCard from "../WeatherCard/WeatherCard";
import { API_KEY } from "../../config";
import "./Weather.css";
import toastr from "toastr";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

class Weather extends Component {
  state = {
    nameCity: "",
    fullData: [],
    dailyData: [],
    city: ""
  };

  onSearchSubmit = async () => {
    await Api.get("/data/2.5/forecast", {
      params: {
        q: this.state.nameCity,
        appid: API_KEY,
        units: "metric"
      }
    })
      .then(data => {
        const dailyData = data.data.list.filter(reading =>
          reading.dt_txt.includes("18:00:00")
        );
        this.setState({
          fullData: data.data.list,
          dailyData: dailyData,
          city: data.data.city.name
        });
        toastr.success(`${this.state.city} Şehrine Ait Hava Durumları`);
      })
      .catch(err => {
        toastr.error(
          "Aradığınız Şehre Ait Hava Durumu Bilgisi Bulunmamaktadır.!"
        );
      });
  };

  onKeyPress = event => {
    if (event.key === "Enter") {
      this.onSearchSubmit();
    }
  };

  onHandleChange = e => {
    this.setState({ nameCity: e.target.value });
  };

  formatCards = () => {
    return this.state.dailyData.map((reading, index) => (
      <WeatherCard nameCity={this.state.city} reading={reading} key={index} />
    ));
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div>
            <h2>Hava Durumu</h2>
          </div>
          <div>
            <Input
              onHandleChange={this.onHandleChange}
              onKeyPress={this.onKeyPress}
            ></Input>
          </div>
          <div>
            <SearchButton onSearchSubmit={this.onSearchSubmit}></SearchButton>
            <Link className="out" to="/">
              <div className="buttonExit">Logout</div>
            </Link>
          </div>
        </div>
        <div className="wrapper invisible-shadow">
          <Container>
            <Row>{this.formatCards()}</Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Weather;
