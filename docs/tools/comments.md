# Comments

Six tools for managing blog comments: listing, fetching, approving, marking as spam, stripping content, and deleting.

## blogger_list_comments

List comments on a blog or on a single post, with filters for status, date range, and pagination.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | No | ID of a specific post to scope comments to. Omit to list all blog comments. |
| `max_results` | integer | No | Maximum number of results. |
| `page_token` | string | No | Token from a previous listing to fetch the next page. |
| `status` | string | No | Filter by status, e.g. `LIVE`, `SPAM`. |
| `view` | string | No | Access level: `READER`, `AUTHOR`, or `ADMIN`. |
| `start_date` | string | No | Start date filter (inclusive). |
| `end_date` | string | No | End date filter (inclusive). |
| `fetch_bodies` | boolean | No | Include comment body in the response. |

## blogger_get_comment

Get a comment by its ID.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post the comment belongs to. |
| `comment_id` | string | **Yes** | ID of the comment. |

## blogger_approve_comment

Approve a comment, marking it as visible.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post the comment belongs to. |
| `comment_id` | string | **Yes** | ID of the comment. |

## blogger_delete_comment

Delete a comment.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post the comment belongs to. |
| `comment_id` | string | **Yes** | ID of the comment. |

## blogger_mark_comment_spam

Mark a comment as spam.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post the comment belongs to. |
| `comment_id` | string | **Yes** | ID of the comment. |

## blogger_remove_comment_content

Remove a comment's content while keeping the comment itself.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | **Yes** | ID of the blog. |
| `post_id` | string | **Yes** | ID of the post the comment belongs to. |
| `comment_id` | string | **Yes** | ID of the comment. |
