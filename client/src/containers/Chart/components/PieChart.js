import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import "chart.piecelabel.js";

function PieChart(props) {
  const {
    chart, redraw, redrawComplete, height
  } = props;

  useEffect(() => {
    if (redraw) {
      setTimeout(() => {
        redrawComplete();
      }, 1000);
    }
  }, [redraw]);

  return (
    <div>
      <Pie
        data={chart.chartData.data}
        options={chart.chartData.options}
        height={height}
        redraw={redraw}
      />
    </div>
  );
}

PieChart.defaultProps = {
  redraw: false,
  redrawComplete: () => { },
  height: 300,
};

PieChart.propTypes = {
  chart: PropTypes.object.isRequired,
  redraw: PropTypes.bool,
  redrawComplete: PropTypes.func,
  height: PropTypes.number,
};

export default PieChart;
