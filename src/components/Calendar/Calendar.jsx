import React, { Component } from 'react';
import DayPicker from "react-day-picker";

import css from './Calendar.css';

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,
    };
  }

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  render() {
    return (
      <div className={css.calendar}>
        <DayPicker
          classNames={css}
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
          enableOutsideDays
        />
      </div>
    );
  }
}

export default Calendar;
