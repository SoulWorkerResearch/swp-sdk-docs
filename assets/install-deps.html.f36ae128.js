import{_ as a,r as o,o as r,c as l,a as e,b as t,F as i,e as n,d as p}from"./app.4b015752.js";const c={},d=e("h1",{id:"install-dependencies",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-dependencies","aria-hidden":"true"},"#"),n(" Install dependencies")],-1),u=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),n(" Prerequisites")],-1),h=n("You will need "),_={href:"https://vcpkg.io/en/index.html",target:"_blank",rel:"noopener noreferrer"},k=n("vcpkg"),m=n(" for manage dependencies."),f=e("p",null,"After installation, it is necessary to add the core dependencies used.",-1),g=e("thead",null,[e("tr",null,[e("th",null,"Option"),e("th",null,"Description")])],-1),b={href:"https://github.com/gabime/spdlog",target:"_blank",rel:"noopener noreferrer"},q=n("spdlog"),v=e("td",null,"used for logging",-1),x=p(`<h2 id="manifest" tabindex="-1"><a class="header-anchor" href="#manifest" aria-hidden="true">#</a> Manifest</h2><p>The final manifest file should look something like this.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;you plugin name&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;spdlog&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,3),y=n("If you do not understand what you are talking about, read the "),I={href:"https://vcpkg.io/en/index.html",target:"_blank",rel:"noopener noreferrer"},N=n("vcpkg"),V=n(" documentation more carefully.");function j(B,E){const s=o("ExternalLinkIcon");return r(),l(i,null,[d,u,e("p",null,[h,e("a",_,[k,t(s)]),m]),f,e("table",null,[g,e("tbody",null,[e("tr",null,[e("td",null,[e("a",b,[q,t(s)])]),v])])]),x,e("blockquote",null,[e("p",null,[y,e("a",I,[N,t(s)]),V])])],64)}var D=a(c,[["render",j],["__file","install-deps.html.vue"]]);export{D as default};
