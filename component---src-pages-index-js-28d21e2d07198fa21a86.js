(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return h});n(48);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(142),s=n(157),c=n.n(s),l=n(155),d=n.n(l),p=n(154),m=n(144),f=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=c()(this,"props.data.site.siteMetadata.title"),e=c()(this,"props.data.site.siteMetadata.description"),n=c()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(p.a,{location:this.props.location},i.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:e}],title:t}),n.map(function(t){var e=t.node,n=c()(e,"frontmatter.title")||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(m.a)(.25)}},i.a.createElement(u.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))},e}(i.a.Component);e.default=f;var h="3352422197"},142:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(141),s=n.n(u);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var c=n(143),l=n.n(c);n.d(e,"PageRenderer",function(){return l.a});var d=n(35);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},144:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return c});var a=n(161),r=n.n(a),o=n(162),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var u=new r.a(i.a);var s=u.rhythm,c=u.scale},149:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(52),s=n(2),c=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},154:function(t,e,n){"use strict";n(33);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(142),s=n(144),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.children;return t="/grittys-blog/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Gatsby Starter Blog")):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(s.a)(-1)}},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Gatsby Starter Blog")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},t,a)},e}(i.a.Component);e.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-28d21e2d07198fa21a86.js.map