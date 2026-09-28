# Pages

Eight tools for managing static pages: listing, fetching, creating, updating, patching, deleting, publishing, and reverting.

## blogger_list_pages

List the pages of a blog, optionally filtered by status, view, and body inclusion.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `max_results` | integer | No | Maximum number of results. |
| `page_token` | string | No | Token from a previous listing to fetch the next page. |
| `status` | string | No | Filter by status: `LIVE`, `DRAFT`, or `SOFT_TRASHED`. |
| `view` | string | No | Access level: `READER`, `AUTHOR`, or `ADMIN`. |
| `fetch_body` | boolean | No | Include page body in the response. |

## blogger_get_page

Get a page by its ID.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `page_id` | string | **Yes** | ID of the page. |

## blogger_create_page

Create a page on a blog. Creates a **DRAFT** by default; set `draft: false` to create it as `LIVE` immediately.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `title` | string | **Yes** | Page title. |
| `content` | string | **Yes** | Page content as HTML markup. |
| `draft` | boolean | No | If `false`, publish immediately. Defaults to `true` (draft). |

## blogger_update_page

Update a page: fetches the current page, applies the provided fields, then saves the merged page.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `page_id` | string | **Yes** | ID of the page. |
| `title` | string | No | New title. |
| `content` | string | No | New content as HTML. |
| `status` | string | No | New status: `LIVE` or `DRAFT`. |

## blogger_patch_page

Patch a page by sending only the provided fields.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `page_id` | string | **Yes** | ID of the page. |
| `title` | string | No | New title. |
| `content` | string | No | New content as HTML. |

## blogger_delete_page

Delete a page.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `page_id` | string | **Yes** | ID of the page. |

## blogger_publish_page

Publish a page, making it publicly visible.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `page_id` | string | **Yes** | ID of the page. |

## blogger_revert_page

Revert a page, discarding its unpublished changes.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `page_id` | string | **Yes** | ID of the page. |
