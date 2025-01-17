function updateLinks() {
    document.querySelectorAll('a[href*="youtube.com/redirect"]').forEach(link => {
        const url = new URL(link.href);
        const queryParams = new URLSearchParams(url.search);
        const newHref = queryParams.get('q');
        if (newHref) {
            link.href = newHref;
        }
    });
}

const observer = new MutationObserver(updateLinks);
observer.observe(document.body, { childList: true, subtree: true });

document.addEventListener('DOMContentLoaded', updateLinks);