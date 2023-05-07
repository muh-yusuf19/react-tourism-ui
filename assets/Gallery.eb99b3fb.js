import{r as A,j as k,F as q,a as h}from"./index.4df9525b.js";import{$ as p,c as V,i as _,b as I,S as $,a as y}from"./swiper.min.9dad389a.js";function D({swiper:e,extendParams:T,on:u,emit:x}){T({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function E(s){let l;return s&&(l=p(s),e.params.uniqueNavElements&&typeof s=="string"&&l.length>1&&e.$el.find(s).length===1&&(l=e.$el.find(s))),l}function S(s,l){const n=e.params.navigation;s&&s.length>0&&(s[l?"addClass":"removeClass"](n.disabledClass),s[0]&&s[0].tagName==="BUTTON"&&(s[0].disabled=l),e.params.watchOverflow&&e.enabled&&s[e.isLocked?"addClass":"removeClass"](n.lockClass))}function C(){if(e.params.loop)return;const{$nextEl:s,$prevEl:l}=e.navigation;S(l,e.isBeginning&&!e.params.rewind),S(s,e.isEnd&&!e.params.rewind)}function m(s){s.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),x("navigationPrev"))}function t(s){s.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),x("navigationNext"))}function a(){const s=e.params.navigation;if(e.params.navigation=V(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(s.nextEl||s.prevEl))return;const l=E(s.nextEl),n=E(s.prevEl);l&&l.length>0&&l.on("click",t),n&&n.length>0&&n.on("click",m),Object.assign(e.navigation,{$nextEl:l,nextEl:l&&l[0],$prevEl:n,prevEl:n&&n[0]}),e.enabled||(l&&l.addClass(s.lockClass),n&&n.addClass(s.lockClass))}function r(){const{$nextEl:s,$prevEl:l}=e.navigation;s&&s.length&&(s.off("click",t),s.removeClass(e.params.navigation.disabledClass)),l&&l.length&&(l.off("click",m),l.removeClass(e.params.navigation.disabledClass))}u("init",()=>{e.params.navigation.enabled===!1?c():(a(),C())}),u("toEdge fromEdge lock unlock",()=>{C()}),u("destroy",()=>{r()}),u("enable disable",()=>{const{$nextEl:s,$prevEl:l}=e.navigation;s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),l&&l[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),u("click",(s,l)=>{const{$nextEl:n,$prevEl:d}=e.navigation,i=l.target;if(e.params.navigation.hideOnClick&&!p(i).is(d)&&!p(i).is(n)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===i||e.pagination.el.contains(i)))return;let f;n?f=n.hasClass(e.params.navigation.hiddenClass):d&&(f=d.hasClass(e.params.navigation.hiddenClass)),x(f===!0?"navigationShow":"navigationHide"),n&&n.toggleClass(e.params.navigation.hiddenClass),d&&d.toggleClass(e.params.navigation.hiddenClass)}});const o=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),a(),C()},c=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),r()};Object.assign(e.navigation,{enable:o,disable:c,update:C,init:a,destroy:r})}function N({swiper:e,extendParams:T,on:u}){T({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let x=!1,E=!1;e.thumbs={swiper:null};function S(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const a=t.clickedIndex,r=t.clickedSlide;if(r&&p(r).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof a>"u"||a===null)return;let o;if(t.params.loop?o=parseInt(p(t.clickedSlide).attr("data-swiper-slide-index"),10):o=a,e.params.loop){let c=e.activeIndex;e.slides.eq(c).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,c=e.activeIndex);const s=e.slides.eq(c).prevAll(`[data-swiper-slide-index="${o}"]`).eq(0).index(),l=e.slides.eq(c).nextAll(`[data-swiper-slide-index="${o}"]`).eq(0).index();typeof s>"u"?o=l:typeof l>"u"?o=s:l-c<c-s?o=l:o=s}e.slideTo(o)}function C(){const{thumbs:t}=e.params;if(x)return!1;x=!0;const a=e.constructor;if(t.swiper instanceof a)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(_(t.swiper)){const r=Object.assign({},t.swiper);Object.assign(r,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new a(r),E=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",S),!0}function m(t){const a=e.thumbs.swiper;if(!a||a.destroyed)return;const r=a.params.slidesPerView==="auto"?a.slidesPerViewDynamic():a.params.slidesPerView;let o=1;const c=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(o=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(o=1),o=Math.floor(o),a.slides.removeClass(c),a.params.loop||a.params.virtual&&a.params.virtual.enabled)for(let n=0;n<o;n+=1)a.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+n}"]`).addClass(c);else for(let n=0;n<o;n+=1)a.slides.eq(e.realIndex+n).addClass(c);const s=e.params.thumbs.autoScrollOffset,l=s&&!a.params.loop;if(e.realIndex!==a.realIndex||l){let n=a.activeIndex,d,i;if(a.params.loop){a.slides.eq(n).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,n=a.activeIndex);const f=a.slides.eq(n).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),g=a.slides.eq(n).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof f>"u"?d=g:typeof g>"u"?d=f:g-n===n-f?d=a.params.slidesPerGroup>1?g:n:g-n<n-f?d=g:d=f,i=e.activeIndex>e.previousIndex?"next":"prev"}else d=e.realIndex,i=d>e.previousIndex?"next":"prev";l&&(d+=i==="next"?s:-1*s),a.visibleSlidesIndexes&&a.visibleSlidesIndexes.indexOf(d)<0&&(a.params.centeredSlides?d>n?d=d-Math.floor(r/2)+1:d=d+Math.floor(r/2)-1:d>n&&a.params.slidesPerGroup,a.slideTo(d,t?0:void 0))}}u("beforeInit",()=>{const{thumbs:t}=e.params;!t||!t.swiper||(C(),m(!0))}),u("slideChange update resize observerUpdate",()=>{m()}),u("setTransition",(t,a)=>{const r=e.thumbs.swiper;!r||r.destroyed||r.setTransition(a)}),u("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||E&&t.destroy()}),Object.assign(e.thumbs,{init:C,update:m})}function O({swiper:e,extendParams:T,emit:u,once:x}){T({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function E(){const m=e.getTranslate();e.setTranslate(m),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function S(){const{touchEventsData:m,touches:t}=e;m.velocities.length===0&&m.velocities.push({position:t[e.isHorizontal()?"startX":"startY"],time:m.touchStartTime}),m.velocities.push({position:t[e.isHorizontal()?"currentX":"currentY"],time:I()})}function C({currentPos:m}){const{params:t,$wrapperEl:a,rtlTranslate:r,snapGrid:o,touchEventsData:c}=e,l=I()-c.touchStartTime;if(m<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(m>-e.maxTranslate()){e.slides.length<o.length?e.slideTo(o.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(c.velocities.length>1){const v=c.velocities.pop(),b=c.velocities.pop(),B=v.position-b.position,P=v.time-b.time;e.velocity=B/P,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(P>150||I()-v.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,c.velocities.length=0;let n=1e3*t.freeMode.momentumRatio;const d=e.velocity*n;let i=e.translate+d;r&&(i=-i);let f=!1,g;const M=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let j;if(i<e.maxTranslate())t.freeMode.momentumBounce?(i+e.maxTranslate()<-M&&(i=e.maxTranslate()-M),g=e.maxTranslate(),f=!0,c.allowMomentumBounce=!0):i=e.maxTranslate(),t.loop&&t.centeredSlides&&(j=!0);else if(i>e.minTranslate())t.freeMode.momentumBounce?(i-e.minTranslate()>M&&(i=e.minTranslate()+M),g=e.minTranslate(),f=!0,c.allowMomentumBounce=!0):i=e.minTranslate(),t.loop&&t.centeredSlides&&(j=!0);else if(t.freeMode.sticky){let v;for(let b=0;b<o.length;b+=1)if(o[b]>-i){v=b;break}Math.abs(o[v]-i)<Math.abs(o[v-1]-i)||e.swipeDirection==="next"?i=o[v]:i=o[v-1],i=-i}if(j&&x("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(r?n=Math.abs((-i-e.translate)/e.velocity):n=Math.abs((i-e.translate)/e.velocity),t.freeMode.sticky){const v=Math.abs((r?-i:i)-e.translate),b=e.slidesSizesGrid[e.activeIndex];v<b?n=t.speed:v<2*b?n=t.speed*1.5:n=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&f?(e.updateProgress(g),e.setTransition(n),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating=!0,a.transitionEnd(()=>{!e||e.destroyed||!c.allowMomentumBounce||(u("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(g),a.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(u("_freeModeNoMomentumRelease"),e.updateProgress(i),e.setTransition(n),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,a.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(i),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&u("_freeModeNoMomentumRelease");(!t.freeMode.momentum||l>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:E,onTouchMove:S,onTouchEnd:C}})}const F=()=>{const[e,T]=A.exports.useState(null);return k(q,{children:[k($,{loop:!0,spaceBetween:10,navigation:!0,thumbs:{swiper:e&&!e.destroyed?e:null},modules:[O,D,N],className:"mySwiper2",children:[h(y,{children:h("img",{className:"w-full object-cover object-center",src:"/slide01.jpg"})}),h(y,{children:h("img",{className:"w-full object-cover object-center",src:"https://swiperjs.com/demos/images/nature-2.jpg"})}),h(y,{children:h("img",{className:"w-full object-cover object-center",src:"https://swiperjs.com/demos/images/nature-3.jpg"})})]}),k($,{onSwiper:T,loop:!0,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:[O,D,N],className:"customSwiper",children:[h(y,{children:h("img",{className:"w-full object-cover object-center",src:"/slide01.jpg"})}),h(y,{children:h("img",{className:"w-full object-cover object-center",src:"https://swiperjs.com/demos/images/nature-2.jpg"})}),h(y,{children:h("img",{className:"w-full object-cover object-center",src:"https://swiperjs.com/demos/images/nature-3.jpg"})})]})]})};export{F as default};
