
// const API_URL = "https://api.openai.com/v1/chat/completions";
// const API_KEY = "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";

// const promptInput = document.getElementById("promptInput");
// const generateBtn = document.getElementById("generateBtn");
// const stopBtn = document.getElementById("stopBtn");
// const resultText = document.getElementById("resultText");

// let controller = null; // Store the AbortController instance

// const generate = async () => {
//     // Alert the user if no prompt value
//     if (!promptInput.value) {
//         alert("Please enter a prompt.");
//         return;
//     }

//     // Disable the generate button and enable the stop button
//     generateBtn.disabled = true;
//     stopBtn.disabled = false;
//     resultText.innerText = "Generating...";

//     // Create a new AbortController instance
//     controller = new AbortController();
//     const signal = controller.signal;

//     try {
//         // Fetch the response from the OpenAI API with the signal from AbortController
//         const response = await fetch(API_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${API_KEY}`,
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo",
//                 messages: [{ role: "user", content: promptInput.value }],
//                 max_tokens: 100,
//                 stream: true, // For streaming responses
//             }),
//             signal, // Pass the signal to the fetch request
//         });

//         // Read the response as a stream of data
//         const reader = response.body.getReader();
//         const decoder = new TextDecoder("utf-8");
//         resultText.innerText = "";

//         while (true) {
//             const { done, value } = await reader.read();
//             if (done) {
//                 break;
//             }
//             // Massage and parse the chunk of data
//             const chunk = decoder.decode(value);
//             const lines = chunk.split("\\n");
//             const parsedLines = lines
//                 .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
//                 .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
//                 .map((line) => JSON.parse(line)); // Parse the JSON string

//             for (const parsedLine of parsedLines) {
//                 const { choices } = parsedLine;
//                 const { delta } = choices[0];
//                 const { content } = delta;
//                 // Update the UI with the new content
//                 if (content) {
//                     resultText.innerText += content;
//                 }
//             }
//         }
//     } catch (error) {
//         // Handle fetch request errors
//         if (signal.aborted) {
//             resultText.innerText = "Request aborted.";
//         } else {
//             console.error("Error:", error);
//             resultText.innerText = "Error occurred while generating.";
//         }
//     } finally {
//         // Enable the generate button and disable the stop button
//         generateBtn.disabled = false;
//         stopBtn.disabled = true;
//         controller = null; // Reset the AbortController instance
//     }
// };

// const stop = () => {
//     // Abort the fetch request by calling abort() on the AbortController instance
//     if (controller) {
//         controller.abort();
//         controller = null;
//     }
// };

// promptInput.addEventListener("keyup", (event) => {
//     if (event.key === "Enter") {
//         generate();
//     }
// });
// generateBtn.addEventListener("click", generate);
// stopBtn.addEventListener("click", stop);



const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";
const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const stopBtn = document.getElementById("stopBtn");
const resultText = document.getElementById("resultText");



generateBtn.addEventListener("click", function () {
    sendToChatGPT();
});

function sendToChatGPT() {
    let value = promptInput.value;

    let body = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: value }],
    };

    let headers = {
        Authorization: "Bearer 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",
    };

    axios
        .post(API_URL, body, {
            headers: headers,
        })
        .then((response) => {
            let reply = response.data.choices[0].message.content;
            resultText.textContent = reply;
        });
}