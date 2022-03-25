function hackmoney (needed_money){
    //to be passed as a string for example "$1,956,458,897"
    document.getElementsByClassName('profile-invCount')[0].innerHTML = needed_money;
}
function hackcars(needed_cars){
    var x;
    var empty_spots = document.querySelectorAll(".is-empty > .garage-vehicle > .garage-vehichleImage");
    var names_complete = ["Lamborgotti Mephisto SS",
                          "Lamborgotti Mephisto",
                          "Jeepers Rubicorn 67",
                          "Portch Picante",
                          "Bantly Super Sport",
                          "The Rolls",
                          "Winston Citroen",
                          "Winston Agile",
                          "Rental Car",
                          "Mission Accomplished",
                          "Buggani Vyrus SS",
                          "Auttie B9",
                          "Nitsua Lance 722",
                          "Misoux Lion",
                          "Misoux Toad",
                          "Minnie the Cooper",
                          "Nizza 350x",
                          "One Ace",
                          "Cougar Ace",
                          "Rand Rover R/T",
                          "B-Team Van",
                          "Mercedex Bens V-20",
                          "Mercedex Bens C-64",
                          "Portch Spyder",
                          "Auttie Roadster",
                          "Bimmer M2.0",
                          "Bimmer 9.0t",
                          "Thunder bird",
                          "Rat Rod Skully",
                          "Outtie R11",
                          "The Flamerod",
                          "Valent Performo",
                          "Portch GT3 RS",
                          "Ponce de Leon",
                          "67 Shellback GT-570",
                          "Road Warrior",
                          "Linux Elise",
                          "69 Shellback RT-500",
                          "The Gator",
                          "Bastok Suprillia",
                          "The Judge",
                          "The Stallion 67",
                          "The Macro",
                          "The Fastback",
                          "The Covenant",
                          "The Trifecta",
                          "8 Bit Racer",
                          "Mini Sherman",
                          "Typiano Pizza Car",
                          "Rocket Man 2",
                          "All Terrain Vehicle",
                          "MP 427",
                          "Wambulance",
                          "Hotdog Mobile",
                          "F-35 JSF",
                          "NASA Shuttle",
                          "Caterham Racer",
                          "Mack Daddy 56",
                          "Big Hauler",
                          "Big Blue",
                          "Fort GT40",
                          "Dom Vipper GST-R",
                          "Alpha Romero 8Ω",
                          "Blazing Buggy",
                          "F4U Corsair",
                          "Rocket Sleigh",
                          "XMaxx Tree Racer",
                          "Shadow XMaxx Tree",
                          "Party Sleigh",
                          "Zonday Tricolore",
                          "The Monster",
                          "Flux Capacitor",
                          "The Gotham",
                          "The Pirc",
                          "Suziki GXRS 1200",
                          "EZ Rider",
                          "Lamborgotti AdventX",
                          "Summer Classic",
                          "Hang Ten",
                          "41 Woodie Deluxx",
                          "Hang Eleven",
                          "41 Woodie Sunshine",
                          "The Xcelsior V12",
                          "68 Roadtripper",
                          "Hang Fifteen",
                          "Wach 6",
                          "Fort F-125",
                          "Wisker Electric",
                          "67 Vette",
                          "MSG 01",
                          "Fort Stallion",
                          "Police Bimmer",
                          "Auttie R-8.1",
                          "Wampus",
                          "Pumpkin Hauler",
                          "Wreath Racer",
                          "Santa's Buggy",
                          "Travis' Car",
                          "Dark Elf",
                          "The Golden Gift",
                          "Corndog's Car",
                          "14 Mantaray",
                          "Ferreti Samsher 458",
                          "Lacan Hypersport",
                          "Sun Buggie",
                          "Hammer Wheels",
                          "Kringle 4000",
                          "Buddy's Snowmobile",
                          "Kringle 4000 XL",
                          "Buddy's Snowmorocket",
                          "Six Four",
                          "Six Four Plus Three",
                          "The Midnight Hauler",
                          "The Candy Hauler",
                          "Kringle 5000",
                          "Wrapped Wracer",
                          "Wrapped Wracer GT",
                          "Holiday Hero",
                          "Kringle 5000 L.T.",
                          "Mercedex McLaro SLR",
                          "Floaty Blue",
                          "B.O.A.T.",
                          "I'm Spicy!",
                          "Y.A.C.H.T.",
                          "Mercedex McLaro SLR 12.5",
                          "Nitr-o'-Lantern",
                          "Nitr-o'-the-Wisp",
                          "XMaxx Xxpress",
                          "XMaxx Xxpress XXL",
                          "Gilded Xxpress",
                          "Lamborgotti XMaxx LT",
                          "Lamborgotti Xmaxx LT-C",
                          "Mercedex McLaro SHS 15.0",
                          "Strykist 1300",
                          "Range Runner",
                          "Strykist 1300 XT-LR",
                          "Track-o'-Lantern",
                          "Gingerbread Racer",
                          "Gingerbread Racer H&T",
                          "Missile Toe",
                          "Missile Toe H&T",
                          "The Dark Chocolate Knight",
                          "Teggsla",
                          "Egg Beater",
                          "Eggcedes",
                          "Egg Hauler",
                          "Mercedex GT 20.0",
                          "Rocky Roo",
                          "NitroPAC",
                          "Matchbox",
                          "Lucky Number 7",
                          "Easy Breezy",
                          "HoverJet 5000 Mk. 3",
                          "Golden Breeze",
                          "B.U.S.",
                          "S'cool B.U.S.",
                          "AU-79",
                          "The Underachiever",
                          "The Overachiever",
                          "The Wildflower",
                          "Jolly RS",
                          "Jolly GTX LG",
                          "The Goldray",
                          "can hav nt g0ld plx?",
                          "The Wraptor",
                          "Travis' Truck",
                          "The Wraptor GG",
                          "The Silent Knight",
                          "NT Gold",
                          "Lamborgotti Tiesto",
                          "Portch Cobalt",
                          "Alpha Romero 123Ω",
                          "Travis' Big Truck",
                          "Bright Idea",
                          "Sandstorm",
                          "The Jury",
                          "The Goldfish",
                          "Shock Value",
                          "Gold Standard",
                          "Solar Roller",
                          "H2GO",
                          "The DevasTater",
                          "Creepy Crawler",
                          "The Goblin",
                          "Something Wicked",
                          "Frosted Roller",
                          "Gingerbread GT",
                          "Holiday Heat",
                          "Cold Snap",
                          "The Snowy Knight",
                          "The Rocket Klaus",
                          "Golden Ticket",
                          "Wavebreaker",
                          "Broadwing",
                          "Bimmer Prism i20",
                          "Heartbreaker",
                          "The Danger 9",
                          "The Wild 500",
                          "Tigreen",
                          "X1 Eclipse",
                          "Error 500",
                          "Vapor",
                          "9 Bit Racer",
                          "Chompus' Wild Ride",
                          "Whiplash XS",
                          "The Hydro Planer",
                          "Timber Speeder",
                          "Wampus' Waffle Wagon",
                          "Webmobile Spider",
                          "Rand Rover Evar",
                          "SpaceZ Crew Draco",
                          "MacLaro Sienna",
                          "Calculatron"];


    var images_complete = ["https://www.nitrotype.com/cars/1_large_1.png",
                           "https://www.nitrotype.com/cars/2_large_1.png",
                           "https://www.nitrotype.com/cars/3_large_1.png",
                           "https://www.nitrotype.com/cars/4_large_1.png",
                           "https://www.nitrotype.com/cars/5_large_1.png",
                           "https://www.nitrotype.com/cars/6_large_1.png",
                           "https://www.nitrotype.com/cars/7_large_1.png",
                           "https://www.nitrotype.com/cars/8_large_1.png",
                           "https://www.nitrotype.com/cars/9_large_1.png",
                           "https://www.nitrotype.com/cars/10_large_1.png",
                           "https://www.nitrotype.com/cars/11_large_1.png",
                           "https://www.nitrotype.com/cars/13_large_1.png",
                           "https://www.nitrotype.com/cars/14_large_1.png",
                           "https://www.nitrotype.com/cars/15_large_1.png",
                           "https://www.nitrotype.com/cars/16_large_1.png",
                           "https://www.nitrotype.com/cars/17_large_1.png",
                           "https://www.nitrotype.com/cars/18_large_1.png",
                           "https://www.nitrotype.com/cars/19_large_1.png",
                           "https://www.nitrotype.com/cars/20_large_1.png",
                           "https://www.nitrotype.com/cars/21_large_1.png",
                           "https://www.nitrotype.com/cars/22_large_1.png",
                           "https://www.nitrotype.com/cars/23_large_1.png",
                           "https://www.nitrotype.com/cars/24_large_1.png",
                           "https://www.nitrotype.com/cars/25_large_1.png",
                           "https://www.nitrotype.com/cars/26_large_1.png",
                           "https://www.nitrotype.com/cars/27_large_1.png",
                           "https://www.nitrotype.com/cars/28_large_1.png",
                           "https://www.nitrotype.com/cars/29_large_1.png",
                           "https://www.nitrotype.com/cars/30_large_1.png",
                           "https://www.nitrotype.com/cars/31_large_1.png",
                           "https://www.nitrotype.com/cars/33_large_1.png",
                           "https://www.nitrotype.com/cars/34_large_1.png",
                           "https://www.nitrotype.com/cars/35_large_1.png",
                           "https://www.nitrotype.com/cars/36_large_1.png",
                           "https://www.nitrotype.com/cars/37_large_1.png",
                           "https://www.nitrotype.com/cars/38_large_1.png",
                           "https://www.nitrotype.com/cars/39_large_1.png",
                           "https://www.nitrotype.com/cars/40_large_1.png",
                           "https://www.nitrotype.com/cars/42_large_1.png",
                           "https://www.nitrotype.com/cars/43_large_1.png",
                           "https://www.nitrotype.com/cars/44_large_1.png",
                           "https://www.nitrotype.com/cars/45_large_1.png",
                           "https://www.nitrotype.com/cars/46_large_1.png",
                           "https://www.nitrotype.com/cars/47_large_1.png",
                           "https://www.nitrotype.com/cars/48_large_1.png",
                           "https://www.nitrotype.com/cars/49_large_1.png",
                           "https://www.nitrotype.com/cars/50_large_1.png",
                           "https://www.nitrotype.com/cars/51_large_1.png",
                           "https://www.nitrotype.com/cars/52_large_1.png",
                           "https://www.nitrotype.com/cars/53_large_1.png",
                           "https://www.nitrotype.com/cars/54_large_1.png",
                           "https://www.nitrotype.com/cars/55_large_1.png",
                           "https://www.nitrotype.com/cars/56_large_1.png",
                           "https://www.nitrotype.com/cars/57_large_1.png",
                           "https://www.nitrotype.com/cars/58_large_1.png",
                           "https://www.nitrotype.com/cars/59_large_1.png",
                           "https://www.nitrotype.com/cars/60_large_1.png",
                           "https://www.nitrotype.com/cars/61_large_1.png",
                           "https://www.nitrotype.com/cars/62_large_1.png",
                           "https://www.nitrotype.com/cars/63_large_1.png",
                           "https://www.nitrotype.com/cars/64_large_1.png",
                           "https://www.nitrotype.com/cars/65_large_1.png",
                           "https://www.nitrotype.com/cars/66_large_1.png",
                           "https://www.nitrotype.com/cars/67_large_1.png",
                           "https://www.nitrotype.com/cars/68_large_1.png",
                           "https://www.nitrotype.com/cars/69_large_1.png",
                           "https://www.nitrotype.com/cars/70_large_1.png",
                           "https://www.nitrotype.com/cars/71_large_1.png",
                           "https://www.nitrotype.com/cars/72_large_1.png",
                           "https://www.nitrotype.com/cars/73_large_1.png",
                           "https://www.nitrotype.com/cars/74_large_1.png",
                           "https://www.nitrotype.com/cars/75_large_1.png",
                           "https://www.nitrotype.com/cars/76_large_1.png",
                           "https://www.nitrotype.com/cars/77_large_1.png",
                           "https://www.nitrotype.com/cars/78_large_1.png",
                           "https://www.nitrotype.com/cars/79_large_1.png",
                           "https://www.nitrotype.com/cars/80_large_1.png",
                           "https://www.nitrotype.com/cars/81_large_1.png",
                           "https://www.nitrotype.com/cars/82_large_1.png",
                           "https://www.nitrotype.com/cars/83_large_1.png",
                           "https://www.nitrotype.com/cars/84_large_1.png",
                           "https://www.nitrotype.com/cars/85_large_1.png",
                           "https://www.nitrotype.com/cars/86_large_1.png",
                           "https://www.nitrotype.com/cars/87_large_1.png",
                           "https://www.nitrotype.com/cars/88_large_1.png",
                           "https://www.nitrotype.com/cars/89_large_1.png",
                           "https://www.nitrotype.com/cars/90_large_1.png",
                           "https://www.nitrotype.com/cars/91_large_1.png",
                           "https://www.nitrotype.com/cars/92_large_1.png",
                           "https://www.nitrotype.com/cars/93_large_1.png",
                           "https://www.nitrotype.com/cars/94_large_1.png",
                           "https://www.nitrotype.com/cars/95_large_1.png",
                           "https://www.nitrotype.com/cars/96_large_1.png",
                           "https://www.nitrotype.com/cars/97_large_1.png",
                           "https://www.nitrotype.com/cars/98_large_1.png",
                           "https://www.nitrotype.com/cars/99_large_1.png",
                           "https://www.nitrotype.com/cars/100_large_1.png",
                           "https://www.nitrotype.com/cars/101_large_1.png",
                           "https://www.nitrotype.com/cars/102_large_1.png",
                           "https://www.nitrotype.com/cars/103_large_1.png",
                           "https://www.nitrotype.com/cars/104_large_1.png",
                           "https://www.nitrotype.com/cars/105_large_1.png",
                           "https://www.nitrotype.com/cars/106_large_1.png",
                           "https://www.nitrotype.com/cars/107_large_1.png",
                           "https://www.nitrotype.com/cars/109_large_1.png",
                           "https://www.nitrotype.com/cars/110_large_1.png",
                           "https://www.nitrotype.com/cars/111_large_1.png",
                           "https://www.nitrotype.com/cars/112_large_1.png",
                           "https://www.nitrotype.com/cars/113_large_1.png",
                           "https://www.nitrotype.com/cars/114_large_1.png",
                           "https://www.nitrotype.com/cars/115_large_1.png",
                           "https://www.nitrotype.com/cars/116_large_1.png",
                           "https://www.nitrotype.com/cars/117_large_1.png",
                           "https://www.nitrotype.com/cars/118_large_1.png",
                           "https://www.nitrotype.com/cars/119_large_1.png",
                           "https://www.nitrotype.com/cars/120_large_1.png",
                           "https://www.nitrotype.com/cars/121_large_1.png",
                           "https://www.nitrotype.com/cars/122_large_1.png",
                           "https://www.nitrotype.com/cars/123_large_1.png",
                           "https://www.nitrotype.com/cars/124_large_1.png",
                           "https://www.nitrotype.com/cars/125_large_1.png",
                           "https://www.nitrotype.com/cars/126_large_1.png",
                           "https://www.nitrotype.com/cars/127_large_1.png",
                           "https://www.nitrotype.com/cars/128_large_1.png",
                           "https://www.nitrotype.com/cars/129_large_1.png",
                           "https://www.nitrotype.com/cars/130_large_1.png",
                           "https://www.nitrotype.com/cars/131_large_1.png",
                           "https://www.nitrotype.com/cars/132_large_1.png",
                           "https://www.nitrotype.com/cars/133_large_1.png",
                           "https://www.nitrotype.com/cars/134_large_1.png",
                           "https://www.nitrotype.com/cars/135_large_1.png",
                           "https://www.nitrotype.com/cars/136_large_1.png",
                           "https://www.nitrotype.com/cars/137_large_1.png",
                           "https://www.nitrotype.com/cars/138_large_1.png",
                           "https://www.nitrotype.com/cars/139_large_1.png",
                           "https://www.nitrotype.com/cars/140_large_1.png",
                           "https://www.nitrotype.com/cars/141_large_1.png",
                           "https://www.nitrotype.com/cars/142_large_1.png",
                           "https://www.nitrotype.com/cars/143_large_1.png",
                           "https://www.nitrotype.com/cars/144_large_1.png",
                           "https://www.nitrotype.com/cars/145_large_1.png",
                           "https://www.nitrotype.com/cars/146_large_1.png",
                           "https://www.nitrotype.com/cars/149_large_1.png",
                           "https://www.nitrotype.com/cars/150_large_1.png",
                           "https://www.nitrotype.com/cars/151_large_1.png",
                           "https://www.nitrotype.com/cars/152_large_1.png",
                           "https://www.nitrotype.com/cars/153_large_1.png",
                           "https://www.nitrotype.com/cars/154_large_1.png",
                           "https://www.nitrotype.com/cars/155_large_1.png",
                           "https://www.nitrotype.com/cars/156_large_1.png",
                           "https://www.nitrotype.com/cars/157_large_1.png",
                           "https://www.nitrotype.com/cars/158_large_1.png",
                           "https://www.nitrotype.com/cars/159_large_1.png",
                           "https://www.nitrotype.com/cars/160_large_1.png",
                           "https://www.nitrotype.com/cars/161_large_1.png",
                           "https://www.nitrotype.com/cars/162_large_1.png",
                           "https://www.nitrotype.com/cars/163_large_1.png",
                           "https://www.nitrotype.com/cars/164_large_1.png",
                           "https://www.nitrotype.com/cars/165_large_1.png",
                           "https://www.nitrotype.com/cars/166_large_1.png",
                           "https://www.nitrotype.com/cars/167_large_1.png",
                           "https://www.nitrotype.com/cars/168_large_1.png",
                           "https://www.nitrotype.com/cars/169_large_1.png",
                           "https://www.nitrotype.com/cars/170_large_1.png",
                           "https://www.nitrotype.com/cars/171_large_1.png",
                           "https://www.nitrotype.com/cars/172_large_1.png",
                           "https://www.nitrotype.com/cars/173_large_1.png",
                           "https://www.nitrotype.com/cars/174_large_1.png",
                           "https://www.nitrotype.com/cars/175_large_1.png",
                           "https://www.nitrotype.com/cars/176_large_1.png",
                           "https://www.nitrotype.com/cars/177_large_1.png",
                           "https://www.nitrotype.com/cars/178_large_1.png",
                           "https://www.nitrotype.com/cars/179_large_1.png",
                           "https://www.nitrotype.com/cars/180_large_1.png",
                           "https://www.nitrotype.com/cars/181_large_1.png",
                           "https://www.nitrotype.com/cars/182_large_1.png",
                           "https://www.nitrotype.com/cars/183_large_1.png",
                           "https://www.nitrotype.com/cars/184_large_1.png",
                           "https://www.nitrotype.com/cars/185_large_1.png",
                           "https://www.nitrotype.com/cars/186_large_1.png",
                           "https://www.nitrotype.com/cars/187_large_1.png",
                           "https://www.nitrotype.com/cars/188_large_1.png",
                           "https://www.nitrotype.com/cars/189_large_1.png",
                           "https://www.nitrotype.com/cars/190_large_1.png",
                           "https://www.nitrotype.com/cars/191_large_1.png",
                           "https://www.nitrotype.com/cars/192_large_1.png",
                           "https://www.nitrotype.com/cars/193_large_1.png",
                           "https://www.nitrotype.com/cars/194_large_1.png",
                           "https://www.nitrotype.com/cars/195_large_1.png",
                           "https://www.nitrotype.com/cars/196_large_1.png",
                           "https://www.nitrotype.com/cars/197_large_1.png",
                           "https://www.nitrotype.com/cars/198_large_1.png",
                           "https://www.nitrotype.com/cars/199_large_1.png",
                           "https://www.nitrotype.com/cars/200_large_1.png",
                           "https://www.nitrotype.com/cars/201_large_1.png",
                           "https://www.nitrotype.com/cars/202_large_1.png",
                           "https://www.nitrotype.com/cars/203_large_1.png",
                           "https://www.nitrotype.com/cars/204_large_1.png",
                           "https://www.nitrotype.com/cars/205_large_1.png",
                           "https://www.nitrotype.com/cars/206_large_1.png",
                           "https://www.nitrotype.com/cars/207_large_1.png",
                           "https://www.nitrotype.com/cars/208_large_1.png",
                           "https://www.nitrotype.com/cars/209_large_1.png",
                           "https://www.nitrotype.com/cars/210_large_1.png",
                           "https://www.nitrotype.com/cars/211_large_1.png",
                           "https://www.nitrotype.com/cars/212_large_1.png",
                           "https://www.nitrotype.com/cars/213_large_1.png",
                           "https://www.nitrotype.com/cars/214_large_1.png",
                           "https://www.nitrotype.com/cars/215_large_1.png",
                           "https://www.nitrotype.com/cars/216_large_1.png",
                           "https://www.nitrotype.com/cars/217_large_1.png",
                           "https://www.nitrotype.com/cars/218_large_1.png",
                           "https://www.nitrotype.com/cars/219_large_1.png"
                          ];
    var images = new Array;
    var names = new Array;
    var y;
    var z = names_complete.length;

    for(x=0; x<needed_cars.length; x++){
        for(y=0; y<z; y++){
            if(needed_cars[x]-1 == y){
                names[x] = names_complete[y];
                images[x] = images_complete[y];
            }
        }
    }
    var mkAct = document.querySelectorAll(".is-empty");

    var current_image = document.querySelector('.profile-car');

    var audio = new Audio('https://www.nitrotype.com/dist/site/misc/sounds/global/ogg/swoosh.ogg');
    audio.volume = 0.5;
    var start = setTimeout(delay, 100)
    function delay(){
        for(let r =0;r<images.length;r++){
            empty_spots[r].setAttribute('data-tip', names[r]);
            mkAct[r].addEventListener('click', function(){
                audio.play();
                setTimeout(function(){
                    current_image.src = images[r];
                    document.querySelector(".profile-carInterior > .mtm").innerHTML = names[r];
                }, 500);

                setTimeout(function(){
                    current_image.classList.add("is-exiting");
                    current_image.classList.remove("is-entering");
                }, 200)
                setTimeout(function(){
                    current_image.classList.add("is-entering");
                    current_image.classList.remove("is-exiting");
                }, 500)

            })
        }
    }


    var smallImage = images.map( a => a.replace("large","small") );
    for (let i = 0; i < images.length; i++){
        empty_spots[i].style.backgroundImage = "url(" + smallImage[i] + ")";

        setTimeout(function(){

            mkAct[i].classList.remove("is-empty");
            var garage = document.querySelector(".garage");
            var btns = garage.getElementsByClassName("garage-spot");
            for (let i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function() {
                    var current = document.getElementsByClassName("is-active");
                    if (current.length > 0) {
                        current[0].className = current[0].className.replace(" is-active", "");
                    }
                    this.className += " is-active";
                });
            }
        }, 1000)
    }

}
