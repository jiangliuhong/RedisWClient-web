
var baseStr = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";

var random = {
    /**
     * 生成 [ minNum, maxNum ] 范围内的随机整数
     * （大于等于 minNum，小于等于 maxNum）
     * @param minNum 最小值
     * @param maxNum 最大值
     */
    randomInteger: function (minNum, maxNum) {
        return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    },
    /**
     * 生成指定长度的随机最付出
     * @param len
     */
    randomStr: function (len) {
        var str = '';
        var num;
        for (var i = 0; i < len; i++) {
            num = this.randomInteger(0, baseStr.length - 1);
            str += baseStr[num];
        }
        return str;
    }
};

export default random;