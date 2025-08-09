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
    "Morgan Freeman",
    "/snoop.jpg",
    "/output.wav",
    true
  ),
  new Cassette(
    2,
    "Winona Ryder",
    "/snoop.jpg"
  ),
  new Cassette(
    3,
    "Will Smith",
    "/snoop.jpg"
  ),
  new Cassette(
    4,
    "Tiffani Thiessen",
    "/snoop.jpg"
  ),
  new Cassette(
    5,
    "Kurt Cobain",
    "/snoop.jpg"
  ),
  new Cassette(
    6,
    "Sarah Michelle Gellar",
    "/snoop.jpg"
  ),
  new Cassette(
    7,
    "Leonardo DiCaprio",
    "/snoop.jpg"
  ),
  new Cassette(
    8,
    "Beep Test",
    null,
    "/beeptest.mp3",
    true

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