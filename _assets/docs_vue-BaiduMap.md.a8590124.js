import{g as a,j as n,E as s,f as t,q as p}from"./common-9fe24c8f.js";const e='{"title":"快速上手 Vue + 百度地图","frontmatter":{"date":"2020-08-04","title":"快速上手 Vue + 百度地图","tags":["Vue","百度地图"],"describe":"地图也是很常见的一些需求了，今天老严带大家使用简单快速的上手的百度地图"},"headers":[{"level":2,"title":"前言","slug":"前言"},{"level":2,"title":"准备工作","slug":"准备工作"},{"level":2,"title":"1.创建脚手架","slug":"_1-创建脚手架"},{"level":2,"title":"2.安装地图","slug":"_2-安装地图"},{"level":2,"title":"3.在main中引入","slug":"_3-在main中引入"},{"level":2,"title":"4.简单使用百度地图","slug":"_4-简单使用百度地图"},{"level":2,"title":"5.地图缩放","slug":"_5-地图缩放"},{"level":2,"title":"6.自定义地图样式","slug":"_6-自定义地图样式"},{"level":2,"title":"7.地图标注","slug":"_7-地图标注"}],"relativePath":"docs/vue-BaiduMap.md","lastUpdated":1609917444765.793}';var o={};const c=s('<h2 id="前言"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><blockquote><p>地图也是很常见的一些需求了，今天老严带大家使用简单快速的上手的百度地图</p></blockquote><p><strong>目录结构</strong></p><ul><li>准备工作</li><li>1.创建脚手架</li><li>2.安装地图</li><li>3.在main中引入</li><li>4.简单使用百度地图</li><li>5.地图缩放</li><li>6.自定义地图样式</li><li>7.地图标注</li></ul><h2 id="准备工作"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><ul><li><p>注册百度地图并且创建 <code>ak</code></p><ul><li>先进入 <a href="https://link.zhihu.com/?target=http%3A//lbsyun.baidu.com/" target="_blank" rel="noopener noreferrer">http://lbsyun.baidu.com/</a> 官网注册账号</li><li>然后去控制台 -&gt; 我的应用 -&gt; 创建应用</li><li>复制访问应用中 <code>ak</code></li></ul></li></ul><p><img src="https://pic1.zhimg.com/v2-f74bd1d80742412e2d0873c1e633955c_b.jpg" alt=""></p><ul><li><p><code>vue-cli</code></p><ul><li><code>cli</code> 就自行创建吧</li></ul></li><li><p><code>npm</code></p><ul><li>安装 <code>node</code> 环境自带</li></ul></li></ul><h2 id="_1-创建脚手架"><a class="header-anchor" href="#_1-创建脚手架" aria-hidden="true">#</a> 1.创建脚手架</h2><div class="language-shell"><pre><code>vue create baidumap\n<span class="token operator">&amp;&amp;</span>\n<span class="token builtin class-name">cd</span> baidumap\n<span class="token operator">&amp;&amp;</span>\n<span class="token function">yarn</span> serve\n</code></pre></div><h2 id="_2-安装地图"><a class="header-anchor" href="#_2-安装地图" aria-hidden="true">#</a> 2.安装地图</h2><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vue-baidu-map\n</code></pre></div><h2 id="_3-在main中引入"><a class="header-anchor" href="#_3-在main中引入" aria-hidden="true">#</a> 3.在main中引入</h2><p><code>ak</code>是在百度地图开发者平台申请的密钥 详见 <a href="https://link.zhihu.com/?target=http%3A//lbsyun.baidu.com/apiconsole/key" target="_blank" rel="noopener noreferrer">http://lbsyun.baidu.com/apiconsole/key</a></p><p>我们刚刚在前面的准备工作已经做完了这个 ak 直接复制粘贴到下面</p><div class="language-js"><pre><code><span class="token keyword">import</span> BaiduMap <span class="token keyword">from</span> <span class="token string">&#39;vue-baidu-map&#39;</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>BaiduMap<span class="token punctuation">,</span><span class="token punctuation">{</span>ak<span class="token operator">:</span><span class="token string">&#39;此处粘贴你的百度地图ak&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="_4-简单使用百度地图"><a class="header-anchor" href="#_4-简单使用百度地图" aria-hidden="true">#</a> 4.简单使用百度地图</h2><ul><li>在home页面中</li></ul><p>html</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>baidu-map</span>\n    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>allmap<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@ready</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapReady<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>baidu-map</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>js</p><div class="language-js"><pre><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span><span class="token punctuation">{</span>\n    point<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\nmethods<span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token function">mapReady</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> BMap<span class="token punctuation">,</span> map <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 选择一个经纬度作为中心点</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BMap<span class="token punctuation">.</span>Point</span><span class="token punctuation">(</span><span class="token number">113.27</span><span class="token punctuation">,</span> <span class="token number">23.13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      map<span class="token punctuation">.</span><span class="token function">centerAndZoom</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>point<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>css</p><div class="language-css"><pre><code><span class="token comment">/* 设定地图的大小 */</span>\n<span class="token selector">#allmap</span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><img src="https://pic3.zhimg.com/v2-0dbf16a4bae4047ff6224757cfa9638a_b.jpg" alt=""></p><h2 id="_5-地图缩放"><a class="header-anchor" href="#_5-地图缩放" aria-hidden="true">#</a> 5.地图缩放</h2><p>刚刚写完这个简单的地图已经出来了，但是呢好像还不可以缩放</p><p>那让我们加上 <code>:scroll-wheel-zoom=&quot;true&quot;</code></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>baidu-map</span>\n    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>allmap<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:scroll-wheel-zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@ready</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapReady<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>baidu-map</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>再看看效果吧</p><p><img src="https://pic4.zhimg.com/v2-efc5c8717a9a314fc6d7257309d5553f_b.jpg" alt=""></p><h2 id="_6-自定义地图样式"><a class="header-anchor" href="#_6-自定义地图样式" aria-hidden="true">#</a> 6.自定义地图样式</h2><p><code>MapStyle</code></p><p><strong>属性类型描述</strong>styleString个性化模板styleJsonObject个性化Json样式</p><p>html</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>baidu-map</span>\n   <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>allmap<span class="token punctuation">&quot;</span></span>\n   <span class="token attr-name">@ready</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapReady<span class="token punctuation">&quot;</span></span>\n   <span class="token attr-name">:scroll-wheel-zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n   <span class="token attr-name">:map</span><span class="token style-attr language-css"><span class="token attr-name"><span class="token attr-name">Style</span></span><span class="token punctuation">=&quot;</span><span class="token attr-value">mapStyle</span><span class="token punctuation">&quot;</span></span>\n <span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>baidu-map</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>js</p><div class="language-js"><pre><code>  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span><span class="token punctuation">{</span>\n      point<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n      <span class="token comment">// 自定义样式</span>\n      mapStyle<span class="token operator">:</span><span class="token punctuation">{</span>\n        styleJson<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            featureType<span class="token operator">:</span> <span class="token string">&quot;water&quot;</span><span class="token punctuation">,</span>\n            elementType<span class="token operator">:</span> <span class="token string">&quot;geometry&quot;</span><span class="token punctuation">,</span>\n            stylers<span class="token operator">:</span> <span class="token punctuation">{</span>\n              color<span class="token operator">:</span> <span class="token string">&quot;#20ab6a&quot;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><p>在下图中，我们不难发现这个河流、水流以及变成了 #20ab6a</p><p><img src="https://pic3.zhimg.com/v2-f8944d5401e8964ee9b6f32061f3d582_b.jpg" alt=""></p><p>额... 这个河流颜色好像有点奇怪，还是换回来吧</p><h2 id="_7-地图标注"><a class="header-anchor" href="#_7-地图标注" aria-hidden="true">#</a> 7.地图标注</h2><p>我们虽然做到了地图展示效果，但是没有标注的地图总感觉差那么一点点 <code>soul</code></p><div class="language-text"><pre><code>&lt;baidu-map\n  id=&quot;allmap&quot;\n  @ready=&quot;mapReady&quot;\n  :scroll-wheel-zoom=&quot;true&quot;\n&gt;\n  &lt;!-- bm-marker 就是标注点 定位在point的经纬度上 跳动的动画 --&gt;\n  &lt;bm-marker :position=&quot;point&quot; animation=&quot;BMAP_ANIMATION_BOUNCE&quot;&gt;\n  &lt;/bm-marker&gt;\n&lt;/baidu-map&gt;\n</code></pre></div><p><img src="https://pic1.zhimg.com/v2-0721b59256f4e36e6c56f706923374ac_b.jpg" alt=""></p><p>也是简单的讲一讲，因为官网API挺详细的，我也就带大家入个门哈哈</p><p>API地址：<a href="https://link.zhihu.com/?target=http%3A//lbsyun.baidu.com/cms/jsapi/reference/lite.html" target="_blank" rel="noopener noreferrer">http://lbsyun.baidu.com/cms/jsapi/reference/lite.html</a></p>',47);o.render=function(s,e,o,l,u,i){const r=p("Comment");return t(),a("div",null,[c,n(r)])};export default o;export{e as __pageData};