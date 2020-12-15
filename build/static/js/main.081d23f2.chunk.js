(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(0),c=n.n(a),i=n(10),o=n.n(i),s=(n(33),n(34),n(4)),u=n(5),j=n(9),h=n(8),l=n(7),d=n(6),b=n(3),p=n(26),O=n.n(p),m="http://api.openweathermap.org/data/2.5/forecast?appid=".concat("29b25605178ac1bc5d95ae5dd0e23683"),f="FETCH_WEATHER";function v(t){var e="".concat(m,"&q=").concat(t,",us"),n=O.a.get(e);return{type:f,payload:n}}var x=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={term:""},r.onInputChange=r.onInputChange.bind(Object(j.a)(r)),r.onFormChange=r.onFormChange.bind(Object(j.a)(r)),r}return Object(u.a)(n,[{key:"onInputChange",value:function(t){this.setState({term:t.target.value})}},{key:"onFormChange",value:function(t){t.preventDefault(),this.props.fetchWeather(this.state.term),this.setState({term:""})}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:this.onFormChange,children:[Object(r.jsx)("input",{placeholder:"Enter a city",onChange:this.onInputChange,value:this.state.term}),Object(r.jsx)("span",{children:Object(r.jsx)("button",{type:"submit",children:"Submit"})})]})})}}]),n}(a.Component);var g=Object(d.b)(null,(function(t){return Object(b.b)({fetchWeather:v},t)}))(x),y=n(11);function C(t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(y.Sparklines,{height:20,width:100,data:t.data,children:[Object(r.jsx)(y.SparklinesLine,{color:t.color}),Object(r.jsx)(y.SparklinesReferenceLine,{type:"avg"})]}),Object(r.jsxs)("div",{children:[(e=t.data,Math.floor(e.reduce((function(t,n){return t+n/e.length}))))," ",t.unit]})]});var e}var w=window.google,k=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){new w.maps.Map(this.refs.map,{zoom:12,center:{lat:this.props.lat,lng:this.props.lon}})}},{key:"render",value:function(){return Object(r.jsx)("div",{ref:"map"})}}]),n}(a.Component),F=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"renderList",value:function(t){var e=t.list.map((function(t){return t.main.temp})),n=t.list.map((function(t){return t.main.pressure})),a=t.list.map((function(t){return t.main.humidity})),c=t.city.coord,i=c.lon,o=c.lat;return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{className:"googlemap",children:[" ",Object(r.jsx)(k,{lon:i,lat:o})," "]}),Object(r.jsx)("td",{children:Object(r.jsx)(C,{data:e,color:"green",unit:"K"})}),Object(r.jsx)("td",{children:Object(r.jsx)(C,{data:n,color:"purple",unit:"Kpa"})}),Object(r.jsx)("td",{children:Object(r.jsx)(C,{data:a,color:"tomato",unit:"%"})})]},t.city.name)}},{key:"render",value:function(){return Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"City"}),Object(r.jsx)("th",{children:"temperature"}),Object(r.jsx)("th",{children:"Pressure"}),Object(r.jsx)("th",{children:"Humidity"})]})}),Object(r.jsx)("tbody",{children:this.props.weather.map(this.renderList)})]})}}]),n}(a.Component);var S=Object(d.b)((function(t){return{weather:t.weather}}))(F);var I=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(g,{}),Object(r.jsx)(S,{})]})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))},E=n(27),M=n.n(E);var T=Object(b.c)({weather:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return t.concat([e.payload.data]);default:return t}}}),D=Object(b.a)(M.a)(b.d);o.a.render(Object(r.jsx)(d.a,{store:D(T),children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(I,{})})}),document.getElementById("root")),L()}},[[61,1,2]]]);
//# sourceMappingURL=main.081d23f2.chunk.js.map