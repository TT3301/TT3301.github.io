// 定义要获取的变量名以及要修改的值
const oldKey = "dlm_game";
const newValue = "volcano";

// 从持久化存储中读取初始值
let oldValue = $persistentStore.read(oldKey);

// 显示初始值
if (oldValue !== null) {
    console.log(`${oldKey} 的初始值为: ${oldValue}`);
} else {
    console.log(`初始状态：未找到 ${oldKey} 的值或读取失败`);
}

// 将 "oldValue" 的值更新为 newValue 的值
const writeSuccess = $persistentStore.write(newValue, oldKey);

if (writeSuccess) {
    console.log(`成功将 ${oldKey} 的值更新为 ${newValue}`);
} else {
    console.log(`更新 ${oldKey} 的值失败`);
}

// 再次读取值以确认更新
oldValue = $persistentStore.read(oldKey);

// 显示更新后的值
if (oldValue !== null) {
    console.log(`${oldKey} 的更新后的值为: ${oldValue}`);
} else {
    console.log(`更新后：未找到 ${oldKey} 的值或读取失败`);
}

// 返回一个对象作为脚本的结果
$done({
    initialValue: oldValue !== null ? oldValue : "未找到初始值",
    updatedValue: oldValue,
    writeSuccess: writeSuccess
});
