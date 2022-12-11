// import { useState } from "react";
// import { Text } from "react-native";

// const QRcodeScan = () => {
//   const [scan, setScan] = useState(false);
//   const [result, setResult] = useState();

//   function onSuccess(e) {
//     setResult(e.data);
//     setScan(false);
//   }

//   function onURLPress() {
//     Linking.openURL(result);
//   }

//   return (
//     <QRCodeScanner
//       reactivate={true}
//       showMarker={true}
//       ref={(node) => {
//         this.scanner = node;
//       }}
//       onRead={this.onSuccess}
//       topContent={<Text style={styles.centerText}>Scan your QRCode!</Text>}
//       bottomContent={
//         <Text
//           style={[styles.buttonText, styles.buttonTouchable]}
//           onPress={() => setScan(false)}
//         >
//           Cancel Scan
//         </Text>
//       }
//     />

//     /* This is where you show the generated url */
//     // {result && <Text onPress={onURLPress}>{result}</Text>}
//   );
// };

// export default QRcodeScan;
