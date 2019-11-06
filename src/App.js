import React, { Component } from 'react';

import './css/App.css';
import './css/font-awesome.css';

import Box from './components/Box';
import Icon from './components/commons/Icon';
import Select from './components/commons/select';
import { loadApi } from './utils/billboardService';
import formatDate from './utils/formatDate';


class App extends Component {
  constructor(){
    super();
    this.state = {
       songs: [],
       counter: 1,
       day: 0,
       month: 0,
       year: 0,
    };
    this.downArrow = this.downArrow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upArrow = this.upArrow.bind(this);
    this.handleSelectDay = this.handleSelectDay.bind(this);
    this.handleSelectMonth = this.handleSelectMonth.bind(this);
    this.handleSelectYear = this.handleSelectYear.bind(this);
  }

  componentDidMount() {
      return loadApi()
      .then((json) => {
        this.setState({ songs: json });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  handleSelectDay(value){
    const day = document.getElementById('day')[document.getElementById('day').selectedIndex].value;
    this.setState({ day: day });
    console.log(this.state.day);
  }

  handleSelectMonth(value){
    const month = document.getElementById('month')[document.getElementById('month').selectedIndex].value;
    this.setState({ month: month });
    console.log(this.state.month);
  }

  handleSelectYear(value){
    const year = document.getElementById('year')[document.getElementById('year').selectedIndex].value;
    this.setState({ year: year });
    console.log(this.state.year);
  }

  handleSubmit() {
    const day = this.state.day;
    const month = this.state.month;
    const year = this.state.year;
    const bdaySong = [];
    const bday = year+'-'+month+'-'+day;
    if(bday!== '') {
      this.state.songs.map(song => {
          if(bday >= song.startDate && bday < song.endDate){
            bdaySong['Title'] = song.songTitle;
            bdaySong['YoutubeId'] = song.youtubeId;
           }
           console.log(bdaySong['Title']);
           return bdaySong;
      });
    }else{
      console.log("Não foi possível realizar busca");
    }
  }

   downArrow() {
      //document.getElementById("first-list").style = "top:-620px";
      //document.getElementById("second-list").style = "top:-620px";
      //document.getElementById("btn1").style = "display:none";
      //document.getElementById("btn2").style = "display:block";
      this.setState({ counter: this.state.counter + 1 });
      let value = 540*this.state.counter;
      document.getElementById("first-list").style.top = "-"+value+"px";
  }

  upArrow() {
    this.setState({ counter: this.state.counter - 1 });
    let value = 540*this.state.counter;
    document.getElementById("first-list").style.top = "+"+value+"px";
    //  document.getElementById("first-list").style = "top:0";
      //document.getElementById("second-list").style = "top:80px";
      //document.getElementById("btn2").style = "display:none";
      //document.getElementById("btn1").style = "display:block";
  }

  render() {

    return (
      <div className="box">
        <h1>Find the #1 Song on the Day You Were Born</h1>
        <form id="datePicker">
          <Select name="month" clickSelect={ ()=> this.handleSelectMonth()}/>
          <Select name="day" clickSelect={ ()=> this.handleSelectDay()}/>
          <Select name="year" clickSelect={ ()=> this.handleSelectYear()}/>
          <input type="button" value="Find #1 Song" onClick={this.handleSubmit} />
        </form>
        <ul id="first-list">
          { this.state.songs.reverse().slice(0,10).map((song) =>
            {
              let dataSong = formatDate({ date: song.startDate, format: 'DD/MM/YY' });
              return (
                <li key={song.youtubeId}>
                  <Box artist={song.artist}
                    endDate={song.endDate}
                    startDate={dataSong}
                    songTitle={song.songTitle}
                    youtubeId={song.youtubeId}
                  />
                </li>
              );
            })
          }
        </ul>
        <Icon name="down" onClick={() => this.downArrow()} />
        <Icon name="up" onClick={() => this.upArrow()} />
      </div>
    );
  }
}


export default App;
