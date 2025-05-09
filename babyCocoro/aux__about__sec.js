import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3_aux = () =>{
    return __c(
        'div',
        {
            style:"display:flex;flex-direction:column;align-items:center;row-gap:20px;" + __sC._body_style({method:'use' , style:['background' , 'height' , 'width' , 'minHeight' , 'padding' , 'paddingTop' , 'marginTop']}), //+ __sC['txt_shade1'](),
            id:'about_aux'
        },
        [
            __c('h1',{style:`font-family:header;font-weight:900;font-size:${__p(['_p3_aux','__size'],'30px')};`+__sC['txt_shade2']()},['HOW TO BUY']),
            __c(
                "div",
                {
                    style:__sC._body_style([{
                        method:'add',style:{
                            height:'fit-content',
                            flexDirection:__p(['_p3_aux','__flex'],'row-reverse'),
                            justifyContent:'center',
                            alignItems:"center",
                            padding:'20px 10px',
                            minHeight:'unset',
                            marginTop:"unset"
                            // flexDirection:'row-reverse',
                            // transform:'unset'
                        }
                    } , {method:'remove' , style:['height' , 'minHeight' , 'padding' , 'paddingTop' , 'background']}])
                },
                [
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['_p3_aux','__size'],'30px') === '30px' ? '80vh' : '300px'};min-width:${__p(['_p3_aux','__size'],'30px') === '30px' ? '40%' : '100%'};background-image:url("./assets/about.png");background-size:contain;border-radius:15px;`,
                        },
                        [
                            
                        ],
                        {
                            genericStyle:['bg_cover'],
                        }
                    ),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:15px;perspective:800px;'
                        },
                        [
                            // __c('h1',{style:`padding:0 15px;width:100%;text-align:left;color:#FAFAFA;font-family:sunrise;font-weight:900;font-weight:100;font-size:${__p(['_p3_aux','__size'],'30px')}`+__sC['txt_shade2']()},['THE ORIGIN STORY']),
                            __c(
                                "p",
                                {
                                    style:"padding:15px;background:transparent;text-align:center;width:fit-content;",
                                    // class:"tab_text"
                                },
                                [
                                    __SYD.about_text_aux(),
                                    // __SYD.about_text_2(),
                                ]
                            ),
                            __SYD.page1Socials_large_icons()
                            
                        ]
                    )
                ]
            ),
        ],
        {
            createState:{
                stateName:'_p3_aux',
                state:{__size:'30px',__flex:'row-reverse',__font:{1:'30px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'25px',__flex:'column',__font:{1:'25px',2:'17px'}}}],
                defState:{__size:'30px',__flex:'row-reverse',__font:{1:'30px',2:'20px'}}
            }
        }
    )
}

__SYD.buyNowBtn = () =>{
    return __c('a',{href:'https://tools.smithii.io/launches-list/solana',target:'blank',style:`display:${__p(['navBar','__nav_d'],'flex')};align-items:center;justify-content:center;padding:15px 30px;text-decoration:none;`+__sC["txt_shade3"](),class:'btn_buy'},['CLAIM'],{genericStyle:['bg_fit']})
}


__SYD.page1Socials_large_icons = () =>{
    return __c(
        'div',
        {
            style:'width:100%;padding:10px 15px;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap;perspective:500px;'
        },
        [
            __SYD.buyNowBtn(),
            // __SYD.page1SocialBtn_large_icons({contentSrc:'sol'}),
            // __SYD.page1SocialBtn_large_icons({contentSrc:'bin'}),
        ]
    )
}

__SYD.about_text_aux = () =>{
    return __c('p',{style:`border-left:6px solid ;border-bottom:6px solid ;font-size:${__p(['_p3_aux' , '__font'],{2:'20px'})['2']};line-height: unset;max-width:500px;text-align:left;font-weight:100;padding:${__p(["_p3_aux" , "__flex"],"row-reverse") === "row-reverse" ? "50px" : "20px"};background:#fff;border-radius:60px;color:rgb(2, 43, 73);`},[
        __c("p" , {style:`margin-top:12px;`} , [
            `We’re thrilled to unveil the token distribution plan for Baby Cocoro—your ticket to chaos, rewards, and high-speed degen action on Ethereum!`
        ]),
        __c("p" , {style:`margin-top:12px;`} , [
            `Total Supply: 1,000,000,000 (1B) tokens`
        ]),
        __c("p" , {style:``} , [
            `🔥 Periodic burns will keep the fire alive and the supply lean.`
        ]),
        __c("li" , {style:`margin-top:12px;width:100%;text-align:left;font-size:17px;`} , ['65% Liquidity pool']),
        __c("li" , {style:`margin-top:5px;width:100%;text-align:left;font-size:17px;`} , ['10% Presale']),
        __c("li" , {style:`margin-top:5px;width:100%;text-align:left;font-size:17px;`} , ['10% Airdrop and community rewards ']),
        __c("li" , {style:`margin-top:5px;width:100%;text-align:left;font-size:17px;`} , ['3% Creator ']),
        __c("li" , {style:`margin-top:5px;width:100%;text-align:left;font-size:17px;`} , ['6% Development team']),
        __c("li" , {style:`margin-top:5px;width:100%;text-align:left;font-size:17px;`} , ['6% Strategic reserve']),
        __c("p" , {style:`margin-top:12px;`} , [
            `Let’s moon together!🐶🚀🌕`
        ]),
    ])
}


__SYD.about_text_2_aux = () =>{
    return __c('p',{style:`font-size:${__p(['_p3_aux' , '__font'],{2:'25px'})['2']};line-height: unset;max-width:500px;text-align:center;font-weight:100;margin-top:12px;`},[
        `Join us as we revolutionize the memecoin space, one laugh at a time, and prove that sometimes, the silliest ideas can lead to the greatest success. Together, let's make Big Mac wif Hat a symbol of fun, unity, in the world of crypto! 🍔🎩 `
    ])
}
