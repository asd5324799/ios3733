const express = require('express');
const gameRouter = require('./game');
const app = express(); 


// app.post('/api/index/index', (req, res) =>{
//   res.json(
//     {
//       "log": {
//           "sql": [
//               "[ DB ] CONNECT:[ UseTime:0.013677s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=db_sdk;charset=utf8",
//               "[ SQL ] SHOW COLUMNS FROM `c_mem_login_box` [ RunTime:0.002752s ]",
//               "[ SQL ] SELECT * FROM `c_mem_login_box` WHERE  `token` = '0f955a36d0b3e252e34254f79ac76026' LIMIT 1 [ RunTime:0.002456s ]",
//               "[ DB ] CONNECT:[ UseTime:0.013770s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
//               "[ SQL ] SHOW COLUMNS FROM `gamebox_channel` [ RunTime:0.003004s ]",
//               "[ SQL ] SELECT * FROM `gamebox_channel` WHERE  `channel_id` = 'none' LIMIT 1 [ RunTime:0.002748s ]",
//               "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.003565s ]",
//               "[ SQL ] SELECT `id`,`classid`,`title`,`titleimg`,'2.22' scale FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `firsttitle` = 3  AND `titleimg` <> '' ORDER BY `newstime` DESC LIMIT 0,5 [ RunTime:0.004808s ]",
//               "[ SQL ] SHOW COLUMNS FROM `gamebox_app_action` [ RunTime:0.002961s ]",
//               "[ SQL ] SELECT `text1`,`action_code`,`extra_id`,`web_url`,`icon_url`,`bg_img_url`,`bg_color`,`scale`,`style` FROM `gamebox_app_action` WHERE  `types` LIKE '%|1|%'  AND `show_i` = 1 ORDER BY `index` DESC,`id` ASC [ RunTime:0.002749s ]",
//               "[ SQL ] SHOW COLUMNS FROM `xy_app_toutiao` [ RunTime:0.002894s ]",
//               "[ SQL ] SELECT `id`,`title`,`subtitle`,`icon`,`url` FROM `xy_app_toutiao` WHERE  `delete_time` = 0 ORDER BY `id` DESC LIMIT 0,20 [ RunTime:0.002533s ]",
//               "[ SQL ] SELECT * FROM `gamebox_channel` WHERE  `channel_id` = 'none' LIMIT 1 [ RunTime:0.002521s ]",
//               "[ SQL ] SHOW COLUMNS FROM `gamebox_index_sp_item` [ RunTime:0.002879s ]",
//               "[ SQL ] SELECT `res_id` FROM `gamebox_index_sp_item` WHERE  `spid` = 1 ORDER BY `index` DESC,`id` ASC LIMIT 0,1000 [ RunTime:0.002567s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000961 LIMIT 1 [ RunTime:0.002789s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000516 LIMIT 1 [ RunTime:0.002719s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20001408 LIMIT 1 [ RunTime:0.002662s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20001036 LIMIT 1 [ RunTime:0.002738s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20001141 LIMIT 1 [ RunTime:0.002735s ]",
//               "[ SQL ] SELECT `res_id` FROM `gamebox_index_sp_item` WHERE  `spid` = 2 ORDER BY `index` DESC,`id` ASC LIMIT 0,1000 [ RunTime:0.002435s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 1242 LIMIT 1 [ RunTime:0.002701s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000591 LIMIT 1 [ RunTime:0.015602s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 3996 LIMIT 1 [ RunTime:0.002703s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 3529 LIMIT 1 [ RunTime:0.002874s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000445 LIMIT 1 [ RunTime:0.002825s ]",
//               "[ SQL ] SELECT `res_id` FROM `gamebox_index_sp_item` WHERE  `spid` = 4 ORDER BY `index` DESC,`id` ASC LIMIT 0,1000 [ RunTime:0.002580s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000530 LIMIT 1 [ RunTime:0.002738s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 3767 LIMIT 1 [ RunTime:0.002683s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000972 LIMIT 1 [ RunTime:0.002712s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000823 LIMIT 1 [ RunTime:0.002698s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20001113 LIMIT 1 [ RunTime:0.006763s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 4218 LIMIT 1 [ RunTime:0.002901s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49) ORDER BY `onclick` DESC LIMIT 0,20 [ RunTime:0.013822s ]",
//               "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup`,`morepic` FROM `www_92game_net_d_ecms_app` WHERE  `state` = 2  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49) ORDER BY `newstime` DESC LIMIT 0,4 [ RunTime:0.002977s ]",
//               "[ SQL ] SELECT `text1`,`action_code`,`extra_id`,`web_url`,`icon_url`,`bg_img_url`,`bg_color`,`scale`,`style` FROM `gamebox_app_action` WHERE  `types` LIKE '%|5|%' ORDER BY `id` DESC LIMIT 0,1000 [ RunTime:0.002524s ]"
//           ],
//           "info": [
//               "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
//               "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'index',\n    2 => 'index',\n  ),\n)",
//               "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'user-agent' => 'postman',\n  'cache-control' => 'no-cache',\n  'postman-token' => '38ae8e03-b989-4b6e-aadd-d99d3e66fccf',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '89',\n  'connection' => 'keep-alive',\n)",
//               "[ PARAM ] array (\n  '/api/index/index' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '101',\n  'token' => '0f955a36d0b3e252e34254f79ac76026',\n)",
//               "[ RUN ] app\\api\\controller\\Index->index[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Index.php ]",
//               "[ DB ] INIT mysql",
//               "[ CACHE ] INIT File",
//               "[ DB ] INIT mysql"
//           ]
//       },
//       "time": 1547090249,
//       "code": 1,
//       "data": {
//           "banner": [
//               {
//                   "id": 20000961,
//                   "classid": 49,
//                   "title": "大圣归来星耀版",
//                   "titleimg": "http://pic5.3733.com/banner/201812/ac15140c72dd15afd83360c4dbe74910_n.jpeg",
//                   "scale": "2.22",
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": null
//               },
//               {
//                   "id": 20000516,
//                   "classid": 1,
//                   "title": "斗破西游超爆版",
//                   "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
//                   "scale": "2.22",
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": null
//               },
//               {
//                   "id": 3996,
//                   "classid": 49,
//                   "title": "梦回仙游星耀版",
//                   "titleimg": "http://pic5.3733.com/banner/201812/3c73101b51a042a90f86b58d5f6b82bf_n.jpeg",
//                   "scale": "2.22",
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": null
//               },
//               {
//                   "id": 3529,
//                   "classid": 49,
//                   "title": "超梦西游海量版",
//                   "titleimg": "http://pic5.3733.com/banner/201812/3eb872e49582a747294a907e823e98fa_n.jpeg",
//                   "scale": "2.22",
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": null
//               },
//               {
//                   "id": 20000445,
//                   "classid": 1,
//                   "title": "校花学院",
//                   "titleimg": "http://pic5.3733.com/banner/201812/833a15ff60f8b5184f2fff5e5e9ced75_n.jpeg",
//                   "scale": "2.22",
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": null
//               }
//           ],
//           "tab_action": [
//               {
//                   "text1": "变态版",
//                   "action_code": 1002,
//                   "extra_id": "1",
//                   "web_url": "",
//                   "icon_url": "http://pic3.3733.com/d/file/box_action/2017-03-09/cb7a19329f4ef3490714c706aaef94ef.png",
//                   "bg_img_url": "",
//                   "bg_color": "#f5544c",
//                   "scale": 3,
//                   "style": 0
//               },
//               {
//                   "text1": "满Vip版",
//                   "action_code": 1002,
//                   "extra_id": "49",
//                   "web_url": "",
//                   "icon_url": "http://pic3.3733.com/d/file/box_action/2017-05-12/87d94b645292dec474cc2ef47f0a44ac.png",
//                   "bg_img_url": "",
//                   "bg_color": "#2ccb7b",
//                   "scale": 3,
//                   "style": 0
//               },
//               {
//                   "text1": "GM版",
//                   "action_code": 1002,
//                   "extra_id": "43",
//                   "web_url": "",
//                   "icon_url": "http://pic3.3733.com/d/file/box_action/2017-05-12/ad4432ba4109146913949e3af59f1adf.png",
//                   "bg_img_url": "",
//                   "bg_color": "#ba69ff",
//                   "scale": 3,
//                   "style": 0
//               },
//               {
//                   "text1": "精选专题",
//                   "action_code": 1008,
//                   "extra_id": "",
//                   "web_url": "",
//                   "icon_url": "http://pic3.3733.com/d/file/box_action/2018-03-13/53e74fd74e077cf3ae67f3fa61a380b6.png",
//                   "bg_img_url": "",
//                   "bg_color": "#feac24",
//                   "scale": 0,
//                   "style": 0
//               }
//           ],
//           "toutiao": [],
//           "game_list": [
//               {
//                   "header_title": "精品推荐",
//                   "header_color": null,
//                   "view_type": 10,
//                   "game_list": [
//                       {
//                           "id": 20000516,
//                           "classid": 1,
//                           "totaldown": 33417,
//                           "title": "斗破西游超爆版",
//                           "newstime": 1546045800,
//                           "titlepic": "http://pic5.3733.com/icon/201812/c331866ced1027347f685ec9273bfce1.png",
//                           "down_a": "http://xiazai.3733.com/apk/game/doupxycbb.apk",
//                           "version": "1.0.0",
//                           "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
//                           "size_a": "268.7 MB",
//                           "size_ip": "",
//                           "type": [
//                               "角色",
//                               "动作",
//                               "即时"
//                           ],
//                           "sign": [],
//                           "yxftitle": "上线送VIP9、绑定元宝*28888",
//                           "version_code": 1,
//                           "package_name": "com.dpxy.guandu",
//                           "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                           "app_tag": [
//                               {
//                                   "type": 4,
//                                   "name": "变态版",
//                                   "color": "#ba69ff",
//                                   "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                               },
//                               {
//                                   "type": 6,
//                                   "name": "返利",
//                                   "color": "#13cfae",
//                                   "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                               },
//                               {
//                                   "type": 12,
//                                   "name": "1:200",
//                                   "color": "#feac24",
//                                   "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                               }
//                           ],
//                           "gm_url": null,
//                           "smalltext": "装备全靠靠打,超级爆率9.8!",
//                           "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0cc967355285890784176406916/LaYljc1SBRUA.mp4",
//                           "video_thumb": "http://pic5.3733.com/snapshot/201901/2addafe990d8979c6d7362a0d86c651f_n.jpeg",
//                           "state": 1,
//                           "uc_dl": 0,
//                           "app_id": 61613,
//                           "app_id_i": 6979,
//                           "enable_speedup": false,
//                           "dl_config": 0,
//                           "enable_rebate": true,
//                           "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dpxycbbios_6979/dpxycbbios_6979.plist"
//                       },
//                       {
//                           "id": 3862,
//                           "classid": 1,
//                           "totaldown": 15844,
//                           "title": "狂爆之翼",
//                           "newstime": 1544069400,
//                           "titlepic": "http://pic5.3733.com/icon/201812/6eaaa35c5798cab05b7d65ddb89cfaf6.png",
//                           "down_a": "http://xiazai.3733.com/apk/game/kuangbzy.apk",
//                           "version": "1.0.0",
//                           "titleimg": "http://pic5.3733.com/banner/201812/e06f89b4b1bd092fabd8386ad96446fb_n.jpeg",
//                           "size_a": "469.4 MB",
//                           "size_ip": "",
//                           "type": [
//                               "角色"
//                           ],
//                           "sign": [],
//                           "yxftitle": "送V5，钻石*10000，黑钻*10000",
//                           "version_code": 100,
//                           "package_name": "com.sfsy.kbzy.m3733",
//                           "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                           "app_tag": [
//                               {
//                                   "type": 4,
//                                   "name": "变态版",
//                                   "color": "#ba69ff",
//                                   "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                               },
//                               {
//                                   "type": 6,
//                                   "name": "返利",
//                                   "color": "#13cfae",
//                                   "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                               },
//                               {
//                                   "type": 12,
//                                   "name": "1:200",
//                                   "color": "#feac24",
//                                   "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                               }
//                           ],
//                           "gm_url": null,
//                           "smalltext": "一款以激爽战斗为核心的3D炫战ARPG手游",
//                           "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/4b2bbf6f5285890783146730509/SCnAAjckUDIA.mp4",
//                           "video_thumb": "http://pic5.3733.com/snapshot/201811/af153562a413d6f442c2d39736a36b5a.jpeg",
//                           "state": 1,
//                           "uc_dl": 0,
//                           "app_id": 61389,
//                           "app_id_i": 7051,
//                           "enable_speedup": false,
//                           "dl_config": 0,
//                           "enable_rebate": true,
//                           "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/kbzy_xsdk_ios_7051/kbzy_xsdk_ios_7051.plist"
//                       },
//                       {
//                           "id": 4121,
//                           "classid": 49,
//                           "totaldown": 16343,
//                           "title": "真江湖至尊版",
//                           "newstime": 1542945000,
//                           "titlepic": "http://pic5.3733.com/icon/201812/7356b8da63ef711c2dd6c79f4170732a.png",
//                           "down_a": "http://xiazai.3733.com/apk/game/zhenjhzzb.apk",
//                           "version": "1.0.0",
//                           "titleimg": "http://pic5.3733.com/banner/201812/930b67b369b0370a5c2fba0acbe21cb7_n.jpeg",
//                           "size_a": "382.4 MB",
//                           "size_ip": "",
//                           "type": [
//                               "回合",
//                               "卡牌"
//                           ],
//                           "sign": [],
//                           "yxftitle": "送超V，元宝50000，铜币300W",
//                           "version_code": 100,
//                           "package_name": "com.sfsy.zjhcvb.m3733",
//                           "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                           "app_tag": [
//                               {
//                                   "type": 6,
//                                   "name": "返利",
//                                   "color": "#13cfae",
//                                   "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                               },
//                               {
//                                   "type": 7,
//                                   "name": "满Vip版",
//                                   "color": "#f87e71",
//                                   "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                               },
//                               {
//                                   "type": 12,
//                                   "name": "1:1000",
//                                   "color": "#feac24",
//                                   "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                               }
//                           ],
//                           "gm_url": null,
//                           "smalltext": "一款武侠题材的回合制RPG手游",
//                           "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/e8ceec6c5285890783179120615/utPgCq8yJDgA.mp4",
//                           "video_thumb": "http://pic5.3733.com/snapshot/201811/d9315baf606111371b17935e4805eb4b_n.jpeg",
//                           "state": 1,
//                           "uc_dl": 0,
//                           "app_id": 61503,
//                           "app_id_i": 6880,
//                           "enable_speedup": false,
//                           "dl_config": 0,
//                           "enable_rebate": true,
//                           "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zjhzzbios_6880/zjhzzbios_6880.plist"
//                       },
//                       {
//                           "id": 3598,
//                           "classid": 49,
//                           "totaldown": 30887,
//                           "title": "我要当宰相",
//                           "newstime": 1539925200,
//                           "titlepic": "http://pic5.3733.com/icon/201812/2753771af609f38f71597b0447bf73da.png",
//                           "down_a": "http://xiazai.3733.com/apk/game/woydzx.apk",
//                           "version": "1.0.0",
//                           "titleimg": "http://pic5.3733.com/banner/201812/1a581f11521cb4766b62222e85b3fcda_n.jpeg",
//                           "size_a": "4.9 MB",
//                           "size_ip": "",
//                           "type": [
//                               "角色",
//                               "策略",
//                               "休闲"
//                           ],
//                           "sign": [],
//                           "yxftitle": "上线送满V、48888元宝、银两100W",
//                           "version_code": 1,
//                           "package_name": "com.wydzx",
//                           "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                           "app_tag": [
//                               {
//                                   "type": 6,
//                                   "name": "返利",
//                                   "color": "#13cfae",
//                                   "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                               },
//                               {
//                                   "type": 7,
//                                   "name": "满Vip版",
//                                   "color": "#f87e71",
//                                   "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                               },
//                               {
//                                   "type": 12,
//                                   "name": "1:1000",
//                                   "color": "#feac24",
//                                   "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                               }
//                           ],
//                           "gm_url": null,
//                           "smalltext": "一款以古代官场斗争为题材的策略经营类手机网络游戏",
//                           "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/397d60c95285890781937100902/v.f30.mp4",
//                           "video_thumb": "http://pic3.3733.com/d/file/cb/2018-09-21/d6a2f6c0bb829f743091e7cbb3b661ff.jpg",
//                           "state": 1,
//                           "uc_dl": 0,
//                           "app_id": 61225,
//                           "app_id_i": 6638,
//                           "enable_speedup": false,
//                           "dl_config": 0,
//                           "enable_rebate": true,
//                           "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/wydzxios_6638/wydzxios_6638.plist"
//                       }
//                   ]
//               },
//               {
//                   "id": 20000961,
//                   "classid": 49,
//                   "totaldown": 32928,
//                   "title": "大圣归来星耀版",
//                   "newstime": 1546047000,
//                   "titlepic": "http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/dasglxyb.apk",
//                   "version": "4.0.0",
//                   "titleimg": "http://pic5.3733.com/banner/201812/ac15140c72dd15afd83360c4dbe74910_n.jpeg",
//                   "size_a": "139.6 MB",
//                   "size_ip": "",
//                   "type": [
//                       "角色",
//                       "动作",
//                       "即时"
//                   ],
//                   "sign": [],
//                   "yxftitle": "上线直接赠送加强版星耀满V",
//                   "version_code": 400,
//                   "package_name": "com.jianwan.dsglxy.yy3733",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 7,
//                           "name": "满Vip版",
//                           "color": "#f87e71",
//                           "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:1000",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "同名动画电影改编的3D-ARPG动作手游",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af97fe5285890783958544771/p6ayPdBZlD0A.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201812/3941c167dce4c08aa71eb7ef5d4cb666.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61671,
//                   "app_id_i": 7030,
//                   "enable_speedup": false,
//                   "scale": 2.22,
//                   "header_color": "",
//                   "header_tag": "首发",
//                   "header_title": "精品首发",
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dsglxybios_7030/dsglxybios_7030.plist"
//               },
//               {
//                   "id": 20000516,
//                   "classid": 1,
//                   "totaldown": 33417,
//                   "title": "斗破西游超爆版",
//                   "newstime": 1546045800,
//                   "titlepic": "http://pic5.3733.com/icon/201812/c331866ced1027347f685ec9273bfce1.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/doupxycbb.apk",
//                   "version": "1.0.0",
//                   "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
//                   "size_a": "268.7 MB",
//                   "size_ip": "",
//                   "type": [
//                       "角色",
//                       "动作",
//                       "即时"
//                   ],
//                   "sign": [],
//                   "yxftitle": "上线送VIP9、绑定元宝*28888",
//                   "version_code": 1,
//                   "package_name": "com.dpxy.guandu",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 4,
//                           "name": "变态版",
//                           "color": "#ba69ff",
//                           "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                       },
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:200",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "装备全靠靠打,超级爆率9.8!",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0cc967355285890784176406916/LaYljc1SBRUA.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201901/2addafe990d8979c6d7362a0d86c651f_n.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61613,
//                   "app_id_i": 6979,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dpxycbbios_6979/dpxycbbios_6979.plist"
//               },
//               {
//                   "id": 20001408,
//                   "classid": 1,
//                   "totaldown": 14383,
//                   "title": "造梦仙游",
//                   "newstime": 1546826400,
//                   "titlepic": "http://pic5.3733.com/icon/201901/a6c45127e196a1917220319e772b9a91.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/zaomxy.apk",
//                   "version": "1.0.0",
//                   "titleimg": "http://pic5.3733.com/banner/201901/69943d319574afcde5c7a36e5a7d5888.jpeg",
//                   "size_a": "3.3 MB",
//                   "size_ip": "",
//                   "type": [
//                       "策略"
//                   ],
//                   "sign": [],
//                   "yxftitle": "送V8，绑元18888，银两188W",
//                   "version_code": 1,
//                   "package_name": "com.zmxybt.jlhd",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 4,
//                           "name": "变态版",
//                           "color": "#ba69ff",
//                           "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                       },
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:500",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "一款放置类角色扮演移动手机游戏",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5dcf54415285890784248757946/7KyxguLcYR4A.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201901/e7a3226898b7f5f2ec3eccc5890b10c1.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61730,
//                   "app_id_i": 7084,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zmxyios_7084/zmxyios_7084.plist"
//               },
//               {
//                   "id": 20001036,
//                   "classid": 1,
//                   "totaldown": 20360,
//                   "title": "紫青双剑-正版",
//                   "newstime": 1546650000,
//                   "titlepic": "http://pic5.3733.com/icon/201901/465c14d1c14e83490122289f486eaabb.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/ziqsj.apk",
//                   "version": "1.0.1",
//                   "titleimg": "",
//                   "size_a": "297.4 MB",
//                   "size_ip": "",
//                   "type": [
//                       "角色",
//                       "动作",
//                       "即时"
//                   ],
//                   "sign": [],
//                   "yxftitle": "上线送V12，38666绑元",
//                   "version_code": 1,
//                   "package_name": "com.jycbb.qipa",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 4,
//                           "name": "变态版",
//                           "color": "#ba69ff",
//                           "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                       },
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:500",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "热门电视剧蜀山战纪改编的正版授权手游",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/582bd43e5285890784099466438/nGt14gEBYE8A.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201901/eecb6e96f5dfd64bfdbd463285966495.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61683,
//                   "app_id_i": 7043,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zqsj_zbios_7043/zqsj_zbios_7043.plist"
//               },
//               {
//                   "id": 20001141,
//                   "classid": 1,
//                   "totaldown": 15365,
//                   "title": "梦缘江湖",
//                   "newstime": 1546918200,
//                   "titlepic": "http://pic5.3733.com/icon/201901/91f08e99172eaa6d327a428dffb5067b.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/mengyjh.apk",
//                   "version": "1.0.5",
//                   "titleimg": "http://pic5.3733.com/banner/201901/702651d66d47c75a8304f62d588d1a72.jpeg",
//                   "size_a": "430.1 MB",
//                   "size_ip": "",
//                   "type": [
//                       "角色",
//                       "动作"
//                   ],
//                   "sign": [],
//                   "yxftitle": "送贵族V、绑元88888、金币2888万",
//                   "version_code": 6,
//                   "package_name": "com.myjh.sy3733",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 4,
//                           "name": "变态版",
//                           "color": "#ba69ff",
//                           "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                       },
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:500",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "一款青春武侠MMORPG手游",
//                   "video_url": "",
//                   "video_thumb": "",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61693,
//                   "app_id_i": 7053,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/myjhios_7053/myjhios_7053.plist"
//               },
//               {
//                   "id": 1242,
//                   "classid": 49,
//                   "totaldown": 20865,
//                   "title": "寻道回合",
//                   "newstime": 1545382800,
//                   "titlepic": "http://pic5.3733.com/icon/201812/641fe0061c696688cf5fd9d403a4f703.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/xundhh.apk",
//                   "version": "1.0.11.12",
//                   "titleimg": "http://pic5.3733.com/banner/201812/3f9d5701256909f4e0417fe5c6c30e1b_n.jpeg",
//                   "size_a": "317.2 MB",
//                   "size_ip": "",
//                   "type": [
//                       "回合"
//                   ],
//                   "sign": [],
//                   "yxftitle": "上线送300万银币，送10元代金券，送70级装备",
//                   "version_code": 23,
//                   "package_name": "com.jiayou.xundao.yueyou",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 7,
//                           "name": "满Vip版",
//                           "color": "#f87e71",
//                           "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:500",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "游戏以交友为主题，快来寻找你的红颜",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c041052c9031868223502577577/v.f30.mp4",
//                   "video_thumb": "http://pic3.3733.com/d/file/cb/2017-11-08/f8946af0329995b2ed947302e4779252.jpg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 60480,
//                   "app_id_i": 7063,
//                   "enable_speedup": false,
//                   "thumb": "http://pic5.3733.com/banner/201812/3f9d5701256909f4e0417fe5c6c30e1b_n.jpeg",
//                   "scale": 2.22,
//                   "header_color": "",
//                   "header_tag": "热门",
//                   "header_title": "本周热门推荐",
//                   "dl_config": 0,
//                   "enable_rebate": false,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xdhh_xsdk_ios_7063/xdhh_xsdk_ios_7063.plist"
//               },
//               {
//                   "id": 20000591,
//                   "classid": 49,
//                   "totaldown": 31966,
//                   "title": "传奇归来",
//                   "newstime": 1544767200,
//                   "titlepic": "http://pic5.3733.com/icon/201812/ed20807c0a431fe36962afe4484546e3.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/chuanqgl.apk",
//                   "version": "1.0.0",
//                   "titleimg": "http://pic5.3733.com/banner/201812/1f56b2f8a048af7c2eef2eced7129d03.jpeg",
//                   "size_a": "3.4 MB",
//                   "size_ip": "",
//                   "type": [
//                       "角色",
//                       "即时"
//                   ],
//                   "sign": [],
//                   "yxftitle": "送V15、元宝58888、铜币200万",
//                   "version_code": 1,
//                   "package_name": "com.qn.cqgl.sy3733",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 7,
//                           "name": "满Vip版",
//                           "color": "#f87e71",
//                           "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:500",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "竖版合击版传奇游戏",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/25fe537d5285890783696396415/XVtPaEbrPjUA.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201812/d6445419fad56e901843a01a1121ee8b.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61610,
//                   "app_id_i": 7072,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/cqgl_xsdk_ios_7072/cqgl_xsdk_ios_7072.plist"
//               },
//               {
//                   "id": 3996,
//                   "classid": 49,
//                   "totaldown": 32376,
//                   "title": "梦回仙游星耀版",
//                   "newstime": 1546045200,
//                   "titlepic": "http://pic5.3733.com/icon/201812/ff6f5962f2a5536f1292fff3e8a8445d.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/menghxyxyb.apk",
//                   "version": "1.0.1",
//                   "titleimg": "http://pic5.3733.com/banner/201812/3c73101b51a042a90f86b58d5f6b82bf_n.jpeg",
//                   "size_a": "358.7 MB",
//                   "size_ip": "",
//                   "type": [
//                       "角色",
//                       "回合"
//                   ],
//                   "sign": [],
//                   "yxftitle": "送满V，绑定元宝*20000，铜币*500W",
//                   "version_code": 101,
//                   "package_name": "com.sfsy.ttdzf.m3733",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 7,
//                           "name": "满Vip版",
//                           "color": "#f87e71",
//                           "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:200",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "2018年精美3D回合制手游力作",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/fa38b00a5285890783111289521/ZMWN1w24RjgA.mp4",
//                   "video_thumb": "http://pic3.3733.com/d/file/cb/2018-11-19/6d0307e13b8b1e7663c9147a9ee4769e.jpg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61431,
//                   "app_id_i": 6836,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhxyxybios_6836/mhxyxybios_6836.plist"
//               },
//               {
//                   "id": 3529,
//                   "classid": 49,
//                   "totaldown": 28377,
//                   "title": "超梦西游海量版",
//                   "newstime": 1546044600,
//                   "titlepic": "http://pic5.3733.com/icon/201901/11ab9518ca1cede650a7023a430bd86f.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/chaomxywxb.apk",
//                   "version": "1.1.7",
//                   "titleimg": "http://pic5.3733.com/banner/201812/3eb872e49582a747294a907e823e98fa_n.jpeg",
//                   "size_a": "386.5 MB",
//                   "size_ip": "",
//                   "type": [
//                       "回合"
//                   ],
//                   "sign": [],
//                   "yxftitle": "上线送贵族20专属特权，18888元宝",
//                   "version_code": 10107,
//                   "package_name": "com.gzbq.cmwx.cgamex.zhuayou",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 7,
//                           "name": "满Vip版",
//                           "color": "#f87e71",
//                           "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:200",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "经典回合制手游，海量资源，开局一直鲲进化全靠吞",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/bb8571085285890781260476203/v.f30.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201811/c8f48adc3106f4c3e04d7564c3fcb3be.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61101,
//                   "app_id_i": 7046,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/cmxyhlb_xsdk_ios_704/cmxyhlb_xsdk_ios_704.plist"
//               },
//               {
//                   "id": 20000445,
//                   "classid": 1,
//                   "totaldown": 31381,
//                   "title": "校花学院",
//                   "newstime": 1545386400,
//                   "titlepic": "http://pic5.3733.com/icon/201812/b96aa3cedb565dc09f74a6c3c74ff757.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/xiaohmgc.apk",
//                   "version": "2.0.2.4",
//                   "titleimg": "http://pic5.3733.com/banner/201812/833a15ff60f8b5184f2fff5e5e9ced75_n.jpeg",
//                   "size_a": "324 MB",
//                   "size_ip": "",
//                   "type": [
//                       "回合",
//                       "卡牌"
//                   ],
//                   "sign": [],
//                   "yxftitle": "送V10，金币88万，钻石18888",
//                   "version_code": 11,
//                   "package_name": "com.jianwan.xhdtsgs.yy3733",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 4,
//                           "name": "变态版",
//                           "color": "#ba69ff",
//                           "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                       },
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:200",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "起点金牌作家鱼人二代正式授权，唯一正版校花青春手游大作",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/2a969d3d5285890783696586810/V7qja8AR1AIA.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201812/732207418944e53b291974699f1d8e77_n.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61461,
//                   "app_id_i": 7059,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xhmgc_jsdk_ios_7059/xhmgc_jsdk_ios_7059.plist"
//               },
//               {
//                   "header_title": "新游预约",
//                   "header_color": null,
//                   "view_type": 12,
//                   "game_list": [
//                       {
//                           "id": 20001464,
//                           "classid": 1,
//                           "totaldown": 0,
//                           "title": "我叫MT天天冒险",
//                           "newstime": 1547258422,
//                           "titlepic": "http://pic5.3733.com/icon/201901/84f3e874dbcccaa4801d98a19e623fc2.png",
//                           "down_a": "",
//                           "version": "",
//                           "titleimg": "",
//                           "size_a": 0,
//                           "size_ip": "",
//                           "type": [
//                               "卡牌",
//                               "策略"
//                           ],
//                           "sign": [],
//                           "yxftitle": "上线送符石18888、铜币888W",
//                           "version_code": 0,
//                           "package_name": "adfafafzzz",
//                           "license_md5": "",
//                           "app_tag": [
//                               {
//                                   "type": 4,
//                                   "name": "变态版",
//                                   "color": "#ba69ff",
//                                   "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                               },
//                               {
//                                   "type": 6,
//                                   "name": "返利",
//                                   "color": "#13cfae",
//                                   "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                               },
//                               {
//                                   "type": 12,
//                                   "name": "1:500",
//                                   "color": "#feac24",
//                                   "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                               }
//                           ],
//                           "gm_url": null,
//                           "smalltext": "一款MT正版授权的冒险卡牌类手游大作",
//                           "video_url": "",
//                           "video_thumb": "",
//                           "state": 2,
//                           "uc_dl": 0,
//                           "app_id": 61736,
//                           "app_id_i": 0,
//                           "enable_speedup": false,
//                           "morepic": {
//                               "small": [
//                                   "http://pic5.3733.com/screenshots/201901/ac5e4204ffe8be4afe55edd43eb110db_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/38a7806537db0f28c274aabcd079a9f7_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/25949ed6bbd9fbba90ce60d62b619f8a_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/eb8bbf5a0528c4c1b580fc8d9944265a_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/ac3bfeb7c46ef14dbbaf0cfc8e17fd67_n.jpeg"
//                               ],
//                               "big": [
//                                   "http://pic5.3733.com/screenshots/201901/ac5e4204ffe8be4afe55edd43eb110db_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/38a7806537db0f28c274aabcd079a9f7_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/25949ed6bbd9fbba90ce60d62b619f8a_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/eb8bbf5a0528c4c1b580fc8d9944265a_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/ac3bfeb7c46ef14dbbaf0cfc8e17fd67_n.jpeg"
//                               ]
//                           },
//                           "subscribed": 0,
//                           "dl_config": 0,
//                           "enable_rebate": true,
//                           "down_ip": null,
//                           "subscribe_num": 960,
//                           "start_time": 1547258406
//                       },
//                       {
//                           "id": 3667,
//                           "classid": 1,
//                           "totaldown": 0,
//                           "title": "风云之雄霸天下",
//                           "newstime": 1547258408,
//                           "titlepic": "http://pic3.3733.com/d/file/zixun/dongtai/2018-09-21/c0879e59c65f9d746fce17859ea2bd63.png",
//                           "down_a": "",
//                           "version": "",
//                           "titleimg": "",
//                           "size_a": 0,
//                           "size_ip": "",
//                           "type": [
//                               "角色",
//                               "动作"
//                           ],
//                           "sign": [],
//                           "yxftitle": "上线送V12，36888绑元",
//                           "version_code": 0,
//                           "package_name": "89+67467878",
//                           "license_md5": "",
//                           "app_tag": [
//                               {
//                                   "type": 4,
//                                   "name": "变态版",
//                                   "color": "#ba69ff",
//                                   "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                               },
//                               {
//                                   "type": 6,
//                                   "name": "返利",
//                                   "color": "#13cfae",
//                                   "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                               },
//                               {
//                                   "type": 12,
//                                   "name": "1:300",
//                                   "color": "#feac24",
//                                   "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                               }
//                           ],
//                           "gm_url": null,
//                           "smalltext": "斥资3亿的仙侠巨作MMOARPG手游",
//                           "video_url": "",
//                           "video_thumb": "",
//                           "state": 2,
//                           "uc_dl": 0,
//                           "app_id": 61275,
//                           "app_id_i": 6689,
//                           "enable_speedup": false,
//                           "morepic": {
//                               "small": [
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/a4005bf3cd90633527b1599419214563.jpg",
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/e6bb6d67cd934f74c4065cd519575ea8.jpg",
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/cdd023517e874ac1771e553191257e2f.jpg",
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/34aa09fe6e33225ee40cd609aa46b976.jpg",
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/32209d45f5a454ce0f9b2f6e5e3f2f22.jpg"
//                               ],
//                               "big": [
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/a4005bf3cd90633527b1599419214563.jpg",
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/e6bb6d67cd934f74c4065cd519575ea8.jpg",
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/cdd023517e874ac1771e553191257e2f.jpg",
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/34aa09fe6e33225ee40cd609aa46b976.jpg",
//                                   "http://pic4.3733.com/d/file/game/2018-10-26/32209d45f5a454ce0f9b2f6e5e3f2f22.jpg"
//                               ]
//                           },
//                           "subscribed": 0,
//                           "dl_config": 0,
//                           "enable_rebate": true,
//                           "down_ip": null,
//                           "subscribe_num": 11552,
//                           "start_time": 1547258435
//                       },
//                       {
//                           "id": 20001472,
//                           "classid": 1,
//                           "totaldown": 0,
//                           "title": "龙城传奇",
//                           "newstime": 1547170244,
//                           "titlepic": "http://pic5.3733.com/icon/201901/4f7ad72974f1fbb1496160ae370de754.png",
//                           "down_a": "",
//                           "version": "",
//                           "titleimg": "http://pic5.3733.com/banner/201901/3342fabbf04fd0ff2bf642059bf6c685.jpeg",
//                           "size_a": 0,
//                           "size_ip": "",
//                           "type": [
//                               "角色",
//                               "动作"
//                           ],
//                           "sign": [],
//                           "yxftitle": "送V10，绑元88888，绑金888W",
//                           "version_code": 0,
//                           "package_name": "zz",
//                           "license_md5": "",
//                           "app_tag": [
//                               {
//                                   "type": 4,
//                                   "name": "变态版",
//                                   "color": "#ba69ff",
//                                   "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                               },
//                               {
//                                   "type": 6,
//                                   "name": "返利",
//                                   "color": "#13cfae",
//                                   "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                               },
//                               {
//                                   "type": 12,
//                                   "name": "1:500",
//                                   "color": "#feac24",
//                                   "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                               }
//                           ],
//                           "gm_url": null,
//                           "smalltext": "再现当年沙巴克攻城盛世",
//                           "video_url": "",
//                           "video_thumb": "",
//                           "state": 2,
//                           "uc_dl": 0,
//                           "app_id": 61737,
//                           "app_id_i": 7094,
//                           "enable_speedup": false,
//                           "morepic": {
//                               "small": [
//                                   "http://pic5.3733.com/screenshots/201901/bdea3035aa12ce29e9b0a47909ccafa1.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/c84a8c7546af92fcca5576eff6e76d0e.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/3810ca8a7f7fbeb5662ac882faaeebb8.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/7ff11e0c4890d0284bb3030559b0b099.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/5270f79e42380a1ac983ba78651cf197.jpeg"
//                               ],
//                               "big": [
//                                   "http://pic5.3733.com/screenshots/201901/bdea3035aa12ce29e9b0a47909ccafa1.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/c84a8c7546af92fcca5576eff6e76d0e.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/3810ca8a7f7fbeb5662ac882faaeebb8.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/7ff11e0c4890d0284bb3030559b0b099.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/5270f79e42380a1ac983ba78651cf197.jpeg"
//                               ]
//                           },
//                           "subscribed": 0,
//                           "dl_config": 0,
//                           "enable_rebate": true,
//                           "down_ip": null,
//                           "subscribe_num": 741,
//                           "start_time": 0
//                       },
//                       {
//                           "id": 20000205,
//                           "classid": 1,
//                           "totaldown": 0,
//                           "title": "冲鸭！皮卡丘",
//                           "newstime": 1547023232,
//                           "titlepic": "http://pic5.3733.com/icon/201901/c064b30cee28636fec69f188f46cba10.png",
//                           "down_a": "",
//                           "version": "",
//                           "titleimg": "http://pic5.3733.com/banner/201901/bfcdf5cb78e27a73e08ec25a7edcc42d_n.jpeg",
//                           "size_a": 0,
//                           "size_ip": "",
//                           "type": [
//                               "卡牌",
//                               "策略"
//                           ],
//                           "sign": [],
//                           "yxftitle": "送V5，8888钻石，188万金币",
//                           "version_code": 0,
//                           "package_name": "dafafhaf",
//                           "license_md5": "",
//                           "app_tag": [
//                               {
//                                   "type": 4,
//                                   "name": "变态版",
//                                   "color": "#ba69ff",
//                                   "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                               },
//                               {
//                                   "type": 6,
//                                   "name": "返利",
//                                   "color": "#13cfae",
//                                   "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                               },
//                               {
//                                   "type": 12,
//                                   "name": "1:200",
//                                   "color": "#feac24",
//                                   "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                               }
//                           ],
//                           "gm_url": null,
//                           "smalltext": "在原口袋妖怪的基础上，加入全新的功能与其它新的玩法",
//                           "video_url": "",
//                           "video_thumb": "",
//                           "state": 2,
//                           "uc_dl": 0,
//                           "app_id": 61574,
//                           "app_id_i": 6943,
//                           "enable_speedup": false,
//                           "morepic": {
//                               "small": [
//                                   "http://pic5.3733.com/screenshots/201901/fcf6e3f4280e6b20a6bb6f0f1b4db92e.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/9cb6176443dece6f67bac0d778a75717_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/4fc65f56120c8d0b62b6536bf13d3209.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/e034b41d987c9b3f6a10e63ff659b0e2.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/52669cdf9df09fbd3a5083ef09e6159d.jpeg"
//                               ],
//                               "big": [
//                                   "http://pic5.3733.com/screenshots/201901/fcf6e3f4280e6b20a6bb6f0f1b4db92e.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/9cb6176443dece6f67bac0d778a75717_n.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/4fc65f56120c8d0b62b6536bf13d3209.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/e034b41d987c9b3f6a10e63ff659b0e2.jpeg",
//                                   "http://pic5.3733.com/screenshots/201901/52669cdf9df09fbd3a5083ef09e6159d.jpeg"
//                               ]
//                           },
//                           "subscribed": 0,
//                           "dl_config": 0,
//                           "enable_rebate": true,
//                           "down_ip": null,
//                           "subscribe_num": 276,
//                           "start_time": 0
//                       }
//                   ]
//               },
//               {
//                   "id": 20000530,
//                   "classid": 1,
//                   "totaldown": 28855,
//                   "title": "山海异闻录",
//                   "newstime": 1545379200,
//                   "titlepic": "http://pic5.3733.com/icon/201901/1f4113da0cfe0f21f657eaa90519ae5d.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/shanhywl.apk",
//                   "version": "1.2.1",
//                   "titleimg": "http://pic5.3733.com/banner/201812/308869539a30fbf3c982fc6dcede4aa9.jpeg",
//                   "size_a": "326.1 MB",
//                   "size_ip": "",
//                   "type": [
//                       "角色",
//                       "回合"
//                   ],
//                   "sign": [],
//                   "yxftitle": "送V7，极品妖兽，魂玉18888，铜币188w",
//                   "version_code": 2,
//                   "package_name": "com.gaea.shanhai.yixu",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 4,
//                           "name": "变态版",
//                           "color": "#ba69ff",
//                           "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
//                       },
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:200",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "3D国韵奇遇式手游《山海异闻录》删档测试正式开启",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/a926cb515285890783548143624/IWAe4hX621QA.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201812/7a2c937f5edc3c0d13ef0797c54f1b75.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61616,
//                   "app_id_i": 7057,
//                   "enable_speedup": false,
//                   "thumb": "http://pic5.3733.com/banner/201812/308869539a30fbf3c982fc6dcede4aa9.jpeg",
//                   "scale": 2.22,
//                   "header_color": "",
//                   "header_tag": "新游",
//                   "header_title": "优秀新游戏",
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/shywl_xsdk_ios_7057/shywl_xsdk_ios_7057.plist"
//               },
//               {
//                   "id": 3767,
//                   "classid": 49,
//                   "totaldown": 26393,
//                   "title": "少年三国传星耀版",
//                   "newstime": 1539918000,
//                   "titlepic": "http://pic5.3733.com/icon/201812/4d9d6cab0e1e04951f646c32ef9c35d5.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/shaonsgzxyb.apk",
//                   "version": "1.0.0",
//                   "titleimg": "http://pic5.3733.com/banner/201812/b572bfd82d918bced65bc84be6464ce4_n.jpeg",
//                   "size_a": "233.4 MB",
//                   "size_ip": "",
//                   "type": [
//                       "回合",
//                       "卡牌"
//                   ],
//                   "sign": [],
//                   "yxftitle": "送V19，30000魂玉，300W银两",
//                   "version_code": 100,
//                   "package_name": "com.sfsy.snqyzmvb.m3733",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 7,
//                           "name": "满Vip版",
//                           "color": "#f87e71",
//                           "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:500",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "一款RPG战斗卡牌游戏",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/7636d30f5285890782388503054/v.f30.mp4",
//                   "video_thumb": "http://pic3.3733.com/d/file/cb/2018-10-16/3eb40a710550958214ff03b9d0e998dc.jpg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61309,
//                   "app_id_i": 7068,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/snsgcxyb_xsdk_ios_70/snsgcxyb_xsdk_ios_70.plist"
//               },
//               {
//                   "id": 20000972,
//                   "classid": 49,
//                   "totaldown": 27394,
//                   "title": "梦回千秋",
//                   "newstime": 1546570800,
//                   "titlepic": "http://pic5.3733.com/icon/201901/c90f8adccae58243241d5b1e1fa6191e.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/menghqq.apk",
//                   "version": "2.4.0",
//                   "titleimg": "http://pic5.3733.com/banner/201901/101265b7525947d82507828f5e470b77_n.jpeg",
//                   "size_a": "385 MB",
//                   "size_ip": "",
//                   "type": [
//                       "回合",
//                       "卡牌",
//                       "策略"
//                   ],
//                   "sign": [],
//                   "yxftitle": "送满V，钻石40888，金币1288万",
//                   "version_code": 1,
//                   "package_name": "com.cgbt.a.mhqq.cgamex.zhuayou",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 7,
//                           "name": "满Vip版",
//                           "color": "#f87e71",
//                           "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:200",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "多元化的交互玩法，攻城略地，抢夺他人资源",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0d5b267d5285890784176488239/JV0nQp0IbccA.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201901/314c3f7843b1b5968cfea56386644893.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61673,
//                   "app_id_i": 7033,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhqqios_7033/mhqqios_7033.plist"
//               },
//               {
//                   "id": 20000823,
//                   "classid": 49,
//                   "totaldown": 29432,
//                   "title": "暗黑血缘疯狂版",
//                   "newstime": 1546048200,
//                   "titlepic": "http://pic5.3733.com/icon/201812/342df1399f0dae38a072846b41f79161.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/anhxyfkb.apk",
//                   "version": "1.0.0",
//                   "titleimg": "http://pic5.3733.com/banner/201812/dff73454dc24ec938e4cd4cb67af2e01.jpeg",
//                   "size_a": "310.8 MB",
//                   "size_ip": "",
//                   "type": [
//                       "角色",
//                       "动作",
//                       "即时"
//                   ],
//                   "sign": [],
//                   "yxftitle": "送至尊V，钻石60000，金币500W",
//                   "version_code": 100,
//                   "package_name": "com.sfsy.slws999b.m3733",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 7,
//                           "name": "满Vip版",
//                           "color": "#f87e71",
//                           "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:1000",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "幻想题材的RPG动作手游",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af92db5285890783958544606/VDutOXIL1HUA.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201812/9d78c1765c3d0853bf8b226112a64722.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61654,
//                   "app_id_i": 7065,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ahxyfkbios_7065/ahxyfkbios_7065.plist"
//               },
//               {
//                   "id": 4218,
//                   "classid": 49,
//                   "totaldown": 25342,
//                   "title": "恶人传奇豪华版",
//                   "newstime": 1543197600,
//                   "titlepic": "http://pic5.3733.com/icon/201812/cf2a081601701d487f7bf32331e50988.png",
//                   "down_a": "http://xiazai.3733.com/apk/game/ercqhhb.apk",
//                   "version": "1.0.0",
//                   "titleimg": "http://pic5.3733.com/banner/201811/e53456a522cf2271e65a4d3b0f918c7d_n.jpeg",
//                   "size_a": "130 MB",
//                   "size_ip": "",
//                   "type": [
//                       "角色"
//                   ],
//                   "sign": [],
//                   "yxftitle": "上线送VIP11，绑元*30000",
//                   "version_code": 18111900,
//                   "package_name": "com.erqcmvb.jlhd",
//                   "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
//                   "app_tag": [
//                       {
//                           "type": 6,
//                           "name": "返利",
//                           "color": "#13cfae",
//                           "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
//                       },
//                       {
//                           "type": 7,
//                           "name": "满Vip版",
//                           "color": "#f87e71",
//                           "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
//                       },
//                       {
//                           "type": 12,
//                           "name": "1:300",
//                           "color": "#feac24",
//                           "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
//                       }
//                   ],
//                   "gm_url": null,
//                   "smalltext": "以传奇为题材的角色扮演类手机网络游戏",
//                   "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/9d81a5145285890783368366116/0pQiRTnjcncA.mp4",
//                   "video_thumb": "http://pic5.3733.com/snapshot/201812/66ee2dfff140b25f30e0c65ddf38c056.jpeg",
//                   "state": 1,
//                   "uc_dl": 0,
//                   "app_id": 61523,
//                   "app_id_i": 7060,
//                   "enable_speedup": false,
//                   "dl_config": 0,
//                   "enable_rebate": true,
//                   "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ercqhhb_xsdk_ios_706/ercqhhb_xsdk_ios_706.plist"
//               }
//           ],
//           "interstitial": null
//       }
//   },
//   res.end(req.body)
//   )
// });
app.post('/api/subject/items', (req, res) =>{
    res.json(
        {
            "log": {
                "sql": [
                    "[ DB ] CONNECT:[ UseTime:0.014122s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_subject` [ RunTime:0.003182s ]",
                    "[ SQL ] SELECT `id`,`title`,`subject_desc`,`titlepic`,`newstime` FROM `www_92game_net_d_ecms_subject` WHERE  `id` = 108 LIMIT 1 [ RunTime:0.002568s ]",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.003537s ]",
                    "[ SQL ] SELECT `a`.`id`,`a`.`classid`,`a`.`totaldown`,`a`.`title`,`a`.`newstime`,`a`.`titlepic`,`a`.`down_a`,`a`.`version`,`a`.`titleimg`,`a`.`size_a`,`a`.`size_ip`,`a`.`type`,`a`.`sign`,`a`.`yxftitle`,`a`.`version_code`,`a`.`package_name`,`a`.`license_md5`,`a`.`app_tag`,`a`.`gm_url`,`a`.`cp_id`,`a`.`smalltext`,`a`.`video_url`,`a`.`video_thumb`,`a`.`subpackage_domain`,`a`.`state`,`a`.`uc_dl`,`a`.`app_id`,`a`.`app_id_i`,`a`.`enable_speedup` FROM `www_92game_net_d_ecms_app` `a` INNER JOIN `xiaoyu3733db`.`www_92game_net_d_ecms_subject_game` `b` ON `a`.`id`=`b`.`game_id` WHERE  `a`.`state` IN (1,5)  AND `a`.`platform` LIKE '%IOS%'  AND `b`.`subject_id` = 108 ORDER BY `b`.`tuijian` DESC,`b`.`newstime` DESC LIMIT 0,20 [ RunTime:0.003510s ]"
                ],
                "info": [
                    "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                    "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'subject',\n    2 => 'items',\n  ),\n)",
                    "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => '1bc98930-dd69-4e9c-a2c6-d14e27e38b0b',\n  'user-agent' => 'PostmanRuntime/7.6.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '76',\n  'connection' => 'keep-alive',\n)",
                    "[ PARAM ] array (\n  '/api/subject/items' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '103',\n  'id' => '108',\n  'page' => '1',\n  'listRows' => '20',\n)",
                    "[ RUN ] app\\api\\controller\\Subject->items[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Subject.php ]",
                    "[ DB ] INIT mysql",
                    "[ CACHE ] INIT File"
                ]
            },
            "time": 1547720653,
            "code": 1,
            "data": {
                "info": {
                    "id": 108,
                    "title": "【第56期】3733手游一周好游戏推荐",
                    "subject_desc": "一步从冬天跨入夏天，马上就要进入到酷热的炎暑，最近一批好玩的游戏上线3733平台了，在这热情的季节了，3733游戏作为东道主，自然要好好款待每一个登门的小伙伴，赶紧来看看小编今天为各位玩家带来了什么游戏吧。",
                    "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-05-25/75fab5bf0ca54af4ab7122475fd4e062.jpg",
                    "newstime": 1527239834
                },
                "games": [
                    {
                        "id": 3011,
                        "classid": 1,
                        "totaldown": 14361,
                        "title": "大唐升官路",
                        "newstime": 1533261605,
                        "titlepic": "http://pic5.3733.com/icon/201812/aa29332de1ad7560cc1368d0c9b1eeb7.png",
                        "down_a": "http://xiazai.3733.com/apk/game/guanrhh.apk",
                        "version": "1.0",
                        "titleimg": "",
                        "size_a": "103.7 MB",
                        "size_ip": "",
                        "type": [
                            "策略"
                        ],
                        "sign": [],
                        "yxftitle": "上线送V5，8888元宝，3000铜钱",
                        "version_code": 1,
                        "package_name": "com.jianwan.grhh",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:200",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "玩家以当官为第一视角，通过娶妻生娃、培养门客、组建帮会、玩家PK",
                        "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c1b3960c7447398156166161075/v.f30.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201901/c1c50204b25955ea306818cf07b24f12_n.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 60634,
                        "app_id_i": 6338,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/grhhios_6338/grhhios_6338.plist"
                    },
                    {
                        "id": 2992,
                        "classid": 49,
                        "totaldown": 5599,
                        "title": "独孤天下",
                        "newstime": 1538287200,
                        "titlepic": "http://pic5.3733.com/icon/201812/534daf4f192fc6ae83d5bc41d4776c01.png",
                        "down_a": "http://xiazai.3733.com/apk/game/dugtx.apk",
                        "version": "1.05.0",
                        "titleimg": "http://pic5.3733.com/banner/201812/3ee085c74add20ecf8611293fb0e2bd8_n.jpeg",
                        "size_a": "103.3 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "动作"
                        ],
                        "sign": [],
                        "yxftitle": "送V5，10元满V，绑元38888，银币300W",
                        "version_code": 105,
                        "package_name": "com.junhai.wxjh.cgamex.zhuayou",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:200",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "进入一个无限遐想的诗意武侠大江湖",
                        "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c0e7f1677447398155631281332/v.f30.mp4",
                        "video_thumb": "http://pic3.3733.com/d/file/cb/2018-05-30/5de23ea5eac23083954880a674a78aa5.jpg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 60807,
                        "app_id_i": 6429,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dgtxios_6429/dgtxios_6429.plist"
                    },
                    {
                        "id": 3079,
                        "classid": 1,
                        "totaldown": 12881,
                        "title": "新大主宰",
                        "newstime": 1532746801,
                        "titlepic": "http://pic5.3733.com/icon/201901/4eeca9c87ce6f0ea039735ac56e917fe.png",
                        "down_a": "http://xiazai.3733.com/apk/game/xindazz.apk",
                        "version": "3.0.0.0",
                        "titleimg": "http://pic3.3733.com/d/file/game/2018-10-09/c3b0c46a4805430efbc839a7fc89d396.jpg",
                        "size_a": "234.2 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "卡牌"
                        ],
                        "sign": [],
                        "yxftitle": "上线送vip6，100万铜币",
                        "version_code": 3000,
                        "package_name": "com.heitao.dzz",
                        "license_md5": "",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:200",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "《新大主宰》是由起点白金作家天蚕土豆正版授权",
                        "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/0d56a9317447398155863490351/v.f30.mp4",
                        "video_thumb": "http://pic3.3733.com/d/file/game/2018-05-02/0aa546b7ab587d821ee2822e50ccec8c.jpg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 60792,
                        "app_id_i": 7077,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xdzz_xsdk_ios_7077/xdzz_xsdk_ios_7077.plist"
                    },
                    {
                        "id": 1277,
                        "classid": 49,
                        "totaldown": 9601,
                        "title": "梦幻回合-爽玩版",
                        "newstime": 1529026206,
                        "titlepic": "http://pic3.3733.com/d/file/cb/2018-06-22/4ab8c8d26ebdc795d06eb63db52da65e.png",
                        "down_a": "http://xiazai.3733.com/apk/game/menghcjbtb.apk",
                        "version": "3.6.0",
                        "titleimg": "http://pic3.3733.com/d/file/cb/2018-10-31/a2d1bb88c54b3b604802e8002cf1d83f.jpg",
                        "size_a": "206.45 MB",
                        "size_ip": "",
                        "type": [
                            "回合"
                        ],
                        "sign": [
                            "仙侠",
                            "Q版"
                        ],
                        "yxftitle": "上线即送至尊VIP(满V)，28888水玉，999W银币",
                        "version_code": 30600,
                        "package_name": "com.mhcjbtb.com",
                        "license_md5": "24F8FDD198FAA68AC77F9E910A9698D7",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:1000",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "超劲爆福利，各种免费，不花钱也能爽，萌妹子等你来约",
                        "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c04a03474564972818595767984/v.f30.mp4",
                        "video_thumb": "http://pic3.3733.com/d/file/cb/2018-05-28/56c72443938bdfbd9bd282170b7a6bd0.jpg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 60505,
                        "app_id_i": 6130,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhcjbtbios_6130/mhcjbtbios_6130.plist"
                    }
                ]
            }
        }
    )
})

app.post('/api/subject/index', (req, res) =>{
    res.json(
        {
            "log": {
                "sql": [
                    "[ DB ] CONNECT:[ UseTime:0.014825s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_subject` [ RunTime:0.003418s ]",
                    "[ SQL ] SELECT `id`,`title`,`titlepic`,`newstime` FROM `www_92game_net_d_ecms_subject` ORDER BY `newstime` DESC LIMIT 0,20 [ RunTime:0.002948s ]"
                ],
                "info": [
                    "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                    "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'subject',\n    2 => 'index',\n  ),\n)",
                    "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => 'c3febcf0-d9b4-4e45-8e9a-7c70ce440f98',\n  'user-agent' => 'PostmanRuntime/7.6.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '69',\n  'connection' => 'keep-alive',\n)",
                    "[ PARAM ] array (\n  '/api/subject/index' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '103',\n  'page' => '1',\n  'listRows' => '20',\n)",
                    "[ RUN ] app\\api\\controller\\Subject->index[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Subject.php ]",
                    "[ DB ] INIT mysql",
                    "[ CACHE ] INIT File"
                ]
            },
            "time": 1547711031,
            "code": 1,
            "data": [
                {
                    "info": {
                        "id": 108,
                        "title": "【第56期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-05-25/75fab5bf0ca54af4ab7122475fd4e062.jpg",
                        "newstime": 1527239834
                    }
                },
                {
                    "info": {
                        "id": 107,
                        "title": "【第55期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-05-18/9c49a7e82ffd421228614f4e5361c9af.jpg",
                        "newstime": 1526634677
                    }
                },
                {
                    "info": {
                        "id": 106,
                        "title": "【第54期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-05-11/c81cc9f89aa88173e90f869b54521df3.jpg",
                        "newstime": 1526021938
                    }
                },
                {
                    "info": {
                        "id": 105,
                        "title": "【第53期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-04-13/14b10c8149372992dd11836eee5e0de9.png",
                        "newstime": 1523603013
                    }
                },
                {
                    "info": {
                        "id": 104,
                        "title": "【第52期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-03-23/40084655f53ce9698a0d9c85e66f2d71.jpg",
                        "newstime": 1521797421
                    }
                },
                {
                    "info": {
                        "id": 103,
                        "title": "【第51期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-03-16/dfb3d392476e0985066d8a484b382409.jpg",
                        "newstime": 1521195932
                    }
                },
                {
                    "info": {
                        "id": 102,
                        "title": "【第50期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-03-09/b5718ff4e6826bbf7aba667089d60328.jpg",
                        "newstime": 1520588511
                    }
                },
                {
                    "info": {
                        "id": 101,
                        "title": "【第49期】3733元宵热门游戏推荐专题",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-03-02/c94f729af84e5c2b172d02404e7bab1f.jpg",
                        "newstime": 1519984423
                    }
                },
                {
                    "info": {
                        "id": 100,
                        "title": "【春节必玩】3733春节热门游戏专题",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-02-13/60ffc840bf56684c57e275d7eeb11b25.jpg",
                        "newstime": 1518492634
                    }
                },
                {
                    "info": {
                        "id": 99,
                        "title": "【第48期】3733手游寒假必玩游戏专题",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-02-13/27588e4a5dcad550b69b4a8228e352ed.jpg",
                        "newstime": 1518146221
                    }
                },
                {
                    "info": {
                        "id": 98,
                        "title": "【第47期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-01-19/86c83bfbda1c391102e02e368ead2756.jpg",
                        "newstime": 1516357252
                    }
                },
                {
                    "info": {
                        "id": 97,
                        "title": "【第46期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-01-12/cacb786c737c76e85bcb410fb0b1f211.jpg",
                        "newstime": 1515751375
                    }
                },
                {
                    "info": {
                        "id": 96,
                        "title": "【第45期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2018-01-05/7bba52b5e5ae237253b644f761b7ac01.jpg",
                        "newstime": 1515146184
                    }
                },
                {
                    "info": {
                        "id": 95,
                        "title": "【第44期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2017-12-29/cedd00866fa364847224318a142c51c6.jpg",
                        "newstime": 1513937187
                    }
                },
                {
                    "info": {
                        "id": 94,
                        "title": "【第43期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2017-12-15/7bfd8faf2fb7ac0a7f98e2ad036bb6ff.jpg",
                        "newstime": 1513334266
                    }
                },
                {
                    "info": {
                        "id": 93,
                        "title": "【第42期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2017-12-15/c975726a363490f7f7f06ad8c03e55f4.jpg",
                        "newstime": 1512727345
                    }
                },
                {
                    "info": {
                        "id": 92,
                        "title": "【第41期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2017-12-01/e52e7fa06239d869da4afa657e2c2d1f.jpg",
                        "newstime": 1512129751
                    }
                },
                {
                    "info": {
                        "id": 91,
                        "title": "【第40期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2017-12-01/d1067e169585aaa12999eb29d067174c.jpg",
                        "newstime": 1511524001
                    }
                },
                {
                    "info": {
                        "id": 90,
                        "title": "【第39期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2017-11-17/196c9ecd88cd8f94957fd78549df5b5a.jpg",
                        "newstime": 1510919586
                    }
                },
                {
                    "info": {
                        "id": 89,
                        "title": "【第38期】3733手游一周好游戏推荐",
                        "titlepic": "http://pic3.3733.com/d/file/zhuanti/2017-11-10/5c16a183da6b643eda44dd778c8940f1.jpg",
                        "newstime": 1510313911
                    }
                }
            ]
        }
    )
})
app.post('/api/game/index', (req, res) =>{
  res.json(
    {
      "log": {
          "sql": [
              "[ DB ] CONNECT:[ UseTime:0.013732s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
              "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.003049s ]",
              "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49) ORDER BY `newstime` DESC LIMIT 0,20 [ RunTime:0.004495s ]"
          ],
          "info": [
              "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
              "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'game',\n    2 => 'index',\n  ),\n)",
              "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => 'b0b6523b-6c79-40eb-8170-ca7ede224d88',\n  'user-agent' => 'PostmanRuntime/7.4.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '58',\n  'connection' => 'keep-alive',\n)",
              "[ PARAM ] array (\n  '/api/game/index' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '103',\n  'order' => '3',\n)",
              "[ RUN ] app\\api\\controller\\Game->index[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Game.php ]",
              "[ DB ] INIT mysql",
              "[ CACHE ] INIT File"
          ]
      },
      "time": 1547123505,
      "code": 1,
      "data": {
          "list": [
              {
                  "id": 20001024,
                  "classid": 49,
                  "totaldown": 4850,
                  "title": "刀剑乱武豪华版",
                  "newstime": 1547089200,
                  "titlepic": "http://pic5.3733.com/icon/201812/e68a0ab54e2f228db205b8422d692e16.png",
                  "down_a": "http://xiazai.3733.com/apk/game/daojlwhhb.apk",
                  "version": "1.00.05",
                  "titleimg": "http://pic5.3733.com/banner/201901/22e8a80b02f7eaba750a9fe9782cadbc.jpeg",
                  "size_a": "144.1 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "动作"
                  ],
                  "sign": [],
                  "yxftitle": "送V9、绑元50000、铜币888万",
                  "version_code": 2,
                  "package_name": "com.djlwcvb.cgamex.zhuayou",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:200",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "东方武侠题材的即时战斗类手机网络游戏",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61603,
                  "app_id_i": 6970,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/djlwios_6970/djlwios_6970.plist"
              },
              {
                  "id": 20000863,
                  "classid": 1,
                  "totaldown": 3779,
                  "title": "幻刃录",
                  "newstime": 1547087400,
                  "titlepic": "http://pic5.3733.com/icon/201901/751cbf3e9c9a2dc9ee6c85274afd60da.png",
                  "down_a": "http://xiazai.3733.com/apk/game/huanrl.apk",
                  "version": "1.3.0.4",
                  "titleimg": "http://pic5.3733.com/banner/201901/ddc88ffc1f265229c4364f3cd0ac0085_n.jpeg",
                  "size_a": "203.1 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "卡牌"
                  ],
                  "sign": [],
                  "yxftitle": "送V5、38888钻石、100万金币",
                  "version_code": 2,
                  "package_name": "com.jiayou.hrl.yx3733",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:500",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "二次元日漫校园风的绚丽世界",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61657,
                  "app_id_i": 7017,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/hrlios_7017/hrlios_7017.plist"
              },
              {
                  "id": 20001451,
                  "classid": 1,
                  "totaldown": 3795,
                  "title": "暗黑纪元-黑魂觉醒",
                  "newstime": 1547085600,
                  "titlepic": "http://pic5.3733.com/icon/201901/9b93f70960a706cb47c78c6ddc08fc5d.png",
                  "down_a": "http://xiazai.3733.com/apk/game/anhjyhhjx.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/279a860a4733e5c1ad89cb51d719a04c_n.jpeg",
                  "size_a": "3.4 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "策略"
                  ],
                  "sign": [],
                  "yxftitle": "送V5，8888元宝，金币100w",
                  "version_code": 1,
                  "package_name": "com.dianyou.ahjy",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:300",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "痛痛快快，以实力照亮每个黑暗的角落",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61734,
                  "app_id_i": 7091,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ahjy_hhjxios_7091/ahjy_hhjxios_7091.plist"
              },
              {
                  "id": 20001337,
                  "classid": 49,
                  "totaldown": 8399,
                  "title": "梦幻大乱斗海量版",
                  "newstime": 1546999200,
                  "titlepic": "http://pic5.3733.com/icon/201901/51ff09f98dcf54b6401aa707ca39ae5e.png",
                  "down_a": "http://xiazai.3733.com/apk/game/menghdldhlb.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/37c81e3af96a6f1c8ade76b975e14697_n.jpeg",
                  "size_a": "208.3 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "卡牌",
                      "策略"
                  ],
                  "sign": [],
                  "yxftitle": "送满V，钻石38888， 金币388W",
                  "version_code": 10,
                  "package_name": "com.mhdld",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:1000",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "一款全新画面的动作卡牌手游",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61714,
                  "app_id_i": 7092,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhdldhlbios_7092/mhdldhlbios_7092.plist"
              },
              {
                  "id": 20001336,
                  "classid": 1,
                  "totaldown": 6054,
                  "title": "烈焰战神豪华版",
                  "newstime": 1546999200,
                  "titlepic": "http://pic5.3733.com/icon/201901/285963b8a6e52020d93295813afd3f53.png",
                  "down_a": "http://xiazai.3733.com/apk/game/lieyzshhb.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/ea0bd3c7fa81e3311fd38e0188248cda.jpeg",
                  "size_a": "181.8 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "动作"
                  ],
                  "sign": [],
                  "yxftitle": "送V10，绑元18888，绑金888万",
                  "version_code": 18122616,
                  "package_name": "com.lyzscbv.jlhd",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:300",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "一款写实风格，以传奇为题材的角色扮演类游戏",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61713,
                  "app_id_i": 7076,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/lyzshhbios_7076/lyzshhbios_7076.plist"
              },
              {
                  "id": 20001141,
                  "classid": 1,
                  "totaldown": 16260,
                  "title": "梦缘江湖",
                  "newstime": 1546918200,
                  "titlepic": "http://pic5.3733.com/icon/201901/91f08e99172eaa6d327a428dffb5067b.png",
                  "down_a": "http://xiazai.3733.com/apk/game/mengyjh.apk",
                  "version": "1.0.5",
                  "titleimg": "http://pic5.3733.com/banner/201901/702651d66d47c75a8304f62d588d1a72.jpeg",
                  "size_a": "430.1 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "动作"
                  ],
                  "sign": [],
                  "yxftitle": "送贵族V、绑元88888、金币2888万",
                  "version_code": 6,
                  "package_name": "com.myjh.sy3733",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:500",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "一款青春武侠MMORPG手游",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61693,
                  "app_id_i": 7053,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/myjhios_7053/myjhios_7053.plist"
              },
              {
                  "id": 20001403,
                  "classid": 49,
                  "totaldown": 6966,
                  "title": "口袋妖兽豪华版",
                  "newstime": 1546916400,
                  "titlepic": "http://pic5.3733.com/icon/201901/a9c5ec274739e4b5f3d3ad5723ebf63a.png",
                  "down_a": "http://xiazai.3733.com/apk/game/koudyshhb.apk",
                  "version": "1.0.1",
                  "titleimg": "http://pic5.3733.com/banner/201901/683dd982f0882955b0b8ed635229213f.jpeg",
                  "size_a": "213.9 MB",
                  "size_ip": "",
                  "type": [
                      "策略",
                      "休闲"
                  ],
                  "sign": [],
                  "yxftitle": "送V18，钻石38888，金币5000W",
                  "version_code": 2,
                  "package_name": "com.kdys.cgamex.zhuayou",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:200",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "暗黑魔兽策略动作卡牌手游",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61726,
                  "app_id_i": 7088,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/kdyshhbios_7088/kdyshhbios_7088.plist"
              },
              {
                  "id": 20001391,
                  "classid": 1,
                  "totaldown": 5336,
                  "title": "西域英雄",
                  "newstime": 1546912800,
                  "titlepic": "http://pic5.3733.com/icon/201901/fa90d69e9f2e539274003494d9db5f0d.png",
                  "down_a": "http://xiazai.3733.com/apk/game/xiyyx.apk",
                  "version": "1.0.2.2",
                  "titleimg": "http://pic5.3733.com/banner/201901/ff8efd8566f708c9ad43d8cebe72150d_n.jpeg",
                  "size_a": "417.3 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "策略"
                  ],
                  "sign": [],
                  "yxftitle": "上线送20W银锭，100W五铢钱",
                  "version_code": 2,
                  "package_name": "com.lcfj.u3733",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:300",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "真正的策略游戏，用智慧和操作定江山",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61722,
                  "app_id_i": 7089,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xyyxios_7089/xyyxios_7089.plist"
              },
              {
                  "id": 3909,
                  "classid": 1,
                  "totaldown": 4249,
                  "title": "妖怪起源",
                  "newstime": 1546912800,
                  "titlepic": "http://pic5.3733.com/icon/201812/095406f85c52df38dfc18215ca0fa199.png",
                  "down_a": "http://xiazai.3733.com/apk/game/yaogqy.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201812/c6e4344ad58bc7b4ff2dd3cf3ebf7040_n.jpeg",
                  "size_a": "129.4 MB",
                  "size_ip": "",
                  "type": [
                      "回合",
                      "卡牌"
                  ],
                  "sign": [],
                  "yxftitle": "送V6，钻石8888、金币1000000",
                  "version_code": 110,
                  "package_name": "com.ygqywxjh.wwllsy.zhongy.sqss",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:300",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "首款唯一GBA系列经典手游!呈现给你一个真实的口袋妖怪",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61376,
                  "app_id_i": 6786,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ygqyios_6786/ygqyios_6786.plist"
              },
              {
                  "id": 20001218,
                  "classid": 1,
                  "totaldown": 4894,
                  "title": "最佳足球经理",
                  "newstime": 1546912200,
                  "titlepic": "http://pic5.3733.com/icon/201901/801071687e1e15a8e7864be2210237f5.png",
                  "down_a": "http://xiazai.3733.com/apk/game/zuijzqjl.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/1e5f52ce8ee1137c98fbd175dbee7441_n.jpeg",
                  "size_a": "75.4 MB",
                  "size_ip": "",
                  "type": [
                      "卡牌"
                  ],
                  "sign": [],
                  "yxftitle": "送V5，金球10000，资金50W",
                  "version_code": 100,
                  "package_name": "com.sfsy.zjzqjl.m3733",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:200",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "一款以足球题材的模拟经营类手机游戏",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61699,
                  "app_id_i": 7081,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zjzqjlios_7081/zjzqjlios_7081.plist"
              },
              {
                  "id": 20001184,
                  "classid": 1,
                  "totaldown": 20521,
                  "title": "斗罗乾坤",
                  "newstime": 1546855325,
                  "titlepic": "http://pic5.3733.com/icon/201901/dd6560955fe3d3111394963bf5ab6510.png",
                  "down_a": "http://xiazai.3733.com/apk/game/doulqk.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/a9d46d9dfc508dacacc4cb9c7c126333_n.jpeg",
                  "size_a": "3.7 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "休闲"
                  ],
                  "sign": [],
                  "yxftitle": "送SVIP3、元宝68888、金币500W",
                  "version_code": 1,
                  "package_name": "com.dlqk.guandu",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:1000",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "100%剧情还原的经典魔幻MMORPG手游",
                  "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5b6658765285890784248644427/FCJw37h9f8oA.mp4",
                  "video_thumb": "http://pic5.3733.com/snapshot/201901/838a662b1214c38cf3809f7d5bcb4bb1.jpeg",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61696,
                  "app_id_i": 7083,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dlqkcbbios_7083/dlqkcbbios_7083.plist"
              },
              {
                  "id": 20001408,
                  "classid": 1,
                  "totaldown": 15297,
                  "title": "造梦仙游",
                  "newstime": 1546826400,
                  "titlepic": "http://pic5.3733.com/icon/201901/a6c45127e196a1917220319e772b9a91.png",
                  "down_a": "http://xiazai.3733.com/apk/game/zaomxy.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/69943d319574afcde5c7a36e5a7d5888.jpeg",
                  "size_a": "3.3 MB",
                  "size_ip": "",
                  "type": [
                      "策略"
                  ],
                  "sign": [],
                  "yxftitle": "送V8，绑元18888，银两188W",
                  "version_code": 1,
                  "package_name": "com.zmxybt.jlhd",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:500",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "一款放置类角色扮演移动手机游戏",
                  "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5dcf54415285890784248757946/7KyxguLcYR4A.mp4",
                  "video_thumb": "http://pic5.3733.com/snapshot/201901/e7a3226898b7f5f2ec3eccc5890b10c1.jpeg",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61730,
                  "app_id_i": 7084,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zmxyios_7084/zmxyios_7084.plist"
              },
              {
                  "id": 20001219,
                  "classid": 49,
                  "totaldown": 7577,
                  "title": "忍者跳跳总动员",
                  "newstime": 1546825800,
                  "titlepic": "http://pic5.3733.com/icon/201901/24032347e165f7d2f46e68efb1701d45.png",
                  "down_a": "http://xiazai.3733.com/apk/game/renzttzdy.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/8c0e2b9c1faa06ddf27784445f9b5da7_n.jpeg",
                  "size_a": "225.6 MB",
                  "size_ip": "",
                  "type": [
                      "卡牌",
                      "策略"
                  ],
                  "sign": [],
                  "yxftitle": "送超V，金币40000，铜钱500W",
                  "version_code": 100,
                  "package_name": "com.sfsy.cqhycvb.m3733",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:1000",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "一起为了成为火影而奋斗吧",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61700,
                  "app_id_i": 7087,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/rzttzdyios_7087/rzttzdyios_7087.plist"
              },
              {
                  "id": 20001284,
                  "classid": 1,
                  "totaldown": 8376,
                  "title": "高达星战版",
                  "newstime": 1546824600,
                  "titlepic": "http://pic5.3733.com/icon/201901/ee1ae82211f236be43db090b6d553f12.png",
                  "down_a": "http://xiazai.3733.com/apk/game/gaodxzb.apk",
                  "version": "1.0.9",
                  "titleimg": "http://pic5.3733.com/banner/201901/6e6a7f12cf0ed2fdadd5076f95f3acee_n.jpeg",
                  "size_a": "176.2 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "动作"
                  ],
                  "sign": [],
                  "yxftitle": "送V9，金币888万，钻石38888",
                  "version_code": 74,
                  "package_name": "com.bzjj.bt.qipa",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:500",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "一款即时互动的机甲回合制游戏",
                  "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5b666e385285890784248644960/V2z6z9kZGZ0A.mp4",
                  "video_thumb": "http://pic5.3733.com/snapshot/201901/3e5e7c998763cd89a5171271db6d4ca8.jpeg",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61707,
                  "app_id_i": 7085,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/gdxzbios_7085/gdxzbios_7085.plist"
              },
              {
                  "id": 20001036,
                  "classid": 1,
                  "totaldown": 20777,
                  "title": "紫青双剑-正版",
                  "newstime": 1546650000,
                  "titlepic": "http://pic5.3733.com/icon/201901/465c14d1c14e83490122289f486eaabb.png",
                  "down_a": "http://xiazai.3733.com/apk/game/ziqsj.apk",
                  "version": "1.0.1",
                  "titleimg": "",
                  "size_a": "297.4 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "动作",
                      "即时"
                  ],
                  "sign": [],
                  "yxftitle": "上线送V12，38666绑元",
                  "version_code": 1,
                  "package_name": "com.jycbb.qipa",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:500",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "热门电视剧蜀山战纪改编的正版授权手游",
                  "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/582bd43e5285890784099466438/nGt14gEBYE8A.mp4",
                  "video_thumb": "http://pic5.3733.com/snapshot/201901/eecb6e96f5dfd64bfdbd463285966495.jpeg",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61683,
                  "app_id_i": 7043,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zqsj_zbios_7043/zqsj_zbios_7043.plist"
              },
              {
                  "id": 20000972,
                  "classid": 49,
                  "totaldown": 28322,
                  "title": "梦回千秋",
                  "newstime": 1546570800,
                  "titlepic": "http://pic5.3733.com/icon/201901/c90f8adccae58243241d5b1e1fa6191e.png",
                  "down_a": "http://xiazai.3733.com/apk/game/menghqq.apk",
                  "version": "2.4.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/101265b7525947d82507828f5e470b77_n.jpeg",
                  "size_a": "385 MB",
                  "size_ip": "",
                  "type": [
                      "回合",
                      "卡牌",
                      "策略"
                  ],
                  "sign": [],
                  "yxftitle": "送满V，钻石40888，金币1288万",
                  "version_code": 1,
                  "package_name": "com.cgbt.a.mhqq.cgamex.zhuayou",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:200",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "多元化的交互玩法，攻城略地，抢夺他人资源",
                  "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0d5b267d5285890784176488239/JV0nQp0IbccA.mp4",
                  "video_thumb": "http://pic5.3733.com/snapshot/201901/314c3f7843b1b5968cfea56386644893.jpeg",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61673,
                  "app_id_i": 7033,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhqqios_7033/mhqqios_7033.plist"
              },
              {
                  "id": 20000736,
                  "classid": 1,
                  "totaldown": 8918,
                  "title": "太乙封神传",
                  "newstime": 1546567200,
                  "titlepic": "http://pic5.3733.com/icon/201901/7218ccea59d03e266bf917b8db1ff9e7.png",
                  "down_a": "http://xiazai.3733.com/apk/game/taiyfsz.apk",
                  "version": "2.3.3",
                  "titleimg": "",
                  "size_a": "671.1 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "动作",
                      "即时"
                  ],
                  "sign": [],
                  "yxftitle": "送V5、28888元宝、进阶石200",
                  "version_code": 22594,
                  "package_name": "com.tyxml.mox.bt.yxmc",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:300",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "拥有原创、新颖游戏故事的仙侠手游",
                  "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5dcebfc35285890784248756778/26pbD0jUv6IA.mp4",
                  "video_thumb": "http://pic5.3733.com/snapshot/201901/8431c39dd630614f3bf21c2c8f1e6858.jpeg",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61642,
                  "app_id_i": 7006,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xzxmlios_7006/xzxmlios_7006.plist"
              },
              {
                  "id": 20001250,
                  "classid": 49,
                  "totaldown": 17633,
                  "title": "神魔大戮海量版",
                  "newstime": 1546484400,
                  "titlepic": "http://pic5.3733.com/icon/201901/d4eb6619baba16eb0883bc68d663c683.png",
                  "down_a": "http://xiazai.3733.com/apk/game/shenmdlhlb.apk",
                  "version": "1.6.1",
                  "titleimg": "http://pic5.3733.com/banner/201901/8757b38a611a87d8b0c15a13c09b7b2f.jpeg",
                  "size_a": "276.3 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "即时"
                  ],
                  "sign": [],
                  "yxftitle": "上线送vip12，钻石12888",
                  "version_code": 10000161,
                  "package_name": "com.smdl.cgamex.zhuayou",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:200",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "使用最新unity引擎结合多种玩法打造的精致3DMMORPG游戏",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61705,
                  "app_id_i": 7079,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/smdlios_7079/smdlios_7079.plist"
              },
              {
                  "id": 20001130,
                  "classid": 49,
                  "totaldown": 27620,
                  "title": "雷霆合击高爆版",
                  "newstime": 1546480800,
                  "titlepic": "http://pic5.3733.com/icon/201901/91d72b91bad70a6d1f6942d3b321bcf0.png",
                  "down_a": "http://xiazai.3733.com/apk/game/leithjgbb.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201812/c479f61d51fc671472f4a2aca9237f34_n.jpeg",
                  "size_a": "430.1 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "动作",
                      "即时"
                  ],
                  "sign": [],
                  "yxftitle": "送满V、3万元宝、金币100万",
                  "version_code": 1,
                  "package_name": "com.rxlt.guandu",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:500",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "创新型MMO手机网络游戏",
                  "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5d73bc515285890784248705811/8WRfhfGKaSgA.mp4",
                  "video_thumb": "http://pic5.3733.com/snapshot/201901/11bf79f2abd2c417033772ff3364cb72.jpeg",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61691,
                  "app_id_i": 7070,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/lthjgbbios_7070/lthjgbbios_7070.plist"
              },
              {
                  "id": 20000990,
                  "classid": 49,
                  "totaldown": 9099,
                  "title": "异人之下-动漫BT畅玩版",
                  "newstime": 1546480800,
                  "titlepic": "http://pic5.3733.com/icon/201812/a08d65b5e740c4c17203ead3628666d0.png",
                  "down_a": "http://xiazai.3733.com/apk/game/yirzx.apk",
                  "version": "1",
                  "titleimg": "http://pic5.3733.com/banner/201812/109ac18c7f8bda4e541734ca1d1f28e9_n.jpeg",
                  "size_a": "195.5 MB",
                  "size_ip": "",
                  "type": [
                      "卡牌",
                      "策略"
                  ],
                  "sign": [],
                  "yxftitle": "送V6、钻石38888，金币1888888",
                  "version_code": 1,
                  "package_name": "com.yrzx.yj",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:200",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "在异人世界等你来“异”展身手",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61676,
                  "app_id_i": 7036,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": false,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/yrzx_dmbtcwbios_7036/yrzx_dmbtcwbios_7036.plist"
              }
          ]
      }
  }
  )
});
app.post('/api/newgame/index', (req, res) =>{
    res.json(
        {
            "log": {
                "sql": [
                    "[ DB ] CONNECT:[ UseTime:0.013730s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.003942s ]",
                    "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49) ORDER BY `priority` DESC LIMIT 0,20 [ RunTime:0.014374s ]"
                ],
                "info": [
                    "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                    "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'game',\n    2 => 'index',\n  ),\n)",
                    "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => 'ae5a0b71-85fc-47a4-8ac8-746512690690',\n  'user-agent' => 'PostmanRuntime/7.6.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '60',\n  'connection' => 'keep-alive',\n)",
                    "[ PARAM ] array (\n  '/api/game/index' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '103',\n  'order' => '101',\n)",
                    "[ RUN ] app\\api\\controller\\Game->index[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Game.php ]",
                    "[ DB ] INIT mysql",
                    "[ CACHE ] INIT File"
                ]
            },
            "time": 1547602292,
            "code": 1,
            "data": {
                "list": [
                    {
                        "id": 20000516,
                        "classid": 1,
                        "totaldown": 45776,
                        "title": "斗破西游超爆版",
                        "newstime": 1546916400,
                        "titlepic": "http://pic5.3733.com/icon/201812/c331866ced1027347f685ec9273bfce1.png",
                        "down_a": "http://xiazai.3733.com/apk/game/doupxycbb.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
                        "size_a": "268.7 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "动作",
                            "即时"
                        ],
                        "sign": [],
                        "yxftitle": "上线送VIP9、绑定元宝*28888",
                        "version_code": 1,
                        "package_name": "com.dpxy.guandu",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:200",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "装备全靠靠打,超级爆率9.8!",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0cc967355285890784176406916/LaYljc1SBRUA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201901/2addafe990d8979c6d7362a0d86c651f_n.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61613,
                        "app_id_i": 6979,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dpxycbbios_6979/dpxycbbios_6979.plist"
                    },
                    {
                        "id": 20000445,
                        "classid": 1,
                        "totaldown": 34927,
                        "title": "校花学院",
                        "newstime": 1546909200,
                        "titlepic": "http://pic5.3733.com/icon/201812/b96aa3cedb565dc09f74a6c3c74ff757.png",
                        "down_a": "http://xiazai.3733.com/apk/game/xiaohmgc.apk",
                        "version": "2.0.2.4",
                        "titleimg": "http://pic5.3733.com/banner/201812/833a15ff60f8b5184f2fff5e5e9ced75_n.jpeg",
                        "size_a": "324 MB",
                        "size_ip": "",
                        "type": [
                            "回合",
                            "卡牌"
                        ],
                        "sign": [],
                        "yxftitle": "送V10，金币88万，钻石18888",
                        "version_code": 11,
                        "package_name": "com.jianwan.xhdtsgs.yy3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:200",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "起点金牌作家鱼人二代正式授权，唯一正版校花青春手游大作",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/2a969d3d5285890783696586810/V7qja8AR1AIA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201812/732207418944e53b291974699f1d8e77_n.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61461,
                        "app_id_i": 7059,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xhmgc_jsdk_ios_7059/xhmgc_jsdk_ios_7059.plist"
                    },
                    {
                        "id": 20000961,
                        "classid": 49,
                        "totaldown": 43762,
                        "title": "大圣归来星耀版",
                        "newstime": 1546920000,
                        "titlepic": "http://pic5.3733.com/icon/201901/c1f32e60766db2af1b525ae39b835c7c.png",
                        "down_a": "http://xiazai.3733.com/apk/game/dasglxyb.apk",
                        "version": "4.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201812/ac15140c72dd15afd83360c4dbe74910_n.jpeg",
                        "size_a": "139.6 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "动作",
                            "即时"
                        ],
                        "sign": [],
                        "yxftitle": "上线直接赠送加强版星耀满V",
                        "version_code": 400,
                        "package_name": "com.jianwan.dsglxy.yy3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:1000",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "同名动画电影改编的3D-ARPG动作手游",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af97fe5285890783958544771/p6ayPdBZlD0A.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201812/3941c167dce4c08aa71eb7ef5d4cb666.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61671,
                        "app_id_i": 7030,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dsglxybios_7030/dsglxybios_7030.plist"
                    },
                    {
                        "id": 20000591,
                        "classid": 49,
                        "totaldown": 43276,
                        "title": "传奇归来",
                        "newstime": 1544767200,
                        "titlepic": "http://pic5.3733.com/icon/201812/ed20807c0a431fe36962afe4484546e3.png",
                        "down_a": "http://xiazai.3733.com/apk/game/chuanqgl.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201812/1f56b2f8a048af7c2eef2eced7129d03.jpeg",
                        "size_a": "3.4 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "即时"
                        ],
                        "sign": [],
                        "yxftitle": "送V15、元宝58888、铜币200万",
                        "version_code": 1,
                        "package_name": "com.qn.cqgl.sy3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "竖版合击版传奇游戏",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/25fe537d5285890783696396415/XVtPaEbrPjUA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201812/d6445419fad56e901843a01a1121ee8b.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61610,
                        "app_id_i": 7072,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/cqgl_xsdk_ios_7072/cqgl_xsdk_ios_7072.plist"
                    },
                    {
                        "id": 20000823,
                        "classid": 49,
                        "totaldown": 33603,
                        "title": "暗黑血缘疯狂版",
                        "newstime": 1546048200,
                        "titlepic": "http://pic5.3733.com/icon/201812/342df1399f0dae38a072846b41f79161.png",
                        "down_a": "http://xiazai.3733.com/apk/game/anhxyfkb.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201812/dff73454dc24ec938e4cd4cb67af2e01.jpeg",
                        "size_a": "310.8 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "动作",
                            "即时"
                        ],
                        "sign": [],
                        "yxftitle": "送至尊V，钻石60000，金币500W",
                        "version_code": 100,
                        "package_name": "com.sfsy.slws999b.m3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:1000",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "幻想题材的RPG动作手游",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af92db5285890783958544606/VDutOXIL1HUA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201812/9d78c1765c3d0853bf8b226112a64722.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61654,
                        "app_id_i": 7065,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ahxyfkbios_7065/ahxyfkbios_7065.plist"
                    },
                    {
                        "id": 3996,
                        "classid": 49,
                        "totaldown": 35050,
                        "title": "梦回仙游星耀版",
                        "newstime": 1546912800,
                        "titlepic": "http://pic5.3733.com/icon/201812/ff6f5962f2a5536f1292fff3e8a8445d.png",
                        "down_a": "http://xiazai.3733.com/apk/game/menghxyxyb.apk",
                        "version": "1.0.1",
                        "titleimg": "http://pic5.3733.com/banner/201812/3c73101b51a042a90f86b58d5f6b82bf_n.jpeg",
                        "size_a": "358.7 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "回合"
                        ],
                        "sign": [],
                        "yxftitle": "送满V，绑定元宝*20000，铜币*500W",
                        "version_code": 101,
                        "package_name": "com.sfsy.ttdzf.m3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:200",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "2018年精美3D回合制手游力作",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/fa38b00a5285890783111289521/ZMWN1w24RjgA.mp4",
                        "video_thumb": "http://pic3.3733.com/d/file/cb/2018-11-19/6d0307e13b8b1e7663c9147a9ee4769e.jpg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61431,
                        "app_id_i": 6836,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhxyxybios_6836/mhxyxybios_6836.plist"
                    },
                    {
                        "id": 1242,
                        "classid": 49,
                        "totaldown": 20899,
                        "title": "寻道回合",
                        "newstime": 1545382800,
                        "titlepic": "http://pic5.3733.com/icon/201812/641fe0061c696688cf5fd9d403a4f703.png",
                        "down_a": "http://xiazai.3733.com/apk/game/xundhh.apk",
                        "version": "1.0.11.12",
                        "titleimg": "http://pic5.3733.com/banner/201812/3f9d5701256909f4e0417fe5c6c30e1b_n.jpeg",
                        "size_a": "317.2 MB",
                        "size_ip": "",
                        "type": [
                            "回合"
                        ],
                        "sign": [],
                        "yxftitle": "上线送300万银币，送10元代金券，送70级装备",
                        "version_code": 23,
                        "package_name": "com.jiayou.xundao.yueyou",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "游戏以交友为主题，快来寻找你的红颜",
                        "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c041052c9031868223502577577/v.f30.mp4",
                        "video_thumb": "http://pic3.3733.com/d/file/cb/2017-11-08/f8946af0329995b2ed947302e4779252.jpg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 60480,
                        "app_id_i": 7063,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xdhh_xsdk_ios_7063/xdhh_xsdk_ios_7063.plist"
                    },
                    {
                        "id": 20000530,
                        "classid": 1,
                        "totaldown": 32331,
                        "title": "山海异闻录",
                        "newstime": 1545379200,
                        "titlepic": "http://pic5.3733.com/icon/201901/df5c08f6b98ccfe4512367c4930c2ad7.png",
                        "down_a": "http://xiazai.3733.com/apk/game/shanhywl.apk",
                        "version": "1.2.1",
                        "titleimg": "http://pic5.3733.com/banner/201812/308869539a30fbf3c982fc6dcede4aa9.jpeg",
                        "size_a": "326.1 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "回合"
                        ],
                        "sign": [],
                        "yxftitle": "送V7，极品妖兽，魂玉18888，铜币188w",
                        "version_code": 2,
                        "package_name": "com.gaea.shanhai.yixu",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:200",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "3D国韵奇遇式手游《山海异闻录》删档测试正式开启",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/a926cb515285890783548143624/IWAe4hX621QA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201812/7a2c937f5edc3c0d13ef0797c54f1b75.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61616,
                        "app_id_i": 7057,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/shywl_xsdk_ios_7057/shywl_xsdk_ios_7057.plist"
                    },
                    {
                        "id": 3529,
                        "classid": 49,
                        "totaldown": 30377,
                        "title": "超梦西游海量版",
                        "newstime": 1546044600,
                        "titlepic": "http://pic5.3733.com/icon/201901/11ab9518ca1cede650a7023a430bd86f.png",
                        "down_a": "http://xiazai.3733.com/apk/game/chaomxywxb.apk",
                        "version": "1.1.7",
                        "titleimg": "http://pic5.3733.com/banner/201812/3eb872e49582a747294a907e823e98fa_n.jpeg",
                        "size_a": "386.5 MB",
                        "size_ip": "",
                        "type": [
                            "回合"
                        ],
                        "sign": [],
                        "yxftitle": "上线送贵族20专属特权，18888元宝",
                        "version_code": 10107,
                        "package_name": "com.gzbq.cmwx.cgamex.zhuayou",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:200",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "经典回合制手游，海量资源，开局一直鲲进化全靠吞",
                        "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/bb8571085285890781260476203/v.f30.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201811/c8f48adc3106f4c3e04d7564c3fcb3be.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61101,
                        "app_id_i": 7046,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/cmxyhlb_xsdk_ios_704/cmxyhlb_xsdk_ios_704.plist"
                    },
                    {
                        "id": 20001141,
                        "classid": 1,
                        "totaldown": 31088,
                        "title": "梦缘江湖",
                        "newstime": 1546918200,
                        "titlepic": "http://pic5.3733.com/icon/201901/91f08e99172eaa6d327a428dffb5067b.png",
                        "down_a": "http://xiazai.3733.com/apk/game/mengyjh.apk",
                        "version": "1.0.5",
                        "titleimg": "http://pic5.3733.com/banner/201901/702651d66d47c75a8304f62d588d1a72.jpeg",
                        "size_a": "430.1 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "动作"
                        ],
                        "sign": [],
                        "yxftitle": "送贵族V、绑元88888、金币2888万",
                        "version_code": 6,
                        "package_name": "com.myjh.sy3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "一款青春武侠MMORPG手游",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/f8e76b3b5285890784298677322/bEKMOeRyUwMA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201901/c4cfe7d349fdfab8fa3939895b315b5c.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61693,
                        "app_id_i": 7053,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/myjhios_7053/myjhios_7053.plist"
                    },
                    {
                        "id": 4032,
                        "classid": 49,
                        "totaldown": 35218,
                        "title": "烈焰莽夫豪华版",
                        "newstime": 1542067200,
                        "titlepic": "http://pic5.3733.com/icon/201812/bfcfe0fd55067571cd3baae7d2374369.png",
                        "down_a": "http://xiazai.3733.com/apk/game/lieymfhhb.apk",
                        "version": "1.0",
                        "titleimg": "http://pic3.3733.com/d/file/cb/2018-11-12/733fc58955a569563fb02fabbe2687d3.jpg",
                        "size_a": "9.4 MB",
                        "size_ip": "",
                        "type": [
                            "角色"
                        ],
                        "sign": [],
                        "yxftitle": "送V25，128888元宝，铜币608万",
                        "version_code": 1,
                        "package_name": "com.twmfxyb.jlhd",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:2000",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "让玩家切身体会到一个炫丽庞大的世界",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/fc1d62425285890783111322228/YuMkJ4gg17oA.mp4",
                        "video_thumb": "http://pic3.3733.com/d/file/cb/2018-11-19/e99e39695689946fbbcafc93fa21685a.jpg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61458,
                        "app_id_i": 7067,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/lymfhhb_xsdk_ios_706/lymfhhb_xsdk_ios_706.plist"
                    },
                    {
                        "id": 3767,
                        "classid": 49,
                        "totaldown": 30406,
                        "title": "少年三国传星耀版",
                        "newstime": 1539918000,
                        "titlepic": "http://pic5.3733.com/icon/201812/4d9d6cab0e1e04951f646c32ef9c35d5.png",
                        "down_a": "http://xiazai.3733.com/apk/game/shaonsgzxyb.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201901/439f78c8dc169e20a9becd8435c0213b_n.jpeg",
                        "size_a": "233.4 MB",
                        "size_ip": "",
                        "type": [
                            "回合",
                            "卡牌"
                        ],
                        "sign": [],
                        "yxftitle": "送V19，30000魂玉，300W银两",
                        "version_code": 100,
                        "package_name": "com.sfsy.snqyzmvb.m3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "一款RPG战斗卡牌游戏",
                        "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/7636d30f5285890782388503054/v.f30.mp4",
                        "video_thumb": "http://pic3.3733.com/d/file/cb/2018-10-16/3eb40a710550958214ff03b9d0e998dc.jpg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61309,
                        "app_id_i": 7068,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/snsgcxyb_xsdk_ios_70/snsgcxyb_xsdk_ios_70.plist"
                    },
                    {
                        "id": 20001184,
                        "classid": 1,
                        "totaldown": 33535,
                        "title": "斗罗乾坤",
                        "newstime": 1546855325,
                        "titlepic": "http://pic5.3733.com/icon/201901/8f9cf402f052ebf162e5b2b7439df864.png",
                        "down_a": "http://xiazai.3733.com/apk/game/doulqk.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201901/a9d46d9dfc508dacacc4cb9c7c126333_n.jpeg",
                        "size_a": "3.7 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "休闲"
                        ],
                        "sign": [],
                        "yxftitle": "送SVIP3、元宝68888、金币500W",
                        "version_code": 1,
                        "package_name": "com.dlqk.guandu",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:1000",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "100%剧情还原的经典魔幻MMORPG手游",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5b6658765285890784248644427/FCJw37h9f8oA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201901/838a662b1214c38cf3809f7d5bcb4bb1.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61696,
                        "app_id_i": 7083,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dlqkcbbios_7083/dlqkcbbios_7083.plist"
                    },
                    {
                        "id": 20001408,
                        "classid": 1,
                        "totaldown": 32023,
                        "title": "造梦仙游",
                        "newstime": 1546826400,
                        "titlepic": "http://pic5.3733.com/icon/201901/a6c45127e196a1917220319e772b9a91.png",
                        "down_a": "http://xiazai.3733.com/apk/game/zaomxy.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201901/fa2e058f5446c5f0562a1c3c725a12c7_n.jpeg",
                        "size_a": "3.3 MB",
                        "size_ip": "",
                        "type": [
                            "策略"
                        ],
                        "sign": [],
                        "yxftitle": "送V8，绑元18888，银两188W",
                        "version_code": 1,
                        "package_name": "com.zmxybt.jlhd",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "一款放置类角色扮演移动手机游戏",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5dcf54415285890784248757946/7KyxguLcYR4A.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201901/e7a3226898b7f5f2ec3eccc5890b10c1.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61730,
                        "app_id_i": 7084,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zmxyios_7084/zmxyios_7084.plist"
                    },
                    {
                        "id": 4112,
                        "classid": 1,
                        "totaldown": 32503,
                        "title": "斗罗高爆版",
                        "newstime": 1544837400,
                        "titlepic": "http://pic5.3733.com/icon/201812/a8ce1d83b5a6c4e09bfb6188e312655d.png",
                        "down_a": "http://xiazai.3733.com/apk/game/doulgbb.apk",
                        "version": "1.0.0.5",
                        "titleimg": "http://pic5.3733.com/banner/201901/b16e0d0ef7b4dae180159ce8b73a4e95_n.jpeg",
                        "size_a": "132.1 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "动作"
                        ],
                        "sign": [],
                        "yxftitle": "上线送VIP12，66888绑元宝",
                        "version_code": 5,
                        "package_name": "com.dlgbb.bt.qipa",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "完美结合原著中特色分明的人物形象，带来前所未有的震撼爽快的打击感",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/23b81d115285890783584010829/cZEGTMvzA4EA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201812/89ea33ab63acd45220940d486742c4ac.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61470,
                        "app_id_i": 7066,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dlgbb_xsdk_ios_7066/dlgbb_xsdk_ios_7066.plist"
                    },
                    {
                        "id": 3598,
                        "classid": 49,
                        "totaldown": 35586,
                        "title": "我要当宰相",
                        "newstime": 1539925200,
                        "titlepic": "http://pic5.3733.com/icon/201812/2753771af609f38f71597b0447bf73da.png",
                        "down_a": "http://xiazai.3733.com/apk/game/woydzx.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201812/1a581f11521cb4766b62222e85b3fcda_n.jpeg",
                        "size_a": "4.9 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "策略",
                            "休闲"
                        ],
                        "sign": [],
                        "yxftitle": "上线送满V、48888元宝、银两100W",
                        "version_code": 1,
                        "package_name": "com.wydzx",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:1000",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "一款以古代官场斗争为题材的策略经营类手机网络游戏",
                        "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/397d60c95285890781937100902/v.f30.mp4",
                        "video_thumb": "http://pic3.3733.com/d/file/cb/2018-09-21/d6a2f6c0bb829f743091e7cbb3b661ff.jpg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61225,
                        "app_id_i": 6638,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/wydzxios_6638/wydzxios_6638.plist"
                    },
                    {
                        "id": 4345,
                        "classid": 49,
                        "totaldown": 18677,
                        "title": "古龙群侠传星耀版",
                        "newstime": 1544061000,
                        "titlepic": "http://pic5.3733.com/icon/201812/ded52c742837b2f8ea2ec2a12760a689.png",
                        "down_a": "http://xiazai.3733.com/apk/game/gulqxzxyb.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201812/ed54146092d240f3d8142d0bc52d84f6_n.jpeg",
                        "size_a": "307.6 MB",
                        "size_ip": "",
                        "type": [
                            "回合",
                            "卡牌"
                        ],
                        "sign": [],
                        "yxftitle": "送V17，元宝50000，铜币200W",
                        "version_code": 100,
                        "package_name": "com.sfsy.glqxz2mv.m3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "以古龙原著为基础的的2D角色扮演手游",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/23b890465285890783584011250/4J9aZDfe3LAA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201812/34e2b0ea7be7bfff7912a2d575f3142a.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61553,
                        "app_id_i": 6929,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/glqxcxybios_6929/glqxcxybios_6929.plist"
                    },
                    {
                        "id": 3862,
                        "classid": 1,
                        "totaldown": 19360,
                        "title": "狂爆之翼",
                        "newstime": 1544069400,
                        "titlepic": "http://pic5.3733.com/icon/201812/6eaaa35c5798cab05b7d65ddb89cfaf6.png",
                        "down_a": "http://xiazai.3733.com/apk/game/kuangbzy.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201812/e06f89b4b1bd092fabd8386ad96446fb_n.jpeg",
                        "size_a": "469.4 MB",
                        "size_ip": "",
                        "type": [
                            "角色"
                        ],
                        "sign": [],
                        "yxftitle": "送V5，钻石*10000，黑钻*10000",
                        "version_code": 100,
                        "package_name": "com.sfsy.kbzy.m3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:200",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "一款以激爽战斗为核心的3D炫战ARPG手游",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/4b2bbf6f5285890783146730509/SCnAAjckUDIA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201811/af153562a413d6f442c2d39736a36b5a.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61389,
                        "app_id_i": 7051,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/kbzy_xsdk_ios_7051/kbzy_xsdk_ios_7051.plist"
                    },
                    {
                        "id": 4218,
                        "classid": 49,
                        "totaldown": 27134,
                        "title": "恶人传奇豪华版",
                        "newstime": 1543197600,
                        "titlepic": "http://pic5.3733.com/icon/201812/cf2a081601701d487f7bf32331e50988.png",
                        "down_a": "http://xiazai.3733.com/apk/game/ercqhhb.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201811/e53456a522cf2271e65a4d3b0f918c7d_n.jpeg",
                        "size_a": "130 MB",
                        "size_ip": "",
                        "type": [
                            "角色"
                        ],
                        "sign": [],
                        "yxftitle": "上线送VIP11，绑元*30000",
                        "version_code": 18111900,
                        "package_name": "com.erqcmvb.jlhd",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:300",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "以传奇为题材的角色扮演类手机网络游戏",
                        "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/9d81a5145285890783368366116/0pQiRTnjcncA.mp4",
                        "video_thumb": "http://pic5.3733.com/snapshot/201812/66ee2dfff140b25f30e0c65ddf38c056.jpeg",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61523,
                        "app_id_i": 7060,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ercqhhb_xsdk_ios_706/ercqhhb_xsdk_ios_706.plist"
                    },
                    {
                        "id": 20001472,
                        "classid": 1,
                        "totaldown": 29490,
                        "title": "龙城传奇",
                        "newstime": 1547189880,
                        "titlepic": "http://pic5.3733.com/icon/201901/83047f8874fb659953b87fed719c51c6.png",
                        "down_a": "http://xiazai.3733.com/apk/game/longccq.apk",
                        "version": "1.1.0",
                        "titleimg": "http://pic5.3733.com/banner/201901/3342fabbf04fd0ff2bf642059bf6c685.jpeg",
                        "size_a": "319.4 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "动作"
                        ],
                        "sign": [],
                        "yxftitle": "送V10，绑元88888，绑金888W",
                        "version_code": 110,
                        "package_name": "com.lccq.quick",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "再现当年沙巴克攻城盛世",
                        "video_url": "",
                        "video_thumb": "",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61737,
                        "app_id_i": 7094,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/lccqios_7094/lccqios_7094.plist"
                    }
                ],
                "bg_img": "http://pic5.3733.com/banner/201808/14c88d8af2baa735d419bfa8389774a8_n.jpeg"
            }
        }
    )
})
app.post('/api/search/index', (req, res) =>{
    res.json(
        {
            "log": {
                "sql": [
                    "[ DB ] CONNECT:[ UseTime:0.014946s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.004349s ]",
                    "[ SQL ] SELECT `b`.`id`,`b`.`classid`,`b`.`title`,`b`.`titlegame`,`b`.`cardbody`,`b`.`cardtext`,`b`.`renum`,`b`.`shuliang`,`b`.`qq_qun`,`a`.`classid`,`a`.`titlepic` FROM `www_92game_net_d_ecms_app` `a` INNER JOIN `xiaoyu3733db`.`www_92game_net_d_ecms_card` `b` ON `a`.`title`=`b`.`titlegame` WHERE  `a`.`state` IN (2,1,5)  AND `a`.`platform` LIKE '%IOS%'  AND `b`.`zhuangtai` <> 3  AND `b`.`title` LIKE '%回合%' ORDER BY `a`.`onclick` DESC LIMIT 0,20 [ RunTime:0.008463s ]"
                ],
                "info": [
                    "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                    "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'search',\n    2 => 'index',\n  ),\n)",
                    "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => 'e872fe02-4080-4989-86bc-5b00e187d28d',\n  'user-agent' => 'PostmanRuntime/7.6.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '106',\n  'connection' => 'keep-alive',\n)",
                    "[ PARAM ] array (\n  '/api/search/index' => '',\n  'from' => '103',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'page' => '1',\n  'keyword' => '回合',\n  'fromAction' => '3',\n  'type' => '101',\n)",
                    "[ RUN ] app\\api\\controller\\Search->index[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Search.php ]",
                    "[ DB ] INIT mysql",
                    "[ CACHE ] INIT File"
                ]
            },
            "time": 1547521759,
            "code": 1,
            "data": {
                "game_list": [],
                "card_list": [
                    {
                        "id": 1341,
                        "classid": 49,
                        "title": "寻道回合活动礼包",
                        "titlegame": "寻道回合",
                        "cardbody": "银袋子*1、宝宝丹*30、人物经验丹*10",
                        "cardtext": "福利-cdkey礼包-领取",
                        "qq_qun": "",
                        "titlepic": "http://pic5.3733.com/icon/201812/641fe0061c696688cf5fd9d403a4f703.png",
                        "remain": 5,
                        "yi_ling_qu": 40423,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": null
                    },
                    {
                        "id": 1342,
                        "classid": 49,
                        "title": "寻道回合充值礼包",
                        "titlegame": "寻道回合",
                        "cardbody": "金袋子*2、宝宝丹*50、内功丹*20",
                        "cardtext": "福利-cdkey礼包-领取",
                        "qq_qun": "",
                        "titlepic": "http://pic5.3733.com/icon/201812/641fe0061c696688cf5fd9d403a4f703.png",
                        "remain": 0,
                        "yi_ling_qu": 41897,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": null
                    },
                    {
                        "id": 1343,
                        "classid": 49,
                        "title": "寻道回合大R礼包",
                        "titlegame": "寻道回合",
                        "cardbody": "染料*3、人物经验丹*30、宝宝丹*60",
                        "cardtext": "福利-cdkey礼包-领取",
                        "qq_qun": "",
                        "titlepic": "http://pic5.3733.com/icon/201812/641fe0061c696688cf5fd9d403a4f703.png",
                        "remain": 36,
                        "yi_ling_qu": 44649,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": null
                    },
                    {
                        "id": 1433,
                        "classid": 49,
                        "title": "梦幻回合-爽玩版新手礼包",
                        "titlegame": "梦幻回合-爽玩版",
                        "cardbody": "水玉*5888、修炼丹*100、韬略丹*100、银币*100万",
                        "cardtext": "汉中城NPC梦幻夫人（坐标270，150）处输入CDKEY兑换",
                        "qq_qun": "",
                        "titlepic": "http://pic3.3733.com/d/file/cb/2018-06-22/4ab8c8d26ebdc795d06eb63db52da65e.png",
                        "remain": 1,
                        "yi_ling_qu": 49714,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": null
                    },
                    {
                        "id": 1434,
                        "classid": 49,
                        "title": "梦幻回合-爽玩版关注礼包",
                        "titlegame": "梦幻回合-爽玩版",
                        "cardbody": "水玉*8888、初级强化石*10、浩然正气*100、银币*200万",
                        "cardtext": "汉中城NPC梦幻夫人（坐标270，150）处输入CDKEY兑换",
                        "qq_qun": "",
                        "titlepic": "http://pic3.3733.com/d/file/cb/2018-06-22/4ab8c8d26ebdc795d06eb63db52da65e.png",
                        "remain": 2,
                        "yi_ling_qu": 49444,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": null
                    },
                    {
                        "id": 1435,
                        "classid": 49,
                        "title": "梦幻回合-爽玩版独享礼包",
                        "titlegame": "梦幻回合-爽玩版",
                        "cardbody": "水玉*12888、5级宝石箱*3、驭客秘籍*10、银币*300万",
                        "cardtext": "汉中城NPC梦幻夫人（坐标270，150）处输入CDKEY兑换",
                        "qq_qun": "",
                        "titlepic": "http://pic3.3733.com/d/file/cb/2018-06-22/4ab8c8d26ebdc795d06eb63db52da65e.png",
                        "remain": 2,
                        "yi_ling_qu": 46464,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": null
                    },
                    {
                        "id": 1494,
                        "classid": 49,
                        "title": "梦幻回合-爽玩版至尊礼包",
                        "titlegame": "梦幻回合-爽玩版",
                        "cardbody": "水玉*16888、高级强化石*10、高级技能箱*2、银币*500万",
                        "cardtext": "汉中城NPC梦幻夫人（坐标270，150）处输入CDKEY兑换",
                        "qq_qun": "",
                        "titlepic": "http://pic3.3733.com/d/file/cb/2018-06-22/4ab8c8d26ebdc795d06eb63db52da65e.png",
                        "remain": 1,
                        "yi_ling_qu": 41398,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": null
                    },
                    {
                        "id": 4256,
                        "classid": 1,
                        "title": "西游回合新手礼包",
                        "titlegame": "西游回合",
                        "cardbody": "金币*28888，绑元*888，坐骑培养丹*10",
                        "cardtext": "福利大厅—激活码",
                        "qq_qun": "",
                        "titlepic": "http://pic5.3733.com/icon/201812/c4fc4cdaf1a54c3a53ce3bea6e2d6ec9.png",
                        "remain": 49,
                        "yi_ling_qu": 1544,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": null
                    },
                    {
                        "id": 4257,
                        "classid": 1,
                        "title": "西游回合特权礼包",
                        "titlegame": "西游回合",
                        "cardbody": "金币*58888，绑元1888，坐骑培养丹*10，宠物培养丹*10",
                        "cardtext": "福利大厅—激活码",
                        "qq_qun": "",
                        "titlepic": "http://pic5.3733.com/icon/201812/c4fc4cdaf1a54c3a53ce3bea6e2d6ec9.png",
                        "remain": 45,
                        "yi_ling_qu": 1642,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": null
                    },
                    {
                        "id": 3003,
                        "classid": 49,
                        "title": "仙剑奇侠传回合预约礼包",
                        "titlegame": "仙剑奇侠传回合",
                        "cardbody": "鬼手差令*3、银票5000*4、三级宝石袋*2、元宝*2000、50级礼包(银票5000*10、灵宠魂石*10、如意金刚宝箱*3、元宝*9999(有几率开出iphoneX)",
                        "cardtext": "在游戏中点击系统→礼包兑换→输入兑换礼包码",
                        "qq_qun": "",
                        "titlepic": "http://pic3.3733.com/d/file/cb/2018-10-18/d8812867a4420a0daa8c4f98f63d01ed.png",
                        "remain": 12,
                        "yi_ling_qu": 14294,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": null
                    },
                    {
                        "id": 3525,
                        "classid": 49,
                        "title": "仙剑奇侠传回合十一礼包",
                        "titlegame": "仙剑奇侠传回合",
                        "cardbody": "玲珑宝石袋*2、银票1000*5、奇侠传*1、洛阳铲*2",
                        "cardtext": "在游戏中点击系统→礼包兑换→输入兑换礼包码",
                        "qq_qun": "",
                        "titlepic": "http://pic3.3733.com/d/file/cb/2018-10-18/d8812867a4420a0daa8c4f98f63d01ed.png",
                        "remain": 45,
                        "yi_ling_qu": 5490,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": null
                    },
                    {
                        "id": 3526,
                        "classid": 49,
                        "title": "仙剑奇侠传回合老玩家回归礼包",
                        "titlegame": "仙剑奇侠传回合",
                        "cardbody": "鬼手差令*10、银票1000*10、随机神兵*1、绑定元宝*10000",
                        "cardtext": "在游戏中点击系统→礼包兑换→输入兑换礼包码",
                        "qq_qun": "",
                        "titlepic": "http://pic3.3733.com/d/file/cb/2018-10-18/d8812867a4420a0daa8c4f98f63d01ed.png",
                        "remain": 6,
                        "yi_ling_qu": 4712,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": null
                    },
                    {
                        "id": 3741,
                        "classid": 1,
                        "title": "仙道回合新手礼包",
                        "titlegame": "仙道回合",
                        "cardbody": "元宝*1000、体力*100",
                        "cardtext": "点击主界面的设置按钮》点击礼包码按钮》输入礼包码",
                        "qq_qun": "",
                        "titlepic": "http://pic3.3733.com/d/file/game/2018-10-18/79a93f37b2d18bb7a35d7115a8850006.png",
                        "remain": 69,
                        "yi_ling_qu": 938,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": null
                    },
                    {
                        "id": 3742,
                        "classid": 1,
                        "title": "仙道回合独享礼包",
                        "titlegame": "仙道回合",
                        "cardbody": "元宝*2000、体力*200、铜钱*200000",
                        "cardtext": "点击主界面的设置按钮》点击礼包码按钮》输入礼包码",
                        "qq_qun": "",
                        "titlepic": "http://pic3.3733.com/d/file/game/2018-10-18/79a93f37b2d18bb7a35d7115a8850006.png",
                        "remain": 70,
                        "yi_ling_qu": 887,
                        "dl_config": 0,
                        "enable_rebate": false,
                        "down_ip": null
                    }
                ],
                "news_list": []
            }
        }
    )
});
app.post('/api/card/read', (req, res) =>{
    res.json(
        {
            "log": {
                "sql": [
                    "[ DB ] CONNECT:[ UseTime:0.013917s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_card` [ RunTime:0.003629s ]",
                    "[ SQL ] SELECT `id`,`classid`,`title`,`titlegame`,`cardbody`,`cardtext`,`renum`,`shuliang`,`qq_qun`,`starttime`,`endtime`,`titleurl` FROM `www_92game_net_d_ecms_card` WHERE  `zhuangtai` <> 3  AND `id` = 3306 LIMIT 1 [ RunTime:0.003064s ]",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.003959s ]",
                    "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (2,1,5)  AND `platform` LIKE '%IOS%'  AND `title` = '缥缈传说' LIMIT 1 [ RunTime:0.003135s ]"
                ],
                "info": [
                    "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                    "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'card',\n    2 => 'read',\n  ),\n)",
                    "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => '49b6fcdb-2e10-4b9a-b2a0-44bf244ff820',\n  'user-agent' => 'PostmanRuntime/7.6.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '62',\n  'connection' => 'keep-alive',\n)",
                    "[ PARAM ] array (\n  '/api/card/read' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '212',\n  'cardId' => '3306',\n)",
                    "[ RUN ] app\\api\\controller\\Card->read[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Card.php ]",
                    "[ DB ] INIT mysql",
                    "[ CACHE ] INIT File"
                ]
            },
            "time": 1548337650,
            "code": 1,
            "data": {
                "id": 3306,
                "classid": 20,
                "title": "缥缈传说特权礼包",
                "titlegame": "缥缈传说",
                "cardbody": "净世神兵石(中级)*10、五百万铜钱*1、扫荡券*10、经验副本门票*5",
                "cardtext": "角色达到30级在福利界面的礼包兑换领取",
                "qq_qun": "",
                "starttime": "1535601000",
                "endtime": "1567137000",
                "game": {
                    "id": 3582,
                    "classid": 1,
                    "totaldown": 8460,
                    "title": "缥缈传说",
                    "newstime": 1536026400,
                    "titlepic": "http://pic3.3733.com/d/file/game/2018-08-30/f14ab6ed64ec1999d4943eaae4278110.png",
                    "down_a": "http://xiazai.3733.com/apk/game/piaomcs.apk",
                    "version": "1.1.68.0",
                    "titleimg": "http://pic3.3733.com/d/file/game/2018-08-30/69b6d143cee4d1aa7b68b61a24b8b0d6.jpg",
                    "size_a": "194.5 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送至尊2，3888绑定元宝、铜币100万",
                    "version_code": 6,
                    "package_name": "com.bn.pmcs.sy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款玄幻修仙题材的手机RPG游戏",
                    "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c993554d5285890781820604348/v.f30.mp4",
                    "video_thumb": "http://pic3.3733.com/d/file/game/2018-09-14/dcc20a0c260303fe073abff038427254.jpg",
                    "state": 5,
                    "uc_dl": 0,
                    "app_id": 61194,
                    "app_id_i": 6604,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/pmcsios_6604/pmcsios_6604.plist"
                },
                "cardpass": null,
                "yi_ling_qu": 1258,
                "notes": "1、每个用户仅可使用一次\r\n2、本礼包仅适用于3733游戏下载的《缥缈传说》客户端！",
                "share_title": "缥缈传说特权礼包",
                "share_url": "/card/3306.html",
                "remain": 58
            }
        }
    )
})
app.post('/api/game/read', (req, res) =>{
    res.json(
        {
            "log": {
                "sql": [
                    "[ DB ] CONNECT:[ UseTime:0.004213s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.003100s ]",
                    "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup`,`titleurl`,`newstext`,`morepic`,`app_md5`,`kefu_qq`,`qq_qun`,`onclick`,`features`,`activity`,`channel_activity` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (2,1,5)  AND `platform` LIKE '%IOS%'  AND `title` = '缥缈传说' LIMIT 1 [ RunTime:0.002695s ]",
                    "[ SQL ] SHOW COLUMNS FROM `gamebox_channel` [ RunTime:0.002499s ]",
                    "[ SQL ] SELECT * FROM `gamebox_channel` WHERE  `channel_id` = 'none' LIMIT 1 [ RunTime:0.001964s ]",
                    "[ SQL ] SHOW COLUMNS FROM `gamebox_rebate_game_set` [ RunTime:0.002499s ]",
                    "[ SQL ] SELECT * FROM `gamebox_rebate_game_set` WHERE  `game_id` = 3582 LIMIT 1 [ RunTime:0.001979s ]",
                    "[ DB ] CONNECT:[ UseTime:0.004689s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=db_sdk_ios;charset=utf8",
                    "[ SQL ] SHOW COLUMNS FROM `c_game` [ RunTime:0.003038s ]",
                    "[ SQL ] SELECT `initial` FROM `c_game` WHERE  `id` = 6604 LIMIT 1 [ RunTime:0.002191s ]",
                    "[ DB ] CONNECT:[ UseTime:0.014532s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=vip3733;charset=utf8",
                    "[ SQL ] SHOW COLUMNS FROM `vip_level` [ RunTime:0.003362s ]",
                    "[ SQL ] SELECT `level_title`,`recharge` FROM `vip_level` WHERE  `status` = 1  AND `game_name` = '缥缈传说' ORDER BY `id` ASC [ RunTime:0.015934s ]",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_card` [ RunTime:0.002576s ]",
                    "[ SQL ] SELECT COUNT(*) AS tp_count FROM `www_92game_net_d_ecms_card` WHERE  `zhuangtai` <> 3  AND `titlegame` = '缥缈传说' LIMIT 1 [ RunTime:0.001797s ]",
                    "[ SQL ] SHOW COLUMNS FROM `gamebox_config` [ RunTime:0.002069s ]",
                    "[ SQL ] SELECT * FROM `gamebox_config` WHERE  `config_key` = 'qq' LIMIT 1 [ RunTime:0.001897s ]",
                    "[ SQL ] SELECT * FROM `gamebox_config` WHERE  `config_key` = 'qq_url' LIMIT 1 [ RunTime:0.001888s ]",
                    "[ SQL ] SELECT * FROM `gamebox_config` WHERE  `config_key` = 'bt_qun' LIMIT 1 [ RunTime:0.001731s ]",
                    "[ SQL ] SELECT * FROM `gamebox_config` WHERE  `config_key` = 'vip_qun' LIMIT 1 [ RunTime:0.001724s ]",
                    "[ SQL ] SELECT * FROM `gamebox_config` WHERE  `config_key` = 'gm_qun' LIMIT 1 [ RunTime:0.001774s ]",
                    "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_news` [ RunTime:0.002406s ]",
                    "[ SQL ] SELECT `id`,`classid`,`onclick`,`titleurl`,`title`,`newstime`,`titlepic`,`titlegame`,`smalltext` FROM `www_92game_net_d_ecms_news` WHERE  `state` = 1  AND (  (  `titlegame` = '缥缈传说'  AND `classid` IN (7,23,24) )  OR (  `classid` = 22  AND `cp_id` = 80 )  OR (  `classid` = 22  AND `titlegame` = '缥缈传说' ) ) ORDER BY `newstime` DESC LIMIT 0,10 [ RunTime:0.055271s ]",
                    "[ SQL ] SELECT * FROM `www_92game_net_d_ecms_card` WHERE  `zhuangtai` <> 3  AND `titlegame` = '缥缈传说'  AND `classid` = 21 ORDER BY `id` DESC LIMIT 1 [ RunTime:0.002440s ]",
                    "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `isgood` = 1 ORDER BY `newstime` DESC LIMIT 0,5 [ RunTime:0.002650s ]"
                ],
                "info": [
                    "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                    "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'game',\n    2 => 'read',\n  ),\n)",
                    "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => 'ee3595c0-6898-44d0-a2c1-6422a15637ff',\n  'user-agent' => 'PostmanRuntime/7.6.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '93',\n  'connection' => 'keep-alive',\n)",
                    "[ PARAM ] array (\n  '/api/game/read' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '212',\n  'title' => '缥缈传说',\n)",
                    "[ RUN ] app\\api\\controller\\Game->read[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Game.php ]",
                    "[ DB ] INIT mysql",
                    "[ CACHE ] INIT File",
                    "[ DB ] INIT mysql",
                    "[ DB ] INIT mysql"
                ]
            },
            "time": 1548337775,
            "code": 1,
            "data": {
                "detail": {
                    "id": 3582,
                    "classid": 1,
                    "totaldown": 8460,
                    "title": "缥缈传说",
                    "newstime": 1536026400,
                    "titlepic": "http://pic3.3733.com/d/file/game/2018-08-30/f14ab6ed64ec1999d4943eaae4278110.png",
                    "down_a": "http://xiazai.3733.com/apk/game/piaomcs.apk",
                    "version": "1.1.68.0",
                    "titleimg": "http://pic3.3733.com/d/file/game/2018-08-30/69b6d143cee4d1aa7b68b61a24b8b0d6.jpg",
                    "size_a": "194.5 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送至尊2，3888绑定元宝、铜币100万",
                    "version_code": 6,
                    "package_name": "com.bn.pmcs.sy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "1、首冲双倍!充值比例1:200，上线送3888绑定元宝、铜币100万<br/><br />2、创角即送：黄金月卡-直升至尊2，给你30天免费特权体验!<br />3、首充6元-赠送绝版红装;再冲30元-领取稀有时装<br />4、60级0元助力礼包，免费领强力橙装<br />5、投资计划可享10倍返还<br />6、升级加速，一天可达100级!<br />7、七天登录送大礼：豪华材料礼包惊喜连连!<br />————————<br />历史累计充值礼包(每个角色每个礼包限领取一次)：<br />长期有效(不可重复申请)<br />A累计充值满1000元礼包：3级攻击石1、一千万铜钱、初级法器精华*20<br />B累计充值满3000元礼包;3级保护石1、一千万铜钱、初级法器精华*40<br />C累计充值满5000元礼包：4级攻击石1、二千万铜钱、中级法器精华*20<br />D累计充值满10000元礼包：传说套装石-戒指*1、二千万铜钱、5级保护石1、中级法器精华*40<br />E累计充值满30000元礼包：完美套装石*1、四千万铜钱、6级攻击石1、高级法器精华*40<br />F累计充值满50000元礼包：完美套装石*3、四千万铜钱、7级保护石1、高级法器精华*80<br />说明：<br />1. 每个档位的礼包每个账号限领取一次<br />2. 充值满足要求可向平台申请礼包。例如小明累计充值5000元，可以领取A、B、C三挡礼包。<br />每日累充活动：<br />时间：长期有效，每日24点重置<br />单日累计充值达到200元：1.5倍经验丹*1、仙王令*1、100绑元*2<br />单日累计充值达到500元：2倍经验丹*1、仙王令*2、100绑元*3<br />单日累计充值达到1000元：净世神兵石(高级)*10、仙王令*3、坐骑经验丹40<br />单日累计充值达到2000元：净世神兵石(高级)*15、仙王令*4、坐骑经验丹60<br />单日累计充值达到3000元：净世神兵石(高级)*20、麒麟神兵石(高级)*10、仙王令*6、坐骑经验丹80<br />单日累计充值达到5000元：星曜魂石*1、麒麟神兵石(高级)*20、仙王令*10、坐骑经验丹100<br />说明：<br />1. 充值最高档位可以领取所有定档位奖励<br />2. 每个角色每日每档仅能领取一次<br />3. 活动仅限每日累计有效，次日重置统计",
                    "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c993554d5285890781820604348/v.f30.mp4",
                    "video_thumb": "http://pic3.3733.com/d/file/game/2018-09-14/dcc20a0c260303fe073abff038427254.jpg",
                    "state": 5,
                    "uc_dl": 0,
                    "app_id": 61194,
                    "app_id_i": 6604,
                    "enable_speedup": false,
                    "titleurl": "http://m.3733.com/pmcs",
                    "newstext": "《缥缈传说》是一款玄幻修仙题材，宏大架空背景的手机RPG游戏，采用流畅的即时战斗模式，让玩家可以获得大型MMORPG的游戏体验。游戏内所有人物模型全部使用3D模型完成，以美轮美奂的场景和细腻华丽的角色形象来表现游戏世界，简单的操作和游戏前期大量的新手引导，让玩家可以更快速地上手游戏操作、熟悉游戏各项功能及玩法。游戏采用东方写实仙侠风格，拥有丰富多样的角色技能和精彩刺，激的副本体系。",
                    "morepic": {
                        "small": [
                            "http://pic4.3733.com/d/file/game/2018-08-30/05bb19092410afe2a909246ae76ad63e.jpg",
                            "http://pic4.3733.com/d/file/game/2018-08-30/6408145bd7b49fd783778238814c15cf.jpg",
                            "http://pic4.3733.com/d/file/game/2018-08-30/297efe078fa9923ba5e517348702128b.jpg",
                            "http://pic4.3733.com/d/file/game/2018-08-30/2f958f8fdd654a1a4eed5482ebd11de4.jpg"
                        ],
                        "big": [
                            "http://pic4.3733.com/d/file/game/2018-08-30/05bb19092410afe2a909246ae76ad63e.jpg",
                            "http://pic4.3733.com/d/file/game/2018-08-30/6408145bd7b49fd783778238814c15cf.jpg",
                            "http://pic4.3733.com/d/file/game/2018-08-30/297efe078fa9923ba5e517348702128b.jpg",
                            "http://pic4.3733.com/d/file/game/2018-08-30/2f958f8fdd654a1a4eed5482ebd11de4.jpg"
                        ]
                    },
                    "app_md5": "7B540880C3F3E0A52736484391EAC10B",
                    "kefu_qq": "800819997",
                    "qq_qun": "759044253",
                    "activity": "返利仅限单日累计充值，每日24点清零，第二天重新计算累计：<br />单日累计充值100-500元，返还10%<br />单日累计充值501-1000元，返还30%<br />单日累计充值1001-3000元，返还50%<br />单日累计充值3001-5000元，返还80%<br />单日累计充值5001-10000元，返还100%<br />单日累计充值10000元以上，返还150%<br />1、当日累积充值达到额度即可返利!只限一日累积，不能多日累积。<br />2、达到充值返利条件的玩家请联系客服，登记领取奖励。<br />3、游戏内不送任何装备和道具!<br />PS：充值返利会在2个工作日内发放到玩家邮件内",
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/pmcsios_6604/pmcsios_6604.plist",
                    "video": {
                        "url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c993554d5285890781820604348/v.f30.mp4",
                        "thumb": "http://pic3.3733.com/d/file/game/2018-09-14/dcc20a0c260303fe073abff038427254.jpg"
                    },
                    "vip_price": [
                        {
                            "level_title": "VIP至尊3",
                            "recharge": "140元或通过每天自然增长5点经验值获得"
                        },
                        {
                            "level_title": "VIP至尊4",
                            "recharge": "250元或通过每天自然增长5点经验值获得"
                        },
                        {
                            "level_title": "VIP至尊5",
                            "recharge": "500元或通过每天自然增长5点经验值获得"
                        },
                        {
                            "level_title": "VIP至尊6",
                            "recharge": "1200元或通过每天自然增长5点经验值获得"
                        },
                        {
                            "level_title": "VIP至尊7",
                            "recharge": "2400元或通过每天自然增长5点经验值获得"
                        },
                        {
                            "level_title": "VIP至尊8",
                            "recharge": "4800元或通过每天自然增长5点经验值获得"
                        },
                        {
                            "level_title": "VIP至尊9",
                            "recharge": "9600元或通过每天自然增长5点经验值获得"
                        }
                    ],
                    "share_title": "缥缈传说",
                    "share_url": "http://m.3733.com/pmcs",
                    "favorite_num": 1692,
                    "card_count": 3,
                    "kefu_qq_url": "https://q.url.cn/abDUwo?_type=wpa&amp;qidian=true",
                    "news_groups": [
                        [
                            {
                                "id": 79201,
                                "classid": 7,
                                "onclick": 152,
                                "titleurl": "http://m.3733.com/appnews/79201.html",
                                "title": "《缥缈传说》游戏视频分享：一款玄幻修仙类手机RPG游戏",
                                "newstime": 1536543807,
                                "titlepic": "http://pic3.3733.com/d/file/video/2018-09-14/4d635d724e3ac9f16c25f08a8c4d5b49.png",
                                "titlegame": "缥缈传说",
                                "smalltext": "　　《缥缈传说》是一款玄幻修仙题材，宏大架空背景的手机RPG游戏，采用流畅的即时战斗模式，让玩家可以获得大型MMORPG的游戏体验。游戏内所有人物模型全部使用3D模型完成，以美轮美奂的场景和细腻华丽的角色形象来表现游戏世界，简单的操作和游戏前期大量的新手引导，让玩家可以更快速地上手游戏操作、熟悉游戏各项功能及玩法。游戏采用东方写实仙侠风格，拥有丰富多样的角色技能和精彩刺激的副本体系。",
                                "class_name": "视频",
                                "tag_color": "#feac24"
                            },
                            {
                                "id": 78608,
                                "classid": 23,
                                "onclick": 230,
                                "titleurl": "http://m.3733.com/appnews/78608.html",
                                "title": "《缥缈传说》新手攻略坐骑大盘点",
                                "newstime": 1536043296,
                                "titlepic": "http://pic3.3733.com//d/file/zixun/gonglue/2018-09-04/4c496c28bbee854ffee95470b28376cb.png",
                                "titlegame": "缥缈传说",
                                "smalltext": "坐骑系统是《缥缈传说》中玩家刷本跑图的强力帮手，不仅能提升玩家的移动速度，更有12阶坐骑为玩家助战。下面小编来盘点下游戏中的坐骑，一起来看看吧。",
                                "class_name": "攻略",
                                "tag_color": "#56b8ff"
                            },
                            {
                                "id": 78606,
                                "classid": 23,
                                "onclick": 173,
                                "titleurl": "http://m.3733.com/appnews/78606.html",
                                "title": "缺金币做悬赏《缥缈传说》赏金任务教学",
                                "newstime": 1536042292,
                                "titlepic": "http://pic3.3733.com//d/file/zixun/gonglue/2018-09-04/95ccfec055699cc9d128e93593336199.jpg",
                                "titlegame": "缥缈传说",
                                "smalltext": "《缥缈传说​》中玩家战力的提升需要消耗大量的金币，而玩家在完成46级主线任务后，可以开启赏金任务，玩家可以通过完成各种赏金任务来获取大量金币与经验奖励。",
                                "class_name": "攻略",
                                "tag_color": "#56b8ff"
                            }
                        ],
                        [
                            {
                                "id": 78605,
                                "classid": 23,
                                "onclick": 171,
                                "titleurl": "http://m.3733.com/appnews/78605.html",
                                "title": "缥缈传说战力如何提升_缥缈传说战力提升教学",
                                "newstime": 1536041750,
                                "titlepic": "http://pic3.3733.com//d/file/zixun/gonglue/2018-09-04/15eeb4209ffa0dd3af42298bde7a0c2e.jpg",
                                "titlegame": "缥缈传说",
                                "smalltext": "《缥缈传说》战力如何提升?缥缈传说战力提升教学?缥缈传说战力是衡量玩家实力的重要依据，游戏中的各项数值的都与战力的提升息息相关，本次小编来分享下如何提升战力。",
                                "class_name": "攻略",
                                "tag_color": "#56b8ff"
                            },
                            {
                                "id": 78604,
                                "classid": 23,
                                "onclick": 149,
                                "titleurl": "http://m.3733.com/appnews/78604.html",
                                "title": "缥缈传说如何飞升_缥缈传说飞升有什么用",
                                "newstime": 1536041030,
                                "titlepic": "http://pic3.3733.com//d/file/zixun/gonglue/2018-09-04/4067d05117393bbeb5bae3b70aaa5793.png",
                                "titlegame": "缥缈传说",
                                "smalltext": "缥缈传说如何飞升?缥缈传说飞升有什么用?飞升系统是缥缈传说​中最核心的系统，玩家角色通过收集散落在四周的神凯不断成长，解锁新的地图章节和角色技能，大幅提升角色的实力!",
                                "class_name": "攻略",
                                "tag_color": "#56b8ff"
                            },
                            {
                                "id": 78603,
                                "classid": 23,
                                "onclick": 145,
                                "titleurl": "http://m.3733.com/appnews/78603.html",
                                "title": "《缥缈传说​》离线挂机玩法教学",
                                "newstime": 1536040609,
                                "titlepic": "http://pic3.3733.com//d/file/zixun/gonglue/2018-09-04/1d8af892a9ff54d77967e790d63f2838.jpg",
                                "titlegame": "缥缈传说",
                                "smalltext": "《缥缈传说​》中为玩家们设计了全新离线挂机玩法，即使没有时间玩游戏，玩家也能够照样打怪升级拿装备，下面随小编来看看票面传说离线挂机的详细内容。",
                                "class_name": "攻略",
                                "tag_color": "#56b8ff"
                            }
                        ],
                        [
                            {
                                "id": 78602,
                                "classid": 23,
                                "onclick": 188,
                                "titleurl": "http://m.3733.com/appnews/78602.html",
                                "title": "新手必看《缥缈传说​》合成系统教学",
                                "newstime": 1536033147,
                                "titlepic": "http://pic3.3733.com//d/file/zixun/gonglue/2018-09-04/0b51d6edb3e46cc5a43e86261dbdd8c0.png",
                                "titlegame": "缥缈传说",
                                "smalltext": "合成系统是《缥缈传说​》中的特色系统，玩家可以通过合成系统来获取各种稀有的资源，强化自身的战力。",
                                "class_name": "攻略",
                                "tag_color": "#56b8ff"
                            },
                            {
                                "id": 78601,
                                "classid": 23,
                                "onclick": 175,
                                "titleurl": "http://m.3733.com/appnews/78601.html",
                                "title": "新手必备《缥缈传说》全职业介绍",
                                "newstime": 1536032536,
                                "titlepic": "http://pic3.3733.com//d/file/zixun/gonglue/2018-09-04/cb7231fb10def6a4b1a76dcadf07ae37.png",
                                "titlegame": "缥缈传说",
                                "smalltext": "《缥缈传说》游戏内总共分为3种职业，分别为刀剑师，羽翎师和魔师。每个职业都有各自的特色。下面小编来为玩家们一一介绍，帮助各位玩家选择到适合自己的职业。",
                                "class_name": "攻略",
                                "tag_color": "#56b8ff"
                            },
                            {
                                "id": 78599,
                                "classid": 23,
                                "onclick": 163,
                                "titleurl": "http://m.3733.com/appnews/78599.html",
                                "title": "缥缈传说仙盟任务怎么做_缥缈传说仙盟任务教学",
                                "newstime": 1536031985,
                                "titlepic": "http://pic3.3733.com//d/file/zixun/gonglue/2018-09-04/4abb7a57ccd73ae523d864da4dbd2d5a.jpg",
                                "titlegame": "缥缈传说",
                                "smalltext": "缥缈传说仙盟任务怎么做?缥缈传说​中仙盟任务是玩家们日常必做玩法，能够为玩家们带来丰厚的资源，下面小编来为玩家们介绍下如何完成仙盟任务。",
                                "class_name": "攻略",
                                "tag_color": "#56b8ff"
                            }
                        ]
                    ],
                    "notices": [
                        {
                            "id": 1,
                            "title": "点击加入《缥缈传说》玩家群：759044253",
                            "text_size": 14,
                            "text_color": "#ff3200",
                            "content": "点击加入《缥缈传说》玩家群：759044253",
                            "action_code": 1,
                            "action_text": "759044253"
                        }
                    ]
                },
                "liked": [
                    {
                        "id": 20001546,
                        "classid": 49,
                        "totaldown": 5539,
                        "title": "妖尾海量版",
                        "newstime": 1548306000,
                        "titlepic": "http://pic5.3733.com/icon/201901/58cfb29c68bcb3982be5147695ed7c0d.png",
                        "down_a": "http://xiazai.3733.com/apk/game/yaowhlb.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201901/4206829731825d58d1bd226ee4dc50ee.jpeg",
                        "size_a": "270.9 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "格斗"
                        ],
                        "sign": [],
                        "yxftitle": "上线送至尊VIP，钻石88888",
                        "version_code": 100,
                        "package_name": "com.sfsy.ywhlb.m3733",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:1000",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "这里是证明实力的地方，你就是下一位最强魔导士",
                        "video_url": "",
                        "video_thumb": "",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61746,
                        "app_id_i": 7148,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ywhlbios_7148/ywhlbios_7148.plist"
                    },
                    {
                        "id": 20001869,
                        "classid": 1,
                        "totaldown": 9543,
                        "title": "掌门我要后宫版",
                        "newstime": 1548302400,
                        "titlepic": "http://pic5.3733.com/icon/201901/5f58e2d4ff9a122677ba4852b208d00b.png",
                        "down_a": "http://xiazai.3733.com/apk/game/zhangmwyhlb.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201901/777d382044afe197c3533ea8e087eed3_n.jpeg",
                        "size_a": "3.3 MB",
                        "size_ip": "",
                        "type": [
                            "策略",
                            "模拟"
                        ],
                        "sign": [],
                        "yxftitle": "送V6，元宝38888、金蛇套装",
                        "version_code": 1,
                        "package_name": "com.zmwy.guandu",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "一款模拟经营类游戏",
                        "video_url": "",
                        "video_thumb": "",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61823,
                        "app_id_i": 7154,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zmwyhgbios_7154/zmwyhgbios_7154.plist"
                    },
                    {
                        "id": 20001794,
                        "classid": 1,
                        "totaldown": 4501,
                        "title": "仙剑客栈-巅峰回合",
                        "newstime": 1548298800,
                        "titlepic": "http://pic5.3733.com/icon/201901/0022f1db65f806d860ab6731e08167a0.png",
                        "down_a": "http://xiazai.3733.com/apk/game/xianjkzdfhh.apk",
                        "version": "1.0.0",
                        "titleimg": "",
                        "size_a": "219.7 MB",
                        "size_ip": "",
                        "type": [
                            "卡牌",
                            "策略"
                        ],
                        "sign": [],
                        "yxftitle": "送V8，金币188万，仙玉21888",
                        "version_code": 10000,
                        "package_name": "com.xjkz.qipa",
                        "license_md5": "24F8FDD198FAA68AC77F9E910A9698D7",
                        "app_tag": [
                            {
                                "type": 4,
                                "name": "变态版",
                                "color": "#ba69ff",
                                "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                            },
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 12,
                                "name": "1:500",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "汇集多个仙剑角色的巅峰回合制手游",
                        "video_url": "",
                        "video_thumb": "",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61813,
                        "app_id_i": 7157,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xjkz_dfhhios_7157/xjkz_dfhhios_7157.plist"
                    },
                    {
                        "id": 20001857,
                        "classid": 49,
                        "totaldown": 10731,
                        "title": "仙域争霸",
                        "newstime": 1548298200,
                        "titlepic": "http://pic5.3733.com/icon/201901/c65bff1bfef503970698183da03a8592.png",
                        "down_a": "http://xiazai.3733.com/apk/game/xianyzb.apk",
                        "version": "1.0.0",
                        "titleimg": "http://pic5.3733.com/banner/201901/81c9007f3dbb96f62603eb357e772a57_n.jpeg",
                        "size_a": "3.2 MB",
                        "size_ip": "",
                        "type": [
                            "角色",
                            "动作",
                            "即时"
                        ],
                        "sign": [],
                        "yxftitle": "送V20，88888元宝，金币88888",
                        "version_code": 1,
                        "package_name": "com.xuanyumanv.yingtao",
                        "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                        "app_tag": [
                            {
                                "type": 6,
                                "name": "返利",
                                "color": "#13cfae",
                                "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                            },
                            {
                                "type": 7,
                                "name": "满Vip版",
                                "color": "#f87e71",
                                "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                            },
                            {
                                "type": 12,
                                "name": "1:1000",
                                "color": "#feac24",
                                "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                            }
                        ],
                        "gm_url": null,
                        "smalltext": "浪漫邂逅修仙世界，正统修仙战斗为你打造",
                        "video_url": "",
                        "video_thumb": "",
                        "state": 1,
                        "uc_dl": 0,
                        "app_id": 61820,
                        "app_id_i": 7155,
                        "enable_speedup": false,
                        "dl_config": 0,
                        "enable_rebate": true,
                        "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xyzbios_7155/xyzbios_7155.plist"
                    }
                ]
            }
        }
    )
})
// 首页
app.post('/api/index/index', (req, res) => {
    return res.json(
      {
        "log": {
            "sql": [
                "[ DB ] CONNECT:[ UseTime:0.013677s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=db_sdk;charset=utf8",
                "[ SQL ] SHOW COLUMNS FROM `c_mem_login_box` [ RunTime:0.002752s ]",
                "[ SQL ] SELECT * FROM `c_mem_login_box` WHERE  `token` = '0f955a36d0b3e252e34254f79ac76026' LIMIT 1 [ RunTime:0.002456s ]",
                "[ DB ] CONNECT:[ UseTime:0.013770s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                "[ SQL ] SHOW COLUMNS FROM `gamebox_channel` [ RunTime:0.003004s ]",
                "[ SQL ] SELECT * FROM `gamebox_channel` WHERE  `channel_id` = 'none' LIMIT 1 [ RunTime:0.002748s ]",
                "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.003565s ]",
                "[ SQL ] SELECT `id`,`classid`,`title`,`titleimg`,'2.22' scale FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `firsttitle` = 3  AND `titleimg` <> '' ORDER BY `newstime` DESC LIMIT 0,5 [ RunTime:0.004808s ]",
                "[ SQL ] SHOW COLUMNS FROM `gamebox_app_action` [ RunTime:0.002961s ]",
                "[ SQL ] SELECT `text1`,`action_code`,`extra_id`,`web_url`,`icon_url`,`bg_img_url`,`bg_color`,`scale`,`style` FROM `gamebox_app_action` WHERE  `types` LIKE '%|1|%'  AND `show_i` = 1 ORDER BY `index` DESC,`id` ASC [ RunTime:0.002749s ]",
                "[ SQL ] SHOW COLUMNS FROM `xy_app_toutiao` [ RunTime:0.002894s ]",
                "[ SQL ] SELECT `id`,`title`,`subtitle`,`icon`,`url` FROM `xy_app_toutiao` WHERE  `delete_time` = 0 ORDER BY `id` DESC LIMIT 0,20 [ RunTime:0.002533s ]",
                "[ SQL ] SELECT * FROM `gamebox_channel` WHERE  `channel_id` = 'none' LIMIT 1 [ RunTime:0.002521s ]",
                "[ SQL ] SHOW COLUMNS FROM `gamebox_index_sp_item` [ RunTime:0.002879s ]",
                "[ SQL ] SELECT `res_id` FROM `gamebox_index_sp_item` WHERE  `spid` = 1 ORDER BY `index` DESC,`id` ASC LIMIT 0,1000 [ RunTime:0.002567s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000961 LIMIT 1 [ RunTime:0.002789s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000516 LIMIT 1 [ RunTime:0.002719s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20001408 LIMIT 1 [ RunTime:0.002662s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20001036 LIMIT 1 [ RunTime:0.002738s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20001141 LIMIT 1 [ RunTime:0.002735s ]",
                "[ SQL ] SELECT `res_id` FROM `gamebox_index_sp_item` WHERE  `spid` = 2 ORDER BY `index` DESC,`id` ASC LIMIT 0,1000 [ RunTime:0.002435s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 1242 LIMIT 1 [ RunTime:0.002701s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000591 LIMIT 1 [ RunTime:0.015602s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 3996 LIMIT 1 [ RunTime:0.002703s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 3529 LIMIT 1 [ RunTime:0.002874s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000445 LIMIT 1 [ RunTime:0.002825s ]",
                "[ SQL ] SELECT `res_id` FROM `gamebox_index_sp_item` WHERE  `spid` = 4 ORDER BY `index` DESC,`id` ASC LIMIT 0,1000 [ RunTime:0.002580s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000530 LIMIT 1 [ RunTime:0.002738s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 3767 LIMIT 1 [ RunTime:0.002683s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000972 LIMIT 1 [ RunTime:0.002712s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20000823 LIMIT 1 [ RunTime:0.002698s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20001113 LIMIT 1 [ RunTime:0.006763s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 4218 LIMIT 1 [ RunTime:0.002901s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49) ORDER BY `onclick` DESC LIMIT 0,20 [ RunTime:0.013822s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup`,`morepic` FROM `www_92game_net_d_ecms_app` WHERE  `state` = 2  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49) ORDER BY `newstime` DESC LIMIT 0,4 [ RunTime:0.002977s ]",
                "[ SQL ] SELECT `text1`,`action_code`,`extra_id`,`web_url`,`icon_url`,`bg_img_url`,`bg_color`,`scale`,`style` FROM `gamebox_app_action` WHERE  `types` LIKE '%|5|%' ORDER BY `id` DESC LIMIT 0,1000 [ RunTime:0.002524s ]"
            ],
            "info": [
                "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'index',\n    2 => 'index',\n  ),\n)",
                "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'user-agent' => 'postman',\n  'cache-control' => 'no-cache',\n  'postman-token' => '38ae8e03-b989-4b6e-aadd-d99d3e66fccf',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '89',\n  'connection' => 'keep-alive',\n)",
                "[ PARAM ] array (\n  '/api/index/index' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '101',\n  'token' => '0f955a36d0b3e252e34254f79ac76026',\n)",
                "[ RUN ] app\\api\\controller\\Index->index[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Index.php ]",
                "[ DB ] INIT mysql",
                "[ CACHE ] INIT File",
                "[ DB ] INIT mysql"
            ]
        },
        "time": 1547090249,
        "code": 1,
        "data": {
            "banner": [
                {
                    "id": 20000961,
                    "classid": 49,
                    "title": "大圣归来星耀版",
                    "titleimg": "http://pic5.3733.com/banner/201812/ac15140c72dd15afd83360c4dbe74910_n.jpeg",
                    "scale": "2.22",
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null
                },
                {
                    "id": 20000516,
                    "classid": 1,
                    "title": "斗破西游超爆版",
                    "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
                    "scale": "2.22",
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null
                },
                {
                    "id": 3996,
                    "classid": 49,
                    "title": "梦回仙游星耀版",
                    "titleimg": "http://pic5.3733.com/banner/201812/3c73101b51a042a90f86b58d5f6b82bf_n.jpeg",
                    "scale": "2.22",
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null
                },
                {
                    "id": 3529,
                    "classid": 49,
                    "title": "超梦西游海量版",
                    "titleimg": "http://pic5.3733.com/banner/201812/3eb872e49582a747294a907e823e98fa_n.jpeg",
                    "scale": "2.22",
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null
                },
                {
                    "id": 20000445,
                    "classid": 1,
                    "title": "校花学院",
                    "titleimg": "http://pic5.3733.com/banner/201812/833a15ff60f8b5184f2fff5e5e9ced75_n.jpeg",
                    "scale": "2.22",
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null
                }
            ],
            "tab_action": [
                {
                    "text1": "变态版",
                    "action_code": 1002,
                    "extra_id": "1",
                    "web_url": "",
                    "icon_url": "http://pic3.3733.com/d/file/box_action/2017-03-09/cb7a19329f4ef3490714c706aaef94ef.png",
                    "bg_img_url": "",
                    "bg_color": "#f5544c",
                    "scale": 3,
                    "style": 0
                },
                {
                    "text1": "满Vip版",
                    "action_code": 1002,
                    "extra_id": "49",
                    "web_url": "",
                    "icon_url": "http://pic3.3733.com/d/file/box_action/2017-05-12/87d94b645292dec474cc2ef47f0a44ac.png",
                    "bg_img_url": "",
                    "bg_color": "#2ccb7b",
                    "scale": 3,
                    "style": 0
                },
                {
                    "text1": "GM版",
                    "action_code": 1002,
                    "extra_id": "43",
                    "web_url": "",
                    "icon_url": "http://pic3.3733.com/d/file/box_action/2017-05-12/ad4432ba4109146913949e3af59f1adf.png",
                    "bg_img_url": "",
                    "bg_color": "#ba69ff",
                    "scale": 3,
                    "style": 0
                },
                {
                    "text1": "精选专题",
                    "action_code": 1008,
                    "extra_id": "",
                    "web_url": "",
                    "icon_url": "http://pic3.3733.com/d/file/box_action/2018-03-13/53e74fd74e077cf3ae67f3fa61a380b6.png",
                    "bg_img_url": "",
                    "bg_color": "#feac24",
                    "scale": 0,
                    "style": 0
                }
            ],
            "toutiao": [],
            "game_list": [
                {
                    "header_title": "精品推荐",
                    "header_color": null,
                    "view_type": 10,
                    "game_list": [
                        {
                            "id": 20000516,
                            "classid": 1,
                            "totaldown": 33417,
                            "title": "斗破西游超爆版",
                            "newstime": 1546045800,
                            "titlepic": "http://pic5.3733.com/icon/201812/c331866ced1027347f685ec9273bfce1.png",
                            "down_a": "http://xiazai.3733.com/apk/game/doupxycbb.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
                            "size_a": "268.7 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "动作",
                                "即时"
                            ],
                            "sign": [],
                            "yxftitle": "上线送VIP9、绑定元宝*28888",
                            "version_code": 1,
                            "package_name": "com.dpxy.guandu",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:200",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "装备全靠靠打,超级爆率9.8!",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0cc967355285890784176406916/LaYljc1SBRUA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201901/2addafe990d8979c6d7362a0d86c651f_n.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61613,
                            "app_id_i": 6979,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dpxycbbios_6979/dpxycbbios_6979.plist"
                        },
                        {
                            "id": 3862,
                            "classid": 1,
                            "totaldown": 15844,
                            "title": "狂爆之翼",
                            "newstime": 1544069400,
                            "titlepic": "http://pic5.3733.com/icon/201812/6eaaa35c5798cab05b7d65ddb89cfaf6.png",
                            "down_a": "http://xiazai.3733.com/apk/game/kuangbzy.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201812/e06f89b4b1bd092fabd8386ad96446fb_n.jpeg",
                            "size_a": "469.4 MB",
                            "size_ip": "",
                            "type": [
                                "角色"
                            ],
                            "sign": [],
                            "yxftitle": "送V5，钻石*10000，黑钻*10000",
                            "version_code": 100,
                            "package_name": "com.sfsy.kbzy.m3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:200",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "一款以激爽战斗为核心的3D炫战ARPG手游",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/4b2bbf6f5285890783146730509/SCnAAjckUDIA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201811/af153562a413d6f442c2d39736a36b5a.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61389,
                            "app_id_i": 7051,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/kbzy_xsdk_ios_7051/kbzy_xsdk_ios_7051.plist"
                        },
                        {
                            "id": 4121,
                            "classid": 49,
                            "totaldown": 16343,
                            "title": "真江湖至尊版",
                            "newstime": 1542945000,
                            "titlepic": "http://pic5.3733.com/icon/201812/7356b8da63ef711c2dd6c79f4170732a.png",
                            "down_a": "http://xiazai.3733.com/apk/game/zhenjhzzb.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201812/930b67b369b0370a5c2fba0acbe21cb7_n.jpeg",
                            "size_a": "382.4 MB",
                            "size_ip": "",
                            "type": [
                                "回合",
                                "卡牌"
                            ],
                            "sign": [],
                            "yxftitle": "送超V，元宝50000，铜币300W",
                            "version_code": 100,
                            "package_name": "com.sfsy.zjhcvb.m3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:1000",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "一款武侠题材的回合制RPG手游",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/e8ceec6c5285890783179120615/utPgCq8yJDgA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201811/d9315baf606111371b17935e4805eb4b_n.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61503,
                            "app_id_i": 6880,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zjhzzbios_6880/zjhzzbios_6880.plist"
                        },
                        {
                            "id": 3598,
                            "classid": 49,
                            "totaldown": 30887,
                            "title": "我要当宰相",
                            "newstime": 1539925200,
                            "titlepic": "http://pic5.3733.com/icon/201812/2753771af609f38f71597b0447bf73da.png",
                            "down_a": "http://xiazai.3733.com/apk/game/woydzx.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201812/1a581f11521cb4766b62222e85b3fcda_n.jpeg",
                            "size_a": "4.9 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "策略",
                                "休闲"
                            ],
                            "sign": [],
                            "yxftitle": "上线送满V、48888元宝、银两100W",
                            "version_code": 1,
                            "package_name": "com.wydzx",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:1000",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "一款以古代官场斗争为题材的策略经营类手机网络游戏",
                            "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/397d60c95285890781937100902/v.f30.mp4",
                            "video_thumb": "http://pic3.3733.com/d/file/cb/2018-09-21/d6a2f6c0bb829f743091e7cbb3b661ff.jpg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61225,
                            "app_id_i": 6638,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/wydzxios_6638/wydzxios_6638.plist"
                        }
                    ]
                },
                {
                    "id": 20000961,
                    "classid": 49,
                    "totaldown": 32928,
                    "title": "大圣归来星耀版",
                    "newstime": 1546047000,
                    "titlepic": "http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png",
                    "down_a": "http://xiazai.3733.com/apk/game/dasglxyb.apk",
                    "version": "4.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201812/ac15140c72dd15afd83360c4dbe74910_n.jpeg",
                    "size_a": "139.6 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "上线直接赠送加强版星耀满V",
                    "version_code": 400,
                    "package_name": "com.jianwan.dsglxy.yy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "同名动画电影改编的3D-ARPG动作手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af97fe5285890783958544771/p6ayPdBZlD0A.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/3941c167dce4c08aa71eb7ef5d4cb666.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61671,
                    "app_id_i": 7030,
                    "enable_speedup": false,
                    "scale": 2.22,
                    "header_color": "",
                    "header_tag": "首发",
                    "header_title": "精品首发",
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dsglxybios_7030/dsglxybios_7030.plist"
                },
                {
                    "id": 20000516,
                    "classid": 1,
                    "totaldown": 33417,
                    "title": "斗破西游超爆版",
                    "newstime": 1546045800,
                    "titlepic": "http://pic5.3733.com/icon/201812/c331866ced1027347f685ec9273bfce1.png",
                    "down_a": "http://xiazai.3733.com/apk/game/doupxycbb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
                    "size_a": "268.7 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "上线送VIP9、绑定元宝*28888",
                    "version_code": 1,
                    "package_name": "com.dpxy.guandu",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "装备全靠靠打,超级爆率9.8!",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0cc967355285890784176406916/LaYljc1SBRUA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/2addafe990d8979c6d7362a0d86c651f_n.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61613,
                    "app_id_i": 6979,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dpxycbbios_6979/dpxycbbios_6979.plist"
                },
                {
                    "id": 20001408,
                    "classid": 1,
                    "totaldown": 14383,
                    "title": "造梦仙游",
                    "newstime": 1546826400,
                    "titlepic": "http://pic5.3733.com/icon/201901/a6c45127e196a1917220319e772b9a91.png",
                    "down_a": "http://xiazai.3733.com/apk/game/zaomxy.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/69943d319574afcde5c7a36e5a7d5888.jpeg",
                    "size_a": "3.3 MB",
                    "size_ip": "",
                    "type": [
                        "策略"
                    ],
                    "sign": [],
                    "yxftitle": "送V8，绑元18888，银两188W",
                    "version_code": 1,
                    "package_name": "com.zmxybt.jlhd",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款放置类角色扮演移动手机游戏",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5dcf54415285890784248757946/7KyxguLcYR4A.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/e7a3226898b7f5f2ec3eccc5890b10c1.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61730,
                    "app_id_i": 7084,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zmxyios_7084/zmxyios_7084.plist"
                },
                {
                    "id": 20001036,
                    "classid": 1,
                    "totaldown": 20360,
                    "title": "紫青双剑-正版",
                    "newstime": 1546650000,
                    "titlepic": "http://pic5.3733.com/icon/201901/465c14d1c14e83490122289f486eaabb.png",
                    "down_a": "http://xiazai.3733.com/apk/game/ziqsj.apk",
                    "version": "1.0.1",
                    "titleimg": "",
                    "size_a": "297.4 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "上线送V12，38666绑元",
                    "version_code": 1,
                    "package_name": "com.jycbb.qipa",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "热门电视剧蜀山战纪改编的正版授权手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/582bd43e5285890784099466438/nGt14gEBYE8A.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/eecb6e96f5dfd64bfdbd463285966495.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61683,
                    "app_id_i": 7043,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zqsj_zbios_7043/zqsj_zbios_7043.plist"
                },
                {
                    "id": 20001141,
                    "classid": 1,
                    "totaldown": 15365,
                    "title": "梦缘江湖",
                    "newstime": 1546918200,
                    "titlepic": "http://pic5.3733.com/icon/201901/91f08e99172eaa6d327a428dffb5067b.png",
                    "down_a": "http://xiazai.3733.com/apk/game/mengyjh.apk",
                    "version": "1.0.5",
                    "titleimg": "http://pic5.3733.com/banner/201901/702651d66d47c75a8304f62d588d1a72.jpeg",
                    "size_a": "430.1 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送贵族V、绑元88888、金币2888万",
                    "version_code": 6,
                    "package_name": "com.myjh.sy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款青春武侠MMORPG手游",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61693,
                    "app_id_i": 7053,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/myjhios_7053/myjhios_7053.plist"
                },
                {
                    "id": 1242,
                    "classid": 49,
                    "totaldown": 20865,
                    "title": "寻道回合",
                    "newstime": 1545382800,
                    "titlepic": "http://pic5.3733.com/icon/201812/641fe0061c696688cf5fd9d403a4f703.png",
                    "down_a": "http://xiazai.3733.com/apk/game/xundhh.apk",
                    "version": "1.0.11.12",
                    "titleimg": "http://pic5.3733.com/banner/201812/3f9d5701256909f4e0417fe5c6c30e1b_n.jpeg",
                    "size_a": "317.2 MB",
                    "size_ip": "",
                    "type": [
                        "回合"
                    ],
                    "sign": [],
                    "yxftitle": "上线送300万银币，送10元代金券，送70级装备",
                    "version_code": 23,
                    "package_name": "com.jiayou.xundao.yueyou",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "游戏以交友为主题，快来寻找你的红颜",
                    "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c041052c9031868223502577577/v.f30.mp4",
                    "video_thumb": "http://pic3.3733.com/d/file/cb/2017-11-08/f8946af0329995b2ed947302e4779252.jpg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 60480,
                    "app_id_i": 7063,
                    "enable_speedup": false,
                    "thumb": "http://pic5.3733.com/banner/201812/3f9d5701256909f4e0417fe5c6c30e1b_n.jpeg",
                    "scale": 2.22,
                    "header_color": "",
                    "header_tag": "热门",
                    "header_title": "本周热门推荐",
                    "dl_config": 0,
                    "enable_rebate": false,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xdhh_xsdk_ios_7063/xdhh_xsdk_ios_7063.plist"
                },
                {
                    "id": 20000591,
                    "classid": 49,
                    "totaldown": 31966,
                    "title": "传奇归来",
                    "newstime": 1544767200,
                    "titlepic": "http://pic5.3733.com/icon/201812/ed20807c0a431fe36962afe4484546e3.png",
                    "down_a": "http://xiazai.3733.com/apk/game/chuanqgl.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201812/1f56b2f8a048af7c2eef2eced7129d03.jpeg",
                    "size_a": "3.4 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "送V15、元宝58888、铜币200万",
                    "version_code": 1,
                    "package_name": "com.qn.cqgl.sy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "竖版合击版传奇游戏",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/25fe537d5285890783696396415/XVtPaEbrPjUA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/d6445419fad56e901843a01a1121ee8b.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61610,
                    "app_id_i": 7072,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/cqgl_xsdk_ios_7072/cqgl_xsdk_ios_7072.plist"
                },
                {
                    "id": 3996,
                    "classid": 49,
                    "totaldown": 32376,
                    "title": "梦回仙游星耀版",
                    "newstime": 1546045200,
                    "titlepic": "http://pic5.3733.com/icon/201812/ff6f5962f2a5536f1292fff3e8a8445d.png",
                    "down_a": "http://xiazai.3733.com/apk/game/menghxyxyb.apk",
                    "version": "1.0.1",
                    "titleimg": "http://pic5.3733.com/banner/201812/3c73101b51a042a90f86b58d5f6b82bf_n.jpeg",
                    "size_a": "358.7 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "回合"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，绑定元宝*20000，铜币*500W",
                    "version_code": 101,
                    "package_name": "com.sfsy.ttdzf.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "2018年精美3D回合制手游力作",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/fa38b00a5285890783111289521/ZMWN1w24RjgA.mp4",
                    "video_thumb": "http://pic3.3733.com/d/file/cb/2018-11-19/6d0307e13b8b1e7663c9147a9ee4769e.jpg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61431,
                    "app_id_i": 6836,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhxyxybios_6836/mhxyxybios_6836.plist"
                },
                {
                    "id": 3529,
                    "classid": 49,
                    "totaldown": 28377,
                    "title": "超梦西游海量版",
                    "newstime": 1546044600,
                    "titlepic": "http://pic5.3733.com/icon/201901/11ab9518ca1cede650a7023a430bd86f.png",
                    "down_a": "http://xiazai.3733.com/apk/game/chaomxywxb.apk",
                    "version": "1.1.7",
                    "titleimg": "http://pic5.3733.com/banner/201812/3eb872e49582a747294a907e823e98fa_n.jpeg",
                    "size_a": "386.5 MB",
                    "size_ip": "",
                    "type": [
                        "回合"
                    ],
                    "sign": [],
                    "yxftitle": "上线送贵族20专属特权，18888元宝",
                    "version_code": 10107,
                    "package_name": "com.gzbq.cmwx.cgamex.zhuayou",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "经典回合制手游，海量资源，开局一直鲲进化全靠吞",
                    "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/bb8571085285890781260476203/v.f30.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201811/c8f48adc3106f4c3e04d7564c3fcb3be.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61101,
                    "app_id_i": 7046,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/cmxyhlb_xsdk_ios_704/cmxyhlb_xsdk_ios_704.plist"
                },
                {
                    "id": 20000445,
                    "classid": 1,
                    "totaldown": 31381,
                    "title": "校花学院",
                    "newstime": 1545386400,
                    "titlepic": "http://pic5.3733.com/icon/201812/b96aa3cedb565dc09f74a6c3c74ff757.png",
                    "down_a": "http://xiazai.3733.com/apk/game/xiaohmgc.apk",
                    "version": "2.0.2.4",
                    "titleimg": "http://pic5.3733.com/banner/201812/833a15ff60f8b5184f2fff5e5e9ced75_n.jpeg",
                    "size_a": "324 MB",
                    "size_ip": "",
                    "type": [
                        "回合",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送V10，金币88万，钻石18888",
                    "version_code": 11,
                    "package_name": "com.jianwan.xhdtsgs.yy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "起点金牌作家鱼人二代正式授权，唯一正版校花青春手游大作",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/2a969d3d5285890783696586810/V7qja8AR1AIA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/732207418944e53b291974699f1d8e77_n.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61461,
                    "app_id_i": 7059,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xhmgc_jsdk_ios_7059/xhmgc_jsdk_ios_7059.plist"
                },
                {
                    "header_title": "新游预约",
                    "header_color": null,
                    "view_type": 12,
                    "game_list": [
                        {
                            "id": 20001464,
                            "classid": 1,
                            "totaldown": 0,
                            "title": "我叫MT天天冒险",
                            "newstime": 1547258422,
                            "titlepic": "http://pic5.3733.com/icon/201901/84f3e874dbcccaa4801d98a19e623fc2.png",
                            "down_a": "",
                            "version": "",
                            "titleimg": "",
                            "size_a": 0,
                            "size_ip": "",
                            "type": [
                                "卡牌",
                                "策略"
                            ],
                            "sign": [],
                            "yxftitle": "上线送符石18888、铜币888W",
                            "version_code": 0,
                            "package_name": "adfafafzzz",
                            "license_md5": "",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:500",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "一款MT正版授权的冒险卡牌类手游大作",
                            "video_url": "",
                            "video_thumb": "",
                            "state": 2,
                            "uc_dl": 0,
                            "app_id": 61736,
                            "app_id_i": 0,
                            "enable_speedup": false,
                            "morepic": {
                                "small": [
                                    "http://pic5.3733.com/screenshots/201901/ac5e4204ffe8be4afe55edd43eb110db_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/38a7806537db0f28c274aabcd079a9f7_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/25949ed6bbd9fbba90ce60d62b619f8a_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/eb8bbf5a0528c4c1b580fc8d9944265a_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/ac3bfeb7c46ef14dbbaf0cfc8e17fd67_n.jpeg"
                                ],
                                "big": [
                                    "http://pic5.3733.com/screenshots/201901/ac5e4204ffe8be4afe55edd43eb110db_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/38a7806537db0f28c274aabcd079a9f7_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/25949ed6bbd9fbba90ce60d62b619f8a_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/eb8bbf5a0528c4c1b580fc8d9944265a_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/ac3bfeb7c46ef14dbbaf0cfc8e17fd67_n.jpeg"
                                ]
                            },
                            "subscribed": 0,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": null,
                            "subscribe_num": 960,
                            "start_time": 1547258406
                        },
                        {
                            "id": 3667,
                            "classid": 1,
                            "totaldown": 0,
                            "title": "风云之雄霸天下",
                            "newstime": 1547258408,
                            "titlepic": "http://pic3.3733.com/d/file/zixun/dongtai/2018-09-21/c0879e59c65f9d746fce17859ea2bd63.png",
                            "down_a": "",
                            "version": "",
                            "titleimg": "",
                            "size_a": 0,
                            "size_ip": "",
                            "type": [
                                "角色",
                                "动作"
                            ],
                            "sign": [],
                            "yxftitle": "上线送V12，36888绑元",
                            "version_code": 0,
                            "package_name": "89+67467878",
                            "license_md5": "",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:300",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "斥资3亿的仙侠巨作MMOARPG手游",
                            "video_url": "",
                            "video_thumb": "",
                            "state": 2,
                            "uc_dl": 0,
                            "app_id": 61275,
                            "app_id_i": 6689,
                            "enable_speedup": false,
                            "morepic": {
                                "small": [
                                    "http://pic4.3733.com/d/file/game/2018-10-26/a4005bf3cd90633527b1599419214563.jpg",
                                    "http://pic4.3733.com/d/file/game/2018-10-26/e6bb6d67cd934f74c4065cd519575ea8.jpg",
                                    "http://pic4.3733.com/d/file/game/2018-10-26/cdd023517e874ac1771e553191257e2f.jpg",
                                    "http://pic4.3733.com/d/file/game/2018-10-26/34aa09fe6e33225ee40cd609aa46b976.jpg",
                                    "http://pic4.3733.com/d/file/game/2018-10-26/32209d45f5a454ce0f9b2f6e5e3f2f22.jpg"
                                ],
                                "big": [
                                    "http://pic4.3733.com/d/file/game/2018-10-26/a4005bf3cd90633527b1599419214563.jpg",
                                    "http://pic4.3733.com/d/file/game/2018-10-26/e6bb6d67cd934f74c4065cd519575ea8.jpg",
                                    "http://pic4.3733.com/d/file/game/2018-10-26/cdd023517e874ac1771e553191257e2f.jpg",
                                    "http://pic4.3733.com/d/file/game/2018-10-26/34aa09fe6e33225ee40cd609aa46b976.jpg",
                                    "http://pic4.3733.com/d/file/game/2018-10-26/32209d45f5a454ce0f9b2f6e5e3f2f22.jpg"
                                ]
                            },
                            "subscribed": 0,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": null,
                            "subscribe_num": 11552,
                            "start_time": 1547258435
                        },
                        {
                            "id": 20001472,
                            "classid": 1,
                            "totaldown": 0,
                            "title": "龙城传奇",
                            "newstime": 1547170244,
                            "titlepic": "http://pic5.3733.com/icon/201901/4f7ad72974f1fbb1496160ae370de754.png",
                            "down_a": "",
                            "version": "",
                            "titleimg": "http://pic5.3733.com/banner/201901/3342fabbf04fd0ff2bf642059bf6c685.jpeg",
                            "size_a": 0,
                            "size_ip": "",
                            "type": [
                                "角色",
                                "动作"
                            ],
                            "sign": [],
                            "yxftitle": "送V10，绑元88888，绑金888W",
                            "version_code": 0,
                            "package_name": "zz",
                            "license_md5": "",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:500",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "再现当年沙巴克攻城盛世",
                            "video_url": "",
                            "video_thumb": "",
                            "state": 2,
                            "uc_dl": 0,
                            "app_id": 61737,
                            "app_id_i": 7094,
                            "enable_speedup": false,
                            "morepic": {
                                "small": [
                                    "http://pic5.3733.com/screenshots/201901/bdea3035aa12ce29e9b0a47909ccafa1.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/c84a8c7546af92fcca5576eff6e76d0e.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/3810ca8a7f7fbeb5662ac882faaeebb8.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/7ff11e0c4890d0284bb3030559b0b099.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/5270f79e42380a1ac983ba78651cf197.jpeg"
                                ],
                                "big": [
                                    "http://pic5.3733.com/screenshots/201901/bdea3035aa12ce29e9b0a47909ccafa1.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/c84a8c7546af92fcca5576eff6e76d0e.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/3810ca8a7f7fbeb5662ac882faaeebb8.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/7ff11e0c4890d0284bb3030559b0b099.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/5270f79e42380a1ac983ba78651cf197.jpeg"
                                ]
                            },
                            "subscribed": 0,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": null,
                            "subscribe_num": 741,
                            "start_time": 0
                        },
                        {
                            "id": 20000205,
                            "classid": 1,
                            "totaldown": 0,
                            "title": "冲鸭！皮卡丘",
                            "newstime": 1547023232,
                            "titlepic": "http://pic5.3733.com/icon/201901/c064b30cee28636fec69f188f46cba10.png",
                            "down_a": "",
                            "version": "",
                            "titleimg": "http://pic5.3733.com/banner/201901/bfcdf5cb78e27a73e08ec25a7edcc42d_n.jpeg",
                            "size_a": 0,
                            "size_ip": "",
                            "type": [
                                "卡牌",
                                "策略"
                            ],
                            "sign": [],
                            "yxftitle": "送V5，8888钻石，188万金币",
                            "version_code": 0,
                            "package_name": "dafafhaf",
                            "license_md5": "",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:200",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "在原口袋妖怪的基础上，加入全新的功能与其它新的玩法",
                            "video_url": "",
                            "video_thumb": "",
                            "state": 2,
                            "uc_dl": 0,
                            "app_id": 61574,
                            "app_id_i": 6943,
                            "enable_speedup": false,
                            "morepic": {
                                "small": [
                                    "http://pic5.3733.com/screenshots/201901/fcf6e3f4280e6b20a6bb6f0f1b4db92e.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/9cb6176443dece6f67bac0d778a75717_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/4fc65f56120c8d0b62b6536bf13d3209.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/e034b41d987c9b3f6a10e63ff659b0e2.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/52669cdf9df09fbd3a5083ef09e6159d.jpeg"
                                ],
                                "big": [
                                    "http://pic5.3733.com/screenshots/201901/fcf6e3f4280e6b20a6bb6f0f1b4db92e.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/9cb6176443dece6f67bac0d778a75717_n.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/4fc65f56120c8d0b62b6536bf13d3209.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/e034b41d987c9b3f6a10e63ff659b0e2.jpeg",
                                    "http://pic5.3733.com/screenshots/201901/52669cdf9df09fbd3a5083ef09e6159d.jpeg"
                                ]
                            },
                            "subscribed": 0,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": null,
                            "subscribe_num": 276,
                            "start_time": 0
                        }
                    ]
                },
                {
                    "id": 20000530,
                    "classid": 1,
                    "totaldown": 28855,
                    "title": "山海异闻录",
                    "newstime": 1545379200,
                    "titlepic": "http://pic5.3733.com/icon/201901/1f4113da0cfe0f21f657eaa90519ae5d.png",
                    "down_a": "http://xiazai.3733.com/apk/game/shanhywl.apk",
                    "version": "1.2.1",
                    "titleimg": "http://pic5.3733.com/banner/201812/308869539a30fbf3c982fc6dcede4aa9.jpeg",
                    "size_a": "326.1 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "回合"
                    ],
                    "sign": [],
                    "yxftitle": "送V7，极品妖兽，魂玉18888，铜币188w",
                    "version_code": 2,
                    "package_name": "com.gaea.shanhai.yixu",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "3D国韵奇遇式手游《山海异闻录》删档测试正式开启",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/a926cb515285890783548143624/IWAe4hX621QA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/7a2c937f5edc3c0d13ef0797c54f1b75.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61616,
                    "app_id_i": 7057,
                    "enable_speedup": false,
                    "thumb": "http://pic5.3733.com/banner/201812/308869539a30fbf3c982fc6dcede4aa9.jpeg",
                    "scale": 2.22,
                    "header_color": "",
                    "header_tag": "新游",
                    "header_title": "优秀新游戏",
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/shywl_xsdk_ios_7057/shywl_xsdk_ios_7057.plist"
                },
                {
                    "id": 3767,
                    "classid": 49,
                    "totaldown": 26393,
                    "title": "少年三国传星耀版",
                    "newstime": 1539918000,
                    "titlepic": "http://pic5.3733.com/icon/201812/4d9d6cab0e1e04951f646c32ef9c35d5.png",
                    "down_a": "http://xiazai.3733.com/apk/game/shaonsgzxyb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201812/b572bfd82d918bced65bc84be6464ce4_n.jpeg",
                    "size_a": "233.4 MB",
                    "size_ip": "",
                    "type": [
                        "回合",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送V19，30000魂玉，300W银两",
                    "version_code": 100,
                    "package_name": "com.sfsy.snqyzmvb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款RPG战斗卡牌游戏",
                    "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/7636d30f5285890782388503054/v.f30.mp4",
                    "video_thumb": "http://pic3.3733.com/d/file/cb/2018-10-16/3eb40a710550958214ff03b9d0e998dc.jpg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61309,
                    "app_id_i": 7068,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/snsgcxyb_xsdk_ios_70/snsgcxyb_xsdk_ios_70.plist"
                },
                {
                    "id": 20000972,
                    "classid": 49,
                    "totaldown": 27394,
                    "title": "梦回千秋",
                    "newstime": 1546570800,
                    "titlepic": "http://pic5.3733.com/icon/201901/c90f8adccae58243241d5b1e1fa6191e.png",
                    "down_a": "http://xiazai.3733.com/apk/game/menghqq.apk",
                    "version": "2.4.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/101265b7525947d82507828f5e470b77_n.jpeg",
                    "size_a": "385 MB",
                    "size_ip": "",
                    "type": [
                        "回合",
                        "卡牌",
                        "策略"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，钻石40888，金币1288万",
                    "version_code": 1,
                    "package_name": "com.cgbt.a.mhqq.cgamex.zhuayou",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "多元化的交互玩法，攻城略地，抢夺他人资源",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0d5b267d5285890784176488239/JV0nQp0IbccA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/314c3f7843b1b5968cfea56386644893.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61673,
                    "app_id_i": 7033,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhqqios_7033/mhqqios_7033.plist"
                },
                {
                    "id": 20000823,
                    "classid": 49,
                    "totaldown": 29432,
                    "title": "暗黑血缘疯狂版",
                    "newstime": 1546048200,
                    "titlepic": "http://pic5.3733.com/icon/201812/342df1399f0dae38a072846b41f79161.png",
                    "down_a": "http://xiazai.3733.com/apk/game/anhxyfkb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201812/dff73454dc24ec938e4cd4cb67af2e01.jpeg",
                    "size_a": "310.8 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "送至尊V，钻石60000，金币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.slws999b.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "幻想题材的RPG动作手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af92db5285890783958544606/VDutOXIL1HUA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/9d78c1765c3d0853bf8b226112a64722.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61654,
                    "app_id_i": 7065,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ahxyfkbios_7065/ahxyfkbios_7065.plist"
                },
                {
                    "id": 4218,
                    "classid": 49,
                    "totaldown": 25342,
                    "title": "恶人传奇豪华版",
                    "newstime": 1543197600,
                    "titlepic": "http://pic5.3733.com/icon/201812/cf2a081601701d487f7bf32331e50988.png",
                    "down_a": "http://xiazai.3733.com/apk/game/ercqhhb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201811/e53456a522cf2271e65a4d3b0f918c7d_n.jpeg",
                    "size_a": "130 MB",
                    "size_ip": "",
                    "type": [
                        "角色"
                    ],
                    "sign": [],
                    "yxftitle": "上线送VIP11，绑元*30000",
                    "version_code": 18111900,
                    "package_name": "com.erqcmvb.jlhd",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:300",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "以传奇为题材的角色扮演类手机网络游戏",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/9d81a5145285890783368366116/0pQiRTnjcncA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/66ee2dfff140b25f30e0c65ddf38c056.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61523,
                    "app_id_i": 7060,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ercqhhb_xsdk_ios_706/ercqhhb_xsdk_ios_706.plist"
                }
            ],
            "interstitial": null
        }
    });
  });
  // 开服
  app.post('/api/server/index', (req, res) => {
    if(req.body.gameId === '20001549') {
      return res.json({
        "log": {
            "sql": [
                "[ DB ] CONNECT:[ UseTime:0.014876s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_time` [ RunTime:0.004005s ]",
                "[ SQL ] SELECT `a`.`id`,`a`.`state`,`a`.`newstime`,`b`.`title` FROM `www_92game_net_d_ecms_time` `a` INNER JOIN `xiaoyu3733db`.`www_92game_net_d_ecms_app` `b` ON `a`.`title`=`b`.`title` WHERE  `b`.`state` IN (2,1,5)  AND `b`.`platform` LIKE '%安卓%'  AND `b`.`classid` IN (1,49)  AND `b`.`id` = '20001549'  AND `a`.`newstime` <= 1548172800 ORDER BY `a`.`newstime` DESC LIMIT 0,2 [ RunTime:0.003297s ]",
                "[ SQL ] SELECT `a`.`id`,`a`.`state`,`a`.`newstime`,`b`.`title` FROM `www_92game_net_d_ecms_time` `a` INNER JOIN `xiaoyu3733db`.`www_92game_net_d_ecms_app` `b` ON `a`.`title`=`b`.`title` WHERE  `b`.`state` IN (2,1,5)  AND `b`.`platform` LIKE '%安卓%'  AND `b`.`classid` IN (1,49)  AND `b`.`id` = '20001549'  AND `a`.`newstime` > 1548172800 ORDER BY `a`.`newstime` ASC LIMIT 0,20 [ RunTime:0.003192s ]"
            ],
            "info": [
                "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'server',\n    2 => 'index',\n  ),\n)",
                "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => '90555296-fcfb-457c-a961-396b26647009',\n  'user-agent' => 'PostmanRuntime/7.4.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '66',\n  'connection' => 'keep-alive',\n)",
                "[ PARAM ] array (\n  '/api/server/index' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '777',\n  'gameId' => '20001549',\n)",
                "[ RUN ] app\\api\\controller\\Server->index[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Server.php ]",
                "[ DB ] INIT mysql",
                "[ CACHE ] INIT File"
            ]
        },
        "time": 1548224821,
        "code": 1,
        "data": [
            {
                "id": 120721,
                "state": "御姐3区",
                "newstime": 1548068400,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": -156421,
                "is_today": false
            },
            {
                "id": 120722,
                "state": "御姐4区",
                "newstime": 1548122400,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": -102421,
                "is_today": false
            },
            {
                "id": 120723,
                "state": "御姐5区",
                "newstime": 1548208800,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": -16021,
                "is_today": true
            },
            {
                "id": 120724,
                "state": "御姐6区",
                "newstime": 1548295200,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 70379,
                "is_today": false
            },
            {
                "id": 120725,
                "state": "御姐7区",
                "newstime": 1548381600,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 156779,
                "is_today": false
            },
            {
                "id": 120726,
                "state": "御姐8区",
                "newstime": 1548468000,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 243179,
                "is_today": false
            },
            {
                "id": 120727,
                "state": "御姐9区",
                "newstime": 1548554400,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 329579,
                "is_today": false
            },
            {
                "id": 120728,
                "state": "御姐10区",
                "newstime": 1548640800,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 415979,
                "is_today": false
            },
            {
                "id": 120729,
                "state": "御姐11区",
                "newstime": 1548727200,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 502379,
                "is_today": false
            },
            {
                "id": 120730,
                "state": "御姐12区",
                "newstime": 1548813600,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 588779,
                "is_today": false
            },
            {
                "id": 120731,
                "state": "御姐13区",
                "newstime": 1548900000,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 675179,
                "is_today": false
            },
            {
                "id": 120732,
                "state": "御姐14区",
                "newstime": 1548986400,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 761579,
                "is_today": false
            },
            {
                "id": 120733,
                "state": "御姐15区",
                "newstime": 1549072800,
                "title": "御姐无双商城版",
                "game": {
                    "id": 20001549,
                    "classid": 49,
                    "totaldown": 17217,
                    "title": "御姐无双商城版",
                    "newstime": 1548043200,
                    "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
                    "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
                    "size_a": "185 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，元宝50000，银币500W",
                    "version_code": 100,
                    "package_name": "com.sfsy.nzsgzgmb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 11,
                            "name": "全局加速",
                            "color": "#2ccb7b",
                            "icon": "http://pic5.3733.com/icon/201805/4190abdd130d35e21e1e989ecda77084.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款在三国时代背景下，全员转性题材的游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61748,
                    "app_id_i": 7102,
                    "enable_speedup": true,
                    "dl_config": 0,
                    "enable_rebate": false
                },
                "countdown_second": 847979,
                "is_today": false
            }
        ]
    })
    } else {
      return res.json(
        {
          "log": {
              "sql": [
                  "[ DB ] CONNECT:[ UseTime:0.013321s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                  "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_time` [ RunTime:0.002568s ]",
                  "[ SQL ] SELECT `a`.`id`,`a`.`state`,`a`.`newstime`,`b`.`title` FROM `www_92game_net_d_ecms_time` `a` INNER JOIN `xiaoyu3733db`.`www_92game_net_d_ecms_app` `b` ON `a`.`title`=`b`.`title` WHERE  `b`.`state` IN (2,1,5)  AND `b`.`platform` LIKE '%IOS%'  AND `b`.`classid` IN (1,49)  AND `b`.`id` = '3185'  AND `a`.`newstime` <= 1547049600 ORDER BY `a`.`newstime` DESC LIMIT 0,2 [ RunTime:0.002089s ]",
                  "[ SQL ] SELECT `a`.`id`,`a`.`state`,`a`.`newstime`,`b`.`title` FROM `www_92game_net_d_ecms_time` `a` INNER JOIN `xiaoyu3733db`.`www_92game_net_d_ecms_app` `b` ON `a`.`title`=`b`.`title` WHERE  `b`.`state` IN (2,1,5)  AND `b`.`platform` LIKE '%IOS%'  AND `b`.`classid` IN (1,49)  AND `b`.`id` = '3185'  AND `a`.`newstime` > 1547049600 ORDER BY `a`.`newstime` ASC LIMIT 0,20 [ RunTime:0.001980s ]"
              ],
              "info": [
                  "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                  "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'server',\n    2 => 'index',\n  ),\n)",
                  "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => '34461148-9d5e-4987-9055-6086fe5e3bf0',\n  'user-agent' => 'PostmanRuntime/7.4.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '62',\n  'connection' => 'keep-alive',\n)",
                  "[ PARAM ] array (\n  '/api/server/index' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '101',\n  'gameId' => '3185',\n)",
                  "[ RUN ] app\\api\\controller\\Server->index[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Server.php ]",
                  "[ DB ] INIT mysql",
                  "[ CACHE ] INIT File"
              ]
          },
          "time": 1547115239,
          "code": 1,
          "data": [
              {
                  "id": 52842,
                  "state": "42区",
                  "newstime": 1530241200,
                  "title": "梦幻龙域",
                  "game": {
                      "id": 3185,
                      "classid": 1,
                      "totaldown": 9418,
                      "title": "梦幻龙域",
                      "newstime": 1526522400,
                      "titlepic": "http://pic3.3733.com/d/file/game/2018-05-16/8be585ffbc871a8d1656552cdff6a19f.png",
                      "down_a": "http://xiazai.3733.com/apk/game/menghly.apk",
                      "version": "1.0.6",
                      "titleimg": "http://pic3.3733.com/d/file/game/2018-05-16/cef1e1f11afba9498e9a42f579308488.jpg",
                      "size_a": "369 MB",
                      "size_ip": "",
                      "type": [
                          "角色",
                          "动作"
                      ],
                      "sign": [],
                      "yxftitle": "上线送VIP12，500w金币，36888钻石",
                      "version_code": 600,
                      "package_name": "com.jiayou.mhly",
                      "license_md5": "24F8FDD198FAA68AC77F9E910A9698D7",
                      "app_tag": [
                          {
                              "type": 4,
                              "name": "变态版",
                              "color": "#ba69ff",
                              "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                          },
                          {
                              "type": 6,
                              "name": "返利",
                              "color": "#13cfae",
                              "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                          },
                          {
                              "type": 12,
                              "name": "1:300",
                              "color": "#feac24",
                              "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                          }
                      ],
                      "gm_url": null,
                      "smalltext": "《梦幻龙域》带你进入一场光明世界的次时代战役中。",
                      "video_url": "",
                      "video_thumb": "",
                      "state": 1,
                      "uc_dl": 0,
                      "app_id": 60861,
                      "app_id_i": 6334,
                      "enable_speedup": false,
                      "dl_config": 0,
                      "enable_rebate": true,
                      "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhlyios_6334/mhlyios_6334.plist"
                  },
                  "countdown_second": -16874039,
                  "is_today": false
              },
              {
                  "id": 52843,
                  "state": "43区",
                  "newstime": 1530414000,
                  "title": "梦幻龙域",
                  "game": {
                      "id": 3185,
                      "classid": 1,
                      "totaldown": 9418,
                      "title": "梦幻龙域",
                      "newstime": 1526522400,
                      "titlepic": "http://pic3.3733.com/d/file/game/2018-05-16/8be585ffbc871a8d1656552cdff6a19f.png",
                      "down_a": "http://xiazai.3733.com/apk/game/menghly.apk",
                      "version": "1.0.6",
                      "titleimg": "http://pic3.3733.com/d/file/game/2018-05-16/cef1e1f11afba9498e9a42f579308488.jpg",
                      "size_a": "369 MB",
                      "size_ip": "",
                      "type": [
                          "角色",
                          "动作"
                      ],
                      "sign": [],
                      "yxftitle": "上线送VIP12，500w金币，36888钻石",
                      "version_code": 600,
                      "package_name": "com.jiayou.mhly",
                      "license_md5": "24F8FDD198FAA68AC77F9E910A9698D7",
                      "app_tag": [
                          {
                              "type": 4,
                              "name": "变态版",
                              "color": "#ba69ff",
                              "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                          },
                          {
                              "type": 6,
                              "name": "返利",
                              "color": "#13cfae",
                              "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                          },
                          {
                              "type": 12,
                              "name": "1:300",
                              "color": "#feac24",
                              "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                          }
                      ],
                      "gm_url": null,
                      "smalltext": "《梦幻龙域》带你进入一场光明世界的次时代战役中。",
                      "video_url": "",
                      "video_thumb": "",
                      "state": 1,
                      "uc_dl": 0,
                      "app_id": 60861,
                      "app_id_i": 6334,
                      "enable_speedup": false,
                      "dl_config": 0,
                      "enable_rebate": true,
                      "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhlyios_6334/mhlyios_6334.plist"
                  },
                  "countdown_second": -16701239,
                  "is_today": false
              }
          ]
      }) 
    }
  });
  // 新游
  app.post('/api/game/newList', (req, res) => {
    return res.json(
      {
        "log": {
            "info": [
                "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'game',\n    2 => 'newList',\n  ),\n)",
                "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => 'cc23b9a5-4720-4bc0-a142-b7368e52c28e',\n  'user-agent' => 'PostmanRuntime/7.4.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '50',\n  'connection' => 'keep-alive',\n)",
                "[ PARAM ] array (\n  '/api/game/newList' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '101',\n)",
                "[ RUN ] app\\api\\controller\\Game->newList[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Game.php ]",
                "[ CACHE ] INIT File",
                "[ DB ] INIT mysql"
            ]
        },
        "time": 1547451502,
        "code": 1,
        "data": {
            "top_list": [
                {
                    "id": 20000516,
                    "classid": 1,
                    "totaldown": 33269,
                    "title": "斗破西游超爆版",
                    "newstime": 1546916400,
                    "titlepic": "http://pic5.3733.com/icon/201812/c331866ced1027347f685ec9273bfce1.png",
                    "down_a": "http://xiazai.3733.com/apk/game/doupxycbb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
                    "size_a": "268.7 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "上线送VIP9、绑定元宝*28888",
                    "version_code": 1,
                    "package_name": "com.dpxy.guandu",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "装备全靠靠打,超级爆率9.8!",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0cc967355285890784176406916/LaYljc1SBRUA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/2addafe990d8979c6d7362a0d86c651f_n.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61613,
                    "app_id_i": 6979,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dpxycbbios_6979/dpxycbbios_6979.plist"
                },
                {
                    "id": 20000445,
                    "classid": 1,
                    "totaldown": 31204,
                    "title": "校花学院",
                    "newstime": 1546909200,
                    "titlepic": "http://pic5.3733.com/icon/201812/b96aa3cedb565dc09f74a6c3c74ff757.png",
                    "down_a": "http://xiazai.3733.com/apk/game/xiaohmgc.apk",
                    "version": "2.0.2.4",
                    "titleimg": "http://pic5.3733.com/banner/201812/833a15ff60f8b5184f2fff5e5e9ced75_n.jpeg",
                    "size_a": "324 MB",
                    "size_ip": "",
                    "type": [
                        "回合",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送V10，金币88万，钻石18888",
                    "version_code": 11,
                    "package_name": "com.jianwan.xhdtsgs.yy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "起点金牌作家鱼人二代正式授权，唯一正版校花青春手游大作",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/2a969d3d5285890783696586810/V7qja8AR1AIA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/732207418944e53b291974699f1d8e77_n.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61461,
                    "app_id_i": 7059,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xhmgc_jsdk_ios_7059/xhmgc_jsdk_ios_7059.plist"
                },
                {
                    "id": 20000961,
                    "classid": 49,
                    "totaldown": 33910,
                    "title": "大圣归来星耀版",
                    "newstime": 1546920000,
                    "titlepic": "http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png",
                    "down_a": "http://xiazai.3733.com/apk/game/dasglxyb.apk",
                    "version": "4.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201812/ac15140c72dd15afd83360c4dbe74910_n.jpeg",
                    "size_a": "139.6 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "上线直接赠送加强版星耀满V",
                    "version_code": 400,
                    "package_name": "com.jianwan.dsglxy.yy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "同名动画电影改编的3D-ARPG动作手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af97fe5285890783958544771/p6ayPdBZlD0A.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/3941c167dce4c08aa71eb7ef5d4cb666.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61671,
                    "app_id_i": 7030,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dsglxybios_7030/dsglxybios_7030.plist"
                },
                {
                    "id": 20000591,
                    "classid": 49,
                    "totaldown": 34412,
                    "title": "传奇归来",
                    "newstime": 1544767200,
                    "titlepic": "http://pic5.3733.com/icon/201812/ed20807c0a431fe36962afe4484546e3.png",
                    "down_a": "http://xiazai.3733.com/apk/game/chuanqgl.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201812/1f56b2f8a048af7c2eef2eced7129d03.jpeg",
                    "size_a": "3.4 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "送V15、元宝58888、铜币200万",
                    "version_code": 1,
                    "package_name": "com.qn.cqgl.sy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "竖版合击版传奇游戏",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/25fe537d5285890783696396415/XVtPaEbrPjUA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/d6445419fad56e901843a01a1121ee8b.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61610,
                    "app_id_i": 7072,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/cqgl_xsdk_ios_7072/cqgl_xsdk_ios_7072.plist"
                }
            ],
            "top_bg_img": "http://pic5.3733.com/banner/201808/14c88d8af2baa735d419bfa8389774a8_n.jpeg",
            "today_list": [
                {
                    "id": 20001598,
                    "classid": 49,
                    "totaldown": 6602,
                    "title": "吕布戏貂蝉海量版",
                    "newstime": 1547434800,
                    "titlepic": "http://pic5.3733.com/icon/201901/17954af3ced7d0c1901cd0bd48bb5113.png",
                    "down_a": "http://xiazai.3733.com/apk/game/lvbxdchlb.apk",
                    "version": "8.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/badcb4a98c9614e9827f208ec9f5a5e3.jpeg",
                    "size_a": "211.1 MB",
                    "size_ip": "",
                    "type": [
                        "回合",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "上线送VIP15、元宝38888",
                    "version_code": 26,
                    "package_name": "com.lbxdc.cgamex.zhuayou",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "还原真三国马战布阵策略pk",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61762,
                    "app_id_i": 7104,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/lbxdchlbios_7104/lbxdchlbios_7104.plist"
                },
                {
                    "id": 20001633,
                    "classid": 49,
                    "totaldown": 3292,
                    "title": "部族之光豪华版",
                    "newstime": 1547431200,
                    "titlepic": "http://pic5.3733.com/icon/201901/5c7a0827456c232275408c41ac70e5c2.png",
                    "down_a": "http://xiazai.3733.com/apk/game/buzzghhb.apk",
                    "version": "1.0.1",
                    "titleimg": "http://pic5.3733.com/banner/201901/1649e5fa6e2b6198819325bc7813ca90_n.jpeg",
                    "size_a": "228.6 MB",
                    "size_ip": "",
                    "type": [
                        "卡牌",
                        "策略"
                    ],
                    "sign": [],
                    "yxftitle": "送v6，钻石18888，金币188888",
                    "version_code": 1,
                    "package_name": "com.bzzg.sy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "全3D魔幻题材对战手游",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61774,
                    "app_id_i": 7103,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/bzzghhbios_7103/bzzghhbios_7103.plist"
                }
            ],
            "yesterday_list": [],
            "list": [
                {
                    "id": 3667,
                    "classid": 1,
                    "totaldown": 16282,
                    "title": "风云2-正版授权",
                    "newstime": 1547262000,
                    "titlepic": "http://pic5.3733.com/icon/201901/94b03ba3d2d67b66e82b526732814e71.png",
                    "down_a": "http://xiazai.3733.com/apk/game/fengy2zbsq.apk",
                    "version": "5.0.0.3",
                    "titleimg": "http://pic5.3733.com/banner/201901/62eeef58bed919d174fd5e6ecaefbce3_n.jpeg",
                    "size_a": "235.8 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "上线送V12，36888绑元",
                    "version_code": 6,
                    "package_name": "com.fyzxbtx.qipa",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:300",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "斥资3亿的仙侠巨作MMOARPG手游",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61275,
                    "app_id_i": 6689,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/fyzxbtxios_6689/fyzxbtxios_6689.plist"
                },
                {
                    "id": 20001405,
                    "classid": 49,
                    "totaldown": 15018,
                    "title": "诸神觉醒商城版",
                    "newstime": 1547190000,
                    "titlepic": "http://pic5.3733.com/icon/201901/1cc3a0ce92daa91b66783225de34b011.png",
                    "down_a": "http://xiazai.3733.com/apk/game/zhusjxscb.apk",
                    "version": "1.0.3",
                    "titleimg": "http://pic5.3733.com/banner/201901/1659c0fdcd502b084cfab5cab57887c8.jpeg",
                    "size_a": "223 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "上线送至尊VIP，元宝88888",
                    "version_code": 3,
                    "package_name": "com.msj.cgamex.zhuayou",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款独有战灵、酷炫光翼、专属法宝的仙侠类MMORPG手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/e1d327145285890784304272975/sU3kbJclIv4A.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/39c351f0455377ea082b24471fa2fe42.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61728,
                    "app_id_i": 7101,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": false,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zsjxscbios_7101/zsjxscbios_7101.plist"
                },
                {
                    "id": 20001472,
                    "classid": 1,
                    "totaldown": 24912,
                    "title": "龙城传奇",
                    "newstime": 1547189880,
                    "titlepic": "http://pic5.3733.com/icon/201901/4f7ad72974f1fbb1496160ae370de754.png",
                    "down_a": "http://xiazai.3733.com/apk/game/longccq.apk",
                    "version": "1.1.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/3342fabbf04fd0ff2bf642059bf6c685.jpeg",
                    "size_a": "319.4 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送V10，绑元88888，绑金888W",
                    "version_code": 110,
                    "package_name": "com.lccq.quick",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "再现当年沙巴克攻城盛世",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61737,
                    "app_id_i": 7094,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/lccqios_7094/lccqios_7094.plist"
                },
                {
                    "id": 20001415,
                    "classid": 49,
                    "totaldown": 2342,
                    "title": "雪鹰领主",
                    "newstime": 1547189400,
                    "titlepic": "http://pic5.3733.com/icon/201901/a3810be363bcf463aa1f7fae046f41ad.png",
                    "down_a": "http://xiazai.3733.com/apk/game/xueylz.apk",
                    "version": "1.4",
                    "titleimg": "",
                    "size_a": "307 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送V24、66888灵玉、一百万铜币",
                    "version_code": 1,
                    "package_name": "com.tlmvb.bt.qipa",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "由中国人气经典同名小说改编而成的MMO手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/e1d5c7515285890784304277283/jjMX1u8t32QA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/5ae90e9062ea0a340ebdc37b4e76c182_n.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61731,
                    "app_id_i": 7096,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xylzios_7096/xylzios_7096.plist"
                },
                {
                    "id": 20001170,
                    "classid": 49,
                    "totaldown": 17100,
                    "title": "噬魂之戒",
                    "newstime": 1547184600,
                    "titlepic": "http://pic5.3733.com/icon/201901/bc8e39d0376d0ece46fcc60c44568e94.png",
                    "down_a": "http://xiazai.3733.com/apk/game/shihzj.apk",
                    "version": "1.5.3",
                    "titleimg": "http://pic5.3733.com/banner/201901/9fa050e238043776cb8194951af85e2a_n.jpeg",
                    "size_a": "339.4 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送V12激活卡(满V)，绑钻88888",
                    "version_code": 103,
                    "package_name": "com.dtszjysb.jlhd",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:400",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "3D热血魔幻MMORPG手游",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61695,
                    "app_id_i": 7055,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/shzjios_7055/shzjios_7055.plist"
                },
                {
                    "id": 20000205,
                    "classid": 1,
                    "totaldown": 7963,
                    "title": "冲鸭！皮卡丘",
                    "newstime": 1547184032,
                    "titlepic": "http://pic5.3733.com/icon/201901/c064b30cee28636fec69f188f46cba10.png",
                    "down_a": "http://xiazai.3733.com/apk/game/chongypkq.apk",
                    "version": "1.0.1",
                    "titleimg": "http://pic5.3733.com/banner/201901/bfcdf5cb78e27a73e08ec25a7edcc42d_n.jpeg",
                    "size_a": "166.2 MB",
                    "size_ip": "",
                    "type": [
                        "卡牌",
                        "策略"
                    ],
                    "sign": [],
                    "yxftitle": "送V5，8888钻石，188万金币",
                    "version_code": 10001,
                    "package_name": "com.yd.cypkq.sqss",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "在原口袋妖怪的基础上，加入全新的功能与其它新的玩法",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61574,
                    "app_id_i": 6943,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/cy_pkqios_6943/cy_pkqios_6943.plist"
                },
                {
                    "id": 20001351,
                    "classid": 49,
                    "totaldown": 7865,
                    "title": "武侠Q传星耀版",
                    "newstime": 1547183100,
                    "titlepic": "http://pic5.3733.com/icon/201901/57155212fb236ab042c1d8b042924f37.png",
                    "down_a": "http://xiazai.3733.com/apk/game/wuxqzxyb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/a8e0383e657a553dc7d8476ed8db05e7.jpeg",
                    "size_a": "169.2 MB",
                    "size_ip": "",
                    "type": [
                        "回合",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送V19，元宝28800，银两300W",
                    "version_code": 100,
                    "package_name": "com.sfsy.wxazmvb.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "超萌超Q的新派武侠卡牌游戏",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/e1d300e75285890784304272080/oYr4OhA4ZCAA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/acab37344408e1cd5c38ea657544b8ea_n.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61623,
                    "app_id_i": 6989,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/wxqcxybios_6989/wxqcxybios_6989.plist"
                },
                {
                    "id": 20001506,
                    "classid": 1,
                    "totaldown": 10641,
                    "title": "橙红风云",
                    "newstime": 1547178000,
                    "titlepic": "http://pic5.3733.com/icon/201901/d2ac50c1d3feb6aa982bc81748bf4627.png",
                    "down_a": "http://xiazai.3733.com/apk/game/chenghfy.apk",
                    "version": "1.0.1",
                    "titleimg": "http://pic5.3733.com/banner/201901/16865b9b68f0f6cae3c4752ffb7882a8.jpeg",
                    "size_a": "78 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "策略"
                    ],
                    "sign": [],
                    "yxftitle": "送V5、黄金18888、物资500000",
                    "version_code": 1,
                    "package_name": "com.fwkt.guandu",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款虚构的黑帮写实风格游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61740,
                    "app_id_i": 7099,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/chfyios_7099/chfyios_7099.plist"
                },
                {
                    "id": 20001572,
                    "classid": 1,
                    "totaldown": 7907,
                    "title": "别碰肉山",
                    "newstime": 1547172000,
                    "titlepic": "http://pic5.3733.com/icon/201901/1505d6283313afc5a76ea13db2a22349.png",
                    "down_a": "http://xiazai.3733.com/apk/game/bieprs.apk",
                    "version": "1.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/9b56707d5cb3a4761804b34c421560aa_n.jpeg",
                    "size_a": "85.8 MB",
                    "size_ip": "",
                    "type": [
                        "卡牌",
                        "策略"
                    ],
                    "sign": [],
                    "yxftitle": "送V10、100万钻石、100万金币",
                    "version_code": 1,
                    "package_name": "com.bprs.u3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "完全不一样体验的卡牌对战类游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61760,
                    "app_id_i": 7098,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/bprsios_7098/bprsios_7098.plist"
                },
                {
                    "id": 20001024,
                    "classid": 49,
                    "totaldown": 13965,
                    "title": "刀剑乱武豪华版",
                    "newstime": 1547089200,
                    "titlepic": "http://pic5.3733.com/icon/201812/e68a0ab54e2f228db205b8422d692e16.png",
                    "down_a": "http://xiazai.3733.com/apk/game/daojlwhhb.apk",
                    "version": "1.00.05",
                    "titleimg": "http://pic5.3733.com/banner/201901/22e8a80b02f7eaba750a9fe9782cadbc.jpeg",
                    "size_a": "144.1 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送V9、绑元50000、铜币888万",
                    "version_code": 2,
                    "package_name": "com.djlwcvb.cgamex.zhuayou",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "东方武侠题材的即时战斗类手机网络游戏",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61603,
                    "app_id_i": 6970,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/djlwios_6970/djlwios_6970.plist"
                },
                {
                    "id": 20000863,
                    "classid": 1,
                    "totaldown": 5763,
                    "title": "幻刃录",
                    "newstime": 1547087400,
                    "titlepic": "http://pic5.3733.com/icon/201901/751cbf3e9c9a2dc9ee6c85274afd60da.png",
                    "down_a": "http://xiazai.3733.com/apk/game/huanrl.apk",
                    "version": "1.3.0.4",
                    "titleimg": "http://pic5.3733.com/banner/201901/ddc88ffc1f265229c4364f3cd0ac0085_n.jpeg",
                    "size_a": "203.1 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送V5、38888钻石、100万金币",
                    "version_code": 2,
                    "package_name": "com.jiayou.hrl.yx3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "二次元日漫校园风的绚丽世界",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61657,
                    "app_id_i": 7017,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/hrlios_7017/hrlios_7017.plist"
                },
                {
                    "id": 20001451,
                    "classid": 1,
                    "totaldown": 6886,
                    "title": "暗黑纪元-黑魂觉醒",
                    "newstime": 1547085600,
                    "titlepic": "http://pic5.3733.com/icon/201901/9b93f70960a706cb47c78c6ddc08fc5d.png",
                    "down_a": "http://xiazai.3733.com/apk/game/anhjyhhjx.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/279a860a4733e5c1ad89cb51d719a04c_n.jpeg",
                    "size_a": "3.4 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "策略"
                    ],
                    "sign": [],
                    "yxftitle": "送V5，8888元宝，金币100w",
                    "version_code": 1,
                    "package_name": "com.dianyou.ahjy",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:300",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "痛痛快快，以实力照亮每个黑暗的角落",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61734,
                    "app_id_i": 7091,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ahjy_hhjxios_7091/ahjy_hhjxios_7091.plist"
                },
                {
                    "id": 20001337,
                    "classid": 49,
                    "totaldown": 16458,
                    "title": "梦幻大乱斗海量版",
                    "newstime": 1546999200,
                    "titlepic": "http://pic5.3733.com/icon/201901/51ff09f98dcf54b6401aa707ca39ae5e.png",
                    "down_a": "http://xiazai.3733.com/apk/game/menghdldhlb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/37c81e3af96a6f1c8ade76b975e14697_n.jpeg",
                    "size_a": "208.3 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "卡牌",
                        "策略"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，钻石38888， 金币388W",
                    "version_code": 10,
                    "package_name": "com.mhdld",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款全新画面的动作卡牌手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/f8e6efa35285890784298676709/uCHI66P3l9QA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/c3ffca9e45efdd27755a05aff88ef502.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61714,
                    "app_id_i": 7092,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhdldhlbios_7092/mhdldhlbios_7092.plist"
                },
                {
                    "id": 20001336,
                    "classid": 1,
                    "totaldown": 14889,
                    "title": "烈焰战神豪华版",
                    "newstime": 1546999200,
                    "titlepic": "http://pic5.3733.com/icon/201901/56e32455984d2fb811246612643693b0.png",
                    "down_a": "http://xiazai.3733.com/apk/game/lieyzshhb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/ea0bd3c7fa81e3311fd38e0188248cda.jpeg",
                    "size_a": "181.8 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送V10，绑元18888，绑金888万",
                    "version_code": 18122616,
                    "package_name": "com.lyzscbv.jlhd",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:300",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款写实风格，以传奇为题材的角色扮演类游戏",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/f8b1a5e05285890784298648149/1TNejbxE0tgA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/88e1c83cbfea22c1a549882ea8e8daf7.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61713,
                    "app_id_i": 7076,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/lyzshhbios_7076/lyzshhbios_7076.plist"
                },
                {
                    "id": 20000961,
                    "classid": 49,
                    "totaldown": 33910,
                    "title": "大圣归来星耀版",
                    "newstime": 1546920000,
                    "titlepic": "http://pic5.3733.com/icon/201812/c4736555f75bce29cb57160e44d6cbd2.png",
                    "down_a": "http://xiazai.3733.com/apk/game/dasglxyb.apk",
                    "version": "4.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201812/ac15140c72dd15afd83360c4dbe74910_n.jpeg",
                    "size_a": "139.6 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "上线直接赠送加强版星耀满V",
                    "version_code": 400,
                    "package_name": "com.jianwan.dsglxy.yy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "同名动画电影改编的3D-ARPG动作手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af97fe5285890783958544771/p6ayPdBZlD0A.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201812/3941c167dce4c08aa71eb7ef5d4cb666.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61671,
                    "app_id_i": 7030,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dsglxybios_7030/dsglxybios_7030.plist"
                },
                {
                    "id": 20001141,
                    "classid": 1,
                    "totaldown": 26942,
                    "title": "梦缘江湖",
                    "newstime": 1546918200,
                    "titlepic": "http://pic5.3733.com/icon/201901/91f08e99172eaa6d327a428dffb5067b.png",
                    "down_a": "http://xiazai.3733.com/apk/game/mengyjh.apk",
                    "version": "1.0.5",
                    "titleimg": "http://pic5.3733.com/banner/201901/702651d66d47c75a8304f62d588d1a72.jpeg",
                    "size_a": "430.1 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送贵族V、绑元88888、金币2888万",
                    "version_code": 6,
                    "package_name": "com.myjh.sy3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款青春武侠MMORPG手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/f8e76b3b5285890784298677322/bEKMOeRyUwMA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/c4cfe7d349fdfab8fa3939895b315b5c.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61693,
                    "app_id_i": 7053,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/myjhios_7053/myjhios_7053.plist"
                },
                {
                    "id": 20001403,
                    "classid": 49,
                    "totaldown": 12915,
                    "title": "口袋妖兽豪华版",
                    "newstime": 1546916400,
                    "titlepic": "http://pic5.3733.com/icon/201901/a9c5ec274739e4b5f3d3ad5723ebf63a.png",
                    "down_a": "http://xiazai.3733.com/apk/game/koudyshhb.apk",
                    "version": "1.0.1",
                    "titleimg": "http://pic5.3733.com/banner/201901/683dd982f0882955b0b8ed635229213f.jpeg",
                    "size_a": "213.9 MB",
                    "size_ip": "",
                    "type": [
                        "策略",
                        "休闲"
                    ],
                    "sign": [],
                    "yxftitle": "送V18，钻石38888，金币5000W",
                    "version_code": 2,
                    "package_name": "com.kdys.cgamex.zhuayou",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "暗黑魔兽策略动作卡牌手游",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/f8e65ef85285890784298675600/cdNLQaqin58A.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/23ad53cf6635217c7dc94f947bc688d8.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61726,
                    "app_id_i": 7088,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/kdyshhbios_7088/kdyshhbios_7088.plist"
                },
                {
                    "id": 20000516,
                    "classid": 1,
                    "totaldown": 33269,
                    "title": "斗破西游超爆版",
                    "newstime": 1546916400,
                    "titlepic": "http://pic5.3733.com/icon/201812/c331866ced1027347f685ec9273bfce1.png",
                    "down_a": "http://xiazai.3733.com/apk/game/doupxycbb.apk",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
                    "size_a": "268.7 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "上线送VIP9、绑定元宝*28888",
                    "version_code": 1,
                    "package_name": "com.dpxy.guandu",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "装备全靠靠打,超级爆率9.8!",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0cc967355285890784176406916/LaYljc1SBRUA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/2addafe990d8979c6d7362a0d86c651f_n.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61613,
                    "app_id_i": 6979,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dpxycbbios_6979/dpxycbbios_6979.plist"
                },
                {
                    "id": 20001391,
                    "classid": 1,
                    "totaldown": 5957,
                    "title": "西域英雄",
                    "newstime": 1546912800,
                    "titlepic": "http://pic5.3733.com/icon/201901/fa90d69e9f2e539274003494d9db5f0d.png",
                    "down_a": "http://xiazai.3733.com/apk/game/xiyyx.apk",
                    "version": "1.0.2.2",
                    "titleimg": "http://pic5.3733.com/banner/201901/ff8efd8566f708c9ad43d8cebe72150d_n.jpeg",
                    "size_a": "417.3 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "策略"
                    ],
                    "sign": [],
                    "yxftitle": "上线送20W银锭，100W五铢钱",
                    "version_code": 2,
                    "package_name": "com.lcfj.u3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:300",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "真正的策略游戏，用智慧和操作定江山",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/facc3b165285890784298710716/hN4PGy1oHcoA.mp4",
                    "video_thumb": "http://pic5.3733.com/snapshot/201901/6cae9459c29051999aa0246f97400819.jpeg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61722,
                    "app_id_i": 7089,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xyyxios_7089/xyyxios_7089.plist"
                },
                {
                    "id": 3996,
                    "classid": 49,
                    "totaldown": 32663,
                    "title": "梦回仙游星耀版",
                    "newstime": 1546912800,
                    "titlepic": "http://pic5.3733.com/icon/201812/ff6f5962f2a5536f1292fff3e8a8445d.png",
                    "down_a": "http://xiazai.3733.com/apk/game/menghxyxyb.apk",
                    "version": "1.0.1",
                    "titleimg": "http://pic5.3733.com/banner/201812/3c73101b51a042a90f86b58d5f6b82bf_n.jpeg",
                    "size_a": "358.7 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "回合"
                    ],
                    "sign": [],
                    "yxftitle": "送满V，绑定元宝*20000，铜币*500W",
                    "version_code": 101,
                    "package_name": "com.sfsy.ttdzf.m3733",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "2018年精美3D回合制手游力作",
                    "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/fa38b00a5285890783111289521/ZMWN1w24RjgA.mp4",
                    "video_thumb": "http://pic3.3733.com/d/file/cb/2018-11-19/6d0307e13b8b1e7663c9147a9ee4769e.jpg",
                    "state": 1,
                    "uc_dl": 0,
                    "app_id": 61431,
                    "app_id_i": 6836,
                    "enable_speedup": false,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhxyxybios_6836/mhxyxybios_6836.plist"
                }
            ],
            "subscribe_list": [
                {
                    "id": 20000504,
                    "classid": 49,
                    "totaldown": 0,
                    "title": "百妖夜行录",
                    "newstime": 1547521200,
                    "titlepic": "http://pic5.3733.com/icon/201901/6f4af18c54b159783c0df276aa1091bd.png",
                    "down_a": "",
                    "version": "1.0.0",
                    "titleimg": "http://pic5.3733.com/banner/201901/16f2dac3dd21f46b0f42f47494e6dc71.jpeg",
                    "size_a": "180.7 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作",
                        "即时"
                    ],
                    "sign": [],
                    "yxftitle": "送V8，元宝38888，金币100w",
                    "version_code": 2,
                    "package_name": "com.iceworldnet.game.cgamex.zhuayou",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "一款具有丰富古神话色彩的修仙手游",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 2,
                    "uc_dl": 0,
                    "app_id": 61611,
                    "app_id_i": 0,
                    "enable_speedup": false,
                    "morepic": {
                        "small": [
                            "http://pic5.3733.com/screenshots/201901/b585d8641fbc37af7a1caa8277b861bd.jpeg",
                            "http://pic5.3733.com/screenshots/201901/3c48cf25643aa0a8fec535c8041843d8.jpeg",
                            "http://pic5.3733.com/screenshots/201901/c0fb10853820e689e31674afbdf1db65.jpeg",
                            "http://pic5.3733.com/screenshots/201901/f9e74a8f6e2f04f5ea994dc8d9728127.jpeg",
                            "http://pic5.3733.com/screenshots/201901/2109e3ae9efdc214a0974435b81efafd.jpeg"
                        ],
                        "big": [
                            "http://pic5.3733.com/screenshots/201901/b585d8641fbc37af7a1caa8277b861bd.jpeg",
                            "http://pic5.3733.com/screenshots/201901/3c48cf25643aa0a8fec535c8041843d8.jpeg",
                            "http://pic5.3733.com/screenshots/201901/c0fb10853820e689e31674afbdf1db65.jpeg",
                            "http://pic5.3733.com/screenshots/201901/f9e74a8f6e2f04f5ea994dc8d9728127.jpeg",
                            "http://pic5.3733.com/screenshots/201901/2109e3ae9efdc214a0974435b81efafd.jpeg"
                        ]
                    },
                    "subscribed": 0,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null,
                    "subscribe_num": 2519,
                    "start_time": 0
                },
                {
                    "id": 20001448,
                    "classid": 49,
                    "totaldown": 0,
                    "title": "暗黑：神域天堂",
                    "newstime": 1547515800,
                    "titlepic": "http://pic5.3733.com/icon/201901/06bfe12859ede2f9c03387367405a7ed.png",
                    "down_a": "",
                    "version": "1.2.99",
                    "titleimg": "",
                    "size_a": "322 MB",
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送V10、88888绑钻、1888万金币",
                    "version_code": 99,
                    "package_name": "com.gn.sbd.bt.shiwan",
                    "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:400",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "经典暗黑系列再度重现，暗黑毁灭神已被GM唤醒!",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 2,
                    "uc_dl": 0,
                    "app_id": 61732,
                    "app_id_i": 0,
                    "enable_speedup": false,
                    "morepic": {
                        "small": [
                            "http://pic5.3733.com/screenshots/201901/a76d4855121e3009e8b959ddfdf2b8cd.jpeg",
                            "http://pic5.3733.com/screenshots/201901/2f68e63acda0de17a41cbf94bb69cae0.jpeg",
                            "http://pic5.3733.com/screenshots/201901/0d8a89dabe96280643134180d249c96d.jpeg",
                            "http://pic5.3733.com/screenshots/201901/e6e42a2376f71acb047c32e25b6e2a76.jpeg",
                            "http://pic5.3733.com/screenshots/201901/33acc4f4c3ed3b5bbc993489d8a103c8.jpeg"
                        ],
                        "big": [
                            "http://pic5.3733.com/screenshots/201901/a76d4855121e3009e8b959ddfdf2b8cd.jpeg",
                            "http://pic5.3733.com/screenshots/201901/2f68e63acda0de17a41cbf94bb69cae0.jpeg",
                            "http://pic5.3733.com/screenshots/201901/0d8a89dabe96280643134180d249c96d.jpeg",
                            "http://pic5.3733.com/screenshots/201901/e6e42a2376f71acb047c32e25b6e2a76.jpeg",
                            "http://pic5.3733.com/screenshots/201901/33acc4f4c3ed3b5bbc993489d8a103c8.jpeg"
                        ]
                    },
                    "subscribed": 0,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null,
                    "subscribe_num": 1263,
                    "start_time": 0
                },
                {
                    "id": 20001619,
                    "classid": 49,
                    "totaldown": 0,
                    "title": "仙语外传",
                    "newstime": 1547446478,
                    "titlepic": "http://pic5.3733.com/icon/201901/56081fe4f59f02d994a0ef2008a36bed.png",
                    "down_a": "",
                    "version": "",
                    "titleimg": "http://pic5.3733.com/banner/201901/24e8f2e0b1ddad93c3aad98eb037dd2c.jpeg",
                    "size_a": 0,
                    "size_ip": "",
                    "type": [
                        "回合"
                    ],
                    "sign": [],
                    "yxftitle": "送超V，16666仙玉，灵石18888",
                    "version_code": 0,
                    "package_name": "zdfdafajh",
                    "license_md5": "",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:200",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "超爽福利的快乐回合制手游",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 2,
                    "uc_dl": 0,
                    "app_id": 61767,
                    "app_id_i": 0,
                    "enable_speedup": false,
                    "morepic": {
                        "small": [
                            "http://pic5.3733.com/screenshots/201901/00ac82d1b4204d8691379529c32c98ef.jpeg",
                            "http://pic5.3733.com/screenshots/201901/218de96308e517d8b2da318cdfdc5a02.jpeg",
                            "http://pic5.3733.com/screenshots/201901/fb54fbf0cbee41ad0f3ba97ba10245c0.jpeg",
                            "http://pic5.3733.com/screenshots/201901/35efeca80c06fa11731899291dd83549.jpeg",
                            "http://pic5.3733.com/screenshots/201901/384a82270d2dc8f277dd92bbd5529901.jpeg"
                        ],
                        "big": [
                            "http://pic5.3733.com/screenshots/201901/00ac82d1b4204d8691379529c32c98ef.jpeg",
                            "http://pic5.3733.com/screenshots/201901/218de96308e517d8b2da318cdfdc5a02.jpeg",
                            "http://pic5.3733.com/screenshots/201901/fb54fbf0cbee41ad0f3ba97ba10245c0.jpeg",
                            "http://pic5.3733.com/screenshots/201901/35efeca80c06fa11731899291dd83549.jpeg",
                            "http://pic5.3733.com/screenshots/201901/384a82270d2dc8f277dd92bbd5529901.jpeg"
                        ]
                    },
                    "subscribed": 0,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null,
                    "subscribe_num": 190,
                    "start_time": 0
                },
                {
                    "id": 20001497,
                    "classid": 1,
                    "totaldown": 0,
                    "title": "新大主宰飞升版",
                    "newstime": 1547446047,
                    "titlepic": "http://pic5.3733.com/icon/201901/f6a0b92155433a40d21bb03e0c64fa06.png",
                    "down_a": "",
                    "version": "",
                    "titleimg": "http://pic5.3733.com/banner/201901/08ef17754fc83294ba0cee20fcea9e9b_n.jpeg",
                    "size_a": 0,
                    "size_ip": "",
                    "type": [
                        "角色",
                        "回合",
                        "卡牌"
                    ],
                    "sign": [],
                    "yxftitle": "送V12，30000元宝，500万铜钱",
                    "version_code": 0,
                    "package_name": "新大主宰飞升版",
                    "license_md5": "",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:300",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "起点白金作家天蚕土豆正版授权",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 2,
                    "uc_dl": 0,
                    "app_id": 61738,
                    "app_id_i": 0,
                    "enable_speedup": false,
                    "morepic": {
                        "small": [
                            "http://pic5.3733.com/screenshots/201901/9bf24e2e0b907f15b5d4e93b06e42ba2.jpeg",
                            "http://pic5.3733.com/screenshots/201901/7313e4d6b1cac39e4f264ca877db9a1a.jpeg",
                            "http://pic5.3733.com/screenshots/201901/be6be4e84b503808802018707f79c3fd.jpeg",
                            "http://pic5.3733.com/screenshots/201901/585050f85f40a288fdd91ebd8181b11a.jpeg",
                            "http://pic5.3733.com/screenshots/201901/4d8b3b83f04ad7866a5ac5ee951977da.jpeg"
                        ],
                        "big": [
                            "http://pic5.3733.com/screenshots/201901/9bf24e2e0b907f15b5d4e93b06e42ba2.jpeg",
                            "http://pic5.3733.com/screenshots/201901/7313e4d6b1cac39e4f264ca877db9a1a.jpeg",
                            "http://pic5.3733.com/screenshots/201901/be6be4e84b503808802018707f79c3fd.jpeg",
                            "http://pic5.3733.com/screenshots/201901/585050f85f40a288fdd91ebd8181b11a.jpeg",
                            "http://pic5.3733.com/screenshots/201901/4d8b3b83f04ad7866a5ac5ee951977da.jpeg"
                        ]
                    },
                    "subscribed": 0,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null,
                    "subscribe_num": 213,
                    "start_time": 0
                },
                {
                    "id": 20001663,
                    "classid": 49,
                    "totaldown": 0,
                    "title": "烈火传奇",
                    "newstime": 1547207681,
                    "titlepic": "http://pic5.3733.com/icon/201901/07f838bdab814c51faeb88b9ad7badfe.png",
                    "down_a": "",
                    "version": "",
                    "titleimg": "",
                    "size_a": 0,
                    "size_ip": "",
                    "type": [],
                    "sign": [],
                    "yxftitle": "送满V，18888元宝，888万铜币",
                    "version_code": 0,
                    "package_name": "dfahjfhaa",
                    "license_md5": "",
                    "app_tag": [
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 7,
                            "name": "满Vip版",
                            "color": "#f87e71",
                            "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                        },
                        {
                            "type": 12,
                            "name": "1:1000",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "带你重返记忆中的传奇",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 2,
                    "uc_dl": 0,
                    "app_id": 60130,
                    "app_id_i": 0,
                    "enable_speedup": false,
                    "morepic": {
                        "small": [
                            "http://pic5.3733.com/screenshots/201901/384f2258bae2375e236a3bdb4dfb0df4.jpeg",
                            "http://pic5.3733.com/screenshots/201901/f5040cdd77e124697411715d98ab7d36.jpeg",
                            "http://pic5.3733.com/screenshots/201901/b55d71ed1168af461020dc49cc2c63ae.jpeg",
                            "http://pic5.3733.com/screenshots/201901/4b901df3e2b6fc0f42bf6c3924c6d1ec.jpeg",
                            "http://pic5.3733.com/screenshots/201901/c6649c0f827e3c6a39f90c4db4bce7e6.jpeg"
                        ],
                        "big": [
                            "http://pic5.3733.com/screenshots/201901/384f2258bae2375e236a3bdb4dfb0df4.jpeg",
                            "http://pic5.3733.com/screenshots/201901/f5040cdd77e124697411715d98ab7d36.jpeg",
                            "http://pic5.3733.com/screenshots/201901/b55d71ed1168af461020dc49cc2c63ae.jpeg",
                            "http://pic5.3733.com/screenshots/201901/4b901df3e2b6fc0f42bf6c3924c6d1ec.jpeg",
                            "http://pic5.3733.com/screenshots/201901/c6649c0f827e3c6a39f90c4db4bce7e6.jpeg"
                        ]
                    },
                    "subscribed": 0,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null,
                    "subscribe_num": 1372,
                    "start_time": 0
                },
                {
                    "id": 20001631,
                    "classid": 1,
                    "totaldown": 0,
                    "title": "超级三国群英",
                    "newstime": 1547206267,
                    "titlepic": "http://pic5.3733.com/icon/201901/516147db41bf460f02c60108200fb929.png",
                    "down_a": "",
                    "version": "",
                    "titleimg": "",
                    "size_a": 0,
                    "size_ip": "",
                    "type": [
                        "角色",
                        "动作"
                    ],
                    "sign": [],
                    "yxftitle": "送V10，钻石30888，铜币288w",
                    "version_code": 0,
                    "package_name": "zdfafaaf",
                    "license_md5": "",
                    "app_tag": [
                        {
                            "type": 4,
                            "name": "变态版",
                            "color": "#ba69ff",
                            "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                        },
                        {
                            "type": 6,
                            "name": "返利",
                            "color": "#13cfae",
                            "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                        },
                        {
                            "type": 12,
                            "name": "1:500",
                            "color": "#feac24",
                            "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                        }
                    ],
                    "gm_url": null,
                    "smalltext": "3D动作类ARPG角色扮演手游",
                    "video_url": "",
                    "video_thumb": "",
                    "state": 2,
                    "uc_dl": 0,
                    "app_id": 61773,
                    "app_id_i": 0,
                    "enable_speedup": false,
                    "morepic": {
                        "small": [
                            "http://pic5.3733.com/screenshots/201901/e691f044cd9f79e0bda99c2e745cf73c_n.jpeg",
                            "http://pic5.3733.com/screenshots/201901/47b505603b2428337e26e2aab0989b07_n.jpeg",
                            "http://pic5.3733.com/screenshots/201901/88b5df5991cb65ccf243099dec06d70f_n.jpeg",
                            "http://pic5.3733.com/screenshots/201901/ab2968fbd3709fa71a48e53fc260be0d_n.jpeg",
                            "http://pic5.3733.com/screenshots/201901/29b087e8f1ecc299e996efc5f8e6f88b_n.jpeg"
                        ],
                        "big": [
                            "http://pic5.3733.com/screenshots/201901/e691f044cd9f79e0bda99c2e745cf73c_n.jpeg",
                            "http://pic5.3733.com/screenshots/201901/47b505603b2428337e26e2aab0989b07_n.jpeg",
                            "http://pic5.3733.com/screenshots/201901/88b5df5991cb65ccf243099dec06d70f_n.jpeg",
                            "http://pic5.3733.com/screenshots/201901/ab2968fbd3709fa71a48e53fc260be0d_n.jpeg",
                            "http://pic5.3733.com/screenshots/201901/29b087e8f1ecc299e996efc5f8e6f88b_n.jpeg"
                        ]
                    },
                    "subscribed": 0,
                    "dl_config": 0,
                    "enable_rebate": true,
                    "down_ip": null,
                    "subscribe_num": 742,
                    "start_time": 0
                }
            ]
        }
      }
    )
    });
  // 分类
  app.post('/api/game/cate', (req, res) => {
    return res.json(
      {
        "log": {
            "sql": [
                "[ DB ] CONNECT:[ UseTime:0.006122s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
                "[ SQL ] SHOW COLUMNS FROM `gamebox_channel` [ RunTime:0.003499s ]",
                "[ SQL ] SELECT * FROM `gamebox_channel` WHERE  `channel_id` = 'none' LIMIT 1 [ RunTime:0.003077s ]",
                "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app_cate` [ RunTime:0.003592s ]",
                "[ SQL ] SELECT `id`,`title` FROM `www_92game_net_d_ecms_app_cate` WHERE  (  tuijian LIKE '%|1|%' OR tuijian LIKE '%|49|%' ) ORDER BY `listorder` DESC,`id` ASC LIMIT 0,1000 [ RunTime:0.003063s ]",
                "[ SQL ] SHOW COLUMNS FROM `gamebox_app_action` [ RunTime:0.003363s ]",
                "[ SQL ] SELECT `text1`,`action_code`,`extra_id`,`web_url`,`icon_url`,`bg_img_url`,`bg_color`,`scale`,`style` FROM `gamebox_app_action` WHERE  `types` LIKE '%|4|%'  AND `show_i` = 1 ORDER BY `index` DESC,`id` ASC [ RunTime:0.003026s ]",
                "[ SQL ] SELECT `id`,`nav_title` FROM `www_92game_net_d_ecms_app_cate` WHERE  `nav_title` <> '' ORDER BY `listorder` DESC,`id` ASC LIMIT 0,1000 [ RunTime:0.003072s ]",
                "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.004512s ]",
                "[ SQL ] SELECT COUNT(*) AS tp_count FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|2|%' LIMIT 1 [ RunTime:0.012750s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|2|%'  AND `priority` > 0 ORDER BY `priority` DESC LIMIT 0,3 [ RunTime:0.011926s ]",
                "[ SQL ] SELECT COUNT(*) AS tp_count FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|16|%' LIMIT 1 [ RunTime:0.011331s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|16|%'  AND `priority` > 0 ORDER BY `priority` DESC LIMIT 0,3 [ RunTime:0.011608s ]",
                "[ SQL ] SELECT COUNT(*) AS tp_count FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|1|%' LIMIT 1 [ RunTime:0.011403s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|1|%'  AND `priority` > 0 ORDER BY `priority` DESC LIMIT 0,3 [ RunTime:0.011653s ]",
                "[ SQL ] SELECT COUNT(*) AS tp_count FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|3|%' LIMIT 1 [ RunTime:0.010825s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|3|%'  AND `priority` > 0 ORDER BY `priority` DESC LIMIT 0,3 [ RunTime:0.012291s ]",
                "[ SQL ] SELECT COUNT(*) AS tp_count FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|14|%' LIMIT 1 [ RunTime:0.015347s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|14|%'  AND `priority` > 0 ORDER BY `priority` DESC LIMIT 0,3 [ RunTime:0.011614s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|14|%'  AND `priority` <= 0 ORDER BY `newstime` DESC LIMIT 0,3 [ RunTime:0.070870s ]",
                "[ SQL ] SELECT COUNT(*) AS tp_count FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|7|%' LIMIT 1 [ RunTime:0.011571s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|7|%'  AND `priority` > 0 ORDER BY `priority` DESC LIMIT 0,3 [ RunTime:0.011709s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|7|%'  AND `priority` <= 0 ORDER BY `newstime` DESC LIMIT 0,3 [ RunTime:0.072337s ]",
                "[ SQL ] SELECT COUNT(*) AS tp_count FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|8|%' LIMIT 1 [ RunTime:0.013640s ]",
                "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `type` LIKE '%|8|%'  AND `priority` > 0 ORDER BY `priority` DESC LIMIT 0,3 [ RunTime:0.011980s ]"
            ],
            "info": [
                "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
                "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'game',\n    2 => 'cate',\n  ),\n)",
                "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => '97f08ef8-851a-4a7c-b641-0b47ffdc45b6',\n  'user-agent' => 'PostmanRuntime/7.4.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '58',\n  'connection' => 'keep-alive',\n)",
                "[ PARAM ] array (\n  '/api/game/cate' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '101',\n  'isNav' => '1',\n)",
                "[ RUN ] app\\api\\controller\\Game->cate[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Game.php ]",
                "[ CACHE ] INIT File",
                "[ DB ] INIT mysql"
            ]
        },
        "time": 1547618144,
        "code": 1,
        "data": {
            "class_list": [
                {
                    "id": 0,
                    "title": "全部版本"
                },
                {
                    "id": 1,
                    "title": "变态版"
                },
                {
                    "id": 49,
                    "title": "满V版"
                },
                {
                    "id": 43,
                    "title": "GM版"
                }
            ],
            "size_cate": [
                {
                    "id": 0,
                    "title": "全部大小"
                },
                {
                    "id": 1,
                    "title": "20M以下"
                },
                {
                    "id": 2,
                    "title": "20-50M"
                },
                {
                    "id": 3,
                    "title": "50-100M"
                },
                {
                    "id": 4,
                    "title": "100-500M"
                },
                {
                    "id": 5,
                    "title": "500M以上"
                }
            ],
            "game_cate": [
                {
                    "id": 0,
                    "title": "全部类型"
                },
                {
                    "id": 2,
                    "title": "角色"
                },
                {
                    "id": 16,
                    "title": "回合"
                },
                {
                    "id": 1,
                    "title": "卡牌"
                },
                {
                    "id": 3,
                    "title": "策略"
                },
                {
                    "id": 8,
                    "title": "动作"
                },
                {
                    "id": 10,
                    "title": "休闲"
                },
                {
                    "id": 5,
                    "title": "即时"
                },
                {
                    "id": 6,
                    "title": "格斗"
                },
                {
                    "id": 11,
                    "title": "模拟"
                }
            ],
            "tab_action": [
                {
                    "text1": "变态版",
                    "action_code": 1002,
                    "extra_id": "1",
                    "web_url": "",
                    "icon_url": "http://pic3.3733.com/d/file/box_action/2017-03-09/cb7a19329f4ef3490714c706aaef94ef.png",
                    "bg_img_url": "",
                    "bg_color": "#f5544c",
                    "scale": 3,
                    "style": 0
                },
                {
                    "text1": "满Vip版",
                    "action_code": 1002,
                    "extra_id": "49",
                    "web_url": "",
                    "icon_url": "http://pic3.3733.com/d/file/box_action/2017-05-12/87d94b645292dec474cc2ef47f0a44ac.png",
                    "bg_img_url": "",
                    "bg_color": "#2ccb7b",
                    "scale": 3,
                    "style": 0
                },
                {
                    "text1": "GM版",
                    "action_code": 1002,
                    "extra_id": "43",
                    "web_url": "",
                    "icon_url": "http://pic3.3733.com/d/file/box_action/2017-05-12/ad4432ba4109146913949e3af59f1adf.png",
                    "bg_img_url": "",
                    "bg_color": "#ba69ff",
                    "scale": 3,
                    "style": 0
                },
                {
                    "text1": "精选专题",
                    "action_code": 1008,
                    "extra_id": "",
                    "web_url": "",
                    "icon_url": "http://pic3.3733.com/d/file/box_action/2018-03-13/53e74fd74e077cf3ae67f3fa61a380b6.png",
                    "bg_img_url": "",
                    "bg_color": "#feac24",
                    "scale": 0,
                    "style": 0
                }
            ],
            "nav_cate_list": [
                {
                    "cate_id": 2,
                    "nav_title": "角色扮演",
                    "total_count": 222,
                    "game_list": [
                        {
                            "id": 20000516,
                            "classid": 1,
                            "totaldown": 46894,
                            "title": "斗破西游超爆版",
                            "newstime": 1546916400,
                            "titlepic": "http://pic5.3733.com/icon/201812/c331866ced1027347f685ec9273bfce1.png",
                            "down_a": "http://xiazai.3733.com/apk/game/doupxycbb.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
                            "size_a": "268.7 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "动作",
                                "即时"
                            ],
                            "sign": [],
                            "yxftitle": "上线送VIP9、绑定元宝*28888",
                            "version_code": 1,
                            "package_name": "com.dpxy.guandu",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:200",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "装备全靠靠打,超级爆率9.8!",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0cc967355285890784176406916/LaYljc1SBRUA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201901/2addafe990d8979c6d7362a0d86c651f_n.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61613,
                            "app_id_i": 6979,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dpxycbbios_6979/dpxycbbios_6979.plist"
                        },
                        {
                            "id": 20000961,
                            "classid": 49,
                            "totaldown": 44856,
                            "title": "大圣归来星耀版",
                            "newstime": 1546920000,
                            "titlepic": "http://pic5.3733.com/icon/201901/c1f32e60766db2af1b525ae39b835c7c.png",
                            "down_a": "http://xiazai.3733.com/apk/game/dasglxyb.apk",
                            "version": "4.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201812/ac15140c72dd15afd83360c4dbe74910_n.jpeg",
                            "size_a": "139.6 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "动作",
                                "即时"
                            ],
                            "sign": [],
                            "yxftitle": "上线直接赠送加强版星耀满V",
                            "version_code": 400,
                            "package_name": "com.jianwan.dsglxy.yy3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:1000",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "同名动画电影改编的3D-ARPG动作手游",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af97fe5285890783958544771/p6ayPdBZlD0A.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201812/3941c167dce4c08aa71eb7ef5d4cb666.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61671,
                            "app_id_i": 7030,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dsglxybios_7030/dsglxybios_7030.plist"
                        },
                        {
                            "id": 20000591,
                            "classid": 49,
                            "totaldown": 44198,
                            "title": "传奇归来",
                            "newstime": 1544767200,
                            "titlepic": "http://pic5.3733.com/icon/201812/ed20807c0a431fe36962afe4484546e3.png",
                            "down_a": "http://xiazai.3733.com/apk/game/chuanqgl.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201812/1f56b2f8a048af7c2eef2eced7129d03.jpeg",
                            "size_a": "3.4 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "即时"
                            ],
                            "sign": [],
                            "yxftitle": "送V15、元宝58888、铜币200万",
                            "version_code": 1,
                            "package_name": "com.qn.cqgl.sy3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:500",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "竖版合击版传奇游戏",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/25fe537d5285890783696396415/XVtPaEbrPjUA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201812/d6445419fad56e901843a01a1121ee8b.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61610,
                            "app_id_i": 7072,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/cqgl_xsdk_ios_7072/cqgl_xsdk_ios_7072.plist"
                        }
                    ]
                },
                {
                    "cate_id": 16,
                    "nav_title": "回合制",
                    "total_count": 75,
                    "game_list": [
                        {
                            "id": 20000445,
                            "classid": 1,
                            "totaldown": 35429,
                            "title": "校花学院",
                            "newstime": 1546909200,
                            "titlepic": "http://pic5.3733.com/icon/201812/b96aa3cedb565dc09f74a6c3c74ff757.png",
                            "down_a": "http://xiazai.3733.com/apk/game/xiaohmgc.apk",
                            "version": "2.0.2.4",
                            "titleimg": "http://pic5.3733.com/banner/201812/833a15ff60f8b5184f2fff5e5e9ced75_n.jpeg",
                            "size_a": "324 MB",
                            "size_ip": "",
                            "type": [
                                "回合",
                                "卡牌"
                            ],
                            "sign": [],
                            "yxftitle": "送V10，金币88万，钻石18888",
                            "version_code": 11,
                            "package_name": "com.jianwan.xhdtsgs.yy3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:200",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "起点金牌作家鱼人二代正式授权，唯一正版校花青春手游大作",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/2a969d3d5285890783696586810/V7qja8AR1AIA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201812/732207418944e53b291974699f1d8e77_n.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61461,
                            "app_id_i": 7059,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xhmgc_jsdk_ios_7059/xhmgc_jsdk_ios_7059.plist"
                        },
                        {
                            "id": 3996,
                            "classid": 49,
                            "totaldown": 35425,
                            "title": "梦回仙游星耀版",
                            "newstime": 1546912800,
                            "titlepic": "http://pic5.3733.com/icon/201812/ff6f5962f2a5536f1292fff3e8a8445d.png",
                            "down_a": "http://xiazai.3733.com/apk/game/menghxyxyb.apk",
                            "version": "1.0.1",
                            "titleimg": "http://pic5.3733.com/banner/201812/3c73101b51a042a90f86b58d5f6b82bf_n.jpeg",
                            "size_a": "358.7 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "回合"
                            ],
                            "sign": [],
                            "yxftitle": "送满V，绑定元宝*20000，铜币*500W",
                            "version_code": 101,
                            "package_name": "com.sfsy.ttdzf.m3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:200",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "2018年精美3D回合制手游力作",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/fa38b00a5285890783111289521/ZMWN1w24RjgA.mp4",
                            "video_thumb": "http://pic3.3733.com/d/file/cb/2018-11-19/6d0307e13b8b1e7663c9147a9ee4769e.jpg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61431,
                            "app_id_i": 6836,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/mhxyxybios_6836/mhxyxybios_6836.plist"
                        },
                        {
                            "id": 1242,
                            "classid": 49,
                            "totaldown": 21121,
                            "title": "寻道回合",
                            "newstime": 1545382800,
                            "titlepic": "http://pic5.3733.com/icon/201812/641fe0061c696688cf5fd9d403a4f703.png",
                            "down_a": "http://xiazai.3733.com/apk/game/xundhh.apk",
                            "version": "1.0.11.12",
                            "titleimg": "http://pic5.3733.com/banner/201812/3f9d5701256909f4e0417fe5c6c30e1b_n.jpeg",
                            "size_a": "317.2 MB",
                            "size_ip": "",
                            "type": [
                                "回合"
                            ],
                            "sign": [],
                            "yxftitle": "上线送300万银币，送10元代金券，送70级装备",
                            "version_code": 23,
                            "package_name": "com.jiayou.xundao.yueyou",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:500",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "游戏以交友为主题，快来寻找你的红颜",
                            "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/c041052c9031868223502577577/v.f30.mp4",
                            "video_thumb": "http://pic3.3733.com/d/file/cb/2017-11-08/f8946af0329995b2ed947302e4779252.jpg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 60480,
                            "app_id_i": 7063,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": false,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xdhh_xsdk_ios_7063/xdhh_xsdk_ios_7063.plist"
                        }
                    ]
                },
                {
                    "cate_id": 1,
                    "nav_title": "卡牌游戏",
                    "total_count": 110,
                    "game_list": [
                        {
                            "id": 20000445,
                            "classid": 1,
                            "totaldown": 35429,
                            "title": "校花学院",
                            "newstime": 1546909200,
                            "titlepic": "http://pic5.3733.com/icon/201812/b96aa3cedb565dc09f74a6c3c74ff757.png",
                            "down_a": "http://xiazai.3733.com/apk/game/xiaohmgc.apk",
                            "version": "2.0.2.4",
                            "titleimg": "http://pic5.3733.com/banner/201812/833a15ff60f8b5184f2fff5e5e9ced75_n.jpeg",
                            "size_a": "324 MB",
                            "size_ip": "",
                            "type": [
                                "回合",
                                "卡牌"
                            ],
                            "sign": [],
                            "yxftitle": "送V10，金币88万，钻石18888",
                            "version_code": 11,
                            "package_name": "com.jianwan.xhdtsgs.yy3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:200",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "起点金牌作家鱼人二代正式授权，唯一正版校花青春手游大作",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/2a969d3d5285890783696586810/V7qja8AR1AIA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201812/732207418944e53b291974699f1d8e77_n.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61461,
                            "app_id_i": 7059,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xhmgc_jsdk_ios_7059/xhmgc_jsdk_ios_7059.plist"
                        },
                        {
                            "id": 3767,
                            "classid": 49,
                            "totaldown": 30768,
                            "title": "少年三国传星耀版",
                            "newstime": 1539918000,
                            "titlepic": "http://pic5.3733.com/icon/201812/4d9d6cab0e1e04951f646c32ef9c35d5.png",
                            "down_a": "http://xiazai.3733.com/apk/game/shaonsgzxyb.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201901/439f78c8dc169e20a9becd8435c0213b_n.jpeg",
                            "size_a": "233.4 MB",
                            "size_ip": "",
                            "type": [
                                "回合",
                                "卡牌"
                            ],
                            "sign": [],
                            "yxftitle": "送V19，30000魂玉，300W银两",
                            "version_code": 100,
                            "package_name": "com.sfsy.snqyzmvb.m3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:500",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "一款RPG战斗卡牌游戏",
                            "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/7636d30f5285890782388503054/v.f30.mp4",
                            "video_thumb": "http://pic3.3733.com/d/file/cb/2018-10-16/3eb40a710550958214ff03b9d0e998dc.jpg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61309,
                            "app_id_i": 7068,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/snsgcxyb_xsdk_ios_70/snsgcxyb_xsdk_ios_70.plist"
                        },
                        {
                            "id": 4345,
                            "classid": 49,
                            "totaldown": 18776,
                            "title": "古龙群侠传星耀版",
                            "newstime": 1544061000,
                            "titlepic": "http://pic5.3733.com/icon/201812/ded52c742837b2f8ea2ec2a12760a689.png",
                            "down_a": "http://xiazai.3733.com/apk/game/gulqxzxyb.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201812/ed54146092d240f3d8142d0bc52d84f6_n.jpeg",
                            "size_a": "307.6 MB",
                            "size_ip": "",
                            "type": [
                                "回合",
                                "卡牌"
                            ],
                            "sign": [],
                            "yxftitle": "送V17，元宝50000，铜币200W",
                            "version_code": 100,
                            "package_name": "com.sfsy.glqxz2mv.m3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:500",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "以古龙原著为基础的的2D角色扮演手游",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/23b890465285890783584011250/4J9aZDfe3LAA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201812/34e2b0ea7be7bfff7912a2d575f3142a.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61553,
                            "app_id_i": 6929,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/glqxcxybios_6929/glqxcxybios_6929.plist"
                        }
                    ]
                },
                {
                    "cate_id": 3,
                    "nav_title": "策略游戏",
                    "total_count": 77,
                    "game_list": [
                        {
                            "id": 20001408,
                            "classid": 1,
                            "totaldown": 32490,
                            "title": "造梦仙游",
                            "newstime": 1546826400,
                            "titlepic": "http://pic5.3733.com/icon/201901/a6c45127e196a1917220319e772b9a91.png",
                            "down_a": "http://xiazai.3733.com/apk/game/zaomxy.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201901/fa2e058f5446c5f0562a1c3c725a12c7_n.jpeg",
                            "size_a": "3.3 MB",
                            "size_ip": "",
                            "type": [
                                "策略"
                            ],
                            "sign": [],
                            "yxftitle": "送V8，绑元18888，银两188W",
                            "version_code": 1,
                            "package_name": "com.zmxybt.jlhd",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:500",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "一款放置类角色扮演移动手机游戏",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/5dcf54415285890784248757946/7KyxguLcYR4A.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201901/e7a3226898b7f5f2ec3eccc5890b10c1.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61730,
                            "app_id_i": 7084,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zmxyios_7084/zmxyios_7084.plist"
                        },
                        {
                            "id": 3598,
                            "classid": 49,
                            "totaldown": 36045,
                            "title": "我要当宰相",
                            "newstime": 1539925200,
                            "titlepic": "http://pic5.3733.com/icon/201812/2753771af609f38f71597b0447bf73da.png",
                            "down_a": "http://xiazai.3733.com/apk/game/woydzx.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201812/1a581f11521cb4766b62222e85b3fcda_n.jpeg",
                            "size_a": "4.9 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "策略",
                                "休闲"
                            ],
                            "sign": [],
                            "yxftitle": "上线送满V、48888元宝、银两100W",
                            "version_code": 1,
                            "package_name": "com.wydzx",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:1000",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "一款以古代官场斗争为题材的策略经营类手机网络游戏",
                            "video_url": "http://1252153290.vod2.myqcloud.com/8e45c765vodtransgzp1252153290/397d60c95285890781937100902/v.f30.mp4",
                            "video_thumb": "http://pic3.3733.com/d/file/cb/2018-09-21/d6a2f6c0bb829f743091e7cbb3b661ff.jpg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61225,
                            "app_id_i": 6638,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/wydzxios_6638/wydzxios_6638.plist"
                        },
                        {
                            "id": 20001219,
                            "classid": 49,
                            "totaldown": 24925,
                            "title": "忍者跳跳总动员",
                            "newstime": 1546825800,
                            "titlepic": "http://pic5.3733.com/icon/201901/24032347e165f7d2f46e68efb1701d45.png",
                            "down_a": "http://xiazai.3733.com/apk/game/renzttzdy.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201901/8c0e2b9c1faa06ddf27784445f9b5da7_n.jpeg",
                            "size_a": "225.6 MB",
                            "size_ip": "",
                            "type": [
                                "卡牌",
                                "策略"
                            ],
                            "sign": [],
                            "yxftitle": "送超V，金币40000，铜钱500W",
                            "version_code": 100,
                            "package_name": "com.sfsy.cqhycvb.m3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:1000",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "一起为了成为火影而奋斗吧",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/faf167145285890784298732017/xLuAdhDsCj4A.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201901/34e318603bbba8bb1246072fc669b4dd.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61700,
                            "app_id_i": 7087,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/rzttzdyios_7087/rzttzdyios_7087.plist"
                        }
                    ]
                },
                {
                    "cate_id": 8,
                    "nav_title": "动作冒险",
                    "total_count": 118,
                    "game_list": [
                        {
                            "id": 20000516,
                            "classid": 1,
                            "totaldown": 46894,
                            "title": "斗破西游超爆版",
                            "newstime": 1546916400,
                            "titlepic": "http://pic5.3733.com/icon/201812/c331866ced1027347f685ec9273bfce1.png",
                            "down_a": "http://xiazai.3733.com/apk/game/doupxycbb.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201901/86a8b02f152f78af568d79bf9fad120f_n.jpeg",
                            "size_a": "268.7 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "动作",
                                "即时"
                            ],
                            "sign": [],
                            "yxftitle": "上线送VIP9、绑定元宝*28888",
                            "version_code": 1,
                            "package_name": "com.dpxy.guandu",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 4,
                                    "name": "变态版",
                                    "color": "#ba69ff",
                                    "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                                },
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:200",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "装备全靠靠打,超级爆率9.8!",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/0cc967355285890784176406916/LaYljc1SBRUA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201901/2addafe990d8979c6d7362a0d86c651f_n.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61613,
                            "app_id_i": 6979,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dpxycbbios_6979/dpxycbbios_6979.plist"
                        },
                        {
                            "id": 20000961,
                            "classid": 49,
                            "totaldown": 44856,
                            "title": "大圣归来星耀版",
                            "newstime": 1546920000,
                            "titlepic": "http://pic5.3733.com/icon/201901/c1f32e60766db2af1b525ae39b835c7c.png",
                            "down_a": "http://xiazai.3733.com/apk/game/dasglxyb.apk",
                            "version": "4.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201812/ac15140c72dd15afd83360c4dbe74910_n.jpeg",
                            "size_a": "139.6 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "动作",
                                "即时"
                            ],
                            "sign": [],
                            "yxftitle": "上线直接赠送加强版星耀满V",
                            "version_code": 400,
                            "package_name": "com.jianwan.dsglxy.yy3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:1000",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "同名动画电影改编的3D-ARPG动作手游",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af97fe5285890783958544771/p6ayPdBZlD0A.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201812/3941c167dce4c08aa71eb7ef5d4cb666.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61671,
                            "app_id_i": 7030,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/dsglxybios_7030/dsglxybios_7030.plist"
                        },
                        {
                            "id": 20000823,
                            "classid": 49,
                            "totaldown": 34073,
                            "title": "暗黑血缘疯狂版",
                            "newstime": 1546048200,
                            "titlepic": "http://pic5.3733.com/icon/201812/342df1399f0dae38a072846b41f79161.png",
                            "down_a": "http://xiazai.3733.com/apk/game/anhxyfkb.apk",
                            "version": "1.0.0",
                            "titleimg": "http://pic5.3733.com/banner/201812/dff73454dc24ec938e4cd4cb67af2e01.jpeg",
                            "size_a": "310.8 MB",
                            "size_ip": "",
                            "type": [
                                "角色",
                                "动作",
                                "即时"
                            ],
                            "sign": [],
                            "yxftitle": "送至尊V，钻石60000，金币500W",
                            "version_code": 100,
                            "package_name": "com.sfsy.slws999b.m3733",
                            "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                            "app_tag": [
                                {
                                    "type": 6,
                                    "name": "返利",
                                    "color": "#13cfae",
                                    "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                                },
                                {
                                    "type": 7,
                                    "name": "满Vip版",
                                    "color": "#f87e71",
                                    "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                                },
                                {
                                    "type": 12,
                                    "name": "1:1000",
                                    "color": "#feac24",
                                    "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                                }
                            ],
                            "gm_url": null,
                            "smalltext": "幻想题材的RPG动作手游",
                            "video_url": "http://1252153290.vod2.myqcloud.com/da1e24bdvodgzp1252153290/70af92db5285890783958544606/VDutOXIL1HUA.mp4",
                            "video_thumb": "http://pic5.3733.com/snapshot/201812/9d78c1765c3d0853bf8b226112a64722.jpeg",
                            "state": 1,
                            "uc_dl": 0,
                            "app_id": 61654,
                            "app_id_i": 7065,
                            "enable_speedup": false,
                            "dl_config": 0,
                            "enable_rebate": true,
                            "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/ahxyfkbios_7065/ahxyfkbios_7065.plist"
                        }
                    ]
                }
            ]
      }
    })
  });
  // 详情
  app.post('/api/game/read', (req, res) => {
    return res.json({
      "log": {
          "sql": [
              "[ DB ] CONNECT:[ UseTime:0.013565s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
              "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_app` [ RunTime:0.002734s ]",
              "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup`,`titleurl`,`newstext`,`morepic`,`app_md5`,`kefu_qq`,`qq_qun`,`onclick`,`features`,`activity`,`channel_activity` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (2,1,5)  AND `platform` LIKE '%IOS%'  AND `id` = 20001549 LIMIT 1 [ RunTime:0.002026s ]",
              "[ SQL ] SHOW COLUMNS FROM `gamebox_rebate_game_set` [ RunTime:0.002476s ]",
              "[ SQL ] SELECT * FROM `gamebox_rebate_game_set` WHERE  `game_id` = 20001549 LIMIT 1 [ RunTime:0.001534s ]",
              "[ SQL ] SHOW COLUMNS FROM `gamebox_app_tag` [ RunTime:0.001898s ]",
              "[ SQL ] SELECT `type`,`name`,`color`,`icon` FROM `gamebox_app_tag` WHERE  `enabled` = 1  AND `type` IN (7,12) ORDER BY `index` DESC,`id` ASC LIMIT 0,1000 [ RunTime:0.001755s ]",
              "[ SQL ] SHOW COLUMNS FROM `gamebox_channel` [ RunTime:0.001979s ]",
              "[ SQL ] SELECT * FROM `gamebox_channel` WHERE  `channel_id` = 'none' LIMIT 1 [ RunTime:0.001698s ]",
              "[ DB ] CONNECT:[ UseTime:0.014207s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=db_sdk_ios;charset=utf8",
              "[ SQL ] SHOW COLUMNS FROM `c_game` [ RunTime:0.004194s ]",
              "[ SQL ] SELECT `initial` FROM `c_game` WHERE  `id` = 7102 LIMIT 1 [ RunTime:0.003345s ]",
              "[ DB ] CONNECT:[ UseTime:0.014076s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=vip3733;charset=utf8",
              "[ SQL ] SHOW COLUMNS FROM `vip_level` [ RunTime:0.003268s ]",
              "[ SQL ] SELECT `level_title`,`recharge` FROM `vip_level` WHERE  `status` = 1  AND `game_name` = '御姐无双商城版' ORDER BY `id` ASC [ RunTime:0.014970s ]",
              "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_card` [ RunTime:0.002271s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `www_92game_net_d_ecms_card` WHERE  `zhuangtai` <> 3  AND `titlegame` = '御姐无双商城版' LIMIT 1 [ RunTime:0.001686s ]",
              "[ SQL ] SHOW COLUMNS FROM `www_92game_net_d_ecms_news` [ RunTime:0.002094s ]",
              "[ SQL ] SELECT `id`,`classid`,`onclick`,`titleurl`,`title`,`newstime`,`titlepic`,`titlegame`,`smalltext` FROM `www_92game_net_d_ecms_news` WHERE  `state` = 1  AND (  (  `titlegame` = '御姐无双商城版'  AND `classid` IN (7,23,24) )  OR (  `classid` = 22  AND `cp_id` = 19 )  OR (  `classid` = 22  AND `titlegame` = '御姐无双商城版' ) ) ORDER BY `newstime` DESC LIMIT 0,10 [ RunTime:0.050993s ]",
              "[ SQL ] SELECT * FROM `www_92game_net_d_ecms_card` WHERE  `zhuangtai` <> 3  AND `titlegame` = '御姐无双商城版'  AND `classid` = 21 ORDER BY `id` DESC LIMIT 1 [ RunTime:0.002244s ]",
              "[ SQL ] SELECT `id`,`classid`,`totaldown`,`title`,`newstime`,`titlepic`,`down_a`,`version`,`titleimg`,`size_a`,`size_ip`,`type`,`sign`,`yxftitle`,`version_code`,`package_name`,`license_md5`,`app_tag`,`gm_url`,`cp_id`,`smalltext`,`video_url`,`video_thumb`,`subpackage_domain`,`state`,`uc_dl`,`app_id`,`app_id_i`,`enable_speedup` FROM `www_92game_net_d_ecms_app` WHERE  `state` IN (1,5)  AND `platform` LIKE '%IOS%'  AND `classid` IN (1,49)  AND `isgood` = 1 ORDER BY `newstime` DESC LIMIT 0,5 [ RunTime:0.001955s ]"
          ],
          "info": [
              "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
              "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'game',\n    2 => 'read',\n  ),\n)",
              "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => 'a0222b5d-ed58-4c3d-86af-85ce49555464',\n  'user-agent' => 'PostmanRuntime/7.4.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '62',\n  'connection' => 'keep-alive',\n)",
              "[ PARAM ] array (\n  '/api/game/read' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '101',\n  'id' => '20001549',\n)",
              "[ RUN ] app\\api\\controller\\Game->read[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Game.php ]",
              "[ DB ] INIT mysql",
              "[ CACHE ] INIT File",
              "[ DB ] INIT mysql",
              "[ DB ] INIT mysql"
          ]
      },
      "time": 1548299529,
      "code": 1,
      "data": {
          "detail": {
              "id": 20001549,
              "classid": 49,
              "totaldown": 18433,
              "title": "御姐无双商城版",
              "newstime": 1548043200,
              "titlepic": "http://pic5.3733.com/icon/201901/b061ac10d5b67bab289e1b0bd2d84c47.png",
              "down_a": "http://xiazai.3733.com/apk/game/yujiewsscb.apk",
              "version": "1.0.0",
              "titleimg": "http://pic5.3733.com/banner/201901/6e75ceb2b0f12ab5b643a6431bea0f21_n.jpeg",
              "size_a": "185 MB",
              "size_ip": "",
              "type": [
                  "角色",
                  "卡牌"
              ],
              "sign": [],
              "yxftitle": "送满V，元宝50000，银币500W",
              "version_code": 100,
              "package_name": "com.sfsy.nzsgzgmb.m3733",
              "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
              "app_tag": [
                  {
                      "type": 7,
                      "name": "满Vip版",
                      "color": "#f87e71",
                      "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                  },
                  {
                      "type": 12,
                      "name": "1:1000",
                      "color": "#feac24",
                      "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                  }
              ],
              "gm_url": null,
              "smalltext": "1、上线送满V，元宝*50000，银币*500W，体力*200<br />2、3倍加速、战斗跳过1级开启，开局就能超爽推图<br />3、体力每日无限次购买，每次购买1元宝，30级及之后每级所需的人物经验固定不变，最快1天可满级<br />4、等级礼包奖励超大幅提升，海量元宝，全5星英雄阵容、5星装备直接送<br />5、军饷养成奖励原价不变，奖励大幅提升，返利高达50倍<br />6、首充比例1:2000，充值比例1:1000，续充及之后所有的充值额外赠送50%<br />7、月卡奖励大幅提升，海量元宝每日送<br />8、首充奖励大幅提升，神将吕布等你拿",
              "video_url": "",
              "video_thumb": "",
              "state": 1,
              "uc_dl": 0,
              "app_id": 61748,
              "app_id_i": 7102,
              "enable_speedup": false,
              "titleurl": "http://m.3733.com/yjwsscb1",
              "newstext": "《御姐无双商城版》是一款在三国时代背景下，全员转性题材的游戏。上线送满V，元宝*50000，银币*500W，体力*200。历史似乎从来都是男人的天下，而该游戏则以少女梦入三国为起点，为大家揭开了一幅别样的历史画卷。通过严谨的创作态度，另辟蹊径，呈现女性视角下的“三国英雄梦”!",
              "morepic": {
                  "small": [
                      "http://pic5.3733.com/screenshots/201901/f2cff36e5ef5542dcd927e9153e9f9cd.jpeg",
                      "http://pic5.3733.com/screenshots/201901/b619d9814f6dfa136544e38ab82b96d3.jpeg",
                      "http://pic5.3733.com/screenshots/201901/3ddfdd110019e425bbd9f694d90acbde.jpeg",
                      "http://pic5.3733.com/screenshots/201901/a772e3109d93c85369788064288cf5ac.jpeg",
                      "http://pic5.3733.com/screenshots/201901/ad740f618a50ae97e1783ebc71da6974.jpeg"
                  ],
                  "big": [
                      "http://pic5.3733.com/screenshots/201901/f2cff36e5ef5542dcd927e9153e9f9cd.jpeg",
                      "http://pic5.3733.com/screenshots/201901/b619d9814f6dfa136544e38ab82b96d3.jpeg",
                      "http://pic5.3733.com/screenshots/201901/3ddfdd110019e425bbd9f694d90acbde.jpeg",
                      "http://pic5.3733.com/screenshots/201901/a772e3109d93c85369788064288cf5ac.jpeg",
                      "http://pic5.3733.com/screenshots/201901/ad740f618a50ae97e1783ebc71da6974.jpeg"
                  ]
              },
              "app_md5": "8D9B24442AA5A8E57BEF308A80C072BA",
              "kefu_qq": "800819997",
              "qq_qun": "759044253",
              "activity": "该游戏暂无返利。",
              "dl_config": 0,
              "enable_rebate": false,
              "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/yjwsscb_x_ios_7102/yjwsscb_x_ios_7102.plist",
              "video": {
                  "url": "",
                  "thumb": ""
              },
              "vip_price": [
                  {
                      "level_title": "VIPGM1",
                      "recharge": "10元"
                  },
                  {
                      "level_title": "VIPGM2",
                      "recharge": "30元"
                  },
                  {
                      "level_title": "VIPGM3",
                      "recharge": "100元"
                  },
                  {
                      "level_title": "VIPGM4",
                      "recharge": "200元"
                  },
                  {
                      "level_title": "VIPGM5",
                      "recharge": "500元"
                  },
                  {
                      "level_title": "VIPGM6",
                      "recharge": "1000元"
                  }
              ],
              "share_title": "御姐无双商城版",
              "share_url": "http://m.3733.com/yjwsscb1",
              "favorite_num": 3686,
              "card_count": 3,
              "kefu_qq_url": "https://q.url.cn/abDUwo?_type=wpa&amp;qidian=true",
              "news_groups": [
                  [
                      {
                          "id": 85360,
                          "classid": 22,
                          "onclick": 561,
                          "titleurl": "http://m.3733.com/appnews/85360.html",
                          "title": "御姐无双商城版首发和永久线下活动",
                          "newstime": 1547809164,
                          "titlepic": "",
                          "titlegame": "御姐无双商城版",
                          "smalltext": "",
                          "class_name": "活动",
                          "tag_color": "#f5544c"
                      },
                      {
                          "id": 76881,
                          "classid": 7,
                          "onclick": 290,
                          "titleurl": "http://m.3733.com/appnews/76881.html",
                          "title": "《御姐无双商城版》游戏视频分享：御姐武将带你闯三国",
                          "newstime": 1532308277,
                          "titlepic": "http://pic3.3733.com//d/file/zixun/dongtai/2018-07-13/3b753be6b51dcb4ce93bec6e5f119b71.jpg",
                          "titlegame": "御姐无双商城版",
                          "smalltext": "《御姐无双商城版》是一款在三国时代背景下，全员转性题材的游戏。历史似乎从来都是男人的天下，而该剧则以少女梦入三国为起点，为大家揭开了一幅别样的历史画卷。通过严谨的创作态度，另辟蹊径，呈现女性视角下的“三国英雄梦”!",
                          "class_name": "视频",
                          "tag_color": "#feac24"
                      }
                  ]
              ],
              "notices": [
                  {
                      "id": 1,
                      "title": "点击加入《御姐无双商城版》玩家群：759044253",
                      "text_size": 14,
                      "text_color": "#ff3200",
                      "content": "点击加入《御姐无双商城版》玩家群：759044253",
                      "action_code": 1,
                      "action_text": "759044253"
                  }
              ]
          },
          "liked": [
              {
                  "id": 20001869,
                  "classid": 1,
                  "totaldown": 2450,
                  "title": "掌门我要后宫版",
                  "newstime": 1548302400,
                  "titlepic": "http://pic5.3733.com/icon/201901/5f58e2d4ff9a122677ba4852b208d00b.png",
                  "down_a": "http://xiazai.3733.com/apk/game/zhangmwyhlb.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/777d382044afe197c3533ea8e087eed3_n.jpeg",
                  "size_a": "3.3 MB",
                  "size_ip": "",
                  "type": [
                      "策略",
                      "模拟"
                  ],
                  "sign": [],
                  "yxftitle": "送V6，元宝38888、金蛇套装",
                  "version_code": 1,
                  "package_name": "com.zmwy.guandu",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:500",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "一款模拟经营类游戏",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61823,
                  "app_id_i": 7154,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/zmwyhgbios_7154/zmwyhgbios_7154.plist"
              },
              {
                  "id": 20001794,
                  "classid": 1,
                  "totaldown": 2349,
                  "title": "仙剑客栈-巅峰回合",
                  "newstime": 1548298800,
                  "titlepic": "http://pic5.3733.com/icon/201901/0022f1db65f806d860ab6731e08167a0.png",
                  "down_a": "http://xiazai.3733.com/apk/game/xianjkzdfhh.apk",
                  "version": "1.0.0",
                  "titleimg": "",
                  "size_a": "219.7 MB",
                  "size_ip": "",
                  "type": [
                      "卡牌",
                      "策略"
                  ],
                  "sign": [],
                  "yxftitle": "送V8，金币188万，仙玉21888",
                  "version_code": 10000,
                  "package_name": "com.xjkz.qipa",
                  "license_md5": "24F8FDD198FAA68AC77F9E910A9698D7",
                  "app_tag": [
                      {
                          "type": 4,
                          "name": "变态版",
                          "color": "#ba69ff",
                          "icon": "http://pic5.3733.com/icon/201805/dc2ec5deea466fb62e7255d97fa5adbc.png"
                      },
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 12,
                          "name": "1:500",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "汇集多个仙剑角色的巅峰回合制手游",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61813,
                  "app_id_i": 7157,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xjkz_dfhhios_7157/xjkz_dfhhios_7157.plist"
              },
              {
                  "id": 20001857,
                  "classid": 49,
                  "totaldown": 3843,
                  "title": "仙域争霸",
                  "newstime": 1548298200,
                  "titlepic": "http://pic5.3733.com/icon/201901/c65bff1bfef503970698183da03a8592.png",
                  "down_a": "http://xiazai.3733.com/apk/game/xianyzb.apk",
                  "version": "1.0.0",
                  "titleimg": "http://pic5.3733.com/banner/201901/81c9007f3dbb96f62603eb357e772a57_n.jpeg",
                  "size_a": "3.2 MB",
                  "size_ip": "",
                  "type": [
                      "角色",
                      "动作",
                      "即时"
                  ],
                  "sign": [],
                  "yxftitle": "送V20，88888元宝，金币88888",
                  "version_code": 1,
                  "package_name": "com.xuanyumanv.yingtao",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:1000",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "浪漫邂逅修仙世界，正统修仙战斗为你打造",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61820,
                  "app_id_i": 7155,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/xyzbios_7155/xyzbios_7155.plist"
              },
              {
                  "id": 20001649,
                  "classid": 49,
                  "totaldown": 2658,
                  "title": "百万妖姬",
                  "newstime": 1548297000,
                  "titlepic": "http://pic5.3733.com/icon/201901/6ea656e7f86760af77366a3bd5639bb2.png",
                  "down_a": "http://xiazai.3733.com/apk/game/baiwyj.apk",
                  "version": "2.1.4",
                  "titleimg": "http://pic5.3733.com/banner/201901/febc97fc216bdccbd44d410cfa381b39_n.jpeg",
                  "size_a": "153.9 MB",
                  "size_ip": "",
                  "type": [
                      "休闲"
                  ],
                  "sign": [],
                  "yxftitle": "上线送488888小判，10兵粮丸",
                  "version_code": 214,
                  "package_name": "com.znxht.sy3733",
                  "license_md5": "9AF5A6E5A083BD2AA222011FAA4D43A5",
                  "app_tag": [
                      {
                          "type": 6,
                          "name": "返利",
                          "color": "#13cfae",
                          "icon": "http://pic5.3733.com/icon/201805/50a3f12afc50a07177491e98994a0de8.png"
                      },
                      {
                          "type": 7,
                          "name": "满Vip版",
                          "color": "#f87e71",
                          "icon": "http://pic5.3733.com/icon/201805/ea27ee5a7a44c48461d1ecaba68b8183.png"
                      },
                      {
                          "type": 12,
                          "name": "1:1000",
                          "color": "#feac24",
                          "icon": "http://pic5.3733.com/icon/201805/29fcaad48feddfcc9380cc409580d66b.png"
                      }
                  ],
                  "gm_url": null,
                  "smalltext": "一大波小姐姐来袭的新派后宫挂机养成手游",
                  "video_url": "",
                  "video_thumb": "",
                  "state": 1,
                  "uc_dl": 0,
                  "app_id": 61776,
                  "app_id_i": 7156,
                  "enable_speedup": false,
                  "dl_config": 0,
                  "enable_rebate": true,
                  "down_ip": "itms-services://?action=download-manifest&url=https://d2.3733.com/sdkgame/bwyjios_7156/bwyjios_7156.plist"
              }
          ]
      }
  })
  });
  // 评论
  app.post('/api/comment/comments', (req, res) => {
    return res.json({
      "log": {
          "sql": [
              "[ DB ] CONNECT:[ UseTime:0.018859s ] mysql:host=rm-uf6t81p3k9h712109rw.mysql.rds.aliyuncs.com;port=3306;dbname=comment;charset=utf8",
              "[ SQL ] SHOW COLUMNS FROM `cy_game_comment` [ RunTime:0.005405s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549 LIMIT 1 [ RunTime:0.005151s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 0 LIMIT 1 [ RunTime:0.004847s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 0  AND `top` = 1 ORDER BY `hot` DESC LIMIT 0,5 [ RunTime:0.005244s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 0  AND `top` <> 1  AND `hot` >= 5 ORDER BY `hot` DESC LIMIT 0,10 [ RunTime:0.005562s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 0 ORDER BY `is_quick` ASC,`create_time` DESC LIMIT 0,20 [ RunTime:0.005561s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734171 LIMIT 1 [ RunTime:0.004429s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734171 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004842s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734156 LIMIT 1 [ RunTime:0.004515s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734156 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004882s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734160 LIMIT 1 [ RunTime:0.004494s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734160 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004839s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734151 LIMIT 1 [ RunTime:0.004475s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734151 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004864s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734172 LIMIT 1 [ RunTime:0.004453s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734172 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004903s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734176 LIMIT 1 [ RunTime:0.004578s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734176 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004930s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734155 LIMIT 1 [ RunTime:0.004457s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734155 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004928s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734163 LIMIT 1 [ RunTime:0.004628s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734163 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.005079s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734161 LIMIT 1 [ RunTime:0.004500s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734161 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004958s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734177 LIMIT 1 [ RunTime:0.004513s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734177 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004814s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734159 LIMIT 1 [ RunTime:0.004542s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734159 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004874s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734154 LIMIT 1 [ RunTime:0.004527s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734154 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004890s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734165 LIMIT 1 [ RunTime:0.004568s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734165 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004896s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734149 LIMIT 1 [ RunTime:0.004558s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734149 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004917s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734162 LIMIT 1 [ RunTime:0.004538s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734162 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004992s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734173 LIMIT 1 [ RunTime:0.004715s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734173 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004984s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734168 LIMIT 1 [ RunTime:0.004542s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734168 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004970s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734158 LIMIT 1 [ RunTime:0.004487s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734158 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004878s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734164 LIMIT 1 [ RunTime:0.004474s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734164 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004926s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734175 LIMIT 1 [ RunTime:0.004388s ]",
              "[ SQL ] SELECT * FROM `cy_game_comment` WHERE  `status` = 1  AND `source_id` = 20001549  AND `reply_outer_id` = 1528734175 ORDER BY `is_quick` ASC,`create_time` ASC LIMIT 0,20 [ RunTime:0.004691s ]",
              "[ DB ] CONNECT:[ UseTime:0.013274s ] mysql:host=rm-uf6t81p3k9h712109.mysql.rds.aliyuncs.com;port=3306;dbname=xiaoyu3733db;charset=utf8",
              "[ SQL ] SHOW COLUMNS FROM `gamebox_game_rating` [ RunTime:0.002875s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `gamebox_game_rating` WHERE  `game_id` = 20001549  AND `rating` = 1 LIMIT 1 [ RunTime:0.002600s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `gamebox_game_rating` WHERE  `game_id` = 20001549  AND `rating` = 2 LIMIT 1 [ RunTime:0.002357s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `gamebox_game_rating` WHERE  `game_id` = 20001549  AND `rating` = 3 LIMIT 1 [ RunTime:0.002407s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `gamebox_game_rating` WHERE  `game_id` = 20001549  AND `rating` = 4 LIMIT 1 [ RunTime:0.002382s ]",
              "[ SQL ] SELECT COUNT(*) AS tp_count FROM `gamebox_game_rating` WHERE  `game_id` = 20001549  AND `rating` = 5 LIMIT 1 [ RunTime:0.002309s ]"
          ],
          "info": [
              "[ LANG ] C:\\www\\3733.com\\api2\\thinkphp\\lang\\zh-cn.php",
              "[ ROUTE ] array (\n  'type' => 'module',\n  'module' => \n  array (\n    0 => 'api',\n    1 => 'comment',\n    2 => 'comments',\n  ),\n)",
              "[ HEADER ] array (\n  'content-type' => 'application/x-www-form-urlencoded',\n  'cache-control' => 'no-cache',\n  'postman-token' => 'f59122d7-d529-47fa-a081-9930c5f64c04',\n  'user-agent' => 'PostmanRuntime/7.4.0',\n  'accept' => '*/*',\n  'host' => 'api2.c3733.com',\n  'accept-encoding' => 'gzip, deflate',\n  'content-length' => '106',\n  'connection' => 'keep-alive',\n)",
              "[ PARAM ] array (\n  '/api/comment/comments' => '',\n  'uuid' => 'ffffffff-1234-1234-1234-123456789012',\n  'from' => '101',\n  'page' => '1',\n  'listRows' => '20',\n  'classId' => '43',\n  'sourceId' => '20001549',\n  'order' => '0',\n)",
              "[ RUN ] app\\api\\controller\\Comment->comments[ C:\\www\\3733.com\\api2\\application\\api\\controller\\Comment.php ]",
              "[ CACHE ] INIT File",
              "[ DB ] INIT mysql",
              "[ DB ] INIT mysql"
          ]
      },
      "time": 1548298941,
      "code": 1,
      "data": {
          "class_id": "43",
          "source_id": "20001549",
          "cmt_sum": 252,
          "outer_cmt_sum": 237,
          "tops": [],
          "hots": [],
          "comments": [
              {
                  "comment_id": 1528734171,
                  "source_id": 20001549,
                  "content": "画面清新，上手快，很不错的,闲暇时间可以消遣一下!!",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "vivo X7",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 2,
                  "reply_count": 4,
                  "hot": 2,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548063747,
                  "update_time": 1548177672,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [
                      {
                          "comment_id": 1528736097,
                          "source_id": 20001549,
                          "content": "这游戏真好玩，我都把它打爆机了",
                          "images": null,
                          "floor_count": 0,
                          "status": 1,
                          "is_quick": 1,
                          "top": 0,
                          "elite": 0,
                          "reply_outer_id": 1528734171,
                          "reply_comment_id": 0,
                          "model": "M6 Note",
                          "ip": 662703449,
                          "ip_location": "",
                          "version_code": 1070,
                          "uuid": "00000000-3a0a-1454-ffff-ffffdf6c8e27",
                          "channel": "3733appPC",
                          "support_count": 0,
                          "reply_count": 0,
                          "hot": 0,
                          "reward_rule_id": 0,
                          "is_read": 0,
                          "create_time": 1548111239,
                          "update_time": 1548120674,
                          "update_by": "108",
                          "update_from": 0,
                          "user": {
                              "nickname": "玩家F0A8U6TM",
                              "avatar": null,
                              "avatar_review": 0,
                              "is_official": false,
                              "user_id": 2237607,
                              "user_from": 1,
                              "is_svip": false,
                              "exp_level": 11,
                              "exp_level_name": "铂金IV",
                              "exp_level_color": null,
                              "exp_level_img": null,
                              "pay_level": 4,
                              "pay_level_name": "4富",
                              "pay_level_color": null,
                              "pay_level_img": null
                          },
                          "reply_user": null,
                          "gold_url": ""
                      },
                      {
                          "comment_id": 1528736168,
                          "source_id": 20001549,
                          "content": "看着不错。希望出点大型游戏gm版的。满v的也行哈。",
                          "images": null,
                          "floor_count": 0,
                          "status": 1,
                          "is_quick": 1,
                          "top": 0,
                          "elite": 0,
                          "reply_outer_id": 1528734171,
                          "reply_comment_id": 0,
                          "model": "ANE-AL00",
                          "ip": 1779635114,
                          "ip_location": "",
                          "version_code": 1070,
                          "uuid": "00000000-135b-894f-ffff-ffffa8520945",
                          "channel": "cps125",
                          "support_count": 0,
                          "reply_count": 0,
                          "hot": 0,
                          "reward_rule_id": 0,
                          "is_read": 0,
                          "create_time": 1548112444,
                          "update_time": 1548120674,
                          "update_by": "108",
                          "update_from": 0,
                          "user": {
                              "nickname": "玩家FR4GLEI5",
                              "avatar": null,
                              "avatar_review": 0,
                              "is_official": false,
                              "user_id": 4278390,
                              "user_from": 1,
                              "is_svip": false,
                              "exp_level": 2,
                              "exp_level_name": "青铜II",
                              "exp_level_color": null,
                              "exp_level_img": null,
                              "pay_level": 9,
                              "pay_level_name": "9富",
                              "pay_level_color": "#8277cb",
                              "pay_level_img": null
                          },
                          "reply_user": null,
                          "gold_url": ""
                      },
                      {
                          "comment_id": 1528738255,
                          "source_id": 20001549,
                          "content": "平民小R也能玩的起来，找了好多游戏这个真心不错",
                          "images": null,
                          "floor_count": 0,
                          "status": 1,
                          "is_quick": 1,
                          "top": 0,
                          "elite": 0,
                          "reply_outer_id": 1528734171,
                          "reply_comment_id": 0,
                          "model": "ASUS_Z017D",
                          "ip": 250406784,
                          "ip_location": "",
                          "version_code": 1070,
                          "uuid": "00000000-318b-97d0-99f2-703361110a56",
                          "channel": "3733",
                          "support_count": 0,
                          "reply_count": 0,
                          "hot": 0,
                          "reward_rule_id": 0,
                          "is_read": 0,
                          "create_time": 1548151136,
                          "update_time": 1548207701,
                          "update_by": "108",
                          "update_from": 0,
                          "user": {
                              "nickname": "玩家DTHU8IM7",
                              "avatar": null,
                              "avatar_review": 0,
                              "is_official": false,
                              "user_id": 3330403,
                              "user_from": 1,
                              "is_svip": true,
                              "exp_level": 8,
                              "exp_level_name": "黄金III",
                              "exp_level_color": null,
                              "exp_level_img": null,
                              "pay_level": 9,
                              "pay_level_name": "9富",
                              "pay_level_color": "#8277cb",
                              "pay_level_img": null
                          },
                          "reply_user": null,
                          "gold_url": ""
                      },
                      {
                          "comment_id": 1528739294,
                          "source_id": 20001549,
                          "content": "666 很好玩 超赞",
                          "images": null,
                          "floor_count": 0,
                          "status": 1,
                          "is_quick": 1,
                          "top": 0,
                          "elite": 0,
                          "reply_outer_id": 1528734171,
                          "reply_comment_id": 0,
                          "model": "vivo Y55L",
                          "ip": -632952319,
                          "ip_location": "",
                          "version_code": 1070,
                          "uuid": "00000000-0628-b39b-8204-8cc307a6ff3f",
                          "channel": "3733sougou",
                          "support_count": 0,
                          "reply_count": 0,
                          "hot": 0,
                          "reward_rule_id": 0,
                          "is_read": 0,
                          "create_time": 1548175353,
                          "update_time": 1548207701,
                          "update_by": "108",
                          "update_from": 0,
                          "user": {
                              "nickname": "叶秋vip",
                              "avatar": "http://pic5.3733.com/avatar/201812/u_106585_d00fe1244daead251735f93d36e762ea.jpeg",
                              "avatar_review": 0,
                              "is_official": false,
                              "user_id": 106585,
                              "user_from": 1,
                              "is_svip": true,
                              "exp_level": 6,
                              "exp_level_name": "白银I",
                              "exp_level_color": null,
                              "exp_level_img": null,
                              "pay_level": 6,
                              "pay_level_name": "6富",
                              "pay_level_color": null,
                              "pay_level_img": null
                          },
                          "reply_user": null,
                          "gold_url": ""
                      }
                  ],
                  "user": {
                      "nickname": "小金金",
                      "avatar": "http://pic5.3733.com/avatar/201804/u_1503525_8650ed3d6416f2128acf0f1f809a76e9.jpeg",
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 1503525,
                      "user_from": 1,
                      "is_svip": false,
                      "exp_level": 5,
                      "exp_level_name": "白银II",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 16,
                      "pay_level_name": "郡公",
                      "pay_level_color": "#ad67da",
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734156,
                  "source_id": 20001549,
                  "content": "好好玩的游戏期待 加油你会更好",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "Redmi 4A",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 2,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548063571,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [
                      {
                          "comment_id": 1528735579,
                          "source_id": 20001549,
                          "content": "游戏总的来说还是可以，进游戏买个月卡，做做任务打发打发时间。",
                          "images": null,
                          "floor_count": 0,
                          "status": 1,
                          "is_quick": 1,
                          "top": 0,
                          "elite": 0,
                          "reply_outer_id": 1528734156,
                          "reply_comment_id": 0,
                          "model": "BLN-AL10",
                          "ip": 828020568,
                          "ip_location": "",
                          "version_code": 1070,
                          "uuid": "ffffffff-d360-9108-ffff-ffff86b7623e",
                          "channel": "3733",
                          "support_count": 0,
                          "reply_count": 0,
                          "hot": 0,
                          "reward_rule_id": 0,
                          "is_read": 0,
                          "create_time": 1548089475,
                          "update_time": 1548120674,
                          "update_by": "108",
                          "update_from": 0,
                          "user": {
                              "nickname": "fimau101",
                              "avatar": null,
                              "avatar_review": 0,
                              "is_official": false,
                              "user_id": 222594,
                              "user_from": 1,
                              "is_svip": true,
                              "exp_level": 12,
                              "exp_level_name": "铂金III",
                              "exp_level_color": null,
                              "exp_level_img": null,
                              "pay_level": 14,
                              "pay_level_name": "侯爵",
                              "pay_level_color": "#9d604b",
                              "pay_level_img": null
                          },
                          "reply_user": null,
                          "gold_url": ""
                      },
                      {
                          "comment_id": 1528737052,
                          "source_id": 20001549,
                          "content": "这个游戏不错哦，有跟上我的节奏吗？",
                          "images": null,
                          "floor_count": 0,
                          "status": 1,
                          "is_quick": 1,
                          "top": 0,
                          "elite": 0,
                          "reply_outer_id": 1528734156,
                          "reply_comment_id": 0,
                          "model": "OPPO R11s",
                          "ip": 607922632,
                          "ip_location": "",
                          "version_code": 1070,
                          "uuid": "ffffffff-fe85-bf61-ffff-ffffe66de6b5",
                          "channel": "cps124",
                          "support_count": 0,
                          "reply_count": 0,
                          "hot": 0,
                          "reward_rule_id": 0,
                          "is_read": 0,
                          "create_time": 1548126238,
                          "update_time": 1548126887,
                          "update_by": "108",
                          "update_from": 0,
                          "user": {
                              "nickname": "玩家UWTSJTWW",
                              "avatar": null,
                              "avatar_review": 0,
                              "is_official": false,
                              "user_id": 2220559,
                              "user_from": 1,
                              "is_svip": false,
                              "exp_level": 11,
                              "exp_level_name": "铂金IV",
                              "exp_level_color": null,
                              "exp_level_img": null,
                              "pay_level": 5,
                              "pay_level_name": "5富",
                              "pay_level_color": null,
                              "pay_level_img": null
                          },
                          "reply_user": null,
                          "gold_url": ""
                      }
                  ],
                  "user": {
                      "nickname": "被封号无名",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3496504,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 1,
                      "exp_level_name": "青铜III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734160,
                  "source_id": 20001549,
                  "content": "体验还可以，各种坐骑 宠物 神兵啥的都能满足其它游戏达不到的体验感",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "OPPO R11",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 1,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548062260,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [
                      {
                          "comment_id": 1528740708,
                          "source_id": 20001549,
                          "content": "游戏设计风格很赞，看起来都爽，难怪那么多人都做这里玩。",
                          "images": null,
                          "floor_count": 0,
                          "status": 1,
                          "is_quick": 1,
                          "top": 0,
                          "elite": 0,
                          "reply_outer_id": 1528734160,
                          "reply_comment_id": 0,
                          "model": "OPPO R11s",
                          "ip": 607970525,
                          "ip_location": "",
                          "version_code": 1070,
                          "uuid": "ffffffff-fe85-bf61-ffff-ffffe66de6b5",
                          "channel": "cps124",
                          "support_count": 0,
                          "reply_count": 0,
                          "hot": 0,
                          "reward_rule_id": 0,
                          "is_read": 0,
                          "create_time": 1548210991,
                          "update_time": 1548212557,
                          "update_by": "108",
                          "update_from": 0,
                          "user": {
                              "nickname": "玩家UWTSJTWW",
                              "avatar": null,
                              "avatar_review": 0,
                              "is_official": false,
                              "user_id": 2220559,
                              "user_from": 1,
                              "is_svip": false,
                              "exp_level": 11,
                              "exp_level_name": "铂金IV",
                              "exp_level_color": null,
                              "exp_level_img": null,
                              "pay_level": 5,
                              "pay_level_name": "5富",
                              "pay_level_color": null,
                              "pay_level_img": null
                          },
                          "reply_user": null,
                          "gold_url": ""
                      }
                  ],
                  "user": {
                      "nickname": "谜一样的男子",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3652894,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 1,
                      "exp_level_name": "青铜III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734151,
                  "source_id": 20001549,
                  "content": "什么职业好，平民玩家路过",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "MI 5",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548060888,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "风中摇曳的草",
                      "avatar": "http://pic5.3733.com/avatar/201808/u_3481034_20250ef3aaf1f150bdc6d8751f90be35.jpeg",
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3481034,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 2,
                      "exp_level_name": "青铜II",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734172,
                  "source_id": 20001549,
                  "content": "我感觉这款游戏会是爆款",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "MI 5",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548056922,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "独立团特别组",
                      "avatar": "http://pic5.3733.com/avatar/201803/u_2160518_2667173932e0a0885ccb71dee113cd6f.jpeg",
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 2160518,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 4,
                      "exp_level_name": "白银III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 5,
                      "pay_level_name": "5富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734176,
                  "source_id": 20001549,
                  "content": "人性化的故事情节，操作简单方便，值得玩耍。最近很喜欢玩这类游戏，玩法多样，操作简单。",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "vivo X9Plus",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548053202,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "马哥哥",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3506973,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 2,
                      "exp_level_name": "青铜II",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734155,
                  "source_id": 20001549,
                  "content": "来来互相伤害，，，，，有没有来的妹纸",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "MI MAX 2",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 1,
                  "reply_count": 1,
                  "hot": 1,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548051406,
                  "update_time": 1548177274,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [
                      {
                          "comment_id": 1528739391,
                          "source_id": 20001549,
                          "content": "玩了一会有点乱，没搞明白哦。克金有点利害，适合rmb玩",
                          "images": null,
                          "floor_count": 0,
                          "status": 1,
                          "is_quick": 1,
                          "top": 0,
                          "elite": 0,
                          "reply_outer_id": 1528734155,
                          "reply_comment_id": 0,
                          "model": "vivo Y66",
                          "ip": 610440582,
                          "ip_location": "",
                          "version_code": 1070,
                          "uuid": "00000000-39f0-5d89-ffff-ffffa0eff5c3",
                          "channel": "cps895",
                          "support_count": 0,
                          "reply_count": 0,
                          "hot": 0,
                          "reward_rule_id": 0,
                          "is_read": 0,
                          "create_time": 1548177284,
                          "update_time": 1548207701,
                          "update_by": "108",
                          "update_from": 0,
                          "user": {
                              "nickname": "十三吖",
                              "avatar": "http://pic5.3733.com/avatar/201901/u_4847319_9fa258d8f5a35c41b4420f7d3bc9f9ca.jpeg",
                              "avatar_review": 0,
                              "is_official": false,
                              "user_id": 4847319,
                              "user_from": 1,
                              "is_svip": false,
                              "exp_level": 1,
                              "exp_level_name": "青铜III",
                              "exp_level_color": null,
                              "exp_level_img": null,
                              "pay_level": 7,
                              "pay_level_name": "7富",
                              "pay_level_color": null,
                              "pay_level_img": null
                          },
                          "reply_user": null,
                          "gold_url": ""
                      }
                  ],
                  "user": {
                      "nickname": "18cm小可爱",
                      "avatar": "http://pic5.3733.com/avatar/201802/u_2160533_edb6cb0d069b007d29beb678e7a4bad6.jpeg",
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 2160533,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 3,
                      "exp_level_name": "青铜I",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 7,
                      "pay_level_name": "7富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734163,
                  "source_id": 20001549,
                  "content": "很好，很有节奏感，值得一玩，非常不错！",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "MI 5",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548050404,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "玩家FE2E6UYO",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 1510073,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 1,
                      "exp_level_name": "青铜III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 9,
                      "pay_level_name": "9富",
                      "pay_level_color": "#8277cb",
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734161,
                  "source_id": 20001549,
                  "content": "看着画面不错，其实我是来水经验的，正在下载",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "vivo X7",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548049163,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "最强青铜",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3610835,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 1,
                      "exp_level_name": "青铜III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734177,
                  "source_id": 20001549,
                  "content": "游戏很有特色，剧情比较丰富，简单易操作",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "OPPO R9s",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548047272,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "玩家tewz99cy",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 4072018,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 1,
                      "exp_level_name": "青铜III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734159,
                  "source_id": 20001549,
                  "content": "好玩特别好玩的一款游戏强烈推荐",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "OPPO R9s",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548047163,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "玩家6fkmkpw5",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 1968321,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 9,
                      "exp_level_name": "黄金II",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 10,
                      "pay_level_name": "10富",
                      "pay_level_color": "#8277cb",
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734154,
                  "source_id": 20001549,
                  "content": "挺不错的，各个元素，剧情都很完美",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "OPPO R9sk",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548046216,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "gyjg06",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 230079,
                      "user_from": 1,
                      "is_svip": false,
                      "exp_level": 6,
                      "exp_level_name": "白银I",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 19,
                      "pay_level_name": "藩王",
                      "pay_level_color": "#43a4dc",
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734165,
                  "source_id": 20001549,
                  "content": "这么好玩的游戏怎么没人点评啊？？？！！！！",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "vivo X9i",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548042061,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "玩家5981cc5c43051",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 782542,
                      "user_from": 1,
                      "is_svip": false,
                      "exp_level": 1,
                      "exp_level_name": "青铜III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 7,
                      "pay_level_name": "7富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734149,
                  "source_id": 20001549,
                  "content": "666 很好玩 超赞",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "MI 6",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548040975,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "玩家VWJSESMI",
                      "avatar": "http://0d077ef9e74d8.cdn.sohucs.com/c_zoom,w_200/fac494264beff70ed91fedf32783552b_default_1449555825843_jpg",
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 1206099,
                      "user_from": 1,
                      "is_svip": false,
                      "exp_level": 5,
                      "exp_level_name": "白银II",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 9,
                      "pay_level_name": "9富",
                      "pay_level_color": "#8277cb",
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734162,
                  "source_id": 20001549,
                  "content": "试试看，看看怎么样。希望跟想象中的一模一样",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "HUAWEI MLA-AL10",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548039496,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "赤鸢仙人",
                      "avatar": "http://pic5.3733.com/avatar/201901/u_3039405_d5ecd7e0a3d0e96e416fb7311ecaab2b.jpeg",
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3039405,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 4,
                      "exp_level_name": "白银III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 14,
                      "pay_level_name": "侯爵",
                      "pay_level_color": "#9d604b",
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734173,
                  "source_id": 20001549,
                  "content": "主要他玩起来花样多，有新人追求目标和好奇心的一种动力，百玩不腻，特别好玩。",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "OPPO A59s",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548039118,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "玩家oqgvwgnn",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3814180,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 1,
                      "exp_level_name": "青铜III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734168,
                  "source_id": 20001549,
                  "content": "这款游戏，各类玩法和活动，都很多。玩久了也不会感觉到无聊，特别是晚上，有很多玩家活动。",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "vivo X9i",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548036557,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "卡娜酱",
                      "avatar": "http://pic5.3733.com/avatar/201809/u_3656235_0bf53d5c2b0ff12559499b119a4182a7.jpeg",
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3656235,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 2,
                      "exp_level_name": "青铜II",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734158,
                  "source_id": 20001549,
                  "content": "很优秀。。。。。。。。。。。。。。",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "MI MAX 2",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548036080,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "玩家kfu6iobv",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3993476,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 1,
                      "exp_level_name": "青铜III",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734164,
                  "source_id": 20001549,
                  "content": "怎么升战力快，谁交一下，都不会玩",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "MI 5",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 1,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548031839,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [
                      {
                          "comment_id": 1528739787,
                          "source_id": 20001549,
                          "content": "慢慢玩",
                          "images": null,
                          "floor_count": 0,
                          "status": 1,
                          "is_quick": 1,
                          "top": 0,
                          "elite": 0,
                          "reply_outer_id": 1528734164,
                          "reply_comment_id": 0,
                          "model": "Mi Note 3",
                          "ip": 1786727069,
                          "ip_location": "",
                          "version_code": 1070,
                          "uuid": "ffffffff-82c3-10c1-b25c-6b5457753e1f",
                          "channel": "uc",
                          "support_count": 0,
                          "reply_count": 0,
                          "hot": 0,
                          "reward_rule_id": 0,
                          "is_read": 0,
                          "create_time": 1548195911,
                          "update_time": 1548215030,
                          "update_by": "wuzongwei",
                          "update_from": 0,
                          "user": {
                              "nickname": "a2050009",
                              "avatar": "http://pic5.3733.com/avatar/201805/u_127236_a4bb017fcb82741ad15ef8625e0779d9_n.jpeg",
                              "avatar_review": 0,
                              "is_official": false,
                              "user_id": 127236,
                              "user_from": 1,
                              "is_svip": true,
                              "exp_level": 10,
                              "exp_level_name": "黄金I",
                              "exp_level_color": null,
                              "exp_level_img": null,
                              "pay_level": 15,
                              "pay_level_name": "公爵",
                              "pay_level_color": "#ad67da",
                              "pay_level_img": null
                          },
                          "reply_user": null,
                          "gold_url": ""
                      }
                  ],
                  "user": {
                      "nickname": "星语心愿你好",
                      "avatar": "http://pic5.3733.com/avatar/201809/u_3681216_f9d60ab951cf02d5537a038a9c455d66.jpeg",
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 3681216,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 2,
                      "exp_level_name": "青铜II",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 0,
                      "pay_level_name": "0富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              },
              {
                  "comment_id": 1528734175,
                  "source_id": 20001549,
                  "content": "游戏玩法很有特色，里面小姐姐又多，太爽了",
                  "images": null,
                  "floor_count": 0,
                  "status": 1,
                  "is_quick": 0,
                  "top": 0,
                  "elite": 0,
                  "reply_outer_id": 0,
                  "reply_comment_id": 0,
                  "model": "OPPO R9s",
                  "ip": 463083756,
                  "ip_location": "",
                  "version_code": 0,
                  "uuid": "",
                  "channel": "",
                  "support_count": 0,
                  "reply_count": 0,
                  "hot": 0,
                  "reward_rule_id": 0,
                  "is_read": 0,
                  "create_time": 1548031674,
                  "update_time": 1548064126,
                  "update_by": "wuzongwei",
                  "update_from": 0,
                  "replies": [],
                  "user": {
                      "nickname": "来自火星",
                      "avatar": null,
                      "avatar_review": 0,
                      "is_official": false,
                      "user_id": 2468304,
                      "user_from": 1,
                      "is_svip": true,
                      "exp_level": 2,
                      "exp_level_name": "青铜II",
                      "exp_level_color": null,
                      "exp_level_img": null,
                      "pay_level": 2,
                      "pay_level_name": "2富",
                      "pay_level_color": null,
                      "pay_level_img": null
                  },
                  "reply_user": null,
                  "gold_url": ""
              }
          ],
          "rating": {
              "rating": 4.7,
              "percent5": 90,
              "percent4": 3,
              "percent3": 1,
              "percent2": 0,
              "percent1": 6,
              "user_num": "已有356人评分"
          }
      }
  })
  });
app.get('/api', (req, res) => {
  res.send("<h2>It's port 9093</h2>")
});

app.listen(9093, () => {
  console.log('Node app start at port 9093');
});