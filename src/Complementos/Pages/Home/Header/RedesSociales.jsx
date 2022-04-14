
import React from 'react';
import Typewriter from "typewriter-effect";

export const RedesSocualesApp = () => {
	
return (
	<div className="RedesSociales">
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
	.pauseFor(1000)
	.typeString("facebook.com/theerudito1")
	.pauseFor(1000)
	.deleteAll()
  .typeString("instragram.com/theerudito")
  .pauseFor(1000)
	.deleteAll()
  .typeString("twitter.com/theerudito")
  .pauseFor(1000)
  .deleteAll()
	.start();
	}}
	/>
	</div>
);
}
