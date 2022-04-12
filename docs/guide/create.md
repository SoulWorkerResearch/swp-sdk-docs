# Create plugin

> Please, dont use DllMain.  
> This is fraught with unintended consequences.

## Setup project

- **Step 0:** Add sdk

  - Menu bar -> File
  - Add -> Existing project...
  - Add `swp-sdk.vcxitems`

- **Step 1:** Add sdk path

  - Goto project settings
  - C/C++
  - General
  - Add `$(SolutionDir)swp-sdk\headers;` into `Additional Include Directories`

## Write plugin

- **Step 0:** Create main class

```cpp
#include <swpsdk/plugin/plugin_base.hpp>
#include <spdlog/spdlog.h>

class you_plugin_name final : public swpsdk::plugin::base<you_plugin_name>
{
  // This method will be called when plugin redy to execute.
  auto main(void) const -> void override
  {
    // Log message
    spdlog::info("hello, world!");
  }
};
```

- **Step 1:** Register plugin

```cpp
#include <swpsdk/plugin/attach.hpp>

auto swpsdk::plugin::attach(void)->swpsdk::plugin::info* {
  return new swpsdk::plugin::info{
    // Write here game version
    .game_version = version{ 1, 2, 3, 4 },

    // Write here version of you plugin
    .plugin_version = version{ 1, 2, 3, 4 },

    // Base class have singleton instance of you class
    .instance = &you_plugin_name::instance()
  };
}
```
