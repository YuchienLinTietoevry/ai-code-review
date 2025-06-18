const OpenAIAgent = require("./openai-agent");

class QwenAgent extends OpenAIAgent {
    constructor(apiKey, fileContentGetter, fileCommentator, model) {
        super(apiKey, fileContentGetter, fileCommentator, model, "https://dashscope.aliyuncs.com/compatible-mode/v1");
    }
}

module.exports = QwenAgent;