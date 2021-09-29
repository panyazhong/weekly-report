import * as echarts from "echarts";
import { useEffect } from "react";

const EchartsExample = () => {
  useEffect(() => {
    const myChart = echarts.init(
      document.getElementById("echarts") as HTMLElement
    );

    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };
    myChart.setOption(option);
  }, []);

  return (
    <div className={"echarts-box"}>
      <div id={"echarts"} style={{ width: "500px", height: "300px" }}></div>
    </div>
  );
};

export default EchartsExample;
