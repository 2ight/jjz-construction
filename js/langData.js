// 全站双语文案配置
const langText = {

    // --- 导航菜单 ---
    nav: {
        home:      { zh: "首页",       en: "Home" },
        scenarios: { zh: "装修需求",   en: "Applications" },
        advantage: { zh: "品质优势",   en: "Advantages" },
        hotProduct:{ zh: "主推产品",   en: "Featured" },
        factory:   { zh: "工厂实力",   en: "Factory" },
        contact:   { zh: "联系我们",   en: "Contact" },
        product:   { zh: "产品中心",   en: "Products" }
    },

    // --- 首页 Banner ---
    banner: {
        title: { zh: "胶胶者建材 — 专业建筑胶粘剂制造商", en: "JiaoJiaoZhe Building Materials — Professional Adhesive Manufacturer" },
        desc:  { zh: "水性密封 · 门窗专用 · 耐候结构 — 覆盖装修填缝、防水堵漏、粘结固定全场景", en: "Water-based · Window & Door · Weatherproof — Full-scene sealing, waterproofing & bonding" },
        btn:   { zh: "查看产品", en: "View Products" }
    },

    // --- 装修需求应用场景（新增板块）---
    application: {
        title:    { zh: "按装修需求选产品", en: "Find Products by Application" },
        subtitle: { zh: "从实际施工场景出发，快速匹配最适合的胶粘剂方案", en: "Match the right adhesive for your construction needs" },

        // 场景一：填缝密封
        s1: {
            title: { zh: "填缝密封", en: "Sealing & Caulking" },
            sub:   { zh: "门窗墙体缝隙 · 踢脚线收边", en: "Door/Window gaps · Baseboard finishing" },
            icon:  { zh: "🔧", en: "🔧" },
            items: [
                { badge: { zh: "水性", en: "Water-based" }, badgeClass: "badge-water", name: { zh: "胶胶者2000 水性密封胶", en: "JJZ-2000 Water-based Sealant" }, desc: { zh: "5年质保 · 室内通用型 · 门窗打缝 / 集成墙板 / 踢脚线密封填缝", en: "5yr warranty · Indoor general purpose · Gaps, wall panels, baseboards" } },
                { badge: { zh: "水性", en: "Water-based" }, badgeClass: "badge-water", name: { zh: "胶胶者1000 水性密封胶", en: "JJZ-1000 Water-based Sealant" }, desc: { zh: "10年质保 · 升级配方 · 更强粘接力，延长使用寿命", en: "10yr warranty · Enhanced formula · Stronger adhesion, extended service life" } }
            ]
        },

        // 场景二：防水堵漏
        s2: {
            title: { zh: "防水堵漏", en: "Waterproof & Leak Repair" },
            sub:   { zh: "厨卫防水 · 阳光房外墙 · 防霉密封", en: "Kitchen/Bath · Sunroom · Mold-resistant sealing" },
            icon:  { zh: "💧", en: "💧" },
            items: [
                { badge: { zh: "油性", en: "Oil-based" }, badgeClass: "badge-oil", name: { zh: "胶胶者996 室内油性粘结胶", en: "JJZ-996 Oil-based Adhesive" }, desc: { zh: "油性配方 · 高强度快速固化 · 室内粘结 / 防水堵漏", en: "Oil-based · High strength, fast curing · Indoor bonding & waterproofing" } },
                { badge: { zh: "硅酮", en: "Silicone" }, badgeClass: "badge-silicone", name: { zh: "胶胶者998 门窗专用胶", en: "JJZ-998 Window & Door Sealant" }, desc: { zh: "10年质保 · 门窗粘结密封 · 厨卫防水 / 防霉密封", en: "10yr warranty · Kitchen & bathroom waterproof / Mold-resistant" } },
                { badge: { zh: "硅酮", en: "Silicone" }, badgeClass: "badge-silicone", name: { zh: "胶胶者999 高级耐候密封胶", en: "JJZ-999 Weatherproof Sealant" }, desc: { zh: "15年质保 · 阳光房外墙专用 · 玻璃 / 石材 / 铝合金 / 铝塑板", en: "15yr warranty · Sunroom & exterior · Glass, stone, aluminum bonding" } }
            ]
        },

        // 场景三：粘结固定
        s3: {
            title: { zh: "粘结固定", en: "Bonding & Fixing" },
            sub:   { zh: "室内构件固定 · 板材粘接 · 高强度连接", en: "Fixture fixing · Panel bonding · High-strength joints" },
            icon:  { zh: "🏗️", en: "🏗️" },
            items: [
                { badge: { zh: "硅酮", en: "Silicone" }, badgeClass: "badge-silicone", name: { zh: "胶胶者999 高级耐候密封胶", en: "JJZ-999 Weatherproof Sealant" }, desc: { zh: "15年质保 · 高强度粘接 · 玻璃幕墙 / 石材干挂 / 金属构件固定", en: "15yr warranty · Glass curtain walls / Stone cladding / Metal fixtures" } },
                { badge: { zh: "油性", en: "Oil-based" }, badgeClass: "badge-oil", name: { zh: "胶胶者996 室内油性粘结胶", en: "JJZ-996 Oil-based Adhesive" }, desc: { zh: "油性配方 · 快速固化 · 室内装修构件固定、板材粘接", en: "Oil-based · Fast curing · Interior fixture bonding, panel adhesion" } }
            ]
        }
    },

    // --- 核心优势 ---
    advantage: {
        title: { zh: "四大核心优势", en: "Core Advantages" },
        item1: {
            title: { zh: "分级质保", en: "Tiered Warranty" },
            desc:  { zh: "2000系列5年、998系列10年、999系列15年，按需选择，胶体不开裂", en: "5/10/15-year warranty tiers. No cracking, no shrinkage" }
        },
        item2: {
            title: { zh: "品类齐全", en: "Full Product Range" },
            desc:  { zh: "水性密封胶、门窗专用胶、油性粘结胶、硅酮耐候胶全覆盖", en: "Water-based, silicone, oil-based — complete adhesive portfolio" }
        },
        item3: {
            title: { zh: "工艺成熟", en: "Proven Process" },
            desc:  { zh: "现代化生产线，从配方到灌装全流程品控，交期稳定", en: "Modern production line with full-process QC. Stable delivery" }
        },
        item4: {
            title: { zh: "技术支持", en: "Technical Support" },
            desc:  { zh: "提供产品选型建议与施工技术指导，帮客户用对胶、用好胶", en: "Product selection & application guidance for optimal results" }
        }
    },

    // --- 首页主推产品（2000 / 996 / 999）---
    hotProduct: {
        title: { zh: "主推产品", en: "Featured Products" },

        p1: {
            badge: { zh: "5年质保", en: "5yr Warranty" },
            title: { zh: "胶胶者2000 水性密封胶", en: "JJZ-2000 Water-based Sealant" },
            desc:  { zh: "中性门窗耐候胶 · 5年门窗工程 · 水性密封 · 门窗墙体打缝 / 集成墙板 / 踢脚线密封填缝", en: "Neutral window/door sealant · 5yr warranty · Water-based · Gap filling, wall panels, baseboards" },
            tags:  { zh: "水性密封 | 室内通用 | 5年质保", en: "Water-based | Indoor | 5yr" }
        },

        p2: {
            badge: { zh: "高强度", en: "High Strength" },
            title: { zh: "胶胶者996 室内油性粘结胶", en: "JJZ-996 Oil-based Adhesive" },
            desc:  { zh: "中性硅酮耐候结构胶 · 室内粘结油性 · MS胶 · 高强度快速固化 / 防水堵漏", en: "Neutral silicone structural · Oil-based · MS adhesive · High strength, fast curing, waterproof" },
            tags:  { zh: "油性粘结 | 防水堵漏 | MS胶", en: "Oil-based | Waterproof | MS" }
        },

        p3: {
            badge: { zh: "15年质保", en: "15yr Warranty" },
            title: { zh: "胶胶者999 高级耐候密封胶", en: "JJZ-999 Weatherproof Sealant" },
            desc:  { zh: "高级中性硅酮耐候胶 · 15年阳光房 · 硅酮/玻璃胶粘结密封 · 玻璃 / 石材 / 铝合金 / 铝塑板", en: "Premium neutral silicone · 15yr sunroom · Silicone/glass sealant · Glass, stone, aluminum, aluminum-plastic panels" },
            tags:  { zh: "硅酮耐候 | 阳光房专用 | 15年质保", en: "Silicone | Sunroom | 15yr" }
        },

        allBtn: { zh: "查看全部产品", en: "View All Products" }
    },

    // --- 工厂介绍 ---
    factory: {
        title: { zh: "工厂实景", en: "Factory View" },
        desc:  { zh: "现代化粘接密封材料生产线，从原料配比到成品灌装全流程把控。交期稳定，为海内外客户提供优质建筑胶粘剂产品与服务。", en: "Modern adhesive production line with full-process quality control. Stable delivery and premium construction adhesives for global clients." }
    },

    // --- 联系我们 ---
    contact: {
        title:    { zh: "联系我们", en: "Contact Us" },
        telTip:   { zh: "电话：", en: "Tel: " },
        addrTip:  { zh: "地址：", en: "Address: " },
        emailTip: { zh: "邮箱：", en: "Email: " }
    },

    // --- 产品中心页 ---
    productPage: {
        // 页面横幅
        bannerTitle: { zh: "全系产品", en: "All Products" },
        bannerDesc:  { zh: "水性 · 硅酮 · 油性 — 覆盖全场景的建筑胶粘剂解决方案", en: "Water-based · Silicone · Oil-based — Complete adhesive solutions for every scenario" },

        title: { zh: "产品中心", en: "Product Center" },

        // 过滤标签
        tagAll:   { zh: "全部产品",    en: "All" },
        tag1:     { zh: "水性密封胶",  en: "Water-based" },
        tag2:     { zh: "门窗专用胶",  en: "Window & Door" },
        tag3:     { zh: "油性粘结胶",  en: "Oil-based" },

        // 产品卡片
        p1: {
            badge: { zh: "5年质保", en: "5yr Warranty" },
            title: { zh: "胶胶者2000 水性密封胶", en: "JJZ-2000 Water-based Sealant" },
            desc:  { zh: "中性门窗耐候胶 · 5年质保 · 门窗墙体打缝 / 集成墙板 / 踢脚线密封填缝", en: "Neutral weatherproof · 5yr warranty · Gap filling, wall panels, baseboards" },
            tag1:  { zh: "水性密封", en: "Water-based" },
            tag2:  { zh: "室内通用", en: "Indoor" },
            tag3:  { zh: "5年质保", en: "5yr" }
        },
        p2: {
            badge: { zh: "10年质保", en: "10yr Warranty" },
            title: { zh: "胶胶者1000 水性密封胶", en: "JJZ-1000 Water-based Sealant" },
            desc:  { zh: "升级配方 · 10年质保 · 更强粘接力，延长使用寿命", en: "Enhanced formula · 10yr warranty · Stronger adhesion, extended service life" },
            tag1:  { zh: "水性密封", en: "Water-based" },
            tag2:  { zh: "升级配方", en: "Enhanced" },
            tag3:  { zh: "10年质保", en: "10yr" }
        },
        p3: {
            badge: { zh: "高强度", en: "High Strength" },
            title: { zh: "胶胶者996 室内油性粘结胶", en: "JJZ-996 Oil-based Adhesive" },
            desc:  { zh: "MS胶 · 高强度快速固化 · 室内粘结 / 防水堵漏", en: "MS adhesive · High strength, fast curing · Indoor bonding & waterproof" },
            tag1:  { zh: "油性粘结", en: "Oil-based" },
            tag2:  { zh: "MS胶",   en: "MS" }
        },
        p4: {
            badge: { zh: "10年质保", en: "10yr Warranty" },
            title: { zh: "胶胶者998 门窗专用胶", en: "JJZ-998 Window & Door Sealant" },
            desc:  { zh: "硅酮玻璃胶 · 10年质保 · 厨卫防水 / 防霉密封", en: "Silicone · 10yr warranty · Kitchen & bath, mold-resistant sealing" },
            tag1:  { zh: "硅酮密封", en: "Silicone" },
            tag2:  { zh: "防霉耐候", en: "Anti-mold" },
            tag3:  { zh: "10年质保", en: "10yr" }
        },
        p5: {
            badge: { zh: "15年质保", en: "15yr Warranty" },
            title: { zh: "胶胶者999 高级耐候密封胶", en: "JJZ-999 Weatherproof Sealant" },
            desc:  { zh: "高级硅酮耐候胶 · 15年质保 · 玻璃 / 石材 / 铝合金 / 铝塑板", en: "Premium silicone · 15yr warranty · Glass, stone, aluminum, panels" },
            tag1:  { zh: "硅酮耐候", en: "Silicone" },
            tag2:  { zh: "阳光房专用", en: "Sunroom" },
            tag3:  { zh: "15年质保", en: "15yr" }
        },

        // 规格标签
        specWarranty: { zh: "质保", en: "Warranty" },
        specType:     { zh: "类型", en: "Type" },
        specCure:     { zh: "固化", en: "Curing" },
        typeWater:    { zh: "水性",   en: "Water-based" },
        typeSilicone: { zh: "硅酮",   en: "Silicone" },
        typeOil:      { zh: "油性",   en: "Oil-based" },
        fastCure:    { zh: "快速固化", en: "Fast Cure" },

        // 复制按钮
        saveBtn:  { zh: "复制产品信息", en: "Copy Info" },
        savedBtn: { zh: "已复制 ✓", en: "Copied ✓" },

        // 底部 CTA
        ctaTitle: { zh: "找不到合适的产品？", en: "Can't find the right product?" },
        ctaDesc:  { zh: "联系我们，根据您的施工场景推荐最合适的胶粘剂方案", en: "Contact us for a tailored adhesive recommendation based on your project" },
        ctaBtn:   { zh: "联系我们", en: "Contact Us" }
    },

    // --- 底部版权 ---
    footer: {
        copyright: { zh: "胶胶者建材 版权所有", en: "JiaoJiaoZhe Building Materials All Rights Reserved" }
    },

    // --- 语言切换 ---
    langBtn: { zh: "EN", en: "简中" },

    // --- 复制提示 ---
    copiedHint: { zh: "已复制，粘贴到微信/WhatsApp 询价", en: "Copied! Paste to WhatsApp" }
};
