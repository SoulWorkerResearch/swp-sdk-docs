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
#include <sdk/plugin/plugin_base.hpp>

class you_plugin_name final : public sdk::plugin::base<you_plugin_name>
{
  // This method will be called when plugin redy to execute.
  auto on_ready(void) const -> void override
  {
  }
};
```

- **Step 1:** Register plugin

```cpp
#include <sdk/plugin/plugin_emplace.hpp>

auto sdk::plugin::emplace(void)->sdk::plugin::info* {
  return new sdk::plugin::info{
    // write here game version
    .game_version = semver::version(),

    // write here version of you plugin
    .plugin_version = semver::version(),

    // base class have singleton instance of you class
    .instance = you_plugin_name::instance()
  };
}
```
