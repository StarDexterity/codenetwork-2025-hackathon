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
    null,
    true
  ),
  new Cassette(
    2,
    "Morgan Freeman",
    "/snoop.jpg"
  ),
  new Cassette(
    3,
    "Morgan Freeman",
    "/snoop.jpg"
  ),
  new Cassette(
    4,
    "Morgan Freeman",
    "/snoop.jpg"
  ),
  new Cassette(
    5,
    "Morgan Freeman",
    "/snoop.jpg"
  ),
  new Cassette(
    6,
    "Morgan Freeman",
    "/snoop.jpg"
  ),
  new Cassette(
    7,
    "Morgan Freeman",
    "/snoop.jpg"
  ),
  new Cassette(
    8,
    "Morgan Freeman",
    "/snoop.jpg"
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