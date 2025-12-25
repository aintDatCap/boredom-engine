function removeElementByXPath(xpath) {
    function tryRemove() {
        const result = document.evaluate(
            xpath, 
            document, 
            null, 
            XPathResult.FIRST_ORDERED_NODE_TYPE, 
            null
        );
        
        const element = result.singleNodeValue;
        
        if (element) {
            element.remove();
            console.log("Element removed successfully.");
            return true;
        }
        return false;
    }

    // 1. Attempt to remove immediately
    if (!tryRemove()) {
        console.log("Element not found yet, watching for changes...");

        // 2. If not found, keep watching the DOM until it appears
        const observer = new MutationObserver((mutations, obs) => {
            if (tryRemove()) {
                obs.disconnect(); // Stop watching once the job is done
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Call the function with your specific XPath
const targetPath = '//*[@id="root"]/div[1]/div[1]/div[2]/main/div[1]/div/div/div[1]';
removeElementByXPath(targetPath);