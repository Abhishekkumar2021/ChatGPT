const openai = require('../config/openai');

async function getModelList(){
    try {
        const response = await openai.listModels();
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function getTextCompletion(prompt){
    try {
        const params = {
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 3000,
            temperature: 0.5,
            stream: false,
        };
        const response = await openai.createCompletion(params);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const listModels = async (req, res) => {
    try {
        const data = await getModelList();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const textCompletion = async (req, res) => {
    try {
        const data = await getTextCompletion(req.body.prompt);
        res.status(200).json(data.choices[0].text);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const testStream = async (req, res) => {
    console.log("testStream")
    res.setHeader('Content-Type', 'text/event-stream');
    
    const id = setInterval(() => {
        res.write(`data: ${Date.now()}\n\n`);
    }, 500);

    res.on('close', () => {
        console.log("close")
        clearInterval(id);
        res.end();
    });
}

module.exports = {
    listModels,
    textCompletion,
    testStream
}