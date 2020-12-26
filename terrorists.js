import React from 'react';
import '../App.css';
import glockimg from './glock.png'
import ak47 from './ak-47.png'
import sg553 from './sg553.png'
import tec9 from './tec-9.png'
import molotov from './molotov.png'
import galil from './galil.png'
import sawed from './sawed.png'
import c4 from './c4.png'


function Terrorists() {
	return(
     <div className="Terrorists">
     <h1>Terrorists</h1>
     <h4>Terrorists in cs go Terrorists in the game play the role of villains striving to establish their own order and domination throughout the world. ... When the game scenario is executed , the terrorists automatically win , even if the special forces unit was not destroyed on the map.</h4>
     
     <div className="Gunstr">

     <div id="lblock"><img src={glockimg}/></div>
     <div id="bblock">
     <ul>
     <li>Name : Glock18</li>
     <li>Damage : 30</li>
     <li>Price : 200$</li>
     <li>Rate of fire : 400/1200</li>
     <li>Reload time : 2.2s</li>
     <li>Magazine capacity : 20/120</li>
     </ul>
     </div>


     <div id="lblock"><img src={ak47}/></div>
     <div id="bblock">
      <ul>
     <li>Name : AK-47</li>
     <li>Damage : 36</li>
     <li>Price : 2 700$</li>
     <li>Rate of fire : 600</li>
     <li>Reload time : 2.5s</li>
     <li>Magazine capacity : 30/90</li>
     </ul>
     </div>


     <div id="lblock"><img  src={sg553}/></div>
     <div id="bblock">
      <ul>
     <li>Name : SG 553</li>
     <li>Damage : 30</li>
     <li>Price : 3000$</li>
     <li>Rate of fire : 543</li>
     <li>Reload time : 2.8s</li>
     <li>Magazine capacity : 30/90</li>
     </ul>
     </div>


     <div id="lblock"><img src={tec9}/></div>
     <div id="bblock">
      <ul>
     <li>Name : Tec-9</li>
     <li>Damage : 33</li>
     <li>Price : 500$</li>
     <li>Rate of fire : 500</li>
     <li>Reload time : 2.5s</li>
     <li>Magazine capacity : 18,(24),{32}/90</li>
     </ul>
     </div>


     <div id="lblock"><img src={molotov}/></div>
     <div id="bblock">
     <ul>
     <li>Name : Molotov</li>
     <li>Class : grenade</li>	 	
     <li>Price : 400$</li>
     </ul>
     </div>


     <div id="lblock"><img src={galil}/></div>
     <div id="bblock">
      <ul>
     <li>Name : Galill gun</li>
     <li>Damage : 30</li>
     <li>Price : 1 800$</li>
     <li>Rate of fire : 666</li>
     <li>Reload time : 3s</li>
     <li>Magazine capacity : 35/90</li>
     </ul>
     </div>


     <div id="lblock"><img src={sawed}/></div>
     <div id="bblock">
        <ul>
     <li>Name : Sawed-off</li>
     <li>Damage : 256(32 one shot)</li>
     <li>Price : 1 100$</li>
     <li>Rate of fire : 71</li>
     <li>Reload time : 3.2s/0.4s</li>
     <li>Magazine capacity : 7/32</li>
     </ul>
     </div>


     <div id="lblock"><img src={c4}/></div>
     <div id="">
     <ul><li>Class : Equipment</li></ul></div>


     </div>

     </div> 
    

		)
}

export default Terrorists;