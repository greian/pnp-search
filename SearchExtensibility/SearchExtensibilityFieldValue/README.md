# Search Extensibility - Field Value

## Summary

This code example is a Search Extension that can be used in the PnP Search Web Parts by including a <field-value> component in the handlebar code.
The field-value extension shows the value of a field based on a site url, an item id and a list name. The code handles different types of values (text, numbers, dates, managed metadata, etc.). In the PnP Search Results Web Part, handelbars can be used to create the layout of the search result, and Managed Properties from the search index are used to display the values. But, in some cases, you might want to pick up the actual value of a field using the id of the item. Here is an example of how this can be used in a PnP Handlebar Template:

![image](https://github.com/greian/pnp-search/assets/8362190/82135476-4ad7-4fa2-8c53-df117ce8294a)




## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.15.2-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Search Extensions for PnP Search requires SharePoint Framework 1.15.2 (currently, per 2023-10-10)

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| FieldValueSearchExtension | Glenn Reian (Web Stack Umeå AB) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.0     | October 10, 2023 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.

## Features

This extension illustrates the following concepts:

- PnP Search Web Parts
- PnP Search Extensibility
- SharePoint Framework 1.15.2 - Library

In the picture below we have used the Field Value search extension to show comments:

![image](https://github.com/greian/pnp-search/assets/8362190/578d36b6-4675-4c78-8694-bb0bf0bbe58a)****

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
