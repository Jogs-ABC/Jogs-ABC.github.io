import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,d as s,a as n,o as l}from"./app-fuOTY5wn.js";const t={},h=s("blockquote",null,[s("p",null,"来自 gpt 的摘要： 本文介绍了如何解决 LeetCode 上的一道题目，即找出字符串中不含重复字符的最长子串的长度。该问题可以使用滑动窗口技术来解决，利用 HashMap 记录字符及其下标，通过动态调整左右指针来维护不重复子串的长度，从而在一次遍历中得出结果。时间复杂度为 O(N)，空间复杂度为 O(1)。代码实现中，左指针和右指针分别表示当前窗口的左右边界，通过不断更新左指针的位置来确保窗口内没有重复字符，并动态计算最长子串的长度。文中详细解释了滑动窗口的核心思路和关键代码实现细节，并提供了 Java 代码示例。更多解法将在后续更新中介绍，如果有任何疑问或发现题解中的问题，欢迎在评论区提出。")],-1),p=n(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h2><p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的<strong>最长子串</strong>的长度。</p><blockquote><p><a href="https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/" target="_blank" rel="noopener noreferrer">题目链接</a></p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h2><h3 id="_1-解题宏观思路" tabindex="-1"><a class="header-anchor" href="#_1-解题宏观思路"><span>1）解题宏观思路</span></a></h3><p>通过题目意思，我们大致可以推断出这是一道<strong>滑动窗口</strong>的题目，需要我们记录左指针和右指针来求出答案。</p><h3 id="_2-题目关键词提取" tabindex="-1"><a class="header-anchor" href="#_2-题目关键词提取"><span>2）题目关键词提取</span></a></h3><ul><li>不含有重复字符：可以采用 <code>Set</code> 或 <code>Map</code> 进行去重，根据题目意思，我们需要通过记录字母下标来算出字串长度，因此我们选用 <code>HashMap</code>，其中 <code>K</code> 为 <code>Character</code>（字母），<code>V</code> 为 <code>Integer</code>（字母对应的下标）。</li><li>子串：意味着我们需要采用滑动窗口的思路来解题。</li></ul><h3 id="_3-复杂度估计" tabindex="-1"><a class="header-anchor" href="#_3-复杂度估计"><span>3）复杂度估计</span></a></h3><ul><li>我们采用滑动窗口的思路可以一次遍历就求出所有情况，并从中得到答案，因此时间复杂度为 <code>O(N)</code>。</li><li>HashMap 只需要记录 ASCII 码 <code>0 ~ 127</code> 的字符范围，因此空间复杂度为 <code>O(1)</code>。</li><li>综上，根据题目给出的数据规模，该思路可以实现。</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现"><span>代码实现</span></a></h2><h3 id="_1-变量" tabindex="-1"><a class="header-anchor" href="#_1-变量"><span>1）变量：</span></a></h3><ul><li><code>l</code> 表示动态左指针，从 <code>-1</code> 下标开始，无需关注越界问题。</li><li><code>r</code> 表示动态右指针，从 <code>0</code> 下标开始，需要小于 <code>s.length()</code> 防止越界。</li><li><code>ans</code> 表示答案，在遍历中动态改变并最终输出。</li></ul><h3 id="_2-参考代码" tabindex="-1"><a class="header-anchor" href="#_2-参考代码"><span>2）参考代码：</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Solution</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Character</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> lengthOfLongestSubstring</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        map </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> HashMap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 要点 1 ：l 和 r 左开右闭</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> l</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> r</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ans</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (; r </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> n; r</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            char</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">charAt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(r);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">containsKey</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(c))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                // 要点 2 ：需要取最大值保证 l 不会回退</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                l </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Math</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(l, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(c));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            map</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">put</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(c, r);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            ans </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Math</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(ans, r </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> l);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ans;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-要点解析" tabindex="-1"><a class="header-anchor" href="#_3-要点解析"><span>3）要点解析：</span></a></h3><ul><li>要点 1： 为什么 <code>l</code> 和 <code>r</code> 采用左开右闭进行记录？ <ul><li>左开右闭只需要两者相减就能求出对应长度。</li><li>左开右闭的含义是<strong>右指针纳入窗口范围，而左指针不纳入窗口范围</strong>，当右指针与窗口内重复时，左指针就可以直接赋值 <code>map</code> 对应的下标，保证窗口内恰好处于一个不重复子串的情况。</li></ul></li><li>要点 2： 为什么 <code>l</code> 需要取最大值，而不是直接把 <code>map</code> 的值赋给 <code>l</code> ？ <ul><li>举个例子，当 <code>s</code> 的情况是 ab<sub>1</sub>c<sub>1</sub>c<sub>2</sub>b<sub>2</sub>a（脚标用来区分不同位置的 b 和 c），且 <code>l</code> 指向 c<sub>1</sub>，<code>r</code> 指向 b<sub>2</sub> 时，假如不进行最大值的判断，<code>l</code> 的下标就会被赋为 b<sub>1</sub> 的位置，这时窗口的情况就从 c<sub>2</sub>b<sub>2</sub> 变成了 c<sub>1</sub>c<sub>2</sub>b<sub>2</sub>，这显然是不应该发生的。由此可见，我们必须保证 <code>l</code> 的值是递增的。</li></ul></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>这里先简单介绍一下哈希表 + 滑动窗口的做法，后续将更新其他的做法，如果有什么疑惑或题解有什么问题，欢迎在评论区指出！</p>`,19);function k(d,r){return l(),a("div",null,[h,e("more"),p])}const g=i(t,[["render",k],["__file","LeetCode题解 -- 3. 无重复字符的最长子串.html.vue"]]),B=JSON.parse(`{"path":"/%E6%96%87%E7%AB%A0/%E7%AE%97%E6%B3%95%E9%A2%98%E8%A7%A3/LeetCode%E9%A2%98%E8%A7%A3%20--%203.%20%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.html","title":"LeetCode题解 -- 3. 无重复字符的最长子串","lang":"zh-CN","frontmatter":{"title":"LeetCode题解 -- 3. 无重复字符的最长子串","icon":"code","author":"Jogs","date":"2024-07-02T00:00:00.000Z","isOriginal":true,"cover":"/assets/images/programmer-1653351_640.jpg","category":["算法"],"tag":["滑动窗口"],"editLink":false,"description":"来自 gpt 的摘要： 本文介绍了如何解决 LeetCode 上的一道题目，即找出字符串中不含重复字符的最长子串的长度。该问题可以使用滑动窗口技术来解决，利用 HashMap 记录字符及其下标，通过动态调整左右指针来维护不重复子串的长度，从而在一次遍历中得出结果。时间复杂度为 O(N)，空间复杂度为 O(1)。代码实现中，左指针和右指针分别表示当前窗口...","head":[["meta",{"property":"og:url","content":"https://jogs-abc.github.io/%E6%96%87%E7%AB%A0/%E7%AE%97%E6%B3%95%E9%A2%98%E8%A7%A3/LeetCode%E9%A2%98%E8%A7%A3%20--%203.%20%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2.html"}],["meta",{"property":"og:site_name","content":"Jogs's blog"}],["meta",{"property":"og:title","content":"LeetCode题解 -- 3. 无重复字符的最长子串"}],["meta",{"property":"og:description","content":"来自 gpt 的摘要： 本文介绍了如何解决 LeetCode 上的一道题目，即找出字符串中不含重复字符的最长子串的长度。该问题可以使用滑动窗口技术来解决，利用 HashMap 记录字符及其下标，通过动态调整左右指针来维护不重复子串的长度，从而在一次遍历中得出结果。时间复杂度为 O(N)，空间复杂度为 O(1)。代码实现中，左指针和右指针分别表示当前窗口..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://jogs-abc.github.io/assets/images/programmer-1653351_640.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://jogs-abc.github.io/assets/images/programmer-1653351_640.jpg"}],["meta",{"name":"twitter:image:alt","content":"LeetCode题解 -- 3. 无重复字符的最长子串"}],["meta",{"property":"article:author","content":"Jogs"}],["meta",{"property":"article:tag","content":"滑动窗口"}],["meta",{"property":"article:published_time","content":"2024-07-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LeetCode题解 -- 3. 无重复字符的最长子串\\",\\"image\\":[\\"https://jogs-abc.github.io/assets/images/programmer-1653351_640.jpg\\"],\\"datePublished\\":\\"2024-07-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jogs\\"}]}"]]},"headers":[{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[]},{"level":2,"title":"解题思路","slug":"解题思路","link":"#解题思路","children":[{"level":3,"title":"1）解题宏观思路","slug":"_1-解题宏观思路","link":"#_1-解题宏观思路","children":[]},{"level":3,"title":"2）题目关键词提取","slug":"_2-题目关键词提取","link":"#_2-题目关键词提取","children":[]},{"level":3,"title":"3）复杂度估计","slug":"_3-复杂度估计","link":"#_3-复杂度估计","children":[]}]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[{"level":3,"title":"1）变量：","slug":"_1-变量","link":"#_1-变量","children":[]},{"level":3,"title":"2）参考代码：","slug":"_2-参考代码","link":"#_2-参考代码","children":[]},{"level":3,"title":"3）要点解析：","slug":"_3-要点解析","link":"#_3-要点解析","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{},"readingTime":{"minutes":3.49,"words":1047},"filePathRelative":"文章/算法题解/LeetCode题解 -- 3. 无重复字符的最长子串.md","localizedDate":"2024年7月2日","excerpt":"<blockquote>\\n<p>来自 gpt 的摘要：\\n本文介绍了如何解决 LeetCode 上的一道题目，即找出字符串中不含重复字符的最长子串的长度。该问题可以使用滑动窗口技术来解决，利用 HashMap 记录字符及其下标，通过动态调整左右指针来维护不重复子串的长度，从而在一次遍历中得出结果。时间复杂度为 O(N)，空间复杂度为 O(1)。代码实现中，左指针和右指针分别表示当前窗口的左右边界，通过不断更新左指针的位置来确保窗口内没有重复字符，并动态计算最长子串的长度。文中详细解释了滑动窗口的核心思路和关键代码实现细节，并提供了 Java 代码示例。更多解法将在后续更新中介绍，如果有任何疑问或发现题解中的问题，欢迎在评论区提出。</p>\\n</blockquote>","autoDesc":true}`);export{g as comp,B as data};
