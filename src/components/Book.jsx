import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";

function Book() {
  const pokemonData = [
    {
      id: "006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      description: "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes."
    },
    {
      id: "025",
      name: "Pikachu",
      types: ["Electric"],
      description: "When Pikachu meet, they touch tails to exchange electricity as a greeting."
    },
    {
      id: "125",
      name: "Electabuzz",
      types: ["Electric"],
      description: "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms."
    },
    {
      id: "185",
      name: "Sudowoodo",
      types: ["Rock"],
      description: "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains."
    },
    {
      id: "448",
      name: "Lucario",
      types: ["Fighting", "Steel"],
      description: "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario."
    },
    {
      id: "658",
      name: "Greninja",
      types: ["Water", "Dark"],
      description: "Creates throwing stars from compressed water that can slice through metal when thrown at high speed."
    },
    {
      id: "491",
      name: "Darkrai",
      types: ["Dark"],
      description: "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares."
    }
  ];

  return (
    <div className='site'>
      <p>Der is nog nen achterkant :p</p>

      <HTMLFlipBook width={370} height={500} maxShadowOpacity={0.5} drawShadow={true} showCover={true} size="fixed">
        <div className="page" style={{ background: "transparent" }}>
          <div className="page-content cover">
            <img src="/assets/kot-koffietafel-p1.jpg" alt="Pokémon Logo" className="pokemon-logo" />
          </div>
        </div>

        <div className="page">
          <div className="page-content cover">
            <img src="/assets/kot-koffietafel-p2.jpg" alt="Pokémon Logo" className="pokemon-logo" />
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Book