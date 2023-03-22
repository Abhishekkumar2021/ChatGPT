const { Configuration, OpenAIApi } = require('openai');

const openai_api_key = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
    apiKey: openai_api_key,
    // organization: 'org-MrpMnTOB5jVw7OcolQqVYBx1'
});
const openai = new OpenAIApi(configuration);
module.exports = openai;