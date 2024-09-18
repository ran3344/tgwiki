import{_ as e,c as t,o as a,a as r}from"./app-CEP_VtPX.js";const l={},n=r('<h1 id="telegram-dc说明" tabindex="-1"><a class="header-anchor" href="#telegram-dc说明"><span>Telegram DC说明</span></a></h1><p>DC：Data Centers，数据中心，Telegram在世界各地部署有5个数据中心：</p><ul><li>DC1：美国-迈阿密</li><li>DC2：荷兰-阿姆斯特丹</li><li>DC3：美国-迈阿密</li><li>DC4：荷兰-阿姆斯特丹</li><li>DC5：新加坡</li></ul><h2 id="如何知道自己账号属于哪个dc" tabindex="-1"><a class="header-anchor" href="#如何知道自己账号属于哪个dc"><span>如何知道自己账号属于哪个DC?</span></a></h2><ol><li>根据 <a href="https://core.telegram.org/api/datacenter" target="_blank" rel="noopener noreferrer">Telegram 官方文档说明</a> ，账号属于哪个DC是由注册时的IP决定的</li><li>但实际上并非如此，账号属于哪个DC实际上是由注册账号时选择的国家/地区决定的，比如+86的号码大都是在DC5，+1的号码大都是在DC1。</li><li>DC是注册时候就决定了，无法更换，更换手机号也不能更换DC，如果想要更换DC，只有注销重新注册新账号。</li><li>可以用机器人Bot查询自己账号属于哪个DC： <a href="https://t.me/nmnmfunBot" target="_blank" rel="noopener noreferrer">@nmnmfunBot</a> <a href="https://t.me/KinhRoBot" target="_blank" rel="noopener noreferrer">@KinhRoBot</a> <a href="https://t.me/Sean_Bot" target="_blank" rel="noopener noreferrer">@Sean_Bot</a> <a href="https://t.me/WooMaiBot" target="_blank" rel="noopener noreferrer">@WooMaiBot</a></li></ol><details class="hint-container details"><summary>附：注册手机号区号对应的Telegram DC</summary><figure><img src="https://s2.loli.net/2023/07/28/RtW7l4m8fIbehSM.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure></details><h2 id="代理单独为-telegram-设置策略组有用吗" tabindex="-1"><a class="header-anchor" href="#代理单独为-telegram-设置策略组有用吗"><span>代理单独为 Telegram 设置策略组有用吗?</span></a></h2><ol><li>你的账号属于哪个DC，你的数据（消息、图片、文件等）也就存放在哪个DC，你给别人私聊和群里发送媒体，则别人是从你的账号所在的DC下载在客户端上才能看到的。</li><li>假如你的账号在DC5，不管别人的账号在DC几，查看你发送的媒体都是从DC5上下载. 你去查看别人发的文件也是如此的，别人的账号在DC1，你的账号在DC5，那你查看他发送的媒体也是从DC1下载的。</li><li>理解了以上两点，你就会发现单独为Telegram设置策略组是没有意义的，因为群里的人，有的在DC1，有的在DC5，你把Telegram策略设为SG，那查看DC1发送的媒体也就要从SG绕一下，不过感知差别不明显。</li></ol><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><p>Telegram的数据中心都是土豆服务器，时不时会炸，如果大家都发不出去消息那就是Telegram服务器炸了。</p>',10),i=[n];function o(m,c){return a(),t("div",null,i)}const s=e(l,[["render",o],["__file","dc.html.vue"]]),g=JSON.parse('{"path":"/dc.html","title":"DC说明","lang":"zh-CN","frontmatter":{"title":"DC说明","description":"Telegram在世界各地部署有5个数据中心（DC）。本文介绍了各个数据中心所在的地理位置，以及如何查看自己账号所在的数据中心（DC）。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。","head":[["meta",{"name":"keywords","content":"Telegram数据中心,Telegram DC,Telegram DC说明,Telegram查看账号所在的数据中心,TG数据中心,TG查看账号所在的数据中心,电报数据中心,电报查看账号所在的数据中心,Telegram入门,TGwiki,Telegram知识库"}],["meta",{"property":"og:url","content":"https://tgnav.github.io/tgwiki/dc.html"}],["meta",{"property":"og:site_name","content":"TGwiki - Telegram知识库"}],["meta",{"property":"og:title","content":"DC说明"}],["meta",{"property":"og:description","content":"Telegram在世界各地部署有5个数据中心（DC）。本文介绍了各个数据中心所在的地理位置，以及如何查看自己账号所在的数据中心（DC）。访问TGwiki - Telegram知识库，了解更多Telegram使用技巧。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s2.loli.net/2023/07/28/RtW7l4m8fIbehSM.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T07:44:30.000Z"}],["meta",{"property":"article:author","content":"TGwiki"}],["meta",{"property":"article:modified_time","content":"2024-08-07T07:44:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DC说明\\",\\"image\\":[\\"https://s2.loli.net/2023/07/28/RtW7l4m8fIbehSM.png\\"],\\"dateModified\\":\\"2024-08-07T07:44:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"TGwiki\\"}]}"]]},"headers":[{"level":2,"title":"如何知道自己账号属于哪个DC?","slug":"如何知道自己账号属于哪个dc","link":"#如何知道自己账号属于哪个dc","children":[]},{"level":2,"title":"代理单独为 Telegram 设置策略组有用吗?","slug":"代理单独为-telegram-设置策略组有用吗","link":"#代理单独为-telegram-设置策略组有用吗","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1692159232000,"updatedTime":1723016670000,"contributors":[{"name":"Anda Brown","email":"103917160+AndaBrown@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.24,"words":671},"filePathRelative":"dc.md","localizedDate":"2023年8月16日"}');export{s as comp,g as data};
