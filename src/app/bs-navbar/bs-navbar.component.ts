import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  categories:any[];
  productCategories: any= {
    "enableNavCache": false,
    "navData": {
      "electronics": {
        "title": "Electronics",
        "url": "#",
        "importantLinks": [],
        "show" : false,
        "tabs": [
          {
            "title": "Categories",
            "columns": [
              [
                {
                  "title": "Mobiles",
                  "url": "/mobile-phones-store",
                  "type": "heading"
                },
                {
                  "title": "Samsung",
                  "url": "/samsung-mobile-store"
                },
                {
                  "title": "Lenovo",
                  "url": "/lenovo-mobile-phones-store"
                },
                {
                  "title": "Mi",
                  "url": "/mobiles/mi~brand/pr?sid=tyy,4io"
                },
                {
                  "title": "Motorola",
                  "url": "/motorola-mobile-phones-store"
                },
                {
                  "title": "OPPO",
                  "url": "/oppo-mobile-phones-store"
                },
                {
                  "title": "Apple",
                  "url": "/apple-products-store"
                },
                {
                  "title": "Vivo",
                  "url": "/vivo-mobile-phones-store"
                },
                {
                  "title": "Honor",
                  "url": "/search?p[]=facets.brand%255B%255D%3DHonor&sid=tyy%2F4io&otracker=CLP_filters"
                },
                {
                  "title": "Panasonic",
                  "url": "/mobiles/pr?count=40&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DPanasonic&sid=tyy%2F4io"
                },
                {
                  "title": "FK Exclusive Mobiles",
                  "url": "/offers-list/onlyonflipkart?screen=dynamic&amp;pk=themeViews%3DOnlyonFlipkart%3ADesktopView~widgetType%3DdealCard",
                  "type": "heading"
                },
                {
                  "title": "New and Popular Models",
                  "url": "/offers-list/new-launches?screen=dynamic&amp;pk=themeViews%3DNewLaunches%3ADesktopView~widgetType%3DdealCard",
                  "type": "heading"
                },
                {
                  "title": "Mi MIX 2",
                  "url": "/mi-mix-2-69236038-store"
                },
                {
                  "title": "Google Pixel 2",
                  "url": "/pixel-2-1514-0309-store"
                },
                {
                  "title": "Honor 9i",
                  "url": "/why-buy-honor-9i-80063883-store"
                }
              ],
              [
                {
                  "title": "Mobile Accessories",
                  "url": "/mobile-accessories/pr?sid=tyy,4mr",
                  "type": "heading"
                },
                {
                  "title": "Mobile Cases",
                  "url": "/mobile-accessories/cases-and-covers/pr?sid=tyy,4mr,q2u"
                },
                {
                  "title": "Headphones &amp; Headsets",
                  "url": "/headphones-store"
                },
                {
                  "title": "Power Banks",
                  "url": "/power-banks-store"
                },
                {
                  "title": "Screenguards",
                  "url": "/mobile-accessories/screen-guards/pr?sid=tyy,4mr,lrv"
                },
                {
                  "title": "Memory Cards",
                  "url": "/mobile-accessories/memory-cards-readers/memory-cards/pr?sid=tyy,4mr,zzf,7y7"
                },
                {
                  "title": "Smart Headphones",
                  "url": "/wearable-smart-devices/smart-headphones/pr?sid=ajy,vam"
                },
                {
                  "title": "Mobile Cables",
                  "url": "/mobile-accessories/cables/pr?sid=tyy,4mr,3nu"
                },
                {
                  "title": "Chargers",
                  "url": "/mobile-accessories/chargers/pr?sid=tyy,4mr,tp2"
                },
                {
                  "title": "Selfie Sticks",
                  "url": "/mobile-accessories/selfie-sticks/pr?sid=tyy,4mr,nkm"
                },
                {
                  "title": "Smart Wearable Tech",
                  "url": "/smart-wearables-store",
                  "type": "heading"
                },
                {
                  "title": "Smart Watches",
                  "url": "/smartwatches-store"
                },
                {
                  "title": "Smart Glasses (VR)",
                  "url": "/wearable-smart-devices/smart-glasses/pr?sid=ajy%2Ctcy"
                },
                {
                  "title": "Smart Bands",
                  "url": "/wearable-smart-devices/smart-bands/pr?sid=ajy%2Cq7p"
                }
              ],
              [
                {
                  "title": "Laptops",
                  "url": "/laptops-store",
                  "type": "heading"
                },
                {
                  "title": "Gaming Laptops",
                  "url": "/gaming-laptops-store"
                },
                {
                  "title": "Desktop PCs",
                  "url": "/desktop-pc-store",
                  "type": "heading"
                },
                {
                  "title": "Gaming &amp; Accessories",
                  "url": "/gaming-store",
                  "type": "heading"
                },
                {
                  "title": "Computer Accessories",
                  "url": "/computer-accessories-store",
                  "type": "heading"
                },
                {
                  "title": "External Hard Disks",
                  "url": "/computers/storage/external-hard-disks"
                },
                {
                  "title": "Pendrives",
                  "url": "/computers/storage/pen-drives/pr?sid=6bo,jdy,uar"
                },
                {
                  "title": "Laptop Skins & Decals",
                  "url": "/laptop-accessories/laptop-skins-decals/pr?sid=6bo,ai3,zvm"
                },
                {
                  "title": "Laptop Bags",
                  "url": "/laptop-accessories/laptop-bags/pr?sid=6bo%2Cai3%2Cqq9"
                },
                {
                  "title": "Mouse",
                  "url": "/laptop-accessories/mouse/pr?sid=6bo,ai3,2ay"
                },
                {
                  "title": "Computer Peripherals",
                  "url": "/peripherals-store",
                  "type": "heading"
                },
                {
                  "title": "Printers &amp; Ink Cartridges",
                  "url": "/printer-inks-store"
                },
                {
                  "title": "Monitors",
                  "url": "/monitors-store"
                },
                {
                  "title": "Tablets",
                  "url": "/tablets-store",
                  "type": "heading"
                },
                {
                  "title": "Apple iPads",
                  "url": "/tablets/~apple-ipads/pr?sid=tyy,hry"
                }
              ],
              [
                {
                  "title": "Televisions",
                  "url": "/television-store",
                  "type": "heading"
                },
                {
                  "title": "Home Entertainment",
                  "url": "/home-entertainment-store",
                  "type": "heading"
                },
                {
                  "title": "Home Audio Speakers",
                  "url": "/audio-video/speakers/pr?count=40&otracker=categorytree&p%5B%5D=facets.type%255B%255D%3DHome%2BAudio%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DLaptop%252FDesktop%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DSoundbar&sid=0pm%2F0o7"
                },
                {
                  "title": "Home Theatres",
                  "url": "/home-entertainment/video-players-accessories/home-theaters/pr?sid=ckf%2Csee%2Cmi3"
                },
                {
                  "title": "Bluetooth Speakers",
                  "url": "/bluetooth-speakers-store"
                },
                {
                  "title": "DTH Set Top Box",
                  "url": "/home-entertainment/video-players-accessories/dth/~dish-tv/pr?sid=ckf,see,9wn"
                },
                {
                  "title": "Smart Home Automation",
                  "url": "/smart-home-automation-store",
                  "type": "heading"
                },
                {
                  "title": "Camera",
                  "url": "/cameras",
                  "type": "heading"
                },
                {
                  "title": "DSLR",
                  "url": "/cameras/dslr~type/pr?sid=jek%2Cp31"
                },
                {
                  "title": "Point &amp; Shoot",
                  "url": "/cameras/point-shoot~type/pr?sid=jek%2Cp31"
                },
                {
                  "title": "Sports and Lifestyle",
                  "url": "/cameras/pr?p%5B%5D=facets.type%255B%255D%3DCamcorder&amp;p%5B%5D=facets.type%255B%255D%3DSports%2B%2526%2BAction&amp;p%5B%5D=facets.type%255B%255D%3DInstant%2BCamera&amp;sid=jek%2Cp31&amp;filterNone=true"
                },
                {
                  "title": "Camera Accessories",
                  "url": "/cameras/accessories",
                  "type": "heading"
                },
                {
                  "title": "Memory Cards",
                  "url": "/camera-accessories/memory-cards/pr?sid=jek%2C6l2%2C7y6"
                },
                {
                  "title": "Network Components",
                  "url": "/network-components-store",
                  "type": "heading"
                },
                {
                  "title": "Routers",
                  "url": "/computers/network-components/routers/pr?sid=6bo%2F70k%2F2a2"
                }
              ],
              [
                {
                  "title": "Featured",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Laptops on Buyback Guarantee",
                  "url": "/laptops/~buyback-guarantee-on-laptops-/pr?sid=6bo%2Cb5g"
                },
                {
                  "title": "Flipkart SmartBuy",
                  "url": "/flipkart-smartbuy-store"
                },
                {
                  "title": "Li-Polymer Power Banks",
                  "url": "/lithium-polymer-power-banks-store"
                },
                {
                  "title": "Sony PS4 Pro &amp; Slim",
                  "url": "/games/~sony-play-station/pr?facets.availability=Exclude%20Out%20of%20Stock&amp;sid=4rr%2Ctg9&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;facets.availability[]=Exclude+Out+of+Stock"
                },
                {
                  "title": "Apple Products",
                  "url": "/apple-products-store"
                },
                {
                  "title": "Microsoft Store",
                  "url": "/microsoft-store"
                },
                {
                  "title": "Lenovo Phab Series",
                  "url": "/mobiles-accessories/~lenovo-phab-series1/pr?sid=tyy"
                },
                {
                  "title": "Be Smart. Buy Smartphones on Flipkart",
                  "url": "/buy-smartphones-only-on-flipkart-store"
                },
                {
                  "title": "JBL Speakers",
                  "url": "/all/audio-video/jbl~brand/pr?otracker=categorytree&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DJBL&amp;sid=all%2F0pm"
                },
                {
                  "title": "Smartphones On Buyback Guarantee",
                  "url": "/buyback-guarantee-store"
                }
              ]
            ]
          }
        ]
      },
      "appliances": {
        "title": "Appliances",
        "url": "#",
        "importantLinks": [],
        "show" : false,
        "tabs": [
          {
            "title": "Categories",
            "columns": [
              [
                {
                  "title": "Televisions",
                  "url": "/television-store",
                  "type": "heading"
                },
                {
                  "title": "TVs by screen size",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "24 and below",
                  "url": "/search?count=40&otracker=CLP_filters&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.screen_size%255B%255D%3D24%2B-%2B31&p%5B%5D=facets.screen_size%255B%255D%3DBelow%2B24&sid=ckf%2Fczl"
                },
                {
                  "title": "32",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.screen_size%255B%255D%3D32&amp;sid=ckf%2Fczl"
                },
                {
                  "title": "39-43",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.screen_size%255B%255D%3D39%2B-%2B43&amp;sid=ckf%2Fczl"
                },
                {
                  "title": "48 &amp; Above",
                  "url": "/search?count=40&amp;otracker=CLP_filters&amp;p%5B%5D=facets.screen_size%255B%255D%3D48%2B-%2B50&amp;p%5B%5D=facets.screen_size%255B%255D%3D55%2B%2526%2BAbove&amp;sid=ckf%2Fczl"
                },
                {
                  "title": "Smart &amp; Ultra HD",
                  "url": "/search?count=40&otracker=CLP_filters&p%5B%5D=facets.features%255B%255D%3DSmart%2BTV&p%5B%5D=facets.resolution%255B%255D%3DUltra%2BHD%2B%25284K%2529&sid=ckf%2Fczl",
                  "type": "heading"
                },
                {
                  "title": "TVs by Brand",
                  "url": "/search?count=40&amp;otracker=CLP_filters&amp;p%5B%5D=facets.features%255B%255D%3DSmart%2BTV&amp;p%5B%5D=facets.resolution%255B%255D%3DUltra%2BHD%2B%25284K%2529&amp;sid=ckf%2Fczl",
                  "type": "heading"
                },
                {
                  "title": "Samsung",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.brand%255B%255D%3DSamsung&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;sid=ckf%2Fczl"
                },
                {
                  "title": "LG",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DLG&amp;sid=ckf%2Fczl"
                },
                {
                  "title": "VU",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DVu&amp;sid=ckf%2Fczl"
                },
                {
                  "title": "Panasonic",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DPanasonic&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;sid=ckf%2Fczl&amp;otracker=nmenu_sub_Appliances_0_Panasonic%20TVs"
                },
                {
                  "title": "Sony",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DSony&amp;sid=ckf%2Fczl"
                }
              ],
              [
                {
                  "title": "Washing Machine",
                  "url": "/home-kitchen/home-appliances/washing-machines",
                  "type": "heading"
                },
                {
                  "title": "Fully Automatic Front Load",
                  "url": "/home-kitchen/home-appliances/washing-machines/fully-automatic-front-load~function/pr?sid=j9e%2Cabm%2C8qx"
                },
                {
                  "title": "Semi Automatic Top Load",
                  "url": "/home-kitchen/home-appliances/washing-machines/semi-automatic-top-load~function/pr?sid=j9e%2Cabm%2C8qx"
                },
                {
                  "title": "Fully Automatic Top Load",
                  "url": "/home-kitchen/home-appliances/washing-machines/fully-automatic-top-load~function/pr?sid=j9e%2Cabm%2C8qx"
                },
                {
                  "title": "Refrigerators",
                  "url": "/home-kitchen/home-appliances/refrigerators",
                  "type": "heading"
                },
                {
                  "title": "Single Door",
                  "url": "/home-kitchen/home-appliances/refrigerators/single-door~type/pr?sid=j9e%2Cabm%2Chzg"
                },
                {
                  "title": "Double Door",
                  "url": "/home-kitchen/home-appliances/refrigerators/double-door~type/pr?sid=j9e%2Cabm%2Chzg"
                },
                {
                  "title": "Triple door",
                  "url": "/home-kitchen/home-appliances/refrigerators/triple-door~type/pr?sid=j9e,abm,hzg"
                },
                {
                  "title": "Side by Side",
                  "url": "/home-kitchen/home-appliances/refrigerators/pr?otracker=categorytree&amp;p%5B%5D=facets.type%255B%255D%3DSide%2Bby%2BSide&amp;sid=j9e%2Fabm%2Fhzg"
                },
                {
                  "title": "Air Conditioners",
                  "url": "/air-conditioners-store",
                  "type": "heading"
                },
                {
                  "title": "Split ACs",
                  "url": "/home-kitchen/home-appliances/air-conditioners/split~type/pr?sid=j9e,abm,c54"
                },
                {
                  "title": "Window ACs",
                  "url": "/home-kitchen/home-appliances/air-conditioners/window~type/pr?sid=j9e%2Cabm%2Cc54"
                },
                {
                  "title": "Geysers",
                  "url": "/home-kitchen/home-appliances/water-geysers/pr?sid=j9e%2Cabm%2Cbfm&amp;filterNone=true&amp;q=geysers",
                  "type": "heading"
                }
              ],
              [
                {
                  "title": "Kitchen Appliances",
                  "url": "/kitchen-appliances-store?otracker=nmenu_sub_Appliances_0_Kitchen%20Appliances",
                  "type": "heading"
                },
                {
                  "title": "Microwave Ovens",
                  "url": "/home-kitchen/kitchen-appliances/microwave-ovens?otracker=nmenu_sub_Appliances_0_Microwave%20Ovens"
                },
                {
                  "title": "Oven Toaster Grills",
                  "url": "/oven-toaster-grills/pr?sid=j9e%2Cm38%2Cvr5&otracker=product_breadCrumbs_Oven%20Toaster%20Grills&otracker=nmenu_sub_Appliances_0_Oven%20Toaster%20Grills"
                },
                {
                  "title": "Mixer/Juicer/Grinder",
                  "url": "/mixerjuicergrinders/pr?sid=j9e%2Cm38%2C7ek&otracker=nmenu_sub_Appliances_0_Mixer%2FJuicer%2FGrinder"
                },
                {
                  "title": "Electric Kettle",
                  "url": "/electric-jugheatertravel-kettles/pr?sid=j9e%2Cm38%2Cxrv&otracker=nmenu_sub_Appliances_0_Electric%20Kettle"
                },
                {
                  "title": "Induction Cooktops",
                  "url": "/induction-cooktops/pr?sid=j9e%2Cm38%2C575&otracker=nmenu_sub_Appliances_0_Induction%20Cooktops"
                },
                {
                  "title": "Hand Blenders",
                  "url": "/hand-blenders/pr?sid=j9e%2Cm38%2Cu7m&otracker=nmenu_sub_Appliances_0_Hand%20Blender"
                },
                {
                  "title": "Sandwich Makers",
                  "url": "/sandwich-makers/pr?sid=j9e%2Cm38%2C1vj&otracker=nmenu_sub_Appliances_0_Sandwich%20Makers"
                },
                {
                  "title": "Chimneys",
                  "url": "/home-kitchen/kitchen-appliances/chimney/pr?sid=j9e,m38,tgz&otracker=categorytree&otracker=nmenu_sub_Appliances_0_Chimneys"
                },
                {
                  "title": "Electric Cookers",
                  "url": "/home-kitchen/kitchen-appliances/electric-cookers/pr?sid=j9e,m38,9m9&otracker=nmenu_sub_Appliances_0_Electric%20Cookers"
                },
                {
                  "title": "Wet Grinders",
                  "url": "/home-kitchen/kitchen-appliances/wet-grinders/pr?sid=j9e,m38,htd&otracker=categorytree"
                },
                {
                  "title": "Food Processors",
                  "url": "/food-processors/pr?sid=j9e%2Cm38%2Crj3&otracker=nmenu_sub_Appliances_0_Food%20Processors"
                },
                {
                  "title": "Coffee Makers",
                  "url": "/home-kitchen/kitchen-appliances/coffee-makers/pr?sid=j9e,m38,wqo&otracker=nmenu_sub_Appliances_0_Coffee%20Makers"
                },
                {
                  "title": "Dishwashers",
                  "url": "/dishwasher-store?otracker=nmenu_sub_Appliances_0_Dishwashers"
                }
              ],
              [
                {
                  "title": "Small Home Appliances",
                  "url": "/home-appliance-store?otracker=nmenu_sub_Appliances_0_Small%20Home%20Appliances",
                  "type": "heading"
                },
                {
                  "title": "Irons",
                  "url": "/iron/pr?sid=j9e%2Cabm%2Ca0u&otracker=nmenu_sub_Appliances_0_Irons&otracker=nmenu_sub_Appliances_0_Irons"
                },
                {
                  "title": "Water Geysers",
                  "url": "/water-geysers/pr?sid=j9e%2Cabm%2Cbfm&otracker=categorytree&otracker=nmenu_sub_Appliances_0_Water%20Geysers"
                },
                {
                  "title": "Room Heaters",
                  "url": "/home-kitchen/home-appliances/room-heaters/pr?sid=j9e,abm,xie&otracker=categorytree"
                },
                {
                  "title": "Immersion Rods",
                  "url": "/home-kitchen/home-appliances/immersion-rods/pr?sid=j9e,abm,rqo&otracker=categorytree"
                },
                {
                  "title": "Water Purifiers",
                  "url": "/water-purifiers/pr?sid=j9e%2Cabm%2Ci45&otracker=nmenu_sub_Appliances_0_Water%20Purifiers"
                },
                {
                  "title": "Sewing Machines",
                  "url": "/home-kitchen/home-appliances/sewing-machines/pr?sid=j9e,abm,0zg&otracker=categorytree"
                },
                {
                  "title": "Fans",
                  "url": "/home-kitchen/home-appliances/fans/pr?sid=j9e,abm,lbz&otracker=categorytree"
                },
                {
                  "title": "Inverters",
                  "url": "/home-kitchen/home-appliances/inverters/pr?sid=j9e,abm,7no&otracker=categorytree"
                },
                {
                  "title": "Vacuum Cleaners",
                  "url": "/vacuum-cleaners/pr?sid=j9e%2Cabm%2Cul2&otracker=nmenu_sub_Appliances_0_Vacuum%20Cleaners&otracker=nmenu_sub_Appliances_0_Vacuum%20Cleaners"
                },
                {
                  "title": "Landline Phones",
                  "url": "/landline-phones/pr?sid=j9e%2Cabm%2Cn0f&otracker=nmenu_sub_Appliances_0_Landline%20Phones&otracker=nmenu_sub_Appliances_0_Landline%20Phones"
                },
                {
                  "title": "Air Coolers",
                  "url": "/home-kitchen/home-appliances/air-coolers/pr?sid=j9e,abm,52j&otracker=categorytree"
                },
                {
                  "title": "Air Purifiers",
                  "url": "/air-purifiers-store?otracker=nmenu_sub_Appliances_0_Air%20Purifiers"
                }
              ],
              [
                {
                  "title": "Buying Guides",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Televisions",
                  "url": "/buying-guide/tvs?sid=ckf,czl"
                },
                {
                  "title": "Washing Machines",
                  "url": "/buying-guide/washing-machines-dryers?sid=j9e,abm,8qx"
                },
                {
                  "title": "Refrigerators",
                  "url": "/buying-guide/refrigerators?sid=j9e,abm,hzg"
                },
                {
                  "title": "Air Conditioners",
                  "url": "/buying-guide/air-conditioners?sid=j9e,abm,c54"
                },
                {
                  "title": "Water Purifiers",
                  "url": "/buying-guide/water-purifiers?sid=j9e,abm,i45"
                },
                {
                  "title": "Air Purifiers",
                  "url": "/buying-guide/air-purifiers?sid=j9e,abm,3o4"
                },
                {
                  "title": "Featured",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Sanyo TVs Exclusive",
                  "url": "/televisions/sanyo~brand/pr?sid=ckf,czl"
                },
                {
                  "title": "Micromax TVs",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DMicromax&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;sid=ckf%2Fczl"
                },
                {
                  "title": "CloudWalker TVs",
                  "url": "/cloud-walker-store"
                },
                {
                  "title": "Onida TVs",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DOnida&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;sid=ckf%2Fczl"
                },
                {
                  "title": "Kodak TVs",
                  "url": "/search?otracker=CLP_filters&amp;p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.brand%255B%255D%3DKodak&amp;p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&amp;sid=ckf%2Fczl"
                },
                {
                  "title": "IFB Washing Machines",
                  "url": "/home-kitchen/home-appliances/washing-machines/ifb~brand/pr?sid=j9e,abm,8qx"
                }
              ]
            ]
          }
        ]
      },
      "men": {
        "title": "Men",
        "url": "#",
        "importantLinks": [],
        "show" : false,
        "tabs": [
          {
            "title": "Categories",
            "columns": [
              [
                {
                  "title": "Footwear",
                  "url": "/mens-footwear/pr?sid=osp,cil",
                  "type": "heading"
                },
                {
                  "title": "Sports Shoes",
                  "url": "/mens-footwear/sports-shoes/pr?sid=osp,cil,1cu"
                },
                {
                  "title": "Casual Shoes",
                  "url": "/mens-footwear/casual-shoes/pr?sid=osp,cil,e1f"
                },
                {
                  "title": "Formal Shoes",
                  "url": "/mens-footwear/formal-shoes/pr?sid=osp,cil,ssb"
                },
                {
                  "title": "Sandals &amp; Floaters",
                  "url": "/mens-footwear/sandals-floaters/pr?sid=osp,cil,e83"
                },
                {
                  "title": "Flip- Flops",
                  "url": "/mens-footwear/slippers-flip-flops/pr?sid=osp,cil,e1r"
                },
                {
                  "title": "Loafers",
                  "url": "/mens-footwear/casual-shoes/loafers~type/pr?sid=osp%2Ccil%2Ce1f"
                },
                {
                  "title": "Boots",
                  "url": "/mens-footwear/casual-shoes/boots~type/pr?sid=osp%2Ccil%2Ce1f"
                },
                {
                  "title": "Running Shoes",
                  "url": "/mens-footwear/sports-shoes/running-shoes~type/pr?sid=osp,cil,1cu"
                },
                {
                  "title": "Sneakers",
                  "url": "/mens-footwear/casual-shoes/sneakers~type/pr?sid=osp%2Ccil%2Ce1f"
                },
                {
                  "title": "Men's Grooming",
                  "url": "/mens-grooming-store",
                  "type": "heading"
                },
                {
                  "title": "Deodorants",
                  "url": "/beauty-and-personal-care/fragrances/deodorants/pr?sid=t06,r3o,347"
                },
                {
                  "title": "Perfumes",
                  "url": "/beauty-and-personal-care/fragrances/perfumes/pr?otracker=categorytree&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;sid=t06%2Fr3o%2Faa1"
                },
                {
                  "title": "Beard Care &amp; Grooming",
                  "url": "/beauty-and-personal-care/mens-grooming/pr?count=40&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DBeardo&p%5B%5D=facets.brand%255B%255D%3DThe%2BMan%2BCompany&p%5B%5D=facets.brand%255B%255D%3DAlpha%2BMale%2Bgrooming&p%5B%5D=facets.brand%255B%255D%3DAlpha%2BMale%2BGrooming&p%5B%5D=facets.brand%255B%255D%3DAlpha%2Bmale%2BGrooming&p%5B%5D=facets.brand%255B%255D%3Dalphamalegrooming&p%5B%5D=facets.brand%255B%255D%3DBEARDHOOD&p%5B%5D=facets.brand%255B%255D%3DBeardhood&p%5B%5D=facets.brand%255B%255D%3DBeardraja&p%5B%5D=facets.brand%255B%255D%3DGangs%2Bof%2BBeard&p%5B%5D=facets.brand%255B%255D%3Dgentlemen%2527s%2Btonic&p%5B%5D=facets.brand%255B%255D%3DBigen&p%5B%5D=facets.brand%255B%255D%3Dtrumen&p%5B%5D=facets.brand%255B%255D%3DTrumen%2BBeard%2Boil&p%5B%5D=facets.brand%255B%255D%3DSt.%2BBeard&p%5B%5D=facets.brand%255B%255D%3DSt.Beard&p%5B%5D=facets.brand%255B%255D%3DThe%2BGentlemen%2527s%2BBeard&p%5B%5D=facets.brand%255B%255D%3DDAARIMOOCH&p%5B%5D=facets.brand%255B%255D%3DDaarimooch&p%5B%5D=facets.brand%255B%255D%3DThe%2BReal%2BMan&p%5B%5D=facets.brand%255B%255D%3DTHE%2BREAL%2BMAN&sid=t06%2Fhb1"
                },
                {
                  "title": "Shaving &amp; Aftershave",
                  "url": "/beauty-and-personal-care/mens-grooming/pr?count=40&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DGillette&p%5B%5D=facets.brand%255B%255D%3Dgillete&p%5B%5D=facets.brand%255B%255D%3DGillette%2BFusion%2BProglide&p%5B%5D=facets.brand%255B%255D%3DUstraa&p%5B%5D=facets.brand%255B%255D%3DOld%2BSpice&p%5B%5D=facets.brand%255B%255D%3DDenim&p%5B%5D=facets.brand%255B%255D%3DBombay%2BShaving%2BCompany&p%5B%5D=facets.brand%255B%255D%3DLather%2B%2526%2BWood%2BShaving%2BCo.&p%5B%5D=facets.brand%255B%255D%3DShaving%2BStation&p%5B%5D=facets.brand%255B%255D%3DThe%2BArt%2BOf%2BShaving&sid=t06%2Fhb1"
                },
                {
                  "title": "Sexual Wellness",
                  "url": "/beauty-and-personal-care/sexual-wellness/pr?sid=t06,7vg&otracker=categorytree"
                }
              ],
              [
                {
                  "title": "Top wear",
                  "url": "/mens-clothing/~mens-top-wear/pr?sid=2oq%2Cs9b",
                  "type": "heading"
                },
                {
                  "title": "T-Shirts",
                  "url": "/mens-clothing/tshirts/pr?sid=2oq,s9b,j9y"
                },
                {
                  "title": "Shirts",
                  "url": "/men/shirts/pr?sid=2oq,s9b,mg4"
                },
                {
                  "title": "Kurtas",
                  "url": "/mens-clothing/ethnic-wear/kurtas/pr?sid=2oq,s9b,3a0,r6s"
                },
                {
                  "title": "Suits &amp; Blazers",
                  "url": "/mens-clothing/suits-blazers/pr?sid=2oq,s9b,q9f"
                },
                {
                  "title": "Jackets",
                  "url": "/mens-clothing/winter-seasonal-wear/jackets/pr?sid=2oq,s9b,qgu,8cd"
                },
                {
                  "title": "Sweatshirts",
                  "url": "/mens-clothing/winter-seasonal-wear/sweatshirts/pr?sid=2oq,s9b,qgu,8vm"
                },
                {
                  "title": "Bottom wear",
                  "url": "/mens-clothing/~mens-bottom-wear/pr?sid=2oq%2Cs9b",
                  "type": "heading"
                },
                {
                  "title": "Jeans",
                  "url": "/men/jeans/pr?sid=2oq,s9b,94h"
                },
                {
                  "title": "Trousers",
                  "url": "/mens-clothing/trousers/pr?sid=2oq,s9b,9uj"
                },
                {
                  "title": "Shorts &amp; 3/4ths",
                  "url": "/mens-clothing/~shorts-and-capris/pr?sid=2oq%2Cs9b"
                },
                {
                  "title": "Cargos",
                  "url": "/mens-clothing/cargos-shorts-34ths/cargos/pr?sid=2oq,s9b,vde,lrd"
                },
                {
                  "title": "Track pants",
                  "url": "/mens-clothing/sports-wear/track-pants/pr?sid=2oq,s9b,6gr,rfn"
                }
              ],
              [
                {
                  "title": "Sports wear",
                  "url": "/mens-clothing/sports-wear/pr?sid=2oq,s9b,6gr",
                  "type": "heading"
                },
                {
                  "title": "Sports T-Shirts",
                  "url": "/mens-clothing/sports-wear/tshirts/pr?sid=2oq,s9b,6gr,j9y"
                },
                {
                  "title": "Track Pants",
                  "url": "/mens-clothing/sports-wear/track-pants/pr?sid=2oq,s9b,6gr,rfn"
                },
                {
                  "title": "Track Suits",
                  "url": "/mens-clothing/sports-wear/track-suits/pr?sid=2oq,s9b,6gr,xxe"
                },
                {
                  "title": "Shorts",
                  "url": "/mens-clothing/cargos-shorts-34ths/shorts/pr?sid=2oq,s9b,vde,59q"
                },
                {
                  "title": "Innerwear &amp; Sleepwear",
                  "url": "/mens-clothing/inner-wear-sleep-wear/pr?sid=2oq,s9b,b1a",
                  "type": "heading"
                },
                {
                  "title": "Briefs &amp; Trunks",
                  "url": "/mens-clothing/~briefs-and-trunks/pr?sid=2oq%2Cs9b"
                },
                {
                  "title": "Vests",
                  "url": "/mens-clothing/inner-wear-sleep-wear/vests/pr?sid=2oq,s9b,b1a,kgo"
                },
                {
                  "title": "Boxers",
                  "url": "/mens-clothing/inner-wear-sleep-wear/boxers/pr?sid=2oq,s9b,b1a,bw1"
                },
                {
                  "title": "Thermals",
                  "url": "/mens-clothing/inner-wear-sleep-wear/thermals/pr?sid=2oq,s9b,b1a,bhf"
                },
                {
                  "title": "Ties, Socks, Caps &amp; more",
                  "url": "/mens-clothing/accessories-combo-sets/pr?sid=2oq,s9b,8jf",
                  "type": "heading"
                },
                {
                  "title": "Kurta, Pyjama &amp; more",
                  "url": "/mens-clothing/ethnic-wear/pr?sid=2oq,s9b,3a0",
                  "type": "heading"
                },
                {
                  "title": "Winter wear",
                  "url": "/mens-clothing/winter-seasonal-wear/pr?sid=2oq,s9b,qgu",
                  "type": "heading"
                },
                {
                  "title": "Fabrics",
                  "url": "/mens-clothing/fabrics/pr?sid=2oq,s9b,9hz",
                  "type": "heading"
                }
              ],
              [
                {
                  "title": "Watches",
                  "url": "/mens-watches-store",
                  "type": "heading"
                },
                {
                  "title": "Fastrack",
                  "url": "/watches/fastrack~brand/pr?sid=r18"
                },
                {
                  "title": "Casio",
                  "url": "/watches/casio~brand/pr?sid=r18"
                },
                {
                  "title": "Titan",
                  "url": "/watches/titan~brand/pr?sid=r18"
                },
                {
                  "title": "Fossil",
                  "url": "/watches/fossil~brand/pr?sid=r18"
                },
                {
                  "title": "Sonata",
                  "url": "/watches/sonata~brand/pr?sid=r18"
                },
                {
                  "title": "Accessories",
                  "url": "/mens-bags-wallet-store",
                  "type": "heading"
                },
                {
                  "title": "Backpacks",
                  "url": "/bags-wallets-belts/bags-backpacks/backpacks/pr?sid=reh,4d7,ak9"
                },
                {
                  "title": "Wallets",
                  "url": "/bags-wallets-belts/wallets-clutches/wallets/pr?sid=reh,cca,h76"
                },
                {
                  "title": "Belts",
                  "url": "/bags-wallets-belts/belts/~men/pr?sid=reh,wq9"
                },
                {
                  "title": "Sunglasses",
                  "url": "/sunglasses/pr?p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&amp;sid=26x"
                },
                {
                  "title": "Luggage &amp; Travel",
                  "url": "/bags-wallets-belts/luggage-travel/pr?count=40&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2527s&p%5B%5D=facets.ideal_for%255B%255D%3DBoys&sid=reh%2Fplk"
                },
                {
                  "title": "Frames",
                  "url": "/eyewear/frames/pr?count=40&p%5B%5D=facets.ideal_for%255B%255D%3DMen&p%5B%5D=facets.ideal_for%255B%255D%3DUnisex&sid=u73%2Fh4k"
                },
                {
                  "title": "Jewellery",
                  "url": "/jewellery/pr?p%5B%5D=facets.ideal_for%255B%255D%3DMen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys&amp;sid=mcr"
                },
                {
                  "title": "Sports &amp; Fitness Store",
                  "url": "/sport-store",
                  "type": "heading"
                }
              ],
              [
                {
                  "title": "Smart Watches",
                  "url": "/wearable-smart-devices/smart-watches/pr?sid=ajy,buh&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;facets.availability%5b%5d=Exclude+Out+of+Stock&amp;otracker=CLP_lhs",
                  "type": "heading"
                },
                {
                  "title": "Smart Bands",
                  "url": "/wearable-smart-devices/smart-bands/pr?sid=ajy,q7p",
                  "type": "heading"
                },
                {
                  "title": "Personal Care Appliances",
                  "url": "/personal-care-appliances-men-store",
                  "type": "heading"
                },
                {
                  "title": "Trimmers",
                  "url": "/health-personal-care-appliances/personal-care-appliances/trimmers/pr?sid=zlw,79s,by3"
                },
                {
                  "title": "Shavers",
                  "url": "/health-personal-care-appliances/personal-care-appliances/shavers/pr?sid=zlw,79s,u3j"
                },
                {
                  "title": "Grooming Kits",
                  "url": "/health-personal-care-appliances/personal-care-appliances/trimmers/~shaverstrimmersmen/pr?p%5B%5D=facets.trimmer_type%255B%255D%3DGrooming%2BKit&amp;sid=zlw%2C79s%2Cby3"
                },
                {
                  "title": "Featured",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Watches Store",
                  "url": "/mens-watches-store"
                },
                {
                  "title": "Footwear Club",
                  "url": "/men-exclusive-store"
                },
                {
                  "title": "Bags &amp; Wallet",
                  "url": "/mens-bags-wallet-store"
                },
                {
                  "title": "T-Shirt Store",
                  "url": "/mens-tshirts-store"
                },
                {
                  "title": "Adidas",
                  "url": "/mens-footwear/pr?p%5B%5D=facets.brand%255B%255D%3DAdidas&amp;p%5B%5D=facets.brand%255B%255D%3DAdidas%2BOriginals&amp;sid=osp%2Ccil"
                },
                {
                  "title": "Beardo",
                  "url": "/beauty-and-personal-care/mens-grooming/hair-care/pr?count=40&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DBeardo&sid=t06%2Fhb1%2Fb7e"
                },
                {
                  "title": "Reebok",
                  "url": "/mens-footwear/reebok~brand/pr?sid=osp,cil"
                },
                {
                  "title": "Metronaut",
                  "url": "/metronaut-store"
                }
              ]
            ]
          }
        ]
      },
      "women": {
        "title": "Women",
        "url": "#",
        "importantLinks": [],
        "show" : false,
        "tabs": [
          {
            "title": "Categories",
            "columns": [
              [
                {
                  "title": "Clothing",
                  "url": "/womens-clothing-store",
                  "type": "heading"
                },
                {
                  "title": "Winter &amp; Seasonal Wear",
                  "url": "/womens-clothing/winter-seasonal-wear/pr?sid=2oq,c1r,67x",
                  "type": "heading"
                },
                {
                  "title": "Sweatshirts",
                  "url": "/womens-clothing/winter-seasonal-wear/sweatshirts/pr?sid=2oq,c1r,67x,vek&amp;otracker=categorytree"
                },
                {
                  "title": "Sweaters &amp; Cardigans",
                  "url": "/womens-clothing/~sweaters-cardigans/pr?sid=2oq%2Cc1r"
                },
                {
                  "title": "Shrugs &amp; Jackets",
                  "url": "/womens-clothing/western-wear/shrugs-jackets/pr?sid=2oq,c1r,ha6,pyo&amp;otracker=categorytree"
                },
                {
                  "title": "Winter Accessories",
                  "url": "/womens-clothing/accessories/pr?sid=2oq,c1r,3gz&amp;otracker=categorytree"
                },
                {
                  "title": "Western Wear",
                  "url": "/womens-clothing/western-wear/pr?sid=2oq,c1r,ha6&amp;otracker=categorytree",
                  "type": "heading"
                },
                {
                  "title": "Top, T-Shirts &amp; Shirts",
                  "url": "/womens-clothing/western-wear/shirts-tops-tunics/pr?sid=2oq,c1r,ha6,cck&amp;otracker=categorytree"
                },
                {
                  "title": "Dresses",
                  "url": "/women/dresses/pr?sid=2oq,c1r,ha6,xzt,3y0&amp;otracker=categorytree"
                },
                {
                  "title": "Jeans",
                  "url": "/womens-clothing/western-wear/jeans-shorts/jeans/pr?sid=2oq,c1r,ha6,uuk,q02"
                },
                {
                  "title": "Trousers &amp; Capris",
                  "url": "/western-wear/trousers-capris/pr?sid=2oq,c1r,ha6,uo8"
                },
                {
                  "title": "Shorts &amp; Skirts",
                  "url": "/womens-clothing/~shorts-skirts/pr?sid=2oq%2Cc1r"
                },
                {
                  "title": "Lingerie &amp; Sleepwear",
                  "url": "/womens-clothing/lingerie-sleep-swimwear/pr?sid=2oq,c1r,tbt&amp;otracker=categorytree",
                  "type": "heading"
                },
                {
                  "title": "Bras",
                  "url": "/womens-clothing/lingerie-sleep-swimwear/bras/pr?sid=2oq,c1r,tbt,3o8"
                },
                {
                  "title": "Panties",
                  "url": "/womens-clothing/lingerie-sleep-swimwear/panties/pr?sid=2oq,c1r,tbt,8sc"
                },
                {
                  "title": "Nightsuits &amp; Nightdresses",
                  "url": "/womens-clothing/lingerie-sleep-swimwear/night-dresses-nighties/pr?sid=2oq%2Cc1r%2Ctbt%2C25w"
                },
                {
                  "title": "Swim &amp; Beachwear",
                  "url": "/womens-clothing/lingerie-sleep-swimwear/swim-beach-wear/pr?sid=2oq,c1r,tbt,wg3",
                  "type": "heading"
                }
              ],
              [
                {
                  "title": "Ethnic Wear",
                  "url": "/womens-clothing/ethnic-wear/pr?sid=2oq,c1r,3pj",
                  "type": "heading"
                },
                {
                  "title": "Sarees",
                  "url": "/sarees/pr?sid=2oq,c1r,3pj,7od"
                },
                {
                  "title": "Kurtas &amp; Kurtis",
                  "url": "/women/kurtas-kurtis/pr?sid=2oq%2Cc1r%2C3pj%2Cua6&amp;otracker=categorytree"
                },
                {
                  "title": "Dress Material",
                  "url": "/womens-clothing/ethnic-wear/dress-materials/pr?sid=2oq,c1r,3pj,5ji"
                },
                {
                  "title": "Lehenga Choli",
                  "url": "/womens-clothing/ethnic-wear/lehenga-cholis/pr?sid=2oq,c1r,3pj,t5i"
                },
                {
                  "title": "Blouse",
                  "url": "/womens-clothing/ethnic-wear/blouses/pr?sid=2oq,c1r,3pj,vx5"
                },
                {
                  "title": "Leggings &amp; Salwars",
                  "url": "/womens-clothing/ethnic-wear/ethnic-bottoms/pr?sid=2oq,c1r,3pj,9l3"
                },
                {
                  "title": "Anarkali Suits",
                  "url": "/womens-clothing/anarkali~type/pr?sid=2oq,c1r"
                },
                {
                  "title": "Sports Wear",
                  "url": "/womens-clothing/sports-gym-wear/pr?sid=2oq,c1r,6p8",
                  "type": "heading"
                },
                {
                  "title": "International Brands",
                  "url": "/womens-clothing/pr?otracker=categorytree&amp;p%5B%5D=facets.brand%255B%255D%3DMarie%2BClaire&amp;p%5B%5D=facets.brand%255B%255D%3DKazo&amp;p%5B%5D=facets.brand%255B%255D%3DMANGO&amp;p%5B%5D=facets.brand%255B%255D%3DAdidas&amp;p%5B%5D=facets.brand%255B%255D%3DVero%2BModa&amp;p%5B%5D=facets.brand%255B%255D%3DOnly&amp;p%5B%5D=facets.brand%255B%255D%3DAvirate&amp;p%5B%5D=facets.brand%255B%255D%3DForever%2BNew&amp;p%5B%5D=facets.brand%255B%255D%3DChemistry&amp;p%5B%5D=facets.brand%255B%255D%3DElle&amp;p%5B%5D=facets.brand%255B%255D%3Dether&amp;p%5B%5D=facets.brand%255B%255D%3DKook%2BN%2BKeech&amp;sid=2oq%2Fc1r",
                  "type": "heading"
                },
                {
                  "title": "Fresh arrivals !",
                  "url": "/womens-clothing/pr?count=40&amp;otracker=nmenu_sub_Women_0_Fresh+arrivals+%21&amp;p%5B%5D=facets.brand%255B%255D%3DFabAlley&amp;p%5B%5D=facets.brand%255B%255D%3DMANGO&amp;p%5B%5D=facets.brand%255B%255D%3DKook%2BN%2BKeech&amp;p%5B%5D=facets.brand%255B%255D%3DHRX%2Bby%2BHrithik%2BRoshan&amp;p%5B%5D=facets.brand%255B%255D%3DD%2BMuse%2Bby%2BDressBerry&amp;p%5B%5D=facets.brand%255B%255D%3DHarvard&amp;p%5B%5D=facets.brand%255B%255D%3DJealous&amp;p%5B%5D=facets.brand%255B%255D%3DJealous%2BClub%2B21&amp;p%5B%5D=facets.brand%255B%255D%3DJealous%2B21&amp;p%5B%5D=facets.brand%255B%255D%3DSela&amp;p%5B%5D=facets.brand%255B%255D%3DAjile%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DAkkriti%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DCandies%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DHoney%2BBy%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DIzabel%2BLondon%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DRangmanch%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DForever%2B21&amp;p%5B%5D=facets.brand%255B%255D%3DZimaleto&amp;p%5B%5D=facets.brand%255B%255D%3DPannkh&amp;sid=2oq%2Fc1r",
                  "type": "heading"
                },
                {
                  "title": "Top Selling Styles",
                  "url": "/womens-clothing/pr?otracker=categorytree&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2BMore&amp;sid=2oq%2Fc1r",
                  "type": "heading"
                },
                {
                  "title": "Under 499",
                  "url": "/womens-clothing/pr?otracker=categorytree&amp;p%5B%5D=facets.price_range.from%3DMin&amp;p%5B%5D=facets.price_range.to%3D500&amp;sid=2oq%2Fc1r",
                  "type": "heading"
                }
              ],
              [
                {
                  "title": "Footwear",
                  "url": "/women-footwear-store",
                  "type": "heading"
                },
                {
                  "title": "Sandals",
                  "url": "/womens-footwear/~womens-sandals/pr?sid=osp,iko",
                  "type": "heading"
                },
                {
                  "title": "Flats",
                  "url": "/womens-footwear/flats/pr?sid=osp,iko,9d5"
                },
                {
                  "title": "Heels",
                  "url": "/womens-footwear/heels/pr?sid=osp,iko,6q1"
                },
                {
                  "title": "Wedges",
                  "url": "/womens-footwear/wedges/pr?sid=osp,iko,jpm"
                },
                {
                  "title": "Shoes",
                  "url": "/womens-footwear/~sports-casual-shoes/pr?&amp;sid=osp%2Ciko",
                  "type": "heading"
                },
                {
                  "title": "Sports Shoes",
                  "url": "/womens-footwear/sports-shoes/pr?sid=osp,iko,d20"
                },
                {
                  "title": "Casual Shoes",
                  "url": "/womens-footwear/casual-shoes/pr?sid=osp,iko,sx7"
                },
                {
                  "title": "Boots",
                  "url": "/womens-footwear/boots/pr?sid=osp%2Ciko%2Cxgp"
                },
                {
                  "title": "Ballerinas",
                  "url": "/womens-footwear/ballerinas/pr?sid=osp,iko,974",
                  "type": "heading"
                },
                {
                  "title": "Slippers &amp; Flip- Flop's",
                  "url": "/womens-footwear/slippers-flip-flops/pr?sid=osp,iko,iz7",
                  "type": "heading"
                },
                {
                  "title": "Watches",
                  "url": "/womens-watches-store",
                  "type": "heading"
                },
                {
                  "title": "Smart Watches",
                  "url": "/wearable-smart-devices/smart-watches/pr?sid=ajy,buh&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;facets.availability[]=Exclude+Out+of+Stock&amp;otracker=CLP_lhs",
                  "type": "heading"
                },
                {
                  "title": "Personal Care Appliances",
                  "url": "/health-personal-care-appliances/personal-care-appliances/~personalcareforwomen/pr?sid=zlw%2C79s",
                  "type": "heading"
                },
                {
                  "title": "Hair Straightners",
                  "url": "/health-personal-care-appliances/personal-care-appliances/hair-straighteners/pr?sid=zlw,79s,dk5"
                },
                {
                  "title": "Hair Dryers",
                  "url": "/health-personal-care-appliances/personal-care-appliances/hair-dryers/pr?sid=zlw,79s,mh8"
                }
              ],
              [
                {
                  "title": "Beauty &amp; Grooming",
                  "url": "/beauty-store",
                  "type": "heading"
                },
                {
                  "title": "Make Up",
                  "url": "/beauty-and-personal-care/makeup/pr?sid=t06,fy9"
                },
                {
                  "title": "Skin Care",
                  "url": "/beauty-and-personal-care/body-and-skin-care/pr?otracker=nmenu_sub_Women_0_Skin+Care&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;sid=t06%2Fiqb"
                },
                {
                  "title": "Hair Care",
                  "url": "/beauty-and-personal-care/hair-care/pr?otracker=nmenu_sub_Women_0_Hair+Care&amp;p%5B%5D=facets.ideal_for%255B%255D%3DGirls&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;sid=t06%2Fb7e"
                },
                {
                  "title": "Bath &amp; Spa",
                  "url": "/beauty-and-personal-care/bath-and-spa/pr?sid=t06,xrp&otracker=categorytree"
                },
                {
                  "title": "Deodorants &amp; Perfumes",
                  "url": "/beauty-and-personal-care/fragrances/pr?otracker=categorytree&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBaby%2BGirls&amp;p%5B%5D=facets.ideal_for%255B%255D%3DGirls&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;sid=t06%2Fr3o"
                },
                {
                  "title": "Jewellery",
                  "url": "/womens-jewellery-store",
                  "type": "heading"
                },
                {
                  "title": "Precious Jewellery",
                  "url": "/jewellery/precious-jewellery/pr?sid=mcr,ykh"
                },
                {
                  "title": "Artificial Jewellery",
                  "url": "/fashion-jewellery-store"
                },
                {
                  "title": "Silver Jewellery",
                  "url": "/jewellery/silver-jewellery/pr?sid=mcr,tfz"
                },
                {
                  "title": "Accessories",
                  "url": "/women-handbags-store",
                  "type": "heading"
                },
                {
                  "title": "Smart Bands",
                  "url": "/wearable-smart-devices/smart-bands/pr?sid=ajy,q7p&amp;otracker=categorytree"
                },
                {
                  "title": "Handbags",
                  "url": "/bags-wallets-belts/handbags-clutches/handbags/pr?sid=reh,ihu,m08&otracker=categorytree"
                },
                {
                  "title": "Shoulder Bags",
                  "url": "/bags-wallets-belts/handbags-clutches/shoulder-bags/pr?sid=reh,ihu,1gy&otracker=categorytree"
                },
                {
                  "title": "Totes",
                  "url": "/bags-wallets-belts/handbags-clutches/totes/pr?sid=reh,ihu,v57&otracker=categorytree"
                },
                {
                  "title": "Sling bags",
                  "url": "/bags-wallets-belts/handbags-clutches/sling-bags/pr?sid=reh,ihu,mf2&otracker=categorytree"
                },
                {
                  "title": "Clutches",
                  "url": "/bags-wallets-belts/wallets-clutches/clutches/pr?sid=reh,cca,q6i&otracker=categorytree"
                },
                {
                  "title": "Wallets &amp; Belts",
                  "url": "/bags-wallets-belts/~wallets-belts/pr?p[]=facets.ideal_for%255B%255D=Women&amp;p[]=sort=popularity&amp;sid=reh"
                },
                {
                  "title": "Luggage &amp; Travel",
                  "url": "/bags-wallets-belts/luggage-travel/pr?count=40&p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&p%5B%5D=facets.ideal_for%255B%255D%3DWomen%2527s&p%5B%5D=facets.ideal_for%255B%255D%3DGirls&p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&sid=reh%2Fplk"
                },
                {
                  "title": "Sunglasses",
                  "url": "/sunglasses/pr?p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DGirls&amp;sid=26x"
                },
                {
                  "title": "Frames",
                  "url": "/eyewear/frames/pr?count=40&p%5B%5D=facets.ideal_for%255B%255D%3DUnisex&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&sid=u73%2Fh4k"
                }
              ],
              [
                {
                  "title": "Featured",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Forever 21",
                  "url": "/all/pr?count=40&p%5B%5D=facets.brand%255B%255D%3DForever%2B21&sid=all"
                },
                {
                  "title": "Pantaloons",
                  "url": "/womens-clothing/pr?count=40&amp;otracker=categorytree&amp;p%5B%5D=facets.brand%255B%255D%3DAjile%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DAkkriti%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DAnnabelle%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DCandies%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DHoney%2BBy%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DIzabel%2BLondon%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DRangmanch%2Bby%2BPantaloons&amp;p%5B%5D=facets.brand%255B%255D%3DSF%2BJeans%2Bby%2BPantaloons&amp;sid=2oq%2Fc1r"
                },
                {
                  "title": "Chemistry",
                  "url": "/all/~womens-footwear-and-handbag/pr?p%5B%5D=facets.brand%255B%255D%3DChemistry&amp;sid=all"
                },
                {
                  "title": "Lakme",
                  "url": "/search?p[]=facets.brand%255B%255D%3DLakme&sid=t06&otracker=CLP_filters"
                },
                {
                  "title": "Nivea",
                  "url": "/search?count=40&otracker=CLP_filters&p%5B%5D=facets.brand%255B%255D%3DNivea&p%5B%5D=facets.brand%255B%255D%3DNivea%2BMen&sid=t06"
                },
                {
                  "title": "Catwalk",
                  "url": "/womens-footwear/pr?otracker=categorytree&amp;p%5B%5D=facets.brand%255B%255D%3DCatwalk&amp;sid=osp%2Fiko"
                },
                {
                  "title": "Titan-Raga",
                  "url": "/watches/pr?otracker=product_breadCrumbs_Watches&amp;p%5B%5D=facets.brand%255B%255D%3DTitan&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;sid=r18"
                },
                {
                  "title": "Fastrack",
                  "url": "/all/pr?sid=all&amp;p[]=facets.brand%255B%255D%3DFastrack"
                },
                {
                  "title": "Divastri",
                  "url": "/divastri-store"
                },
                {
                  "title": "Rare Roots",
                  "url": "/womens-clothing/pr?count=40&p%5B%5D=facets.brand%255B%255D%3DRARE%2BROOTS&sid=2oq%2Fc1r"
                },
                {
                  "title": "Anmi",
                  "url": "/the-anmi-store"
                },
                {
                  "title": "Daniel Klein",
                  "url": "/watches/women~idealfor/pr?otracker=nmenu_sub_Women_0_Watches&amp;p%5B%5D=facets.brand%255B%255D%3DDaniel%2BKlein&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&amp;p%5B%5D=facets.ideal_for%255B%255D%3DGirls&amp;p%5B%5D=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&amp;p%5B%5D=facets.ideal_for%255B%255D%3DWomen&amp;sid=r18"
                },
                {
                  "title": "Gold Coins",
                  "url": "/jewellery/~gold-coins/pr?sid=mcr"
                },
                {
                  "title": "Silver Coins",
                  "url": "/jewellery/~silver-coins/pr?sid=mcr"
                },
                {
                  "title": "Trending today!",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Ruffles &amp; Frills",
                  "url": "/western-wear/pr?facets.availability%5b%5d=Exclude+Out+of+Stock&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;p%5B%5D=facets.theme%255B%255D%3DRuffles&amp;sid=ha6"
                },
                {
                  "title": "Pastel Kurtas &amp; Kurtis",
                  "url": "/search?facets.availability[]=Exclude+Out+of+Stock&amp;p[]=facets.filter_standard[]=1&amp;p[]=facets.theme%255B%255D%3DPastel%2BKurtas&amp;sid=2oq%2Fc1r%2F3pj&amp;otracker=clp_metro_tile3_1_kurta-categ-ca620_kurta-kurti-store_aa76c0f1-f407-428d-9018-e9e3db294186_wp2"
                },
                {
                  "title": "Designer Net Sarees",
                  "url": "/sarees/pr?facets.availability[]=Exclude+Out+of+Stock&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;p%5B%5D=facets.theme%255B%255D%3DDesigner%2BSarees&amp;p%5B%5D=facets.theme%255B%255D%3DPastel&amp;p%5B%5D=facets.theme%255B%255D%3DTouch%2Bof%2BGold&amp;sid=2oq%2Fc1r%2F3pj%2F7od&amp;otracker=clp_metro_tile3_1_saree-categ-1884a_sarees-store_5926195c-d5cd-4ed7-8cf6-5937f3faec19_wp2"
                }
              ]
            ]
          }
        ]
      },
      "baby-kids": {
        "title": "Baby &amp; Kids",
        "url": "#",
        "importantLinks": [],
        "show" : false,
        "tabs": [
          {
            "title": "Categories",
            "columns": [
              [
                {
                  "title": "Kids Clothing",
                  "url": "/kids-clothing/pr?sid=2oq,mpf&otracker=categorytree",
                  "type": "heading"
                },
                {
                  "title": "Boys' Clothing",
                  "url": "/kids-clothing/boys-wear/pr?sid=2oq,mpf,u6l",
                  "type": "heading"
                },
                {
                  "title": "Polos &amp; T-Shirts",
                  "url": "/kids-clothing/boys-wear/polos-tshirts/pr?sid=2oq,mpf,u6l,yj5"
                },
                {
                  "title": "Ethnic Wear",
                  "url": "/kids-clothing/boys-wear/ethnic-wear/pr?sid=2oq,mpf,u6l,et9"
                },
                {
                  "title": "Winter Wear",
                  "url": "/kids-clothing/boys-wear/winter-seasonal-wear/pr?sid=2oq,mpf,u6l,tim"
                },
                {
                  "title": "Girls' Clothing",
                  "url": "/kids-clothing/girls-wear/pr?sid=2oq,mpf,acr",
                  "type": "heading"
                },
                {
                  "title": "Dresses &amp; Skirts",
                  "url": "/kids-clothing/girls-wear/dresses-skirts/pr?sid=2oq,mpf,acr,ot6"
                },
                {
                  "title": "Ethnic Wear",
                  "url": "/kids-clothing/girls-wear/ethnic-wear/pr?sid=2oq,mpf,acr,6rr"
                },
                {
                  "title": "Winter Wear",
                  "url": "/kids-clothing/girls-wear/winter-seasonal-wear/pr?sid=2oq,mpf,acr,c3a"
                },
                {
                  "title": "Baby Boy Clothing",
                  "url": "/kids-clothing/infants-wear/baby-boys/pr?sid=2oq,mpf,cki,exf",
                  "type": "heading"
                },
                {
                  "title": "Body Suits",
                  "url": "/infants-wear/baby-boys/bodysuits-sleepsuits/pr?sid=2oq,mpf,cki,exf,cgw"
                },
                {
                  "title": "Polos &amp; T-Shirts",
                  "url": "/kids-clothing/infants-wear/baby-boys/polos-tshirts/pr?sid=2oq,mpf,cki,exf,b2d"
                },
                {
                  "title": "Baby Girl Clothing",
                  "url": "/kids-clothing/infants-wear/baby-girls/pr?sid=2oq,mpf,cki,kzp",
                  "type": "heading"
                },
                {
                  "title": "Body Suits",
                  "url": "/kids-clothing/infants-wear/baby-girls/bodysuits-sleepsuits/pr?sid=2oq,mpf,cki,kzp,3gw"
                },
                {
                  "title": "Dresses",
                  "url": "/kids-clothing/infants-wear/baby-girls/dresses-skirts/dresses/pr?sid=2oq,mpf,cki,kzp,rf8,l8b"
                }
              ],
              [
                {
                  "title": "Kids Footwear",
                  "url": "/kids-footwear-store",
                  "type": "heading"
                },
                {
                  "title": "Boys' Footwear",
                  "url": "/footwear/kids-infant-footwear/for-boys/pr?sid=osp,mba,o3t",
                  "type": "heading"
                },
                {
                  "title": "Sandals",
                  "url": "/footwear/kids-infant-footwear/for-boys/sandals/pr?sid=osp,mba,o3t,wqv"
                },
                {
                  "title": "Sport Shoes",
                  "url": "/footwear/kids-infant-footwear/for-boys/sports-shoes/pr?sid=osp,mba,o3t,aua"
                },
                {
                  "title": "Girls' Footwear",
                  "url": "/footwear/kids-infant-footwear/for-girls/pr?sid=osp,mba,erx",
                  "type": "heading"
                },
                {
                  "title": "Flats &amp; Bellies",
                  "url": "/footwear/kids-infant-footwear/for-girls/flats-bellies/pr?sid=osp,mba,erx,6yc"
                },
                {
                  "title": "Sport Shoes",
                  "url": "/footwear/kids-infant-footwear/for-girls/sports-shoes/pr?sid=osp,mba,erx,9oc"
                },
                {
                  "title": "Baby Footwear",
                  "url": "/footwear/kids-infant-footwear/infants/pr?sid=osp,mba,qzr",
                  "type": "heading"
                },
                {
                  "title": "Booties",
                  "url": "/footwear/kids-infant-footwear/infants/booties/pr?sid=osp,mba,qzr,jbz"
                },
                {
                  "title": "Character Shoes",
                  "url": "/all/footwear/kids-infant-footwear/pr?p%5B%5D=facets.brand%255B%255D%3DBarbie&amp;p%5B%5D=facets.brand%255B%255D%3DDisney&amp;p%5B%5D=facets.brand%255B%255D%3DSpiderman&amp;sid=all%2Cosp%2Cmba&amp;pincode=110001&amp;filterNone=true",
                  "type": "heading"
                },
                {
                  "title": "School Supplies",
                  "url": "/back-to-school-store",
                  "type": "heading"
                },
                {
                  "title": "School Bags",
                  "url": "/kids-accessories/school-supplies/school-bags/pr?sid=d69,thr,wsp"
                },
                {
                  "title": "School Combo Sets",
                  "url": "/toys/school-supplies/school-sets/pr?sid=mgl%2Cthr%2Cscm"
                },
                {
                  "title": "Lunch Box",
                  "url": "/toys/school-supplies/lunch-boxes/pr?sid=mgl%2Cthr%2Cvzp"
                },
                {
                  "title": "Kids' Watches",
                  "url": "/watches/pr?otracker=nmenu_sub_Baby+and+Kids_0_Kids%27+Watches&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys&amp;p%5B%5D=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&amp;p%5B%5D=facets.ideal_for%255B%255D%3DGirls&amp;p%5B%5D=sort%3Dpopularity&amp;sid=r18"
                }
              ],
              [
                {
                  "title": "Toys",
                  "url": "/toys-store",
                  "type": "heading"
                },
                {
                  "title": "Remote Control Toys",
                  "url": "/toys/remote-control-toys/pr?sid=mgl,56m"
                },
                {
                  "title": "Educational Toys",
                  "url": "/toys/educational-toys/learning-toys/pr?sid=mgl,u35"
                },
                {
                  "title": "Soft Toys",
                  "url": "/toys/stuffed-toys/pr?sid=mgl,1zt"
                },
                {
                  "title": "Cars &amp; Die-cast Vehicles",
                  "url": "/toys/vehicle-action-toys/vehicle-pull-along/pr?sid=mgl%2Cj6q"
                },
                {
                  "title": "Outdoor Toys",
                  "url": "/toys/outdoor-toys/pr?sid=mgl%2C1k9"
                },
                {
                  "title": "Action Figures",
                  "url": "/toys/vehicle-action-toys/action-figures/pr?sid=mgl,k00"
                },
                {
                  "title": "Board Games",
                  "url": "/toys/puzzles-board-games/card-games/pr?sid=mgl,qet"
                },
                {
                  "title": "Musical Toys",
                  "url": "/toys/musical-toys/pr?p%5B%5D=sort%3Dfeatured&amp;sid=mgl,pz4"
                },
                {
                  "title": "Dolls &amp; Doll Houses",
                  "url": "/toys/dolls-doll-houses/pr?sid=mgl,fnw"
                },
                {
                  "title": "Puzzles",
                  "url": "/toys/puzzles/pr?sid=mgl%2Clu4"
                },
                {
                  "title": "S.T.E.M Toys",
                  "url": "/toys/pr?count=40&otracker=categorytree&p%5B%5D=facets.brand%255B%255D%3DBe%2BAmazing%2521%2BToys&p%5B%5D=facets.brand%255B%255D%3DThames%2B%2526%2BKosmos&p%5B%5D=facets.brand%255B%255D%3DEngino&p%5B%5D=facets.brand%255B%255D%3DElenco&p%5B%5D=facets.brand%255B%255D%3DUncle%2BMilton&p%5B%5D=facets.brand%255B%255D%3DK%2527Nex&p%5B%5D=facets.brand%255B%255D%3DMagformers&p%5B%5D=facets.brand%255B%255D%3DBaby%2BEinstein&p%5B%5D=facets.brand%255B%255D%3DLogic%2BRoots&p%5B%5D=facets.brand%255B%255D%3DAmazing%2BToys&p%5B%5D=facets.brand%255B%255D%3Dshunji&p%5B%5D=facets.brand%255B%255D%3DPrasid&p%5B%5D=facets.brand%255B%255D%3DSmartivity&p%5B%5D=facets.brand%255B%255D%3DEdunovate&p%5B%5D=facets.brand%255B%255D%3DBaby%2BGenius&p%5B%5D=facets.brand%255B%255D%3DGenius%2BBaby%2BToys&p%5B%5D=facets.brand%255B%255D%3DScientific%2BExplorer&p%5B%5D=facets.brand%255B%255D%3DThe%2BYoung%2BScientists%2BClub&p%5B%5D=facets.brand%255B%255D%3DJunior%2BScientist&p%5B%5D=facets.brand%255B%255D%3DJuniorscientist&p%5B%5D=facets.brand%255B%255D%3D4M&p%5B%5D=facets.brand%255B%255D%3DSmartlab&p%5B%5D=facets.brand%255B%255D%3DSmartLab%2BToys&p%5B%5D=facets.discount_range_v1%255B%255D%3D30%2525%2Bor%2BMore&sid=mgl"
                }
              ],
              [
                {
                  "title": "Baby Care",
                  "url": "/babycareclp-store",
                  "type": "heading"
                },
                {
                  "title": "Diaper &amp; Wipes",
                  "url": "/baby-care/diapering-potty-training/diapers/pr?sid=kyh,fdp,yvf"
                },
                {
                  "title": "Strollers &amp; activity Gear",
                  "url": "/baby-care/strollers-activity-gear/pr?sid=kyh,5mt"
                },
                {
                  "title": "Baby Bedding",
                  "url": "/baby-care/baby-bedding/pr?sid=kyh,7j3"
                },
                {
                  "title": "Feeding &amp; Nursing",
                  "url": "/baby-care/feeding-nursing/pr?sid=kyh,wpw"
                },
                {
                  "title": "Maternity Care",
                  "url": "/baby-care/maternity-care/pr?sid=kyh%2Cbrd"
                },
                {
                  "title": "Bath &amp; Skin Care",
                  "url": "/baby-care/bath-care/pr?sid=kyh,qst"
                },
                {
                  "title": "Baby Grooming",
                  "url": "/baby-care/baby-grooming/pr?sid=kyh%2Ctyn&amp;filterNone=true"
                },
                {
                  "title": "Health &amp; Safety",
                  "url": "/baby-care/health-safety/pr?sid=kyh%2Cejd&amp;filterNone=true"
                },
                {
                  "title": "Baby Gifting Sets",
                  "url": "/baby-care/baby-kids-gifts/pr?sid=kyh%2Cutp"
                },
                {
                  "title": "Baby Toys",
                  "url": "/toys/infant-toddler-toys/pr?sid=mgl,166"
                },
                {
                  "title": "Baby Smart Monitors",
                  "url": "/automation-robotics/surveillance-devices/baby-monitors/pr?sid=igc,j69,qvf"
                },
                {
                  "title": "Diapers &amp; Potty Training",
                  "url": "/baby-care/diapering-potty-training/pr?sid=kyh%2Cfdp"
                },
                {
                  "title": "Furniture ",
                  "url": "/baby-care/furniture-decoration/pr?sid=kyh%2Co3h"
                }
              ],
              [
                {
                  "title": "Featured brands",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Barbie",
                  "url": "/toys/barbie~brand/pr?sid=mgl"
                },
                {
                  "title": "Disney",
                  "url": "/toys/disney~brand/pr?sid=mgl"
                },
                {
                  "title": "United Colors of Benetton",
                  "url": "/kids-clothing/pr?count=40&amp;otracker=categorytree&amp;p%5B%5D=facets.brand%255B%255D%3DUnited%2BColors%2Bof%2BBenetton&amp;p%5B%5D=facets.brand%255B%255D%3DUnited%2BColors%2Bof%2BBenetton.&amp;sid=2oq%2Fmpf"
                },
                {
                  "title": "The Children's Place",
                  "url": "/childrens-place-store"
                },
                {
                  "title": "US Polo",
                  "url": "/kids-clothing/pr?count=40&otracker=categorytree&otracker=nmenu_sub_Baby+and+Kids_0_Kids+Clothing&p%5B%5D=facets.brand%255B%255D%3DU%2BS%2BPolo%2BKids&p%5B%5D=facets.brand%255B%255D%3DU%2BS%2BPOLO%2BKIDS&p%5B%5D=facets.brand%255B%255D%3DU.S.%2BPolo%2BAssn&p%5B%5D=facets.brand%255B%255D%3DU.S.%2BPolo%2BAssn.&p%5B%5D=facets.brand%255B%255D%3DUs%2BPolo%2BKids&p%5B%5D=facets.brand%255B%255D%3DUS%2BPolo%2BKids&p%5B%5D=facets.brand%255B%255D%3DUS%2BPOLO%2BKIDS&sid=2oq%2Fmpf"
                },
                {
                  "title": "Flying Machine",
                  "url": "/kids-clothing/pr?count=40&otracker=categorytree&otracker=nmenu_sub_Baby+and+Kids_0_Kids+Clothing&p%5B%5D=facets.brand%255B%255D%3DFlying%2BMachine&sid=2oq%2Fmpf"
                },
                {
                  "title": "Crocs",
                  "url": "/footwear/kids-infant-footwear/crocs~brand/pr?sid=osp,mba"
                },
                {
                  "title": "Puma",
                  "url": "/footwear/kids-infant-footwear/puma~brand/pr?sid=osp,mba"
                },
                {
                  "title": "Funskool",
                  "url": "/toys/funskool~brand/pr?sid=mgl"
                },
                {
                  "title": "Lego",
                  "url": "/toys/lego~brand/pr?sid=mgl"
                },
                {
                  "title": "Luvlap",
                  "url": "/baby-care/luvlap~brand/pr?sid=kyh"
                },
                {
                  "title": "Mamy Poko",
                  "url": "/baby-care/diapering-potty-training/diapers/mamypoko~brand/pr?sid=kyh,fdp,yvf"
                },
                {
                  "title": "Mee Mee",
                  "url": "/baby-care/feeding-nursing/bottles-accessories/baby-bottles/mee-mee~brand/pr?sid=kyh,wpw,i5z,8a7"
                }
              ]
            ]
          }
        ]
      },
      "home-kitchen": {
        "title": "Home &amp; Furniture",
        "url": "#",
        "importantLinks": [],
        "show" : false,
        "tabs": [
          {
            "title": "Categories",
            "columns": [
              [
                {
                  "title": "Kitchen &amp; Dining",
                  "url": "/kitchen-and-dining-store",
                  "type": "heading"
                },
                {
                  "title": "Pots &amp; Pans",
                  "url": "/household/cookware/pots-pans/pr?sid=r4l,c7t,qov"
                },
                {
                  "title": "Pressure Cookers",
                  "url": "/household/pressure-cookers-pans/pr?sid=r4l,u3r&amp;p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock"
                },
                {
                  "title": "Kitchen Tools",
                  "url": "/household/kitchen-tools/pr?sid=r4l,gs0&amp;p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;otracker=categorytree"
                },
                {
                  "title": "Gas Stoves",
                  "url": "/gas-stove-store"
                },
                {
                  "title": "Dining &amp; Serving",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Coffee Mugs",
                  "url": "/household/coffee-mugs/pr?sid=r4l,ajv"
                },
                {
                  "title": "Dinnerware &amp; Crockery",
                  "url": "/household/dinnerware-crockery/pr?sid=r4l,afn&amp;p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock"
                },
                {
                  "title": "Bar &amp; Glassware",
                  "url": "/household/bar-glassware/pr?sid=r4l,wpg&amp;p[]=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock"
                },
                {
                  "title": "Kitchen Storage",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Lunch Boxes",
                  "url": "/household/containers-bottles/lunch-boxes/pr?sid=r4l,v2a,bgj"
                },
                {
                  "title": "Flasks &amp; Casseroles",
                  "url": "/household/flasks-casseroles/pr?sid=r4l%2Cp4d"
                },
                {
                  "title": "Kitchen Containers",
                  "url": "/container-store"
                }
              ],
              [
                {
                  "title": "Furniture",
                  "url": "/furniture-store",
                  "type": "heading"
                },
                {
                  "title": "Beds",
                  "url": "/beds-store"
                },
                {
                  "title": "Sofas",
                  "url": "/sofas-store"
                },
                {
                  "title": "Dining tables &amp; Sets",
                  "url": "/diningclp-store"
                },
                {
                  "title": "Mattresses",
                  "url": "/furniture/mattresses/bed-mattress/pr?sid=wwe,rg9,6t1&amp;otracker=categorytree"
                },
                {
                  "title": "Tables",
                  "url": "/furniture/tables/pr?sid=wwe,ki7"
                },
                {
                  "title": "Office Chairs",
                  "url": "/chairs-store"
                },
                {
                  "title": "Chairs",
                  "url": "/furniture/chairs/pr?sid=wwe,y7b"
                },
                {
                  "title": "Bean Bags",
                  "url": "/furniture/bean-bags/pr?sid=wwe,4n6"
                },
                {
                  "title": "Shoe Racks",
                  "url": "/shoerackclp-store"
                },
                {
                  "title": "TV Units &amp; Cabinets",
                  "url": "/furniture/tv-units-cabinets/tv-entertainment-units/pr?sid=wwe,243,koe"
                },
                {
                  "title": "Wardrobes",
                  "url": "/furniture/wardrobes/wardrobes/pr?sid=wwe,fc3,dsw"
                },
                {
                  "title": "Drawers",
                  "url": "/furniture/drawers/pr?sid=wwe,xdf"
                },
                {
                  "title": "Sofa Beds",
                  "url": "/furniture/sofa-beds/sofa-beds/pr?sid=wwe,osg,itp"
                },
                {
                  "title": "Offers on Furniture",
                  "url": "/offers-list/great-offers-on-furniture?screen=dynamic&amp;pk=themeViews%3DFur-March%3ADesktop~widgetType%3DdealCard~contentType%3Dneo&amp;wid=5.dealCard.OMU",
                  "type": "heading"
                },
                {
                  "title": "House Keeping &amp; Laundry",
                  "url": "/household/housekeeping-laundry/pr?sid=r4l,gdi",
                  "type": "heading"
                }
              ],
              [
                {
                  "title": "Furnishing",
                  "url": "/home-furnishing-store",
                  "type": "heading"
                },
                {
                  "title": "Bedsheets",
                  "url": "/bedsheet-store"
                },
                {
                  "title": "Curtains",
                  "url": "/curtain-store"
                },
                {
                  "title": "Cushion &amp; Pillow Covers",
                  "url": "/home-furnishing/cushions-pillows-covers/pr?sid=vdm%2Cv2y"
                },
                {
                  "title": "Blankets, Quilts &amp; Dohars",
                  "url": "/blanket-store"
                },
                {
                  "title": "Towels",
                  "url": "/home-furnishing/bath/bath-towels/pr?sid=vdm,v28,zs1"
                },
                {
                  "title": "Kitchen &amp; Dining Linen",
                  "url": "/home-furnishing/kitchen-dining-linen/pr?sid=vdm,ow3"
                },
                {
                  "title": "Mats &amp; Carpets",
                  "url": "/home-furnishing/floor-coverings/pr?sid=vdm,l9m"
                },
                {
                  "title": "Smart Home Automation",
                  "url": "/smart-home-automation-store?otracker=nmenu_sub_Appliances_0_Smart%20Home%20Automation",
                  "type": "heading"
                },
                {
                  "title": "Smart Security System",
                  "url": "/automation-robotics/surveillance-devices/security-cameras/pr?otracker=categorytree&amp;p%5B%5D=facets.brand%255B%255D%3DCELESTECH&amp;p%5B%5D=facets.brand%255B%255D%3DCP%2BPlus&amp;p%5B%5D=facets.brand%255B%255D%3DCP-PLUS&amp;p%5B%5D=facets.brand%255B%255D%3DCP-Plus&amp;p%5B%5D=facets.brand%255B%255D%3DCp%2BPlus&amp;p%5B%5D=facets.brand%255B%255D%3DCpplus&amp;p%5B%5D=facets.brand%255B%255D%3DCrocon&amp;p%5B%5D=facets.brand%255B%255D%3DFocus&amp;p%5B%5D=facets.brand%255B%255D%3DGodrej&amp;p%5B%5D=facets.brand%255B%255D%3DHIK%2BVISION&amp;p%5B%5D=facets.brand%255B%255D%3DHIKVISION&amp;p%5B%5D=facets.brand%255B%255D%3DHik%2BVision&amp;p%5B%5D=facets.brand%255B%255D%3DHik%2Bvision&amp;p%5B%5D=facets.brand%255B%255D%3DHikvision&amp;p%5B%5D=facets.brand%255B%255D%3DHoneywell&amp;p%5B%5D=facets.brand%255B%255D%3DSAMSUNG&amp;p%5B%5D=facets.brand%255B%255D%3Dcp%2Bplus&amp;p%5B%5D=facets.brand%255B%255D%3Dhoneywell&amp;sid=igc%2Fj69%2Fagd"
                },
                {
                  "title": "Smart Door Locks",
                  "url": "/automation-robotics/smart-door-locks/pr?sid=igc,u0f&amp;p%5B%5D=facets.filter_standard%255B%255D%3D1&amp;facets.availability[]=Exclude+Out+of+Stock"
                },
                {
                  "title": "Tools &amp; Hardware",
                  "url": "/home-improvement-tools-store",
                  "type": "heading"
                },
                {
                  "title": "Hand Tools",
                  "url": "/tools-hardware/tools/hand-tools/pr?sid=amz,qrp,ez4"
                },
                {
                  "title": "Power Tools",
                  "url": "/tools-hardware/tools/power-tools/pr?sid=amz,qrp,7yd"
                },
                {
                  "title": "Gardening Tools",
                  "url": "/tools-hardware/tools/gardening-tools/pr?sid=amz,qrp,h0o"
                }
              ],
              [
                {
                  "title": "Home Decor",
                  "url": "/home-decor-store",
                  "type": "heading"
                },
                {
                  "title": "Paintings",
                  "url": "/home-decor/wall-decor-clocks/paintings/pr?sid=1m7,att,0ea"
                },
                {
                  "title": "Clocks",
                  "url": "/wall-clock-store"
                },
                {
                  "title": "Wall Shelves",
                  "url": "/home-decor/wall-decor-clocks/wall-shelves/pr?sid=1m7,att,j4u"
                },
                {
                  "title": "Wall Decals",
                  "url": "/wall-decals-store"
                },
                {
                  "title": "Showpieces",
                  "url": "/home-decor/showpiece/pr?sid=1m7,zqy"
                },
                {
                  "title": "Lighting",
                  "url": "/lighting-store",
                  "type": "heading"
                },
                {
                  "title": "Smart Lighting",
                  "url": "/automation-robotics/smart-lighting/pr?sid=igc,b4q"
                },
                {
                  "title": "LED &amp; CFL",
                  "url": "/kitchen-dining/bulbs/pr?sid=r4l,paf,m99"
                },
                {
                  "title": "Decorative Lighting &amp; Lamps",
                  "url": "/home-decor/decorative-lighting-lamps/pr?sid=1m7,sat"
                },
                {
                  "title": "Emergency Light",
                  "url": "/household/lighting/emergency-lights/pr?sid=r4l,paf,fws&otracker=categorytree"
                },
                {
                  "title": "Pet Supplies",
                  "url": "/pets-store",
                  "type": "heading"
                },
                {
                  "title": "Pedigree",
                  "url": "/search?p[]=facets.brand%255B%255D%3DPedigree&sid=n2a&otracker=CLP_filters"
                },
                {
                  "title": "Whiskas",
                  "url": "/search?p[]=facets.brand%255B%255D%3DWhiskas&sid=n2a&otracker=CLP_filters"
                }
              ],
              [
                {
                  "title": "Featured",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Gardening Store",
                  "url": "/gardening-store",
                  "type": "heading"
                },
                {
                  "title": "Bakeware store",
                  "url": "/bakeware-store",
                  "type": "heading"
                },
                {
                  "title": "Stainless Steel Store",
                  "url": "/stainless-steel-store"
                },
                {
                  "title": "Home Styler Store",
                  "url": "/home-styler-store"
                },
                {
                  "title": "Milton",
                  "url": "/search?p[]=facets.brand%255B%255D%3DMilton&sid=r4l&otracker=CLP_filters"
                },
                {
                  "title": "Bombay Dyeing",
                  "url": "/home-furnishing/bombay-dyeing~brand/pr?sid=vdm"
                },
                {
                  "title": "@home",
                  "url": "/search?p[]=facets.brand%255B%255D%3D%2540home%2Bby%2BNilkamal&amp;sid=anx&amp;otracker=CLP_filters"
                },
                {
                  "title": "Bosch",
                  "url": "/tools-hardware/bosch~brand/pr?sid=amz"
                },
                {
                  "title": "HomeTown",
                  "url": "/furniture/hometown~brand/pr?sid=anx"
                },
                {
                  "title": "Ajanta",
                  "url": "/home-decor/ajanta~brand/pr?sid=1m7"
                },
                {
                  "title": "Spaces by Welspun",
                  "url": "/home-furnishing/spaces-by-welspun~brand/pr?sid=vdm"
                },
                {
                  "title": "Prestige",
                  "url": "/household/prestige~brand/pr?sid=r4l"
                }
              ]
            ]
          }
        ]
      },
      "books-media": {
        "title": "Sports, Books & More",
        "url": "#",
        "importantLinks": [],
        "show" : false,
        "tabs": [
          {
            "title": "Categories",
            "columns": [
              [
                {
                  "title": "Books",
                  "url": "/books-store",
                  "type": "heading"
                },
                {
                  "title": "Entrance Exams",
                  "url": "/exam-preparation-books-store"
                },
                {
                  "title": "Academic",
                  "url": "/books/educational-and-professional/academic-and-professional"
                },
                {
                  "title": "Literature &amp; Fiction",
                  "url": "/books/fiction-non-fiction/literature-fiction"
                },
                {
                  "title": "Indian Writing",
                  "url": "/books/indian-writing-books/pr?sid=bks,97s"
                },
                {
                  "title": "Biographies",
                  "url": "/books/fiction-non-fiction-books/biographies-autobiographies-books/pr?sid=bks%2Cfnf%2Cd19"
                },
                {
                  "title": "Children",
                  "url": "/children-books-store"
                },
                {
                  "title": "Business",
                  "url": "/books/fiction-non-fiction-books/business-investing-and-management-books/pr?sid=bks%2Cfnf%2C22j"
                },
                {
                  "title": "Self Help",
                  "url": "/books/self-help-books/pr?sid=bks%2Ckeq"
                },
                {
                  "title": "Comics",
                  "url": "/books/comic"
                },
                {
                  "title": "Stationery",
                  "url": "",
                  "type": "heading"
                },
                {
                  "title": "Pens",
                  "url": "/pens-category-store"
                },
                {
                  "title": "Diaries",
                  "url": "/pens-office-supplies/diaries-notebook"
                },
                {
                  "title": "Key Chains",
                  "url": "/pens-stationery/office-supplies/key-chains/pr?sid=dgv,tkw,amn"
                },
                {
                  "title": "Desk Organisers",
                  "url": "/pens-office-supplies/office-supplies/desk-organizers"
                },
                {
                  "title": "Calculators ",
                  "url": "/calculators-category-store"
                }
              ],
              [
                {
                  "title": "Gaming &amp; Accessories",
                  "url": "/gaming-store",
                  "type": "heading"
                },
                {
                  "title": "PS3",
                  "url": "/games/ps3/pr?sid=tg9,oca"
                },
                {
                  "title": "PS4",
                  "url": "/games/ps4/pr?p%5B%5D=sort%3Dpopularity&amp;sid=4rr%2Ctg9%2Cweu&amp;pincode=560068&amp;filterNone=true"
                },
                {
                  "title": "Xbox One",
                  "url": "/games/pr?p[]=facets.platform%255B%255D%3DXbox%2BOne&amp;p[]=sort%3Dpopularity&amp;sid=4rr%2Ctg9"
                },
                {
                  "title": "Xbox 360",
                  "url": "/games/xbox-360/pr?p%5B%5D=sort%3Dpopularity&amp;sid=4rr%2Ctg9%2Cqds&amp;filterNone=true&amp;"
                },
                {
                  "title": "Gaming Consoles",
                  "url": "/gaming/gaming-consoles/pr?sid=4rr,x1m"
                },
                {
                  "title": "Smart Glasses(VR)",
                  "url": "/wearable-smart-devices/smart-glasses/pr?sid=ajy,tcy"
                },
                {
                  "title": "Music",
                  "url": "/music/pr?sid=p2c",
                  "type": "heading"
                },
                {
                  "title": "International Music",
                  "url": "/music/pr?p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;p%5B%5D=facets.genre%255B%255D%3DRock&amp;p%5B%5D=facets.genre%255B%255D%3DPop&amp;p%5B%5D=facets.genre%255B%255D%3DMetal&amp;p%5B%5D=facets.genre%255B%255D%3DElectronic%2BMusic&amp;p%5B%5D=facets.genre%255B%255D%3DHollywood%2BOST&amp;p%5B%5D=facets.genre%255B%255D%3DRap&amp;p%5B%5D=facets.genre%255B%255D%3DRock%252C%2BPop&amp;sid=p2c&amp;filterNone=true"
                },
                {
                  "title": "Bollywood Music",
                  "url": "/music/pr?p[]=facets.genre%255B%255D%3DBollywood%2BOST&amp;sid=p2c&amp;filterNone=true"
                },
                {
                  "title": "Movies &amp; TV Shows",
                  "url": "/movies",
                  "type": "heading"
                },
                {
                  "title": "Hollywood Movies",
                  "url": "/movies/pr?p[]=facets.language[]=English&amp;sid=4kt,3lz"
                },
                {
                  "title": "Bollywood Movies",
                  "url": "/movies/pr?p[]=facets.language[]=Hindi&amp;sid=4kt,3lz"
                },
                {
                  "title": "Musical Instruments",
                  "url": "/musical-instruments-store",
                  "type": "heading"
                }
              ],
              [
                {
                  "title": "Car &amp; Bike Accessories",
                  "url": "/car-bike-accessories-store",
                  "type": "heading"
                },
                {
                  "title": "Car Body Cover",
                  "url": "/automotive/car-bike-accessories/car-bike-care/car-bike-covers/car-body-covers/pr?sid=0hx%2Cbwd%2Cbyn%2C2pg%2Ctun"
                },
                {
                  "title": "Bike Body Cover",
                  "url": "/automotive/car-bike-accessories/car-bike-care/car-bike-covers/bike-body-covers/pr?sid=0hx%2Cbwd%2Cbyn%2C2pg%2Cbo6"
                },
                {
                  "title": "Car Air Freshener",
                  "url": "automotive/car-bike-accessories/car-bike-care/car-fresheners/pr?sid=0hx%2Cbwd%2Cbyn%2C02f"
                },
                {
                  "title": "Vehicle Washing &amp; Cleaning",
                  "url": "/automotive/car-bike-accessories/car-bike-care/vehicle-washing-cleaning/pr?sid=0hx%2Cbwd%2Cbyn%2Ct0i"
                },
                {
                  "title": "Car Sun Shade",
                  "url": "/automotive/car-bike-accessories/car-interior-exterior/car-interior/car-sun-shades/pr?sid=0hx%2Cbwd%2Cnu0%2Cxoz%2C6rq"
                },
                {
                  "title": "Car Mat",
                  "url": "/automotive/car-bike-accessories/car-interior-exterior/car-interior/car-mats/pr?sid=0hx%2Cbwd%2Cnu0%2Cxoz%2C0dh"
                },
                {
                  "title": "Car Electronics &amp; Appliances ",
                  "url": "/automotive/car-bike-accessories/car-electronics-accessories/pr?sid=0hx%2Cbwd%2Ctko",
                  "type": "heading"
                },
                {
                  "title": "Car Media Player",
                  "url": "/automotive/car-bike-accessories/car-electronics-accessories/car-audio-video/car-stereo/pr?sid=0hx%2Cbwd%2Ctko%2Cjxo%2C6ta&amp;otracker=categorytree"
                },
                {
                  "title": "Car Pressure Washer",
                  "url": "/automotive/car-bike-accessories/car-bike-care/vehicle-washing-cleaning/car-pressure-washers/pr?sid=0hx%2Cbwd%2Cbyn%2Ct0i%2Cahf"
                },
                {
                  "title": "Car Charger",
                  "url": "/automotive/car-bike-accessories/car-electronics-accessories/car-mobile-accessories/car-mobile-chargers/pr?sid=0hx%2Cbwd%2Ctko%2Cav1%2Cl7f"
                },
                {
                  "title": "Car Bluetooth Device",
                  "url": "/automotive/car-bike-accessories/car-electronics-accessories/car-audio-video/car-bluetooth-devices/pr?sid=0hx%2Cbwd%2Ctko%2Cjxo%2C1ex"
                },
                {
                  "title": "Car Vacuum Cleaner",
                  "url": "/automotive/car-bike-accessories/car-bike-care/vehicle-washing-cleaning/car-vacuum-cleaners/pr?sid=0hx%2Cbwd%2Cbyn%2Ct0i%2Cm24"
                },
                {
                  "title": "Car Refrigerator",
                  "url": "/automotive/car-bike-accessories/car-interior-exterior/car-interior/car-refrigerators/pr?sid=0hx%2Cbwd%2Cnu0%2Cxoz%2Ci1u"
                },
                {
                  "title": "Helmets &amp; Riding Gear",
                  "url": "/automotive/accessories-spare-parts/helmets-riding-gear/pr?p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&amp;sid=0hx%2Cbwd%2Cbgt",
                  "type": "heading"
                }
              ],
              [
                {
                  "title": "Sports",
                  "url": "/sports-store",
                  "type": "heading"
                },
                {
                  "title": "Cricket",
                  "url": "/sports-fitness/team-sports/cricket/pr?sid=dep,v5l,w5e"
                },
                {
                  "title": "Badminton",
                  "url": "/sports-fitness/racquet-sports/badminton/pr?sid=dep,9ge,cbh"
                },
                {
                  "title": "Football",
                  "url": "/sports-fitness/team-sports/football/pr?sid=dep,v5l,szk"
                },
                {
                  "title": "Skating",
                  "url": "/sports-fitness/other-sports/skating/pr?sid=dep,p0d,boy"
                },
                {
                  "title": "Cycling",
                  "url": "/sports-fitness/cycling/pr?sid=dep,bd3"
                },
                {
                  "title": "Camping &amp; Hiking",
                  "url": "/sports-fitness/outdoor-adventure/camping-hiking/pr?sid=dep%2Cnlv%2Cd7e&amp;filterNone=true"
                },
                {
                  "title": "Swimming",
                  "url": "/sports-fitness/swimming-kits/pr?sid=dep,p0d,xdp,yeq"
                },
                {
                  "title": "Table Tennis",
                  "url": "/sports-fitness/racquet-sports/table-tennis/pr?sid=dep,9ge,kgj"
                },
                {
                  "title": "Tennis",
                  "url": "/sports-fitness/racquet-sports/tennis/pr?sid=dep,9ge,m4z"
                },
                {
                  "title": "Exercise &amp; Fitness",
                  "url": "/fitness-store",
                  "type": "heading"
                },
                {
                  "title": "Gloves",
                  "url": "/sports-fitness/fitness-accessories/gloves/pr?sid=dep%2Cxnh%2Ch47&amp;filterNone=true"
                },
                {
                  "title": "AB Exercisers",
                  "url": "/sports-fitness/fitness-accessories/ab-exercisers/pr?sid=dep%2Cxnh%2Cabo&amp;filterNone=true"
                },
                {
                  "title": "Yoga Mats",
                  "url": "/sports-fitness/fitness-accessories/mats/pr?sid=dep,xnh,vhe"
                },
                {
                  "title": "Homegyms",
                  "url": "/sports-fitness/fitness-accessories/kits/~minimum-40/pr?otracker=clp_metro_tile3_1_FitnessAccessoriesCLP_fitness-store_ca7c86f1-76a6-4ea3-b437-0c1920dbb73a_wp1&amp;p%5B%5D=facets.brand%255B%255D%3DDock&amp;p%5B%5D=facets.brand%255B%255D%3DFITZON&amp;p%5B%5D=facets.brand%255B%255D%3DHeadly&amp;p%5B%5D=facets.brand%255B%255D%3DKRX&amp;p%5B%5D=facets.discount_range_v1%255B%255D%3D40%2525%2Bor%2BMore&amp;sid=dep%2Fxnh%2Fyeq"
                },
                {
                  "title": "Cardio Equipment",
                  "url": "/sports-fitness/fitness-accessories/cardio-equipments/pr?sid=dep%2Cxnh%2C78k"
                }
              ],
              [
                {
                  "title": "Featured",
                  "url": ""
                },
                {
                  "title": "Books on Pre-Order",
                  "url": "/books/~pre-order/pr?sid=bks"
                },
                {
                  "title": "Author in Focus",
                  "url": "/books/~author-in-focus/pr?sid=bks"
                },
                {
                  "title": "New Releases in Books",
                  "url": "/books/~new-releases-limited/pr?sid=bks"
                },
                {
                  "title": "Bestsellers in Books",
                  "url": "/something/~best-selling-books/pr?sid=bks"
                },
                {
                  "title": "Royal Enfield Accessories",
                  "url": "/royal-enfield-accessories"
                },
                {
                  "title": "Games on Pre-order",
                  "url": "/games/~pre-order/pr?sid=4rr,tg9"
                },
                {
                  "title": "Bosch Pressure Washers",
                  "url": "/automotive/car-bike-accessories/car-bike-care/vehicle-washing-cleaning/car-pressure-washers/pr?sid=0hx,bwd,byn,t0i,ahf&amp;q=bosch+pressure+washer&amp;p[]=facets.brand%255B%255D%3DBosch&amp;p[]=facets.brand%255B%255D%3DBosch%2BAccessory"
                },
                {
                  "title": "Vega Helmets",
                  "url": "/automotive/car-bike-accessories/helmets-riding-gear/helmets-locks/helmets/pr?sid=0hx%2Cbwd%2Cbgt%2Cc0x%2Cwnn&amp;p%5B%5D=facets.brand%255B%255D%3DVEGA&amp;p%5B%5D=facets.brand%255B%255D%3DVega"
                },
                {
                  "title": "Godrej Car Perfumes",
                  "url": "/automotive/car-bike-accessories/car-bike-care/car-fresheners/car-perfume/pr?p%5B%5D=facets.brand%255B%255D%3DGodrej&amp;p%5B%5D=facets.brand%255B%255D%3DGodrej%2Baer&amp;sid=0hx%2Cbwd%2Cbyn%2C02f%2C3gl"
                },
                {
                  "title": "Health &amp; Nutrition",
                  "url": "/health-category-store"
                },
                {
                  "title": "Gourmet &amp; Specialty Foods",
                  "url": "/food-nutrition/pr?sid=7jv&otracker=categorytree"
                }
              ]
            ]
          }
        ]
      },
      "offer-zone": {
        "title": "Offer Zone",
        "class": "link-offer-zone",
        "url": "/offers/deals-of-the-day?pk=dotd",
        "show" : false
      }
    }
  };

  constructor() { }

  ngOnInit() {
    this.categories=Object.getOwnPropertyNames(this.productCategories.navData);
  }

  mouseEnter(productCategory: any) {
    console.log("mouse enter : " + productCategory);
    productCategory.show = true;
  }

  mouseLeave(productCategory: any) {
    console.log('mouse leave :' + productCategory);
    productCategory.show = false;
  }

}
