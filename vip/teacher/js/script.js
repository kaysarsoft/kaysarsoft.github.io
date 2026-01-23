// 全国教师管理系统各省入口数据
const provincesData = [
    {
        id: 1,
        name: "北京市",
        url: "https://teacher.bjedu.cn",
        region: "华北",
        description: "北京市教师管理系统官网入口，提供教师注册、信息查询等服务。"
    },
    {
        id: 2,
        name: "天津市",
        url: "https://teacher.tjedu.gov.cn",
        region: "华北",
        description: "天津市教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 3,
        name: "河北省",
        url: "https://teacher.hebeijiaoyu.com",
        region: "华北",
        description: "河北省教师管理系统官网入口，提供教师资格认证、职称评定等服务。"
    },
    {
        id: 4,
        name: "山西省",
        url: "https://teacher.sxedu.gov.cn",
        region: "华北",
        description: "山西省教师管理系统官网入口，提供教师信息管理、继续教育等服务。"
    },
    {
        id: 5,
        name: "内蒙古自治区",
        url: "https://teacher.nmgjyt.gov.cn",
        region: "华北",
        description: "内蒙古自治区教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 6,
        name: "辽宁省",
        url: "https://teacher.lnjy.com.cn",
        region: "东北",
        description: "辽宁省教师管理系统官网入口，提供教师资格认证、职称评定等服务。"
    },
    {
        id: 7,
        name: "吉林省",
        url: "https://teacher.jledu.gov.cn",
        region: "东北",
        description: "吉林省教师管理系统官网入口，提供教师信息管理、继续教育等服务。"
    },
    {
        id: 8,
        name: "黑龙江省",
        url: "https://teacher.hljedu.gov.cn",
        region: "东北",
        description: "黑龙江省教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 9,
        name: "上海市",
        url: "https://teacher.shanghaiedu.cn",
        region: "华东",
        description: "上海市教师管理系统官网入口，提供教师注册、信息查询等服务。"
    },
    {
        id: 10,
        name: "江苏省",
        url: "https://teacher.jiangsuedu.com",
        region: "华东",
        description: "江苏省教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 11,
        name: "浙江省",
        url: "https://teacher.zjedu.gov.cn",
        region: "华东",
        description: "浙江省教师管理系统官网入口，提供教师资格认证、职称评定等服务。"
    },
    {
        id: 12,
        name: "安徽省",
        url: "https://teacher.ahjy.gov.cn",
        region: "华东",
        description: "安徽省教师管理系统官网入口，提供教师信息管理、继续教育等服务。"
    },
    {
        id: 13,
        name: "福建省",
        url: "https://teacher.fjedu.gov.cn",
        region: "华东",
        description: "福建省教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 14,
        name: "江西省",
        url: "https://teacher.jxedu.gov.cn",
        region: "华东",
        description: "江西省教师管理系统官网入口，提供教师资格认证、职称评定等服务。"
    },
    {
        id: 15,
        name: "山东省",
        url: "https://teacher.sdedu.gov.cn",
        region: "华东",
        description: "山东省教师管理系统官网入口，提供教师信息管理、继续教育等服务。"
    },
    {
        id: 16,
        name: "河南省",
        url: "https://teacher.haedu.gov.cn",
        region: "华中",
        description: "河南省教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 17,
        name: "湖北省",
        url: "https://teacher.hbedu.gov.cn",
        region: "华中",
        description: "湖北省教师管理系统官网入口，提供教师资格认证、职称评定等服务。"
    },
    {
        id: 18,
        name: "湖南省",
        url: "https://teacher.hnedu.gov.cn",
        region: "华中",
        description: "湖南省教师管理系统官网入口，提供教师信息管理、继续教育等服务。"
    },
    {
        id: 19,
        name: "广东省",
        url: "https://teacher.gdedu.gov.cn",
        region: "华南",
        description: "广东省教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 20,
        name: "广西壮族自治区",
        url: "https://teacher.gxedu.gov.cn",
        region: "华南",
        description: "广西壮族自治区教师管理系统官网入口，提供教师资格认证、职称评定等服务。"
    },
    {
        id: 21,
        name: "海南省",
        url: "https://teacher.hainanedu.gov.cn",
        region: "华南",
        description: "海南省教师管理系统官网入口，提供教师信息管理、继续教育等服务。"
    },
    {
        id: 22,
        name: "重庆市",
        url: "https://teacher.cqedu.cn",
        region: "西南",
        description: "重庆市教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 23,
        name: "四川省",
        url: "https://teacher.scedu.net",
        region: "西南",
        description: "四川省教师管理系统官网入口，提供教师资格认证、职称评定等服务。"
    },
    {
        id: 24,
        name: "贵州省",
        url: "https://teacher.gzsjyt.gov.cn",
        region: "西南",
        description: "贵州省教师管理系统官网入口，提供教师信息管理、继续教育等服务。"
    },
    {
        id: 25,
        name: "云南省",
        url: "https://teacher.ynjy.cn",
        region: "西南",
        description: "云南省教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 26,
        name: "西藏自治区",
        url: "https://teacher.xzedu.gov.cn",
        region: "西南",
        description: "西藏自治区教师管理系统官网入口，提供教师资格认证、职称评定等服务。"
    },
    {
        id: 27,
        name: "陕西省",
        url: "https://teacher.snedu.gov.cn",
        region: "西北",
        description: "陕西省教师管理系统官网入口，提供教师信息管理、继续教育等服务。"
    },
    {
        id: 28,
        name: "甘肃省",
        url: "https://teacher.gsedu.gov.cn",
        region: "西北",
        description: "甘肃省教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 29,
        name: "青海省",
        url: "https://teacher.qhedu.gov.cn",
        region: "西北",
        description: "青海省教师管理系统官网入口，提供教师资格认证、职称评定等服务。"
    },
    {
        id: 30,
        name: "宁夏回族自治区",
        url: "https://teacher.nxedu.gov.cn",
        region: "西北",
        description: "宁夏回族自治区教师管理系统官网入口，提供教师信息管理、继续教育等服务。"
    },
    {
        id: 31,
        name: "新疆维吾尔自治区",
        url: "https://teacher.xjedu.gov.cn",
        region: "西北",
        description: "新疆维吾尔自治区教师管理系统官网入口，提供教师招聘、培训等服务。"
    },
    {
        id: 32,
        name: "台湾省",
        url: "https://teacher.edu.tw",
        region: "其他",
        description: "台湾省教师管理系统官网入口，提供教师相关服务。"
    },
    {
        id: 33,
        name: "香港特别行政区",
        url: "https://teacher.edb.gov.hk",
        region: "其他",
        description: "香港特别行政区教师管理系统官网入口，提供教师相关服务。"
    },
    {
        id: 34,
        name: "澳门特别行政区",
        url: "https://teacher.dsej.gov.mo",
        region: "其他",
        description: "澳门特别行政区教师管理系统官网入口，提供教师相关服务。"
    }
];

// 区域数据
const regions = ["全部", "华北", "东北", "华东", "华中", "华南", "西南", "西北", "其他"];

// DOM元素
let searchInput, searchBtn, provincesGrid, resultsCount, filterBtns;

// 当前筛选条件
let currentRegion = "全部";
let currentSearch = "";

// 初始化
function init() {
    // 获取DOM元素
    searchInput = document.getElementById('province-search');
    searchBtn = document.getElementById('search-btn');
    provincesGrid = document.getElementById('provinces-grid');
    resultsCount = document.getElementById('results-count');
    
    // 绑定事件
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // 生成筛选按钮
    generateFilterButtons();
    
    // 初始加载数据
    renderProvinces(provincesData);
}

// 生成筛选按钮
function generateFilterButtons() {
    const filterSection = document.querySelector('.filter-section');
    
    regions.forEach(region => {
        const button = document.createElement('button');
        button.className = `filter-btn ${region === "全部" ? 'active' : ''}`;
        button.textContent = region;
        button.dataset.region = region;
        button.addEventListener('click', function() {
            // 更新按钮状态
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 更新筛选条件
            currentRegion = this.dataset.region;
            handleFilter();
        });
        filterSection.appendChild(button);
    });
}

// 处理搜索
function handleSearch() {
    currentSearch = searchInput.value.trim();
    handleFilter();
}

// 处理筛选
function handleFilter() {
    let filteredData = provincesData;
    
    // 按区域筛选
    if (currentRegion !== "全部") {
        filteredData = filteredData.filter(item => item.region === currentRegion);
    }
    
    // 按搜索关键词筛选
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filteredData = filteredData.filter(item => 
            item.name.toLowerCase().includes(searchLower) ||
            item.description.toLowerCase().includes(searchLower)
        );
    }
    
    // 渲染结果
    renderProvinces(filteredData);
}

// 渲染省份卡片
function renderProvinces(data) {
    // 更新结果数量
    resultsCount.textContent = `找到 ${data.length} 个结果`;
    
    // 清空网格
    provincesGrid.innerHTML = '';
    
    // 检查是否有结果
    if (data.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <h3>未找到匹配的结果</h3>
            <p>请尝试调整搜索关键词或筛选条件</p>
        `;
        provincesGrid.appendChild(noResults);
        return;
    }
    
    // 渲染省份卡片
    data.forEach(province => {
        const card = document.createElement('div');
        card.className = 'province-card';
        card.innerHTML = `
            <h3>${province.name}</h3>
            <p>${province.description}</p>
            <p><strong>所属区域：</strong>${province.region}</p>
            <a href="${province.url}" target="_blank">访问官网</a>
        `;
        provincesGrid.appendChild(card);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);