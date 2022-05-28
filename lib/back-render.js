const back = (function () {
    /**
     * 模板渲染
     *
     */
    function render(tpl, data) {
        const var_reg = /\{\{.*?\}\}/g;
        const var_reg_big = /\{\{(.*)?\}\}/;
        const tplStr = [];
        data.forEach((res) => {
            if (typeof res === "string") {
                tplStr.push(tpl.replace(var_reg, res));
            } else {
                tplStr.push(
                    tpl.replace(var_reg, function ($) {
                        return res[$.match(var_reg_big)[1]];
                    })
                );
            }
        });
        return tplStr.join(" ");
    }
    /**
     *当前高亮行
     *
     */
    let lastIndex = 0;
    function currentLight(dom, index) {
        dom.children[lastIndex].className = "";
        lastIndex = index;
        dom.children[index].className = "active";
    }

    return {
        render: render,
        currentLight: currentLight
    };
})();
