import React, {Component, ReactNode} from 'react';
import theme from "./Datepicker.module.css";


const weekdays = [
  {
    short: "ma",
    full: "maandag"
  },
  {
    short: "di",
    full: "dindsdag"
  },
  {
    short: "wo",
    full: "woendsdag"
  },
  {
    short: "do",
    full: "donderdag"
  },
  {
    short: "vr",
    full: "vrijdag"
  },
  {
    short: "za",
    full: "zaterdag"
  },
  {
    short: "zo",
    full: "zondag"
  },
];
const months = [
  {
    short: "jan",
    full: "januari"
  },
  {
    short: "feb",
    full: "februari"
  },
  {
    short: "maa",
    full: "maart"
  },
  {
    short: "apr",
    full: "april"
  },
  {
    short: "mei",
    full: "mei"
  },
  {
    short: "jun",
    full: "juni"
  },
  {
    short: "jul",
    full: "juli"
  },
  {
    short: "aug",
    full: "augustus"
  },
  {
    short: "sep",
    full: "september"
  },
  {
    short: "okt",
    full: "oktober"
  },
  {
    short: "nov",
    full: "november"
  },
  {
    short: "dec",
    full: "december"
  },
];


/**
 * class Datepicker
 * @author Ingo Andelhofs
 */
export default class Datepicker extends Component {
  public state: any = {
    open: false,
    date: {
      day: 7,
      month: "jul",
      year: 2020,
    }
  };

  public onToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  }


  public onDayChange = (day: number) => {
    this.setState({
      date: {
        day,
        month: this.state.date.month,
        year: this.state.date.year,
      }
    });
  }

  public onMonthChange = (month: string) => {
    this.setState({
      date: {
        day: this.state.date.day,
        month,
        year: this.state.date.year,
      }
    });
  }

  public onYearChange = (year: number) => {
    this.setState({
      date: {
        day: this.state.date.day,
        month: this.state.date.month,
        year,
      }
    });
  }


  public render(): ReactNode {
    const active = this.state.open ? theme.Active : "";
    const days = [];

    for (let i = 1; i <= 31; ++i) {
      days.push(i);
    }


    return <div className={`${theme.Datepicker} ${active}`}>
      <input
        readOnly
        type="text"
        onClick={this.onToggle}
        className={theme.DatepickerInput}
        placeholder={`${this.state.date.day} ${this.state.date.month} ${this.state.date.year}`} />

      <div className={theme.DatepickerDropdown}>
        <div className={theme.DatepickerMonths}>
          {months.map(month => {
            const selected = month.short === this.state.date.month ? theme.Selected : "";

            return <div
              key={month.short}
              onClick={() => this.onMonthChange(month.short)}
              className={theme.DatepickerMonth + " " + selected}>{month.full}</div>;
          })}
        </div>

        <div>
          <div className={theme.DatepickerWeeks}>
            {weekdays.map(weekday => {
              return <div key={weekday.short} className={theme.DatepickerWeekday}>{weekday.short}</div>;
            })}
          </div>

          <div className={theme.Line}/>

          <div className={theme.DatepickerDays}>
            {days.map(day => {
              const selected = day === this.state.date.day ? theme.Selected : "";

              return <div
                key={day}
                onClick={() => this.onDayChange(day)}
                className={theme.DatepickerDay + " " + selected}>{day}</div>;
            })}
          </div>
        </div>
      </div>
    </div>;
  }
}