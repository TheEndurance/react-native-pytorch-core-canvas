import { NativeModules, Platform } from 'react-native';

// const LINKING_ERROR =
//   `The package 'react-native-pytorch-core-canvas' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo Go\n';

// const PytorchCoreCanvas = NativeModules.PyTorchCoreJSI
//   ? NativeModules.PyTorchCoreJSI
//   : new Proxy(
//       {},
//       {
//         get() {
//           throw new Error(LINKING_ERROR);
//         },
//       }
//     );

  // Call the synchronous blocking install() function
//   const result = PytorchCoreCanvas.install();
//   if (result !== true) {
//     throw new Error(
//       `Failed to install react-native-pytorch-core: The native PlayTorchJSIModule could not be installed! Looks like something went wrong when installing JSI bindings: ${result}`,
//     );
//   }

  export { Canvas } from './CanvasView';
  export type { CanvasRenderingContext2D } from './CanvasView';
  export { ImageUtil } from './ImageModule';
  export type { Image } from './ImageModule';
