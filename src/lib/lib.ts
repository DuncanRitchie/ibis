/**
 * Adds the base URL to `url` for use in hrefs.
 * If no parameter is passed, returns the base URL.
 */
// Copied from Childhood Blog.
function addLinkBase(url?: string): string {
	const base = import.meta.env.BASE_URL;
	const concatenated = base + '/' + (url ?? '');
	const cleaned = concatenated.replace('../', '/').replaceAll(/\/+/g, '/');
	return cleaned; 
}

export { addLinkBase }
