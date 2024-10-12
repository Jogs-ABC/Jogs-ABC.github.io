import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as l,d as e,a,o}from"./app-_wb7MljX.js";const r={},i=e("blockquote",null,[e("p",null,"来自 gpt 的摘要： 本文介绍了程序、进程和线程的概念及其区别。程序是静态的代码文件，而进程是程序执行的动态过程，线程是比进程更小的执行单位。进程是系统资源分配和调度的基本单位，进程之间相互独立，而线程共享进程的资源，因此线程的执行开销小于进程。进程适用于多任务操作、需要高安全性和稳定性的场景，如浏览器和微服务架构。而线程适合 I/O 密集型任务、计算密集型任务以及并发处理场景，如网络请求、图像处理和 Web 服务器。虽然线程在并发处理方面具有优势，但 Python 编程中更多使用多进程来处理 CPU 密集型任务，这是因为 Python 的 GIL 限制了多线程的并行能力，导致多进程能够更好地利用多核 CPU 进行并行计算。")],-1),s=a('<h2 id="程序、进程、线程介绍" tabindex="-1"><a class="header-anchor" href="#程序、进程、线程介绍"><span>程序、进程、线程介绍</span></a></h2><h3 id="程序" tabindex="-1"><a class="header-anchor" href="#程序"><span>程序</span></a></h3><p>程序是含有指令和数据的文件，被存储在磁盘或其他的数据存储设备中，也就是说程序是静态的代码。</p><h3 id="进程" tabindex="-1"><a class="header-anchor" href="#进程"><span>进程</span></a></h3><p>进程是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。</p><h3 id="线程" tabindex="-1"><a class="header-anchor" href="#线程"><span>线程</span></a></h3><p>线程与进程相似，但线程是一个比进程更小的执行单位。一个进程在其执行的过程中可以产生多个线程。与进程不同的是同类的多个线程「共享进程的堆和方法区资源」，但「每个线程有自己的程序计数器、虚拟机栈和本地方法栈」，所以系统在产生一个线程，或是在各个线程之间做切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程。</p><h2 id="进程和线程区别" tabindex="-1"><a class="header-anchor" href="#进程和线程区别"><span>进程和线程区别</span></a></h2><ul><li><p>「安全」：线程是进程划分成的更小的运行单位。线程和进程最大的不同在于基本上各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响。<strong>「线程执行开销小，但不利于资源的管理和保护」</strong>，因此存在「线程安全问题」。进程是系统进行资源分配和调度的一个独立单位，不存在此问题。</p></li><li><p>「速度」：线程是进程的一个实体，一个进程中拥有多个线程，线程之间共享地址空间和其它资源，所以通信和同步等操作线程比进程更加容易，线程上下文切换也比进程上下文切换要快很多。进程切换时，涉及到当前进程的 CPU 环境的保存和新被调度运行进程的 CPU 环境的设置；线程切换仅需要保存和设置少量的寄存器内容，不涉及存储管理方面的操作。</p></li></ul><h2 id="进程和线程各自使用场景是什么" tabindex="-1"><a class="header-anchor" href="#进程和线程各自使用场景是什么"><span>进程和线程各自使用场景是什么？</span></a></h2><h3 id="进程-1" tabindex="-1"><a class="header-anchor" href="#进程-1"><span>进程</span></a></h3><ul><li><p><strong>多任务操作</strong>：操作系统运行多个独立的应用程序，每个应用程序是一个进程。比如同时打开浏览器和文字处理软件。</p></li><li><p><strong>安全性要求高的场景</strong>：由于进程之间有独立的内存空间，一个进程崩溃不会影响其他进程。常见于需要高安全性和稳定性的场景，如浏览器中的不同标签页可能在不同进程中运行，以避免一个标签崩溃导致整个浏览器崩溃。</p></li><li><p><strong>分布式系统</strong>：比如在微服务架构中，不同的服务通常运行在独立的进程中，能够提高系统的可靠性和可维护性。</p></li><li><p><strong>批处理任务</strong>：对于一些批量处理的大任务（如日志分析、数据迁移等），可能会将每个任务分配到不同的进程中运行。</p></li></ul><h3 id="线程-1" tabindex="-1"><a class="header-anchor" href="#线程-1"><span>线程</span></a></h3><ul><li><p><strong>I/O 密集型任务</strong>：对于需要大量 I/O 操作（如网络请求、文件读取等）的程序，可以使用多线程来提高效率。线程切换的开销比进程低，因此在需要同时处理多个 I/O 请求时，使用多线程比多进程更合适。</p></li><li><p><strong>计算密集型任务</strong>：在多核 CPU 环境下，计算密集型任务可以拆分成多个线程来并行执行，充分利用多核 CPU 的能力，比如图像处理、科学计算、机器学习训练等。</p></li><li><p><strong>图形界面程序</strong>：大多数 GUI 程序会使用多线程。主线程用于用户交互，其他线程用于处理耗时任务（如数据加载），以避免界面卡顿。</p></li><li><p><strong>并发处理</strong>：在 Web 服务器中，线程常用于处理并发请求。比如一个服务器可以为每个用户请求分配一个线程，以便同时处理多个请求。</p></li></ul><h2 id="你说的线程这么好-为什么-python-编程很多是多进程的" tabindex="-1"><a class="header-anchor" href="#你说的线程这么好-为什么-python-编程很多是多进程的"><span>你说的线程这么好，为什么 Python 编程很多是多进程的？</span></a></h2><ul><li><p><strong>Python 多进程适用于 CPU 密集型任务</strong>，因为可以绕过 GIL 的限制，真正实现并行计算，充分利用多核 CPU。</p></li><li><p><strong>多线程在 I/O 密集型任务中仍然有效</strong>，但由于 GIL 的存在，不能有效利用多核 CPU 进行并行计算密集型任务。</p></li></ul>',16);function p(h,c){return o(),n("div",null,[i,l("more"),s])}const u=t(r,[["render",p],["__file","浅谈线程和进程.html.vue"]]),m=JSON.parse(`{"path":"/%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF/%E6%B5%85%E8%B0%88%E7%BA%BF%E7%A8%8B%E5%92%8C%E8%BF%9B%E7%A8%8B.html","title":"「浅谈线程和进程」","lang":"zh-CN","frontmatter":{"title":"「浅谈线程和进程」","author":"Jogs","date":"2024-09-19T00:00:00.000Z","category":["技术"],"tag":["并发"],"editLink":false,"description":"来自 gpt 的摘要： 本文介绍了程序、进程和线程的概念及其区别。程序是静态的代码文件，而进程是程序执行的动态过程，线程是比进程更小的执行单位。进程是系统资源分配和调度的基本单位，进程之间相互独立，而线程共享进程的资源，因此线程的执行开销小于进程。进程适用于多任务操作、需要高安全性和稳定性的场景，如浏览器和微服务架构。而线程适合 I/O 密集型任务、计...","head":[["meta",{"property":"og:url","content":"https://jogs-abc.github.io/%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF/%E6%B5%85%E8%B0%88%E7%BA%BF%E7%A8%8B%E5%92%8C%E8%BF%9B%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Jogs' blog"}],["meta",{"property":"og:title","content":"「浅谈线程和进程」"}],["meta",{"property":"og:description","content":"来自 gpt 的摘要： 本文介绍了程序、进程和线程的概念及其区别。程序是静态的代码文件，而进程是程序执行的动态过程，线程是比进程更小的执行单位。进程是系统资源分配和调度的基本单位，进程之间相互独立，而线程共享进程的资源，因此线程的执行开销小于进程。进程适用于多任务操作、需要高安全性和稳定性的场景，如浏览器和微服务架构。而线程适合 I/O 密集型任务、计..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Jogs"}],["meta",{"property":"article:tag","content":"并发"}],["meta",{"property":"article:published_time","content":"2024-09-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"「浅谈线程和进程」\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jogs\\"}]}"]]},"headers":[{"level":2,"title":"程序、进程、线程介绍","slug":"程序、进程、线程介绍","link":"#程序、进程、线程介绍","children":[{"level":3,"title":"程序","slug":"程序","link":"#程序","children":[]},{"level":3,"title":"进程","slug":"进程","link":"#进程","children":[]},{"level":3,"title":"线程","slug":"线程","link":"#线程","children":[]}]},{"level":2,"title":"进程和线程区别","slug":"进程和线程区别","link":"#进程和线程区别","children":[]},{"level":2,"title":"进程和线程各自使用场景是什么？","slug":"进程和线程各自使用场景是什么","link":"#进程和线程各自使用场景是什么","children":[{"level":3,"title":"进程","slug":"进程-1","link":"#进程-1","children":[]},{"level":3,"title":"线程","slug":"线程-1","link":"#线程-1","children":[]}]},{"level":2,"title":"你说的线程这么好，为什么 Python 编程很多是多进程的？","slug":"你说的线程这么好-为什么-python-编程很多是多进程的","link":"#你说的线程这么好-为什么-python-编程很多是多进程的","children":[]}],"git":{},"readingTime":{"minutes":4.68,"words":1405},"filePathRelative":"文章/技术/浅谈线程和进程.md","localizedDate":"2024年9月19日","excerpt":"<blockquote>\\n<p>来自 gpt 的摘要：\\n本文介绍了程序、进程和线程的概念及其区别。程序是静态的代码文件，而进程是程序执行的动态过程，线程是比进程更小的执行单位。进程是系统资源分配和调度的基本单位，进程之间相互独立，而线程共享进程的资源，因此线程的执行开销小于进程。进程适用于多任务操作、需要高安全性和稳定性的场景，如浏览器和微服务架构。而线程适合 I/O 密集型任务、计算密集型任务以及并发处理场景，如网络请求、图像处理和 Web 服务器。虽然线程在并发处理方面具有优势，但 Python 编程中更多使用多进程来处理 CPU 密集型任务，这是因为 Python 的 GIL 限制了多线程的并行能力，导致多进程能够更好地利用多核 CPU 进行并行计算。</p>\\n</blockquote>","autoDesc":true}`);export{u as comp,m as data};
