(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports={cell:"_1s6PCBba5GXKKKnliNU3Nd",cellCover:"_3w7m_IWFoucSSH9C-ORL6E"}},137:function(e,t,n){e.exports={App:"_1o-FpbQrR11SDFN-G7O4U3"}},148:function(e,t,n){e.exports={cardwrapper:"_26nFhesm2IQk22bG-YXGb1"}},149:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return"https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20181017T054446Z.8828bf2afad54623.4a6026cd581541a63e2fe5172389bf0da8ffab88&lang=ru-ru&text="+e}},160:function(e,t,n){e.exports=n(297)},168:function(e,t,n){},25:function(e,t,n){e.exports={menu:"oJ7qGPb1fLEaxrXnP2yuJ",controls:"_1rdgeCWkPyAFTZnGAo4hbS",button:"_1TF-VHFBUsnvpzzMPDLMKd",buttonEasy:"_3dZfvr65izUc5md-53SRoS",buttonNormal:"_3b1ZXcM6u4baC-JdMwtz3v",buttonHard:"_2gtQsHnaSGz2o_Hwh4EeMd"}},297:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(54),u=n.n(c),l=n(29),s=(n(168),n(7)),o=n(8),i=n(10),_=n(9),p=n(11),m=n(307),v=n(308),d=n(137),b=n.n(d),f=n(77),h=n(304),E=n(303),O=n(25),j=n.n(O),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).state={currentScore:0},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("totalScore"));null!==e?this.props.score>e?(localStorage.setItem("totalScore",this.props.score.toString()),this.setState({currentScore:this.props.score})):this.setState({currentScore:e}):localStorage.setItem("totalScore","0")}},{key:"render",value:function(){return a.a.createElement("span",null,this.state.currentScore)}}]),t}(r.Component),C=Object(l.b)(function(e){return{score:e.score}})(g),k="LEVEL_UP",y="DROP_LEVEL",S="SET_CARD_VALUE",w="CLEAR_CARD_VALUE",T="SET_CARD_NAME",M="START_LEVEL",V="STOP_LEVEL",P="UPDATE_SCORE",L="DROP_SCORE",D="SET_MAX_TIME",x="SET_WARNING",A="SET_TARGET",I=function(){return{type:k}},N=function(e){return{type:S,value:e}},U=function(){return{type:w}},R=function(){return{type:M}},W=function(){return{type:V}},B=function(e){return{type:P,score:e}},K=function(e){return{type:x,warning:e}},F=-1,J=60,G=30,q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).easyClick=function(){n.props.setMaxTime(F)},n.normalClick=function(){n.props.setMaxTime(J)},n.hardClick=function(){n.props.setMaxTime(G)},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:j.a.menu},a.a.createElement("h1",null,"\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u041e\u0442\u0441\u0447\u0435\u0442"),a.a.createElement("div",{className:j.a.controls},a.a.createElement(E.a,{to:"/game"},a.a.createElement(f.a,{name:"play circle",size:"massive"})),a.a.createElement(h.a.Group,null,a.a.createElement(h.a,{className:[j.a.buttonEasy,j.a.button],onClick:this.easyClick},"\u041b\u0435\u0433\u043a\u043e"),a.a.createElement(h.a,{className:[j.a.buttonNormal,j.a.button],onClick:this.normalClick},"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e"),a.a.createElement(h.a,{className:[j.a.buttonHard,j.a.button],onClick:this.hardClick},"\u0421\u043b\u043e\u0436\u043d\u043e"))),a.a.createElement("div",null,a.a.createElement("span",null,"\u0412\u0430\u0448 \u0440\u0435\u043a\u043e\u0440\u0434:"),a.a.createElement(C,null)))}}]),t}(r.Component),H=Object(l.b)(null,function(e){return{setMaxTime:function(t){return e(function(e){return{type:D,time:e}}(t))}}})(q),z=n(148),X=n.n(z),Z=n(30),Q=n.n(Z),Y=n(306),$=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(Y.a,{size:"medium"},this.props.score))}}]),t}(r.Component),ee=Object(l.b)(function(e){return{score:e.score}})($),te=n(39),ne=10,re=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).getDescription=function(){if(n.props.level.number>=ne)return"\u0412\u0441\u0451!";switch(n.props.name){case te.b:return"\u041d\u0430\u0439\u0434\u0438 \u0441\u043b\u043e\u0432\u043e";case te.a:return"\u041d\u0430\u0439\u0434\u0438 \u0447\u0438\u0441\u043b\u043e";default:return""}},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.getDescription();return a.a.createElement("div",null,a.a.createElement(Y.a,{size:"large"},e))}}]),t}(r.Component),ae=Object(l.b)(function(e){return{name:e.currentCard.name,level:e.level}},null)(re),ce=n(35),ue=n.n(ce),le=n(41),se=n(32),oe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).state={timer:null,currentTime:n.props.maxTime},n.nextLevel=Object(le.a)(ue.a.mark(function e(){var t,r,a,c;return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.currentCard,r=t.value,a=t.name,e.prev=1,e.next=4,Object(se.a)(a,r);case 4:c=e.sent,n.props.setWarning(c.warning),n.props.updateScore(c.value),setTimeout(function(){return n.props.setWarning("")},1e3),n.props.clearCardValue(),n.props.stopLevel(),n.props.levelUp(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),alert("Check you internet connection");case 16:case"end":return e.stop()}},e,this,[[1,13]])})),n.tick=function(){if(n.props.maxTime<0)return!1;0===n.state.currentTime&&n.setState({currentTime:n.props.maxTime},function(){return n.nextLevel()}),n.props.levelStarted?n.setState({currentTime:n.state.currentTime-1}):n.setState({currentTime:n.props.maxTime})},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=setInterval(this.tick,1e3);this.setState({timer:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var e=this.props.maxTime<0?"\u221e":this.state.currentTime,t=this.state.currentTime<=5?"red":"";return a.a.createElement("div",{className:Q.a.flex},a.a.createElement(f.a,{name:"time"}),a.a.createElement(Y.a,{className:Q.a.nomargin,size:"medium"},a.a.createElement("span",{style:{color:t}},e)))}}]),t}(r.Component),ie=Object(l.b)(function(e){return{maxTime:e.maxTime,levelStarted:e.level.started,currentCard:e.currentCard}},function(e){return{levelUp:function(){return e(I())},stopLevel:function(){return e(W())},updateScore:function(t){return e(B(t))},clearCardValue:function(){return e(U())},setWarning:function(t){return e(K(t))}}})(oe),_e=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).cancelClick=function(){n.props.stopLevel(),n.props.dropLevel(),n.props.dropScore()},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(E.a,{to:"/"},a.a.createElement(h.a,{onClick:this.cancelClick,animated:!0,color:"red",size:"massive",className:Q.a.responsiveFont},a.a.createElement(h.a.Content,{visible:!0},"\u0423\u0445\u043e\u0436\u0443"),a.a.createElement(h.a.Content,{hidden:!0},a.a.createElement(f.a,{name:"arrow left"})))))}}]),t}(r.Component),pe=Object(l.b)(null,function(e){return{dropLevel:function(){return e({type:y})},stopLevel:function(){return e(W())},dropScore:function(){return e({type:L})}}})(_e),me=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).state={loading:!1},n.doneButtonClick=Object(le.a)(ue.a.mark(function e(){var t,r;return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.currentCard,e.prev=1,e.next=4,n.setState({loading:!0});case 4:return e.next=6,Object(se.a)(t);case 6:return r=e.sent,e.next=9,n.setState({loading:!1});case 9:n.props.setWarning(r.warning),n.props.updateScore(r.value),setTimeout(function(){return n.props.setWarning("")},2e3),n.props.clearCardValue(),n.props.stopLevel(),n.props.levelUp(),e.next=23;break;case 17:return e.prev=17,e.t0=e.catch(1),console.log(e.t0),alert("Check you internet connection"),e.next=23,n.setState({loading:!1});case 23:case"end":return e.stop()}},e,this,[[1,17]])})),n.isGameOver=function(){return n.props.level.number>=ne},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(h.a,{onClick:this.doneButtonClick,className:[Q.a.responsiveFont,Q.a.nomargin],animated:!0,disabled:this.isGameOver()||this.state.loading,loading:this.state.loading,color:"green",size:"massive"},a.a.createElement(h.a.Content,{visible:!0},"\u0413\u043e\u0442\u043e\u0432\u043e"),a.a.createElement(h.a.Content,{hidden:!0},a.a.createElement(f.a,{name:"arrow right"}))))}}]),t}(r.Component),ve=Object(l.b)(function(e){return{currentCard:e.currentCard,score:e.score,level:e.level}},function(e){return{levelUp:function(){return e(I())},stopLevel:function(){return e(W())},updateScore:function(t){return e(B(t))},clearCardValue:function(){return e(U())},setWarning:function(t){return e(K(t))}}})(me),de=n(37),be=n(42),fe=n.n(be),he=n(100),Ee=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).handleClick=function(){n.props.cellClick(n.props.index,n.props.value)},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t="positive"===(e=this.props.state)?"palegreen":"negative"===e?"salmon":"whitesmoke",n=this.props.hidden?"1":"0.5";return a.a.createElement("div",{className:[he.cell],onClick:this.handleClick},this.props.value,a.a.createElement("div",{className:he.cellCover,style:{backgroundColor:t,opacity:n}}))}}]),t}(r.Component),Oe=n(40),je=" ",ge=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(i.a)(this,Object(_.a)(t).call(this,e))).cellClick=function(e,t){if(n.props.level.started){var r=n.props.inputLastValue;if(r&&Object(se.c)(Oe.a,r)&&Object(se.c)(Oe.a,t))return!1;var a=Object(de.a)(n.state.givenValues);a[e]=je,n.setState({givenValues:a}),n.props.cellClick(t)}};var r=Array(e.maxLength).fill(je);return n.state={emptyValues:r,givenValues:[]},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.returnedValue!==this.props.returnedValue){var t=e.returnedValue;if(t){var n=Object(de.a)(this.state.givenValues);n=n.join(",").replace(je,t).split(","),this.setState({givenValues:n})}}e.values!==this.props.values&&this.setState({givenValues:e.values})}},{key:"render",value:function(){var e=this,t=this.state,n=t.emptyValues,r=t.givenValues,c=this.props,u=c.values,l=c.maxLength,s=n.slice(u.length),o=r.concat(s).slice(0,l).map(function(t,n){return a.a.createElement(Ee,{index:n,key:n,hidden:!e.props.level.started,state:Object(se.d)(t),value:t,cellClick:e.cellClick})});return a.a.createElement("div",{className:Z.flex},o)}}]),t}(r.Component),Ce=Object(l.b)(function(e){return{level:e.level}})(ge),ke=n(43),ye=n(78),Se=n.n(ye),we=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:Se.a.cardInput},a.a.createElement("span",{className:Se.a.value},this.props.value),a.a.createElement(f.a,{onClick:this.props.backspaceClick,className:Se.a.backspace,name:"long arrow alternate left",size:"large"}))}}]),t}(r.Component),Te=9,Me=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).state={letters:[],currentValue:"",returnedValue:""},n.setLetterToState=function(e){var t=e[Math.floor(Math.random()*e.length)];n.setState({letters:Object(de.a)(n.state.letters).concat([t])})},n.startLevelIfHaveAllLetters=function(){n.state.letters.length+1>=Te&&n.props.startLevel()},n.getVowel=function(){if(n.startLevelIfHaveAllLetters(),n.props.level.started)return!1;n.setLetterToState(ke.b)},n.getConsonant=function(){if(n.startLevelIfHaveAllLetters(),n.props.level.started)return!1;n.setLetterToState(ke.a)},n.cellClick=function(e){n.setState({currentValue:n.state.currentValue.concat(e)},function(){return n.props.setCardValue(n.state.currentValue)})},n.popInputValue=function(){var e=n.state.currentValue[n.state.currentValue.length-1],t=Object(de.a)(n.state.currentValue);t.pop(),n.setState({returnedValue:e,currentValue:t.join("")},function(){return n.props.setCardValue(n.state.currentValue)})},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.level.number!==this.props.level.number&&this.setState({letters:[],currentValue:"",returnedValue:""})}},{key:"render",value:function(){return a.a.createElement("div",{className:be.card},a.a.createElement(Ce,{values:this.state.letters,maxLength:Te,cellClick:this.cellClick,returnedValue:this.state.returnedValue}),a.a.createElement(we,{backspaceClick:this.popInputValue,value:this.state.currentValue}),a.a.createElement(h.a.Group,null,a.a.createElement(h.a,{className:Q.a.responsiveFont,disabled:this.props.level.started,onClick:this.getVowel},"\u0413\u043b\u0430\u0441\u043d\u0430\u044f"),a.a.createElement(h.a,{className:Q.a.responsiveFont,disabled:this.props.level.started,onClick:this.getConsonant},"\u0421\u043e\u0433\u043b\u0430\u0441\u043d\u0430\u044f")))}}]),t}(r.Component),Ve=Object(l.b)(function(e){return{level:e.level,currentCard:e.currentCard}},function(e){return{startLevel:function(){return e(R())},setCardValue:function(t){return e(N(t))}}})(Me),Pe=n(36),Le={fontSize:"2em",color:"#9F6000",padding:"0",backgroundColor:"#FEEFB3"},De=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.message?"1em":"0";return a.a.createElement("div",{style:Object(Pe.a)({},Le,{padding:e})},this.props.message)}}]),t}(r.Component),xe=function(e){var t=e.value,n=e.buttonClick;return a.a.createElement(h.a,{className:Q.a.responsiveFont,size:"massive",onClick:function(){return n(t)}},t)},Ae=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.buttons.map(function(t,n){return a.a.createElement(xe,{key:n,value:t,buttonClick:e.props.buttonClick})});return a.a.createElement("div",null,a.a.createElement(h.a.Group,null,t))}}]),t}(r.Component),Ie=n(49),Ne=6,Ue=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(a)))).state={target:"",numbers:[],currentValue:[],returnedValue:""},n.setLetterToState=function(e){var t=e[Math.floor(Math.random()*e.length)];n.setState({numbers:Object(de.a)(n.state.numbers).concat([t])},function(){if(n.props.level.started){var e=Object(se.b)(n.state.numbers);n.props.setCardTarget(e),n.setState({target:e})}})},n.startLevelIfHaveAllLetters=function(){n.state.numbers.length+1>=Ne&&n.props.startLevel()},n.getSmall=function(){if(n.startLevelIfHaveAllLetters(),n.props.level.started)return!1;n.setLetterToState(Oe.c)},n.getBig=function(){if(n.startLevelIfHaveAllLetters(),n.props.level.started)return!1;n.setLetterToState(Oe.b)},n.cellClick=function(e){var t=n.state.currentValue[n.state.currentValue.length-1];return!(!t&&Object(se.c)(Ie.a,e))&&(!(t&&Object(se.c)(Ie.a,t)&&Object(se.c)(Ie.a,e))&&void n.setState({currentValue:Object(de.a)(n.state.currentValue).concat([e])},function(){return n.props.setCardValue(n.state.currentValue.join(""))}))},n.popInputValue=function(){var e=Object(de.a)(n.state.currentValue),t=n.state.currentValue[n.state.currentValue.length-1];if(!t)return!1;e.pop(),n.setState({returnedValue:Object(se.c)(Ie.a,t)?"":t,currentValue:e},function(){return n.props.setCardValue(n.state.currentValue.join(""))})},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){e.level.number!==this.props.level.number&&this.setState({target:"",numbers:[],currentValue:[],returnedValue:""})}},{key:"render",value:function(){return a.a.createElement("div",{className:be.card},a.a.createElement(Ce,{values:this.state.numbers,maxLength:Ne,cellClick:this.cellClick,returnedValue:this.state.returnedValue,inputLastValue:this.state.currentValue[this.state.currentValue.length-1]}),a.a.createElement(Ae,{buttons:Ie.a,buttonClick:this.cellClick}),a.a.createElement("div",null,a.a.createElement("span",{className:Q.a.responsiveFont},this.state.target)),a.a.createElement(we,{backspaceClick:this.popInputValue,value:this.state.currentValue.join(" ")}),a.a.createElement(h.a.Group,null,a.a.createElement(h.a,{className:Q.a.responsiveFont,disabled:this.props.level.started,onClick:this.getSmall},"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0435"),a.a.createElement(h.a,{className:Q.a.responsiveFont,disabled:this.props.level.started,onClick:this.getBig},"\u0411\u043e\u043b\u044c\u0448\u043e\u0435")))}}]),t}(r.Component),Re=Object(l.b)(function(e){return{level:e.level,currentCard:e.currentCard}},function(e){return{startLevel:function(){return e(R())},setCardValue:function(t){return e(N(t))},setCardTarget:function(t){return e(function(e){return{type:A,target:e}}(t))}}})(Ue),We=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.score;return a.a.createElement("div",{className:fe.a.gameOverCard},a.a.createElement("div",null,a.a.createElement("span",{className:fe.a.bigheader},"\u0412\u044b \u043d\u0430\u0431\u0440\u0430\u043b\u0438: ",e)),a.a.createElement("div",null,a.a.createElement("span",{className:fe.a.smallheader},"\u0412\u0430\u0448 \u0440\u0435\u043a\u043e\u0440\u0434: ",a.a.createElement(C,null))))}}]),t}(r.Component),Be=Object(l.b)(function(e){return{score:e.score}})(We),Ke={WordCard:a.a.createElement(Ve,null),NumberCard:a.a.createElement(Re,null)},Fe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(c)))).resolveCard=function(){if(n.props.level.number>=ne)return a.a.createElement(Be,null);var e=n.props.level.number%2===0?te.b:te.a;return n.props.setCardName(e),Ke[e]},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.resolveCard();return a.a.createElement("div",{className:X.a.cardwrapper},a.a.createElement("div",{className:Q.a.borderBottom},a.a.createElement(ee,null),a.a.createElement(ae,null),a.a.createElement("div",null,a.a.createElement(ie,null))),a.a.createElement(De,{message:this.props.warning}),e,a.a.createElement("div",null,a.a.createElement(pe,null),a.a.createElement(ve,null)))}}]),t}(r.Component),Je=Object(l.b)(function(e){return{level:e.level,warning:e.warning}},function(e){return{setCardName:function(t){return e(function(e){return{type:T,name:e}}(t))}}})(Fe),Ge=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(Je,null)}}]),t}(r.Component),qe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:b.a.App},a.a.createElement(m.a,null,a.a.createElement(v.a,{exact:!0,path:"/",component:H}),a.a.createElement(v.a,{exact:!0,path:"/game",component:Ge})))}}]),t}(r.Component),He=n(55);var ze=Object(He.b)({level:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{number:0,started:!1};switch((arguments.length>1?arguments[1]:void 0).type){case k:return Object(Pe.a)({},e,{number:e.number+1});case M:return Object(Pe.a)({},e,{started:!0});case V:return Object(Pe.a)({},e,{started:!1});case y:return Object(Pe.a)({},e,{number:0});default:return e}},currentCard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",value:"",target:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(Pe.a)({},e,{value:t.value});case w:return Object(Pe.a)({},e,{value:""});case T:return Object(Pe.a)({},e,{name:t.name});case A:return Object(Pe.a)({},e,{target:t.target});default:return e}},score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return e+t.score;case L:return 0;default:return e}},maxTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return t.time;default:return e}},warning:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.warning;default:return e}}}),Xe=Object(He.c)(ze,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Ze=n(305);u.a.render(a.a.createElement(l.a,{store:Xe},a.a.createElement(Ze.a,{basename:"/countdown"},a.a.createElement(qe,null))),document.getElementById("root"))},30:function(e,t,n){e.exports={flex:"PUafWHsfzIStJRj8xpx6H",nomargin:"_4x4peJwBRGhlMqoJSmZek",borderBottom:"_1-uDMLSrQVlWDSKenWM9Au",borderTop:"_3C0Ed6PKPaSHBdPqj69dwi",responsiveFont:"D4JuHztIhvsLlzmXLRQDA"}},32:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return contains}),__webpack_require__.d(__webpack_exports__,"d",function(){return getCellState}),__webpack_require__.d(__webpack_exports__,"a",function(){return calculateScore}),__webpack_require__.d(__webpack_exports__,"b",function(){return calculateTargetNumberValue});var _Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),_Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),_constants_letters__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43),_constants_numbers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(40),_constants_signs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(49),_constants_cardNames__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(39),_apiUrls__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(149),POSITIVE="positive",NEGATIVE="negative",request=function(){var e=Object(_Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(t){var n,r;return _Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),contains=function(e,t){return e.indexOf(t)>-1},getCellState=function(e){return contains(_constants_letters__WEBPACK_IMPORTED_MODULE_2__.b,e)?POSITIVE:contains(_constants_letters__WEBPACK_IMPORTED_MODULE_2__.a,e)?NEGATIVE:contains(_constants_numbers__WEBPACK_IMPORTED_MODULE_3__.c,e)?NEGATIVE:contains(_constants_numbers__WEBPACK_IMPORTED_MODULE_3__.b,e)?POSITIVE:void 0},calculateScore=function(){var e=Object(_Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(t){var n,r,a,c;return _Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.name,r=t.value,a=t.target,c={warning:"",value:0},r){e.next=4;break}return e.abrupt("return",c);case 4:e.t0=n,e.next=e.t0===_constants_cardNames__WEBPACK_IMPORTED_MODULE_5__.b?7:e.t0===_constants_cardNames__WEBPACK_IMPORTED_MODULE_5__.a?11:13;break;case 7:return e.next=9,calculateScoreForWord(r);case 9:return c=e.sent,e.abrupt("break",14);case 11:return c=calculateScoreForNumber(r,a),e.abrupt("break",14);case 13:return e.abrupt("break",14);case 14:return e.abrupt("return",c);case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),calculateScoreForNumber=function calculateScoreForNumber(expr,target){var userValue=eval(expr),diff=Math.abs(target-userValue),value=0,warning="";return 0===diff?value=10:diff>0&&diff<10?value=5:diff>10&&diff<20?value=2:(value=0,warning="\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 ".concat(userValue," \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u0430\u043b\u0435\u043a \u043e\u0442 \u0446\u0435\u043b\u0438 ").concat(target)),{value:value,warning:warning}},calculateScoreForWord=function(){var e=Object(_Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function e(t){var n,r;return _Users_vlivanov_My_Projects_JS_Countdown_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(_apiUrls__WEBPACK_IMPORTED_MODULE_6__.a)(t),e.next=3,request(n);case 3:if(!((r=e.sent)&&r.def&&r.def.length>0)){e.next=6;break}return e.abrupt("return",{warning:"",value:t.length});case 6:return e.abrupt("return",{warning:"\u0412 \u043d\u0430\u0448\u0435\u043c \u0441\u043b\u043e\u0432\u0430\u0440\u0435 \u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 :(",value:0});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getRandomElementFromArray=function(e){return e[Math.floor(Math.random()*e.length)]},isValidTargetNumber=function(e){return-1===e.indexOf(".")&&-1===e.indexOf("-")&&3===e.length},calculateTargetNumberValue=function calculateTargetNumberValue(numbers){for(;;){var expr=numbers.map(function(e,t){var n=getRandomElementFromArray(_constants_signs__WEBPACK_IMPORTED_MODULE_4__.a);return t<numbers.length-1?e+n:e}),target=eval(expr.join("")).toString();if(isValidTargetNumber(target))return target}}},39:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r="WordCard",a="NumberCard"},40:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return c});var r=["100","75","50"],a=["1","2","3","4","5","6","7","8","9","10"],c=["100","75","50","1","2","3","4","5","6","7","8","9","10"]},42:function(e,t,n){e.exports={card:"_31wIJMU6DuwHxpviBbpyW2",gameOverCard:"_1uk_qXaRL_wnGjo9KPqhtX",bigheader:"_3j8cbrYgcwTug1J77fpOGb",smallheader:"Em0p_g1l6tAx9K3qM3I_A"}},43:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=["\u0443","\u0435","\u044b","\u0430","\u043e","\u044f","\u0438","\u044e"],a=["\u0439","\u0446","\u043a","\u043d","\u0433","\u0448","\u0449","\u0437","\u0445","\u0444","\u0432","\u043f","\u0440","\u043b","\u0434","\u0436","\u0447","\u0441","\u043c","\u0442","\u044c","\u0431"]},49:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=["+","-","*","/"]},78:function(e,t,n){e.exports={cardInput:"_1RnpPl4LcSY0ZmVJKFNjqy",backspace:"_2uXlsU1oRWHTZftkjk-Rr5",value:"_2WkBI8o5hcki8Rg6Ed_dKb"}}},[[160,2,1]]]);
//# sourceMappingURL=main.2eb1c99f.chunk.js.map