import{r as i,_ as d,j as a,a as e,L as n}from"./index.4df9525b.js";import{N as t,H as s,T as o,p as m,C as x,I as p,c as g,V as h,a as c,F as u,f,B as v}from"./Navbar.3e5e6875.js";const _=i.exports.lazy(()=>d(()=>import("./BottomNav.4c8cc9fb.js"),["assets/BottomNav.4c8cc9fb.js","assets/Navbar.3e5e6875.js","assets/index.4df9525b.js","assets/index.124494e5.css"])),w=i.exports.lazy(()=>d(()=>import("./Footer.b067691a.js"),["assets/Footer.b067691a.js","assets/Navbar.3e5e6875.js","assets/index.4df9525b.js","assets/index.124494e5.css"])),A=()=>a("main",{children:[e(t,{}),e("div",{className:"flex flex-col py-16",children:e("div",{className:"max-w-md px-8 md:px-0 md:max-w-xl mx-auto",children:a("div",{className:"text-center w-full space-y-6",children:[e(s,{textAlign:"center",color:"gray.700",size:"4xl",children:"Tourism"}),e(o,{color:"gray.700",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident fuga ipsa, quisquam asperiores magni consectetur consequuntur hic."})]})})}),e("section",{className:"py-16 px-6 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl md:mx-auto",children:e("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:m.map(r=>a(x,{shadow:"lg",borderRadius:["lg","xl"],overflow:"hidden",children:[e(p,{objectFit:"cover",h:["60","52","72"],src:`./${r.image}`}),e(g,{bg:"white",children:a(h,{spacing:"2",children:[e(s,{textAlign:"left",size:"md",children:r.name}),a(c,{display:"flex",alignItems:"center",children:[Array(5).fill("").map((y,l)=>e(o,{color:l<r.rating?"green.400":"gray.300",children:e(u,{icon:f})},l)),a(c,{pl:"2",fontSize:"xs",children:[r.reviewCount," reviews"]})]}),e(n,{to:`/explore/${r.id}`,children:e(v,{size:["sm","md"],colorScheme:"green",children:"More"})})]})})]},r.id))})}),a(i.exports.Suspense,{fallback:e("p",{children:"Loading..."}),children:[e(w,{}),e(_,{})]})]});export{A as default};
