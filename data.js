var APP_DATA = {
  "scenes": [
    {
      "id": "0-display-wall",
      "name": "DISPLAY WALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6767769554699905,
          "pitch": 0.5449243869482672,
          "rotation": 4.71238898038469,
          "target": "1-journey-wall"
        },
        {
          "yaw": 1.8912866991882673,
          "pitch": 0.2722584154496488,
          "rotation": 0.7853981633974483,
          "target": "2-vr-zone"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-journey-wall",
      "name": "JOURNEY WALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.008882068956239664,
          "pitch": 0.3551026297135387,
          "rotation": 0,
          "target": "0-display-wall"
        },
        {
          "yaw": 2.752250036370828,
          "pitch": 0.3468810308119359,
          "rotation": 7.0685834705770345,
          "target": "2-vr-zone"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vr-zone",
      "name": "VR ZONE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2126466458309864,
          "pitch": 0.24912344337889536,
          "rotation": 0,
          "target": "0-display-wall"
        },
        {
          "yaw": 2.5635650938456607,
          "pitch": 0.322030060171798,
          "rotation": 1.5707963267948966,
          "target": "1-journey-wall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NTPC 360°",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
