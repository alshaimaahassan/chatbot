
const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";
const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
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
