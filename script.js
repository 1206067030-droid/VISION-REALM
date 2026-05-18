// 产品数据
const products = [
  {
    id: 1,
    name: '經典紅色旗袍',
    nameEn: 'Classic Red Qipao',
    price: 2880,
    category: '傳統款',
    categoryEn: 'Traditional',
    description: '經典紅色旗袍，採用高品質緞面面料，手工刺繡花紋，展現東方女性的優雅魅力。適合婚禮、晚宴等正式場合。',
    descriptionEn: 'Classic red qipao made with high-quality satin fabric, hand-embroidered patterns, showcasing the elegant charm of Eastern women. Perfect for weddings, dinners and other formal occasions.',
    details: '面料：100% 真絲 | 長度：120cm | 袖長：短袖 | 版型：修身',
    detailsEn: 'Fabric: 100% Silk | Length: 120cm | Sleeve: Short | Fit: Slim',
    image: 'images/10003.jpg'
  },
  {
    id: 2,
    name: '改良式旗袍連衣裙',
    nameEn: 'Modernized Qipao Dress',
    price: 2280,
    category: '改良款',
    categoryEn: 'Modern',
    description: '融合現代設計元素的改良旗袍，保留傳統立領和盤扣設計，搭配A字裙擺，更加舒適自在。適合日常穿搭。',
    descriptionEn: 'Modernized qipao with contemporary design elements, retaining traditional mandarin collar and frog buttons, paired with A-line skirt for comfort. Perfect for daily wear.',
    details: '面料：棉混紡 | 長度：110cm | 袖長：七分袖 | 版型：A字',
    detailsEn: 'Fabric: Cotton Blend | Length: 110cm | Sleeve: 3/4 | Fit: A-line',
    image: 'images/10004.jpg'
  },
  {
    id: 3,
    name: '高級禮服旗袍',
    nameEn: 'Evening Gown Qipao',
    price: 5880,
    category: '禮服款',
    categoryEn: 'Evening',
    description: '精緻華麗的禮服旗袍，珠片刺繡裝飾，拖尾設計，適合高端晚宴和重要場合。',
    descriptionEn: 'Exquisite evening gown qipao with sequin embroidery and train design, perfect for high-end dinners and special occasions.',
    details: '面料：緞面 | 長度：拖尾150cm | 袖長：無袖 | 版型：修身',
    detailsEn: 'Fabric: Satin | Length: Train 150cm | Sleeve: Sleeveless | Fit: Slim',
    image: 'images/10005.jpg'
  },
  {
    id: 4,
    name: '素雅日常旗袍',
    nameEn: 'Everyday Elegant Qipao',
    price: 1680,
    category: '日常款',
    categoryEn: 'Casual',
    description: '素雅大方的日常旗袍，舒適透氣的面料，簡約設計，適合日常通勤和休閒場合。',
    descriptionEn: 'Elegant everyday qipao with comfortable and breathable fabric, simple design, perfect for daily commute and casual occasions.',
    details: '面料：棉麻 | 長度：105cm | 袖長：短袖 | 版型：舒適',
    detailsEn: 'Fabric: Cotton Linen | Length: 105cm | Sleeve: Short | Fit: Comfort',
    image: 'images/10006.jpg'
  },
  {
    id: 5,
    name: '青花瓷旗袍',
    nameEn: 'Blue & White Porcelain Qipao',
    price: 3280,
    category: '傳統款',
    categoryEn: 'Traditional',
    description: '青花瓷圖案旗袍，靈感來自中國傳統瓷器，獨特的藍白配色，展現古典韻味。',
    descriptionEn: 'Blue & white porcelain patterned qipao, inspired by traditional Chinese porcelain, unique blue and white color scheme showcasing classical charm.',
    details: '面料：真絲 | 長度：115cm | 袖長：中袖 | 版型：修身',
    detailsEn: 'Fabric: Silk | Length: 115cm | Sleeve: Medium | Fit: Slim',
    image: 'images/10007.jpg'
  },
  {
    id: 6,
    name: '復古印花旗袍',
    nameEn: 'Vintage Print Qipao',
    price: 2180,
    category: '改良款',
    categoryEn: 'Modern',
    description: '復古印花旗袍，融合Art Deco風格圖案，復古與時尚的完美結合。',
    descriptionEn: 'Vintage print qipao with Art Deco style patterns, perfect blend of vintage and modern fashion.',
    details: '面料：人造絲 | 長度：110cm | 袖長：短袖 | 版型：合身',
    detailsEn: 'Fabric: Rayon | Length: 110cm | Sleeve: Short | Fit: Regular',
    image: 'images/10008.jpg'
  },
  {
    id: 7,
    name: '繡花婚禮旗袍',
    nameEn: 'Bridal Embroidery Qipao',
    price: 6880,
    category: '禮服款',
    categoryEn: 'Evening',
    description: '精美的繡花婚禮旗袍，象徵幸福美滿的牡丹花卉圖案，是新娘的完美選擇。',
    descriptionEn: 'Exquisite embroidered bridal qipao with peony flower patterns symbolizing happiness and prosperity, perfect choice for brides.',
    details: '面料：高級緞面 | 長度：120cm | 袖長：短袖 | 版型：修身',
    detailsEn: 'Fabric: Premium Satin | Length: 120cm | Sleeve: Short | Fit: Slim',
    image: 'images/10009.jpg'
  },
  {
    id: 8,
    name: '清新綠色旗袍',
    nameEn: 'Fresh Green Qipao',
    price: 1980,
    category: '日常款',
    categoryEn: 'Casual',
    description: '清新淡雅的綠色旗袍，適合春夏穿搭，展現年輕活力。',
    descriptionEn: 'Fresh and elegant green qipao, perfect for spring and summer wear, showcasing youthful vitality.',
    details: '面料：棉混紡 | 長度：105cm | 袖長：短袖 | 版型：舒適',
    detailsEn: 'Fabric: Cotton Blend | Length: 105cm | Sleeve: Short | Fit: Comfort',
    image: 'images/10010.jpg'
  },
  {
    id: 9,
    name: '高領長袖旗袍',
    nameEn: 'High Neck Long Sleeve Qipao',
    price: 2680,
    category: '傳統款',
    categoryEn: 'Traditional',
    description: '傳統高領長袖旗袍，優雅大方，適合秋冬季節。',
    descriptionEn: 'Traditional high neck long sleeve qipao, elegant and graceful, perfect for autumn and winter.',
    details: '面料：羊毛混紡 | 長度：115cm | 袖長：長袖 | 版型：修身',
    detailsEn: 'Fabric: Wool Blend | Length: 115cm | Sleeve: Long | Fit: Slim',
    image: 'images/10011.jpg'
  },
  {
    id: 10,
    name: '短款旗袍上衣',
    nameEn: 'Short Qipao Top',
    price: 1280,
    category: '改良款',
    categoryEn: 'Modern',
    description: '時尚短款旗袍上衣，搭配褲子或裙子都非常合適，輕鬆打造中式時尚風格。',
    descriptionEn: 'Fashionable short qipao top, perfect paired with pants or skirts, easily creating a modern Chinese fashion style.',
    details: '面料：棉 | 長度：短款 | 袖長：短袖 | 版型：合身',
    detailsEn: 'Fabric: Cotton | Length: Short | Sleeve: Short | Fit: Regular',
    image: 'images/10012.jpg'
  },
  {
    id: 11,
    name: '中式晚禮服',
    nameEn: 'Chinese Style Evening Dress',
    price: 4880,
    category: '禮服款',
    categoryEn: 'Evening',
    description: '融合中西元素的中式晚禮服，修身剪裁配以精緻裝飾，適合高端社交場合。',
    descriptionEn: 'Chinese style evening dress combining Eastern and Western elements, slim fit with exquisite decorations, perfect for high-end social events.',
    details: '面料：緞面 | 長度：130cm | 袖長：中袖 | 版型：修身',
    detailsEn: 'Fabric: Satin | Length: 130cm | Sleeve: Medium | Fit: Slim',
    image: 'images/10013.jpg'
  },
  {
    id: 12,
    name: '棉麻休閒旗袍',
    nameEn: 'Linen Casual Qipao',
    price: 1580,
    category: '日常款',
    categoryEn: 'Casual',
    description: '舒適透氣的棉麻旗袍，休閒時尚，適合週末出行和度假。',
    descriptionEn: 'Comfortable and breathable linen qipao, casual and fashionable, perfect for weekend outings and vacations.',
    details: '面料：棉麻 | 長度：100cm | 袖長：短袖 | 版型：寬鬆',
    detailsEn: 'Fabric: Cotton Linen | Length: 100cm | Sleeve: Short | Fit: Loose',
    image: 'images/10014.jpg'
  }
];

// 语言包
const translations = {
  zh: {
    nav: {
      home: '首頁',
      products: '產品系列',
      about: '關於我們',
      contact: '聯絡我們'
    },
    hero: {
      subtitle: '傳承東方美學',
      title: '演繹旗袍之美',
      description: '融合傳統工藝與現代設計，為您呈現獨特的東方韻味',
      browse: '瀏覽產品',
      learn: '了解更多'
    },
    features: {
      quality: '優質面料',
      qualityDesc: '精選高品質面料，舒適透氣',
      craft: '精工剪裁',
      craftDesc: '傳統手工藝與現代技術相結合',
      custom: '量身定制',
      customDesc: '提供個人定制服務，完美合身'
    },
    products: {
      title: '精選產品',
      subtitle: 'PRODUCTS',
      description: '每一件旗袍都經過精心設計，展現東方女性的優雅魅力',
      all: '全部',
      traditional: '傳統款',
      modern: '改良款',
      evening: '禮服款',
      casual: '日常款',
      loadMore: '載入更多產品',
      price: 'HK$'
    },
    about: {
      title: '關於 VISION REALM',
      subtitle: 'ABOUT US',
      paragraph1: 'VISION REALM CO., LIMITED 成立於香港，專注於旗袍設計與製作。我們堅持傳承中國傳統服飾文化，融合現代美學理念，為客戶打造獨一無二的旗袍作品。',
      paragraph2: '每一件旗袍都由經驗豐富的工匠精心製作，從選料、剪裁到縫製，每一個細節都追求完美。我們相信，旗袍不僅是一件服裝，更是一種生活態度和文化傳承。',
      experience: '年製作經驗',
      clients: '滿意客戶',
      handmade: '手工製作'
    },
    contact: {
      title: '聯絡我們',
      subtitle: 'CONTACT',
      description: '如有任何查詢或訂購需求，歡迎隨時與我們聯絡',
      address: '公司地址',
      phone: '聯絡電話',
      email: '電子郵件',
      send: '發送查詢',
      name: '姓名',
      phonePlaceholder: '請輸入電話',
      emailPlaceholder: '請輸入電子郵件',
      message: '查詢內容',
      messagePlaceholder: '請輸入您的查詢內容'
    },
    footer: {
      description: '傳承東方美學，演繹旗袍之美。我們致力於為每一位客戶打造獨一無二的旗袍作品。',
      quickLinks: '快速連結',
      contactInfo: '聯絡信息',
      copyright: '© 2024 VISION REALM CO., LIMITED. All rights reserved.'
    },
    modal: {
      details: '產品細節',
      addToCart: '加入購物車',
      inquire: '查詢此產品'
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About Us',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'Inheriting Eastern Aesthetics',
      title: 'The Beauty of Qipao',
      description: 'Blending traditional craftsmanship with modern design, presenting unique Eastern charm',
      browse: 'Browse Products',
      learn: 'Learn More'
    },
    features: {
      quality: 'Premium Fabric',
      qualityDesc: 'Selected high-quality fabrics, comfortable and breathable',
      craft: 'Exquisite Tailoring',
      craftDesc: 'Combining traditional craftsmanship with modern technology',
      custom: 'Custom Made',
      customDesc: 'Personalized custom service for perfect fit'
    },
    products: {
      title: 'Featured Products',
      subtitle: 'PRODUCTS',
      description: 'Each qipao is carefully designed to showcase the elegant charm of Eastern women',
      all: 'All',
      traditional: 'Traditional',
      modern: 'Modern',
      evening: 'Evening',
      casual: 'Casual',
      loadMore: 'Load More Products',
      price: 'HK$'
    },
    about: {
      title: 'About VISION REALM',
      subtitle: 'ABOUT US',
      paragraph1: 'VISION REALM CO., LIMITED was founded in Hong Kong, focusing on qipao design and production. We uphold the inheritance of traditional Chinese clothing culture, integrating modern aesthetic concepts to create unique qipao works for our clients.',
      paragraph2: 'Each qipao is carefully crafted by experienced artisans. From material selection, cutting to sewing, every detail pursues perfection. We believe that qipao is not just clothing, but a way of life and cultural heritage.',
      experience: 'Years of Experience',
      clients: 'Satisfied Clients',
      handmade: 'Handmade'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'CONTACT',
      description: 'Please feel free to contact us for any inquiries or ordering requests',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      send: 'Send Inquiry',
      name: 'Name',
      phonePlaceholder: 'Enter phone number',
      emailPlaceholder: 'Enter email',
      message: 'Message',
      messagePlaceholder: 'Enter your message'
    },
    footer: {
      description: 'Inheriting Eastern aesthetics, interpreting the beauty of qipao. We are committed to creating unique qipao works for every customer.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      copyright: '© 2024 VISION REALM CO., LIMITED. All rights reserved.'
    },
    modal: {
      details: 'Product Details',
      addToCart: 'Add to Cart',
      inquire: 'Inquire About This Product'
    }
  }
};

// 当前语言
let currentLang = 'zh';

// 切换语言
function toggleLanguage() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  document.getElementById('lang-text').textContent = currentLang === 'zh' ? 'EN' : '繁';
  updateContent();
}

// 更新页面内容
function updateContent() {
  const lang = translations[currentLang];
  
  // 更新导航
  document.querySelectorAll('.nav-link')[0].textContent = lang.nav.home;
  document.querySelectorAll('.nav-link')[1].textContent = lang.nav.products;
  document.querySelectorAll('.nav-link')[2].textContent = lang.nav.about;
  document.querySelectorAll('.nav-link')[3].textContent = lang.nav.contact;
  
  // 更新移动端导航
  document.querySelectorAll('#mobile-menu a')[0].textContent = lang.nav.home;
  document.querySelectorAll('#mobile-menu a')[1].textContent = lang.nav.products;
  document.querySelectorAll('#mobile-menu a')[2].textContent = lang.nav.about;
  document.querySelectorAll('#mobile-menu a')[3].textContent = lang.nav.contact;
  
  // 更新产品分类按钮
  document.querySelectorAll('.category-btn')[0].textContent = lang.products.all;
  document.querySelectorAll('.category-btn')[1].textContent = lang.products.traditional;
  document.querySelectorAll('.category-btn')[2].textContent = lang.products.modern;
  document.querySelectorAll('.category-btn')[3].textContent = lang.products.evening;
  document.querySelectorAll('.category-btn')[4].textContent = lang.products.casual;
  
  // 更新产品卡片
  document.querySelectorAll('.product-card').forEach((card, index) => {
    const product = products[index % products.length];
    card.querySelector('.product-name').textContent = currentLang === 'zh' ? product.name : product.nameEn;
  });
  
  // 更新页脚快速链接
  document.querySelectorAll('footer ul li a')[0].textContent = lang.nav.home;
  document.querySelectorAll('footer ul li a')[1].textContent = lang.nav.products;
  document.querySelectorAll('footer ul li a')[2].textContent = lang.nav.about;
  document.querySelectorAll('footer ul li a')[3].textContent = lang.nav.contact;
  
  // 更新footer标题
  document.querySelectorAll('footer h4')[0].textContent = lang.footer.quickLinks;
  document.querySelectorAll('footer h4')[1].textContent = lang.footer.contactInfo;
}

// 切换主题
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const header = document.getElementById('header');
  
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
}

// 初始化主题
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-icon').classList.remove('fa-moon');
    document.getElementById('theme-icon').classList.add('fa-sun');
  } else {
    document.body.classList.add('light-mode');
  }
}

// 渲染产品卡片
function renderProducts(filter = 'all') {
  const productsContainer = document.querySelector('#products .grid');
  let filteredProducts = products;
  
  if (filter !== 'all') {
    filteredProducts = products.filter(p => p.category === filter);
  }
  
  // 清空容器
  productsContainer.innerHTML = '';
  
  // 创建产品卡片
  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card cursor-pointer';
    card.dataset.productId = product.id;
    
    card.innerHTML = `
      <div class="relative overflow-hidden">
        <img src="${product.image}" alt="${currentLang === 'zh' ? product.name : product.nameEn}" class="w-full h-64 object-cover">
        <div class="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
          <button class="px-4 py-2 bg-white text-amber-600 rounded-full font-medium text-sm hover:bg-amber-600 hover:text-white transition-colors">
            ${currentLang === 'zh' ? '查看詳情' : 'View Details'}
          </button>
        </div>
      </div>
      <div class="p-4">
        <p class="text-amber-600 text-xs uppercase tracking-wider mb-1">${currentLang === 'zh' ? product.category : product.categoryEn}</p>
        <h3 class="product-name font-semibold text-lg mb-2">${currentLang === 'zh' ? product.name : product.nameEn}</h3>
        <p class="product-price text-xl font-bold text-amber-600">HK$${product.price.toLocaleString()}</p>
      </div>
    `;
    
    // 添加点击事件
    card.addEventListener('click', () => openProductModal(product.id));
    
    productsContainer.appendChild(card);
  });
}

// 打开产品详情模态框
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('product-modal');
  const content = document.getElementById('modal-content');
  
  content.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="relative">
        <img src="${product.image}" alt="${currentLang === 'zh' ? product.name : product.nameEn}" class="w-full h-80 lg:h-96 object-cover rounded-xl">
      </div>
      <div>
        <p class="text-amber-600 text-sm uppercase tracking-wider mb-2">${currentLang === 'zh' ? product.category : product.categoryEn}</p>
        <h2 class="text-2xl lg:text-3xl font-bold mb-4">${currentLang === 'zh' ? product.name : product.nameEn}</h2>
        <p class="text-3xl font-bold text-amber-600 mb-6">HK$${product.price.toLocaleString()}</p>
        <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">${currentLang === 'zh' ? product.description : product.descriptionEn}</p>
        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <h4 class="font-semibold mb-2">${currentLang === 'zh' ? '產品細節' : 'Product Details'}</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400">${currentLang === 'zh' ? product.details : product.detailsEn}</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="flex-1 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors">
            ${currentLang === 'zh' ? '加入購物車' : 'Add to Cart'}
          </button>
          <button class="flex-1 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-medium hover:bg-amber-50 dark:hover:bg-amber-900 transition-colors">
            ${currentLang === 'zh' ? '查詢此產品' : 'Inquire'}
          </button>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// 关闭产品详情模态框
function closeProductModal() {
  const modal = document.getElementById('product-modal');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

// 分类筛选
function filterProducts(category) {
  // 更新按钮状态
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.classList.remove('bg-amber-600', 'text-white');
    btn.classList.add('bg-white', 'dark:bg-gray-800', 'hover:bg-amber-50', 'dark:hover:bg-gray-700');
  });
  
  const activeBtn = document.querySelector(`.category-btn:contains('${category === 'all' ? translations[currentLang].products.all : category}')`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-amber-600', 'text-white');
    activeBtn.classList.remove('bg-white', 'dark:bg-gray-800', 'hover:bg-amber-50', 'dark:hover:bg-gray-700');
  }
  
  // 渲染筛选后的产品
  renderProducts(category);
}

// 处理导航栏滚动效果
function handleScroll() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('shadow-md');
    header.style.background = header.classList.contains('dark-mode') 
      ? 'rgba(17, 24, 39, 0.98)' 
      : 'rgba(255, 255, 255, 0.98)';
  } else {
    header.classList.remove('shadow-md');
    header.style.background = header.classList.contains('dark-mode') 
      ? 'rgba(17, 24, 39, 0.95)' 
      : 'rgba(255, 255, 255, 0.95)';
  }
}

// 处理移动端菜单
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
}

// 平滑滚动到锚点
function smoothScroll(e) {
  const target = e.target;
  if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const targetId = target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      
      // 如果是移动端，关闭菜单
      const mobileMenu = document.getElementById('mobile-menu');
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  }
}

// 处理表单提交
function handleFormSubmit(e) {
  e.preventDefault();
  alert(currentLang === 'zh' ? '感謝您的查詢！我們將盡快與您聯絡。' : 'Thank you for your inquiry! We will contact you soon.');
  e.target.reset();
}

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  // 初始化主题
  initTheme();
  
  // 渲染产品
  renderProducts();
  
  // 添加事件监听
  document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);
  document.getElementById('close-modal').addEventListener('click', closeProductModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeProductModal);
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
  
  // 分类按钮事件
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.textContent.trim();
      const categoryMap = {
        [translations.zh.products.all]: 'all',
        [translations.zh.products.traditional]: '傳統款',
        [translations.zh.products.modern]: '改良款',
        [translations.zh.products.evening]: '禮服款',
        [translations.zh.products.casual]: '日常款',
        [translations.en.products.all]: 'all',
        [translations.en.products.traditional]: '傳統款',
        [translations.en.products.modern]: '改良款',
        [translations.en.products.evening]: '禮服款',
        [translations.en.products.casual]: '日常款'
      };
      filterProducts(categoryMap[category] || 'all');
    });
  });
  
  // 滚动事件
  window.addEventListener('scroll', handleScroll);
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
  });
  
  // ESC键关闭模态框
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
    }
  });
});

// 图片懒加载
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
  
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
});