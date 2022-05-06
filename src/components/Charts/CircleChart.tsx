import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import React from "react";

export const CircleChart = () => {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };
  const dataProgress = {
    labels: ["Año", "Mes", "Hoy"], // optional
    data: [0.8, 0.6, 0.4],
    colors: ["#00a9f4", "#f4a900", "#f44900"], // optional
  };
  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#e0e4f3",
    backgroundGradientTo: "#e0e4f3",
    color: (opacity = 1) => `rgba(4, 20, 56, ${opacity})`,
    style: {
      // borderRadius: 16,
    },
    legendFontColor: "#ffffff",
    legendFontSize: 30,
    yAxisLabel: "$",
    yAxisSuffix: "k",
    yAxisInterval: 1,
    yAxisTicks: 5,
    xAxisLabel: "Month",
    xAxisTicks: 5,
    xAxisInterval: 1,
  };
  return (
    <ProgressChart
      data={dataProgress}
      width={screenWidth}
      height={220}
      strokeWidth={16}
      radius={32}
      chartConfig={chartConfig}
      yAxisLabel={"DH"}
      // hideLegend={true}
      withCustomBarColorFromData={true}
      fromZero={true}
    />
  );
};

const styles = StyleSheet.create({});
