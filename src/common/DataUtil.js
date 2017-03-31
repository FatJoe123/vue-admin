/*
 * 数据转换/数据验证
 */
let DataUtil = {
    //json转string
    jsonToString(v) {
        return JSON.stringify(v)
    },
    //string转json
    stringToJson(v) {
        return eval('(' + v + ')')
    },
    //截取字符串
    sortString(s, len) {
        var len = len - (s + '').length;
        for (var i = 0; i < len; i++) { s = '0' + s; }
        return s
    },
    //手机验证
    isMobile(text) {
        return /^[1][34578][0-9]{9}$/i.test(text);
    },
    //是否为数字
    isNumber(num){
        return isNaN(num);
    },
    //四舍五入保留num位小数
    keepDecimal(val,num = 0){
      let result = Number(val).toFixed(num);
      if(result == 'NaN'){
        result = '';
      }
      return result;
    },
    //格式化年月日 format为格式 eg:yyyy-MM-dd
    formatTime(dateTime,format = "yyyy-MM-dd"){
      if(!dateTime) return dateTime;
      let args = {
        "M+": dateTime.getMonth() + 1,
        "d+": dateTime.getDate(),
        "h+": dateTime.getHours(),
        "m+": dateTime.getMinutes(),
        "s+": dateTime.getSeconds(),
        "q+": Math.floor((dateTime.getMonth() + 3) / 3),  //quarter
        "S": dateTime.getMilliseconds()
      };
      if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (dateTime.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var i in args) {
        let n = args[i];
        if (new RegExp("(" + i + ")").test(format))
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
      }
      return format;
    }
}

export default DataUtil
