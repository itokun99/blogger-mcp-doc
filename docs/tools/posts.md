# Posts

Ten tools for managing blog posts: listing, searching, fetching, creating, updating, patching, deleting, publishing, and reverting.

## blogger_list_posts

List the posts of a blog, with optional filters, ordering, and pagination.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `max_results` | integer | No | Maximum number of results (1–100). |
| `page_token` | string | No | Token from a previous listing to fetch the next page. |
| `status` | string | No | Filter by status: `LIVE`, `DRAFT`, `SCHEDULED`, or `SOFT_TRASHED`. |
| `labels` | array | No | Filter by label(s). |
| `order_by` | string | No | Sort field: `PUBLISHED` or `UPDATED`. |
| `sort_order` | string | No | Sort direction: `DESCENDING` or `ASCENDING`. |
| `start_date` | string | No | Start date filter (inclusive). |
| `end_date` | string | No | End date filter (inclusive). |
| `fetch_body` | boolean | No | Include post body in the response. |
| `fetch_images` | boolean | No | Include featured image URLs. |
| `view` | string | No | Access level: `READER`, `AUTHOR`, or `ADMIN`. |

## blogger_search_posts

Search the posts of a blog by a query string, with optional filters.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `query` | string | **Yes** | Search query string. |
| `max_results` | integer | No | Maximum number of results (1–100). |
| `page_token` | string | No | Token from a previous search to fetch the next page. |
| `status` | string | No | Filter by status: `LIVE`, `DRAFT`, `SCHEDULED`, or `SOFT_TRASHED`. |
| `labels` | array | No | Filter by label(s). |
| `order_by` | string | No | Sort field: `PUBLISHED` or `UPDATED`. |
| `sort_order` | string | No | Sort direction: `DESCENDING` or `ASCENDING`. |
| `start_date` | string | No | Start date filter (inclusive). |
| `end_date` | string | No | End date filter (inclusive). |
| `fetch_body` | boolean | No | Include post body in the response. |
| `fetch_images` | boolean | No | Include featured image URLs. |
| `view` | string | No | Access level: `READER`, `AUTHOR`, or `ADMIN`. |

## blogger_get_post

Get a post by its ID.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post. |

## blogger_get_post_by_path

Get a post by its blog path, for example `/2024/01/hello.html`.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `path` | string | **Yes** | Path of the post (e.g. `/2024/01/hello.html`). |

## blogger_create_post

Create a post on a blog. The post is created as a **DRAFT** unless `draft: false`.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `title` | string | **Yes** | Post title. |
| `content` | string | **Yes** | Post content as HTML markup. |
| `labels` | array | No | Labels to apply to the post. |
| `draft` | boolean | No | If `false`, publish immediately. Defaults to `true` (draft). |

## blogger_update_post

Update a post by reading it and applying only the provided fields.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post. |
| `title` | string | No | New title. |
| `content` | string | No | New content as HTML. |
| `labels` | array | No | New labels. |
| `status` | string | No | New status: `LIVE`, `DRAFT`, `SCHEDULED`, or `SOFT_TRASHED`. |

## blogger_patch_post

Patch a post, updating only the provided fields without reading it first.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post. |
| `title` | string | No | New title. |
| `content` | string | No | New content as HTML. |
| `labels` | array | No | New labels. |

::: warning
`blogger_patch_post` cannot change the post status. Use `blogger_update_post` for that.
:::

## blogger_delete_post

Delete a post.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post. |

## blogger_publish_post

Publish a post, making it publicly visible.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post. |

## blogger_revert_post

Revert a post, discarding its unpublished changes.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post. |
