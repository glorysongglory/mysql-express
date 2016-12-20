var moment = require('moment');

module.exports = function responseFormat(obj) {

	var temp;

	// 如果是数组
	if (Array.isArray(obj)) {

		obj.forEach(function(val, index) {
			obj[index] = responseFormat(val);
		});

	// 对象
	} else if (typeof obj === 'object') {

		Object.keys(obj).forEach(function(key) {
			obj[key] = responseFormat(obj[key]);
		});

	// 字符型
	} else if (typeof obj === 'string') {

		// 如果是符合日期格式的字符串
		if (obj.match(/^\d{4}\-\d{2}\-\d{2}/)) {
			temp = moment(obj);
			if (temp.isValid()) {
				return temp.format('YYYY-MM-DD HH:mm:ss');
			};
		};

	};

	// 如果是日期对象
	// 转换成年月日时分秒
	if (moment.isDate(obj)) {
		return moment(obj).format('YYYY-MM-DD HH:mm:ss');
	};

	return obj;
};