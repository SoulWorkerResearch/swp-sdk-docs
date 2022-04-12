# Install dependencies

## Prerequisites

You will need [vcpkg](https://vcpkg.io/en/index.html) for manage dependencies.

After installation, it is necessary to add the core dependencies used.

| Option                                              | Description         |
| --------------------------------------------------- | ------------------- |
| [spdlog](https://github.com/gabime/spdlog)          | used for logging    |

## Manifest

The final manifest file should look something like this.

```json
{
  "name": "you plugin name",
  "version": "1.0.0",
  "dependencies": ["spdlog"]
}
```

> If you do not understand what you are talking about, read the [vcpkg](https://vcpkg.io/en/index.html) documentation more carefully.
