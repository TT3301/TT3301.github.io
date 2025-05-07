const version = 'V1.0.1';
// 获取请求中的UA值：如果 rpid 和 Rpid 都存在，优先选择 rpid，如果只有 Rpid 存在则使用 Rpid
const UA = $request.headers.rpid || $request.headers.Rpid;

// 如果UA包含特定值,返回404错误,否则放行
if (UA.includes("1000002") || UA.includes("1000019")) {
    $done({ status: "HTTP/1.1 404 Not Found" });
} else {
    $done({});
}


/* ------------------------------------原始代码--------------------------------------
const version = 'V1.0.1';
var ua=$request.headers.rpid||$request.headers.Rpid;ua.includes("1000002")||ua.includes("1000019")?$done({status:"HTTP/1.1 404 Not Found"}):$done({});
-------------------------------------------------------------------------- */
