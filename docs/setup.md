# Configuration

Every flag has an environment variable equivalent, and both fall back to a path under the user config directory.

## Flags and environment variables

| Flag | Environment variable | Default |
|------|---------------------|---------|
| `-credentials` | `BLOGGER_MCP_CREDENTIALS` | `<user config dir>/blogger-mcp/credentials.json` |
| `-token` | `BLOGGER_MCP_TOKEN` | `<user config dir>/blogger-mcp/token.json` |
| `auth -port` | none | `8085` |
| `-version` | none | `false` (prints the version and exits) |

The user config directory is `os.UserConfigDir()`: on macOS it is `~/Library/Application Support`, on Linux `~/.config`. So the macOS defaults are:

- `~/Library/Application Support/blogger-mcp/credentials.json`
- `~/Library/Application Support/blogger-mcp/token.json`

On the rare system that reports no config directory at all, the server falls back to the current working directory.

Precedence runs **flag first, then environment variable, then the default path**.

## Special flags

`-port` and `-version` exist only in the `auth` subcommand and main command respectively, and neither reads an environment variable.

## Token lifecycle

The token file carries a refresh token. The server uses it to renew access automatically at runtime. You only need to re-run `auth` if you:

- Revoke access from your Google account
- Rotate your credentials file
