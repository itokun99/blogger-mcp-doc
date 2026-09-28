# Blogs

Three tools for discovering and fetching blogs.

## blogger_list_blogs

List the blogs the user can access. Defaults to the authenticated user (`user_id: self`).

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | No | ID of the user whose blogs to list. Defaults to `self`. |

## blogger_get_blog

Get a blog by its ID.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog to fetch. |
| `view` | string | No | Access level: `READER`, `AUTHOR`, or `ADMIN`. |
| `max_posts` | integer | No | Maximum number of posts to include in the response. |

## blogger_get_blog_by_url

Get a blog by its URL.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | **Yes** | Full URL of the blog (e.g. `https://example.blogspot.com`). |
| `view` | string | No | Access level: `READER`, `AUTHOR`, or `ADMIN`. |
