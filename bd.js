window.onload = function () {
    function dom(id) {
        // 获取dom对象
        return document.getElementById(id)
    }
    var form1 = dom("form1");
    var tj = dom("tj");
    var nian = dom("nian");
    var yue = dom("yue");
    var ri = dom("ri");
    var sg = dom("sg");
    var xl = dom("xl");
    var yx = dom("yx");
    var sjh = dom("sjh");
    var yzm = dom("yzm");
    var cjmm = dom("cjmm");
    var nc = dom("nc");
    var wty = dom("wty");
    var tpyzm = dom("tpyzm");
    var hqyzm = dom("hqyzm");
    var ch = dom("ch");
    var xsg = dom("xsg");
    var bq = dom("bq");
    var hqyzm = dom("hqyzm");
    var hqyzm = dom("hqyzm");
    var btj = dom("btj");
    var text1 = dom("text1");
    var div22 = dom("div22");
    var san = dom("san");










    var zhushis = document.getElementsByClassName("zhushi");
    var yc = document.getElementsByClassName("yc");
    var sexs = document.getElementsByName("sex");

    var rqs = document.getElementsByName("rq");
    var hunyins = document.getElementsByName("hunyin");
    var sf2s = document.getElementsByClassName("sf2");
    var hss = document.getElementsByClassName("h");
    var lss = document.getElementsByClassName("l");
    var yss = document.getElementsByClassName("y");
    var div1 = document.getElementsByClassName("div1");
    var div2 = document.getElementsByClassName("div2");
    var div3 = document.getElementsByClassName("div3");
    var san1 = document.getElementsByClassName("san1");
    var axas = document.getElementsByClassName("axa");
    var asd = document.getElementsByClassName("asd");


    // sf2s[0].src = "img/x.png"

    // 信息填写错误点击提交事件触发报错
    form1.onsubmit = function (event) {
        if (!(sexs[0].checked || sexs[1].checked)) {
            zhushis[0].style.display = "none";
            yc[0].style.display = "inline-block";
            yc[0].innerHTML = "请选择性别";

            event.preventDefault();
        }
        if (isNaN(nian.value) || yue[0].selected || ri[0].selected) {
            zhushis[1].style.display = "none";
            yc[1].style.display = "inline-block";
            yc[1].innerHTML = "请正确填写生日";
            nian.style.borderColor = "#ef2c58";
            yue.style.borderColor = "#ef2c58";
            ri.style.borderColor = "#ef2c58";
            event.preventDefault();
        }
        if (city.value.length < 3) {
            zhushis[2].style.display = "none";
            yc[2].style.display = "inline-block";
            yc[2].innerHTML = "请正确填写你的常住地址";
            city.style.borderColor = "#ef2c58"
            sf2s[0].src = "img/x.png";
            event.preventDefault();
        }
        if (!(hunyins[0].checked || hunyins[1].checked || hunyins[2].checked)) {
            zhushis[3].style.display = "none";
            yc[3].style.display = "inline-block";
            yc[3].innerHTML = "请选择您的婚姻状况";
            event.preventDefault();
        }

        if (sg.options[0].selected) {
            yc[4].style.display = "inline-block";
            yc[4].innerHTML = "请选择您的身高";
            sg.style.borderColor = "#ef2c58"
            sf2s[1].src = "img/x.png";
            event.preventDefault();
        }
        if (xl.options[0].selected) {
            yc[5].style.display = "inline-block";
            yc[5].innerHTML = "请选择您的学历";
            xl.style.borderColor = "#ef2c58"
            sf2s[2].src = "img/x.png";
            event.preventDefault();
        }
        if (yx.options[0].selected) {
            yc[6].style.display = "inline-block";
            yc[6].innerHTML = "请选择您的月薪";
            yx.style.borderColor = "#ef2c58";
            sf2s[3].src = "img/x.png";
            event.preventDefault();
        }
        if (sjh.value.length != 11) {
            yc[7].style.display = "inline-block";
            yc[7].innerHTML = "请您填写有效的手机号";
            event.preventDefault();
        };
        if (sjh.value.length != 11) {
            yc[7].style.display = "inline-block";
            yc[7].innerHTML = "请您填写有效的手机号";
            sjh.style.borderColor = "#ef2c58"
            event.preventDefault();
        };
        if (yzm.value == "") {
            yc[8].style.display = "inline-block";
            yc[8].innerHTML = "请您填写验证码";
            yzm.style.borderColor = "#ef2c58"
            event.preventDefault();
        };
        if (cjmm.value == "") {
            yc[9].style.display = "inline-block";
            yc[9].innerHTML = "密码不能为空";
            cjmm.style.borderColor = "#ef2c58";
            sf2s[4].src = "img/x.png";
            event.preventDefault();
        };
        if (nc.value == "") {
            yc[10].style.display = "inline-block";
            yc[10].innerHTML = "昵称必填，你可以稍后进行修改";
            nc.style.borderColor = "#ef2c58";
            sf2s[5].src = "img/x.png";
            event.preventDefault();
        };
        if (!wty.checked) {
            alert("请勾选同意注册条款");
            event.preventDefault();
        }

        if (btj.children.length < 3) {
            xsg.style.color = "#d93c3c";
            xsg.style.borderColor = "#f59fb1";
            xsg.style.display = "block";
            event.preventDefault();
        }


    }

    // 选择性别后隐藏错误提示
    sexs[0].onchange = sexs[1].onchange = function () {
        zhushis[0].style.display = "inline-block";
        yc[0].style.display = "none";
    }


    // 添加年的options
    for (var i = 1980; i <= 2004; i++) {
        var option = document.createElement("option");
        option.innerHTML = i;
        nian.appendChild(option);
    }
    // 添加日的options
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.innerHTML = i;
        ri.appendChild(option);
    }



    // 填写生日后隐藏错误提示
    nian.onfocus = yue.onfocus = ri.onfocus = function () {
        this.style.borderColor = "#1face1";
        zhushis[1].style.display = "inline-block";
        yc[1].style.display = "none";
    }

    //选择年月日后清除错误提示
    nian.onblur = yue.onblur = ri.onblur = function () {
        if (nian[0].selected) {
            zhushis[1].style.display = "none";
            yc[1].style.display = "inline-block";
            yc[1].innerHTML = "请正确填写生日";
            nian.style.borderColor = "#ef2c58";
        } else if (yue[0].selected) {
            zhushis[1].style.display = "none";
            yc[1].style.display = "inline-block";
            yc[1].innerHTML = "请正确填写生日";
            yue.style.borderColor = "#ef2c58";
        } else if (ri[0].selected) {

            zhushis[1].style.display = "none";
            yc[1].style.display = "inline-block";
            yc[1].innerHTML = "请正确填写生日";
            ri.style.borderColor = "#ef2c58";
        }
        else {
            zhushis[1].style.display = "inline-block";
            yc[1].style.display = "none";
            nian.style.borderColor = "#e0e0e0";
            yue.style.borderColor = "#e0e0e0";
            ri.style.borderColor = "#e0e0e0";

        }
    }

    //填写常住地后隐藏错误提示
    city.onfocus = function () {
        yc[2].style.display = "none";

        sf2s[0].src = "";
        city.style.borderColor = "#1face1";

    }
    city.onblur = function () {
        if (city.value.length < 3 || !isNaN(city.value)) {
            zhushis[2].style.display = "none";
            yc[2].style.display = "inline-block";
            yc[2].innerHTML = "请正确填写你的常住地址";
            city.style.borderColor = "#ef2c58"
            sf2s[0].src = "img/x.png"; console.log(typeof (city.value));
        } else {
            sf2s[0].src = "img/j.png";
            city.style.borderColor = "#e0e0e0";

        }
    }


    // 选择婚姻状况后隐藏错误提示
    hunyins[0].onchange = hunyins[1].onchange = hunyins[2].onchange = function () {
        zhushis[3].style.display = "inline-block";
        yc[3].style.display = "none";
    }


    // 添加身高选项


    for (var i = 130; i <= 220; i++) {
        var option = document.createElement("option");
        option.innerHTML = i + "厘米";
        sg.appendChild(option);
    }

    // var p = ""
    // for (var i = 1; i < 92; i++) {
    //     sg.innerHTML = "<option value=''> &nbsp;&nbsp;" + (i + 129) + "厘米</option>";
    //     p = p + sg.innerHTML;
    // }
    // sg.innerHTML = "<option value=''>请选择</option>" + p;








    // 选择身高后隐藏错误提示
    sg.onblur = sg.onchange = function () {
        if (sg.options[0].selected != true) {
            yc[4].style.display = "none";
            sf2s[1].src = "img/j.png";
            sg.style.borderColor = "#e0e0e0";
        } else {
            yc[4].style.display = "inline-block";
            yc[4].innerHTML = "请选择您的身高";
            sg.style.borderColor = "#ef2c58"
            sf2s[1].src = "img/x.png";
        }
    }

    // sg.onmousedown = function () {
    //     if (!sg.options[0].selected) {
    //         yc[4].style.display = "none";
    //         sf2s[1].src = "img/j.png";
    //     }
    // }



    // 选择学历后隐藏错误提示
    xl.onblur = xl.onchange = function () {
        if (!xl.options[0].selected) {
            yc[5].style.display = "none";
            sf2s[2].src = "img/j.png";
            xl.style.borderColor = "#e0e0e0";
        } else {
            yc[5].style.display = "inline-block";
            yc[5].innerHTML = "请选择您的学历";
            xl.style.borderColor = "#ef2c58"
            sf2s[2].src = "img/x.png";
        }
    }

    // 选择月薪后隐藏错误提示
    yx.onblur = yx.onchange = function () {
        if (!yx.options[0].selected) {
            yc[6].style.display = "none";
            sf2s[3].src = "img/j.png";
            yx.style.borderColor = "#e0e0e0";
        } else {
            yc[6].style.display = "inline-block";
            yc[6].innerHTML = "请选择您的月薪";
            yx.style.borderColor = "#ef2c58";
            sf2s[3].src = "img/x.png";

        }
    }


    // 填写手机号后隐藏错误提示
    sjh.onfocus = function () {
        yc[7].style.display = "none";
        sjh.style.borderColor = "#1face1";
    }
    sjh.onblur = function () {
        if (sjh.value.length != 11) {
            yc[7].style.display = "inline-block";
            yc[7].innerHTML = "请您填写有效的手机号";
            sjh.style.borderColor = "#ef2c58"

        } else {

            sjh.style.borderColor = "#e0e0e0";
        }
    }

    // 生成验证码
    var yzms = "";
    var yzms1 = "";
    function yzmyzm() {
        yzms = "";
        yzms1 = "";
        for (var i = 1; i <= 4; i++) {
            num = Math.ceil(Math.random() * 1000) % 10;
            yzms = yzms + '<img src="img/' + num + '.gif" alt=""></img>'
            yzms1 = yzms1 + num;
        }
        tpyzm.innerHTML = yzms;
        return yzms1
    }
    yzmyzm();
    hqyzm.onclick = yzmyzm;

    // 填写验证码后隐藏错误提示
    yzm.onfocus = function () {
        yc[8].style.display = "none";
        yzm.style.borderColor = "#1face1";
    }
    yzm.onblur = function () {
        if (yzm.value != yzms1) {
            yc[8].style.display = "inline-block";
            yc[8].innerHTML = "验证码填写错误";
            yzm.style.borderColor = "#ef2c58"
        } else {
            yc[8].style.display = "none";
            yzm.style.borderColor = "#e0e0e0";

        }
    }


    // 填写密码后隐藏错误提示
    cjmm.onfocus = function () {
        yc[9].style.display = "none";
        sf2s[4].src = "";
        cjmm.style.borderColor = "#1face1";
    }


    cjmm.onblur = function () {
        if (cjmm.value.length < 6) {
            yc[9].style.display = "inline-block";
            yc[9].innerHTML = "请至少输入6位";
            cjmm.style.borderColor = "#ef2c58"
            sf2s[4].src = "img/x.png";
        } else {
            yc[9].style.display = "none";
            cjmm.style.borderColor = "#e0e0e0";
            sf2s[4].src = "img/j.png";
        }
    }


    // 填写昵称后隐藏错误提示
    nc.onfocus = function () {
        yc[10].style.display = "none";
        sf2s[5].src = "";
        nc.style.borderColor = "#1face1";
    }

    nc.onblur = function () {
        if (nc.value.length < 4) {
            yc[10].style.display = "inline-block";
            yc[10].innerHTML = "请输入至少4个字符";
            nc.style.borderColor = "#ef2c58"
            sf2s[5].src = "img/x.png";
        } else {
            yc[10].style.display = "none";
            nc.style.borderColor = "#e0e0e0";
            sf2s[5].src = "img/j.png";
        }
    }

    // 点击叉号关闭提示
    ch.onclick = function () {
        xsg.style.display = "none"
    }



    // 点击选项卡切换
    for (var i = 0; i < 3; i++) {
        san1[i].onclick = function () {
            san1[0].style.backgroundColor = "#fdfdfd";
            san1[1].style.backgroundColor = "#fdfdfd";
            san1[2].style.backgroundColor = "#fdfdfd";
            this.style.backgroundColor = "#fff";
            var index = this.getAttribute("index");
            div2[0].style.display = "none";
            div3[0].style.display = "none";
            div1[0].style.display = "none";
            san.children[index].style.display = "block";
        }

    }


    // san1[0].onclick = function () {
    //     san1[0].style.backgroundColor = "#ffffff";
    //     div1[0].style.display = "block";
    //     div2[0].style.display = "none";
    //     div3[0].style.display = "none";
    // }
    // san1[1].onclick = function () {
    //     san1[1].style.backgroundColor = "#ffffff";
    //     div1[0].style.display = "none";
    //     div2[0].style.display = "block";
    //     div3[0].style.display = "none";
    // }
    // san1[2].onclick = function () {
    //     san1[2].style.backgroundColor = "#ffffff";
    //     div1[0].style.display = "none";
    //     div2[0].style.display = "none";
    //     div3[0].style.display = "block";
    // }
    // console.log(axas);


    // 点击标签进行添加

    for (var i = 0; i < asd.length; i++) {
        asd[i].addEventListener("selectstart", function (e) {
            e.preventDefault();
        })
        asd[i].onclick = function () {
            var span = document.createElement("span");
            span.class = "tjbq";
            span.innerHTML = this.innerHTML + '<a class="axa" idexs="i"  href="JavaScript:;">✖</a>';
            btj.appendChild(span);
            // this.disabled = !this.disabled;
            // 点击叉号删除标签
            for (var i = 0; i < btj.children.length; i++) {
                btj.children[i].lastElementChild.onclick = function () {
                    btj.removeChild(this.parentNode)

                }
            }
        }

    }


    asd.add








    // 点击叉号删除标签

    // btj.onclick = function () {
    //     for (var i = 0; i < btj.children.length; i++) {
    //         btj.children[i].lastElementChild.onclick = function () {
    //             btj.removeChild(this.parentNode)

    //         }
    //     }
    // }

    // for (var i; i < axas.length; i++) {
    //     axas[i].onclick = function () {
    //         btj.removeChild(this.parentNode)
    //     }

    // }


    text1.onfocus = function () {
        text1.placeholder = "";
    }

    text1.onblur = function () {
        text1.placeholder = "听说你上得了厅堂，下得了厨房，杀得了木马，翻得了围墙，但是为什么没有人知道呢?快写下你的优秀，让TA看到吧!";
    }







}