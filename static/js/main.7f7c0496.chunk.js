(this["webpackJsonpreact-bootcamp-15-serichenko"]=this["webpackJsonpreact-bootcamp-15-serichenko"]||[]).push([[0],{16:function(e,t,a){e.exports={activeLink:"MovieDetailsPage_activeLink__1DCqp",navDescriptionList:"MovieDetailsPage_navDescriptionList__1vtFz",navDetailsList:"MovieDetailsPage_navDetailsList__nHny0"}},17:function(e,t,a){e.exports={activeLink:"Navigation_activeLink__2vd4N",navigationList:"Navigation_navigationList__2vDCl"}},35:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),i=a.n(c),l=a(2),o=a(3),s=a(4),u=a(6),m=a(5),h=a(7),p=a(12),v=a(14),f=a.n(v),b=function(){return f.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=84a23f82b9362154e36c39c8577e0da4")},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Batman";return f.a.get("https://api.themoviedb.org/3/search/movie?api_key=84a23f82b9362154e36c39c8577e0da4&language=en-US&query=".concat(e,"&page=1&include_adult=false"))},E=function(e){return f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=84a23f82b9362154e36c39c8577e0da4&language=en-US"))},g=function(e){return f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=84a23f82b9362154e36c39c8577e0da4"))},y=function(e){return f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=84a23f82b9362154e36c39c8577e0da4&language=en-US&page=1"))},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={trends:[]},a.fetchTrendsFunc=function(){b().then((function(e){return a.setState({trends:e.data.results})}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchTrendsFunc()}},{key:"render",value:function(){var e=this.state.trends;return r.a.createElement("div",null,r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.b,{to:"/movies/".concat(e.id)},e.title||e.name))}))))}}]),t}(n.Component),j=a(34),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){var t=a.state.value,n=a.props.onSubmit;e.preventDefault(),n(t),a.setState({value:""})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{value:e,type:"text",onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Search")))}}]),t}(n.Component);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={shows:[]},a.fetchFilms=function(e){d(e).then((function(e){return a.setState({shows:e.data.results})}))},a.onSearchSubmit=function(e){var t=a.props,n=t.history,r=t.location;n.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){Object(j.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,{search:"?search=".concat(e)}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location,t=new URLSearchParams(e.search).get("search");t&&this.fetchFilms(t)}},{key:"componentDidUpdate",value:function(e){var t=new URLSearchParams(e.location.search).get("search"),a=this.props.location,n=new URLSearchParams(a.search).get("search");t!==n&&this.fetchFilms(n)}},{key:"render",value:function(){var e=this.state.shows;return r.a.createElement("div",null,r.a.createElement(w,{onSubmit:this.onSearchSubmit}),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l.b,{to:"/movies/".concat(e.id)},e.title))}))))}}]),t}(n.Component),_="/",D="/movies/",L="/movies/:movieId",C="/movies/:movieId/cast",P="/movies/:movieId/reviews",F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"\u0422\u0410\u041a\u0410\u042f \u0421\u0422\u0420\u0410\u041d\u0418\u0426\u0410 \u041d\u0415 \u041d\u0410\u0419\u0414\u0415\u041d\u0410"),r.a.createElement("p",null,"\u0404\u0442\u043e \u043d\u0430\u0448\u0430 \u0421\u0422\u0420\u0410\u041d\u0418\u0426\u0410",r.a.createElement(l.c,{to:_},"\u0414\u041e\u041c"))))},N=a(17),M=a.n(N),x=function(){return r.a.createElement("ul",{className:M.a.navigationList},r.a.createElement("li",null,r.a.createElement(l.c,{activeClassName:M.a.activeLink,to:_},"HOME")),r.a.createElement("li",null,r.a.createElement(l.c,{activeClassName:M.a.activeLink,to:D},"MOVIES")))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={casts:""},a.searchCast=function(){var e=a.props.match.params.movieId;g(e).then((function(e){return a.setState({casts:e.data.cast})}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.searchCast()}},{key:"render",value:function(){var e=this.state.casts;return r.a.createElement("div",null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:{width:"600px",listStyle:"none"}},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{style:{width:"180px",height:"240px"},src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.original_title}),r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.character))})),")")))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={review:{results:[]}},a.searchReview=function(){var e=a.props.match.params.movieId;y(e).then((function(e){return a.setState({review:e.data})}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.searchReview()}},{key:"render",value:function(){var e=this.state.review;return r.a.createElement("div",null,e.results&&e.results.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:{width:"600px",listStyle:"none"}},e.results.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h4",null,e.author),r.a.createElement("p",null,e.content))})))),0===e.results.length&&r.a.createElement("div",null,r.a.createElement("h4",null,"No reviews found!!!")))}}]),t}(n.Component),U=a(16),R=a.n(U),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={item:{genres:[]}},a.fetchShow=function(){var e=a.props.match.params.movieId;E(e).then((function(e){return a.setState({item:e.data})}))},a.returnToPrevLocation=function(){a.props.history.goBack()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchShow()}},{key:"render",value:function(){var e=this.props.match,t=this.state.item,a=e.url,n=t.genres.reduce((function(e,t){return"".concat(e," ").concat(t.name)}),"");return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:this.returnToPrevLocation},"Go back"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:R.a.navDescriptionList},r.a.createElement("li",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.backdrop_path),alt:t.original_title})),r.a.createElement("li",null,r.a.createElement("h3",null,t.original_title),r.a.createElement("p",null,"User score ",10*t.vote_average,"%"),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,t.overview),r.a.createElement("h3",null,"Genres"),r.a.createElement("p",null,n)))),r.a.createElement("h2",null,"Additional information"),r.a.createElement("ul",{className:R.a.navDetailsList},r.a.createElement("li",null,r.a.createElement(l.c,{activeClassName:R.a.activeLink,to:"".concat(a,"/cast")},"Cast")),r.a.createElement("li",null,r.a.createElement(l.c,{activeClassName:R.a.activeLink,to:"".concat(a,"/reviews")},"Reviews"))),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:C,component:A}),r.a.createElement(p.a,{path:P,component:I})))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:_,component:O}),r.a.createElement(p.a,{path:L,component:T}),r.a.createElement(p.a,{path:D,component:S}),r.a.createElement(p.a,{component:F})))}}]),t}(n.Component);i.a.render(r.a.createElement(l.a,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.7f7c0496.chunk.js.map