/**
 * A function that uses the OpenAI GPT-3 API to generate a response to a prompt.
 *
 * @param {string} prompt - The prompt to generate a response to.
 * @returns {string} The generated response.
 */
function gpt3(prompt) {
    // Get the script cache.
    var cache = CacheService.getScriptCache();

    // Get the cached messages, or create an empty array of messages.
    var cache_str = cache.get("cache");
    var messages = [];
    if (cache_str == null) {
        messages = [
            {
                role: "user",
                content: prompt
            }
        ];
    } else {
        messages = JSON.parse(cache_str);
        messages[messages.length] = {
            role: "user",
            content: prompt
        };
    }

    // Call the OpenAI API to generate a response.
    var response = callAPI(messages);

    // Add the generated response to the messages array.
    messages[messages.length] = {
        role: "assistant",
        content: response
    };

    // Remove old messages if the length of the messages array exceeds a certain threshold.
    while (JSON.stringify(messages).length > 100000) {
        var todelete = messages.shift();
    }

    // Cache the messages array.
    cache.put("cache", JSON.stringify(messages), 300);

    // Return the generated response.
    return response;
}

/**
 * A function that calls the OpenAI API to generate a response to a set of messages.
 *
 * @param {Object[]} messages - An array of messages.
 * @returns {string} The generated response.
 */
function callAPI(messages) {
    // Construct the data object for the API call.
    var data = {
        model: "gpt-3.5-turbo",
        messages: messages
    };

    // Set the options for the API call.
    var options = {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(data),
        headers: {
            Authorization: "Bearer " + CONFIG().openai_apikey
        },
        muteHttpExceptions: true
    };

    // Make the API call.
    var response = UrlFetchApp.fetch(
        "https://api.openai.com/v1/chat/completions",
        options
    );

    // Log the response for debugging purposes.
    Logger.log(response.getContentText());

    // If the API call returned an error, return the error message.
    if (JSON.parse(response.getContentText()).error?.message != undefined) {
        return JSON.parse(response.getContentText())["error"]["message"];
    } else {
        // Otherwise, return the generated response.
        return JSON.parse(response.getContentText())["choices"][0]["message"]["content"];
    }
}
