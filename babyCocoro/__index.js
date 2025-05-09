import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v , manage_mediaQuery} from './sydneyLib/sydneyDom.js';

import './_body_p1.js';
// import './_body_p2.js';
import './p2_rich.js'
import './_body_p3.js';
import './_body_p4.js';
import './_body_p5.js';
import "./roadMap.js"
import "./aux__about__sec.js"

__sS([
    {
        nameTag:'container',
        style:{
            height:'100vh',
            width:'100vw',
            background:'url(./assets/container_bg.png) , linear-gradient(135deg, rgb(3, 109, 183), rgb(64, 168, 241))',
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            // backgroundImage:'',
            // backgroundImage:'url(./assets/mainBg.gif)',
            backgroundAttachment: 'fixed',
            overflowY:'scroll',
            position:'relative',
            // fontFamily:'"Aladin", system-ui',
            // fontFamily:'Mantis Rumble_PersonalUseOnly',
            // fontFamily:'tahoma , sans serif',
            // wordSpacing:'5px',
            fontFamily:'sunrise',
            overflowX:'hidden',
            color:'#ffffff',
            paddingTop:"50px"
        }
    },
    {
        nameTag:'navBar',
        style:{
            width:'calc(100% - 15px)',
            maxWidth:"900px",
            display:'flex',
            padding:'10px 15px',
            columnGap:'30px',
            position:'fixed',
            top:'5px',
            left:"50%",
            transform:"translateX(-50%)",
            zIndex:'999',
            background:'#fff',
            alignItems:'center',
            justifyContent:'space-between',
            minHeight:'70px',
            border:"2px solid #000"
        }
    },
    {
        nameTag:"txt_shade1",
        style:{
            color:"#fff",
            // textShadow:"0px 0px 2px #171717",
            lineHeight:"20px"
        }
    },
    {
        nameTag:"txt_shade2",
        style:{
            color:"#fff",
            textShadow:"3px 3px 1px #171717",
            letterSpacing:"2px"
        }
    },
    {
        nameTag:"txt_shade3",
        style:{
            color:"#fff",
            textShadow:"2px 2px 1px #171717"
        }
    }
])

__sS(
    {
        nameTag:'_social_style',
        style:{
            minHeight:'50px',
            minWidth:'50px',
            maxHeight:"50px",
            maxWidth:"50px",
            cursor:'pointer',
            // borderRadius:'10px',
            
        }
    }
)

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC.container()
        },
        [
            __SYD.navBar(),
            // __SYD._p1(),
            // __SYD._p2(),
            __SYD._p2(),
            __SYD._p3(),
            __SYD._p3_aux(),
            __SYD.roadMapPage(),
            __SYD._p5(),
            __c(
                'div',
                {
                    style:'height:fit-content;width:100%;padding:50px;background:#171717;display:flex;align-items:center;row-gap:10px;flex-direction:column;'+__sC['txt_shade3']()
                },
                [
                    __c("div" , {style:"height:fit-content;width:100%;padding:60px;display:flex;align-items:center;flex-direction:column;row-gap:60px;"},[
                        __c(
                            "h1",
                            {
                                style:"min-width:max-content;width:100%;text-align:center;font-weight:900;color:#fff;text-transform:uppercase;font-style:italic;font-family:sunrise;",
                                class:"footerText"
                            },
                            [
                                "baby cocoro"
                            ]
                        ),
                        // __c(
                        //     "h2",
                        //     {
                        //         style:`min-width:max-content;width:100%;text-align:center;font-weight:900;color:#fff;text-transform:uppercase;`,
                        //         class:"footerText2"
                        //     },
                        //     [
                        //         "CA: -------------------------------------"
                        //     ]
                        // ),
                        __c(
                            "div",
                            {
                                style:"display:flex;justify-content:center;column-gap:15px;row-gap:30px;height:fit-content;width:100%;flex-wrap:wrap;"
                            },
                            [
                                __c(
                                    "a",
                                    {
                                        style:"height:fit-content;width:fit-content;",
                                        href:"#"
                                    },
                                    [
                                        __c("div" , {style:"height:70px;min-width:70px;border-radius:50%;border:4px solid #000;background-image:url(./assets/frog.png);"},[],
                                            {
                                                genericStyle:["bg_cover"]
                                            })
                                    ]
                                ),
                                __c(
                                    "a",
                                    {
                                        style:"height:fit-content;width:fit-content;",
                                        href:"https://x.com/babybbycoco?s=21"
                                    },
                                    [
                                        __c("div" , {style:"height:70px;min-width:70px;border-radius:50%;border:4px solid #000;background-image:url(./assets/x.png);"},[],
                                            {
                                                genericStyle:["bg_cover"]
                                            })
                                    ]
                                ),
                                __c(
                                    "a",
                                    {
                                        style:"height:fit-content;width:fit-content;",
                                        href:"#"
                                    },
                                    [
                                        __c("div" , {style:"height:70px;min-width:70px;border-radius:50%;border:4px solid #000;background-image:url(./assets/basescan.png);"},[],
                                            {
                                                genericStyle:["bg_cover"]
                                            })
                                    ]
                                ),
                                __c(
                                    "a",
                                    {
                                        style:"height:fit-content;width:fit-content;",
                                        href:"#"
                                    },
                                    [
                                        __c("div" , {style:"height:70px;min-width:200px;border-radius:30px;border:4px solid #000;background-image:url(./assets/dex.png);background-color:#fff;"},[],
                                            {
                                                genericStyle:["bg_fit"]
                                            })
                                    ]
                                ),
                                __c(
                                    "a",
                                    {
                                        style:"height:fit-content;width:fit-content;",
                                        href:"#"
                                    },
                                    [
                                        __c("div" , {style:"height:70px;min-width:200px;border-radius:30px;border:4px solid #000;background-image:url(./assets/uniswap.png);background-color:#fff;"},[],
                                            {
                                                genericStyle:["bg_fit"]
                                            })
                                    ]
                                ),
                            ]
                        ),
                    ]),
                    __c('p',{style:'font-size: .9rem;font-family:sunrise;text-align:center;font-weight:900;color:#fff;width:100vw;word-spacing:12px;'},[
                        `© ${new Date().getFullYear()} All Right Reserved by  $Baby Cocoro `
                    ]),
                    __c(
                        "div",
                        {
                            style:"margin-top:10px;display:flex;column-gap:10px;justify-content:center;"
                        },
                        [
                            __SYD.page1SocialBtn({contentSrc:'tel' , link:"https://t.me/+DpxQBtNpqMI4NzY0"}),
                            __SYD.page1SocialBtn({contentSrc:'x' , link:"https://x.com/highmax204?s=21&t=qfSXdhkZzfcCwc1cZFrtqQ"}),
                            // __SYD.page1SocialBtn({contentSrc:'tik' , link:"#"})
                        ]
                    )
                ]
            )
        ],
        {
            genericStyle:['bg_cover']
        }
    )
}

__SYD.navBar = () =>{
    return __c(
        'div',
        {
            style:__sC.navBar({
                method:'add',
                style:{
                    height:__p(['navBar','_h'],'fit-content'),
                    // padding:`15px ${__p(['navBar','padd'],'20px')}`,
                    justifyContent:`${__p(['navBar','padd'],'20px') === '20px' ? 'space-around' : 'space-between'}`,
                    borderRadius:`${__p(['navBar','padd'],'20px') === '20px' ? '15px' : '15px'}`,
                    // backgroundImage:`url(./assets/nav_bg.png)`,
                    // backgroundPosition:'100% 100%'
                }
            })
        },
        [
            __c(
                "div",
                {
                    style:`display:flex;column-gap:5px;align-items:center;${__p(['navBar','__nav_d'],'flex') === 'flex' ? '' : 'position:static;left:0px;'};`
                },
                [
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['navBar','l_size'],'50px')};min-width:${__p(['navBar','l_size'],'50px')};border-radius:unset;background-image:url('./assets/mainLogo.png');border-radius:50%;background-color:transparent;`,
                        },[],{genericStyle:['bg_fit']}
                    ),
                    // __c('h1',{class:'',style:`color:#fff;font-family:header;font-size:${__p(['navBar','padd'],'20px') === '20px' ? "18px" : "14px"};`+__sC['txt_shade2']({method:"remove",style:['color']})},[' $BABY COCORO ']),
                ]
            ),
            __c(
                'div',
                {
                    style:`display:${__p(['navBar','__nav_d'],'flex')};width:fit-content;height:fit-content;justify-content:center;column-gap:50px;padding:5px;` + __sC['txt_shade1'](),
                },
                [
                    __SYD.nav_b_text('Home','_p2'),
                    __SYD.nav_b_text('About','_p3'),
                    __SYD.nav_b_text('Tokenomics','_p5'),
                    __SYD.nav_b_text('road map','roadMapPage'),
                ]
            ),
            __SYD.page1Socials(),
            __SYD.mobileMenu()
        ],
        {
            createState:{
                stateName:'navBar',
                state:{_h:'fit-content',l_size:'50px' , padd:'20px' , __nav_d:'flex'}
            },
            mediaQuery:{
                query:[
                    {size:'<500px',prop:{_h:'fit-content',l_size:'40px' , padd:'5px'}},
                    {size:'<800px',prop:{__nav_d:'none'}}
                ],
                defState:{_h:'fit-content',l_size:'50px',__nav_d:'flex',padd:'20px'}
            },
            genericStyle:['bg_cover']
        }
    )
}

__SYD.nav_b_text = (text,click) =>{
    return __c(
        'p',
        {
            style:'font-size:14px;font-weight:900;cursor:pointer;text-transform:uppercase;font-family:sunrise;transition:all .3s linear;color:#000;',
            // class:'btn_buy'
        },
        [
            text
        ],
        {
            events:{
                onclick:() =>{
                    switch(true)
                    {
                        case click === 'suntzutrx':
                            window.location = 'https://tools.smithii.io/launches-list/solana'
                        break;
                        default:
                            __v[click].scrollIntoView();
                            __v['mobileMenu'].blur();
                            
                    }
                },
                onmouseover:(e) =>{
                    e.target.style.color = '#ffe202'
                },
                onmouseout:(e) =>{
                    e.target.style.color = '#000'
                },
            }
        }
    )
}

__SYD.mobileMenu = () =>{
    return __c(
        'div',
        {
            style:`height:fit-content;width:fit-content;min-width:200px;padding:20px 10px;display:${__p(['mobileMenu','_d'],'none')};flex-direction:column;row-gap:20px;background:#ffffff;border:1px solid #000000;border-left:2px solid #000000;border-bottom:2px solid #000000;border-radius:15px;border-top-right-radius:unset;border-bottom-right-radius:unset;position:absolute;top:100%;right:0;opacity:${__p(['mobileMenu','_op'],'0')};transition:opacity .3s linear;box-shadow:-2px 2px 10px #333333b3;`,
            tabindex:'1',
            class:'mobile_menu'
        },
        [
            __SYD.nav_b_text('About','_p3'),
            __SYD.nav_b_text('Tokenomics','_p5'),
            __SYD.nav_b_text('Road Map','roadMapPage'),
            // __SYD.nav_b_text('How to Buy','_p4'),
            __SYD.nav_b_text('Buy Now','suntzutrx'),
            // __SYD.buyNowBtn()

        ],
        {
            createState:{
                stateName:'mobileMenu',
                state:{_d:'none',_op:'0'}
            },
            events:{
                onblur:() =>{
                    const mobileMenu = __g('mobileMenu');
                    console.log('hey')
                    mobileMenu._op = '0'
                    let _t2 = setTimeout(() =>{
                        const mobileMenu = __g('mobileMenu');
                        mobileMenu._d = 'none';
                        __u('mobileMenu',{type:'a',value:mobileMenu})
                        clearTimeout(_t2)
                    },300)
                    __u('mobileMenu',{type:'a',value:mobileMenu})
                }
            }
        }
    )
}


__SYD.page1Socials = () =>{
    return __c(
        'div',
        {
            style:`width:fit-content;padding:10px 0;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap;${__p(['navBar','__nav_d'],'flex') === 'flex' ? "" : "position:static;right:0px;align-self:flex-end"};perspective:800px;`
        },
        [
            // __SYD.page1SocialBtn({contentSrc:'mm'}),
            __SYD.page1SocialBtn({contentSrc:'tel' , link:"https://t.me/+DpxQBtNpqMI4NzY0"}),
            __SYD.page1SocialBtn({contentSrc:'x' , link:"https://x.com/highmax204?s=21&t=qfSXdhkZzfcCwc1cZFrtqQ"}),
            __SYD.page1SocialBtn({contentSrc:'sol' , link:"https://dexscreener.com/solana/fjp2xcly5uncrtmnyhdqhzrcjnx2e2yjsm3nhbamn6uy"}),
                        __c(
                'div',
                {
                    style:`position:static;right:5px;height:${__p(["navBar" , "l_size"] , "50px") === "50px" ? "50px" : "40px"};width:${__p(["navBar" , "l_size"] , "50px") === "50px" ? "50px" : "40px"};background-image:url('./assets/menu.png');display:${__p(['navBar','__nav_d'],'flex') === 'flex' ? 'none' : 'block'};`,class:' menuRotate'
                },
                [

                ],
                {
                    events:{
                        onclick:() =>{
                            const mobileMenu = __g('mobileMenu');
                            // console.log(__v['mobileMenu'])
                            switch(mobileMenu._d)
                            {
                                case 'none':
                                    mobileMenu._d = 'flex';
                                    let _t1 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._op = '1';
                                        __u('mobileMenu',{type:'a',value:mobileMenu});
                                        clearTimeout(_t1)
                                    },100);
                                break;
                                case 'flex':
                                    mobileMenu._op = '0'
                                    let _t2 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._d = 'none';
                                        __u('mobileMenu',{type:'a',value:mobileMenu})
                                        clearTimeout(_t2)
                                    },300)
                            }
                            __u('mobileMenu',{type:'a',value:mobileMenu});
                            __v['mobileMenu'].focus();
                        }
                    },
                    genericStyle:['bg_fit']
                }
            ),
        ]
    )
}

__SYD.page1SocialBtn = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style({method:'add',style:{backgroundImage:`url('./assets/${contentSrc}.png')`}}) + `min-height:${__p(["navBar" , "l_size"] , "50px") === "50px" ? "50px" : "40px"}; min-width:${__p(["navBar" , "l_size"] , "50px") === "50px" ? "50px" : "40px"};max-height:${__p(["navBar" , "l_size"] , "50px") === "50px" ? "50px" : "40px"};max-width:${__p(["navBar" , "l_size"] , "50px") === "50px" ? "50px" : "40px"};`,
            class:'btn_buy__'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    // window.location = link
                    window.open(link , "_blank")
                }
            }
        }
    )
}

__m(__SYD.container())

addEventListener('DOMContentLoaded' , e =>{
    manage_mediaQuery(window.innerWidth)
})
