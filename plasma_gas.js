{
  "elements": {
    "ultra_plasma_gas": {
      "color": ["#ff00ff", "#ff6600", "#ffffff"],
      "behavior": [
        "M2|M1|M2",
        "M1|XX|M1",
        "M2|M1|M2"
      ],
      "category": "gases",
      "state": "gas",
      "density": 0.0001,
      "temp": 10000000000,
      "tempLow": -273,
      "stateLow": "liquid_fire",
      "conduct": 1,
      "burn": 999,
      "burnTime": 9999,
      "fireColor": ["#ff00ff", "#00ffff", "#ffffff"],
      "glow": true,
      "reactions": {
        "water": {
          "elem1": "explosion",
          "elem2": "steam"
        }
      }
    }
  }
}