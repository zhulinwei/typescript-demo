// 枚举类型用于取值被限定在一定范围内的场景
var Days1;
(function (Days1) {
    Days1[Days1["Sunday"] = 0] = "Sunday";
    Days1[Days1["MonDay"] = 1] = "MonDay";
    Days1[Days1["ThusDay"] = 2] = "ThusDay";
    Days1[Days1["WednesDay"] = 3] = "WednesDay";
    Days1[Days1["Thursday"] = 4] = "Thursday";
    Days1[Days1["Friday"] = 5] = "Friday";
    Days1[Days1["Saturday"] = 6] = "Saturday";
})(Days1 || (Days1 = {}));
;
// 枚举成员会被赋值为0开始递增的数字
console.log(Days1["Sunday"] == 0);
console.log(Days1[0] == "Sunday");
// 手动赋值与计算所得项，注意如果计算所得项后是未手动赋值的项，它会因为无法获得初始值而报错
var Day2;
(function (Day2) {
    Day2[Day2["Sunday"] = 0] = "Sunday";
    Day2[Day2["MonDay"] = 1] = "MonDay";
    Day2[Day2["ThusDay"] = 2] = "ThusDay";
    Day2[Day2["WednesDay"] = 3] = "WednesDay";
    Day2[Day2["Thursday"] = 4] = "Thursday";
    Day2[Day2["Friday"] = 5] = "Friday";
    Day2[Day2["Saturday"] = '123456'.length] = "Saturday";
})(Day2 || (Day2 = {}));
