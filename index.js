
function btn(){
    var str = document.getElementById("str").value;
    console.log(str.split("",));
    var patt = /[a-z]/g;
    var patt1 = /[^a-h]/gi;// ^ 表示非， g 表示全局， i 表示大小写不敏感的匹配  写在[]里面表示非，外面表示以.开头的 例：^n,以n开头
    var patt2 = /adgk/g; // 查找集合内的任何字符
    var patt3 = /^adgk/g; //查找集合外的任何字符
    var patt4 = /(id|pi|25)/g;//查找任何指定的选项
    var patt5 = /a..g/g;//查找单个字符 aoog ahsg akeg aagg aaag aggg
    var arr = str.match(patt);
    var arr1 = str.match(patt1);
    var arr2 = str.match(patt2);
    var arr3 = str.match(patt3);
    var arr4 = str.match(patt4);
    var arr5 = str.match(patt5);
    console.log(arr);
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
    console.log(arr5);
}
//详情见http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp
//不想列举了呀提交提交