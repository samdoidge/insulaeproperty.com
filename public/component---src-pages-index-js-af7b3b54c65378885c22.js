(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(151),s=a(149),o=a(4),l=a.n(o),c=a(144),d=(a(162),function(e){var t=e.children;return r.a.createElement("a",{href:"mailto:hello@insulaeproperty.com",style:{padding:".5rem 2.5rem",color:c.b.lightWhite,fontWeight:700,background:c.b.orange,borderRadius:c.a,borderWidth:0,cursor:"pointer",textDecoration:"none"}},t)}),u=(a(163),a(164),a(146),a(165),a(166),a(167)),f=a.n(u),p=function(e){var t=e.title,a=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),r.a.createElement("p",{style:{color:c.b.mediumGray}},a))},g=function(e){e.siteTitle;return r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",padding:"2rem 1rem"}},r.a.createElement("div",{style:{margin:60,maxWidth:"500px",position:"relative"}},r.a.createElement("img",{src:f.a,alt:"Insulae Property logo, an Ancient Roman insulae building next to the company name."})))};g.propTypes={siteTitle:l.a.string},g.defaultProps={siteTitle:""};var m=g,h=(a(168),function(){return r.a.createElement("div",{style:{padding:"2rem 1rem",textAlign:"center"}},r.a.createElement(p,{title:"Better Homes",description:"Providing high specification rental properties in some of the most in-demand locations within the United Kingdom."}),r.a.createElement(d,null,"Contact Us"))});t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(s.a,null),r.a.createElement(m,null),r.a.createElement(h,null))}},144:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return r});var i={lightWhite:"#FBFDFF",lightGray:"#F3F5F6",mediumGray:"#B0B8BA",gray:"#A0A4A6",babyBlue:"#50CAF9",blue:"#5368f1",orange:"#db7b45"},r=(i.babyBlue,i.blue,"10px")},145:function(e,t,a){var i;e.exports=(i=a(148))&&i.default||i},146:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=(a(32),a(145),r.a.createContext({})),l=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Insulae Property"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,a){"use strict";var i=a(150),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(153),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=i.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string},t.a=d},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Insulae Property",description:"Providing high specification rental properties in some of the most in-demand locations within the United Kingdom.",author:"@samdoidge"}}}}},151:function(e,t,a){"use strict";var i=a(147),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(146),c=a(144),d=function(e){var t=e.siteTitle;return n.a.createElement("footer",{style:{padding:"1rem",backgroundColor:c.b.lightGray}},n.a.createElement("div",{style:{display:"grid",alignItems:"center",justifyContent:"space-between",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 240px))",padding:"1rem 1rem",fontSize:".85rem"}},n.a.createElement("div",{style:{color:c.b.blue,fontWeight:700}},n.a.createElement("a",{style:{textDecoration:"none",color:c.b.orange},href:"mailto:hello@insulaeproperty.com"},"Contact Us")),n.a.createElement("div",{style:{color:c.b.gray}},"© ",(new Date).getFullYear()," ",t)))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var u=d,f=(a(152),function(e){var t=e.children;return n.a.createElement(l.a,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"site"},n.a.createElement("main",{class:"site-content"},t),n.a.createElement(u,{siteTitle:e.site.siteMetadata.title})))},data:i})});f.propTypes={children:o.a.node.isRequired};t.a=f},163:function(e,t,a){e.exports=a.p+"static/header-58036a188ebee7b0e28b31b50b895477.png"},164:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAC4jAAAuIwF4pT92AAABnklEQVQoz2PojneImJjmuq4nwbG1K97BmgENROtIM6WYKjEQAolGChDGlEz37zNyvf7PKfD53xlr/7IpzLK/PdrWJFRVTBAkn2SsqJRgKK8N1MAGwfJsiYby3ImGCrpAmgkoxgvE7HBDWyOsnwFdebUlwvpMZ5z91QmpLi+mZnk8B7r6IdDVqV6SfOJAQ8MTjORDgYbFAzWFJRgpxCUYKoQB2dFAnAm0UAhqICMD0FWngAbeL3DSPt0QYnGiPsj8VEeM3QWgy39MznDv0WdgEEg2VbIHapIGapADukwMSKsC+VJAWg1ouDyK38s9DSf1JTsvbgi2WDEx1XUF0JBFQBdOnZ7j+RcYFC2mTAwiySaKIJc4Aw3TBBtiKK8DpPWBWAXItgDSTokQMTGGPAct20JnnfhKH6N5rZE2AWUeBk61AWahvUlOOyaluZb5ygoqAw20A2owBWpwBLrIC+rVJCD2AGGgodbAIHFJhLlWhIGBqcRdPxbo2nCg1w1K3fXVi930FIFeFYzUkmJEi01Q5DiC2MBwhMcwEGsAw5gJACyriUvnf9yQAAAAAElFTkSuQmCC",aspectRatio:2.975567190226876,src:"/static/82f2f6294295f0040411c08a470b6fc4/4465b/logo.png",srcSet:"/static/82f2f6294295f0040411c08a470b6fc4/48d69/logo.png 75w,\n/static/82f2f6294295f0040411c08a470b6fc4/500db/logo.png 150w,\n/static/82f2f6294295f0040411c08a470b6fc4/4465b/logo.png 300w,\n/static/82f2f6294295f0040411c08a470b6fc4/1b440/logo.png 450w,\n/static/82f2f6294295f0040411c08a470b6fc4/8d7dc/logo.png 600w,\n/static/82f2f6294295f0040411c08a470b6fc4/b78fc/logo.png 900w,\n/static/82f2f6294295f0040411c08a470b6fc4/2417d/logo.png 1705w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},165:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(34)),o=i(a(74)),l=i(a(75)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=new WeakMap;var m=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),g.set(e,t)),function(){a.unobserve(e),g.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+i+"<img "+o+l+a+r+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,y=e.backgroundColor,w=e.Tag,v=e.itemProp,E="boolean"==typeof y?"lightgray":y,A=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),I={title:t,alt:this.state.isVisible?"":a,style:A,className:p};if(g){var L=g;return c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),E&&c.default.createElement(w,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),L.base64&&c.default.createElement(b,(0,l.default)({src:L.base64},I)),L.tracedSVG&&c.default.createElement(b,(0,l.default)({src:L.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},L))}}))}if(m){var R=m,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete x.display,c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},E&&c.default.createElement(w,{title:t,style:{backgroundColor:E,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),R.base64&&c.default.createElement(b,(0,l.default)({src:R.base64},I)),R.tracedSVG&&c.default.createElement(b,(0,l.default)({src:R.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=y;t.default=E},166:function(e,t,a){e.exports=a.p+"static/mockup-frame-b9050674e8edc6198f7f43b91c8db7a6.png"},167:function(e,t,a){e.exports=a.p+"static/logo-82f2f6294295f0040411c08a470b6fc4.png"},168:function(e,t,a){e.exports=a.p+"static/feature-54bf66a93de7cbdcf6ac0291600ee7da.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-af7b3b54c65378885c22.js.map