/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.pytorch.rn.core;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import java.util.Arrays;
import java.util.List;
import org.jetbrains.annotations.NotNull;
import com.pytorch.rn.core.canvas.CanvasRenderingContext2DModule;
import com.pytorch.rn.core.canvas.CanvasViewManager;
import com.pytorch.rn.core.canvas.ImageDataModule;
import com.pytorch.rn.core.ImageModule;
import com.pytorch.rn.core.jsi.PytorchCoreJSIModule;

public class PyTorchCorePackage implements ReactPackage {

  @Override
  public List<NativeModule> createNativeModules(@NotNull ReactApplicationContext reactContext) {
    return Arrays.<NativeModule>asList(
      new ImageModule(reactContext),
      new ImageDataModule(reactContext),
      new CanvasRenderingContext2DModule(reactContext),
      new PyTorchCoreJSIModule(reactContext));
  }

  @Override
  public List<ViewManager> createViewManagers(@NotNull ReactApplicationContext reactContext) {
    return Arrays.<ViewManager>asList(new CanvasViewManager(reactContext));
  }
}
