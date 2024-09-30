import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as r,d as t,a as n,o as a}from"./app-4g_3FCik.js";const P={},l=t("blockquote",null,[t("p",null,"来自 gpt 的摘要： TCP（Transmission Control Protocol）是传输层协议，提供可靠、面向连接的数据传输，适用于网页浏览、电子邮件等需要稳定传输的应用。它通过流量控制和拥塞控制等机制，保证数据传输过程中的完整性和顺序性。UDP（User Datagram Protocol）则是一种无连接、不可靠的传输协议，传输速度快，但可能丢包，适用于对实时性要求高的应用，如视频通话和直播。 TCP 和 UDP 的主要区别在于：TCP 是面向连接的，提供可靠的传输，保证数据不丢失、按序到达，同时需要维持状态，因此传输效率较低。UDP 不需要建立连接，也不保证数据的完整性，但传输效率更高。此外，TCP 是面向字节流的，UDP 是面向报文的，TCP 的首部开销大于 UDP，并且 TCP 只支持点对点通信，而 UDP 支持多种通信模式。 在应用选择上，TCP 适合文件传输、邮件等对传输准确性要求高的场景，而 UDP 更适合语音、视频等对实时性要求高的场景。运行在 TCP 协议上的应用包括 HTTP（3.0 之前）、HTTPS、FTP、SMTP、POP3/IMAP、Telnet、SSH 等；运行在 UDP 协议上的应用包括 HTTP/3.0、DHCP 和 DNS 等。")],-1),s=n('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><h3 id="tcp-transmission-control-protocol-协议" tabindex="-1"><a class="header-anchor" href="#tcp-transmission-control-protocol-协议"><span>TCP（Transmission Control Protocol）协议：</span></a></h3><p>TCP 协议是 TCP/IP 协议族中的传输层协议，它建立在 IP 协议之上，为应用程序提供「可靠的、面向连接」的数据传输服务。TCP 协议通过一系列复杂的控制机制，如「流量控制、拥塞控制」等，确保数据在传输过程中「不会丢失、重复或乱序」。它适用于需要可靠传输的应用，如网页浏览、电子邮件等。</p><h3 id="udp-user-datagram-protocol-协议" tabindex="-1"><a class="header-anchor" href="#udp-user-datagram-protocol-协议"><span>UDP（User Datagram Protocol）协议：</span></a></h3><p>与 TCP 协议不同，UDP 协议是一种「无连接的、不可靠」的数据传输协议，它在传输层工作。由于 UDP 没有 TCP 那样的复杂控制机制，所以它的「传输速度较快」，但也「有较高的丢包风险」。UDP 常用于对实时性要求较高的应用，如在线视频、语音通话等。</p><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别</span></a></h2><h3 id="理论区别" tabindex="-1"><a class="header-anchor" href="#理论区别"><span>理论区别：</span></a></h3><ul><li><p><strong>是否面向连接</strong>：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。</p></li><li><p><strong>是否是可靠传输</strong>：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP 提供可靠的传输服务，TCP 在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制。通过 TCP 连接传输的数据，无差错、不丢失、不重复、并且按序到达。</p></li><li><p><strong>是否有状态</strong>：这个和上面的“是否可靠传输”相对应。TCP 传输是有状态的，这个有状态说的是 TCP 会去记录自己发送消息的状态比如消息是否发送了、是否被接收了等等。为此，TCP 需要维持复杂的连接状态表。而 UDP 是无状态服务，简单来说就是不管发出去之后的事情了。</p></li><li><p><strong>传输效率</strong>：由于使用 TCP 进行传输的时候多了连接、确认、重传等机制，所以 TCP 的传输效率要比 UDP 低很多。</p></li><li><p><strong>传输形式</strong>：TCP 是面向字节流的，UDP 是面向报文的。</p></li><li><p><strong>首部开销</strong>：TCP 首部开销（20 ～ 60 字节）比 UDP 首部开销（8 字节）要大。</p></li><li><p><strong>是否提供广播或多播服务</strong>：TCP 只支持点对点通信，UDP 支持一对一、一对多、多对一、多对多。</p></li></ul><h3 id="如何选择" tabindex="-1"><a class="header-anchor" href="#如何选择"><span>如何选择？</span></a></h3><ul><li><p><strong>TCP 用于对传输准确性要求特别高的场景</strong>，比如文件传输、发送和接收邮件、远程登录等等。</p></li><li><p><strong>UDP 一般用于即时通信</strong>，比如：语音、 视频、直播等等。这些场景对传输数据的准确性要求不是特别高，比如你看视频即使少个一两帧，实际给人的感觉区别也不大。</p></li></ul><h3 id="使用-tcp-的协议有哪些-使用-udp-的协议有哪些" tabindex="-1"><a class="header-anchor" href="#使用-tcp-的协议有哪些-使用-udp-的协议有哪些"><span>使用 TCP 的协议有哪些？使用 UDP 的协议有哪些？</span></a></h3><ul><li><strong>运行于 TCP 协议之上的协议</strong>：</li></ul><p>1. <strong>HTTP 协议（HTTP/3.0 之前）</strong>：超文本传输协议（HTTP，HyperText Transfer Protocol)是一种用于传输超文本和多媒体内容的协议，主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当我们使用浏览器浏览网页的时候，我们网页就是通过 HTTP 请求进行加载的。</p><p>2. <strong>HTTPS 协议</strong>：更安全的超文本传输协议(HTTPS,Hypertext Transfer Protocol Secure)，身披 SSL 外衣的 HTTP 协议</p><p>3. <strong>FTP 协议</strong>：文件传输协议 FTP（File Transfer Protocol）是一种用于在计算机之间传输文件的协议，可以屏蔽操作系统和文件存储方式。「注意 ⚠️：FTP 是一种不安全的协议，因为它在传输过程中不会对数据进行加密。建议在传输敏感数据时使用更安全的协议，如 SFTP。」</p><p>4. <strong>SMTP 协议</strong>：简单邮件传输协议（SMTP，Simple Mail Transfer Protocol）的缩写，是一种用于发送电子邮件的协议。「注意 ⚠️：SMTP 协议只负责邮件的发送，而不是接收。要从邮件服务器接收邮件，需要使用 POP3 或 IMAP 协议。」</p><p>5. - <strong>POP3/IMAP 协议</strong>：两者都是负责邮件接收的协议。IMAP 协议是比 POP3 更新的协议，它在功能和性能上都更加强大。IMAP 支持邮件搜索、标记、分类、归档等高级功能，而且可以在多个设备之间同步邮件状态。几乎所有现代电子邮件客户端和服务器都支持 IMAP。</p><p>6. <strong>Telnet 协议</strong>：用于通过一个终端登陆到其他服务器。Telnet 协议的最大缺点之一是所有数据（包括用户名和密码）均以明文形式发送，这有潜在的安全风险。这就是为什么如今很少使用 Telnet，而是使用一种称为 SSH 的非常安全的网络传输协议的主要原因。</p><p>7. <strong>SSH 协议</strong> : SSH（Secure Shell）是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。SSH 建立在可靠的传输协议 TCP 之上。</p><ul><li><strong>运行于 UDP 协议之上的协议</strong>：</li></ul><p>1. <strong>HTTP 协议（HTTP/3.0）</strong>： HTTP/3.0 弃用 TCP，改用基于 UDP 的 QUIC 协议。</p><p>2. <strong>DHCP 协议</strong>：动态主机配置协议，动态配置 IP 地址</p><p>3. <strong>DNS</strong>：域名系统（DNS，Domain Name System）将人类可读的域名 (例如，<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">www.baidu.com</a>) 转换为机器可读的 IP 地址 (例如，220.181.38.148)。我们可以将其理解为专为互联网设计的电话薄。实际上，DNS 同时支持 UDP 和 TCP 协议。</p>',23);function p(i,T){return a(),e("div",null,[l,r("more"),s])}const C=o(P,[["render",p],["__file","TCP和UDP的区别.html.vue"]]),d=JSON.parse(`{"path":"/%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF/TCP%E5%92%8CUDP%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"「TCP和UDP的区别」","lang":"zh-CN","frontmatter":{"title":"「TCP和UDP的区别」","author":"Jogs","date":"2024-09-30T00:00:00.000Z","category":["技术"],"tag":["计算机网络"],"editLink":false,"description":"来自 gpt 的摘要： TCP（Transmission Control Protocol）是传输层协议，提供可靠、面向连接的数据传输，适用于网页浏览、电子邮件等需要稳定传输的应用。它通过流量控制和拥塞控制等机制，保证数据传输过程中的完整性和顺序性。UDP（User Datagram Protocol）则是一种无连接、不可靠的传输协议，传输速度快，但可...","head":[["meta",{"property":"og:url","content":"https://jogs-abc.github.io/%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF/TCP%E5%92%8CUDP%E7%9A%84%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"Jogs's blog"}],["meta",{"property":"og:title","content":"「TCP和UDP的区别」"}],["meta",{"property":"og:description","content":"来自 gpt 的摘要： TCP（Transmission Control Protocol）是传输层协议，提供可靠、面向连接的数据传输，适用于网页浏览、电子邮件等需要稳定传输的应用。它通过流量控制和拥塞控制等机制，保证数据传输过程中的完整性和顺序性。UDP（User Datagram Protocol）则是一种无连接、不可靠的传输协议，传输速度快，但可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Jogs"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:published_time","content":"2024-09-30T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"「TCP和UDP的区别」\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-30T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jogs\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[{"level":3,"title":"TCP（Transmission Control Protocol）协议：","slug":"tcp-transmission-control-protocol-协议","link":"#tcp-transmission-control-protocol-协议","children":[]},{"level":3,"title":"UDP（User Datagram Protocol）协议：","slug":"udp-user-datagram-protocol-协议","link":"#udp-user-datagram-protocol-协议","children":[]}]},{"level":2,"title":"区别","slug":"区别","link":"#区别","children":[{"level":3,"title":"理论区别：","slug":"理论区别","link":"#理论区别","children":[]},{"level":3,"title":"如何选择？","slug":"如何选择","link":"#如何选择","children":[]},{"level":3,"title":"使用 TCP 的协议有哪些？使用 UDP 的协议有哪些？","slug":"使用-tcp-的协议有哪些-使用-udp-的协议有哪些","link":"#使用-tcp-的协议有哪些-使用-udp-的协议有哪些","children":[]}]}],"git":{},"readingTime":{"minutes":6.03,"words":1809},"filePathRelative":"文章/技术/TCP和UDP的区别.md","localizedDate":"2024年9月30日","excerpt":"<blockquote>\\n<p>来自 gpt 的摘要：\\nTCP（Transmission Control Protocol）是传输层协议，提供可靠、面向连接的数据传输，适用于网页浏览、电子邮件等需要稳定传输的应用。它通过流量控制和拥塞控制等机制，保证数据传输过程中的完整性和顺序性。UDP（User Datagram Protocol）则是一种无连接、不可靠的传输协议，传输速度快，但可能丢包，适用于对实时性要求高的应用，如视频通话和直播。\\nTCP 和 UDP 的主要区别在于：TCP 是面向连接的，提供可靠的传输，保证数据不丢失、按序到达，同时需要维持状态，因此传输效率较低。UDP 不需要建立连接，也不保证数据的完整性，但传输效率更高。此外，TCP 是面向字节流的，UDP 是面向报文的，TCP 的首部开销大于 UDP，并且 TCP 只支持点对点通信，而 UDP 支持多种通信模式。\\n在应用选择上，TCP 适合文件传输、邮件等对传输准确性要求高的场景，而 UDP 更适合语音、视频等对实时性要求高的场景。运行在 TCP 协议上的应用包括 HTTP（3.0 之前）、HTTPS、FTP、SMTP、POP3/IMAP、Telnet、SSH 等；运行在 UDP 协议上的应用包括 HTTP/3.0、DHCP 和 DNS 等。</p>\\n</blockquote>","autoDesc":true}`);export{C as comp,d as data};
