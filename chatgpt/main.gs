function gpt3(promt) {
    var cache = CacheService.getScriptCache();
    var cache_str = cache.get('cache');
    var messages = [];
    if (cache_str == null) {
        messages = [{
            "role": "user",
            "content": promt
        }];
    } else {
        messages = JSON.parse(cache_str);
        messages[messages.length] = {
            "role": "user",
            "content": promt
        };
    }
    var response = callAPI(messages);
    messages[messages.length] = {
        "role": "assistant",
        "content": response
    };
    while (JSON.stringify(messages).length > 100000) {
        var todelete = messages.shift();
    }
    cache.put('cache', JSON.stringify(messages), 300);
    return response;
}

function callAPI(messages) {
    var data = {
        'model': 'gpt-3.5-turbo',
        'messages': messages,
    };
    var options = {
        'method': 'post',
        'contentType': 'application/json',
        'payload': JSON.stringify(data),
        'headers': {
            Authorization: 'Bearer ' + CONFIG().openai_apikey,
        },
        muteHttpExceptions: true
    };
    var response = UrlFetchApp.fetch(
        'https://api.openai.com/v1/chat/completions',
        options,
    );
    Logger.log(response.getContentText());
    if (JSON.parse(response.getContentText()).error?.message != undefined) {
        return JSON.parse(response.getContentText())['error']['message'];
    } else {
        return JSON.parse(response.getContentText())['choices'][0]['message']['content']
    }
}
