// Shared Header & Footer for Wallify IG Website
(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = [
    { href: "index", label: "Home" },
    { href: "features", label: "Features" },
    { href: "pricing", label: "Pricing" },
    { href: "docs", label: "Docs" },
    { href: "support", label: "Support" },
  ];

  function buildNav() {
    return navLinks
      .map((link) => {
        const isActive = currentPage === link.href;
        return `<a class="text-sm font-semibold ${isActive ? "text-primary" : "hover:text-primary"} transition-colors" href="${link.href}">${link.label}</a>`;
      })
      .join("\n");
  }

  function buildMobileNav() {
    return navLinks
      .map((link) => {
        const isActive = currentPage === link.href;
        return `<a class="text-lg font-bold ${isActive ? "text-primary" : "text-[#1a1c1d] hover:text-primary"} transition-colors py-4 border-b border-[#f0f0f0]" href="${link.href}">${link.label}</a>`;
      })
      .join("\n");
  }

  // Header
  const headerHTML = `
<header class="sticky top-0 z-50 w-full border-b border-[#f0f0f0] bg-white/90 backdrop-blur-lg">
  <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="index" class="flex items-center">
      <img src="assets/wallify-logo.png" alt="Wallify IG Logo" class="h-12 w-auto object-contain">
    </a>
    <nav class="hidden md:flex items-center gap-8">
      ${buildNav()}
    </nav>
    <div class="flex items-center gap-4">
      <button class="hidden md:block bg-black hover:bg-black/90 text-white text-sm font-bold px-5 py-3.5 rounded-lg transition-all shadow-sm">
        Install App
      </button>
      <button id="mobile-menu-open" class="md:hidden flex items-center justify-center p-2 text-[#1a1c1d]">
        <span class="material-symbols-outlined text-3xl">menu</span>
      </button>
    </div>
  </div>
</header>

<!-- Mobile Menu Overlay -->
<div id="mobile-menu" class="fixed inset-0 z-[60] bg-white transform translate-x-full transition-transform duration-300 ease-in-out md:hidden">
  <div class="p-6 h-full flex flex-col">
    <div class="flex items-center justify-between mb-12">
      <a href="index" class="flex items-center">
        <img src="assets/wallify-logo.png" alt="Wallify IG Logo" class="h-10 w-auto object-contain">
      </a>
      <button id="mobile-menu-close" class="flex items-center justify-center p-2 text-[#1a1c1d]">
        <span class="material-symbols-outlined text-3xl">close</span>
      </button>
    </div>
    <nav class="flex flex-col">
      ${buildMobileNav()}
    </nav>
    <div class="mt-auto pt-10">
      <button class="w-full bg-black hover:bg-black/90 text-white text-lg font-bold py-5 rounded-xl transition-all shadow-lg shadow-black/10">
        Install App
      </button>
    </div>
  </div>
</div>
`;

  // Footer
  const footerHTML = `
<footer class="bg-[#fafafa] border-t border-[#f0f0f0] py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-12 mb-20">
      <div class="col-span-1 md:col-span-1 space-y-6">
        <a href="index" class="flex items-center">
          <img src="assets/wallify-logo.png" alt="Wallify IG Logo" class="h-10 w-auto object-contain">
        </a>
        <p class="text-sm text-[#5c5f62] leading-relaxed max-w-xs">
          Wallify IG is a premium Shopify app developed by <b>34Devs Shopify Agency</b>. Engineered for speed and conversion, it turns your Instagram feed into a powerful shoppable gallery.
        </p>
        <div class="flex gap-4">
          <a href="#" class="text-[#5c5f62] hover:text-[#ff5a3d] transition-colors" title="LinkedIn">
            <svg class="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4 class="text-sm font-bold text-[#1a1c1d] mb-6 uppercase tracking-wider">Product</h4>
        <ul class="space-y-4 text-sm text-[#5c5f62] font-medium">
          <li><a class="hover:text-black" href="features">Features</a></li>
          <li><a class="hover:text-black" href="pricing">Pricing</a></li>
          <li><a class="hover:text-black" href="docs">Documentation</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-sm font-bold text-[#1a1c1d] mb-6 uppercase tracking-wider">Resources</h4>
        <ul class="space-y-4 text-sm text-[#5c5f62] font-medium">
          <li><a class="hover:text-black" href="support">Help Center</a></li>
          <li><a class="hover:text-black" href="docs">API Docs</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-sm font-bold text-[#1a1c1d] mb-6 uppercase tracking-wider">Legal</h4>
        <ul class="space-y-4 text-sm text-[#5c5f62] font-medium">
          <li><a class="hover:text-black" href="privacy">Privacy Policy</a></li>
          <li><a class="hover:text-black" href="impressum">Terms of Service</a></li>
          <li><a class="hover:text-black" href="support">Contact Support</a></li>
        </ul>
      </div>
    </div>
    <div class="pt-8 border-t border-[#f0f0f0] flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-xs font-medium text-[#5c5f62] tracking-wide">&copy; 2026 Wallify IG. All rights reserved.</p>
      <div class="flex gap-8 text-xs font-medium text-[#5c5f62]">
        <a class="hover:text-black transition-colors" href="privacy">Privacy</a>
        <a class="hover:text-black transition-colors" href="impressum">Terms</a>
      </div>
    </div>
  </div>
</footer>`;

  // Inject
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");

  if (headerEl) {
    headerEl.outerHTML = headerHTML;

    // Add Event Listeners for Mobile Menu
    const openBtn = document.getElementById("mobile-menu-open");
    const closeBtn = document.getElementById("mobile-menu-close");
    const mobileMenu = document.getElementById("mobile-menu");

    if (openBtn && closeBtn && mobileMenu) {
      openBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("translate-x-full");
      });

      closeBtn.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
      });

      // Close menu when a link is clicked
      const mobileLinks = mobileMenu.querySelectorAll("nav a");
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("translate-x-full");
        });
      });
    }
  }
  if (footerEl) footerEl.outerHTML = footerHTML;
})();
