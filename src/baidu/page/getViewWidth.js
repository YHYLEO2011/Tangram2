/// support magic - Tangram 1.x Code Start
/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: baidu/page/getViewWidth.js
 * author: allstar
 * version: 1.1.0
 * date: 2009/11/20
 */

///import baidu.page;

/**
 * @description 获取页面视觉区域宽度
 * @name baidu.page.getViewWidth
 * @function
 * @grammar baidu.page.getViewWidth()
 * @see baidu.page.getViewHeight
 *             
 * @return {number} 页面视觉区域宽度
 */
baidu.page.getViewWidth = function () {
    var doc = document,
        client = doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;

    return client.clientWidth;
};
/// support magic - Tangram 1.x Code End