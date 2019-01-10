const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
  return res.json({location: '/game'})
})

Router.get('/index', (req, res) => {
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
  }
  );
})

module.exports = Router;