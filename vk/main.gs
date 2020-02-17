function parseVK_V3(str, vk_token) {
    const http_build_query = (formdata, numeric_prefix) => {
            // Generate URL-encoded query string
            // http_build_query({ foo: 'bar', baz: 'boom', cow: 'milk', php: 'hypertext processor' }, '', '&amp;');
            // 'foo=bar&baz=boom&cow=milk&php=hypertext+processor'
            var key, use_val, use_key, i = 0,
                tmp_arr = [];
            for (key in formdata) {
                use_key = escape(key);
                use_val = encodeURIComponent((formdata[key].toString()));
                use_val = use_val.replace(/%20/g, '+');
                if (numeric_prefix && !isNaN(key)) {
                    use_key = numeric_prefix + i;
                }
                tmp_arr[i] = use_key + '=' + use_val;
                i++;
            }
            return tmp_arr.join('&');
        },
        request_params = {
            lang: 'ru',
            v: '5.119',
            access_token: vk_token,
            q: str
        },
        options = {
            "muteHttpExceptions": true,
            "headers": {
                "Authorization": "Bearer",
                "Accept-Language": "ru"
            },
            "method": "post",
            "contentType": "application/json; charset=utf-8",
        },
        get_params = http_build_query(request_params, ''),
        url = `https://api.vk.com/method/execute.searchNames?${get_params}`; // https://api.vk.com/method/METHOD_NAME?PARAMETERS&access_token=ACCESS_TOKEN&v=V 

    // Logger.log(url);

    var response = UrlFetchApp.fetch(url, options),
        responseCode = response.getResponseCode();

    if ((responseCode == 200) && (response != undefined)) {
        var data_obj = JSON.parse(response);
        return data_obj;
    } else {
        return;
    }
}
