# Create plugin

```cpp
#include <sdk/plugin/plugin_base.hpp>

class desireworker final : public sdk::plugin::base<desireworker>
{
  virtual auto on_ready(void) const -> void override
  {
    start();
  }
};
```
