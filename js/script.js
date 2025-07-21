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
            window.location.href = '/html/services.html';
        });
    }

    // 邮件按钮跳转
    const emailButton = document.querySelector('.email-button');
    if (emailButton) {
        emailButton.addEventListener('click', () => {
            window.location.href = 'mailto:1454055041@qq.com';
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            const header = document.querySelector('header');
            const headerHeight = header.offsetHeight;
            mobileMenu.style.top = `${headerHeight}px`;
            mobileMenu.style.maxHeight = `calc(100vh - ${headerHeight}px)`;
        }
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
        { title: '网站开发', category: '服务', page: '/html/services.html', description: '从静态网站到复杂的动态应用，我们提供全栈开发服务。', anchor: 'website-dev' },
        { title: 'UI/UX设计', category: '服务', page: '/html/services.html', description: '设计直观、吸引人的用户界面，提升用户体验。', anchor: 'ui-ux-design' },
        { title: '品牌策划', category: '服务', page: '/html/services.html', description: '通过视觉设计和内容策略，塑造独特的品牌形象。', anchor: 'brand-planning' },
        { title: '数字营销', category: '服务', page: '/html/services.html', description: '通过SEO、社交媒体和广告，提升您的在线影响力。', anchor: 'digital-marketing' },

        { title: '前端开发工程师', category: '职位', page: '/html/recruit.html', description: '精通HTML、CSS、JavaScript，熟悉React或Vue。', anchor: 'frontend-dev' },
        { title: 'UI/UX设计师', category: '职位', page: '/html/recruit.html', description: '熟练使用Figma或Adobe XD，有交互设计经验。', anchor: 'ui-ux-designer' },
        { title: '品牌策划专员', category: '职位', page: '/html/recruit.html', description: '优秀的文案能力和品牌策略经验。', anchor: 'brand-planner' },

        { title: '寒露1726', category: '团队成员', page: '/html/about.html', description: '创始人，程序员，建模师，拥有丰富的编程和3D建模经验。', anchor: 'hanlu1726' },
        { title: 'Innefews', category: '团队成员', page: '/html/about.html', description: '创始人，副负责人，擅长项目管理和创意策划。', anchor: 'innefews' },
        { title: '琪露诺', category: '团队成员', page: '/html/about.html', description: '成员，擅长创意设计。', anchor: 'cirno' },

        { title: '1.求最小公倍数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '1.求最小公倍数.py', anchor: 'py least common multiple'},
        { title: '2.最高和最矮.py', category:'Py代码示例', page:'/html/resource/Python.html', description: '2.最高和最矮.py', anchor: 'highest and lowest'},
        { title: '3.干支纪年.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '3.干支纪年.py', anchor: 'Chinese sexagenary cycle'},
        { title: '4.判断正数负数还是零.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '4.判断正数负数还是零.py', anchor: 'judge positive negative or zero'},
        { title: '5.反转三位数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '5.反转三位数.py', anchor: 'reverse three digits'},
        { title: '6.凯撒密码.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '6.凯撒密码.py', anchor: 'Caesar cipher'},
        { title: '7.求组合数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '7.求组合数.py', anchor: 'combination'},
        { title: '8.判断BMI.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '8.判断BMI.py', anchor: 'judge BMI'},
        { title: '9.求阶乘和.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '9.求阶乘和.py', anchor: 'factorial sum'},
        { title: '10.求pi的近似值.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '10.求pi的近似值.py', anchor: 'approximate pi'},
        { title: '11.提高成绩.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '11.提高成绩.py', anchor: 'improve score'},
        { title: '12.猜数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '12.猜数.py', anchor: 'guess number'},
        { title: '13.存钱旅游.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '13.存钱旅游.py', anchor: 'save money for travel'},
        { title: '14.尼拉坎特哈级数求Π.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '14.尼拉坎特哈级数求Π.py', anchor: 'Nilakantha series for Pi'},
        { title: '15.求圆的周长和面积.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '15.求圆的周长和面积.py', anchor: 'circle circumference and area'},
        { title: '16.打印矩形.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '16.打印矩形.py', anchor: 'print rectangle'},
        { title: '17.三角形面积.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '17.三角形面积.py', anchor: 'triangle area'},
        { title: '18.区间测速.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '18.区间测速.py', anchor: 'interval speed'},
        { title: '19.水仙花数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '19.水仙花数.py', anchor: 'Narcissus number'},
        { title: '20.输出1千到1万之间的素数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '20.输出1千到1万之间的素数.py', anchor: 'output prime numbers between 1000 and 10000'},
        { title: '21.找出三个数中最大的数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '21.找出三个数中最大的数.py', anchor: 'find the largest of three numbers'},
        { title: '22.打的计费.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '22.打的计费.py', anchor: 'taxi fare calculation'},
        { title: '23.计算1-2+3-4…+99-100的值.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '23.计算1-2+3-4…+99-100的值.py', anchor: 'calculate alternating sum'},
        { title: '24.麦粒.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '24.麦粒.py', anchor: 'wheat grains'},
        { title: '25.编码.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '25.编码.py', anchor: 'encoding'},
        { title: '26.极差.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '26.极差.py', anchor: 'range'},
        { title: '27.能力值.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '27.能力值.py', anchor: 'ability value'},
        { title: '28.值班.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '28.值班.py', anchor: 'duty'},
        { title: '29.五角星.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '29.五角星.py', anchor: 'pentagram'},
        { title: '30.八边形.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '30.八边形.py', anchor: 'octagon'},
        { title: '31.八角图形.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '31.八角图形.py', anchor: 'octagonal shape'},
        { title: '32.圆的面积计算.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '32.圆的面积计算.py', anchor: 'circle area calculation'},
        { title: '33.奥运五环.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '33.奥运五环.py', anchor: 'Olympic rings'},
        { title: '34.输出学生信息.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '34.输出学生信息.py', anchor: 'output student information'},
        { title: '35.三角形周长和面积.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '35.三角形周长和面积.py', anchor: 'triangle perimeter and area'},
        { title: '36.正向索引和反向索引.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '36.正向索引和反向索引.py', anchor: 'forward and backward indexing'},
        { title: '37.五星红旗.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '37.五星红旗.py', anchor: 'Five-star red flag'},
        { title: '38.正向切片.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '38.正向切片.py', anchor: 'forward slicing'},
        { title: '39存款利息.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '39存款利息.py', anchor: 'deposit interest'},
        { title: '40.反向切片.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '40.反向切片.py', anchor: 'backward slicing'},
        { title: '41.藏头诗.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '41.藏头诗.py', anchor: 'acrostic poem'},
        { title: '42.回文诗.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '42.回文诗.py', anchor: 'palindrome poem'},
        { title: '43.字符串压缩.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '43.字符串压缩.py', anchor: 'string compression'},
        { title: '44.手机号替换.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '44.手机号替换.py', anchor: 'phone number replacement'},
        { title: '45.字符串拼接.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '45.字符串拼接.py', anchor: 'string concatenation'},
        { title: '46.身份证识别生日.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '46.身份证识别生日.py', anchor: 'ID card birthday recognition'},
        { title: '47.月份缩写.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '47.月份缩写.py', anchor: 'month abbreviation'},
        { title: '48.统计字符个数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '48.统计字符个数.py', anchor: 'count characters'},
        { title: '49.飞行员报考资格.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '49.飞行员报考资格.py', anchor: 'pilot qualification'},
        { title: '50.学费计算.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '50.学费计算.py', anchor: 'tuition calculation'},
        { title: '51.成绩等级划分.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '51.成绩等级划分.py', anchor: 'grade classification'},
        { title: '52.日期格式化输出.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '52.日期格式化输出.py', anchor: 'date formatting'},
        { title: '53.整数四则运算及格式化输出.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '53.整数四则运算及格式化输出.py', anchor: 'integer arithmetic and formatting'},
        { title: '54.平方根格式化.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '54.平方根格式化.py', anchor: 'square root formatting'},
        { title: '55.模拟打印超市购物小票.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '55.模拟打印超市购物小票.py', anchor: 'supermarket receipt simulation'},
        { title: '56.商店找钱给顾客.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '56.商店找钱给顾客.py', anchor: 'change for customer'},
        { title: '57.每行一个数字输出 0 -（n-1）.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '57.每行一个数字输出 0 -（n-1）.py', anchor: 'output numbers from 0 to n-1'},
        { title: '58.在一行内输出 0 -（n-1），每个数字后输出一个空格.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '58.在一行内输出 0 -（n-1），每个数字后输出一个空格.py', anchor: 'output numbers with spaces'},
        { title: '59.在一行内输出 0 -（n-1），每个数字间没有空格.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '59.在一行内输出 0 -（n-1），每个数字间没有空格.py', anchor: 'output numbers without spaces'},
        { title: '60.在一行内输出 0 -（n-1），每个数字后输出一个逗号.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '60.在一行内输出 0 -（n-1），每个数字后输出一个逗号.py', anchor: 'output numbers with commas'},
        { title: '61.当i不是最后一个数时，每个数字后输出一个逗号,否则无逗号.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '61.当i不是最后一个数时，每个数字后输出一个逗号,否则无逗号.py', anchor: 'output numbers with conditional commas'},
        { title: '62.闰年判定.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '62.闰年判定.py', anchor: 'leap year determination'},
        { title: '63.20以内奇数的积.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '63.20以内奇数的积.py', anchor: 'product of odd numbers under 20'},
        { title: '64.根据出生年份判断是否成年人.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '64.根据出生年份判断是否成年人.py', anchor: 'adult determination'},
        { title: '65.两个整数升序排列并输出.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '65.两个整数升序排列并输出.py', anchor: 'sort two integers'},
        { title: '66.求两个数的较大者.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '66.求两个数的较大者.py', anchor: 'find larger of two numbers'},
        { title: '67.计算阶梯电价.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '67.计算阶梯电价.py', anchor: 'calculate tiered electricity price'},
        { title: '68.简易AQI.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '68.简易AQI.py', anchor: 'simple AQI'},
        { title: '69.判断三角形是否成立并计算面积.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '69.判断三角形是否成立并计算面积.py', anchor: 'triangle validity and area'},
        { title: '70.简易版个税计算.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '70.简易版个税计算.py', anchor: 'simple income tax calculation'},
        { title: '71.求学生某门课的平均成绩.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '71.求学生某门课的平均成绩.py', anchor: 'average grade for a course'},
        { title: '72.统计字符个数（新）.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '72.统计字符个数（新）.py', anchor: 'count characters new'},
        { title: '73.加减乘除测试程序.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '73.加减乘除测试程序.py', anchor: 'arithmetic test program'},
        { title: '74.石头剪刀布.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '74.石头剪刀布.py', anchor: 'rock paper scissors'},
        { title: '75.Unicode编码编码方法以统计中文字符.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '75.Unicode编码编码方法以统计中文字符.py', anchor: 'Unicode encoding for Chinese characters'},
        { title: '76.分数求和.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '76.分数求和.py', anchor: 'fraction sum'},
        { title: '77.1000以内奇数的积.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '77.1000以内奇数的积.py', anchor: 'product of odd numbers under 1000'},
        { title: '78.输出上三角形九九乘法表.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '78.输出上三角形九九乘法表.py', anchor: 'upper triangular multiplication table'},
        { title: '79.求n的阶乘.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '79.求n的阶乘.py', anchor: 'factorial of n'},
        { title: '80.列出1~200范围内的所有素数，要求每行输出10个数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '80.列出1~200范围内的所有素数，要求每行输出10个数.py', anchor: 'list primes from 1 to 200'},
        { title: '81.百钱买百鸡.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '81.百钱买百鸡.py', anchor: 'hundred money hundred chickens'},
        { title: '82.斐波那契数列.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '82.斐波那契数列.py', anchor: 'Fibonacci sequence'},
        { title: '83.回文数.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '83.回文数.py', anchor: 'palindrome number'},
        { title: '84.用户登录.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '84.用户登录.py', anchor: 'user login'},
        { title: '85.水仙花数（新）.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '85.水仙花数（新）.py', anchor: 'Narcissus number new'},
        { title: '86.元组统计天气.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '86.元组统计天气.py', anchor: 'tuple weather statistics'},
        { title: '87.学生成绩单.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '87.学生成绩单.py', anchor: 'student report card'},
        { title: '88.生成扑克牌.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '88.生成扑克牌.py', anchor: 'generate playing cards'},
        { title: '89.求列表第K大元素.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '89.求列表第K大元素.py', anchor: 'find Kth largest element in list'},
        { title: '90.双色球.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '90.双色球.py', anchor: 'Double Chromosphere'},
        { title: '91.列表奇数和偶数分开.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '91.列表奇数和偶数分开.py', anchor: 'separate odd and even numbers in list'},
        { title: '92.字典古诗作者.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '92.字典古诗作者.py', anchor: 'dictionary ancient poetry authors'},
        { title: '93.用户登录检测模块.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '93.用户登录检测模块.py', anchor: 'user login detection module'},
        { title: '94.字典用户登录.py', category: 'Py代码示例', page: '/html/resource/Python.html', description: '94.字典用户登录.py', anchor: 'dictionary user login'},

        { title: '1.HelloWorld程序.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '1.HelloWorld程序.zip', anchor: 'hello world program'},
        { title: '2.变量.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '2.变量.zip', anchor: 'variables'},
        { title: '3.常函数和const修饰变量.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '3.常函数和const修饰变量.zip', anchor: 'constant functions and const variables'},
        { title: '4.sizeof关键字.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '4.sizeof关键字.zip', anchor: 'sizeof keyword'},
        { title: '5.实型（浮点型）.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '5.实型（浮点型）.zip', anchor: 'floating point type'},
        { title: '6.Character字符型.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '6.Character字符型.zip', anchor: 'character type'},
        { title: '7.转义字符.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '7.转义字符.zip', anchor: 'escape characters'},
        { title: '8.String字符串型.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '8.String字符串型.zip', anchor: 'string type'},
        { title: '9.Bool类型.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '9.Bool类型.zip', anchor: 'bool type'},
        { title: '10.数据的输入.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '10.数据的输入.zip', anchor: 'data input'},
        { title: '11.算数运算符.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '11.算数运算符.zip', anchor: 'arithmetic operators'},
        { title: '12.赋值运算符.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '12.赋值运算符.zip', anchor: 'assignment operators'},
        { title: '13.比较运算符.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '13.比较运算符.zip', anchor: 'comparison operators'},
        { title: '14.逻辑运算符.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '14.逻辑运算符.zip', anchor: 'logical operators'},
        { title: '15.if语句.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '15.if语句.zip', anchor: 'if statement'},
        { title: '16.三只小猪称体重.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '16.三只小猪称体重.zip', anchor: 'three little pigs weight'},
        { title: '17.三目运算符.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '17.三目运算符.zip', anchor: 'ternary operator'},
        { title: '18.switch语句.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '18.switch语句.zip', anchor: 'switch statement'},
        { title: '19.while循环语句.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '19.while循环语句.zip', anchor: 'while loop statement'},
        { title: '20.猜数字（while循环语句）.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '20猜数字（while循环语句）.zip', anchor: 'guess number while loop'},
        { title: '21.Do···while循环语句.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '21.Do···while循环语句.zip', anchor: 'do while loop statement'},
        { title: '22.水仙花数.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '22.水仙花数.zip', anchor: 'Narcissus number'},
        { title: '23.for循环语句.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '23.for循环语句.zip', anchor: 'for loop statement'},
        { title: '24.敲桌子.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '24.敲桌子.zip', anchor: 'knock table'},
        { title: '25.嵌套循环.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '25.嵌套循环.zip', anchor: 'nested loops'},
        { title: '26.乘法口诀表.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '26.乘法口诀表.zip', anchor: 'multiplication table'},
        { title: '27.break语句.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '27.break语句.zip', anchor: 'break statement'},
        { title: '28.continue语句.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '28.continue语句.zip', anchor: 'continue statement'},
        { title: '29.goto语句.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '29.goto语句.zip', anchor: 'goto statement'},
        { title: '30.一维数组定义方式.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '30.一维数组定义方式.zip', anchor: 'one-dimensional array definition'},
        { title: '31.一维数组组名.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '31.一维数组组名.zip', anchor: 'one-dimensional array name'},
        { title: '32.五只小猪称体重.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '32.五只小猪称体重.zip', anchor: 'five little pigs weight'},
        { title: '33.数组元素逆置.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '33.数组元素逆置.zip', anchor: 'reverse array elements'},
        { title: '34.冒泡排序.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '34.冒泡排序.zip', anchor: 'bubble sort'},
        { title: '35.二维数组定义方式.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '35.二维数组定义方式.zip', anchor: 'two-dimensional array definition'},
        { title: '36.二维数组组名.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '36.二维数组组名.zip', anchor: 'two-dimensional array name'},
        { title: '37.考试成绩统计.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '37.考试成绩统计.zip', anchor: 'exam score statistics'},
        { title: '38.函数的定义.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '38.函数的定义.zip', anchor: 'function definition'},
        { title: '39.函数的调用.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '39.函数的调用.zip', anchor: 'function callfunction call'},
        { title: '40.值传递.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '40.值传递.zip', anchor: 'value passing'},
        { title: '41.函数的常见形式.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '41.函数的常见形式.zip', anchor: 'common function forms'},
        { title: '42.函数的声明.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '42.函数的声明.zip', anchor: 'function declaration'},
        { title: '43.函数的分文件编写.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '43.函数的分文件编写.zip', anchor: 'function file separation'},
        { title: '44.指针变量的定义和使用.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '44.指针变量的定义和使用.zip', anchor: 'pointer variable definition and usage'},
        { title: '45.指针所占内存空间.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '45.指针所占内存空间.zip', anchor: 'pointer memory size'},
        { title: '46.空指针和野指针.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '46.空指针和野指针.zip', anchor: 'null and wild pointers'},
        { title: '47.const修饰指针.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '47.const修饰指针.zip', anchor: 'const pointer'},
        { title: '48.指针和数组.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '48.指针和数组.zip', anchor: 'pointer and array'},
        { title: '49.指针和函数.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '49.指针和函数.zip', anchor: 'pointer and function'},
        { title: '50.指针、数组、函数.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '50.指针、数组、函数.zip', anchor: 'pointer array function'},
        { title: '51.结构体定义和使用.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '51.结构体定义和使用.zip', anchor: 'structure definition and usage'},
        { title: '52.结构体数组.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '52.结构体数组.zip', anchor: 'structure array'},
        { title: '53.结构体指针.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '53.结构体指针.zip', anchor: 'structure pointer'},
        { title: '54.结构体嵌套结构体.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '54.结构体嵌套结构体.zip', anchor: 'nested structure'},
        { title: '55.结构体做函数参数.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '55.结构体做函数参数.zip', anchor: 'structure as function parameter'},
        { title: '56.结构体中const使用场景.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '56.结构体中const使用场景.zip', anchor: 'const in structure'},
        { title: '57.结构体案例.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '57.结构体案例.zip', anchor: 'structure case'},
        { title: '通讯录管理系统.zip', category: 'C++项目示例', page: '/html/resource/C plus plus.html', description: '通讯录管理系统.zip', anchor: 'address book management system'},

        { title: '1.HelloWorld程序.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '1.HelloWorld程序.zip', anchor: 'hello world program'},
        { title: '2.字面量.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '2.字面量.zip', anchor: 'literals'},
        { title: '3.常用的数据类型.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '3.常用的数据类型.zip', anchor: 'common data types'},
        { title: '4.变量的注意事项.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '4.变量的注意事项.zip', anchor: 'variable considerations'},
        { title: '5.公交车.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '5.公交车.zip', anchor: 'bus'},
        { title: '6.定义8种基本数据类型变量.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '6.定义8种基本数据类型变量.zip', anchor: 'define 8 basic data types'},
        { title: '7.定义5个变量记录老师的信息并打印.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '7.定义5个变量记录老师的信息并打印.zip', anchor: 'define 5 variables for teacher info'},
        { title: '8.将（电影名称，主演，年份，评分）四个信息选择不同类型的变量，随后打印出来.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '8.将（电影名称，主演，年份，评分）四个信息选择不同类型的变量，随后打印出来.zip', anchor: 'movie info variables'},
        { title: '9.选择其中一部手机，将（手机价格，手机品牌）两个信息选择不同类型的变量，随后打印出来.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '9.选择其中一部手机，将（手机价格，手机品牌）两个信息选择不同类型的变量，随后打印出来.zip', anchor: 'phone info variables'},
        { title: '10.键盘录入.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '10.键盘录入.zip', anchor: 'keyboard input'},
        { title: '11.算数运算符.zip', category: 'Java项目示例', page: '/html/resource/Java.html', description: '11.算数运算符.zip', anchor: 'arithmetic operators'},

        { title: '1.双开门.zip', category: 'HTML项目示例', page: '/html/resource/HTML plus CSS plus Mobile Web.html', description: '1.双开门.zip', anchor: 'double doors'},

        { title: '沙二M4A4中路五杀', category: 'CS2', page: '/html/works/Hanlu1726 works/CS2/CS2.html', description: '沙二M4A4中路五杀', anchor: 'Dust2 M4A4 Mid Five Kill'},
        { title: '假日希腊控场', category: 'CS2', page: '/html/works/Hanlu1726 works/CS2/CS2.html', description: '假日希腊控场', anchor: 'Holiday Greece Control'},

        { title: '这就是我与欧申纳斯的羁绊', category: '深空之眼', page: '/html/works/Hanlu1726 works/Eyes of the Depths/Eyes of the Depths.html', description: '这就是我与欧申纳斯的羁绊', anchor: 'This is my bond with Oshenus'},
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
                    if (result.anchor) {
                        window.location.href = `${result.page}#${result.anchor}`; // 跳转到目标页面和锚点
                        setTimeout(() => {
                            const nav = document.querySelector('nav'); // 获取导航栏元素
                            const navHeight = nav ? nav.offsetHeight : 60; // 动态获取高度，默认 60px
                            const targetElement = document.getElementById(result.anchor); // 获取目标锚点元素
                            if (targetElement) {
                                const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight; // 计算偏移位置
                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth' // 平滑滚动
                                });
                            }
                        }, 100); // 延迟 100ms 确保页面加载
                    } else {
                        window.location.href = result.page; // 无锚点直接跳转
                    }
                    input.value = result.title; // 设置输入框值
                    autocompleteList.style.display = 'none'; // 隐藏自动补全列表
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
                if (firstResult.anchor) {
                    window.location.href = `${firstResult.page}#${firstResult.anchor}`; // 跳转到目标页面和锚点
                    setTimeout(() => {
                        const nav = document.querySelector('nav'); // 获取导航栏元素
                        const navHeight = nav ? nav.offsetHeight : 60; // 动态获取高度，默认 60px
                        const targetElement = document.getElementById(firstResult.anchor); // 获取目标锚点元素
                        if (targetElement) {
                            const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight; // 计算偏移位置
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth' // 平滑滚动
                            });
                        }
                    }, 100); // 延迟 100ms 确保页面加载
                } else {
                    window.location.href = firstResult.page; // 无锚点直接跳转
                }
                autocompleteList.style.display = 'none'; // 隐藏自动补全列表
            }
        }
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
    }); // <-- 补充 forEach 的闭合括号
});

// 移动端菜单外部点击关闭
document.addEventListener('click', (e) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});