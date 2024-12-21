root=document.querySelector("[root]");
root.textContent="welcome";
mState={
  //elements:[],
};
menuStructure=[
  {
    text:"Programming Languages",
    type:"level",
    event:{type:"open",path:0},
    list:[
      {
        text:"Haskell",
        event:{type:"route",path:"Haskell"}
      }
    ]
  },
  {
    text:"Contact",
    type:"component", // ??
    component:"contact",
  },
  {
    text:"Link",
    type:"link",
    event:{type:"ref",path:"http://codepen.io/tcim4"}
  }
];
function o(args){
  let r=document.createElement("div");
  for(let prop in args){
    let settings={
      "text":function(){
        r.textContent=args[prop];
      },
      "class":function(){
        console.log(r)
        r.setAttribute(prop,args[prop])
      },
      "id":function(){
        console.log("Element added to mState")
        mState[args[prop]]=r;
        //r.addAttribute(prop,args[prop])
      }
    }[prop]()    
  }
  return r;
}
function b(elm,sibling){
  console.log(elm,sibling)
  elm.appendChild(sibling);
}
function s(id){
  return mState[id];
}
o({id:"container",class:"container",text:"Hello World"})
b(root,s("container"))
function e(elm,type,fn){
  elm.addEventListener(type,function(e){
    fn.call(e)
  })
}
e(s("container"),"click",function(){
  this.target.style.fontSize="22px"
})
function st(elm,styles){
  for(let prop in styles){
    elm.style[prop]=styles[prop];
  }
  return elm;
}
e(s("container"),"click",function(){
  st(this.target,{fontSize:"40px"})
})
function input(placeholder){
  var r=document.createElement("input");
  r.setAttribute("class","input")
  if(typeof placeholder!=="undefined"){
    r.setAttribute("placeholder",placeholder)
  }
  return r;
}
b(root,input("hello"))
function btn(text){
  let r=document.createElement("div");
  r.textContent=text;
  r.setAttribute("class","btn")
  return r;
}

/* Menu code */
function toggle(id){
  for(let item of menuStructure){
    document.write(JSON.stringify(item))
    /*
      change height of selected
      using st? // Blhewh
      add menu service to mState
    */
  }
}

toggle(1)

function execMenuEvent(event){
  let events={
    "open":function(){
      //toggle
    },
    "close":function(){
      // close menu
    },
    "route":function(){
      // router routes to path
    },
    "ref":function(){
      window.open(event.path)
    },
  }[event.type]()
}
// bind menu component to DOM
b(root,o({id:"menu",class:"menu"}))
o({id:"contact",class:"item contact",text:"Contact"})

// building the menu
for(let menuItem of menuStructure){
 console.log(menuItem)
 //    execMenuEvent(menuItem.event)
  if(menuItem.type=="component"){
    b(s("menu"),s(menuItem.component))
  }
  b(s("menu"),o({class:"item",text:menuItem.text}))
}

  
  
