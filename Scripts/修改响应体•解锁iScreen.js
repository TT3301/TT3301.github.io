/*************************************
项目名称：iScreen-小组件-辅助解锁
下载地址：https://t.cn/A6MsPY5O
脚本作者：BodyData
电报频道：https://t.me/BodyData
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************
------QX 配置------
[rewrite_local]
^https?:\/\/cs\.kuso\.xyz\/configs.+ url script-response-body https://raw.githubusercontent.com/BodyData/Rewrite/main/iscreenfz.js
^https?:\/\/pay\.kuso\.xyz\/pay\/pay-check url reject-200

[mitm]
hostname = cs.kuso.xyz

------SURGE 配置------
[Map Local]
^https?:\/\/pay\.kuso\.xyz\/pay\/pay-check data-type=text data=" " status-code=200

[Script]
iscreenfz = type=http-response, pattern=^https?:\/\/cs\.kuso\.xyz\/configs.+, script-path=https://raw.githubusercontent.com/BodyData/Rewrite/main/iscreenfz.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% *.kuso.xyz
*************************************/


let BodyData = JSON.parse($response.body);

BodyData = {
    "status": 0,
    "data": {
        "FeedBanner": "3333",
        "IsandBannerAd": 0,
        "noAds": 1,
        "lang": "zh",
        "review_pop_interval": 300,
        "country": "cn",
        "lockscreen_noVip": "0,1",
        "SplashInter": 300,
        "pic_lock_count": 50,
        "showOurApp": 1,
        "main_pop_ad_interval": 0,
        "launchAd": 0,
        "FeedAd": 0,
        "BannerAd": 0,
        "vipPopupType": 3,
        "ai_painting": 1,
        "ai_painting_wp": 1,
        "activityUpdateTime": 1687959242,
        "rewardAd": 0,
        "Hudong_Interval": 900,
        "ThemeFeedAd": 4,
        "showRing": 1
    },
    "ab": 0
};

$done({ body: JSON.stringify(BodyData) });