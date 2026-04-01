export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/favicon.ico') {
      // Simple purple V favicon as SVG
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0a0a0f"/><text x="16" y="23" font-family="system-ui,sans-serif" font-size="20" font-weight="700" fill="#a78bfa" text-anchor="middle">V</text></svg>`;
      return new Response(svg, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }

    const html = buildPage();
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=utf-8',
        'Cache-Control': 'public, max-age=300',
      },
    });
  },
};

function buildPage() {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Viola Engineering</title>
<meta name="description" content="Infrastructure, products, and systems — from bare metal to cloud, from C++ to AI. Engineering that works.">
<meta property="og:title" content="Viola Engineering">
<meta property="og:description" content="Infrastructure, products, and systems. Engineering that works.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://viola.engineering">
<link rel="icon" href="/favicon.ico" type="image/svg+xml">
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        viola: { DEFAULT: '#a78bfa', dim: '#7c5cbf', light: '#c4b5fd' },
        surface: { DEFAULT: '#07070d', card: '#0d0d16', hover: '#12121f' },
        line: '#1a1a2e',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
    },
  },
}
</script>
<style>
  @keyframes shimmer { 0%,100% { background-position: 0% center } 50% { background-position: 200% center } }
  @keyframes float { 0%,100% { transform: translateX(-50%) translateY(0) } 50% { transform: translateX(-50%) translateY(8px) } }
  .gradient-text {
    background: linear-gradient(135deg, #a78bfa 0%, #c4b5fd 50%, #a78bfa 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 8s ease infinite;
  }
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #07070d; }
  ::-webkit-scrollbar-thumb { background: #1a1a2e; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #7c5cbf; }
</style>
</head>
<body class="bg-surface text-gray-200 antialiased overflow-x-hidden">

<!-- Navigation -->
<nav id="nav" class="fixed top-0 inset-x-0 z-50 py-4 backdrop-blur-xl transition-all duration-300">
  <div class="max-w-4xl mx-auto px-6 flex items-center justify-between">
    <a href="#" class="text-sm font-semibold tracking-wide text-gray-200 no-underline">
      <span class="text-viola">V</span>&thinsp;/&thinsp;viola.engineering
    </a>
    <div class="flex gap-7">
      <a href="#about" class="text-xs tracking-wide text-gray-500 hover:text-viola transition-colors">About</a>
      <a href="#projects" class="text-xs tracking-wide text-gray-500 hover:text-viola transition-colors">Projects</a>
      <a href="#expertise" class="text-xs tracking-wide text-gray-500 hover:text-viola transition-colors">Expertise</a>
      <a href="#contact" class="text-xs tracking-wide text-gray-500 hover:text-viola transition-colors">Contact</a>
    </div>
  </div>
</nav>

<!-- Hero -->
<section class="min-h-screen flex items-center justify-center relative px-6 pt-32 pb-20">
  <div class="text-center max-w-2xl mx-auto">
    <p class="text-xs font-medium tracking-[3px] uppercase text-viola mb-8">viola.engineering</p>
    <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
      <span class="gradient-text">Engineering that works.</span>
    </h1>
    <p class="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-lg mx-auto mb-12">
      From bare metal clusters to AI agent fleets — infrastructure, products, and systems built to last.
    </p>
    <div class="flex gap-4 justify-center flex-wrap">
      <a href="#projects" class="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium bg-viola text-surface hover:bg-viola-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(167,139,250,0.25)] transition-all">
        Explore the work
      </a>
      <a href="#contact" class="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium border border-line text-gray-400 hover:border-viola-dim hover:text-viola hover:bg-viola/[0.08] transition-all">
        Get in touch
      </a>
    </div>
  </div>
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-[11px] tracking-[2px] uppercase" style="animation:float 3s ease-in-out infinite">
    <div class="w-px h-7 bg-gradient-to-b from-viola-dim to-transparent"></div>
    scroll
  </div>
</section>

<!-- About -->
<section id="about" class="py-24 sm:py-32 px-6">
  <div class="max-w-4xl mx-auto">
    <div class="reveal">
      <p class="text-[11px] font-medium tracking-[3px] uppercase text-viola mb-4">About</p>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Viola Engineering</h2>
    </div>
    <div class="reveal mt-6 max-w-2xl">
      <p class="text-gray-400 text-base leading-[1.9] mb-4">
        <strong class="text-viola font-medium">Viola Engineering</strong> is an engineering brand founded by Alice Viola Setti — software engineer, architect, and sysadmin with a background in Mechatronic Engineering.
      </p>
      <p class="text-gray-400 text-base leading-[1.9] mb-4">
        The work goes deep. Organizing datacenters and bare metal infrastructure. Designing distributed systems and complex architectures. Shipping <strong class="text-gray-200 font-medium">complete products</strong> — from the database engine to the user interface. Building <strong class="text-gray-200 font-medium">AI agent systems</strong> that do real work.
      </p>
      <p class="text-gray-400 text-base leading-[1.9]">
        Good engineering means understanding every layer. That's the point.
      </p>
    </div>

    <div class="reveal grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
      <div class="p-6 bg-surface-card border border-line rounded-xl text-center hover:border-viola-dim hover:bg-surface-hover transition-all">
        <div class="text-2xl font-bold text-viola mb-1">15+</div>
        <div class="text-[11px] text-gray-600 tracking-wide uppercase">Languages</div>
      </div>
      <div class="p-6 bg-surface-card border border-line rounded-xl text-center hover:border-viola-dim hover:bg-surface-hover transition-all">
        <div class="text-2xl font-bold text-viola mb-1">TB</div>
        <div class="text-[11px] text-gray-600 tracking-wide uppercase">Scale Clusters</div>
      </div>
      <div class="p-6 bg-surface-card border border-line rounded-xl text-center hover:border-viola-dim hover:bg-surface-hover transition-all">
        <div class="text-2xl font-bold text-viola mb-1">100s</div>
        <div class="text-[11px] text-gray-600 tracking-wide uppercase">Microservices</div>
      </div>
      <div class="p-6 bg-surface-card border border-line rounded-xl text-center hover:border-viola-dim hover:bg-surface-hover transition-all">
        <div class="text-2xl font-bold text-viola mb-1">Full</div>
        <div class="text-[11px] text-gray-600 tracking-wide uppercase">Stack Depth</div>
      </div>
    </div>
  </div>
</section>

<!-- Projects -->
<section id="projects" class="py-24 sm:py-32 px-6">
  <div class="max-w-4xl mx-auto">
    <div class="reveal">
      <p class="text-[11px] font-medium tracking-[3px] uppercase text-viola mb-4">Projects</p>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Built here</h2>
      <p class="text-gray-400 text-base leading-relaxed mb-12 max-w-xl">Open source tools born from real production needs.</p>
    </div>

    <div class="grid gap-6">
      <div class="reveal group relative p-8 sm:p-10 bg-surface-card border border-line rounded-2xl overflow-hidden hover:border-viola-dim hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-viola to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="flex justify-between items-start flex-wrap gap-3 mb-4">
          <h3 class="text-xl font-semibold tracking-tight">
            <a href="https://github.com/smartpricing/queen" target="_blank" rel="noopener" class="text-gray-200 no-underline hover:text-viola transition-colors">Queen MQ &#8599;</a>
          </h3>
          <div class="flex gap-1.5 flex-wrap">
            <span class="text-[11px] px-2.5 py-1 rounded-full bg-viola/[0.08] text-viola border border-viola/[0.15] tracking-wide">C++</span>
            <span class="text-[11px] px-2.5 py-1 rounded-full bg-viola/[0.08] text-viola border border-viola/[0.15] tracking-wide">PostgreSQL</span>
            <span class="text-[11px] px-2.5 py-1 rounded-full bg-viola/[0.08] text-viola border border-viola/[0.15] tracking-wide">libuv</span>
          </div>
        </div>
        <p class="text-gray-400 text-[15px] leading-[1.8] mb-5">A partitioned message queue backed by PostgreSQL. Unlimited FIFO partitions that never block each other, consumer groups with replay, transactional delivery — ACID-guaranteed. Kafka semantics on Postgres, with stateless clients speaking HTTP to a stateless server. Peaks at 45k req/s.</p>
        <div class="flex gap-6 text-xs text-gray-600">
          <span class="flex items-center gap-1.5">&#9733; 41 stars</span>
          <span>420+ commits</span>
          <span>5 client libraries</span>
        </div>
      </div>

      <div class="reveal group relative p-8 sm:p-10 bg-surface-card border border-line rounded-2xl overflow-hidden hover:border-viola-dim hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-viola to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div class="flex justify-between items-start flex-wrap gap-3 mb-4">
          <h3 class="text-xl font-semibold tracking-tight">
            <a href="https://github.com/alice-viola/angy" target="_blank" rel="noopener" class="text-gray-200 no-underline hover:text-viola transition-colors">Angy &#8599;</a>
          </h3>
          <div class="flex gap-1.5 flex-wrap">
            <span class="text-[11px] px-2.5 py-1 rounded-full bg-viola/[0.08] text-viola border border-viola/[0.15] tracking-wide">TypeScript</span>
            <span class="text-[11px] px-2.5 py-1 rounded-full bg-viola/[0.08] text-viola border border-viola/[0.15] tracking-wide">Vue</span>
            <span class="text-[11px] px-2.5 py-1 rounded-full bg-viola/[0.08] text-viola border border-viola/[0.15] tracking-wide">Tauri</span>
          </div>
        </div>
        <p class="text-gray-400 text-[15px] leading-[1.8] mb-5">An AI agent fleet manager and IDE. Define high-level goals, and an autonomous scheduler spawns pipelines of specialist agents — architects, builders, testers — each in dedicated git branches. Incremental builds with verification gates. Goals in, working code out.</p>
        <div class="flex gap-6 text-xs text-gray-600">
          <span>Multi-provider</span>
          <span>214+ commits</span>
          <span>npm: @angycode/core</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Expertise -->
<section id="expertise" class="py-24 sm:py-32 px-6">
  <div class="max-w-4xl mx-auto">
    <div class="reveal">
      <p class="text-[11px] font-medium tracking-[3px] uppercase text-viola mb-4">Expertise</p>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4">The full stack. Literally.</h2>
      <p class="text-gray-400 text-base leading-relaxed mb-12 max-w-xl">From network switches to computer vision models — every layer of the stack.</p>
    </div>

    <div class="grid sm:grid-cols-3 gap-5">
      <div class="reveal p-7 bg-surface-card border border-line rounded-xl hover:border-viola-dim hover:bg-surface-hover transition-all group">
        <h3 class="text-sm font-semibold mb-3 text-gray-200">Infrastructure</h3>
        <p class="text-[13px] text-gray-500 leading-relaxed mb-5">Bare metal servers, datacenters, networking, orchestration. The foundation everything else runs on.</p>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">Bare Metal</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">Kubernetes</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">L2/L3</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">Proxmox</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">VMware</span>
        </div>
      </div>

      <div class="reveal p-7 bg-surface-card border border-line rounded-xl hover:border-viola-dim hover:bg-surface-hover transition-all group">
        <h3 class="text-sm font-semibold mb-3 text-gray-200">Systems & Architecture</h3>
        <p class="text-[13px] text-gray-500 leading-relaxed mb-5">Distributed systems, real-time pipelines, data platforms. Hundreds of services that talk to each other reliably.</p>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">PostgreSQL</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">Kafka</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">Redis</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">Scylla</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">NATS</span>
        </div>
      </div>

      <div class="reveal p-7 bg-surface-card border border-line rounded-xl hover:border-viola-dim hover:bg-surface-hover transition-all group">
        <h3 class="text-sm font-semibold mb-3 text-gray-200">Products</h3>
        <p class="text-[13px] text-gray-500 leading-relaxed mb-5">Complete applications — backend to interface. Desktop apps, AI agent systems, real-time platforms. Shipped and running.</p>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">C++ / Rust</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">TypeScript</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">Swift</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">Vue / Tauri</span>
          <span class="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-line text-gray-500 hover:border-viola-dim hover:text-viola transition-all">AI Agents</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact -->
<section id="contact" class="py-24 sm:py-32 px-6 text-center">
  <div class="max-w-4xl mx-auto">
    <div class="reveal">
      <p class="text-[11px] font-medium tracking-[3px] uppercase text-viola mb-4">Contact</p>
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Let's connect</h2>
    </div>
    <div class="reveal flex justify-center gap-4 mt-8 flex-wrap">
      <a href="https://www.linkedin.com/in/alice-viola-setti-742a83a2/" target="_blank" rel="noopener" class="flex items-center gap-2 px-6 py-3 border border-line rounded-xl text-gray-400 text-sm no-underline hover:border-viola-dim hover:text-viola hover:bg-viola/[0.08] hover:-translate-y-0.5 transition-all">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
      <a href="https://github.com/alice-viola" target="_blank" rel="noopener" class="flex items-center gap-2 px-6 py-3 border border-line rounded-xl text-gray-400 text-sm no-underline hover:border-viola-dim hover:text-viola hover:bg-viola/[0.08] hover:-translate-y-0.5 transition-all">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        GitHub
      </a>
      <a href="https://github.com/viola-engineering" target="_blank" rel="noopener" class="flex items-center gap-2 px-6 py-3 border border-line rounded-xl text-gray-400 text-sm no-underline hover:border-viola-dim hover:text-viola hover:bg-viola/[0.08] hover:-translate-y-0.5 transition-all">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        Viola Engineering
      </a>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="py-10 text-center border-t border-line">
  <p class="text-xs text-gray-600 tracking-wide">&copy; ${new Date().getFullYear()} Viola Engineering</p>
</footer>

<script>
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('bg-surface/85', window.scrollY > 40);
  nav.classList.toggle('border-b', window.scrollY > 40);
  nav.classList.toggle('border-line', window.scrollY > 40);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>
</body>
</html>`;
}
