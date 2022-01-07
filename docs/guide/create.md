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

class you_plugin_name final : public swpsdk::plugin::base<you_plugin_name>
{
  // This method will be called when plugin redy to execute.
  auto on_ready(void) const -> void override
  {
  }
};
```

- **Step 1:** Register plugin

```cpp
#include <swpsdk/plugin/plugin_attach.hpp>

auto swpsdk::plugin::attach(void)->swpsdk::plugin::info* {
  return new swpsdk::plugin::info{
    // write here game version
    .game_version = game::version(),

    // write here version of you plugin
    .plugin_version = semver::version(),

    // base class have singleton instance of you class
    .instance = you_plugin_name::instance()
  };
}
```
