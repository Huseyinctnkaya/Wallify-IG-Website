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
<header class="sticky top-0 z-50 w-full border-b border-[#f0f0f0] bg-white/90 backdrop-blur-lg">
  <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="index.html" class="flex items-center gap-2">
      <div class="size-8 bg-black rounded-lg flex items-center justify-center text-white">
        <span class="material-symbols-outlined text-lg fill-1">grid_view</span>
      </div>
      <h2 class="text-[#1a1c1d] text-lg font-bold tracking-tight">Wallify IG</h2>
    </a>
    <nav class="hidden md:flex items-center gap-8">
      ${buildNav()}
    </nav>
    <div class="flex items-center gap-4">
      <button class="bg-black hover:bg-black/90 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all shadow-sm">
        Install App
      </button>
    </div>
  </div>
</header>`;

  // Footer
  const footerHTML = `
<footer class="bg-[#fafafa] border-t border-[#f0f0f0] py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-12 mb-20">
      <div class="col-span-1 md:col-span-1 space-y-6">
        <a href="index.html" class="flex items-center gap-2">
          <div class="size-6 bg-black rounded-md flex items-center justify-center text-white">
            <span class="material-symbols-outlined text-xs">grid_view</span>
          </div>
          <h2 class="text-[#1a1c1d] text-base font-bold tracking-tight">Wallify IG</h2>
        </a>
        <p class="text-sm text-[#5c5f62] leading-relaxed max-w-xs">
          The fastest Instagram feed app for Shopify. Built for high-volume stores that demand performance.
        </p>
        <div class="flex gap-4">
          <span class="material-symbols-outlined text-[#5c5f62] cursor-pointer hover:text-black transition-colors">brand_awareness</span>
          <span class="material-symbols-outlined text-[#5c5f62] cursor-pointer hover:text-black transition-colors">share</span>
          <span class="material-symbols-outlined text-[#5c5f62] cursor-pointer hover:text-black transition-colors">public</span>
        </div>
      </div>
      <div>
        <h4 class="text-sm font-bold text-[#1a1c1d] mb-6 uppercase tracking-wider">Product</h4>
        <ul class="space-y-4 text-sm text-[#5c5f62] font-medium">
          <li><a class="hover:text-black" href="features.html">Features</a></li>
          <li><a class="hover:text-black" href="pricing.html">Pricing</a></li>
          <li><a class="hover:text-black" href="docs.html">Documentation</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-sm font-bold text-[#1a1c1d] mb-6 uppercase tracking-wider">Resources</h4>
        <ul class="space-y-4 text-sm text-[#5c5f62] font-medium">
          <li><a class="hover:text-black" href="blog.html">Case Studies</a></li>
          <li><a class="hover:text-black" href="support.html">Help Center</a></li>
          <li><a class="hover:text-black" href="docs.html">API Docs</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-sm font-bold text-[#1a1c1d] mb-6 uppercase tracking-wider">Legal</h4>
        <ul class="space-y-4 text-sm text-[#5c5f62] font-medium">
          <li><a class="hover:text-black" href="privacy.html">Privacy Policy</a></li>
          <li><a class="hover:text-black" href="impressum.html">Terms of Service</a></li>
          <li><a class="hover:text-black" href="support.html">Contact Support</a></li>
        </ul>
      </div>
    </div>
    <div class="pt-8 border-t border-[#f0f0f0] flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-xs font-medium text-[#5c5f62] tracking-wide">&copy; 2026 Wallify IG. All rights reserved.</p>
      <div class="flex gap-8 text-xs font-medium text-[#5c5f62]">
        <a class="hover:text-black transition-colors" href="privacy.html">Privacy</a>
        <a class="hover:text-black transition-colors" href="impressum.html">Terms</a>
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
