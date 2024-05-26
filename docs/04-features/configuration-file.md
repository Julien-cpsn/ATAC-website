---
title: Configuration file
---

## Overview

ATAC provides a flexible configuration system that allows you to tailor the application's behavior to your specific needs. By placing a `atac.toml` file in the application directory, you can customize various settings. All configuration keys are optional, so you can specify only those you need to change from their default values.

## Usage

To apply these configurations, simply create or edit the `atac.toml` file in the application directory with your desired settings.
ATAC will automatically read and apply these configurations on startup, allowing you to customize your experience seamlessly.

## Configuration Options

### Disable Syntax Highlighting

If you prefer to disable syntax highlighting, add the following line to your `atac.toml` configuration file:

```toml
disable_syntax_highlighting = true
```

### Disable CORS

To disable Cross-Origin Resource Sharing (CORS), include this line in your `atac.toml` configuration file:

```toml
disable_cors = true
```

### Set a Proxy

You can set HTTP and HTTPS proxies by adding the following section to your `atac.toml` configuration file:

```toml
[proxy]
http_proxy = "http://my_proxy.com"
https_proxy = "https://my_proxy.com"
```

## Full Default Configuration File

Below is the full default configuration for ATAC. This can serve as a template for your custom configuration file:

```toml
disable_syntax_highlighting = false    
disable_cors = false
    
[proxy]
http_proxy = "http://my_proxy.com"
https_proxy = "https://my_proxy.com"
```