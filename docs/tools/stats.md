# Stats & Users

Five tools for retrieving user profiles, blog info, and page view statistics.

## blogger_get_user

Get a Blogger user profile. Defaults to the authenticated user (`user_id: self`).

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | No | ID of the user to fetch. Defaults to `self`. |

## blogger_get_blog_user_info

Get the blog and per-user info pair for a blog and user.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `user_id` | string | No | ID of the user. Defaults to `self`. |

## blogger_get_page_views

Get the page view counts of a blog, one count per available time range.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `range` | string | No | Time range passed through to the API unchanged. Examples: `ALL_TIME`, `7DAYS`. Omit to use the API default. |

## blogger_list_post_user_infos

List posts with per-user info for a blog and user.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `user_id` | string | No | ID of the user. Defaults to `self`. |

## blogger_get_post_user_info

Get the post and per-user info pair for a blog, post, and user.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post. |
| `user_id` | string | No | ID of the user. Defaults to `self`. |
