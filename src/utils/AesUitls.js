import AES from '../lib/Aes';
import Random from './RandomUtils';

var key = AES.CryptoJS.enc.Utf8.parse("ab1cf4vdg4utk8z0");
var ivLen = 16;

var generateIv = function () {
    var ranStr = Random.randomStr(ivLen);
    return AES.CryptoJS.enc.Utf8.parse(ranStr);
};

/**
 *JS中ASCII码特殊字符处理
 ASCII码中，16进制码从00~1F，以及7F，都是属于控制字符，一般在浏览器上是显示不了，甚至会解析报错，需要我们进行事先处理。
 但ASCII码表中，有些是常用的，而且能正常显示的，如数字、英文字母等，这些字符的ASCII对应的16进制大于20的。
 所有，可以使用正则匹配，过滤00~1F的特殊字符即可。
 str.replace(/[\x00-\x1f]+/g, '')
 * @param str
 * @returns {string}
 */
var charFilter = function (str) {
    return str.replace(/[\x00-\x1f]+/g, '');
};

var aes = {
    encrypt: function (data) {
        var iv = generateIv();
        var encrypted = '';
        //string number boolean 判断
        var srcs;
        if (typeof (data) === 'string' || typeof (data) === 'number' || typeof (data) === 'boolean') {
            srcs = AES.CryptoJS.enc.Utf8.parse(data);
            encrypted = AES.CryptoJS.AES.encrypt(srcs, key, {
                iv: iv,
                mode: AES.CryptoJS.mode.CBC,
                padding: AES.CryptoJS.pad.Pkcs7
            });
        } else if (typeof (data) === 'object') {//对象格式的转成json字符串
            data = JSON.stringify(data);
            srcs = AES.CryptoJS.enc.Utf8.parse(data);
            encrypted = AES.CryptoJS.AES.encrypt(srcs, key, {
                iv: iv,
                mode: AES.CryptoJS.mode.CBC,
                padding: AES.CryptoJS.pad.Pkcs7
            })
        } else {
            throw "data type error";
        }
        return encrypted.ciphertext.toString();
    },
    decrypt: function (data, iv) {
        var encryptedHexStr = AES.CryptoJS.enc.Hex.parse(data);
        var srcs = AES.CryptoJS.enc.Base64.stringify(encryptedHexStr);
        iv = AES.CryptoJS.enc.Utf8.parse(iv);
        var decrypt = AES.CryptoJS.AES.decrypt(srcs, key, {
            iv: iv,
            mode: AES.CryptoJS.mode.CBC,
            padding: AES.CryptoJS.pad.Pkcs7
        });
        var decryptedStr = decrypt.toString(AES.CryptoJS.enc.Utf8);
        return charFilter(decryptedStr.toString());
    }
};

export default aes;