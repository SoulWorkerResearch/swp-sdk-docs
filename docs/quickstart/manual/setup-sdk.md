# Setup SDK

## Add project to the solution

- Menu bar -> File
- Add -> Existing project...
- Add `./swp-sdk/swp-sdk.vcxitems`

## Setup headers path

  - Goto plugin project settings
  - C/C++
  - General
  - Add `$(SolutionDir)swp-sdk\headers;` into `Additional Include Directories`