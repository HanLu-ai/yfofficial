document.addEventListener('DOMContentLoaded', () => {
    // 创建星星动画容器
    const starsContainer = document.createElement('div');
    starsContainer.id = 'stars';
    document.body.appendChild(starsContainer);

    // 生成 100 个星星
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        // 为每颗星星设置随机的速度和角度
        const speed = Math.random() * 50 + 20; // 速度范围：20px/s 到 70px/s
        const angle = Math.random() * 2 * Math.PI; // 随机角度（弧度）
        star.style.setProperty('--velocity-x', `${Math.cos(angle) * speed}px`);
        star.style.setProperty('--velocity-y', `${Math.sin(angle) * speed}px`);
        starsContainer.appendChild(star);
    }

    // 应用保存的主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }

    // 主题切换按钮逻辑
    document.querySelectorAll('.theme-toggle').forEach(button => {
        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            button.textContent = isDark ? '切换白天模式' : '切换黑夜模式';
        });
    });

    // 返回顶部按钮逻辑
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 服务按钮跳转
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            window.location.href = 'services.html';
        });
    }

    // 邮件按钮跳转
    const emailButton = document.querySelector('.email-button');
    if (emailButton) {
        emailButton.addEventListener('click', () => {
            window.location.href = 'mailto:1454055041@qq.com';
        });
    }

    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // 获取背景主题选择下拉框
    const backgroundSelect = document.getElementById('background-theme');
    // 如果背景选择框存在
    if (backgroundSelect) {
        // 从本地存储获取保存的背景主题，默认为 'starry'
        const savedBackground = localStorage.getItem('background') || 'starry';
        // 设置页面 body 的类名为保存的背景主题
        document.body.className = savedBackground;
        // 如果保存的主题是暗黑模式，添加 'dark-mode' 类
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
        // 设置下拉框的默认值为保存的背景主题
        backgroundSelect.value = savedBackground;
        // 为背景选择框添加变更事件
        backgroundSelect.addEventListener('change', () => {
            // 获取用户选择的背景主题
            const theme = backgroundSelect.value;
            // 更新页面 body 的类名为新选择的主题
            document.body.className = theme;
            // 如果保存的主题是暗黑模式，添加 'dark-mode' 类
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
            }
            // 保存新选择的背景主题到本地存储
            localStorage.setItem('background', theme);
            // 如果切换到非星空主题，移除所有星星和流星
            if (theme !== 'starry') {
                document.querySelectorAll('.star, .meteor').forEach(elem => elem.remove());
            } else {
                // 如果切换回星空主题，重新生成星星
                for (let i = 0; i < 100; i++) {
                    const star = document.createElement('div');
                    star.className = 'star';
                    star.style.width = `${Math.random() * 3}px`;
                    star.style.height = star.style.width;
                    star.style.left = `${Math.random() * 100}%`;
                    star.style.top = `${Math.random() * 100}%`;
                    const speed = Math.random() * 50 + 20;
                    const angle = Math.random() * 2 * Math.PI;
                    star.style.setProperty('--velocity-x', `${Math.cos(angle) * speed}px`);
                    star.style.setProperty('--velocity-y', `${Math.sin(angle) * speed}px`);
                    starsContainer.appendChild(star);
                }
            }
        });
    }

    // 访问计数器
    const counter = document.querySelector('.visit-count');
    if (counter) {
        let visits = parseInt(localStorage.getItem('visits') || '0');
        visits += 1;
        localStorage.setItem('visits', visits);
        counter.textContent = visits;
    }

    // 搜索功能数据【新增定位功能：为每项添加 anchor 属性】
    const searchData = [
        { title: '网站开发', category: '服务', page: 'services.html', description: '从静态网站到复杂的动态应用，我们提供全栈开发服务。', anchor: 'website-dev' },
        { title: 'UI/UX设计', category: '服务', page: 'services.html', description: '设计直观、吸引人的用户界面，提升用户体验。', anchor: 'ui-ux-design' },
        { title: '品牌策划', category: '服务', page: 'services.html', description: '通过视觉设计和内容策略，塑造独特的品牌形象。', anchor: 'brand-planning' },
        { title: '数字营销', category: '服务', page: 'services.html', description: '通过SEO、社交媒体和广告，提升您的在线影响力。', anchor: 'digital-marketing' },
        { title: '前端开发工程师', category: '职位', page: 'recruit.html', description: '精通HTML、CSS、JavaScript，熟悉React或Vue。', anchor: 'frontend-dev' },
        { title: 'UI/UX设计师', category: '职位', page: 'recruit.html', description: '熟练使用Figma或Adobe XD，有交互设计经验。', anchor: 'ui-ux-designer' },
        { title: '品牌策划专员', category: '职位', page: 'recruit.html', description: '优秀的文案能力和品牌策略经验。', anchor: 'brand-planner' },
        { title: '寒露1726', category: '团队成员', page: 'about.html', description: '创始人，程序员，建模师，拥有丰富的编程和3D建模经验。', anchor: 'hanlu1726' },
        { title: 'Innefews', category: '团队成员', page: 'about.html', description: '创始人，副负责人，擅长项目管理和创意策划。', anchor: 'innefews' },
        { title: '琪露诺', category: '团队成员', page: 'about.html', description: '成员，擅长创意设计。', anchor: 'cirno' },
    ];

    // 搜索框逻辑
    const searchInputs = document.querySelectorAll('.search-input');
    const autocompleteLists = document.querySelectorAll('.autocomplete-list');

    searchInputs.forEach((input, index) => {
        const autocompleteList = autocompleteLists[index];

        input.addEventListener('input', () => {
            const query = input.value.trim().toLowerCase();
            autocompleteList.innerHTML = ''; // 清空自动补全列表

            if (query.length === 0) {
                autocompleteList.style.display = 'none';
                return;
            }

            // 过滤搜索数据
            const results = searchData.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
            );

            if (results.length === 0) {
                autocompleteList.style.display = 'none';
                return;
            }

            // 显示自动补全列表
            autocompleteList.style.display = 'block';
            results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = `${result.title} (${result.category})`;
                li.addEventListener('click', handleSelect);
                li.addEventListener('touchstart', handleSelect);

                function handleSelect() {
                    // 【新增定位功能：跳转并定位到指定 anchor】
                    if (result.anchor) {
                        window.location.href = `${result.page}#${result.anchor}`;
                    } else {
                        window.location.href = result.page;
                    }
                    input.value = result.title;
                    autocompleteList.style.display = 'none';
                }
                autocompleteList.appendChild(li);
            });
        });

        // 点击外部隐藏自动补全列表
        document.addEventListener('click', (e) => {
            if (!input.contains(e.target) && !autocompleteList.contains(e.target)) {
                autocompleteList.style.display = 'none';
            }
        });

        // 按回车键跳转到第一个匹配结果
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && autocompleteList.children.length > 0) {
                const firstResult = searchData.find(item =>
                    item.title.toLowerCase().includes(input.value.trim().toLowerCase()) ||
                    item.description.toLowerCase().includes(input.value.trim().toLowerCase())
                );
                if (firstResult) {
                    // 【新增定位功能：回车跳转并定位】
                    if (firstResult.anchor) {
                        window.location.href = `${firstResult.page}#${firstResult.anchor}`;
                    } else {
                        window.location.href = firstResult.page;
                    }
                    autocompleteList.style.display = 'none';
                }
            }
        });
    });

    // 星星运动动画
    function animateStars() {
        if (!document.body.classList.contains('starry')) return;
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            let x = parseFloat(star.style.left) / 100 * window.innerWidth;
            let y = parseFloat(star.style.top) / 100 * window.innerHeight;
            const vx = parseFloat(star.style.getPropertyValue('--velocity-x'));
            const vy = parseFloat(star.style.getPropertyValue('--velocity-y'));
            x += vx / 60; // 每帧移动（假设 60fps）
            y += vy / 60;
            // 边界反弹
            if (x < 0 || x > window.innerWidth) {
                star.style.setProperty('--velocity-x', `${-vx}px`);
            }
            if (y < 0 || y > window.innerHeight) {
                star.style.setProperty('--velocity-y', `${-vy}px`);
            }
            star.style.left = `${(x / window.innerWidth) * 100}%`;
            star.style.top = `${(y / window.innerHeight) * 100}%`;
        });
        requestAnimationFrame(animateStars);
    }
    if (document.body.classList.contains('starry')) {
        requestAnimationFrame(animateStars);
    }

    // 图片懒加载逻辑,示例：<img data-src="path/to/image.jpg" alt="描述">
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '0px 0px 200px 0px', // 提前 200px 开始加载
        threshold: 0.1
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // 流星生成函数
    function createMeteor() {
        // 仅在星空主题下生成流星
        if (!document.body.classList.contains('starry')) return;

        const starsContainer = document.getElementById('stars');
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        // 随机生成起始位置（屏幕顶部，水平随机）
        meteor.style.left = `${Math.random() * 100}%`;
        meteor.style.top = `-${Math.random() * 20}px`; // 从屏幕顶部上方开始
        // 随机动画持续时间
        meteor.style.animationDuration = `${2 + Math.random() * 2}s`; // 2s 到 4s
        starsContainer.appendChild(meteor);

        // 动画结束后移除流星
        meteor.addEventListener('animationend', () => {
            meteor.remove();
        });
    }

    // 每隔 300ms 生成流星，增加流星数量
    setInterval(createMeteor, 300);

    // 动态进度条逻辑
    // 创建进度条容器和进度条元素
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressContainer.appendChild(progressBar);
    document.body.prepend(progressContainer);

    // 更新进度条宽度
    function updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // 监听滚动事件
    window.addEventListener('scroll', updateProgressBar);
    // 页面加载时初始化进度条
    updateProgressBar();
});
