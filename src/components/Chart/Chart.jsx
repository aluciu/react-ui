import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  {name: 'MON', uv: 100},
  {name: 'TUE', uv: 210},
  {name: 'WED', uv: 180},
  {name: 'THU', uv: 300},
  {name: 'FRI', uv: 400},
];

class Chart extends Component {
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

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['line', 'bars']).isRequired,
}

export default Chart;
