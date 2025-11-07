import React, { forwardRef } from "react";
import LottieView from "lottie-react-native";

// Native expects `source` (require(...) or an object), plus autoPlay/loop/speed, etc.
export default forwardRef((props, ref) => {
  return <LottieView ref={ref} {...props} />;
});
