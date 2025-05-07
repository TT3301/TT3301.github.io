// 获取 Surge 模块的参数并解析
// $argument 是 Surge 提供的包含传递参数的字符串，使用 '&' 分割参数对
// Object.fromEntries() 将数组转换为对象，map() 遍历每个参数对，使用 '=' 分割键值对并解码 URL 编码的值
const args = Object.fromEntries(
    $argument.split("&").map(item => item.split("=").map(decodeURIComponent))
);

let UA_old = $request.headers['user-agent'];
let UA_new = args["UA"]; 
let Header = $request.headers; // 获取请求的所有头部信息

// 如果请求目标没有 User-Agent，则先添加默认值 "Surge iOS/3367"
if (!Header['user-agent']) {
    Header['user-agent'] = "Surge iOS/3367";
}

// 修改 User-Agent，如果传递了 UA 参数，则使用传递的值
Header['user-agent'] = UA_new || Header['user-agent'];
Header['content-type'] = "text/plain; charset=UTF-8";

// 打印请求的相关信息
console.log("请求URL: " + $request.url); // 打印请求的 URL
console.log("请求方法: " +  $request.method); // 打印请求的 HTTP 方法 (GET, POST 等)
console.log("原始User-Agent: " + UA_old); // 打印原始的 User-Agent
console.log("修改后User-Agent: " + Header['user-agent']); // 打印修改后的 User-Agent
console.log("Content-Type: " + Header['content-type']); // 打印 Content-Type

// 返回修改后的请求头
$done({ headers: Header });
