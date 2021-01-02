import{g as e,f as n,E as s}from"./common-9fe24c8f.js";const a='{"title":"项目概述","frontmatter":{"page":true,"date":"2021-01-03","title":"项目概述","describe":"项目概述"},"headers":[{"level":2,"title":"🚀 基于「VitePress」搭建的极简博客","slug":"🚀-基于「vitepress」搭建的极简博客"},{"level":2,"title":"效果预览","slug":"效果预览"},{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"下载依赖&启动","slug":"下载依赖-启动"},{"level":2,"title":"打包静态","slug":"打包静态"},{"level":2,"title":"鸣谢","slug":"鸣谢"}],"relativePath":"README.md","lastUpdated":1609605765958.3286}';var t={};const p=s('<h2 id="🚀-基于「vitepress」搭建的极简博客"><a class="header-anchor" href="#🚀-基于「vitepress」搭建的极简博客" aria-hidden="true">#</a> 🚀 基于「VitePress」搭建的极简博客</h2><p>现已完成:</p><p>✅ 渲染文章列表</p><p>✅ 使用Vue 3</p><p>✅ 文章目录</p><p>✅ Gitalk 评论</p><p>✅ 文章按时间轴归档</p><p>✅ 文章分类</p><h2 id="效果预览"><a class="header-anchor" href="#效果预览" aria-hidden="true">#</a> 效果预览</h2><p>在线地址:<a href="https://crazymryan.github.io/blog" target="_blank" rel="noopener noreferrer">https://crazymryan.github.io/blog</a></p><p>国内访问:<a href="http://crazy.lovemysoul.vip/blog" target="_blank" rel="noopener noreferrer">http://crazy.lovemysoul.vip/blog</a></p><p>注意：（因为自己的服务器域名马上要过期了，我就懒得再去配置一个 gitalk 了，所以国内访问不携带评论功能。等有时间了在不上来）</p><h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash"><pre><code><span class="token function">git</span> clone git@github.com:CrazyMrYan/blog.git\n<span class="token operator">&amp;</span>\n<span class="token builtin class-name">cd</span> blog\n</code></pre></div><h2 id="下载依赖-启动"><a class="header-anchor" href="#下载依赖-启动" aria-hidden="true">#</a> 下载依赖&amp;启动</h2><div class="language-shell"><pre><code><span class="token comment"># npm</span>\n<span class="token function">npm</span> <span class="token function">install</span>\n<span class="token operator">&amp;</span>\n<span class="token function">npm</span> run dev\n\n<span class="token comment"># yarn</span>\n<span class="token function">yarn</span> <span class="token function">install</span>\n<span class="token operator">&amp;</span>\n<span class="token function">yarn</span> dev\n</code></pre></div><h2 id="打包静态"><a class="header-anchor" href="#打包静态" aria-hidden="true">#</a> 打包静态</h2><p>在打包之前你需要配置 <code>.vitepress</code> &gt; <code>config.js</code> 中加上 base:&#39;你的存放文件名&#39;</p><div class="language-diff"><pre><code>let config = {\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   head:[...],\n</span><span class="token prefix unchanged"> </span><span class="token line">   title:&#39;悲伤日记&#39;,\n</span><span class="token prefix unchanged"> </span><span class="token line">   themeConfig:{...},\n</span><span class="token prefix unchanged"> </span><span class="token line">   dest: &#39;public&#39;,\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   base:&#39;你的存放文件名&#39;\n</span></span>}\n</code></pre></div><p>还需要在 <code>.vitepress</code> &gt; <code>build</code> &gt; <code>index.js</code> 修改 type 为 <code>build</code></p><div class="language-diff"><pre><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> const type = &#39;dev&#39;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const type = &#39;build&#39;\n</span></span>export function Build(){\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    return type === &#39;build&#39; ? &#39;&#39; : &#39;&#39;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    return type === &#39;build&#39; ? &#39;你的存放文件名&#39; : &#39;&#39;\n</span></span>}\n</code></pre></div><div class="language-shell"><pre><code><span class="token comment"># npm</span>\n<span class="token function">npm</span> run build\n\n<span class="token comment"># yarn</span>\n<span class="token function">yarn</span> build\n\n</code></pre></div><h2 id="鸣谢"><a class="header-anchor" href="#鸣谢" aria-hidden="true">#</a> 鸣谢</h2><p>本项目采用 <a href="https://github.com/Moking1997" target="_blank" rel="noopener noreferrer">@Moking1997</a> 搭建的 <a href="https://github.com/Moking1997/vitepress-blog" target="_blank" rel="noopener noreferrer">vitepress-blog</a>,来进行的修改</p>',24);t.render=function(s,a,t,l,r,o){return n(),e("div",null,[p])};export default t;export{a as __pageData};
