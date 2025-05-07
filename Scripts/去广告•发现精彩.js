
// 获取请求体
let body = $request.body; // $request.body 是 Surge 提供的对象，表示 HTTP 请求的请求体

// 检查请求体是否为空
if (!body) {
    $done({ body }); // 如果请求体为空，直接返回原始请求体
}

// 将请求体转换为 JSON 对象
let obj;
try {
    obj = JSON.parse(body); // 尝试将 JSON 字符串转换为 JavaScript 对象
} catch (e) {
    // 如果 JSON 解析失败，返回错误信息
    $done({ body: `{"error": "JSON Parse error: ${e.message}"}` });
}

// 检查 obj.channels 是否存在并且是数组，并且至少有一个元素
if (obj.channels && Array.isArray(obj.channels) && obj.channels.length > 0) {
    // 遍历 channels 数组中的每个对象
    obj.channels.forEach(channel => {
        // 检查每个 channel 是否有 channelId 属性
        if (channel.channelId) {
            channel.channelId = null; // 将 channelId 设置为 null
        }
    });
}

// 将修改后的对象转换回 JSON 字符串并返回
$done({ body: JSON.stringify(obj) }); 
// JSON.stringify() 将 JavaScript 对象转换为 JSON 字符串，供 Surge 发送修改后的请求









/****************另一种方案*********************
 * 
 * 
 * 
 
// 获取响应体
let body = $response.body; // $response.body 是 Surge 提供的对象，表示 HTTP 请求的响应体

// 将响应体转换为 JSON 对象
let obj = JSON.parse(body); // JSON.parse() 将 JSON 字符串转换为 JavaScript 对象

// 修改 paramType 和 expireDate 字段
// 检查 obj.data、obj.data[0] 和 obj.data[0].items 是否存在，确保后续操作不会因未定义的字段而报错
if (obj.data && obj.data[0] && obj.data[0].items) {
    // 遍历 items 数组中的每个对象，item 是数组中的每个元素
    obj.data[0].items.forEach(item => {
        // 检查每个 item 是否有 paramType 属性，避免处理不存在的属性
        if (item.paramType) {
            item.paramType = 1; // 将 paramType 改为 1
        }

        // 检查每个 item 是否有 expireDate 属性，避免处理不存在的属性
        if (item.expireDate) {
            item.expireDate = "2023-10-31"; // 将 expireDate 修改为指定日期
        }
    });
}

// 将修改后的对象转换回 JSON 字符串并返回
$done({body: JSON.stringify(obj)}); // JSON.stringify() 将 JavaScript 对象转换为 JSON 字符串

 * 
 * 
 * 
*******************************************/