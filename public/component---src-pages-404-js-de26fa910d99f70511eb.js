(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),o=a(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"Page not Found :("),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n={lightWhite:"#FBFDFF",lightGray:"#F3F5F6",mediumGray:"#B0B8BA",gray:"#A0A4A6",babyBlue:"#50CAF9",blue:"#5368f1",orange:"#db7b45"},r=(n.babyBlue,n.blue,"10px")},145:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},146:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=(a(32),a(145),r.a.createContext({})),c=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Insulae Property"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(153),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string},t.a=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Insulae Property",description:"Providing high specification rental properties in some of the most in-demand locations within the United Kingdom.",author:"@samdoidge"}}}}},151:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(146),l=a(144),u=function(e){var t=e.siteTitle;return i.a.createElement("footer",{style:{padding:"1rem",backgroundColor:l.b.lightGray}},i.a.createElement("div",{style:{display:"grid",alignItems:"center",justifyContent:"space-between",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 240px))",padding:"1rem 1rem",fontSize:".85rem"}},i.a.createElement("div",{style:{color:l.b.blue,fontWeight:700}},i.a.createElement("a",{style:{textDecoration:"none",color:l.b.orange},href:"mailto:hello@insulaeproperty.com"},"Contact Us")),i.a.createElement("div",{style:{color:l.b.gray}},"© ",(new Date).getFullYear()," ",t)))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var d=u,p=(a(152),function(e){var t=e.children;return i.a.createElement(c.a,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"site"},i.a.createElement("main",{class:"site-content"},t),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title})))},data:n})});p.propTypes={children:s.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-de26fa910d99f70511eb.js.map