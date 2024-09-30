import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,d as e,a as i,o as n}from"./app-4g_3FCik.js";const l="/assets/images/github%E4%BB%93%E5%BA%93%E5%88%9B%E5%BB%BA-1.png",o="/assets/images/SSH%E5%9C%B0%E5%9D%80.png",r="/assets/images/%E9%93%BE%E6%8E%A5.png",p={},c=e("blockquote",null,[e("p",null,"来自 gpt 的摘要： 本文为零基础小白提供了一个简单易行的指南，教你如何使用 VuePress Theme Hope 框架搭建个人博客。无需任何前端开发经验，只需按照步骤操作即可。你需要准备 vscode 编辑器、Github 账号（可选）、git 工具（可选）、Node.js 和 npm。首先，通过命令创建初始项目，然后按照官方指南进行自定义设置。接着，本地运行项目进行预览，最后将项目打包并部署到 Github Pages 上。部署成功后，你就能通过项目链接访问自己的博客。详细步骤请参考文中说明，有任何问题欢迎在评论区提出。")],-1),h=i('<h2 id="写在前面" tabindex="-1"><a class="header-anchor" href="#写在前面"><span>写在前面</span></a></h2><ul><li>笔者在勘写本文时对前端开发一窍不通，本文旨在指导 0 基础的小白能够免费搭建出属于自己的个人网站，不涉及技术方面的讲解，读者只需跟随本文操作即可，如有讲述不妥的地方，欢迎评论区指出。</li><li>本文所搭建的博客选用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">VuePress Theme Hope</a> 博客框架，相关介绍参考<a href="https://theme-hope.vuejs.press/zh/guide/intro/intro.html" target="_blank" rel="noopener noreferrer">官方文档</a>。</li></ul><h2 id="你需要的准备" tabindex="-1"><a class="header-anchor" href="#你需要的准备"><span>你需要的准备</span></a></h2><ul><li>vscode 编辑器</li><li>github 账号（可选，用于在部署环节使用）</li><li>git 工具（可选，用于在部署环节使用）</li><li>Node.js（LTS 版本，version &gt;= 18.19.0、20.x）</li><li>npm（version &gt;= 8）</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以在控制台执行 <code>node -v</code> 和 <code>npm -v</code> 检查是否安装成功和版本是否符合要求。</p></div><h2 id="搭建你的博客" tabindex="-1"><a class="header-anchor" href="#搭建你的博客"><span>搭建你的博客</span></a></h2><h3 id="_1-创建项目" tabindex="-1"><a class="header-anchor" href="#_1-创建项目"><span>1）创建项目</span></a></h3><ul><li>创建项目路径：建议路径全英文（eg：<code>D:\\projects\\vuepress-theme-hope\\</code>）</li><li>创建初始项目：打开控制台，路径对应上一步，执行 <code>npm init vuepress-theme-hope@latest [dir]</code></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这里的 <code>[dir]</code> 是一个参数，你需要使用真实的文件夹名称替换它，例如 <code>docs</code>、<code>blog</code> 或其他你喜欢的名称。</p></div><ul><li>此时会自动生成项目，第一个选项选择简体中文，后面的选项有精力的可以研究一下，可以全部回车跳过。</li></ul><h3 id="_2-自定义你的博客" tabindex="-1"><a class="header-anchor" href="#_2-自定义你的博客"><span>2）自定义你的博客</span></a></h3><p>此时你的博客项目已经生成完毕，你可以通过<a href="https://theme-hope.vuejs.press/zh/guide/" target="_blank" rel="noopener noreferrer">官方指南</a>对你的博客项目进行了解和自定义，这里就不赘述了。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这里建议可以先进行下面的步骤，等成功部署好项目后再回来尝试更改你的博客。</p></div><h3 id="_3-本地运行你的博客" tabindex="-1"><a class="header-anchor" href="#_3-本地运行你的博客"><span>3）本地运行你的博客</span></a></h3><p>在 vscode 中打开 <code>package.json</code> 文件，选中并运行 <code>docs:dev</code> 脚本将项目部署在本地，可以在浏览器地址栏直接输入对应地址，默认地址为 <code>localhost:8080</code>。</p><h2 id="部署你的博客" tabindex="-1"><a class="header-anchor" href="#部署你的博客"><span>部署你的博客</span></a></h2><h3 id="_1-打包项目" tabindex="-1"><a class="header-anchor" href="#_1-打包项目"><span>1）打包项目</span></a></h3><p>在 vscode 中打开 <code>package.json</code> 文件，选中并运行 <code>docs:build</code> 脚本对项目自动打包，打包后的项目将存放在 <code>\\[dir]\\src\\.vuepress\\dist</code> 文件夹中。</p><h3 id="_2-将项目部署在-github-page" tabindex="-1"><a class="header-anchor" href="#_2-将项目部署在-github-page"><span>2）将项目部署在 github page</span></a></h3><ul><li>github 创建仓库： 仓库名称建议填写 <code>[username].github.io</code>，可以省去一些改配置的麻烦，有能力的可自行研究<img src="'+l+`" alt="" loading="lazy"></li><li>push 你的 dist 项目文件： 将 dist 的内容复制到新的文件夹下并右键打开 Git Bash ，参考以下命令：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>git init</span></span>
<span class="line"><span>git add *</span></span>
<span class="line"><span>git commit -m &quot;first commit&quot;</span></span>
<span class="line"><span>git branch -M main</span></span>
<span class="line"><span>git push -f [仓库的SSH地址] main</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>在哪里找 SSH 地址： <img src="`+o+'" alt="" loading="lazy"><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 push 的时候有可能出现 <code>git@github.com:Permission denied</code> 报错，参考<a href="https://blog.csdn.net/W_317/article/details/106518894" target="_blank" rel="noopener noreferrer">文章</a></p></div></li></ul><h3 id="_3-获取项目链接" tabindex="-1"><a class="header-anchor" href="#_3-获取项目链接"><span>3）获取项目链接</span></a></h3><p>打开 github 项目仓库的 Settings ，在 Pages 中即可发现自己的项目链接，成功打开则部署完成。<img src="'+r+'" alt="" loading="lazy"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>以上就是文章的全部内容了，关于博客的设计也可以参考大佬的 <a href="https://theme-hope.vuejs.press/zh/demo/projects.html#%E4%BD%BF%E7%94%A8-vuepress-theme-hope-%E7%9A%84%E6%96%87%E6%A1%A3" target="_blank" rel="noopener noreferrer">开源项目</a>，如果有什么问题欢迎在评论区提出，我会一一解答。</p>',24);function d(g,m){return n(),s("div",null,[c,a("more"),h])}const _=t(p,[["render",d],["__file","0基础免费搭建个人博客.html.vue"]]),v=JSON.parse(`{"path":"/%E6%96%87%E7%AB%A0/%E5%B0%8F%E7%99%BD%E6%95%99%E7%A8%8B/0%E5%9F%BA%E7%A1%80%E5%85%8D%E8%B4%B9%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2.html","title":"教你如何0基础免费搭建个人博客","lang":"zh-CN","frontmatter":{"title":"教你如何0基础免费搭建个人博客","icon":"gears","author":"Jogs","date":"2024-06-29T00:00:00.000Z","isOriginal":true,"cover":"/assets/images/wordpress-265132_640.jpg","category":["教程"],"tag":["0基础"],"editLink":false,"description":"来自 gpt 的摘要： 本文为零基础小白提供了一个简单易行的指南，教你如何使用 VuePress Theme Hope 框架搭建个人博客。无需任何前端开发经验，只需按照步骤操作即可。你需要准备 vscode 编辑器、Github 账号（可选）、git 工具（可选）、Node.js 和 npm。首先，通过命令创建初始项目，然后按照官方指南进行自定义设置。...","head":[["meta",{"property":"og:url","content":"https://jogs-abc.github.io/%E6%96%87%E7%AB%A0/%E5%B0%8F%E7%99%BD%E6%95%99%E7%A8%8B/0%E5%9F%BA%E7%A1%80%E5%85%8D%E8%B4%B9%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2.html"}],["meta",{"property":"og:site_name","content":"Jogs's blog"}],["meta",{"property":"og:title","content":"教你如何0基础免费搭建个人博客"}],["meta",{"property":"og:description","content":"来自 gpt 的摘要： 本文为零基础小白提供了一个简单易行的指南，教你如何使用 VuePress Theme Hope 框架搭建个人博客。无需任何前端开发经验，只需按照步骤操作即可。你需要准备 vscode 编辑器、Github 账号（可选）、git 工具（可选）、Node.js 和 npm。首先，通过命令创建初始项目，然后按照官方指南进行自定义设置。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://jogs-abc.github.io/assets/images/wordpress-265132_640.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://jogs-abc.github.io/assets/images/wordpress-265132_640.jpg"}],["meta",{"name":"twitter:image:alt","content":"教你如何0基础免费搭建个人博客"}],["meta",{"property":"article:author","content":"Jogs"}],["meta",{"property":"article:tag","content":"0基础"}],["meta",{"property":"article:published_time","content":"2024-06-29T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"教你如何0基础免费搭建个人博客\\",\\"image\\":[\\"https://jogs-abc.github.io/assets/images/github仓库创建-1.png\\",\\"https://jogs-abc.github.io/assets/images/SSH地址.png\\",\\"https://jogs-abc.github.io/assets/images/链接.png\\"],\\"datePublished\\":\\"2024-06-29T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jogs\\"}]}"]]},"headers":[{"level":2,"title":"写在前面","slug":"写在前面","link":"#写在前面","children":[]},{"level":2,"title":"你需要的准备","slug":"你需要的准备","link":"#你需要的准备","children":[]},{"level":2,"title":"搭建你的博客","slug":"搭建你的博客","link":"#搭建你的博客","children":[{"level":3,"title":"1）创建项目","slug":"_1-创建项目","link":"#_1-创建项目","children":[]},{"level":3,"title":"2）自定义你的博客","slug":"_2-自定义你的博客","link":"#_2-自定义你的博客","children":[]},{"level":3,"title":"3）本地运行你的博客","slug":"_3-本地运行你的博客","link":"#_3-本地运行你的博客","children":[]}]},{"level":2,"title":"部署你的博客","slug":"部署你的博客","link":"#部署你的博客","children":[{"level":3,"title":"1）打包项目","slug":"_1-打包项目","link":"#_1-打包项目","children":[]},{"level":3,"title":"2）将项目部署在 github page","slug":"_2-将项目部署在-github-page","link":"#_2-将项目部署在-github-page","children":[]},{"level":3,"title":"3）获取项目链接","slug":"_3-获取项目链接","link":"#_3-获取项目链接","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":3.4,"words":1021},"filePathRelative":"文章/小白教程/0基础免费搭建个人博客.md","localizedDate":"2024年6月29日","excerpt":"<blockquote>\\n<p>来自 gpt 的摘要：\\n本文为零基础小白提供了一个简单易行的指南，教你如何使用 VuePress Theme Hope 框架搭建个人博客。无需任何前端开发经验，只需按照步骤操作即可。你需要准备 vscode 编辑器、Github 账号（可选）、git 工具（可选）、Node.js 和 npm。首先，通过命令创建初始项目，然后按照官方指南进行自定义设置。接着，本地运行项目进行预览，最后将项目打包并部署到 Github Pages 上。部署成功后，你就能通过项目链接访问自己的博客。详细步骤请参考文中说明，有任何问题欢迎在评论区提出。</p>\\n</blockquote>","autoDesc":true}`);export{_ as comp,v as data};
