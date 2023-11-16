const weatherBook = {
    "0": {
      day: {
        description: "Sunny",
        image: "https://media.tenor.com/ZGRxs0nSXccAAAAi/sunny-day-sunny.gif",
      },
      night: {
        description: "Clear",
        image: "http://openweathermap.org/img/wn/01n@2x.png",
      },
    },
    "1": {
      day: {
        description: "Mainly Sunny",
        image: "https://media.tenor.com/XImGzqlnkNIAAAAi/sun-smile.gif",
      },
      night: {
        description: "Mainly Clear",
        image: "https://media.tenor.com/XImGzqlnkNIAAAAi/sun-smile.gif",
      },
    },
    "2": {
      day: {
        description: "Partly Cloudy",
        image: "https://media2.giphy.com/media/TercUvhYRPkmkDUNZk/giphy.gif?cid=ecf05e4719okkramyieuctysikszpxop97koliehvieyleir&ep=v1_stickers_search&rid=giphy.gif&ct=s",
      },
      night: {
        description: "Partly Cloudy",
        image: "https://media2.giphy.com/media/TercUvhYRPkmkDUNZk/giphy.gif?cid=ecf05e4719okkramyieuctysikszpxop97koliehvieyleir&ep=v1_stickers_search&rid=giphy.gif&ct=s",
      },
    },
    "3": {
      day: {
        description: "Cloudy",
        image: "https://media.tenor.com/Twvtwo133j4AAAAi/blue-bird-white-cloud.gif",
      },
      night: {
        description: "Cloudy",
        image: "https://media.tenor.com/Twvtwo133j4AAAAi/blue-bird-white-cloud.gif",
      },
    },
    "45": {
        day: {
		description:"Foggy",
		image:"https://media.tenor.com/JxxiPL5nseoAAAAi/fog-jared-d-weiss.gif",
		},
		night:{
		description:"Foggy",
		image:"https://media.tenor.com/JxxiPL5nseoAAAAi/fog-jared-d-weiss.gif",
		}
	},
	"48":{
		day:{
			description:"Rime Fog",
			image:"https://media.tenor.com/VG90Z1py5OIAAAAi/jared-d-weiss-cute.gif",
		},
		night:{
			description:"Rime Fog",
			image:"https://media.tenor.com/VG90Z1py5OIAAAAi/jared-d-weiss-cute.gif",
		}
	},
	"51":{
		day:{
			description:"Light Drizzle",
			image:"https://media.tenor.com/ABaphGU3884AAAAi/rabbit-lady.gif",
		},
		night:{
			description:"Light Drizzle",
			image:"https://media.tenor.com/ABaphGU3884AAAAi/rabbit-lady.gif",
		}
	},
	"53":{
		day:{
			description:"Drizzle",
			image:"https://media.tenor.com/9ICfdZNSdWYAAAAi/gloomy-cloudy.gif",
		},
		night:{
			description:"Drizzle",
			image:"https://media.tenor.com/9ICfdZNSdWYAAAAi/gloomy-cloudy.gif",
		}
	},
	"55":{
		day:{
			description:"Heavy Drizzle",
			image:"https://media.tenor.com/yxs6gKztcuUAAAAi/kawaii-anime.gif",
		},
		night:{
			description:"Heavy Drizzle",
			image:"https://media.tenor.com/yxs6gKztcuUAAAAi/kawaii-anime.gif",
		}
	},
	"56":{
		day:{
			description:"Light Freezing Drizzle",
			image:"http://openweathermap.org/img/wn/09d@2x.png",
		},
		night:{
			description:"Light Freezing Drizzle",
			image:"https://media.tenor.com/Z7h6NeiNWtUAAAAi/mochi-cute.gif",
		}
	},
	"57":{
		day:{
			description:"Freezing Drizzle",
			image:"https://media.tenor.com/bnMi3fCFF-EAAAAi/bugcat-bugcatsticker.gif",
		},
		night:{
			description:"Freezing Drizzle",
			image:"https://media.tenor.com/bnMi3fCFF-EAAAAi/bugcat-bugcatsticker.gif",
		}
	},
	61:{
		day:{
			description:"Light Rain",
			image:"https://media.tenor.com/LiR8JTe18SgAAAAi/rain-together.gif",
		},
		night:{
			description:"Light Rain",
			image:"https://media.tenor.com/LiR8JTe18SgAAAAi/rain-together.gif",
		}
	},
	"63":{
		day:{
			description:"Rain",
			image:"https://media.tenor.com/n1Nabm58om8AAAAi/%E9%9B%A8%E3%81%AE%E6%97%A5-%E6%B3%A3%E3%81%8F.gif",
		},
		night:{
			description:"Rain",
			image:"https://media.tenor.com/n1Nabm58om8AAAAi/%E9%9B%A8%E3%81%AE%E6%97%A5-%E6%B3%A3%E3%81%8F.gif",
		}
	},
	"65":{
		day:{
			description:"Heavy Rain",
			image:"https://media.tenor.com/yxs6gKztcuUAAAAi/kawaii-anime.gif",
		},
		night:{
			description:"Heavy Rain",
			image:"https://media.tenor.com/yxs6gKztcuUAAAAi/kawaii-anime.gif",
		}
	},
	"66":{
		day:{
			description:"Light Freezing Rain",
			image:"https://media.tenor.com/zQ37Y9-wHQ8AAAAi/rain-shower-rainy.gif",
		},
		night:{
			description:"Light Freezing Rain",
			image:"https://media.tenor.com/zQ37Y9-wHQ8AAAAi/rain-shower-rainy.gif",
		}
	},
	"67":{
		day:{
			description:"Freezing Rain",
			image:"https://tenor.com/fr/view/shooky-bt21-sad-raining-wet-gif-14394461",
		},
		night:{
			description:"Freezing Rain",
			image:"https://tenor.com/fr/view/shooky-bt21-sad-raining-wet-gif-14394461",
		}
	},
	"71":{
		day:{
			description:"Light Snow",
			image:"https://media.tenor.com/RyRQXY7bsoMAAAAi/ton-ton-friends-snow.gif",
		},
		night:{
			description:"Light Snow",
			image:"https://media.tenor.com/RyRQXY7bsoMAAAAi/ton-ton-friends-snow.gif",
		}
	},
	"73":{
		day:{
			description:"Snow",
			image:"https://media.tenor.com/InSmGb6d5jgAAAAi/winter-snowman.gif",
		},
		night:{
			description:"Snow",
			image:"https://media.tenor.com/InSmGb6d5jgAAAAi/winter-snowman.gif",
		}
	},
	"75":{
		day:{
			description:"Heavy Snow",
			image:"https://media.tenor.com/sGEIOMo5LxoAAAAi/%E5%AF%92%E3%81%84-%E3%81%86%E3%81%95%E3%81%8E%E3%82%85%E3%83%BC%E3%82%93.gif",
		},
		night:{
			description:"Heavy Snow",
			image:"https://media.tenor.com/sGEIOMo5LxoAAAAi/%E5%AF%92%E3%81%84-%E3%81%86%E3%81%95%E3%81%8E%E3%82%85%E3%83%BC%E3%82%93.gif",
		}
	},
	"77":{
		day:{
			description:"Snow Grains",
			image:"https://media.tenor.com/F4rnDLHDETgAAAAi/snowflake-snow.gif",
		},
		night:{
			description:"Snow Grains",
			image:"https://media.tenor.com/F4rnDLHDETgAAAAi/snowflake-snow.gif",
		}
	},
	"80":{
		day:{
			description:"Light Showers",
			image:"https://media.tenor.com/925LDfyVUGEAAAAi/cute-sad.gif",
		},
		night:{
			description:"Light Showers",
			image:"https://media.tenor.com/925LDfyVUGEAAAAi/cute-sad.gif",
		}
	},
	"81":{
		day:{
			description:"Showers",
			image:"https://media.tenor.com/ZscD0O9mTM4AAAAi/tears-hurt.gif",
		},
		night:{
			description:"Showers",
			image:"https://media.tenor.com/ZscD0O9mTM4AAAAi/tears-hurt.gif",
		}
	},
	"82":{
		day:{
			description:"Heavy Showers",
			image:"https://media.tenor.com/ZVMeEFft97cAAAAi/shrimp-umbrella.gif",
		},
		night:{
			description:"Heavy Showers",
			image:"https://media.tenor.com/ZVMeEFft97cAAAAi/shrimp-umbrella.gif",
		}
	},
	"85":{
		day:{
			description:"Light Snow Showers",
			image:"https://media.tenor.com/mjv1yZwtD8sAAAAi/snow-clad-snow.gif",
		},
		night:{
			description:"Light Snow Showers",
			image:"https://media.tenor.com/mjv1yZwtD8sAAAAi/snow-clad-snow.gif",
		}
	},
	"86":{
		day:{
			description:"Snow Showers",
			image:"https://media.tenor.com/tWMMG7AdAEQAAAAi/snow.gif",
		},
		night:{
			description:"Snow Showers",
			image:"https://media.tenor.com/tWMMG7AdAEQAAAAi/snow.gif",
		}
	},
	"95":{
		day:{
			description:"Thunderstorm",
			image:"https://media.tenor.com/sFLLScan73AAAAAi/white-cloud-gray.gif",
		},
		night:{
			description:"Thunderstorm",
			image:"https://media.tenor.com/sFLLScan73AAAAAi/white-cloud-gray.gif",
		}
	},
	"96":{
		day:{
			description:"Light Thunderstorms With Hail",
			image:"https://media.tenor.com/kSCZ66oV1pkAAAAi/lightning.gif",
		},
		night:{
			description:"Light Thunderstorms With Hail",
			image:"https://media.tenor.com/kSCZ66oV1pkAAAAi/lightning.gif",
		}
	},
	"99":{
		day:{
			description:"Thunderstorm With Hail",
			image:"https://media.tenor.com/dq0T-6LHGOwAAAAi/bad-weather-bad-weathers.gif",
		},
		night:{
			description:"Thunderstorm With Hail",
			image:"https://media.tenor.com/dq0T-6LHGOwAAAAi/bad-weather-bad-weathers.gif",
		}
	}
    
  };
  
  export default weatherBook;
  