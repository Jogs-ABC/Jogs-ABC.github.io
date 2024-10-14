import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as a,d as e,a as o,o as p}from"./app-DMA49DJx.js";const i={},n=e("blockquote",null,[e("p",null,"来自 gpt 的摘要： B+树是一种优化过的多路搜索树，常用于数据库系统。与 B 树类似，但在结构和性能上有所改进。B+树的叶子节点存储所有关键字和指向具体数据的指针，并按关键字大小有序链接，方便顺序遍历。非叶子节点仅作为索引部分，包含子树中的最大或最小关键字，用于加速查询。非叶子节点的关键字数量与其子节点的数量一致，这种结构使 B+树更紧凑，并提高缓存命中率。 B+树的底层是多路平衡查找树，在查询时自根节点开始，直至叶子节点找到目标键值。若索引不包含完整数据，可能需要回表查询。这种结构减少了树的高度，提高了查询效率。 MySQL 采用 B+树作为索引的核心数据结构，主要是因为它减少了 I/O 操作，并且查询更加稳定。B+树的中间节点仅存储索引，数据都保存在叶子节点，这使得树的层数较低，磁盘页能够容纳更多节点元素，从而减少磁盘 I/O。此外，B+树的叶子节点相互链接，方便区间查询，只需遍历链表即可快速找到范围内的数据。 B+树与 B 树的主要区别在于数据存储位置和查询方式。B+树的实际数据仅保存在叶子节点，所有索引都在叶子节点中出现，并且叶子节点之间构成有序链表。而 B 树的非叶子节点既存储索引也可能存储数据，这导致其查询路径不如 B+树一致。B+树的结构使得范围查询和批量读取更加高效，因此更适合数据库场景。")],-1),B=o('<h2 id="b-树的介绍" tabindex="-1"><a class="header-anchor" href="#b-树的介绍"><span>B+树的介绍</span></a></h2><p>B+树是一种多路搜索树，其定义基本与 B-树相同，但在某些方面进行了优化。B+树的主要特点包括：</p><ol><li><p>所有的叶子结点中包含了全部关键字的信息，以及指向包含这些关键字记录的指针，且叶子结点本身依关键字的大小自小而大顺序链接。</p></li><li><p>所有的非终端结点可以看成索引部分，结点中仅含有其子树（根结点）中最大（或最小）关键字。</p></li><li><p>非叶子节点的关键字数目等于它的分支数量。</p></li></ol><p>在B+树中，数据存放的更加紧密，具有更好的空间局部性，因此访问叶子节点上关联的数据具有更好的缓存命中率。同时，由于叶子结点都是相链的，对整棵树的遍历只需要一次线性遍历叶子结点即可，且由于数据顺序排列并且相连，所以便于区间查找和搜索。</p><h2 id="b-树的底层" tabindex="-1"><a class="header-anchor" href="#b-树的底层"><span>B+树的底层</span></a></h2><p>B+树的底层实现主要是基于多路平衡查找树。在查询过程中，从根节点出发，查找到叶子节点方可获得所查键值，然后根据查询判断是否需要回表查询数据。这种结构使得B+树在访问数据时具有更高的效率。</p><h2 id="mysql-为什么用-b-树" tabindex="-1"><a class="header-anchor" href="#mysql-为什么用-b-树"><span>MySQL 为什么用 B+树？</span></a></h2><p>B+树在数据库和许多其他数据结构中得到广泛应用的原因主要有以下几点：</p><ol><li><p>I/O次数更少：由于 B+树的层数比其他树（如二叉搜索树）小，因此读取节点并进行 I/O 操作的次数也会减少。同时，B+树中间节点不存储数据，只存储索引，使得相同大小的磁盘页可以容纳更多的节点元素，进一步减少了 I/O 次数。</p></li><li><p>查询更加稳定：B+树每次查询都必须访问到叶子节点，而 B-树可能在中间节点或叶子节点找到匹配元素，因此 B+树的查询性能更为稳定。</p></li><li><p>更利于查询范围：由于 B+树的叶子节点首尾相连，因此在进行范围查询时，只需要在链表上进行遍历，效率非常高。</p></li></ol><h2 id="b-树和-b-树的区别" tabindex="-1"><a class="header-anchor" href="#b-树和-b-树的区别"><span>B+树和 B 树的区别？</span></a></h2><p>B+树与 B 树差异的点，主要是以下这几点：</p><ul><li><p>叶子节点（最底部的节点）才会存放实际数据（索引+记录），非叶子节点只会存放索引；</p></li><li><p>所有索引都会在叶子节点出现，叶子节点之间构成一个有序链表；</p></li><li><p>非叶子节点的索引也会同时存在在子节点中，并且是在子节点中所有索引的最大（或最小）。</p></li><li><p>非叶子节点中有多少个子节点，就有多少个索引；</p></li></ul>',12);function r(s,c){return p(),l("div",null,[n,a("more"),B])}const m=t(i,[["render",r],["__file","MySQL之B_树.html.vue"]]),b=JSON.parse(`{"path":"/%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF/MySQL%E4%B9%8BB_%E6%A0%91.html","title":"「MySQL之B+树」","lang":"zh-CN","frontmatter":{"title":"「MySQL之B+树」","author":"Jogs","date":"2024-10-12T00:00:00.000Z","category":["技术"],"tag":["MySQL"],"editLink":false,"description":"来自 gpt 的摘要： B+树是一种优化过的多路搜索树，常用于数据库系统。与 B 树类似，但在结构和性能上有所改进。B+树的叶子节点存储所有关键字和指向具体数据的指针，并按关键字大小有序链接，方便顺序遍历。非叶子节点仅作为索引部分，包含子树中的最大或最小关键字，用于加速查询。非叶子节点的关键字数量与其子节点的数量一致，这种结构使 B+树更紧凑，并提高缓...","head":[["meta",{"property":"og:url","content":"https://jogs-abc.github.io/%E6%96%87%E7%AB%A0/%E6%8A%80%E6%9C%AF/MySQL%E4%B9%8BB_%E6%A0%91.html"}],["meta",{"property":"og:site_name","content":"Jogs' blog"}],["meta",{"property":"og:title","content":"「MySQL之B+树」"}],["meta",{"property":"og:description","content":"来自 gpt 的摘要： B+树是一种优化过的多路搜索树，常用于数据库系统。与 B 树类似，但在结构和性能上有所改进。B+树的叶子节点存储所有关键字和指向具体数据的指针，并按关键字大小有序链接，方便顺序遍历。非叶子节点仅作为索引部分，包含子树中的最大或最小关键字，用于加速查询。非叶子节点的关键字数量与其子节点的数量一致，这种结构使 B+树更紧凑，并提高缓..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Jogs"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-10-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"「MySQL之B+树」\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jogs\\"}]}"]]},"headers":[{"level":2,"title":"B+树的介绍","slug":"b-树的介绍","link":"#b-树的介绍","children":[]},{"level":2,"title":"B+树的底层","slug":"b-树的底层","link":"#b-树的底层","children":[]},{"level":2,"title":"MySQL 为什么用 B+树？","slug":"mysql-为什么用-b-树","link":"#mysql-为什么用-b-树","children":[]},{"level":2,"title":"B+树和 B 树的区别？","slug":"b-树和-b-树的区别","link":"#b-树和-b-树的区别","children":[]}],"git":{},"readingTime":{"minutes":4.11,"words":1234},"filePathRelative":"文章/技术/MySQL之B+树.md","localizedDate":"2024年10月12日","excerpt":"<blockquote>\\n<p>来自 gpt 的摘要：\\nB+树是一种优化过的多路搜索树，常用于数据库系统。与 B 树类似，但在结构和性能上有所改进。B+树的叶子节点存储所有关键字和指向具体数据的指针，并按关键字大小有序链接，方便顺序遍历。非叶子节点仅作为索引部分，包含子树中的最大或最小关键字，用于加速查询。非叶子节点的关键字数量与其子节点的数量一致，这种结构使 B+树更紧凑，并提高缓存命中率。\\nB+树的底层是多路平衡查找树，在查询时自根节点开始，直至叶子节点找到目标键值。若索引不包含完整数据，可能需要回表查询。这种结构减少了树的高度，提高了查询效率。\\nMySQL 采用 B+树作为索引的核心数据结构，主要是因为它减少了 I/O 操作，并且查询更加稳定。B+树的中间节点仅存储索引，数据都保存在叶子节点，这使得树的层数较低，磁盘页能够容纳更多节点元素，从而减少磁盘 I/O。此外，B+树的叶子节点相互链接，方便区间查询，只需遍历链表即可快速找到范围内的数据。\\nB+树与 B 树的主要区别在于数据存储位置和查询方式。B+树的实际数据仅保存在叶子节点，所有索引都在叶子节点中出现，并且叶子节点之间构成有序链表。而 B 树的非叶子节点既存储索引也可能存储数据，这导致其查询路径不如 B+树一致。B+树的结构使得范围查询和批量读取更加高效，因此更适合数据库场景。</p>\\n</blockquote>","autoDesc":true}`);export{m as comp,b as data};
