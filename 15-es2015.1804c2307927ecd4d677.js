(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Fskf:function(t,e,s){"use strict";s.r(e);var r=s("ofXK"),c=s("tk/3"),a=s("KYhu"),i=s("PCNd"),o=s("tyNb"),n=s("mrSG");const p=[{displayName:"DevOps \u5e73\u53f0",source:"devops-platform"},{displayName:"DevOps \u5b9e\u8df5",source:"devops-practise"},{displayName:"\u6280\u672f\u5b9e\u8df5",source:"tech-practise"},{displayName:"\u654f\u6377\u5b9e\u8df5",source:"agile-practise"},{displayName:"\u524d\u7aef DevOps \u5b9e\u8df5",source:"frontend-devops-practise"},{displayName:"\u6d4b\u8bd5\u5b9e\u8df5",source:"test-practise",default:!0}];var u=s("fXoL"),d=s("jhN1"),h=s("Fynj");let l=(()=>{class t{constructor(t,e,s){this.title=t,this.activatedRoute=e,this.http=s,this.tanks=p}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{const e=t.get("practise"),s=this.tanks.find(t=>t.source===e);this.title.setTitle(`\u300eDevOps \u6700\u4f73\u5b9e\u8df5\u300f \u2014 ${s.displayName} - Ledge DevOps \u77e5\u8bc6\u5e73\u53f0`),this.configSource(e)})}configSource(t){this.getCase(t)}getCase(t){return Object(n.a)(this,void 0,void 0,(function*(){this.src=this.buildSrc(t),this.currentSource=t;const e=(new c.c).set("Content-Type","text/plain; charset=utf-8");this.http.get(this.src,{headers:e,responseType:"text"}).subscribe(t=>{this.content=t})}))}buildSrc(t){return`assets/docs/practises/${t}.md`}}return t.\u0275fac=function(e){return new(e||t)(u.Ob(d.d),u.Ob(o.a),u.Ob(c.a))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-practise"]],decls:1,vars:2,consts:[["showToc","true",3,"sourceDir","data"]],template:function(t,e){1&t&&u.Pb(0,"ledge-markdown-render",0),2&t&&(u.nc("sourceDir","practises/",e.currentSource,".md"),u.lc("data",e.content))},directives:[h.a],styles:[""]}),t})();s.d(e,"PractiseModule",(function(){return f}));let f=(()=>{class t{}return t.\u0275mod=u.Mb({type:t}),t.\u0275inj=u.Lb({factory:function(e){return new(e||t)},imports:[[r.c,c.b,a.a,i.a,o.i.forChild([{path:":practise",component:l},{path:"",pathMatch:"full",redirectTo:"devops-practise"}])]]}),t})()}}]);