import logo from './logo1.png'
import search_icon from './search.png'
import header_pic from './xamarin.jpg'
import android from './play_store.png'
import ios from './App_store.png'
import facebook_icon from './facebook.png'
import twitter_icon from './twitter.png'
import instagram_icon from './insta.png'
import cross_icon from './cross.png'
import zesta from './person.jpg'
import profile from './account.png'
import bag from './bag.png'
import logout_icon from "./logout.png"


import cause_1 from './natural-disaster.png'
import cause_2 from './children.png'
import cause_3 from './social_justice.png'
import cause_4 from './edu_cation.png'
import cause_5 from './environment.png'
import cause_6 from './health.png'
import cause_7 from './religion.png'


import charity_1 from './budalangi.jpg'
import charity_2 from './machakos.jpg'
import charity_3 from './mandera.jpg'
import charity_4 from './lodwar.jpg'
import charity_5 from './spill.jpg'
import charity_6 from './lagadera.jpg'
import charity_7 from './diani.jpg'
import charity_8 from './kibra.jpg'
import charity_9 from './lari.jpg'
import charity_10 from './books.jpg'
import charity_11 from './protest.jpg'
import charity_12 from './daadab.jpg'
import charity_13 from './saint.jpg'
import charity_14 from './ocean.jpg'
import charity_15 from './micheal.jpg'
import charity_16 from './ibrahim.jpg'
import charity_17 from './church.jpg'
import charity_18 from './mosque.jpg'





export const assets = {
    logo,
    search_icon,
    header_pic,
    facebook_icon,
    twitter_icon,
    instagram_icon,
    android,
    ios,
    cross_icon,
    zesta,
    profile,
    bag,
    logout_icon
}

export const cause_list = [
    {
        cause_name:"Natural Disaster",
        cause_image:cause_1
    },
    {
        cause_name:"Children",
        cause_image:cause_2
    },
    {
        cause_name:"Social Justice",
        cause_image:cause_3
    },
    {
      cause_name:"Education", 
      cause_image:cause_4 
    },
    {
        cause_name:"Environment",
        cause_image:cause_5
    },
    {
        cause_name:"Health",
        cause_image:cause_6
    },
    {
        cause_name:"Religion",
        cause_image:cause_7
    }
]

export const charity_list =[
    {
        _id:"1",
        name:"Budalangi floods",
        image: charity_1,
        description:"Help donate for Budalangi Floods victims by providing,clothes,Medicine and daily needs.",
        category:"Natural Disaster",
        goalAmount:"10000"
        
        
        
    },
    {
        _id:"2",
        name:"Machakos floods",
        image: charity_2,
        description:"Help donate for Machakos Floods victims by providing,clothes,Medicine and daily needs",
        category:"Natural Disaster",
        goalAmount:"100000"

    },
    {
        _id:"3",
        name:" Drought in Mandera",
        image: charity_3,
        description:"Help donate for Drought victims in Mandera by providing,clothes,Medicine and daily needs",
        category:"Natural Disaster",
        goalAmount:"30000"
    },
    {
        _id:"4",
        name:"Famine in lodwar",
        image: charity_4,
        description:"Help donate for famine victims in Lodwar by providing,clothes,Medicine and daily needs",
        category:"Natural Disaster",
        goalAmount:"500000"
    },
    {
        _id:"5",
        name:"Oil spill victims",
        image: charity_5,
        description:"Help donate for people affected by Oil spillage victims by providing,clothes,Medicine and daily needs",
        category:"Natural Disaster",
         goalAmount:"12000"
    },
    {
        _id:"6",
        name:"Classroom building lagadera",
        image: charity_6,
        description:"Campaign to build a new class structure to accomodate the large school population",
        category:"Children",
         goalAmount:"108000"
    },
    {
        _id:"7",
        name:"sanitary pads Diani",
        image: charity_7,
        description:"Campaign to provide girls in Diani with sanitary towels",
        category:"Children",
         goalAmount:"105000"
    },
    {
        _id:"8",
        name:"Kibra class construction",
        image: charity_8,
        description:"Campaign to build a new class structure to accomodate the large school population",
        category:"Children",
         goalAmount:"10300"
    },
    {
        _id:"9",
        name:"Playground renovation lari",
        image: charity_9,
        description:"Campaign to renovate the childrens plauground that was destroyed by the Floods ",
        category:"Children",
         goalAmount:"70000"
    },
    {
        _id:"10",
        name:"Books buying",
        image: charity_10,
        description:"Campaign to Provide quality Books for children in need of proper education for their development",
        category:"Children",
        goalAmount:"104000"

    },
    {
        _id:"11",
        name:"Anti-Government Protest",
        image: charity_11,
        description:"Campaign to Provide medical help to those injured during the Anti_government protest",
        category:"Social Justice",
         goalAmount:"900000"
    },
    {
        _id:"12",
        name:"School construction Daadab",
        image: charity_12,
        description:"Campaign to build a new school structure to provide kids with education from the refugee camp",
        category:"Education",
         goalAmount:"20000"

    },
    {
        _id:"13",
        name:"St.peters Dormitory Renovations",
        image: charity_13,
        description:" Campaign to build a new domitory wing to help decongest the existing domitories",
        category:"Education",
         goalAmount:"10000"
    },
    {
        _id:"14",
        name:" Ocean Conservation",
        image: charity_14,
        description:"Campaign to erect dustbins along the beach to prevent polution",
        category:"Environment",
         goalAmount:"10000"
    },
    {
        _id:"15",
        name:"Micheal Cancer treatment",
        description:"Campaign to help Micheal cater for his medical bills.",
        image: charity_15,
        category:"Health",
        goalAmount:"10000"
    },
    {
        _id:"16",
        name:"Ibrahim Lupus related treatment",
        image: charity_16,
        description:"Campaign to help Ibrahim cater for his medical bills.",
        category:"Health",
         goalAmount:"10000"
    },
    {
        _id:"17",
        name:"AIC Bus buying ",
        image: charity_17,
        description:"Campaign to help AIC church buy a bus.",
        category:"Religion",
         goalAmount:"1000000"
    },
    {
        _id:"18",
        name:"Kingorani mosque contruction ",
        image: charity_18,
        description:"Campaign to help withe the contruction of a mosque at Kingorani.",
        category:"Religion",
        goalAmount:"1000000"
    },
   
]