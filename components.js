// Shared Header & Footer for Wallify IG Website
(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = [
    { href: "index.html", label: "Home" },
    { href: "features.html", label: "Features" },
    { href: "pricing.html", label: "Pricing" },
    { href: "blog.html", label: "Blog" },
    { href: "docs.html", label: "Docs" },
    { href: "support.html", label: "Support" },
  ];

  function buildNav() {
    return navLinks
      .map((link) => {
        const isActive = currentPage === link.href;
        return `<a class="text-sm font-semibold ${isActive ? "text-primary" : "hover:text-primary"} transition-colors" href="${link.href}">${link.label}</a>`;
      })
      .join("\n");
  }

  // Header
  const headerHTML = `
<header class="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md">
  <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <a href="index.html" class="flex items-center gap-2">
      <div class="size-8 bg-primary rounded flex items-center justify-center text-white">
        <span class="material-symbols-outlined text-xl">grid_view</span>
      </div>
      <h2 class="text-[#181210] text-xl font-extrabold tracking-tight">Wallify IG</h2>
    </a>
    <nav class="hidden md:flex items-center gap-10">
      ${buildNav()}
    </nav>
    <div class="flex items-center gap-4">
      <button class="hidden sm:block text-sm font-bold px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors">Login</button>
      <button class="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20">
        Get Started
      </button>
    </div>
  </div>
</header>`;

  // Footer
  const footerHTML = `
<footer class="bg-white border-t border-[#e7dcda] py-16">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-12 mb-16">
      <div class="col-span-1 md:col-span-1 space-y-6">
        <a href="index.html" class="flex items-center gap-2">
          <div class="size-6 bg-primary rounded flex items-center justify-center text-white">
            <span class="material-symbols-outlined text-sm">grid_view</span>
          </div>
          <h2 class="text-[#181210] text-lg font-bold tracking-tight">Wallify IG</h2>
        </a>
        <p class="text-sm text-[#8d655e] leading-relaxed">
          The premium Instagram shoppable wall app for Shopify merchants who care about speed and conversion.
        </p>
        <div class="flex gap-4">
          <span class="material-symbols-outlined text-[#8d655e] cursor-pointer hover:text-primary transition-colors">brand_awareness</span>
          <span class="material-symbols-outlined text-[#8d655e] cursor-pointer hover:text-primary transition-colors">share</span>
          <span class="material-symbols-outlined text-[#8d655e] cursor-pointer hover:text-primary transition-colors">public</span>
        </div>
      </div>
      <div>
        <h4 class="font-bold mb-6">Product</h4>
        <ul class="space-y-4 text-sm text-[#8d655e] font-medium">
          <li><a class="hover:text-primary" href="features.html">Features</a></li>
          <li><a class="hover:text-primary" href="pricing.html">Pricing</a></li>
          <li><a class="hover:text-primary" href="docs.html">Documentation</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-6">Resources</h4>
        <ul class="space-y-4 text-sm text-[#8d655e] font-medium">
          <li><a class="hover:text-primary" href="blog.html">Blog</a></li>
          <li><a class="hover:text-primary" href="support.html">Help Center</a></li>
          <li><a class="hover:text-primary" href="docs.html">API Docs</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-6">Legal</h4>
        <ul class="space-y-4 text-sm text-[#8d655e] font-medium">
          <li><a class="hover:text-primary" href="privacy.html">Privacy Policy</a></li>
          <li><a class="hover:text-primary" href="impressum.html">Impressum</a></li>
          <li><a class="hover:text-primary" href="support.html">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="pt-8 border-t border-[#f5f0f0] flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-xs font-bold text-[#8d655e] uppercase tracking-widest">&copy; 2025 Wallify IG. Built by merchants, for merchants.</p>
      <div class="flex gap-8 text-xs font-bold text-[#8d655e] uppercase tracking-widest">
        <a class="hover:text-primary transition-colors" href="privacy.html">Privacy</a>
        <a class="hover:text-primary transition-colors" href="impressum.html">Impressum</a>
      </div>
    </div>
  </div>
</footer>`;

  // Inject
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");

  if (headerEl) headerEl.outerHTML = headerHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;
})();
