// 蓬蓬科普 Pengpeng Science Popularization
// 公共JavaScript文件

// 语言配置
const translations = {
    zh: {
        nav: {
            home: '首页',
            knowledge: '用药知识库',
            personal: '个性化中心',
            topics: '专题区',
            about: '关于我们'
        },
        home: {
            title: '蓬蓬科普',
            subtitle: '老年肿瘤患者用药科普个性化推荐网站',
            welcome: '欢迎来到蓬蓬科普',
            welcomeDesc: '我们致力于为老年肿瘤患者及其家属提供专业、易懂、个性化的用药科普信息',
            searchPlaceholder: '搜索药物、疾病、症状...',
            searchButton: '搜索',
            quickNav: '快速导航',
            news: '最新资讯'
        },
        knowledge: {
            title: '用药知识库',
            search: '搜索知识库...',
            filter: '筛选条件',
            categories: '分类',
            tumorType: '肿瘤类型',
            drugCategory: '药物类别',
            symptoms: '症状',
            comorbidities: '合并疾病'
        },
        personal: {
            title: '个性化中心',
            desc: '填写您的信息，获取个性化推荐',
            privacy: '隐私保护声明',
            privacyText: '您填写的信息将仅用于生成个性化推荐，不会存储或共享给第三方。我们重视您的隐私保护。',
            submit: '提交获取推荐'
        },
        topics: {
            title: '专题区',
            desc: '专题科普文章和视频资源'
        },
        about: {
            title: '关于我们',
            intro: '平台介绍',
            team: '核心团队',
            contact: '联系我们'
        }
    },
    en: {
        nav: {
            home: 'Home',
            knowledge: 'Knowledge Base',
            personal: 'Personalized Center',
            topics: 'Topics',
            about: 'About Us'
        },
        home: {
            title: 'Pengpeng Health',
            subtitle: 'Personalized Medication Education for Elderly Cancer Patients',
            welcome: 'Welcome to Pengpeng Health',
            welcomeDesc: 'Dedicated to providing professional, easy-to-understand, and personalized medication education for elderly cancer patients and their families',
            searchPlaceholder: 'Search drugs, diseases, symptoms...',
            searchButton: 'Search',
            quickNav: 'Quick Navigation',
            news: 'Latest News'
        },
        knowledge: {
            title: 'Medication Knowledge Base',
            search: 'Search knowledge base...',
            filter: 'Filters',
            categories: 'Categories',
            tumorType: 'Tumor Type',
            drugCategory: 'Drug Category',
            symptoms: 'Symptoms',
            comorbidities: 'Comorbidities'
        },
        personal: {
            title: 'Personalized Center',
            desc: 'Fill in your information to get personalized recommendations',
            privacy: 'Privacy Notice',
            privacyText: 'The information you provide will only be used to generate personalized recommendations and will not be stored or shared with third parties. We value your privacy.',
            submit: 'Submit for Recommendations'
        },
        topics: {
            title: 'Topics',
            desc: 'Featured articles and video resources'
        },
        about: {
            title: 'About Us',
            intro: 'Introduction',
            team: 'Our Team',
            contact: 'Contact Us'
        }
    }
};

// 当前语言
let currentLang = localStorage.getItem('lang') || 'zh';

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitch();
    initNavigation();
    initSearch();
    initFacetFilters();
    initForms();
});

// 语言切换功能
function initLanguageSwitch() {
    const langButtons = document.querySelectorAll('.lang-switch button');

    // 设置当前语言状态
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });

    // 绑定切换事件
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const newLang = this.dataset.lang;
            setLanguage(newLang);
        });
    });

    // 应用当前语言
    applyLanguage(currentLang);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // 更新按钮状态
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // 应用语言
    applyLanguage(lang);
}

function applyLanguage(lang) {
    // 设置文档语言属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // 更新带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const keys = key.split('.');
        let value = translations[lang];

        for (const k of keys) {
            value = value[k];
        }

        if (value) {
            el.textContent = value;
        }
    });

    // 更新带有 data-i18n-placeholder 属性的输入框
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const keys = key.split('.');
        let value = translations[lang];

        for (const k of keys) {
            value = value[k];
        }

        if (value) {
            el.placeholder = value;
        }
    });

    // 更新语言特定的内容
    updateLanguageSpecificContent(lang);
}

function updateLanguageSpecificContent(lang) {
    // 切换语言特定的内容显示
    document.querySelectorAll('.lang-zh').forEach(el => {
        el.classList.toggle('hidden', lang !== 'zh');
    });
    document.querySelectorAll('.lang-en').forEach(el => {
        el.classList.toggle('hidden', lang !== 'en');
    });
}

// 导航功能
function initNavigation() {
    // 高亮当前页面
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // 移动端菜单切换（如果需要）
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// 搜索功能
function initSearch() {
    const searchForms = document.querySelectorAll('.search-form');

    searchForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input[type="text"]');
            const query = searchInput.value.trim();

            if (query) {
                performSearch(query);
            }
        });
    });
}

function performSearch(query) {
    // 简单的搜索实现 - 实际应用中应该连接到后端API
    console.log('Searching for:', query);

    // 这里可以添加搜索逻辑
    // 例如：过滤文章、跳转到搜索结果页等

    // 示例：显示搜索提示
    alert(currentLang === 'zh'
        ? `正在搜索: ${query}`
        : `Searching for: ${query}`);
}

// 分面筛选功能
function initFacetFilters() {
    const facetOptions = document.querySelectorAll('.facet-option');

    facetOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 切换选中状态
            this.classList.toggle('active');

            // 获取所有选中的筛选条件
            const selectedFilters = getSelectedFilters();

            // 应用筛选
            applyFilters(selectedFilters);
        });
    });
}

function getSelectedFilters() {
    const filters = {};

    document.querySelectorAll('.facet-group').forEach(group => {
        const groupName = group.dataset.filter;
        const selected = [];

        group.querySelectorAll('.facet-option.active').forEach(option => {
            selected.push(option.dataset.value);
        });

        if (selected.length > 0) {
            filters[groupName] = selected;
        }
    });

    return filters;
}

function applyFilters(filters) {
    console.log('Applying filters:', filters);

    // 这里应该实现实际的筛选逻辑
    // 例如：过滤显示的文章、更新URL参数等
}

// 表单功能
function initForms() {
    const forms = document.querySelectorAll('form[data-form-type]');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formType = this.dataset.formType;
            handleFormSubmit(this, formType);
        });
    });
}

function handleFormSubmit(form, formType) {
    // 收集表单数据
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log(`Form submitted (${formType}):`, data);

    // 根据表单类型处理
    switch(formType) {
        case 'personalization':
            handlePersonalizationForm(data);
            break;
        case 'contact':
            handleContactForm(data);
            break;
        default:
            console.log('Unknown form type:', formType);
    }
}

function handlePersonalizationForm(data) {
    // 处理个性化表单提交
    console.log('Processing personalization data:', data);

    // 这里应该发送数据到后端API
    // 并显示个性化推荐结果

    // 示例：显示提交成功消息
    const message = currentLang === 'zh'
        ? '感谢您的提交！正在生成个性化推荐...'
        : 'Thank you for your submission! Generating personalized recommendations...';

    showNotification(message, 'success');
}

function handleContactForm(data) {
    // 处理联系表单提交
    console.log('Processing contact data:', data);

    const message = currentLang === 'zh'
        ? '感谢您的留言！我们会尽快回复您。'
        : 'Thank you for your message! We will reply soon.';

    showNotification(message, 'success');
}

// 通知功能
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 工具函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function formatDate(date, lang = 'zh') {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return date.toLocaleDateString(
        lang === 'zh' ? 'zh-CN' : 'en-US',
        options
    );
}

// 导出函数供其他页面使用
window.PengPengApp = {
    setLanguage,
    getCurrentLanguage: () => currentLang,
    showNotification,
    formatDate
};
