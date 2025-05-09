import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'transparent',
                    flexDirection:__p(['_p3','__flex'],'row'),
                    justifyContent:'flex-start',
                    padding:'20px 20px',
                    minHeight:'unset'
                    // transform:'unset'
                }
            }),
            id:'about'
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'3rem') === '3rem' ? '40%' : '100%'};background-image:url("./assets/about.png");background-size:contain;border-radius:15px;`
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
                    style:'width:100%;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;row-gap:30px;'
                },
                [
                    __c('h1',{class:'',style:`color:#000;font-family:sunrise;font-weight:900;font-size:${__p(['_p3','__size'],'3rem')}`},['BABY COCORO']),
                    __SYD.about_text()
                ]
            )
        ],
        {
            createState:{
                stateName:'_p3',
                state:{__size:'3rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'2rem',__flex:'column'}}],
                defState:{__size:'3rem',__flex:'row'}
            }
        }
    )
}

__SYD.about_text = () =>{
    return __c('p',{style:'color:#000;font-size: 1.2em;line-height: 1.75rem;max-width:500px;font-weight:500;',class:"ab_text"},[
        `Baby Cocoro isn’t here to play nice. It’s the unruly, turbo-charged spawn of the legendary Cocoro—engineered for absolute chaos on Ethereum’s wild frontier. We’re talkin’ lightning-fast trades, gas fees so low they practically vanish, and a savage reward system that rains down free Cocoro on real holders. Every degen move fuels the fire.`,
        __c("p" , {style:"margin-top:20px;"} , [" You ape, you earn. You trade, you grow. This ain’t your grandma’s memecoin—it’s pure blockchain anarchy with style."])
    ])
}
