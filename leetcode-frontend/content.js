// // // content.js
// // console.log("Hello from content.js");

// // function createButton(label, tooltip, className) {
// //     const button = document.createElement("div");
// //     button.className = `py-1.5 font-medium items-center whitespace-nowrap focus:outline-none 
// //         inline-flex bg-fill-3 dark:bg-dark-fill-3 hover:bg-fill-2 dark:hover:bg-dark-fill-2 
// //         h-[32px] select-none px-5 text-[12px] leading-[18px] rounded-lg ml-2 
// //         text-text-primary dark:text-text-primary ${className}`;
// //     button.style.marginRight = "8px";
// //     button.innerHTML = label;
// //     button.setAttribute("role", "button");
// //     button.setAttribute("data-tooltip", tooltip);
// //     button.style.borderRadius = "30px";
// //     return button;
// // }

// // function getQuestionContent() {
// //     const metaTag = document.querySelector('meta[name="description"]');
// //     if (!metaTag) {
// //         console.error("Meta description tag not found");
// //         return "";
// //     }
// //     return metaTag.getAttribute("content").trim();
// // }

// // function getSelectedLanguage() {
// //     const langButton = document.querySelector(".rounded.items-center");
// //     if (!langButton) {
// //         console.error("Language button not found");
// //         return "java";
// //     }
// //     return langButton.textContent.trim();
// // }

// // function findToolbar() {
// //     return document.querySelector(".flex.w-full.items-center.justify-between");
// // }

// // function injectButtons() {
// //     const toolbar = findToolbar();
// //     if (!toolbar) {
// //         console.log("Toolbar not found");
// //         return;
// //     }

// //     console.log("Toolbar found");

// //     const explainButton = createButton("🔍 Explain", "Explain the question", "explain-button");
// //     const answerButton = createButton("💡 Answer", "Generate an answer", "answer-button");
    
// //     toolbar.appendChild(explainButton);
// //     toolbar.appendChild(answerButton);
    
// //     console.log("Buttons inserted into the toolbar");

// //     explainButton.addEventListener("click", async () => {
// //         try {
// //             explainButton.innerHTML = "Explaining...";
// //             explainButton.disabled = true;

// //             const questionContent = getQuestionContent();
// //             const response = await fetch("http://localhost:7070/api/leetcode/explain", {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({ questionContent }),
// //             });

// //             if (!response.ok) throw new Error(`Failed to get explanation: ${response.status}`);

// //             const explanation = await response.text();
// //             alert("Explanation: " + explanation);
// //         } catch (err) {
// //             console.error(err);
// //             alert("Failed to explain the question");
// //         } finally {
// //             explainButton.innerHTML = "🔍 Explain";
// //             explainButton.disabled = false;
// //         }
// //     });

// //     answerButton.addEventListener("click", async () => {
// //         try {
// //             answerButton.innerHTML = "Generating answer...";
// //             answerButton.disabled = true;

// //             const questionContent = getQuestionContent();
// //             const language = getSelectedLanguage();
// //             const response = await fetch("http://localhost:7070/api/leetcode/answer", {
// //                 method: "POST",
// //                 headers: { "Content-Type": "application/json" },
// //                 body: JSON.stringify({ questionContent, language }),
// //             });

// //             if (!response.ok) throw new Error(`Failed to get answer: ${response.status}`);

// //             const answer = await response.text();
// //             alert("Answer: " + answer);
// //         } catch (err) {
// //             console.error(err);
// //             alert("Failed to generate answer");
// //         } finally {
// //             answerButton.innerHTML = "💡 Answer";
// //             answerButton.disabled = false;
// //         }
// //     });
// // }

// // const observer = new MutationObserver(() => {
// //     if (findToolbar()) {
// //         injectButtons();
// //         observer.disconnect();
// //     }
// // });

// // observer.observe(document.body, { childList: true, subtree: true });



// console.log("Hello from content.js");

// function createButton(label, tooltip, className) {
//     const button = document.createElement("div");
//     button.className = `py-1.5 font-medium items-center whitespace-nowrap focus:outline-none 
//         inline-flex bg-fill-3 dark:bg-dark-fill-3 hover:bg-fill-2 dark:hover:bg-dark-fill-2 
//         h-[32px] select-none px-5 text-[12px] leading-[18px] rounded-lg -ml-2 
//         text-text-primary dark:text-text-primary ${className}`;
//     button.style.marginRight = "2px";
//     button.innerHTML = label;
//     button.setAttribute("role", "button");
//     button.setAttribute("data-tooltip", tooltip);
//     button.style.borderRadius = "30px";
//     return button;
// }

// function createPopup(content) {
//     const popup = document.createElement("div");
//     popup.style.position = "fixed";
//     popup.style.top = "50%";
//     popup.style.left = "50%";
//     popup.style.transform = "translate(-50%, -50%)";
//     popup.style.backgroundColor = "white";
//     popup.style.padding = "20px";
//     popup.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
//     popup.style.borderRadius = "8px";
//     popup.style.zIndex = "1000";
//     popup.style.width = "80%";
//     popup.style.textAlign = "center";

//     const text = document.createElement("p");
//     text.style.fontSize = "15px";
//     text.style.color = "black";
//     text.innerHTML = content;
    
//     const closeButton = document.createElement("button");
//     closeButton.innerText = "Close";
//     closeButton.style.backgroundColor = "red";
//     closeButton.style.color = "white";
//     closeButton.style.border = "none";
//     closeButton.style.padding = "8px 12px";
//     closeButton.style.marginTop = "10px";
//     closeButton.style.cursor = "pointer";
//     closeButton.style.borderRadius = "5px";
    
//     closeButton.addEventListener("click", () => {
//         document.body.removeChild(popup);
//     });

//     popup.appendChild(text);
//     popup.appendChild(closeButton);
//     document.body.appendChild(popup);
// }

// function getQuestionContent() {
//     const metaTag = document.querySelector('meta[name="description"]');
//     if (!metaTag) {
//         console.error("Meta description tag not found");
//         return "";
//     }
//     return metaTag.getAttribute("content").trim();
// }

// function getSelectedLanguage() {
//     const langButton = document.querySelector(".rounded.items-center");
//     if (!langButton) {
//         console.error("Language button not found");
//         return "java";
//     }
//     return langButton.textContent.trim();
// }

// function findToolbar() {
//     return document.querySelector(".flex.w-full.items-center.justify-between");
// }

// function injectButtons() {
//     const toolbar = findToolbar();
//     if (!toolbar) {
//         console.log("Toolbar not found");
//         return;
//     }

//     console.log("Toolbar found");

//     const explainButton = createButton("🔍 Explain", "Explain the question", "explain-button");
//     const answerButton = createButton("💡 Answer", "Generate an answer", "answer-button");
    
//     toolbar.appendChild(explainButton);
//     toolbar.appendChild(answerButton);
    
//     console.log("Buttons inserted into the toolbar");

//     explainButton.addEventListener("click", async () => {
//         try {
//             explainButton.innerHTML = "Explaining...";
//             explainButton.disabled = true;

//             const questionContent = getQuestionContent();
//             const response = await fetch("http://localhost:7070/api/leetcode/explain", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ questionContent }),
//             });

//             if (!response.ok) throw new Error(`Failed to get explanation: ${response.status}`);

//             const explanation = await response.text();
//             createPopup("Explanation: " + explanation);
//         } catch (err) {
//             console.error(err);
//             createPopup("Failed to explain the question");
//         } finally {
//             explainButton.innerHTML = "🔍 Explain";
//             explainButton.disabled = false;
//         }
//     });

//     answerButton.addEventListener("click", async () => {
//         try {
//             answerButton.innerHTML = "Generating answer...";
//             answerButton.disabled = true;

//             const questionContent = getQuestionContent();
//             const language = getSelectedLanguage();
//             const response = await fetch("http://localhost:7070/api/leetcode/answer", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ questionContent, language }),
//             });

//             if (!response.ok) throw new Error(`Failed to get answer: ${response.status}`);

//             const answer = await response.text();
//             createPopup("Answer: " + answer);
//         } catch (err) {
//             console.error(err);
//             createPopup("Failed to generate answer");
//         } finally {
//             answerButton.innerHTML = "💡 Answer";
//             answerButton.disabled = false;
//         }
//     });
// }

// const observer = new MutationObserver(() => {
//     if (findToolbar()) {
//         injectButtons();
//         observer.disconnect();
//     }
// });

// observer.observe(document.body, { childList: true, subtree: true });



console.log("Hello from content.js");

function createButton(label, tooltip, className) {
    const button = document.createElement("div");
    button.className = `py-1.5 font-medium items-center whitespace-nowrap focus:outline-none 
        inline-flex bg-fill-3 dark:bg-dark-fill-3 hover:bg-fill-2 dark:hover:bg-dark-fill-2 
        h-[32px] select-none px-5 text-[12px] leading-[18px] rounded-lg -ml-2 
        text-text-primary dark:text-text-primary ${className}`;
    button.style.marginRight = "2px";
    button.innerHTML = label;
    button.setAttribute("role", "button");
    button.setAttribute("data-tooltip", tooltip);
    button.style.borderRadius = "30px";
    return button;
}

function createPopup(content) {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%)";
popup.style.backgroundColor = "white";
popup.style.padding = "20px";
popup.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
popup.style.borderRadius = "8px";
popup.style.zIndex = "1000";
popup.style.width = "80vw"; // 80% of the viewport width
popup.style.maxWidth = "800px"; // Maximum width limit
popup.style.height = "80vh"; // 80% of the viewport height
popup.style.overflowY = "auto"; // Enables scrolling inside the popup
popup.style.textAlign = "left";

    const text = document.createElement("pre");
    text.style.fontSize = "15px";
    text.style.fontFamily = "roboto, sans-serif";
    text.style.color = "black";
    text.style.whiteSpace = "pre-wrap";
    text.style.wordWrap = "break-word";
    text.innerHTML = content;
    
    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.style.backgroundColor = "blue";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.padding = "8px 12px";
    closeButton.style.marginTop = "10px";
    closeButton.style.cursor = "pointer";
    closeButton.style.borderRadius = "5px";
    closeButton.style.marginLeft = "50%";
    
    closeButton.addEventListener("click", () => {
        document.body.removeChild(popup);
    });

    popup.appendChild(text);
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
}

function getQuestionContent() {
    const metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
        console.error("Meta description tag not found");
        return "";
    }
    return metaTag.getAttribute("content").trim();
}

function getSelectedLanguage() {
    const langButton = document.querySelector(".rounded.items-center");
    if (!langButton) {
        console.error("Language button not found");
        return "java";
    }
    return langButton.textContent.trim().toLowerCase();
}

function findToolbar() {
    return document.querySelector(".flex.w-full.items-center.justify-between");
}

function injectButtons() {
    const toolbar = findToolbar();
    if (!toolbar) {
        console.log("Toolbar not found");
        return;
    }

    console.log("Toolbar found");

    const explainButton = createButton("🔍 Explain", "Explain the question", "explain-button");
    const answerButton = createButton("💡 Answer", "Generate an answer", "answer-button");
    
    toolbar.appendChild(explainButton);
    toolbar.appendChild(answerButton);
    
    console.log("Buttons inserted into the toolbar");

    explainButton.addEventListener("click", async () => {
        try {
            explainButton.innerHTML = "Explaining...";
            explainButton.disabled = true;

            const questionContent = getQuestionContent();
            const response = await fetch("https://leetcodeext.onrender.com/api/leetcode/explain", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ questionContent }),
            });

            if (!response.ok) throw new Error(`Failed to get explanation: ${response.status}`);

            const explanation = await response.text();
            createPopup("Explanation: " + explanation);
        } catch (err) {
            console.error(err);
            createPopup("Failed to explain the question");
        } finally {
            explainButton.innerHTML = "🔍 Explain";
            explainButton.disabled = false;
        }
    });

    answerButton.addEventListener("click", async () => {
        try {
            answerButton.innerHTML = "Generating answer...";
            answerButton.disabled = true;
            

            const questionContent = getQuestionContent();
            // const language = getSelectedLanguage();

           const language = "java";
            const response = await fetch("https://leetcodeext.onrender.com/api/leetcode/answer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ questionContent, language }),
                
            });

            if (!response.ok) throw new Error(`Failed to get answer: ${response.status}`);

            const answer = await response.text();
            createPopup("Answer: " + answer);
        } catch (err) {
            console.error(err);
            createPopup("Failed to generate answer");
        } finally {
            answerButton.innerHTML = "💡 Answer";
            answerButton.disabled = false;
        }
    });
}

const observer = new MutationObserver(() => {
    if (findToolbar()) {
        injectButtons();
        observer.disconnect();
    }
});

observer.observe(document.body, { childList: true, subtree: true });