document.addEventListener("contextmenu",(events) => {
    events.preventDefault();
})
document.getElementById("close-button").onclick = () => {
    window.electronWindow.closeWindow();
}
document.getElementById("min-button").onclick = () => {
    window.electronWindow.minWindow();
}
const phishing = `
huorong.com.cn
huorongcn.com
apps-huorong.com.cn
huorongzh.com.cn
huorung.com.cn
huoronnganquans.com.cn
pc-huorongr.com.cn
hu-huoronganquan.com.cn
huorong-app.hl.cn
huorongz.com
kc-huorong.com.cn
microsoft-edge.hl.cn
microsoft-edge.com.cn
zbrowser-an.com.cn
zbrowser-zr.com.cn
wpsoffisce.com.cn
wpstool.com.cn
leigodco.com
leigodjsq.com
leigodnn.com
leigodjsq.com.cn
deepseekvc.com
deepseek-cx.com.cn
deepseek-coo.com.cn
deepseek-av.com
deepseek-vgd.com.cn
deepseek-desktop.com.cn
deepseek-nwp.com.cn
deepseek.download
deepseek-ltd.com.cn
deepseek-en.com
deepseek-asia.com.cn
deepseek-hks.com.cn
deepseek-sk.com.cn
deepseekop.com
deepseek-bn.com.cn
deepseeks-hk.com.cn
deepseekdl.com
deepseek-se.com.cn
kf-kaspersky.com.cn
web-kaspersky.com.cn
ks-kaspersky.com.cn
kaspersky-cyber.com.cn
kasperskyhub.com.cn
kc-kaspersky.com.cn
baobean.hl.cn
doubao-m.com.cn
browser-sogou.com.cn
soogoubrowser.com.cn
sogousrfa.cn
sogouch.com.cn
youdaodict.com.cn
youdaofyi.com
youdaou.com
yovdao.com.cn
fanyi-yyoudao.com.cn
nb-youdao.com.cn
youdaoat.com.cn
seewoo.com.cn
hao-zip.com.cn
net-2345browser.com.cn
2345browser.com.cn
2345browser.cn
browser-2345.cn
qudongzongcai-yf.com.cn
apps-qudongzongcai.com.cn
qx-qudongzongcai.com.cn
qudongzongcai.bingpartners.cc
qudongzg.com.cn
zongcaixz.com.cn
qudongzn.com.cn
qudong-df.com.cn
maicongmousedr.com.cn
ac-razer.com.cn
mg-dareu.com.cn
`.split("\n").filter(Boolean);
let siteValue = null;
const inputSite = document.getElementById("input-site");
const phishingInfo = document.getElementById("phishing-info");
inputSite.addEventListener("input",() => {
    siteValue = inputSite.value.toLowerCase();
})
const setPhishing = new Set(phishing);
inputSite.addEventListener("keydown",(keys) => {
    if (keys.key === "Enter") {
        if (setPhishing.has(siteValue)) {
            phishingInfo.style.color = "red";
            phishingInfo.innerText = "此网址是钓鱼网站！";
        }
        else if (!inputSite.value.trim()) {
            phishingInfo.style.color = "white";
            phishingInfo.innerText = "您未输入文本，请输入文本";
        }
        else {
            phishingInfo.style.color = "green";
            phishingInfo.innerText = "此网址不在网址库中，但不一定安全";
        }
    }
})