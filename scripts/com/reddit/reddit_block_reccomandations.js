const observer = new MutationObserver(() => {
  // Try to find the element using the CSS selector (it's faster than XPath)
  const element = document.querySelector(
    "#subgrid-container > div:first-child"
  );

  if (element) {
    element.remove();
    // Optional: Stop observing if you only need to kill it once
    // observer.disconnect();
  }
});

// Start watching the body for changes
observer.observe(document.body, { childList: true, subtree: true });
