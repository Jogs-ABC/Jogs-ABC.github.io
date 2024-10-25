import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as n,d as e,a as i,o}from"./app-C_IVUJ4N.js";const r={},a=e("blockquote",null,[e("p",null,"来自 gpt 的摘要： 这篇文章介绍了AOP（面向切面编程）的概念、术语、实现方式及应用场景。AOP旨在将横切关注点（如日志、事务、权限等）从业务逻辑中分离，实现代码解耦和复用。核心术语包括切面（Aspect）、连接点（JoinPoint）、通知（Advice）、切点（Pointcut）和织入（Weaving）。AOP常通过Spring AOP的动态代理或AspectJ的字节码操作来实现。Spring AOP适合简单场景，基于代理技术，而AspectJ性能更高，适用于复杂情况。AOP广泛用于日志记录、性能统计、事务管理、权限控制、接口限流和缓存管理等领域。")],-1),c=i('<h2 id="aop-是什么" tabindex="-1"><a class="header-anchor" href="#aop-是什么"><span>AOP 是什么？</span></a></h2><p>AOP（Aspect Oriented Programming）即面向切面编程，AOP 是 OOP（面向对象编程）的一种延续，二者互补，并不对立。</p><p>AOP 的目的是将横切关注点（如日志记录、事务管理、权限控制、接口限流、接口幂等等）从核心业务逻辑中分离出来，通过动态代理、字节码操作等技术，实现代码的复用和解耦，提高代码的可维护性和可扩展性。OOP 的目的是将业务逻辑按照对象的属性和行为进行封装，通过类、对象、继承、多态等概念，实现代码的模块化和层次化（也能实现代码的复用），提高代码的可读性和可维护性。</p><p>AOP 切面编程涉及到的一些专业术语：</p><ul><li><p><strong>切关注点（cross-cutting concerns）</strong> ：多个类或对象中的公共行为（如日志记录、事务管理、权限控制、接口限流、接口幂等等）。</p></li><li><p><strong>切面（Aspect）</strong>：对横切关注点进行封装的类，一个切面是一个类。切面可以定义多个通知，用来实现具体的功能。</p></li><li><p><strong>连接点（JoinPoint）</strong>：连接点是方法调用或者方法执行时的某个特定时刻（如方法调用、异常抛出等）。</p></li><li><p><strong>通知（Advice）</strong>：通知就是切面在某个连接点要执行的操作。通知有五种类型，分别是前置通知（Before）、后置通知（After）、返回通知（AfterReturning）、异常通知（AfterThrowing）和环绕通知（Around）。前四种通知都是在目标方法的前后执行，而环绕通知可以控制目标方法的执行过程。</p></li><li><p><strong>切点（Pointcut）</strong>：一个切点是一个表达式，它用来匹配哪些连接点需要被切面所增强。切点可以通过注解、正则表达式、逻辑运算等方式来定义。比如 <code>execution(* com.xyz.service..*(..))</code>匹配 <code>com.xyz.service</code> 包及其子包下的类或接口。</p></li><li><p><strong>织入（Weaving）</strong>：织入是将切面和目标对象连接起来的过程，也就是将通知应用到切点匹配的连接点上。常见的织入时机有两种，分别是编译期织入（Compile-Time Weaving 如：AspectJ）和运行期织入（Runtime Weaving 如：AspectJ、Spring AOP）。</p></li></ul><h2 id="spring-aop-和-aspectj-aop-有什么区别" tabindex="-1"><a class="header-anchor" href="#spring-aop-和-aspectj-aop-有什么区别"><span>Spring AOP 和 AspectJ AOP 有什么区别？</span></a></h2><p><strong>Spring AOP 属于运行时增强，而 AspectJ 是编译时增强。</strong> Spring AOP 基于代理(Proxying)，而 AspectJ 基于字节码操作(Bytecode Manipulation)。</p><p>Spring AOP 已经集成了 AspectJ ，AspectJ 应该算的上是 Java 生态系统中最完整的 AOP 框架了。AspectJ 相比于 Spring AOP 功能更加强大，但是 Spring AOP 相对来说更简单，</p><p>如果我们的切面比较少，那么两者性能差异不大。但是，当切面太多的话，最好选择 AspectJ ，它比 Spring AOP 快很多。</p><h2 id="aop-怎么用" tabindex="-1"><a class="header-anchor" href="#aop-怎么用"><span>AOP 怎么用？</span></a></h2><p>AOP 的常见实现方式有动态代理、字节码操作等方式。</p><p>Spring AOP 就是基于动态代理的，如果要代理的对象，实现了某个接口，那么 Spring AOP 会使用 <strong>JDK Proxy</strong>，去创建代理对象，而对于没有实现接口的对象，就无法使用 JDK Proxy 去进行代理了，这时候 Spring AOP 会使用 <strong>Cglib</strong> 生成一个被代理对象的子类来作为代理。</p><h2 id="aop-的适用场景" tabindex="-1"><a class="header-anchor" href="#aop-的适用场景"><span>AOP 的适用场景？</span></a></h2><ul><li><p>日志记录：自定义日志记录注解，利用 AOP，一行代码即可实现日志记录。</p></li><li><p>性能统计：利用 AOP 在目标方法的执行前后统计方法的执行时间，方便优化和分析。</p></li><li><p>事务管理：<code>@Transactional</code> 注解可以让 Spring 为我们进行事务管理比如回滚异常操作，免去了重复的事务管理逻辑。<code>@Transactional</code>注解就是基于 AOP 实现的。</p></li><li><p>权限控制：利用 AOP 在目标方法执行前判断用户是否具备所需要的权限，如果具备，就执行目标方法，否则就不执行。例如，SpringSecurity 利用<code>@PreAuthorize</code> 注解一行代码即可自定义权限校验。</p></li><li><p>接口限流：利用 AOP 在目标方法执行前通过具体的限流算法和实现对请求进行限流处理。</p></li><li><p>缓存管理：利用 AOP 在目标方法执行前后进行缓存的读取和更新。</p></li></ul>',14);function s(l,A){return o(),p("div",null,[a,n("more"),c])}const O=t(r,[["render",s],["__file","浅谈Spring AOP.html.vue"]]),d=JSON.parse(`{"path":"/%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF%E6%95%B4%E7%90%86/%E6%B5%85%E8%B0%88Spring%20AOP.html","title":"「浅谈Spring AOP」","lang":"zh-CN","frontmatter":{"title":"「浅谈Spring AOP」","author":"Jogs","date":"2024-10-14T00:00:00.000Z","category":["技术"],"tag":["Spring"],"editLink":false,"description":"来自 gpt 的摘要： 这篇文章介绍了AOP（面向切面编程）的概念、术语、实现方式及应用场景。AOP旨在将横切关注点（如日志、事务、权限等）从业务逻辑中分离，实现代码解耦和复用。核心术语包括切面（Aspect）、连接点（JoinPoint）、通知（Advice）、切点（Pointcut）和织入（Weaving）。AOP常通过Spring AOP的动态代...","head":[["meta",{"property":"og:url","content":"https://jogs-abc.github.io/%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF%E6%95%B4%E7%90%86/%E6%B5%85%E8%B0%88Spring%20AOP.html"}],["meta",{"property":"og:site_name","content":"Jogs' blog"}],["meta",{"property":"og:title","content":"「浅谈Spring AOP」"}],["meta",{"property":"og:description","content":"来自 gpt 的摘要： 这篇文章介绍了AOP（面向切面编程）的概念、术语、实现方式及应用场景。AOP旨在将横切关注点（如日志、事务、权限等）从业务逻辑中分离，实现代码解耦和复用。核心术语包括切面（Aspect）、连接点（JoinPoint）、通知（Advice）、切点（Pointcut）和织入（Weaving）。AOP常通过Spring AOP的动态代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Jogs"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2024-10-14T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"「浅谈Spring AOP」\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-14T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jogs\\"}]}"]]},"headers":[{"level":2,"title":"AOP 是什么？","slug":"aop-是什么","link":"#aop-是什么","children":[]},{"level":2,"title":"Spring AOP 和 AspectJ AOP 有什么区别？","slug":"spring-aop-和-aspectj-aop-有什么区别","link":"#spring-aop-和-aspectj-aop-有什么区别","children":[]},{"level":2,"title":"AOP 怎么用？","slug":"aop-怎么用","link":"#aop-怎么用","children":[]},{"level":2,"title":"AOP 的适用场景？","slug":"aop-的适用场景","link":"#aop-的适用场景","children":[]}],"git":{},"readingTime":{"minutes":4.19,"words":1258},"filePathRelative":"文章/技术整理/浅谈Spring AOP.md","localizedDate":"2024年10月14日","excerpt":"<blockquote>\\n<p>来自 gpt 的摘要：\\n这篇文章介绍了AOP（面向切面编程）的概念、术语、实现方式及应用场景。AOP旨在将横切关注点（如日志、事务、权限等）从业务逻辑中分离，实现代码解耦和复用。核心术语包括切面（Aspect）、连接点（JoinPoint）、通知（Advice）、切点（Pointcut）和织入（Weaving）。AOP常通过Spring AOP的动态代理或AspectJ的字节码操作来实现。Spring AOP适合简单场景，基于代理技术，而AspectJ性能更高，适用于复杂情况。AOP广泛用于日志记录、性能统计、事务管理、权限控制、接口限流和缓存管理等领域。</p>\\n</blockquote>","autoDesc":true}`);export{O as comp,d as data};
