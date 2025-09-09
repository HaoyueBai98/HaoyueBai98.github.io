// 移动端导航菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接时关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// 平滑滚动到指定部分
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 考虑导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// 滚动时高亮当前部分
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.hero-text, .hero-image, .research-item, .publication-item');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in-up');
        }, index * 100);
    });
});

// 打字机效果（可选）
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 如果页面有打字机效果的元素，可以启用
// const typeElement = document.querySelector('.typewriter');
// if (typeElement) {
//     typeWriter(typeElement, typeElement.textContent, 50);
// }

// 返回顶部按钮
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background-color: #3498db;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(button);
    
    // 显示/隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // 点击返回顶部
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 悬停效果
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#2980b9';
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#3498db';
        button.style.transform = 'translateY(0)';
    });
}

// 创建返回顶部按钮
createBackToTopButton();

// 懒加载图片（如果有的话）
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 如果页面有懒加载图片，启用懒加载
if (document.querySelectorAll('img[data-src]').length > 0) {
    lazyLoadImages();
}

// 表单验证（如果有联系表单的话）
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// 添加错误样式
const style = document.createElement('style');
style.textContent = `
    .error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 5px rgba(231, 76, 60, 0.3) !important;
    }
`;
document.head.appendChild(style);

// 页面性能优化：防抖函数
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

// 优化滚动事件
const debouncedScrollHandler = debounce(() => {
    // 滚动相关的处理逻辑
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Console welcome message
console.log('%cWelcome to Haoyue Bai\'s Academic Homepage!', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%cIf you have any suggestions or find bugs, please feel free to contact me!', 'color: #7f8c8d; font-size: 12px;');
