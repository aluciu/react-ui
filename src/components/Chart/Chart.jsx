import React, { Component, PropTypes } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  CartesianGrid,
} from 'recharts';

import css from './Chart.css';

const data = [
  {name: 'MON', uv: 100, pv: 2400},
  {name: 'TUE', uv: 210, pv: 1398},
  {name: 'WED', uv: 180, pv: 9800},
  {name: 'THU', uv: 300, pv: 3908},
  {name: 'FRI', uv: 400, pv: 4800},
];

class Chart extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['line', 'bars']).isRequired,
  }

  renderLineChart() {
    return (
      <ResponsiveContainer width="100%" aspect={1}>
        <LineChart data={data}>
          <XAxis tickLine={false} axisLine={false} dataKey="name" padding={{ left: 20, right: 20 }} />
          <CartesianGrid vertical={false} />
          <Line type="linear" dataKey="uv" stroke="#000" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  renderBarsChart() {
    return (
      <ResponsiveContainer width="100%" aspect={1}>
        <BarChart data={data}>
          <XAxis tickLine={false} axisLine={false} dataKey="name" padding={{ left: 20, right: 20 }} />
          <CartesianGrid vertical={false} />
          <Bar dataKey="uv" fill="#de6262" barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  render() {
    return (
      <div className={css.chart}>
        <h2 className={css.chartTitle}>{this.props.title}</h2>

        {this.props.type === 'line' ? this.renderLineChart() : null}
        {this.props.type === 'bars' ? this.renderBarsChart() : null}
      </div>
    );
  }
}

export default Chart;
