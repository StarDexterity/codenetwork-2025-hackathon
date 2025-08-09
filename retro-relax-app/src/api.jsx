import React, { useEffect, useState } from "react"

export class Cassette {
  constructor(cassetteId, title, image, soundUrl = null, isEnabled = false) {
    this.cassetteId = cassetteId
    this.title = title
    this.image = image
    this.soundUrl = soundUrl
    this.isEnabled = isEnabled
  }
}

const CASSETTE_DATA = [
  new Cassette(
    1,
    "Golden Hits 90s",
    "https://via.placeholder.com/150?text=Golden+Hits+90s",
    null,
    true
  ),
  new Cassette(
    2,
    "Retro Vibes",
    "https://via.placeholder.com/150?text=Retro+Vibes"
  ),
  new Cassette(
    3,
    "Mixtape Classics",
    "https://via.placeholder.com/150?text=Mixtape+Classics"
  ),
];

export function FetchCassetes() {
     return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...CASSETTE_DATA]); // return copy of the list
    }, 500);
  });
}

export function GetCasseteSound(casseteId) {

}

/*
  // Example of a real API GET request
  return fetch(`https://api.example.com/cassettes/${cassetteId}/sound`)
    .then((res) => res.json());
  */