require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-pytorch-core-canvas"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "12.0" }
  s.source       = { :git => "https://github.com/TheEndurance/react-native-pytorch-core-canvas.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm,swift,cpp}", "cxx/src/**/*.{h,cpp}"

  s.swift_version = "5.0"

  s.requires_arc = true

  s.pod_target_xcconfig = {
    "DEFINES_MODULE" => "YES",
    "USE_HEADERMAP" => "YES",
    "HEADER_SEARCH_PATHS" => '$(inherited) "$(PODS_TARGET_SRCROOT)/ReactCommon" "$(PODS_TARGET_SRCROOT)" "$(PODS_ROOT)/Headers/Private/React-Core" "$(PODS_ROOT)/Headers/Public/React-hermes" "$(PODS_ROOT)/Headers/Public/hermes-engine"',
    "OTHER_SWIFT_FLAGS" => '-no-verify-emitted-module-interface'
  }
  s.preserve_paths = [
    "ios/**/*.h"
  ]

  s.public_header_files = [
      "ios/Image/**/*.h",
      "ios/PyTorchCore-Bridging-Header.h"
  ]

  s.dependency "React-callinvoker"
  s.dependency "React"
  s.dependency "React-Core"
end