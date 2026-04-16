import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight, Globe, Mail, MapPin, Menu, X, Languages, User, GraduationCap, Briefcase, Send, Link } from "lucide-react";
import { useState, useEffect, createContext, useContext, FormEvent } from "react";

type Language = "zh" | "en";

interface Content {
  nav: string[];
  contactBtn: string;
  heroBadge: string;
  heroTitle: string;
  heroTitleItalic: string;
  heroDesc: string;
  heroBtn1: string;
  heroBtn2: string;
  platformTitle: string;
  platformDesc: string;
  platformBadge: string;
  thesisItems: { title: string; description: string; icon: string }[];
  strategiesTitle: string;
  strategiesBtn: string;
  strategies: { name: string; category: string; year: string; description?: string }[];
  launchpadTitle: string;
  launchpadBadge: string;
  launchpadItems: { title: string; description: string; icon: string }[];
  footerDesc: string;
  launchpadFormTitle: string;
  launchpadFormName: string;
  launchpadFormEmail: string;
  launchpadFormEdu: string;
  launchpadFormExp: string;
  launchpadFormLink: string;
  launchpadFormIntro: string;
  launchpadFormSubmit: string;
  launchpadFormSuccess: string;
  researchBadge: string;
  researchTitle: string;
  researchMore: string;
  researchReadFull: string;
  researchItems: { title: string; date: string; category: string; excerpt: string; link: string }[];
  cultureBadge: string;
  cultureTitle: string;
  cultureTitleItalic: string;
  cultureDesc: string;
  cultureItems: { title: string; desc: string }[];
  footerLinksTitle: string;
  footerLinks: { label: string; href: string }[];
  footerLocationTitle: string;
  footerLocation: string;
  footerCopyright: string;
  footerPrivacy: string;
  footerTerms: string;
}

const translations: Record<Language, Content> = {
    zh: {
    nav: ["策略", "研究", "人才与职业"],
    contactBtn: "联系我们",
    heroBadge: "全球领先多策略对冲基金平台",
    heroTitle: "规则至上，灵活始终",
    heroTitleItalic: "",
    heroDesc: "我们是一家建立在严谨规则和灵活执行基础上的投资公司。我们依靠稳健的系统和严格的风险控制来提供持续的表现。",
    heroBtn1: "投资策略",
    heroBtn2: "加入我们",
    platformTitle: "交易员伙伴关系",
    platformDesc: "在 TPX 平台与专业支持下，领导您的团队执行独立投资策略。获取定制化资源以驱动成功。接入 TPX 在数据、研究、融资和流动性方面的全面支持，并依托我们跨全球市场和资产类别的卓越执行力。",
    platformBadge: "伙伴关系",
    thesisItems: [
      {
        title: "专业赋能",
        description: "为顶尖投资人才提供卓越的专业支持、机构级资源以及前沿交易技术。",
        icon: "01"
      },
      {
        title: "战略集成",
        description: "通过先进的多策略聚合平台，将多元化的交易单元 (Pods) 进行战略集成与风控优化。",
        icon: "02"
      },
      {
        title: "卓越执行",
        description: "接入 TPX 在数据、研究、融资和流动性方面的全面支持，依托全球市场卓越执行力。",
        icon: "03"
      }
    ],
    strategiesTitle: "核心投资策略",
    strategiesBtn: "了解更多",
    strategies: [
      { 
        name: "股票策略", 
        category: "Equity Strategies", 
        year: "Global Markets",
        description: "领导独立的交易单元执行高阶股票策略，依托 TPX 的基础设施在全球市场捕捉超额收益。"
      },
      { 
        name: "股票套利", 
        category: "Equity Arbitrage", 
        year: "Systematic",
        description: "部署覆盖资本结构的系统化套利策略，利用多元衍生工具捕捉市场低效机会。"
      },
      { 
        name: "外汇交易", 
        category: "Foreign Exchange (FX)", 
        year: "Macro Execution",
        description: "在全球货币市场追求高 Alpha 机会，依托深厚流动性与 TPX 的宏观执行能力进行布局。"
      },
      { 
        name: "固定收益", 
        category: "Fixed Income", 
        year: "Global Rates",
        description: "管理聚焦于全球利率、宏观趋势、抵押贷款及资产支持证券 (ABS) 的动态投资策略。"
      },
      { 
        name: "大宗商品", 
        category: "Commodities", 
        year: "多资产 / 比特币",
        description: "在能源、金属、大宗农产品、比特币及指数市场中，执行多维度的投资与对冲策略。"
      },
      { 
        name: "量化策略", 
        category: "Quantitative Strategies", 
        year: "Systematic",
        description: "构建并迭代系统化驱动的投资流程，利用跨资产类别的高频数据与前沿建模获取量化优势。"
      }
    ],
    launchpadTitle: "人才与职业",
    launchpadBadge: "招募准则",
    launchpadItems: [
      {
        title: "全球视野与无边界思维",
        description: "我们诚邀拥有海外生活、留学或工作背景的全球化人才。我们重视跨境背景带来的多元视角，并支持高度灵活的办公模式，让顶尖人才在最能激发潜能的环境中捕捉全球市场机会。",
        icon: "01"
      },
      {
        title: "卓越学术背景",
        description: "我们青睐拥有国内外顶尖院校学术背景的专业人士。坚实的学术基础是应对复杂金融建模与深度逻辑推演的基石。",
        icon: "02"
      },
      {
        title: "开放思维与多元生活力",
        description: "欢迎拥有国内一线或新一线城市生活经历，且具备开明思维的挑战者。我们寻找具备高度包容性、能够适应多元文化并持续探索不同生活方式的合作伙伴。",
        icon: "03"
      },
      {
        title: "极致自律与使命驱动",
        description: "诚邀具备军旅经历或严苛自律背景的人才。我们高度重视在高度自由的协作模式下，依然能保持“使命必达”的执行力，并严守机构级交易纪律。",
        icon: "04"
      },
      {
        title: "职业爆发力与前沿掌控",
        description: "寻找 22-32 岁之间、处于思维爆发期的青年才俊。我们重视尚未僵化的创新意识，以及对 AI 自动化等前沿技术在数字时代交易中应用的掌控力。",
        icon: "05"
      }
    ],
    footerDesc: "全球多策略对冲基金平台，通过专业交易团队提供不相关的超额收益。",
    launchpadFormTitle: "立即申请加入 TPX",
    launchpadFormName: "姓名",
    launchpadFormEmail: "电子邮箱",
    launchpadFormEdu: "学术背景 (毕业院校/学位)",
    launchpadFormExp: "职业背景 (当前机构/职位/年限)",
    launchpadFormLink: "个人主页 (LinkedIn/GitHub/Portfolio)",
    launchpadFormIntro: "个人简介与申请动机",
    launchpadFormSubmit: "提交申请",
    launchpadFormSuccess: "申请已提交，我们将尽快与您联系。",
    researchBadge: "深度洞察",
    researchTitle: "宏观政策研究",
    researchMore: "查看更多报告",
    researchReadFull: "阅读全文",
    researchItems: [
      {
        title: "2026 全球宏观政策展望：分化与重塑",
        date: "2026-03-15",
        category: "宏观展望",
        excerpt: "深入分析全球主要经济体的政策走向，探讨在通胀压力下各央行的应对策略及对资产定价的影响。",
        link: "https://hyperionfund.net"
      },
      {
        title: "货币政策与通胀动态：结构性变革的视角",
        date: "2026-02-28",
        category: "政策分析",
        excerpt: "解析当前货币政策传导机制的变化，评估结构性因素对长期通胀中枢的潜在拉升作用。",
        link: "https://hyperionfund.net"
      },
      {
        title: "新兴市场政策风险评估：韧性与脆弱性并存",
        date: "2026-02-10",
        category: "风险评估",
        excerpt: "针对新兴市场在外部金融条件收紧背景下的政策空间进行压力测试，识别潜在的系统性风险点。",
        link: "https://hyperionfund.net"
      }
    ],
    cultureBadge: "卓越环境",
    cultureTitle: "协作驱动的",
    cultureTitleItalic: "卓越交易文化",
    cultureDesc: "在 TPX，我们打破了传统对冲基金的孤岛。我们的交易员、量化研究员和工程师在开放、充满活力的环境中紧密协作。通过实时的策略讨论与技术共享，我们共同捕捉全球市场的每一个细微波动。",
    cultureItems: [
      { title: "实时协作", desc: "跨 Pods 的即时策略交流与风险对冲讨论。" },
      { title: "技术共享", desc: "顶尖工程师为交易员提供定制化的高频执行工具。" },
      { title: "开放环境", desc: "扁平化管理，鼓励每一个创新的交易想法。" }
    ],
    footerLinksTitle: "平台导航",
    footerLinks: [
      { label: "投资策略", href: "#strategies" },
      { label: "加入我们", href: "#launchpad" }
    ],
    footerLocationTitle: "全球办公室",
    footerLocation: "香港 · 新加坡 · 洛杉矶",
    footerCopyright: "© 2026 TPX Fund. 保留所有权利。",
    footerPrivacy: "隐私政策",
    footerTerms: "服务条款"
  },
  en: {
    nav: ["Strategies", "Research", "Careers"],
    contactBtn: "Contact Us",
    heroBadge: "Global Multi-Strategy Hedge Fund Platform",
    heroTitle: "Rules first.",
    heroTitleItalic: "Flexibility always.",
    heroDesc: "We are an investment firm built on disciplined rules and flexible execution. We rely on robust systems and strict risk control to deliver consistent performance.",
    heroBtn1: "Our Strategies",
    heroBtn2: "Join Us",
    platformTitle: "Trader Partnership",
    platformDesc: "Pursue independent investment strategies, managing the process and team while leveraging TPX’s platform and expertise. Access TPX’s offerings across data, research, financing and liquidity, as well as the firm’s execution across global markets and asset classes.",
    platformBadge: "PARTNERSHIP",
    thesisItems: [
      {
        title: "Empowerment",
        description: "Equipping talented investment professionals with sophisticated expertise and institutional resources.",
        icon: "01"
      },
      {
        title: "Aggregation",
        description: "Aggregating diverse trading pods through our advanced multi-strategy aggregation platform for risk optimization.",
        icon: "02"
      },
      {
        title: "Global Execution",
        description: "Access to data, research, financing, and liquidity with execution across global markets.",
        icon: "03"
      }
    ],
    strategiesTitle: "Core Strategies",
    strategiesBtn: "Learn More",
    strategies: [
      { 
        name: "Equity Strategies", 
        category: "Equity", 
        year: "Global Markets",
        description: "Execute sophisticated equity strategies by leading your own Pod, leveraging TPX’s infrastructure to drive alpha across global markets."
      },
      { 
        name: "Equity Arbitrage", 
        category: "Arbitrage", 
        year: "Capital Structure",
        description: "Deploy systematic arbitrage strategies across the capital structure, utilizing diverse derivatives to capture market inefficiencies."
      },
      { 
        name: "Foreign Exchange (FX)", 
        category: "FX", 
        year: "Macro Execution",
        description: "Pursue high-alpha opportunities in global currency markets, leveraging deep liquidity and TPX’s macro execution capabilities."
      },
      { 
        name: "Fixed Income", 
        category: "Fixed Income", 
        year: "Rates & Macro",
        description: "Manage dynamic strategies focused on global rates, macro trends, mortgages, and asset-backed securities (ABS)."
      },
      { 
        name: "Commodities", 
        category: "Commodities", 
        year: "Multi-Asset / Bitcoin",
        description: "Deploy a wide array of investment strategies across energy, metals, agricultural, Bitcoin, and indices."
      },
      { 
        name: "Quantitative Strategies", 
        category: "Quantitative", 
        year: "Advanced Modeling",
        description: "Build and iterate on systematically driven investment processes, leveraging high-frequency data and advanced modeling."
      }
    ],
    launchpadTitle: "Careers",
    launchpadBadge: "EXCELLENCE",
    launchpadItems: [
      {
        title: "Global Perspective & Borderless Mindset",
        description: "We welcome global talents with international living or professional backgrounds. We value diverse perspectives and support highly flexible work models, allowing top-tier professionals to capture global market opportunities in environments that best spark their potential.",
        icon: "01"
      },
      {
        title: "Academic Excellence",
        description: "We look for professionals from top-tier domestic (985/211) or equivalent global institutions. A solid academic foundation is the bedrock for complex financial modeling and profound logical reasoning.",
        icon: "02"
      },
      {
        title: "Open Mindset & Adaptive Vitality",
        description: "We welcome challengers with experience in major metropolitan hubs and an open, progressive mindset. We seek partners who are highly inclusive, adaptable to diverse cultures, and committed to exploring multifaceted lifestyles.",
        icon: "03"
      },
      {
        title: "Radical Discipline & Mission-Driven",
        description: "We invite individuals with military experience or a background in rigorous self-management. We highly value \"mission-driven\" execution and the integrity to adhere to strict institutional trading disciplines within a high-trust, flexible collaboration model.",
        icon: "04"
      },
      {
        title: "Dynamic Vitality & Technical Mastery",
        description: "We seek talents aged 22–32 who are in the prime of their cognitive careers. We value innovative thinking and a mastery of emerging technologies, such as AI and automation, in modern digital-era trading.",
        icon: "05"
      }
    ],
    footerDesc: "A global multi-strategy platform delivering uncorrelated alpha through specialized trading expertise.",
    launchpadFormTitle: "Join TPX",
    launchpadFormName: "Full Name",
    launchpadFormEmail: "Email Address",
    launchpadFormEdu: "Academic Background (University/Degree)",
    launchpadFormExp: "Professional Background (Firm/Role/Years)",
    launchpadFormLink: "Profile Link (LinkedIn/GitHub/Portfolio)",
    launchpadFormIntro: "Introduction & Motivation",
    launchpadFormSubmit: "Submit Application",
    launchpadFormSuccess: "Application submitted. We will contact you soon.",
    researchBadge: "Insights",
    researchTitle: "Macro Policy Research",
    researchMore: "View More Reports",
    researchReadFull: "Read Full Report",
    researchItems: [
      {
        title: "2026 Global Macro Outlook: Divergence & Reshaping",
        date: "2026-03-15",
        category: "Macro Outlook",
        excerpt: "In-depth analysis of policy trends in major global economies, exploring central bank strategies under inflationary pressure.",
        link: "https://hyperionfund.net"
      },
      {
        title: "Monetary Policy & Inflation: A Structural Change Perspective",
        date: "2026-02-28",
        category: "Policy Analysis",
        excerpt: "Analyzing changes in monetary policy transmission mechanisms and assessing structural factors' impact on long-term inflation.",
        link: "https://hyperionfund.net"
      },
      {
        title: "Emerging Markets Policy Risk: Resilience vs. Vulnerability",
        date: "2026-02-10",
        category: "Risk Assessment",
        excerpt: "Stress testing policy space in emerging markets amidst tightening global financial conditions.",
        link: "https://hyperionfund.net"
      }
    ],
    cultureBadge: "Our Environment",
    cultureTitle: "Collaboration-Driven",
    cultureTitleItalic: "Excellence in Trading Culture",
    cultureDesc: "At TPX, we break down the silos of traditional hedge funds. Our traders, quantitative researchers, and engineers collaborate closely in an open, dynamic environment. Through real-time strategy discussions and technology sharing, we collectively capture every subtle fluctuation in global markets.",
    cultureItems: [
      { title: "Real-time Collaboration", desc: "Instant strategy exchange and risk hedging discussions across Pods." },
      { title: "Technology Sharing", desc: "Top-tier engineers provide traders with customized high-frequency execution tools." },
      { title: "Open Environment", desc: "Flat management, encouraging every innovative trading idea." }
    ],
    footerLinksTitle: "Platform",
    footerLinks: [
      { label: "Strategies", href: "#strategies" },
      { label: "Join Us", href: "#launchpad" }
    ],
    footerLocationTitle: "Global Offices",
    footerLocation: "Hong Kong · Singapore · Los Angeles",
    footerCopyright: "© 2026 TPX Fund. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service"
  }
};

const LanguageContext = createContext<{ lang: Language; setLang: (l: Language) => void; t: Content }>({
  lang: "en",
  setLang: () => {},
  t: translations.en
});

const Logo = ({ className = "w-8 h-8", light = false }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Square with rounded corners */}
      <rect width="100" height="100" rx="16" fill={light ? "white" : "#00205B"} />
      
      {/* The "T" structure representing the Platform */}
      {/* Vertical Stem */}
      <rect x="44" y="40" width="12" height="35" rx="2" fill={light ? "#00205B" : "white"} />
      
      {/* Top Bar - Split into 3 segments representing Multi-Strategy Pods */}
      <rect x="25" y="25" width="14" height="10" rx="2" fill={light ? "#00205B" : "white"} fillOpacity="0.6" />
      <rect x="43" y="25" width="14" height="10" rx="2" fill={light ? "#00205B" : "white"} />
      <rect x="61" y="25" width="14" height="10" rx="2" fill={light ? "#00205B" : "white"} fillOpacity="0.6" />
      
      {/* Connecting Bridge */}
      <rect x="25" y="37" width="50" height="3" rx="1.5" fill={light ? "#00205B" : "white"} fillOpacity="0.3" />
    </svg>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navIds = ["strategies", "research", "launchpad"];

  const toggleLanguage = () => {
    const newLang = lang === "zh" ? "en" : "zh";
    setLang(newLang);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Logo className="w-9 h-9 group-hover:scale-105 transition-transform" />
          <span className="font-display font-bold text-xl tracking-tight text-[#00205B]">TPX Fund</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {t.nav.map((item, idx) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(navIds[idx])}
              className="text-sm font-medium text-slate-600 hover:text-[#00205B] transition-colors uppercase tracking-widest"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-[#00205B] hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
          >
            <Languages className="w-3.5 h-3.5" />
            {lang === "zh" ? "English" : "中文"}
          </button>
          <button 
            onClick={() => scrollToSection("careers")}
            className="px-5 py-2 bg-[#00205B] text-white text-sm font-bold rounded-full hover:bg-[#001845] transition-colors uppercase tracking-widest"
          >
            {t.contactBtn}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#00205B]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-6 shadow-xl"
        >
          {t.nav.map((item, idx) => (
            <button 
              key={item} 
              onClick={() => {
                scrollToSection(navIds[idx]);
                setIsMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-slate-600 hover:text-[#00205B] transition-colors text-left"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-slate-600 hover:text-[#00205B] transition-colors text-lg font-medium"
          >
            <Languages className="w-5 h-5" />
            {lang === "zh" ? "Switch to English" : "切换至中文"}
          </button>
          <button 
            onClick={() => {
              scrollToSection("careers");
              setIsMobileMenuOpen(false);
            }}
            className="w-full py-3 bg-[#00205B] text-white font-bold rounded-full uppercase tracking-widest"
          >
            {t.contactBtn}
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1920"
];

const Hero = () => {
  const { t } = useContext(LanguageContext);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Image Slideshow Background */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        {HERO_IMAGES.map((img, idx) => (
          <motion.img
            key={img}
            src={img}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImage === idx ? 1 : 0,
              scale: currentImage === idx ? 1 : 1.05
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: currentImage === idx ? 5 : 0 }}
            referrerPolicy="no-referrer"
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30 z-10" />
        
        {/* Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-12 h-1 rounded-full transition-all duration-500 ${
                currentImage === idx ? "bg-white" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            {t.heroBadge}
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-8">
            {t.heroTitle} <br />
            <span className="italic font-light opacity-80">{t.heroTitleItalic}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-12 font-light">
            {t.heroDesc}
          </p>
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => scrollToSection("strategies")}
              className="px-10 py-4 bg-white text-[#00205B] font-bold rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 group"
            >
              {t.heroBtn1} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection("platform")}
              className="px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              {t.heroBtn2}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Thesis = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="platform" className="py-32 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-[#00205B]">{t.platformTitle}</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t.platformDesc}
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-100 font-display font-bold text-8xl opacity-100 uppercase select-none">
            {t.platformBadge}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {t.thesisItems.map((area, index) => (
            <motion.div 
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all hover:shadow-sm"
            >
              <span className="text-4xl font-display font-bold text-slate-200 mb-6 block group-hover:text-[#00205B] transition-colors">
                {area.icon}
              </span>
              <h3 className="text-2xl font-display font-bold mb-4 text-[#00205B]">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Culture = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-6 block">{t.cultureBadge}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#00205B] mb-8 leading-tight tracking-tight">
              {t.cultureTitle} <br />
              <span className="text-slate-400 italic">{t.cultureTitleItalic}</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              {t.cultureDesc}
            </p>
            <div className="space-y-6">
              {t.cultureItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1 h-12 bg-[#00205B] rounded-full mt-1" />
                  <div>
                    <h4 className="font-bold text-[#00205B]">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square bg-slate-200"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Live Trading Floor</span>
                </div>
                <p className="text-white/80 text-xs font-medium">Real-time collaboration in progress</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="strategies" className="py-32 bg-slate-50 text-[#00205B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">{t.strategiesTitle}</h2>
          <button 
            onClick={() => {
              const element = document.getElementById("launchpad");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-[#00205B] pb-1"
          >
            {t.strategiesBtn} <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {t.strategies.map((company, index) => (
            <motion.div 
              key={company.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 flex flex-col justify-between min-h-[280px] hover:bg-[#00205B] hover:text-white transition-all group cursor-pointer"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-slate-400 mb-2 block">
                  {company.category}
                </span>
                <h3 className="text-2xl font-display font-bold mb-4">{company.name}</h3>
                {company.description && (
                  <p className="text-sm opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity">
                    {company.description}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-40">{company.year}</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Launchpad = () => {
  const { t } = useContext(LanguageContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mojprljv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        alert("提交失败，请稍后重试。");
      }
    } catch (error) {
      alert("提交出错，请检查网络连接。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="launchpad" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-[#00205B]">{t.launchpadTitle}</h2>
          </div>
          <div className="flex items-center gap-4 text-slate-100 font-display font-bold text-8xl opacity-100 uppercase select-none">
            {t.launchpadBadge}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {t.launchpadItems.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all hover:shadow-sm"
            >
              <span className="text-5xl font-display font-bold text-slate-200 mb-8 block group-hover:text-[#00205B] transition-colors">
                {item.icon}
              </span>
              <h3 className="text-2xl font-display font-bold mb-6 text-[#00205B] leading-tight">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-[#00205B] mb-4">{t.launchpadFormTitle}</h3>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-white w-8 h-8" />
              </div>
              <p className="text-green-800 font-bold text-lg">{t.launchpadFormSuccess}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <User className="w-3 h-3" /> {t.launchpadFormName}
                </label>
                <input 
                  required
                  name="name"
                  type="text" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00205B] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Mail className="w-3 h-3" /> {t.launchpadFormEmail}
                </label>
                <input 
                  required
                  name="email"
                  type="email" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00205B] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <GraduationCap className="w-3 h-3" /> {t.launchpadFormEdu}
                </label>
                <input 
                  required
                  name="education"
                  type="text" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00205B] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Briefcase className="w-3 h-3" /> {t.launchpadFormExp}
                </label>
                <input 
                  required
                  name="experience"
                  type="text" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00205B] transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Link className="w-3 h-3" /> {t.launchpadFormLink}
                </label>
                <input 
                  name="portfolio"
                  type="url" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00205B] transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  {t.launchpadFormIntro}
                </label>
                <textarea 
                  required
                  name="motivation"
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#00205B] transition-colors resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-[#00205B] text-white font-bold rounded-full hover:bg-[#001845] transition-all flex items-center justify-center gap-2 group uppercase tracking-widest ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? '正在提交...' : t.launchpadFormSubmit} 
                  {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const ReportModal = ({ isOpen, onClose, report }: { isOpen: boolean; onClose: () => void; report: any }) => {
  if (!isOpen || !report) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-16 shadow-2xl text-white"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-slate-800 text-[10px] font-bold uppercase tracking-widest rounded-full text-slate-300">
                  {report.category}
                </span>
                <span className="text-xs font-mono text-slate-500">{report.date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-8 leading-tight">{report.title}</h2>
              <div className="w-24 h-1 bg-white/20 mb-12" />
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-xl leading-relaxed mb-10 font-light italic">
                {report.excerpt}
              </p>
              <div className="space-y-8 text-slate-400 leading-relaxed text-lg font-light">
                <p>
                  <strong>[研究报告正文]</strong> 在当前的宏观经济背景下，我们观察到全球主要经济体的政策路径正在发生显著分化。通胀压力的持续性以及劳动力市场的韧性，迫使各国央行在维持增长与抑制通胀之间寻求微妙的平衡。
                </p>
                <p>
                  我们的研究团队通过对高频经济数据、政策声明以及地缘政治动态的综合分析，识别出了未来几个季度可能对资产定价产生重大影响的关键风险点。特别是在利率环境波动的背景下，跨资产类别的相关性正在重塑。
                </p>
                <p>
                  TPX Fund 始终致力于为投资者提供深度的市场洞察。通过跨资产类别的研究协作，我们能够更全面地评估宏观政策对不同投资策略的潜在影响，从而在多变的市场环境中捕捉超额收益。我们利用先进的数据分析工具，实时监控全球流动性变化及其对大宗商品和外汇市场的传导效应。
                </p>
                <p>
                  展望未来，我们将继续关注地缘政治局势对供应链的长期影响，以及技术创新（特别是人工智能）对劳动生产率的潜在提振作用。这些因素将共同决定未来十年的宏观经济版图。
                </p>
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 mt-12">
                  <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">免责声明 / Disclaimer</h4>
                  <p className="text-sm text-slate-500">
                    本报告仅供参考，不构成任何投资建议。市场有风险，投资需谨慎。TPX Fund 不对因使用本报告内容而导致的任何损失承担责任。
                    This report is for informational purposes only and does not constitute investment advice. Investing involves risk. TPX Fund is not responsible for any losses resulting from the use of this content.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Research = () => {
  const { t } = useContext(LanguageContext);
  const [selectedReport, setSelectedReport] = useState<any>(null);

  return (
    <section id="research" className="py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 block">{t.researchBadge}</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">{t.researchTitle}</h2>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById("launchpad");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:opacity-70 transition-opacity"
          >
            {t.researchMore} <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.researchItems.map((item, index) => (
            <motion.div
              key={item.title}
              onClick={() => setSelectedReport(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-white transition-all flex flex-col justify-between h-full cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-full text-slate-300">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-slate-300 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {item.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                {t.researchReadFull} <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ReportModal 
        isOpen={!!selectedReport} 
        onClose={() => setSelectedReport(null)} 
        report={selectedReport} 
      />
    </section>
  );
};

const Footer = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer id="careers" className="py-20 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-10 h-10" />
              <span className="font-display font-bold text-2xl tracking-tight text-[#00205B]">TPX Fund</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              {t.footerDesc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#00205B] hover:text-white transition-all text-slate-600">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#00205B] hover:text-white transition-all text-slate-600">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-[#00205B]">{t.footerLinksTitle}</h4>
            <ul className="flex flex-col gap-4 text-slate-500 text-sm">
              {t.footerLinks.map(link => (
                <li key={link.label}><a href={link.href} className="hover:text-[#00205B] transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-[#00205B]">{t.footerLocationTitle}</h4>
            <ul className="flex flex-col gap-4 text-slate-500 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                <span>{t.footerLocation}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-slate-400" />
                <span>contact@tpxfund.co</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
          <span>{t.footerCopyright}</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#00205B] transition-colors">{t.footerPrivacy}</a>
            <a href="#" className="hover:text-[#00205B] transition-colors">{t.footerTerms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  // Default language set to English
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Culture />
          <Portfolio />
          <Research />
          <Launchpad />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
