(self.webpackChunkpradul_p=self.webpackChunkpradul_p||[]).push([[261],{9332:function(e,n,t){var r,a=t(6690).default,u=t(9728).default,o=t(6115).default,l=t(1655).default,i=t(6389).default,c=t(4704).default,s=Object.create,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,d=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=function(e,n,t,r){if(n&&"object"===typeof n||"function"===typeof n){var a,u=c(y(n));try{var o=function(){var u=a.value;m.call(e,u)||u===t||f(e,u,{get:function(){return n[u]},enumerable:!(r=p(n,u))||r.enumerable})};for(u.s();!(a=u.n()).done;)o()}catch(l){u.e(l)}finally{u.f()}}return e},v=function(e,n,t){return function(e,n,t){n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!==typeof n?n+"":n,t),t},P={};!function(e,n){for(var t in n)f(e,t,{get:n[t],enumerable:!0})}(P,{default:function(){return w}}),e.exports=(r=P,h(f({},"__esModule",{value:!0}),r));var k=function(e,n,t){return t=null!=e?s(d(e)):{},h(!n&&e&&e.__esModule?t:f(t,"default",{value:e,enumerable:!0}),e)}(t(2791)),b=t(135),g=t(365),w=function(e){"use strict";l(t,e);var n=i(t);function t(){var e;return a(this,t),e=n.apply(this,arguments),v(o(e),"callPlayer",b.callPlayer),v(o(e),"duration",null),v(o(e),"currentTime",null),v(o(e),"secondsLoaded",null),v(o(e),"mute",(function(){e.callPlayer("mute")})),v(o(e),"unmute",(function(){e.callPlayer("unmute")})),v(o(e),"ref",(function(n){e.iframe=n})),e}return u(t,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var n=this;(0,b.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then((function(e){n.iframe&&(n.player=new e.Player(n.iframe),n.player.on("ready",(function(){setTimeout((function(){n.player.isReady=!0,n.player.setLoop(n.props.loop),n.props.muted&&n.player.mute(),n.addListeners(n.player,n.props),n.props.onReady()}),500)})))}),this.props.onError)}},{key:"addListeners",value:function(e,n){var t=this;e.on("play",n.onPlay),e.on("pause",n.onPause),e.on("ended",n.onEnded),e.on("error",n.onError),e.on("timeupdate",(function(e){var n=e.duration,r=e.seconds;t.duration=n,t.currentTime=r}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),n||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){return k.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}]),t}(k.Component);v(w,"displayName","Kaltura"),v(w,"canPlay",g.canPlay.kaltura)}}]);
//# sourceMappingURL=reactPlayerKaltura.d63fde1d.chunk.js.map