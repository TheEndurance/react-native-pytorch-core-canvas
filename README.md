# react-native-pytorch-core-canvas

Just the Canvas and Image modules extracted from the react-native-pytorch-core (Playtorch) library

Why?
- It's actually a decent implementation of canvas compared to alternatives like expo-2d-context and react-native-canvas which are not performant enough for reactive applications
- The original library is no longer maintained and does not work on react-native versions >0.71

## Installation

```sh
npm install react-native-pytorch-core-canvas
```

## Usage

```js
import { Image, ImageUtil, CanvasRenderingContext2d, Canvas } from 'react-native-pytorch-core-canvas';
```
See the [react-native-pytorch-core](https://github.com/facebookresearch/playtorch) repo for more information on the canvas and image modules, as everything is identical

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
