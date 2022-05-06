import { StyleSheet, Text, View, Animated,TextInput } from 'react-native'
import React from 'react';
import Svg, { G, Circle, Rect, CircleProps } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const DonutChart = ( percentage = 75,
    radius = 40,
    strokeWidth = 10,
    duration = 500,
    color = "tomato",
    delay = 0,
    textColor="white",
    max = 100) => {
    const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef<CircleProps>();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue:number) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
    //   easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };

//   React.useEffect(() => {
//     animation(percentage);
//     animated.addListener((v) => {
//       const maxPerc = 100 * v.value / max;
//       const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
//       if (inputRef?.current) {
//         inputRef.current.setNativeProps({
//           text: `${Math.round(v.value)}`,
//         });
//       }
//       if (circleRef?.current) {
//         circleRef.current.setNativeProps({
//           strokeDashoffset,
//         });
//       }
//     }, [max, percentage]);

//     return () => {
//       animated.removeAllListeners();
//     };
//   });
  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G
          rotation="-90"
          origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          { fontSize: radius / 2, color: textColor ?? color }
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({})