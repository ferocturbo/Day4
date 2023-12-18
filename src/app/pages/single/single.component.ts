import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
[x: string]: any;

  districts:any=[
    {
      id:1,
      title:"Thiruvanathapuram",
      paragraph:"Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries",
      // content:"Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It's distinguished by its British colonial architecture and many art galleries. It’s also home to Kuthira Malika (or Puthen Malika) Palace, adorned with carved horses and displaying collections related to the Travancore royal family, whose regional capital was here from the 18th–20th centuries",
      image1:"https://media.istockphoto.com/id/113553219/photo/trivandrum-temple-kerala-india.jpg?b=1&s=612x612&w=0&k=20&c=WhJzjJiCLzqDOye7gF95q5K4DgkobjP40xWdnvTp4Qc=",
      image2:"https://media.istockphoto.com/id/1141255604/photo/varkala-beach-kerala-india.jpg?b=1&s=612x612&w=0&k=20&c=WOiCdh6szzM4Tcu8QbWVjZz-1pvvbhEPp3I276KYK-Q=",
      image3:"https://media.istockphoto.com/id/172276644/photo/old-palace.jpg?b=1&s=612x612&w=0&k=20&c=W9M4wkxALr74ZcuPCtckikbsmjCZ2Lothj47vwL3-RU=",
      image4:"https://media.istockphoto.com/id/1488306707/photo/tranquil-landscape.jpg?b=1&s=612x612&w=0&k=20&c=82_aMh2SFhPph5IlIKRLCVekQykPnAMLYXVYC7gedqg="
    },
      
      
    
    {
      id:2,
      title:"Kollam",
      paragraph:"Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram. Sardar Vallabhbhai Patel Police Museum has artifacts tracing the history of the police force. Nearby, Ashtamudi Lake is a gateway to the Kerala backwaters, a network of waterways rich with vegetation. The striped 1902 Tangasseri Lighthouse has ocean views. ",
      image1:"https://www.tourmyindia.com/states/kerala/images/Thangassery-Kollam-3.jpg",
      image2:"https://img.youtube.com/vi/srB72eE4ncA/0.jpg",
      image3:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9c/f4/af/worlds-largest-bird-sculpture.jpg?w=500&h=400&s=1",
      image4:"https://s3.ap-south-1.amazonaws.com/zo-media/blog_photo/071_Varkala_10.jpg"
    },
    {
      id:3,
      title:"Kottayam",
      paragraph:"Kottayam is a city in the Indian state of Kerala, flanked by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. It is the district headquarters of Kottayam district, located in south-west Kerala",
      image1:"https://t4.ftcdn.net/jpg/03/36/40/81/240_F_336408183_doRhEuujVls7Bc7iYkCSXmYRFYw669MZ.jpg",
      image2:"https://www.keralatourism.org/images/picture/large/Marmala_Stream_Kottayam_2497.jpg",
      image3:"https://t4.ftcdn.net/jpg/01/68/20/29/240_F_168202928_a8xYQV7Rh4omA7XMEw4pn1fXig4BhgT7.jpg",
      image4:"https://t4.ftcdn.net/jpg/02/33/74/41/240_F_233744126_ShLIsWFTlscUacWdslY6QAiW3hnfErRX.jpg"
    },
    {
      id:4,
      title:"Alappuzha",
      paragraph:"Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design. Punnamada Lake's snake boat races are a well-known annual event",
      image1:"https://t3.ftcdn.net/jpg/04/16/47/50/240_F_416475099_HfSR4WVUAD6aNPDwTVnx9ufkNhoGJjwQ.jpg",
      image2:"https://t4.ftcdn.net/jpg/01/03/02/51/240_F_103025125_yYtusimWpQ7HsLvbD9zpdfiMfS6e1Pmq.jpg",
      image3:"https://t4.ftcdn.net/jpg/04/13/07/53/240_F_413075302_3gWyEQrVrI9GGxHAxicyAs5CYuftcSoW.jpg",
      image4:"https://t4.ftcdn.net/jpg/01/03/02/65/240_F_103026589_3acqPQOHKZrlJfsbuYmC4QXDUtFPdvvX.jpg"
    },
    {
      id:5,
      title:"kannur",
      paragraph:"Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. Enduring monuments such as 16th-century St. Angelo Fort, once occupied by European colonial forces, show the city’s significant role in the spice trade. Housed in a former palace, the Arakkal Museum highlights Kerala's one Muslim royal family. The palm-fringed sands of Payyambalam Beach run along Kannur’s western shore. ",
      image1:"https://media.istockphoto.com/id/1145652944/photo/thottada-sandy-beach-and-palm-trees-at-sunset-kannur-kerala-india.jpg?b=1&s=612x612&w=0&k=20&c=8y3d4W5TnAFgsW6tAhGajTsi4VfHn9R-v1CTbEmEsrs=",
      image2:"https://t3.ftcdn.net/jpg/05/61/49/22/240_F_561492215_UrL7jG9psCdmhW9ihVtCRhkylE4G9JhT.jpg",
      image3:"https://media.istockphoto.com/id/1169519770/photo/st-angelo-fort-bastion-kannur-kerala-india.jpg?b=1&s=612x612&w=0&k=20&c=1BWm6tmMxwHPLVuaaGoTUVThH-rOI_mwewc28tN5WS4=",
      image4:"https://t4.ftcdn.net/jpg/06/07/16/55/240_F_607165597_U0JwLowAwTrrI4gKRqP9hU2S7D4oWRoF.jpg"
    },
    {
      id:6,
      title:"Kasargod",
      paragraph:"Kasaragod is a municipal town and administrative headquarters of Kasaragod district in the state of Kerala, India. Established in 1966, Kasaragod was the first municipal town in the district. It is the northernmost district of Kerala and is also known as Sapta Bhasha Sangama Bhumi",
      image1:"https://media.istockphoto.com/id/1219389252/photo/stone-walls-of-the-bekal-fort-in-kasargod-kerala-india.jpg?b=1&s=612x612&w=0&k=20&c=TKFqUEIkIifA5XOXu4B8XAloNIMoiSA_6GZon2wIWBw=",
      image2:"https://t4.ftcdn.net/jpg/04/48/09/13/240_F_448091384_0r7eUvJShBLhKDh0sBFr4bA6Ao15xDj4.jpg",
      image3:"https://t3.ftcdn.net/jpg/02/63/42/56/240_F_263425657_yWV2lCLXlcOApxizd7j4WmsfqbMDamCP.jpg",
      image4:"https://t4.ftcdn.net/jpg/03/73/08/71/240_F_373087147_66WRepJaqrPFdZ7Cn4wdIy4AnLKvU5RQ.jpg"
    },
    {
      id:7,
      title:"wayanad",
      paragraph:"Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets. In the Ambukuthi Hills to the south, Edakkal Caves contain ancient petroglyphs, some dating back to the Neolithic age.",
      image1:"https://media.istockphoto.com/id/908155136/photo/forest.jpg?b=1&s=612x612&w=0&k=20&c=C6r4vlYc4ZBUljmkEUwOK4gELxPSBqgbjXulsjkeTJA=",
      image2:"https://img.paisawapas.com/ovz3vew9pw/2023/03/21154142/image-1-7.jpg",
      image3:"https://t3.ftcdn.net/jpg/01/91/64/70/240_F_191647000_IVjCWioGhTV6i4nUd01BNPSKLvsYpARx.jpg",
      image4:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/332750617.jpg?k=7a0cdce054dabb61f2a5bc082e21a4a85374b58c049f0109c345e7068ca93e55&o=&hp=1"
    },
    {
      id:8,
      title:"Ernakulam",
      paragraph:"Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises. The Kerala Folklore and Hill Palace museums explore local heritage through art and antiquities. Shops along Broadway and on MG Road sell fabrics, crafts, and spices, while modern Lulu Mall also has a cinema and an ice rink. Simple eateries serve Keralan specialties and South Indian seafood",
      image1:"https://media.istockphoto.com/id/179466687/photo/lovely-portrait-of-the-santa-cruz-basilica.jpg?s=612x612&w=0&k=20&c=a40cZtnjmAYg5vxKIDOsUL_GoOuFTnjC6iXvuVlWRW8=",
      image2:"https://media.istockphoto.com/id/492679209/photo/chinese-fishing-net.jpg?s=612x612&w=0&k=20&c=_N-TOONZsLcxL44Q-Q3fyiho6qg6zzjTbXSGTvc9I1M=",
      image3:"https://media.istockphoto.com/id/920701570/photo/kochi-metro-train.jpg?s=612x612&w=0&k=20&c=McOSl27QYDe_LcDc7Getg2AoaVY88eHSlEpVbRn3OyI=",
      image4:"https://media.istockphoto.com/id/153699683/photo/sunset-at-marine-drive-street-cochi-kerala-india.jpg?s=612x612&w=0&k=20&c=ztPx1nPWoVsWGlHYbZSAAw-aYWuNzcfuMYeIAsFV6EM="
    },
    {
      id:9,
      title:"Pathanamthitta",
      paragraph:"Pathanamthitta, is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km². It is the administrative capital of Pathanamthitta district. The town has a population of 37,538",
      image1:"https://media.istockphoto.com/id/1389351115/photo/kerala-bowl-boat-ride-experiance-in-konni.jpg?s=612x612&w=0&k=20&c=vzbYlx17_wH7AMYUnwZZHRvNfyyvU_mOWfjPrnZA4Ns=",
      image2:"https://media.istockphoto.com/id/953461920/photo/landscape-and-rice-terraces-near-sapa-vietnam.jpg?s=612x612&w=0&k=20&c=ITEsEQ9eKUerPkKnwJ67bV2nLOS8rJ6ShaKOdVLe2bY=",
      image3:"https://media.istockphoto.com/id/691099014/photo/gray-langurs-or-hanuman-langurs.jpg?s=612x612&w=0&k=20&c=H-yXClHFeeSK-4k5V83mkMvaNKIoXckXlMHk2SQxi04=",
      image4:"https://www.honeymoontourskerala.com/wp-content/uploads/2016/09/p1-1.gif"
    },
    {
      id:10,
      title:"kozhikode",
      paragraph:"Kozhikode is a coastal city in the south Indian state of Kerala. It was a significant spice trade center and is close to Kappad Beach, where Portuguese explorer Vasco da Gama landed in 1498. The central Kozhikode Beach, overlooked by an old lighthouse, is a popular spot for watching the sunset. Inland, tree-lined Mananchira Square, with its musical fountain, surrounds the massive Mananchira Tank, an artificial pond",
      image1:"https://media.istockphoto.com/id/917807106/photo/silhouettes-of-sea-piers-during-sunset-in-calicut.jpg?s=612x612&w=0&k=20&c=GfbwHr0H_7kFe8-BMrwaqqLS_I8T1X-kpehBrB6crXQ=",
      image2:"https://media.istockphoto.com/id/1373274957/photo/breathtaking-summer-sunrise-view.jpg?b=1&s=612x612&w=0&k=20&c=gJ7ArsAyhaeYoP0csam_FJ-klzCPieZs6q_UzstexsA=",
      image3:"https://media.istockphoto.com/id/1248775915/photo/a-street-vendor-seling-street-food-in-kozhikode-beach-in-kerala-india-at-night.jpg?s=612x612&w=0&k=20&c=S2krzdMldEauztdIwgeMlYvaHZ4XbQxjL3Hn79Szfuk=",
      image4:"https://media.istockphoto.com/id/1051068880/photo/kozhikode-halwa-with-dried-fruit-and-nuts.jpg?s=612x612&w=0&k=20&c=4EBMmZZko6LXRuyp-mC6IzFnOXk9eP8hSlj85VxKflI="
    },
    {
      id:11,
      title:"Palakkad",
      paragraph:"Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival. Northeast, near Malampuzha Dam, the town of Malampuzha has a rock garden created from recycled materials",
      image1:"https://media.istockphoto.com/id/1736513214/photo/kollengode-palakkad-a-border-village-in-palakkad-district-kerala.jpg?b=1&s=612x612&w=0&k=20&c=RIPAVTDf7a8kUyjPnRBhqCE1f_Gh1w9TgmEsTx9TdyU=",
      image2:"https://www.trawell.in/admin/images/upload/148645431SilentValleyPark_Main.jpg",
      image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxGxRTbhPPp1GeijrFQULojk_we5rpl21zg&usqp=CAU",
      image4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3f_NcOgtr-31wv6YhFM9ZCsccIiAS2yTIA&usqp=CAU"
    },
    {
      id:12,
      title:"Thirissur",
      paragraph:"Thrissur is a city in the south Indian state of Kerala. It's known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals. The ornate, Indo-Gothic Our Lady of Dolours Basilica is nearby. To the north, Thiruvambady Temple is home to several elephants. Sakthan Thampuran Palace houses an archaeology museum with bronze statues and ancient coins. ",
      image1:"https://media.istockphoto.com/id/681122676/photo/indian-elephant-pageant.jpg?s=612x612&w=0&k=20&c=j9I9Y_wqoW0R4skjwFkJWOM6qzVlfGJnitCVPcE19Do=",
      image2:"https://media.istockphoto.com/id/1183080007/photo/pooram.jpg?s=612x612&w=0&k=20&c=x0-FedLhtb7abBgNQb_m4NmjYhsz2nZ2ADQewNBjP5o=",
      image3:"https://media.istockphoto.com/id/1280766110/photo/wterfall-at-western-ghat-forest-from-different-angle-at-morning.jpg?s=612x612&w=0&k=20&c=-5J6ZoEW0EC3Zyx3fWkFYhW6Ly7qYbNU_ZIJSg1VvgI=",
      image4:"https://media.istockphoto.com/id/849238228/photo/tiger-dance-of-kerala.jpg?s=612x612&w=0&k=20&c=UhmxsSLZBa8bBp8yFD1-AM5pcGiLXq8dSk25Z8X68VA="
    },
    {
      id:13,
      title:"Malappuram",
      paragraph:"Malappuram is a city and the headquarters of the Malappuram district in Kerala, India. It is the 4th largest urban agglomeration in Kerala and the 20th largest in India and a city in the Indian state of Kerala, spread over an area of 158.20 km² including the surrounding suburban areas",
      image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLm7biEgdB-QQdxQAaA_Hzp-zavRXw21kngEyzFzqSIovkpQzyBzgIUGhjQ_cSUDrwEk&usqp=CAU",
      image2:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0c/41/2a/8d/cheruppadimala.jpg",
      image3:"https://english.mathrubhumi.com/image/contentid/policy:1.7274219:1645260977/Paloor%20Kotta%20(1).jpg?$p=f928505&f=16x9&w=1080&q=0.8",
      image4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDN4cBm2xVfmGDpY5guYemAvgbWe00yOIIZA&usqp=CAU"
    },
    {
      id:14,
      title:"Idukki",
      paragraph:"Idukki district is a densely forested, mountainous region in the south Indian state of Kerala. In the north, Anamudi mountain towers over Eravikulam National Park, where the rare, blue Neelakurinji flower blooms every 12 years. Nearby, Munnar is a hill station known for its sprawling tea plantations and Tea Museum. Farther south is the vast, curved Idukki Dam and Periyar National Park, a tiger and elephant reserve. ",
      image1:"https://images.pexels.com/photos/13691356/pexels-photo-13691356.jpeg?auto=compress&cs=tinysrgb&w=600",
      image2:"https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B-e1534139417729.jpg",
      image3:"https://media.istockphoto.com/id/1311846127/photo/elephant-family-in-wild-nature-walking-near-the-forest.jpg?s=612x612&w=0&k=20&c=5nFgfY0PIBcQhqXf3DLUJBMS8zVN6AKBFUHJoAIjQWk=",
      image4:"https://media.istockphoto.com/id/977691020/photo/sekumpul-waterfalls-in-jungles-on-bali-island-indonesia.jpg?s=612x612&w=0&k=20&c=IkZp2YQ_rnmH4ytZbjYJ6UKbeVs20NSLyjArzZMXg1I=",
      
    },
    

    
    
    
    

  ];

  constructor(public route: ActivatedRoute){

  }

  ngOnInit(){
    this.getDetails();

  }

  id:any;
  data:any;

  getDetails(){
    this.id=this.route.snapshot.params["id"];
    this.data=this.districts.filter((d:any) => d.id == this.id)
  }

}





