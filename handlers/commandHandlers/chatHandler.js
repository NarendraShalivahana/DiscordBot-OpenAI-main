const openai = require("./../../src/ai.js");

const command = "chat";
const description = "gives the response to a prompt";

const execute = async (message, args) => {
    if(args.length === 0) {
        await message.reply("Please provide an input");
    }

    else {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: args[0], 
            temperature:0.3,
            max_tokens:256
        });
        await message.reply(response.data.choices[0].text);
    }

}



module.exports =  {command, execute, description};