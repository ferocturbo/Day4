import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css'
})
export class DistrictsComponent {
  districts:any= [
    {
        id:1,
        title:"Tvm",
        image:"https://www.shutterstock.com/image-vector/thiruvananthapuram-city-name-written-malayalam-600w-2120225195.jpg"
    },
    {
      id:2,
        title:"kollam",
        image:"https://www.shutterstock.com/image-vector/malayalam-typography-letter-style-translated-260nw-2371686043.jpg"
    },
    {
      id:3,
        title:"kottyam",
        image:"https://www.shutterstock.com/image-vector/malayalam-typography-letter-style-translated-260nw-2371686421.jpg"
    },
    {
      id:4,
        title:"alappuzha",
        image:"https://www.shutterstock.com/image-vector/malayalam-typography-letter-style-translated-600nw-2371685237.jpg"
    },
    {
      id:5,
        title:"kannur",
        image:"https://www.shutterstock.com/image-vector/malayalam-typography-letter-style-translated-600nw-2371685923.jpg"
    },
    {
      id:6,
          title:"kasargod",
          image:"https://www.shutterstock.com/image-vector/malayalam-typography-letter-style-translated-260nw-2371685539.jpg"
      },
      {
        id:7,
            title:"wayanad",
            image:"https://mir-s3-cdn-cf.behance.net/projects/404/71b56b156231793.Y3JvcCwzMTczLDI0ODIsMTY0LDA.jpg"
        },
        {
          id:8,
              title:"Ernakulam",
              image:"https://www.shutterstock.com/image-vector/malayalam-calligraphy-letter-translated-kasargod-260nw-2053233008.jpg"
          },
          {
            id:9,
                title:"pathanamthitta",
                image:"https://t3.ftcdn.net/jpg/05/60/38/26/360_F_560382645_ztWbFxWDc2xBKYSg5yyJSsYInbKY9Bgm.jpg"
            },
            {
              id:10,
                  title:"kozhikkod",
                  image:"https://www.shutterstock.com/image-vector/malayalam-calligraphy-letter-style-translated-260nw-2313032249.jpg"
              },{
                id:11,
                    title:"palakkadu",
                    image:"https://www.shutterstock.com/image-vector/malayalam-typography-letter-style-translated-260nw-2366700247.jpg"
                },
                {
                  id:12,
                      title:"thrissur",
                      image:"https://www.shutterstock.com/image-vector/malayalam-typography-letter-style-translated-260nw-2371686597.jpg"
                  },{
                    id:13,
                        title:"malappuram",
                        image:"https://www.shutterstock.com/image-vector/malayalam-calligraphy-letter-translated-malappuram-260nw-2053233578.jpg"
                    },{
                      id:14,
                          title:"idukki",
                          image:"https://mir-s3-cdn-cf.behance.net/projects/404/9a57a1141779685.Y3JvcCwyNTU2LDIwMDAsNTAwLDA.jpg"
                      }
    ];

}
