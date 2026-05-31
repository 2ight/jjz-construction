// ========== 语言状态管理（唯一数据源）==========
// 优先级：URL参数 > localStorage > 默认中文
(function() {
    var urlLang = new URLSearchParams(window.location.search).get('lang');
    var storedLang = localStorage.getItem('jjz_lang');
    var lang = urlLang || storedLang || 'zh';

    // 同步写入 localStorage，确保三者一致
    localStorage.setItem('jjz_lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    window.isZh = (lang === 'zh');
})();

function getLang() {
    return document.documentElement.getAttribute('data-lang') === 'zh';
}

function setLang(isZh) {
    var lang = isZh ? 'zh' : 'en';
    localStorage.setItem('jjz_lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    window.isZh = isZh;
}

// ========== 导航链接同步语言参数 ==========
// 所有含 .html 的内部链接自动追加 ?lang=zh/en
// 确保页面跳转后语言状态一致
function updateNavLinks() {
    var lang = window.isZh ? 'zh' : 'en';
    document.querySelectorAll('a[href]').forEach(function(a) {
        var href = a.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('javascript')) return;
        if (!href.includes('.html')) return;

        // 分离 hash
        var hashIdx = href.indexOf('#');
        var hash = '';
        var base = href;
        if (hashIdx !== -1) {
            hash = href.substring(hashIdx);
            base = href.substring(0, hashIdx);
        }

        // 解析 query 参数，移除旧 lang，加入新 lang
        var qIdx = base.indexOf('?');
        var path = base;
        var params = [];
        if (qIdx !== -1) {
            path = base.substring(0, qIdx);
            base.substring(qIdx + 1).split('&').forEach(function(p) {
                if (p && !p.startsWith('lang=')) params.push(p);
            });
        }
        params.push('lang=' + lang);

        a.setAttribute('href', path + '?' + params.join('&') + hash);
    });
}

// ========== 移动端菜单切换 ==========
function toggleMobileMenu() {
    var nav = document.getElementById('mainNav');
    var toggle = document.querySelector('.menu-toggle');
    nav.classList.toggle('mobile-open');
    if (toggle) toggle.classList.toggle('active');
}

// 点击页面空白处或导航链接自动关闭菜单
document.addEventListener('click', function(e) {
    var nav = document.getElementById('mainNav');
    if (!nav || !nav.classList.contains('mobile-open')) return;
    var toggle = document.querySelector('.menu-toggle');
    if (toggle && toggle.contains(e.target)) return; // 点toggle由它自己处理
    if (nav.contains(e.target)) {
        // 点的是导航链接 → 关菜单
        nav.classList.remove('mobile-open');
        if (toggle) toggle.classList.remove('active');
        return;
    }
    // 点的是菜单外部 → 关菜单
    nav.classList.remove('mobile-open');
    if (toggle) toggle.classList.remove('active');
});

// ========== 一键复制产品信息 ==========
// 提取产品卡片信息并复制到剪贴板，方便客户粘贴到微信/WhatsApp 询价

// 初始化设置所有产品按钮的初始文字
function initProductButtons() {
    var lang = window.isZh ? 'zh' : 'en';
    var text = getTextByKey('productPage.saveBtn')[lang];
    document.querySelectorAll('.product-btn').forEach(function(btn) {
        btn.textContent = text;
    });
}

function copyProductInfo(btn) {
    var card = btn.closest('.product-card');
    if (!card) return;

    // 提取产品名称 + 型号（从 h3 文本取，如 "JJZ-2000 高性能硅酮密封胶"）
    var title = card.querySelector('h3').textContent.trim();

    // 提取规格（拼接成简洁格式）
    var specs = [];
    card.querySelectorAll('.spec-item').forEach(function(item) {
        var label = item.querySelector('.spec-label').textContent.trim();
        var value = item.querySelector('.spec-value').textContent.trim();
        if (label && value) specs.push(label + ': ' + value);
    });

    // 简洁版：只有标题 + 规格
    var lines = ['【' + title + '】'];
    specs.forEach(function(s) { lines.push(s); });
    var text = lines.join('\n');

    // 复制到剪贴板
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showCopyFeedback(btn);
        }).catch(function() {
            fallbackCopyText(text, btn);
        });
    } else {
        fallbackCopyText(text, btn);
    }
}

// 复制成功反馈：按钮显示提示 + 倒计时，3 秒后恢复
function showCopyFeedback(btn) {
    var lang = window.isZh ? 'zh' : 'en';
    var hintText = getTextByKey('copiedHint')[lang];
    var origText = getTextByKey('productPage.saveBtn')[lang];

    var countdown = 3;
    btn.textContent = hintText + ' (' + countdown + ')';
    btn.classList.add('favorited');

    var timer = setInterval(function() {
        countdown--;
        if (countdown > 0) {
            btn.textContent = hintText + ' (' + countdown + ')';
        } else {
            clearInterval(timer);
            btn.textContent = origText;
            btn.classList.remove('favorited');
        }
    }, 1000);
}

// 降级方案：全选+复制提示
function fallbackCopyText(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showCopyFeedback(btn);
    } catch (e) {
        // 复制失败则弹出提示
        var msg = window.isZh ? '请长按复制以下信息:' : 'Long press to copy:';
        prompt(msg, text);
    }
    document.body.removeChild(ta);
}

// 降级方案：全选+复制提示
function fallbackCopyText(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showCopyFeedback(btn);
        showCopyToast();
    } catch (e) {
        // 复制失败则弹出提示
        var msg = window.isZh ? '请长按复制以下信息:' : 'Long press to copy:';
        prompt(msg, text);
    }
    document.body.removeChild(ta);
}

// ========== 双语工具函数 ==========
function getTextByKey(keyStr) {
    return keyStr.split('.').reduce((obj, k) => obj[k], langText);
}

function renderLangText() {
    const textNodes = document.querySelectorAll('[data-lang]');
    textNodes.forEach(item => {
        const key = item.getAttribute('data-lang');
        const txt = getTextByKey(key);
        const zhDom = item.querySelector('.zh');
        const enDom = item.querySelector('.en');
        if (zhDom && enDom && txt) {
            zhDom.innerText = txt.zh || '';
            enDom.innerText = txt.en || '';
        }
    });
    renderBannerText();
    renderFilterTags();
    renderProductSpecs();
    renderCTAText();
    renderAppScenarios();
    switchLangShow();
}

function switchLangShow() {
    const zhList = document.querySelectorAll('.zh');
    const enList = document.querySelectorAll('.en');
    if (window.isZh) {
        zhList.forEach(el => el.style.display = '');
        enList.forEach(el => el.style.display = 'none');
    } else {
        zhList.forEach(el => el.style.display = 'none');
        enList.forEach(el => el.style.display = '');
    }
}

function switchLang() {
    window.isZh = !window.isZh;
    setLang(window.isZh);
    renderLangText();
    initProductButtons();  // 切换语言时刷新按钮文字
    updateNavLinks();
}

// ========== 页面横幅文案 ==========
function renderBannerText() {
    const bannerH1 = document.querySelector('.page-banner-content h1');
    const bannerP  = document.querySelector('.page-banner-content p');
    if (bannerH1) bannerH1.innerHTML = '<span class="zh">' + langText.productPage.bannerTitle.zh + '</span><span class="en">' + langText.productPage.bannerTitle.en + '</span>';
    if (bannerP)  bannerP.innerHTML  = '<span class="zh">' + langText.productPage.bannerDesc.zh  + '</span><span class="en">' + langText.productPage.bannerDesc.en  + '</span>';
}

// ========== 分类过滤标签 ==========
function renderFilterTags() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const keys = ['tagAll', 'tag1', 'tag2', 'tag3'];
    filterBtns.forEach((btn, i) => {
        if (keys[i] && langText.productPage[keys[i]]) {
            const txt = langText.productPage[keys[i]];
            btn.innerHTML = '<span class="zh">' + txt.zh + '</span><span class="en">' + txt.en + '</span>';
        }
    });
}

// ========== 产品卡片规格标签 ==========
function renderProductSpecs() {
    const lang = window.isZh ? 'zh' : 'en';
    document.querySelectorAll('.product-card').forEach(card => {
        const specEls = card.querySelectorAll('.spec-label, .spec-value');
        specEls.forEach(el => {
            const key = el.getAttribute('data-lang-spec');
            if (key) {
                const txt = getTextByKey('productPage.' + key);
                if (txt) el.textContent = txt[lang];
            }
        });
        const tagEls = card.querySelectorAll('.product-tags span');
        tagEls.forEach(el => {
            const key = el.getAttribute('data-lang-tag');
            if (key) {
                const txt = getTextByKey('productPage.' + key);
                if (txt) el.textContent = txt[lang];
            }
        });
    });
}

// ========== 底部 CTA 文案 ==========
function renderCTAText() {
    const lang = window.isZh ? 'zh' : 'en';
    const ctaH2 = document.querySelector('.product-cta .section-title');
    const ctaP  = document.querySelector('.product-cta-desc');
    const ctaBtn = document.querySelector('.product-cta .btn');
    if (ctaH2) ctaH2.innerHTML = '<span class="zh">' + langText.productPage.ctaTitle.zh + '</span><span class="en">' + langText.productPage.ctaTitle.en + '</span>';
    if (ctaP)  ctaP.innerHTML  = '<span class="zh">' + langText.productPage.ctaDesc.zh  + '</span><span class="en">' + langText.productPage.ctaDesc.en  + '</span>';
    if (ctaBtn) ctaBtn.innerHTML = '<span class="zh">' + langText.productPage.ctaBtn.zh + '</span><span class="en">' + langText.productPage.ctaBtn.en + '</span>';
}

// ========== 分类过滤功能 ==========
function initProductFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.product-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            cards.forEach(card => {
                const type = card.getAttribute('data-type');
                if (filter === 'all' || type === filter) {
                    card.classList.remove('hidden');
                    card.classList.add('fade-in');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('fade-in');
                }
            });
        });
    });
}

// ========== 渲染联系方式 ==========
function renderContact() {
    const telDom = document.getElementById('telText');
    const addrDom = document.getElementById('addrText');
    const emailDom = document.getElementById('emailText');
    if (telDom) telDom.innerText = siteConfig.telephone;
    if (addrDom) addrDom.innerText = siteConfig.address;
    if (emailDom) emailDom.innerText = siteConfig.email;
}

// ========== 装修需求应用场景（首页）==========
function renderAppScenarios() {
    const container = document.getElementById('appScenarios');
    if (!container) return;

    const app = langText.application;
    const scenes = [
        { key: 's1', iconClass: 'badge-water' },
        { key: 's2', iconClass: 'badge-oil' },
        { key: 's3', iconClass: 'badge-silicone' }
    ];

    const zh = window.isZh;

    container.innerHTML = scenes.map(function(sc) {
        const data = app[sc.key];
        const title = zh ? data.title.zh : data.title.en;
        const sub = zh ? data.sub.zh : data.sub.en;
        const icon = zh ? data.icon.zh : data.icon.en;

        const itemsHtml = data.items.map(function(item) {
            const badge = zh ? item.badge.zh : item.badge.en;
            const name = zh ? item.name.zh : item.name.en;
            const desc = zh ? item.desc.zh : item.desc.en;
            return '<div class="scenario-product-item">' +
                '<span class="sp-badge ' + item.badgeClass + '">' + badge + '</span>' +
                '<div class="sp-info">' +
                '<div class="sp-name">' + name + '</div>' +
                '<div class="sp-desc">' + desc + '</div>' +
                '</div></div>';
        }).join('');

        return '<div class="scenario-card">' +
            '<div class="scenario-header">' +
            '<span class="scenario-icon">' + icon + '</span>' +
            '<h3>' + title + '</h3>' +
            '<p class="scenario-sub">' + sub + '</p>' +
            '</div>' +
            '<div class="scenario-products">' + itemsHtml + '</div>' +
            '</div>';
    }).join('');
}

// ========== 图片自动轮播逻辑（首页用）==========
let bannerIndex = 0;
const bannerItems = document.querySelectorAll('.banner-item');
const bannerTotal = bannerItems.length;

function autoBanner() {
    bannerItems.forEach(item => item.classList.remove('active'));
    bannerIndex++;
    if (bannerIndex >= bannerTotal) {
        bannerIndex = 0;
    }
    bannerItems[bannerIndex].classList.add('active');
}

if (bannerTotal > 1) setInterval(autoBanner, 3000);

// ========== 页面加载完成统一执行 ==========
function init() {
    var copyYear = document.getElementById('copyYear');
    if (copyYear) copyYear.innerText = siteConfig.copyrightYear;

    renderLangText();
    renderContact();
    initProductButtons();  // 设置复制按钮初始文字
    initProductFilter();
    updateNavLinks();  // 页面加载后立即更新导航链接的语言参数
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
