import LottieView from "lottie-react-native";

import React, { useState } from "react";
import { Modal } from "react-native";
import SplashLogo from "../../assets/splash.json";
const SplashScreen = () => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
  const closeSplashScreen = () => setIsSplashScreenVisible(false);
  return (
    <Modal
      visible={isSplashScreenVisible}
      animationType="fade"
    >
      <LottieView
        style={{ flex: 1 }}
        source={SplashLogo}
        loop={false}
        autoPlay
        onAnimationFinish={closeSplashScreen}
      />
    </Modal>
  );
};

export default SplashScreen;
