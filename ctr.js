import React from 'react'
import '../App.css';
import m4a1 from './m4a1.png'
import m4a4 from './M4A4.png'
import aug from './aug.png'
import mag7 from './mag7.png'
import scar20 from './scar20.png'
import usp from './usp.png'
import five7 from './Fiveseven.png'
import famas from './famas.png'



function Ctr(){
	return(
	<div className="Ctr">
    <h1>Special fources</h1>
    <h4>Playing for special forces is an extremely responsible and dangerous task that requires you to make the right decisions as quickly as possible on which not only your lives, the lives of your comrades, but also the lives of the hostages often depend. When choosing this command, be prepared for the fact that you have to make critical decisions in the shortest possible time and read the enemy in the game.
</h4>
	


	<div className="Gunsctr">
    <div id="lblock"><img src={m4a1}/></div>
    <div id="bblock">
    <ul>
     <li>Name : m4A1-s</li>
     <li>Damage : 33</li>
     <li>Price : 2900$</li>
     <li>Rate of fire : 600</li>
     <li>Reload time : 3.1s</li>
     <li>Magazine capacity : 25/75</li>
     </ul>
     </div>


    <div id="lblock"><img id="mka" src={m4a4}/></div>
    <div id="bblock">
    <ul>
     <li>Name : m4A4</li>
     <li>Damage : 33</li>
     <li>Price : 3100$</li>
     <li>Rate of fire : 666</li>
     <li>Reload time : 3.1s</li>
     <li>Magazine capacity : 30/90</li>
     </ul>
     </div>


    <div id="lblock"><img src={aug}/></div>
    <div id="bblock">
     <ul>
     <li>Name : AUG</li>
     <li>Damage : 28</li>
     <li>Price : 3300$</li>
     <li>Rate of fire : 600</li>
     <li>Reload time : 3.8s</li>
     <li>Magazine capacity : 30/90</li>
     </ul>
    </div>
    <div id="lblock"><img id="mg7" src={mag7}/></div>
    <div id="bblock">
    <ul>
     <li>Name : Mag-7</li>
     <li>Damage : 440/20</li>
     <li>Price : 1300$</li>
     <li>Rate of fire : 71</li>
     <li>Reload time : 2.4s</li>
     <li>Magazine capacity : 25/32</li>
     </ul>
    </div>
    <div id="lblock"><img src={scar20}/></div>
    <div id="bblock"> 
    <ul>
     <li>Name : Mag-7</li>
     <li>Damage : 80</li>
     <li>Price : 5000$</li>
     <li>Rate of fire : 240</li>
     <li>Reload time : 2.4s</li>
     <li>Magazine capacity : 20/90</li>
     </ul>
    </div>

    

    <div id="lblock"><img src={famas}/></div>
    <div id="bblock">
      <ul>
     <li>Name : famas</li>
     <li>Damage : 30</li>
     <li>Price : 2050$</li>
     <li>Rate of fire : 666/800</li>
     <li>Reload time : 3.3s</li>
     <li>Magazine capacity : 25/90</li>
     </ul>
    </div>


    <div id="lblock"><img src={five7}/></div>
    <div id="bblock">
      <ul>
     <li>Name : p2000</li>
     <li>Damage : 35</li>
     <li>Price : 200$</li>
     <li>Rate of fire : 352</li>
     <li>Reload time : 2.4s</li>
     <li>Magazine capacity : 13/52</li>
     </ul>
    </div>
    






	</div>
	</div>
	)
}



export default Ctr;