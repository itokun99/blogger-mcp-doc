# Getting Started

This guide covers building the server, authenticating with Google, and connecting it to an MCP client.

## Prerequisites

- **Go 1.27.1 or later** — the `go` directive in `go.mod` requires this version; older toolchains refuse to build.
- **A Google Cloud project** with the Blogger API enabled.
- **OAuth credentials** — create an OAuth client ID of type **Desktop app** in Google Cloud Console and download the credentials file as `credentials.json`.

## Building

```bash
cd /path/to/blogger-mcp
go build -o bin/blogger-mcp .
```

The binary is written to `bin/blogger-mcp`.

## Authentication

Run the `auth` subcommand once. It opens your browser, waits for the Google consent screen, and writes a token file that the server reuses from then on.

```bash
./bin/blogger-mcp auth \
  -credentials /path/to/credentials.json \
  -token /path/to/token.json
```

What happens during the run:

1. The OAuth consent URL prints to stderr and your browser opens to it.
2. A local callback server listens on `127.0.0.1:8085` (change with `-port`).
3. After you approve, the code is exchanged for a token, which is written to the token path with `0600` permissions.

The token carries a refresh token, so the server renews access on its own at runtime. You only re-run `auth` if you revoke access or rotate credentials.

If you omit the paths, `auth` falls back to the defaults listed in [Configuration](/setup).

## Using with an MCP client

Clients that read an `mcpServers` block, such as Claude Code and Cursor, need the absolute path to the binary:

```json
{
  "mcpServers": {
    "blogger-mcp": {
      "command": "/absolute/path/to/bin/blogger-mcp",
      "args": [
        "-credentials",
        "/absolute/path/to/credentials.json",
        "-token",
        "/absolute/path/to/token.json"
      ]
    }
  }
}
```

If you keep both files in the default locations, you can drop `args` entirely and set the environment variables instead:

```json
{
  "mcpServers": {
    "blogger-mcp": {
      "command": "/absolute/path/to/bin/blogger-mcp",
      "env": {
        "BLOGGER_MCP_CREDENTIALS": "/absolute/path/to/credentials.json",
        "BLOGGER_MCP_TOKEN": "/absolute/path/to/token.json"
      }
    }
  }
}
```

The server speaks stdio, so keep `args` free of anything that writes to stdout.
