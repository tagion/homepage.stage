(this.webpackJsonp=this.webpackJsonp||[]).push([[15],{445:function(t,e,s){"use strict";s.r(e);s(375),s(49);var o=s(349),n=s(361),i=s(360),a=(s(362),s(359),s(363),s(357),s(341),s(386)),c=s(385),r=s(387),d=s(388),l={data:function(){return{isConnected:!1,isSubscribed:!1,hosts:{},selectedHost:"",socketTimeout:void 0}},components:{LayoutDefault:o.a,BrandButton:n.a,SocialButtons:i.a,NodeList:a.a,Hashgraph:c.a,TokenForm:r.a,NetworkStatus:d.a},mounted:function(){this.connectSocket()},beforeDestroy:function(){this.clearTimeoutSocket()},methods:{connectSocket:function(){this.$socket.emit("nodesInit",{},this.onNodesInit.bind(this)),this.sockets.subscribe("nodesUpdate",this.onNodesUpdate.bind(this))},clearTimeoutSocket:function(){this.socketTimeout&&clearTimeout(this.socketTimeout)},onNodeSelect:function(t){this.selectNode(t)},selectNode:function(t){this.selectedHost=t},onNodesInit:function(t){this.isConnected=!0,this.hosts=t;var e=Object.keys(this.hosts);this.selectedHost||this.selectNode(e[0])},onNodesUpdate:function(t){this.hosts=t}}},h=(s(356),s(383),s(27)),u=Object(h.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout-default",{staticClass:"landing-page testnet-page",attrs:{id:"landing-page"}},[s("template",{slot:"root-content"},[s("div",{staticClass:"container-wrapper"},[t.isConnected?s("b-container",{staticClass:"container py-4"},[s("b-row",{staticClass:"d-flex justify-content-lg-between"},[s("b-col",{staticClass:"px-3",attrs:{cols:"12",lg:"5"}},[s("NetworkStatus",{attrs:{hosts:t.hosts}}),t._v(" "),s("NodeList",{attrs:{hosts:t.hosts,selected:t.selectedHost},on:{select:t.onNodeSelect}})],1),t._v(" "),s("b-col",{staticClass:"px-3 px-lg-0",attrs:{cols:"12",lg:"7"}},[s("Hashgraph",{attrs:{isSubscribed:t.isSubscribed,address:t.selectedHost,isConnected:this.hosts[t.selectedHost]||!1}}),t._v(" "),s("b-card",{staticClass:"testnet-card",attrs:{tag:"article"}},[s("h2",[t._v("About Monitor")]),t._v(" "),s("b-card-text",{staticStyle:{"text-align":"left"}},[t._v("\n                Tagion AlphaOne comes with a monitor function, which lets you better understand how the AlphaOne network is operating, The monitor provides useful information such as network status, active nodes, and a hashgraph showing recent network communication and event ordering between nodes.\n              ")])],1)],1)],1)],1):s("b-container",{staticClass:"container py-4"},[s("div",{staticClass:"not-connected"},[s("div",[t._v("Not connected to Tagion AlphaOne Monitor")]),t._v(" "),s("div",{staticClass:"text-muted"},[t._v("Please, refresh this page in 2 minutes")])])])],1)])],2)}),[],!1,null,null,null);e.default=u.exports}}]);