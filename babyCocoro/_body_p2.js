import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v, createElement} from './sydneyLib/sydneyDom.js';

__sS(
    {
        nameTag:'_social_style',
        style:{
            minHeight:'40px',
            minWidth:'40px',
            cursor:'pointer',
            borderRadius:'50%',
            
        }
    }
)

__SYD._p2 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:"column-reverse",
                    transform:'unset',
                    marginBottom:'20px',
                    alignItems:'center'
                }
            })
        },
        [
            __c(
                'div',
                {
                    style:`min-height:fit-content;height:100%;width:${__p(['_p2','_flex'],'row') === 'row' ? '60%' : '100%'};background:unset;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px`
                },
                [
                    // __c('h2',{class:'rainbow__text',style:`text-align:center;width:100%;font-size:${__p(['_p2','__font'],{2:'50px'})['2']}`},['INTRODUCING ...']),
                    // __c('h1',{class:'headers_clr',style:`font-family:sunrise;font-size:${__p(['_p2','__font'],{1:'70px'})['1']};`},[__c("span",{style:"font-family:this_cafe;"},["$"]),'TEFE']),
                    __c('h2',{class:'',style:`font-family:sunrise;color:#000;line-height:150%;text-align:center;width:100%;font-size:${__p(['_p2','__font'],{1:'30px'})['1']}`},["Wreckin' Ethereum like a mini boss — it’s Baby Cocoro time."]),
                    // __SYD.about_text_p2()
                ]
            ),
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p2','_flex'],'row') === 'row' ? '70vh' : '300px'};width:${__p(['_p2','_flex'],'row') === 'row' ? '40%' : '100%'};background-image:url("./assets/main.png");background-size:contain;`
                },[],
                {
                    genericStyle:[__p(['_p2','_flex'],'row') === 'row' ? 'bg_cover' : 'bg_fit'],
                }
            ),
        ],
        {
            createState:{
                stateName:'_p2',
                state:{_flex:'row',__font:{1:'30px',2:'50px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{_flex:'column-reverse',__font:{1:'20px',2:'20px'}}}],
                defState:{_flex:'row',__font:{1:'30px',2:'50px'}}
            }
        }
    )
}

__SYD.page1Socials = () =>{
    return __c(
        'div',
        {
            style:'width:100%;padding:10px 0;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap'
        },
        [
            __SYD.page1SocialBtn({contentSrc:'web' , link:location.href}),
            __SYD.page1SocialBtn({contentSrc:'tel' , link:""}),
            __SYD.page1SocialBtn({contentSrc:'x' , link:"https://x.com/moonpigmeme?s=21"})
        ]
    )
}

__SYD.page1SocialBtn = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style({method:'add',style:{backgroundImage:`url('./assets/${contentSrc}.png')`}}),
            class:'click'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    window.location = link
                }
            }
        }
    )
}
__SYD.freeText_def = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:22px;width:50%;min-width:fit-content;text-align:center'
        },
        [
            text
        ]
    )
}
__SYD.freeText_def_small = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:16px;width:100%;text-align:center'
        },
        [
            text
        ]
    )
}

__SYD.about_text_p2= () =>{
    return __c('p',{style:'font-size: 1.2em;line-height: 1.75rem;text-align:left;font-weight:800;width:100%;text-align:center;'},[
        `$MOON PIG isn’t just a meme coin—it’s a rocket-powered oinker destined for the cosmos! Saddle up, swine squad, we’re taking bacon to the moon! 🚀🌕`//,__c('span',{class:'rainbow__text'},[" $TEFE"])
    ])
}
