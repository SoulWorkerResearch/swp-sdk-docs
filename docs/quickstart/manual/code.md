# Code

## Write plugin

> Please, dont use DllMain.  
> This is fraught with <ins>unintended consequences</ins>. (c) G-Man

### Create main class

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

### Register plugin

```cpp
#include <swpsdk/plugin/get_info.hpp>

auto swpsdk::plugin::get_info(info& _info) -> void
{
  // Write here game version
  _info.game_version = version{ 1, 4, 2, 3 };

  // Write here version of you plugin
  _info.plugin_version = version{ 1 };

  // Base class have singleton instance of you class
  _info.instance = &swp_template::plugin::instance();
}
```
